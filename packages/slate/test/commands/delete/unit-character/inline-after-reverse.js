/** @jsx jsx */

import { jsx } from '../../../helpers'

export const run = editor => {
  editor.delete({ unit: 'character', reverse: true })
}

export const input = (
  <value>
    <block>
      one
      <inline>two</inline>
      a<cursor />
    </block>
  </value>
)

export const output = (
  <value>
    <block>
      one
      <inline>two</inline>
      <cursor />
    </block>
  </value>
)
