/** @jsx h */

import h from 'slate-hyperscript'

export const input = (
  <value>
    <element>
      <element>
        wo<cursor />rd
      </element>
    </element>
  </value>
)

export const output = {
  nodes: [
    {
      nodes: [
        {
          nodes: [
            {
              text: 'word',
              marks: [],
            },
          ],
        },
      ],
    },
  ],
  selection: {
    anchor: {
      path: [0, 0, 0],
      offset: 2,
    },
    focus: {
      path: [0, 0, 0],
      offset: 2,
    },
    isFocused: true,
    marks: null,
  },
  annotations: {},
}
