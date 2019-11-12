/** @jsx jsx */

import { jsx } from '../../../helpers'

export const run = editor => {
  editor.setNodes({ key: true }, { match: 'inline' })
}

export const input = (
  <value>
    <block>
      <text />
      <inline>
        <anchor />word
      </inline>
      <text />
    </block>
    <block>
      <text />
      <inline>
        another<focus />
      </inline>
      <text />
    </block>
  </value>
)

export const output = (
  <value>
    <block>
      <text />
      <inline key>
        <anchor />word
      </inline>
      <text key />
    </block>
    <block>
      <text key />
      <inline key>
        another<focus />
      </inline>
      <text />
    </block>
  </value>
)
