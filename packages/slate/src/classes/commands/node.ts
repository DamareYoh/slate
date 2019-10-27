import {
  Descendant,
  Editor,
  Node,
  NodeEntry,
  Element,
  Location,
  Path,
  Text,
  Range,
  Point,
} from '../..'

type MatchOption =
  | number
  | 'value'
  | 'block'
  | 'inline'
  | 'text'
  | Partial<Node>
  | ((entry: NodeEntry) => boolean)

class NodeCommands {
  /**
   * Insert nodes at a specific location in the editor.
   */

  insertNodes(
    this: Editor,
    nodes: Node | Node[],
    options: {
      at?: Location
      match?: MatchOption
    } = {}
  ) {
    this.withoutNormalizing(() => {
      const { selection } = this.value
      let { at, match } = options
      let select = false

      if (Node.isNode(nodes)) {
        nodes = [nodes]
      }

      if (nodes.length === 0) {
        return
      }

      const [node] = nodes

      // If the match isn't explicitly set, infer it from the node.
      if (match == null) {
        if (Text.isText(node)) {
          match = 'text'
        } else if (this.isInline(node)) {
          match = 'inline'
        } else {
          match = 'block'
        }
      }

      // By default, use the selection as the target location. But if there is
      // no selection, insert at the end of the document since that is such a
      // common use case when inserting from a non-focused state.
      if (!at) {
        at = selection || this.getEnd() || [this.value.nodes.length]
        select = true
      }

      if (Range.isRange(at)) {
        if (Range.isCollapsed(at)) {
          at = at.anchor
        } else {
          const [, end] = Range.points(at)
          const pointRef = this.createPointRef(end)
          this.delete({ at })
          at = pointRef.unref()!
        }
      }

      if (Point.isPoint(at)) {
        const atMatch = this.getMatch(at.path, match)

        if (atMatch) {
          const [, matchPath] = atMatch
          const pathRef = this.createPathRef(matchPath)
          const isAtEnd = this.isAtEnd(at, matchPath)
          this.splitNodes({ at, match, always: false })
          const path = pathRef.unref()!
          at = isAtEnd ? Path.next(path) : path
        } else {
          return
        }
      }

      const parentPath = Path.parent(at)
      let index = at[at.length - 1]

      if (this.getFurthestVoid(parentPath)) {
        return
      }

      for (const node of nodes) {
        const path = parentPath.concat(index)
        index++
        this.apply({ type: 'insert_node', path, node })
      }

      if (select) {
        const point = this.getEnd(at)

        if (point) {
          this.select(point)
        }
      }
    })
  }

  /**
   * Lift nodes at a specific location upwards in the document tree, splitting
   * their parent in two if necessary.
   */

  liftNodes(
    this: Editor,
    options: {
      at?: Location
      match?: MatchOption
    }
  ) {
    this.withoutNormalizing(() => {
      const { selection } = this.value
      const { at = selection, match = 'block' } = options

      if (!at) {
        return
      }

      const matches = this.matches({ at, match })
      const pathRefs = Array.from(matches, ([, p]) => this.createPathRef(p))

      for (const pathRef of pathRefs) {
        const path = pathRef.unref()!

        if (path.length < 2) {
          throw new Error(
            `Cannot lift node at a path [${path}] because it has a depth of less than \`2\`.`
          )
        }

        const parentPath = Path.parent(path)
        const parent = this.getParent(path)
        const index = path[path.length - 1]
        const { length } = parent.nodes

        if (length === 1) {
          this.uncoverNodes({ at: parentPath })
        } else if (index === 0) {
          this.moveNodes({ at: path, to: parentPath })
        } else if (index === length - 1) {
          this.moveNodes({ at: path, to: Path.next(parentPath) })
        } else {
          this.splitNodes({ at: Path.next(path) })
          this.moveNodes({ at: path, to: Path.next(parentPath) })
        }
      }
    })
  }

  /**
   * Merge a node at a location with the previous node of the same depth,
   * removing any empty containing nodes after the merge if necessary.
   */

  mergeNodes(
    this: Editor,
    options: {
      at?: Location
      match?: MatchOption
    } = {}
  ) {
    this.withoutNormalizing(() => {
      const { selection } = this.value
      const { match = 'block' } = options
      let { at } = options

      if (!at) {
        if (selection) {
          at = selection
        } else {
          return
        }
      }

      if (Range.isRange(at)) {
        if (Range.isCollapsed(at)) {
          at = at.anchor
        } else {
          const [, end] = Range.points(at)
          const pointRef = this.createPointRef(end)
          this.delete({ at })
          at = pointRef.unref()!

          if (options.at == null) {
            this.select(at)
          }
        }
      }

      for (const [node, path] of this.matches({ at, match })) {
        const prevText = this.getPreviousText(path)

        if (!prevText) {
          continue
        }

        const [, prevTextPath] = prevText
        const prevMatcher = Path.isPath(at) ? at.length : match
        const prevMatch = this.getMatch(prevTextPath, prevMatcher)

        if (!prevMatch) {
          return
        }

        const [prevNode, prevPath] = prevMatch
        const newPath = Path.next(prevPath)
        const commonPath = Path.common(path, prevPath)
        const isPreviousSibling = Path.isSibling(path, prevPath)

        // Determine if the merge will leave an ancestor of the path empty as a
        // result, in which case we'll want to remove it after merging.
        const emptyAncestor = Node.furthest(this.value, path, ([n, p]) => {
          return (
            Path.isDescendant(p, commonPath) &&
            Path.isAncestor(p, path) &&
            Element.isElement(n) &&
            n.nodes.length === 1
          )
        })

        const emptyRef = emptyAncestor && this.createPathRef(emptyAncestor[1])
        let properties
        let position

        // Ensure that the nodes are equivalent, and figure out what the position
        // and extra properties of the merge will be.
        if (Text.isText(node) && Text.isText(prevNode)) {
          const { text, marks, ...rest } = node
          position = prevNode.text.length
          properties = rest as Partial<Text>
        } else if (Element.isElement(node) && Element.isElement(prevNode)) {
          const { nodes, ...rest } = node
          position = prevNode.nodes.length
          properties = rest as Partial<Element>
        } else {
          throw new Error(
            `Cannot merge the node at path [${path}] with the previous sibling because it is not the same kind: ${JSON.stringify(
              node
            )} ${JSON.stringify(prevNode)}`
          )
        }

        // If the node isn't already the next sibling of the previous node, move
        // it so that it is before merging.
        if (!isPreviousSibling) {
          this.moveNodes({ at: path, to: newPath })
        }

        // If there was going to be an empty ancestor of the node that was merged,
        // we remove it from the tree.
        if (emptyRef) {
          this.removeNodes({ at: emptyRef.current! })
        }

        // If the target node that we're merging with is empty, remove it instead
        // of merging the two. This is a common rich text editor behavior to
        // prevent losing formatting when deleting entire nodes when you have a
        // hanging selection.
        if (
          (Element.isElement(prevNode) && this.isEmpty(prevNode)) ||
          (Text.isText(prevNode) && prevNode.text === '')
        ) {
          this.removeNodes({ at: prevPath })
        } else {
          this.apply({
            type: 'merge_node',
            path: newPath,
            position,
            target: null,
            properties,
          })
        }

        if (emptyRef) {
          emptyRef.unref()
        }
      }
    })
  }

  /**
   * Move the nodes at a location to a new location.
   */

  moveNodes(
    this: Editor,
    options: {
      at?: Location
      match?: MatchOption
      to: Path
    }
  ) {
    this.withoutNormalizing(() => {
      const { selection } = this.value
      const { to, match = 'block' } = options
      const newIndex = to[to.length - 1]
      let { at } = options
      let selectRef

      if (newIndex > 0 && !this.hasNode(Path.previous(to))) {
        throw new Error(
          `Cannot move nodes to new path [${to}] because the index is out of range.`
        )
      }

      if (!at) {
        if (selection) {
          at = selection
          selectRef = this.createRangeRef(at)
        } else {
          return
        }
      }

      const toRef = this.createPathRef(to)
      const targets = this.matches({ at, match })
      const pathRefs = Array.from(targets, ([, p]) => this.createPathRef(p))

      for (const pathRef of pathRefs) {
        const path = pathRef.unref()!
        const newPath = toRef.current!

        if (path.length !== 0) {
          this.apply({ type: 'move_node', path, newPath })
        }
      }

      if (selectRef) {
        this.select(selectRef.current!)
      }

      toRef.unref()
    })
  }

  /**
   * Normalize a node at a path, returning it to a valid state if it is
   * currently invalid.
   */

  normalizeNodes(this: Editor, options: { at: Path }): void {
    const { at } = options
    const node = this.getNode(at)

    // There are no core normalizations for text nodes.
    if (Text.isText(node)) {
      return
    }

    // Ensure that block and inline nodes have at least one text child.
    if (Element.isElement(node) && node.nodes.length === 0) {
      const child = { text: '', marks: [] }
      this.insertNodes(child, { at: at.concat(0) })
      return
    }

    // Determine whether the node should have block or inline children.
    const shouldHaveInlines =
      Element.isElement(node) &&
      (this.isInline(node) ||
        node.nodes.length === 0 ||
        Text.isText(node.nodes[0]) ||
        this.isInline(node.nodes[0]))

    // Since we'll be applying operations while iterating, keep track of an
    // index that accounts for any added/removed nodes.
    let n = 0

    for (let i = 0; i < node.nodes.length; i++, n++) {
      const child = node.nodes[i] as Descendant
      const prev = node.nodes[i - 1]
      const isLast = i === node.nodes.length - 1

      if (Element.isElement(child)) {
        const isInline = this.isInline(child)

        // Only allow block nodes in the top-level value and parent blocks that
        // only contain block nodes. Similarly, only allow inline nodes in other
        // inline nodes, or parent blocks that only contain inlines and text.
        if (isInline !== shouldHaveInlines) {
          this.removeNodes({ at: at.concat(n) })
          n--
          continue
        }

        // Ensure that inline nodes are surrounded by text nodes.
        if (isInline) {
          if (prev == null || !Text.isText(prev)) {
            const child = { text: '', marks: [] }
            this.insertNodes(child, { at: at.concat(n) })
            n++
            continue
          }

          if (isLast) {
            const child = { text: '', marks: [] }
            this.insertNodes(child, { at: at.concat(n + 1) })
            n++
            continue
          }
        }
      } else {
        // Merge adjacent text nodes that are empty or have matching marks.
        if (prev != null && Text.isText(prev)) {
          if (Text.matches(child, prev)) {
            this.mergeNodes({ at: at.concat(n) })
            n--
            continue
          } else if (prev.text === '') {
            this.removeNodes({ at: at.concat(n - 1) })
            n--
            continue
          } else if (isLast && child.text === '') {
            this.removeNodes({ at: at.concat(n) })
            n--
            continue
          }
        }
      }
    }
  }

  /**
   * Remove a node at a specific location, replacing it with its children.
   */

  uncoverNodes(
    this: Editor,
    options: {
      at?: Location
      match?: MatchOption
    }
  ) {
    this.withoutNormalizing(() => {
      const { selection } = this.value
      const { match = 'block' } = options
      let { at } = options

      if (!at) {
        if (selection) {
          at = selection
        } else {
          return
        }
      }

      const matches = this.matches({ at, match })
      const pathRefs = Array.from(matches, ([, p]) => this.createPathRef(p))

      for (const pathRef of pathRefs) {
        const path = pathRef.unref()!
        const range = this.getRange(path)
        const depth = path.length + 1
        const to = Path.next(path)
        this.moveNodes({ at: range, match: depth, to })
        this.removeNodes({ at: path })
      }
    })
  }

  /**
   * Remove the nodes at a specific location in the document.
   */

  removeNodes(
    this: Editor,
    options: {
      at?: Location
      match?: MatchOption
    } = {}
  ) {
    this.withoutNormalizing(() => {
      const { selection } = this.value
      const { match = 'block' } = options
      let { at } = options

      if (!at) {
        if (selection) {
          at = selection
        } else {
          return
        }
      }

      const depths = this.matches({ at, match })
      const pathRefs = Array.from(depths, ([, p]) => this.createPathRef(p))

      for (const pathRef of pathRefs) {
        const path = pathRef.unref()!
        const node = this.getNode(path)
        this.apply({ type: 'remove_node', path, node })
      }
    })
  }

  /**
   * Set new properties on the nodes ...
   */

  setNodes(
    this: Editor,
    props: Partial<Node>,
    options: {
      at?: Location
      match?: MatchOption
      hanging?: boolean
    } = {}
  ) {
    this.withoutNormalizing(() => {
      const { at = this.value.selection, match = 'block' } = options

      if (!at) {
        return
      }

      for (const [node, path] of this.matches({ at, match })) {
        const properties: Partial<Node> = {}
        const newProperties: Partial<Node> = {}

        for (const k in props) {
          if (
            k === 'annotations' ||
            k === 'marks' ||
            k === 'nodes' ||
            k === 'selection' ||
            k === 'text'
          ) {
            continue
          }

          if (props[k] !== node[k]) {
            properties[k] = node[k]
            newProperties[k] = props[k]
          }
        }

        if (Object.keys(newProperties).length !== 0) {
          this.apply({
            type: 'set_node',
            path,
            properties,
            newProperties,
          })
        }
      }
    })
  }

  /**
   * Split the nodes at a specific location.
   */

  splitNodes(
    this: Editor,
    options: {
      at?: Location
      match?: MatchOption
      always?: boolean
      height?: number
    } = {}
  ) {
    this.withoutNormalizing(() => {
      const { selection } = this.value
      const { always = true, match = 'block' } = options
      let { at, height = 0 } = options
      let target: number | null = null
      let position
      let selectRef
      let edgeRef
      let firstPath

      if (!at) {
        if (selection) {
          const [, end] = Range.points(selection)
          selectRef = this.createPointRef(end)
          at = selection
        } else {
          return
        }
      }

      if (Range.isRange(at)) {
        if (Range.isCollapsed(at)) {
          at = at.anchor
        } else {
          const [, end] = Range.points(at)
          const pointRef = this.createPointRef(end)
          this.delete({ at })
          at = pointRef.unref()!
        }
      }

      // If the target is a path, the default height-skipping and position
      // counters need to account for us potentially splitting at a non-leaf.
      if (Path.isPath(at)) {
        const [, p] = Node.first(this.value, at)
        firstPath = p
        height = p.length - at.length + 1
        position = at[at.length - 1]
        at = at.slice(0, -1)
      } else {
        firstPath = at.path
        position = at.offset
        edgeRef = this.createPointRef(at, { stick: 'backward' })
      }

      let d = firstPath.length - height

      for (const [, path] of this.matches({ at, match })) {
        while (d >= path.length && d > 0) {
          const p = firstPath.slice(0, d)
          d--

          // With the `always: false` option, we will instead split the nodes only
          // when the point isn't already at it's edge.
          if (
            !always &&
            edgeRef &&
            edgeRef.current &&
            this.isAtEdge(edgeRef.current, p)
          ) {
            continue
          }

          const node = this.getNode(p)
          const { text, marks, nodes, ...properties } = node

          this.apply({
            type: 'split_node',
            path: p,
            position,
            target,
            properties,
          })

          target = position
          position = firstPath[d] + 1
        }
      }

      if (selectRef) {
        this.select(selectRef.current!)
        selectRef.unref()
      }

      if (edgeRef) {
        edgeRef.unref()
      }
    })
  }

  /**
   * Surround the nodes at a location with a new parent node.
   */

  coverNodes(
    this: Editor,
    element: Element,
    options: {
      at?: Location
      match?: MatchOption
    } = {}
  ) {
    this.withoutNormalizing(() => {
      const { selection } = this.value
      const { match = this.isInline(element) ? 'inline' : 'block' } = options
      let { at } = options

      if (!at) {
        if (selection) {
          at = selection
        } else {
          return
        }
      }

      for (const [, , matches] of this.batches({
        element,
        at,
        match,
      })) {
        const [first] = matches
        const last = matches[matches.length - 1]
        const [, firstPath] = first
        const [, lastPath] = last
        const commonPath = Path.equals(firstPath, lastPath)
          ? Path.parent(firstPath)
          : Path.common(firstPath, lastPath)

        const range = this.getRange(firstPath, lastPath)
        const depth = commonPath.length + 1
        const wrapperPath = Path.next(lastPath).slice(0, depth)
        const wrapper = { ...element, nodes: [] }
        this.insertNodes(wrapper, { at: wrapperPath })
        this.moveNodes({
          at: range,
          match: depth,
          to: wrapperPath.concat(0),
        })
      }
    })
  }

  /**
   * Unwrap the nodes at a location from a parent node, splitting the parent if
   * necessary to ensure that only the content in the range is unwrapped.
   */

  unwrapNodes(
    this: Editor,
    options: {
      at?: Location
      match?: MatchOption
    }
  ) {
    this.withoutNormalizing(() => {
      const { at = this.value.selection, match = 'block' } = options

      if (!at) {
        return
      }

      const matches = this.matches({ at, match })
      const pathRefs = Array.from(matches, ([, p]) => this.createPathRef(p))

      for (const pathRef of pathRefs) {
        const path = pathRef.unref()!
        const depth = path.length + 1
        const a = Range.isRange(at)
          ? Range.intersection(at, this.getRange(path))!
          : at

        this.liftNodes({ at: a, match: depth })
      }
    })
  }

  /**
   * Wrap the nodes at a location in a new container node, splitting the edges
   * of the range first to ensure that only the content in the range is wrapped.
   */

  wrapNodes(
    this: Editor,
    element: Element,
    options: {
      at?: Location
      match?: MatchOption
    } = {}
  ) {
    this.withoutNormalizing(() => {
      const { match = this.isInline(element) ? 'inline' : 'block' } = options
      let { at = this.value.selection } = options

      if (!at) {
        return
      }

      let rangeRef

      if (Range.isRange(at)) {
        const [start, end] = Range.points(at)
        rangeRef = this.createRangeRef(at, { stick: 'inward' })
        this.splitNodes({ at: end, always: false, match })
        this.splitNodes({ at: start, always: false, match })
        at = rangeRef.current!

        if (options.at == null) {
          this.select(at)
        }
      }

      this.coverNodes(element, { at, match })

      if (rangeRef) {
        rangeRef.unref()
      }
    })
  }
}

export default NodeCommands
