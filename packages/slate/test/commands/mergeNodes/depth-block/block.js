/** @jsx jsx */

import { jsx } from '../../../helpers'

export const input = (
  <value>
    <block>one</block>
    <block>two</block>
  </value>
)

export const run = editor => {
  editor.mergeNodes({ at: { path: [1, 0], offset: 0 }, match: 'block' })
}

export const output = (
  <value>
    <block>onetwo</block>
  </value>
)
