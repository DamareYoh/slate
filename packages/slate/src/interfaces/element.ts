import { produce } from 'immer'
import isPlainObject from 'is-plain-object'
import { Node, Path, Text } from '..'

/**
 * `Element` objects are a type of node in a Slate document that contain other
 * element nodes or text nodes. They can be either "blocks" or "inlines"
 * depending on the Slate editor's schema.
 */

interface Element {
  nodes: Node[]
}

/**
 * `ElementEntry` objects refer to an `Element` and the `Path` where it can be
 * found inside a root node.
 */

type ElementEntry = [Element, Path]

namespace Element {
  /**
   * Check if a value implements the `Element` interface.
   */

  export const isElement = (value: any): value is Element => {
    return isPlainObject(value) && Node.isNodeList(value.nodes)
  }

  /**
   * Check if a value is an array of `Element` objects.
   */

  export const isElementList = (value: any): value is Element[] => {
    return (
      Array.isArray(value) &&
      (value.length === 0 || Element.isElement(value[0]))
    )
  }
}

export { Element, ElementEntry }
