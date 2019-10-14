/** @jsx h */

import h from 'slate-hyperscript'

export const input = (
  <value>
    <element>
      <element>one</element>
      <element>
        <text />
        <element>
          <text />
          <element>two</element>
          <text />
        </element>
        <text />
      </element>
    </element>
  </value>
)

export const output = `
one
two
`.trim()
