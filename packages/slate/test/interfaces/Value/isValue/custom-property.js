import { Value } from 'slate'

export const input = {
  children: [],
  selection: null,
  annotations: {},
  custom: true,
}

export const test = value => {
  return Value.isValue(value)
}

export const output = true
