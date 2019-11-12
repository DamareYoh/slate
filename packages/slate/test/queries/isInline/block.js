/** @jsx jsx */

import { jsx } from '../../helpers'

export const input = (
  <value>
    <block>one</block>
  </value>
)

export const run = editor => {
  const block = editor.value.nodes[0]
  return editor.isInline(block)
}

export const output = false
