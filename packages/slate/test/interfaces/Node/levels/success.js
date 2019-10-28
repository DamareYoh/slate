/** @jsx h  */

import { Node } from 'slate'
import h from 'slate-hyperscript'

export const input = (
  <value>
    <element>
      <text />
    </element>
  </value>
)

export const test = value => {
  return Array.from(Node.levels(value, [0, 0]))
}

export const output = [
  [input, []],
  [input.nodes[0], [0]],
  [input.nodes[0].nodes[0], [0, 0]],
]
