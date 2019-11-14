/** @jsx jsx */

import { jsx } from 'slate-hyperscript'

export const input = (
  <value>
    <element>
      one<annotation key="a">two</annotation>three
    </element>
  </value>
)

export const output = {
  children: [
    {
      children: [
        {
          text: 'onetwothree',
          marks: [],
        },
      ],
    },
  ],
  selection: null,
  annotations: {
    a: {
      anchor: {
        path: [0, 0],
        offset: 3,
      },
      focus: {
        path: [0, 0],
        offset: 6,
      },
    },
  },
}
