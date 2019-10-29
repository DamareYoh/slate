import babel from 'rollup-plugin-babel'
import builtins from 'rollup-plugin-node-builtins'
import commonjs from 'rollup-plugin-commonjs'
import globals from 'rollup-plugin-node-globals'
import json from 'rollup-plugin-json'
import replace from 'rollup-plugin-replace'
import resolve from 'rollup-plugin-node-resolve'
import typescript from 'rollup-plugin-typescript2'
import uglify from 'rollup-plugin-uglify'
import { startCase } from 'lodash'

import core from '../../packages/slate/package.json'
import base64Serializer from '../../packages/slate-base64-serializer/package.json'
import devEnvironment from '../../packages/slate-dev-environment/package.json'
import history from '../../packages/slate-history/package.json'
import hotkeys from '../../packages/slate-hotkeys/package.json'
import htmlSerializer from '../../packages/slate-html-serializer/package.json'
import hyperscript from '../../packages/slate-hyperscript/package.json'
import parsePlaintext from '../../packages/slate-parse-plaintext/package.json'
import plainSerializer from '../../packages/slate-plain-serializer/package.json'
import propTypes from '../../packages/slate-prop-types/package.json'
import react from '../../packages/slate-react/package.json'
import reactPlaceholder from '../../packages/slate-react-placeholder/package.json'
import renderPlaintext from '../../packages/slate-render-plaintext/package.json'

/**
 * Return a Rollup configuration for a `pkg` with `env` and `target`.
 *
 * @param {Object} pkg
 * @param {String} env
 * @param {String} format
 * @return {Object}
 */

function configure(pkg, env, target, { ts }) {
  const isProd = env === 'production'
  const isUmd = target === 'umd'
  const isModule = target === 'module'
  const input = `packages/${pkg.name}/src/index.${ts ? 'ts' : 'js'}`
  const deps = []
    .concat(pkg.dependencies ? Object.keys(pkg.dependencies) : [])
    .concat(pkg.peerDependencies ? Object.keys(pkg.peerDependencies) : [])

  // Stop Rollup from warning about circular dependencies.
  const onwarn = warning => {
    if (warning.code !== 'CIRCULAR_DEPENDENCY') {
      console.warn(`(!) ${warning.message}`) // eslint-disable-line no-console
    }
  }

  const plugins = [
    // Allow Rollup to resolve modules from `node_modules`, since it only
    // resolves local modules by default.
    resolve({
      browser: true,
    }),

    ts &&
      typescript({
        abortOnError: false,
        tsconfig: `./packages/${pkg.name}/tsconfig.json`,
      }),

    // Allow Rollup to resolve CommonJS modules, since it only resolves ES2015
    // modules by default.
    commonjs({
      exclude: [`packages/${pkg.name}/src/**`],
      // HACK: Sometimes the CommonJS plugin can't identify named exports, so
      // we have to manually specify named exports here for them to work.
      // https://github.com/rollup/rollup-plugin-commonjs#custom-named-exports
      namedExports: {
        esrever: ['reverse'],
        immutable: [
          'List',
          'Map',
          'Record',
          'OrderedSet',
          'Set',
          'Stack',
          'is',
        ],
        'react-dom': ['findDOMNode'],
        'react-dom/server': ['renderToStaticMarkup'],
      },
    }),

    // Convert JSON imports to ES6 modules.
    json(),

    // Replace `process.env.NODE_ENV` with its value, which enables some modules
    // like React and Slate to use their production variant.
    replace({
      'process.env.NODE_ENV': JSON.stringify(env),
    }),

    // Register Node.js builtins for browserify compatibility.
    builtins(),

    // Use Babel to transpile the result, limiting it to the source code.
    babel({
      runtimeHelpers: true,
      include: [`packages/${pkg.name}/src/**`],
      extensions: ['.js', '.ts'],
      // configFile: '../../babel.config.js',
    }),

    // Register Node.js globals for browserify compatibility.
    globals(),

    // Only minify the output in production, since it is very slow. And only
    // for UMD builds, since modules will be bundled by the consumer.
    isUmd && isProd && uglify(),
  ].filter(Boolean)

  if (isUmd) {
    return {
      plugins,
      input,
      // onwarn,
      output: {
        format: 'umd',
        file: `packages/${pkg.name}/${isProd ? pkg.umdMin : pkg.umd}`,
        exports: 'named',
        name: startCase(pkg.name).replace(/ /g, ''),
        globals: pkg.umdGlobals,
      },
      external: Object.keys(pkg.umdGlobals || {}),
    }
  }

  if (isModule) {
    return {
      plugins,
      input,
      // onwarn,
      output: [
        {
          file: `packages/${pkg.name}/${pkg.module}`,
          format: 'es',
          sourcemap: true,
        },
        {
          file: `packages/${pkg.name}/${pkg.main}`,
          format: 'cjs',
          exports: 'named',
          sourcemap: true,
        },
      ],
      // We need to explicitly state which modules are external, meaning that
      // they are present at runtime. In the case of non-UMD configs, this means
      // all non-Slate packages.
      external: id => {
        return !!deps.find(dep => dep === id || id.startsWith(`${dep}/`))
      },
    }
  }
}

/**
 * Return a Rollup configuration for a `pkg`.
 *
 * @return {Array}
 */

function factory(pkg, options = {}) {
  const isProd = process.env.NODE_ENV === 'production'
  return [
    configure(pkg, 'development', 'module', options),
    isProd && configure(pkg, 'development', 'umd', options),
    isProd && configure(pkg, 'production', 'umd', options),
  ].filter(Boolean)
}

/**
 * Config.
 */

export default [
  ...factory(core, { ts: true }),
  ...factory(base64Serializer),
  ...factory(devEnvironment),
  ...factory(history, { ts: true }),
  ...factory(hotkeys),
  ...factory(htmlSerializer),
  ...factory(hyperscript, { ts: true }),
  ...factory(plainSerializer),
  ...factory(parsePlaintext, { ts: true }),
  ...factory(propTypes),
  ...factory(react),
  ...factory(reactPlaceholder),
  ...factory(renderPlaintext, { ts: true }),
]
