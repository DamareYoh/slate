/** @jsx jsx */

import { jsx } from '../../../helpers'

export const input = (
  <value>
    <block>one</block>
    <block>two</block>
    <block>three</block>
  </value>
)

export const run = editor => {
  return Array.from(editor.matches({ at: [], match: 1 }))
}

export const output = [
  [<block>one</block>, [0]],
  [<block>two</block>, [1]],
  [<block>three</block>, [2]],
]
