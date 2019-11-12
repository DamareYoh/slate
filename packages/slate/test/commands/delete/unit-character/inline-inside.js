/** @jsx jsx */

import { jsx } from '../../../helpers'

export const run = editor => {
  editor.delete()
}

export const input = (
  <value>
    <block>
      one
      <inline>
        <cursor />a
      </inline>
      two
    </block>
  </value>
)

export const output = (
  <value>
    <block>
      one
      <inline>
        <cursor />
      </inline>
      two
    </block>
  </value>
)
