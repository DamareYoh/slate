/** @jsx jsx */

import { jsx } from '../../../helpers'

export const run = editor => {
  editor.splitNodes({ match: 'inline' })
}

export const input = (
  <value>
    <block>
      <text />
      <inline>
        <mark key="a">
          wo<cursor />rd
        </mark>
      </inline>
      <text />
    </block>
  </value>
)

export const output = (
  <value>
    <block>
      <text />
      <inline>
        <mark key="a">wo</mark>
      </inline>
      <text />
      <inline>
        <mark key="a">
          <cursor />rd
        </mark>
      </inline>
      <text />
    </block>
  </value>
)
