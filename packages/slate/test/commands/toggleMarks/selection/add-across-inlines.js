/** @jsx jsx */

import { jsx } from '../../../helpers'

export const run = editor => {
  editor.toggleMarks([{ key: 'a' }])
}

export const input = (
  <value>
    <block>
      <text />
      <inline>
        wo
        <anchor />
        rd
      </inline>
      <text />
    </block>
    <block>
      <text />
      <inline>
        an
        <focus />
        other
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
        wo
        <mark key="a">
          <anchor />
          rd
        </mark>
      </inline>
      <mark key="a" />
    </block>
    <block>
      <mark key="a" />
      <inline>
        <mark key="a">an</mark>
        <focus />
        other
      </inline>
      <text />
    </block>
  </value>
)
