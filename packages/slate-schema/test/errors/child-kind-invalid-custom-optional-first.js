/** @jsx jsx */

import { jsx } from '../../helpers'

export const schema = {
  blocks: {
    paragraph: {},
    quote: {
      nodes: [
        {
          match: [{ object: 'block', type: 'image' }],
          min: 0,
          max: 1,
        },
        {
          match: [{ object: 'block', type: 'paragraph' }],
          min: 1,
        },
      ],
      normalize: (editor, { code, path }) => {
        if (code === 'child_object_invalid') {
          editor.wrapBlockByPath(path, 'paragraph')
        }
      },
    },
  },
}

export const input = (
  <value>
    <document>
      <quote>text</quote>
    </document>
  </value>
)

export const output = (
  <value>
    <document>
      <quote>
        <block>text</block>
      </quote>
    </document>
  </value>
)
