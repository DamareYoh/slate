/** @jsx jsx */

import { jsx } from 'slate-hyperscript'

export const input = (
  <value>
    <element>
      <text>
        <cursor />
      </text>
    </element>
  </value>
)

export const output = {
  children: [
    {
      children: [
        {
          text: '',
          marks: [],
        },
      ],
    },
  ],
  selection: {
    anchor: {
      path: [0, 0],
      offset: 0,
    },
    focus: {
      path: [0, 0],
      offset: 0,
    },
  },
  annotations: {},
}
