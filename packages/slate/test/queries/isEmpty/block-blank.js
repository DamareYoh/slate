/** @jsx jsx */

import { jsx } from '../../helpers'

export const input = (
  <value>
    <block>
      <text />
    </block>
  </value>
)

export const run = editor => {
  const block = editor.value.children[0]
  return editor.isEmpty(block)
}

export const output = true
