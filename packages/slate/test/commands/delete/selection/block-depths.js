/** @jsx jsx */

import { jsx } from '../../../helpers'

export const run = editor => {
  editor.delete()
}

export const input = (
  <value>
    <block>
      wo<anchor />rd
    </block>
    <block>
      <block>middle</block>
      <block>
        an<focus />other
      </block>
    </block>
  </value>
)

export const output = (
  <value>
    <block>
      wo<cursor />other
    </block>
  </value>
)
