const package = require("./package.json");

module.exports = {
  src: ["./src"],
  out: `../../docs/api/${package.name}`,
  exclude: "**/*.spec.ts",
  target: "es6",
  name: `${package.name}`,
  readme: "Readme.md",
  mode: "file",
  excludeExternals: true,
  excludeNotExported: true,
  excludePrivate: true,
};