import isPlainObject from 'is-plain-object'
import { Node, Path, Value } from '..'

/**
 * `Element` objects are a type of node in a Slate document that contain other
 * element nodes or text nodes. They can be either "blocks" or "inlines"
 * depending on the Slate editor's schema.
 */

export interface Element {
  children: Node[]
  [key: string]: any
}

export namespace Element {
  /**
   * Check if a value implements the `Element` interface.
   */

  export const isElement = (value: any): value is Element => {
    return (
      isPlainObject(value) &&
      Node.isNodeList(value.children) &&
      !Value.isValue(value)
    )
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

  /**
   * Check if an element matches set of properties.
   *
   * Note: the is for checking custom properties, and it does not ensure that
   * any children in the `children` property are equal.
   */

  export const matches = (
    element: Element,
    props: Partial<Element>
  ): boolean => {
    for (const key in props) {
      if (key === 'children') {
        continue
      }

      if (element[key] !== props[key]) {
        return false
      }
    }

    return true
  }
}

/**
 * `ElementEntry` objects refer to an `Element` and the `Path` where it can be
 * found inside a root node.
 */

export type ElementEntry = [Element, Path]
