[slate](README.md) › [Globals](globals.md)

# slate

## Index

### Interfaces

* [AddMarkCommand](interfaces/addmarkcommand.md)
* [Command](interfaces/command.md)
* [DeleteBackwardCommand](interfaces/deletebackwardcommand.md)
* [DeleteForwardCommand](interfaces/deleteforwardcommand.md)
* [DeleteFragmentCommand](interfaces/deletefragmentcommand.md)
* [Editor](interfaces/editor.md)
* [Element](interfaces/element.md)
* [InsertBreakCommand](interfaces/insertbreakcommand.md)
* [InsertFragmentCommand](interfaces/insertfragmentcommand.md)
* [InsertNodeCommand](interfaces/insertnodecommand.md)
* [InsertTextCommand](interfaces/inserttextcommand.md)
* [Mark](interfaces/mark.md)
* [PathRef](interfaces/pathref.md)
* [Point](interfaces/point.md)
* [PointRef](interfaces/pointref.md)
* [Range](interfaces/range.md)
* [RangeRef](interfaces/rangeref.md)
* [RemoveMarkCommand](interfaces/removemarkcommand.md)
* [Text](interfaces/text.md)

### Type aliases

* [Ancestor](globals.md#ancestor)
* [AncestorEntry](globals.md#ancestorentry)
* [CoreCommand](globals.md#corecommand)
* [Descendant](globals.md#descendant)
* [DescendantEntry](globals.md#descendantentry)
* [ElementEntry](globals.md#elemententry)
* [Location](globals.md#location)
* [MarkEntry](globals.md#markentry)
* [MarkMatch](globals.md#markmatch)
* [Node](globals.md#node)
* [NodeEntry](globals.md#nodeentry)
* [NodeMatch](globals.md#nodematch)
* [Path](globals.md#path)
* [PointEntry](globals.md#pointentry)
* [Span](globals.md#span)
* [TextEntry](globals.md#textentry)

### Variables

* [DIRTY_PATHS](globals.md#const-dirty_paths)
* [NORMALIZING](globals.md#const-normalizing)
* [PATH_REFS](globals.md#const-path_refs)
* [POINT_REFS](globals.md#const-point_refs)
* [RANGE_REFS](globals.md#const-range_refs)

### Functions

* [createEditor](globals.md#const-createeditor)

### Object literals

* [Command](globals.md#const-command)
* [Editor](globals.md#const-editor)
* [Element](globals.md#const-element)
* [ElementQueries](globals.md#const-elementqueries)
* [GeneralQueries](globals.md#const-generalqueries)
* [GeneralTransforms](globals.md#const-generaltransforms)
* [Location](globals.md#const-location)
* [LocationQueries](globals.md#const-locationqueries)
* [Mark](globals.md#const-mark)
* [MarkTransforms](globals.md#const-marktransforms)
* [Node](globals.md#const-node)
* [NodeQueries](globals.md#const-nodequeries)
* [NodeTransforms](globals.md#const-nodetransforms)
* [Path](globals.md#const-path)
* [PathRef](globals.md#const-pathref)
* [Point](globals.md#const-point)
* [PointRef](globals.md#const-pointref)
* [Range](globals.md#const-range)
* [RangeQueries](globals.md#const-rangequeries)
* [RangeRef](globals.md#const-rangeref)
* [SelectionTransforms](globals.md#const-selectiontransforms)
* [Span](globals.md#const-span)
* [Text](globals.md#const-text)
* [TextTransforms](globals.md#const-texttransforms)

## Type aliases

###  Ancestor

Ƭ **Ancestor**: *[Editor](interfaces/editor.md) | [Element](interfaces/element.md)*

*Defined in [interfaces/node.ts:544](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/node.ts#L544)*

The `Ancestor` union type represents nodes that are ancestors in the tree.
It is returned as a convenience in certain cases to narrow a value further
than the more generic `Node` union.

___

###  AncestorEntry

Ƭ **AncestorEntry**: *[[Ancestor](globals.md#ancestor), [Path](globals.md#path)]*

*Defined in [interfaces/node.ts:566](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/node.ts#L566)*

`AncestorEntry` objects are returned when iterating over the ancestors in a
Slate document tree.

___

###  CoreCommand

Ƭ **CoreCommand**: *[AddMarkCommand](interfaces/addmarkcommand.md) | [DeleteBackwardCommand](interfaces/deletebackwardcommand.md) | [DeleteForwardCommand](interfaces/deleteforwardcommand.md) | [DeleteFragmentCommand](interfaces/deletefragmentcommand.md) | [InsertBreakCommand](interfaces/insertbreakcommand.md) | [InsertFragmentCommand](interfaces/insertfragmentcommand.md) | [InsertNodeCommand](interfaces/insertnodecommand.md) | [InsertTextCommand](interfaces/inserttextcommand.md) | [RemoveMarkCommand](interfaces/removemarkcommand.md)*

*Defined in [interfaces/command.ts:227](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/command.ts#L227)*

The `CoreCommand` union is a set of all of the commands that are recognized
by Slate's "core" out of the box.

___

###  Descendant

Ƭ **Descendant**: *[Element](interfaces/element.md) | [Text](interfaces/text.md)*

*Defined in [interfaces/node.ts:536](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/node.ts#L536)*

The `Descendant` union type represents nodes that are descendants in the
tree. It is returned as a convenience in certain cases to narrow a value
further than the more generic `Node` union.

___

###  DescendantEntry

Ƭ **DescendantEntry**: *[[Descendant](globals.md#descendant), [Path](globals.md#path)]*

*Defined in [interfaces/node.ts:559](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/node.ts#L559)*

`DescendantEntry` objects are returned when iterating over the descendants in
a Slate document tree.

___

###  ElementEntry

Ƭ **ElementEntry**: *[[Element](interfaces/element.md), [Path](globals.md#path)]*

*Defined in [interfaces/element.ts:66](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/element.ts#L66)*

`ElementEntry` objects refer to an `Element` and the `Path` where it can be
found inside a root node.

___

###  Location

Ƭ **Location**: *[Path](globals.md#path) | [Point](interfaces/point.md) | [Range](interfaces/range.md)*

*Defined in [interfaces/location.ts:12](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/location.ts#L12)*

The `Location` interface is a union of the ways to refer to a specific
location in a Slate document: paths, points or ranges.

Methods will often accept a `Location` instead of requiring only a `Path`,
`Point` or `Range`. This eliminates the need for developers to manage
converting between the different interfaces in their own code base.

___

###  MarkEntry

Ƭ **MarkEntry**: *[[Mark](interfaces/mark.md), number, [Text](interfaces/text.md), [Path](globals.md#path)]*

*Defined in [interfaces/mark.ts:59](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/mark.ts#L59)*

`MarkEntry` tuples are returned when iterating through the marks in a text
node. They include the index of the mark in the text node's marks array, as
well as the text node and its path in the root node.

___

###  MarkMatch

Ƭ **MarkMatch**: *Partial‹[Mark](interfaces/mark.md)› | function*

*Defined in [interfaces/mark.ts:65](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/mark.ts#L65)*

`MarkMatch` values are used as shorthands for matching mark objects.

___

###  Node

Ƭ **Node**: *[Editor](interfaces/editor.md) | [Element](interfaces/element.md) | [Text](interfaces/text.md)*

*Defined in [interfaces/node.ts:18](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/node.ts#L18)*

The `Node` union type represents all of the different types of nodes that
occur in a Slate document tree.

___

###  NodeEntry

Ƭ **NodeEntry**: *[[Node](globals.md#node), [Path](globals.md#path)]*

*Defined in [interfaces/node.ts:552](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/node.ts#L552)*

`NodeEntry` objects are returned when iterating over the nodes in a Slate
document tree. They consist of the node and its `Path` relative to the root
node in the document.

___

###  NodeMatch

Ƭ **NodeMatch**: *"block" | "element" | "inline" | "inline-element" | "text" | "editor" | "void" | Partial‹[Node](globals.md#node)› | function*

*Defined in [interfaces/node.ts:573](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/node.ts#L573)*

`NodeMatch` values are used as shorthands for matching a node by either its
kind, its location, its behavior or its properties.

___

###  Path

Ƭ **Path**: *number[]*

*Defined in [interfaces/path.ts:10](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/path.ts#L10)*

`Path` arrays are a list of indexes that describe a node's exact position in
a Slate node tree. Although they are usually relative to the root `Editor`
object, they can be relative to any `Node` object.

___

###  PointEntry

Ƭ **PointEntry**: *[[Point](interfaces/point.md), "anchor" | "focus"]*

*Defined in [interfaces/point.ts:160](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/point.ts#L160)*

`PointEntry` objects are returned when iterating over `Point` objects that
belong to a range.

___

###  Span

Ƭ **Span**: *[[Path](globals.md#path), [Path](globals.md#path)]*

*Defined in [interfaces/location.ts:29](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/location.ts#L29)*

The `Span` interface is a low-level way to refer to locations in nodes
without using `Point` which requires leaf text nodes to be present.

___

###  TextEntry

Ƭ **TextEntry**: *[[Text](interfaces/text.md), [Path](globals.md#path)]*

*Defined in [interfaces/text.ts:89](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/text.ts#L89)*

`TextEntry` objects refer to an `Text` and the `Path` where it can be
found inside a root node.

## Variables

### `Const` DIRTY_PATHS

• **DIRTY_PATHS**: *WeakMap‹[Editor](interfaces/editor.md), [Path](globals.md#path)[]›* =  new WeakMap()

*Defined in [interfaces/editor/transforms/general.ts:15](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/editor/transforms/general.ts#L15)*

___

### `Const` NORMALIZING

• **NORMALIZING**: *WeakMap‹[Editor](interfaces/editor.md), boolean›* =  new WeakMap()

*Defined in [interfaces/editor/queries/general.ts:14](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/editor/queries/general.ts#L14)*

___

### `Const` PATH_REFS

• **PATH_REFS**: *WeakMap‹[Editor](interfaces/editor.md), Set‹[PathRef](interfaces/pathref.md)››* =  new WeakMap()

*Defined in [interfaces/editor/queries/general.ts:15](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/editor/queries/general.ts#L15)*

___

### `Const` POINT_REFS

• **POINT_REFS**: *WeakMap‹[Editor](interfaces/editor.md), Set‹[PointRef](interfaces/pointref.md)››* =  new WeakMap()

*Defined in [interfaces/editor/queries/general.ts:16](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/editor/queries/general.ts#L16)*

___

### `Const` RANGE_REFS

• **RANGE_REFS**: *WeakMap‹[Editor](interfaces/editor.md), Set‹[RangeRef](interfaces/rangeref.md)››* =  new WeakMap()

*Defined in [interfaces/editor/queries/general.ts:17](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/editor/queries/general.ts#L17)*

## Functions

### `Const` createEditor

▸ **createEditor**(): *[Editor](interfaces/editor.md)*

*Defined in [create-editor.ts:24](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/create-editor.ts#L24)*

Create a new Slate `Editor` object.

**Returns:** *[Editor](interfaces/editor.md)*

## Object literals

### `Const` Command

### ▪ **Command**: *object*

*Defined in [interfaces/command.ts:14](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/command.ts#L14)*

###  isAddMarkCommand

▸ **isAddMarkCommand**(`value`: any): *value is AddMarkCommand*

*Defined in [interfaces/command.ts:27](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/command.ts#L27)*

Check if a value is an `AddMarkCommand` object.

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *value is AddMarkCommand*

###  isCommand

▸ **isCommand**(`value`: any): *value is Command*

*Defined in [interfaces/command.ts:19](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/command.ts#L19)*

Check if a value is a `Command` object.

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *value is Command*

###  isCoreCommand

▸ **isCoreCommand**(`value`: any): *value is CoreCommand*

*Defined in [interfaces/command.ts:39](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/command.ts#L39)*

Check if a value is a `CoreCommand` object.

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *value is CoreCommand*

###  isDeleteBackwardCommand

▸ **isDeleteBackwardCommand**(`value`: any): *value is DeleteBackwardCommand*

*Defined in [interfaces/command.ts:56](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/command.ts#L56)*

Check if a value is a `DeleteBackwardCommand` object.

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *value is DeleteBackwardCommand*

###  isDeleteForwardCommand

▸ **isDeleteForwardCommand**(`value`: any): *value is DeleteForwardCommand*

*Defined in [interfaces/command.ts:68](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/command.ts#L68)*

Check if a value is a `DeleteForwardCommand` object.

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *value is DeleteForwardCommand*

###  isDeleteFragmentCommand

▸ **isDeleteFragmentCommand**(`value`: any): *value is DeleteFragmentCommand*

*Defined in [interfaces/command.ts:80](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/command.ts#L80)*

Check if a value is a `DeleteFragmentCommand` object.

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *value is DeleteFragmentCommand*

###  isInsertBreakCommand

▸ **isInsertBreakCommand**(`value`: any): *value is InsertBreakCommand*

*Defined in [interfaces/command.ts:88](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/command.ts#L88)*

Check if a value is an `InsertBreakCommand` object.

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *value is InsertBreakCommand*

###  isInsertFragmentCommand

▸ **isInsertFragmentCommand**(`value`: any): *value is InsertFragmentCommand*

*Defined in [interfaces/command.ts:96](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/command.ts#L96)*

Check if a value is an `InsertFragmentCommand` object.

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *value is InsertFragmentCommand*

###  isInsertNodeCommand

▸ **isInsertNodeCommand**(`value`: any): *value is InsertNodeCommand*

*Defined in [interfaces/command.ts:108](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/command.ts#L108)*

Check if a value is an `InsertNodeCommand` object.

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *value is InsertNodeCommand*

###  isInsertTextCommand

▸ **isInsertTextCommand**(`value`: any): *value is InsertTextCommand*

*Defined in [interfaces/command.ts:120](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/command.ts#L120)*

Check if a value is a `InsertTextCommand` object.

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *value is InsertTextCommand*

###  isRemoveMarkCommand

▸ **isRemoveMarkCommand**(`value`: any): *value is RemoveMarkCommand*

*Defined in [interfaces/command.ts:132](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/command.ts#L132)*

Check if a value is a `RemoveMarkCommand` object.

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *value is RemoveMarkCommand*

___

### `Const` Editor

### ▪ **Editor**: *object*

*Defined in [interfaces/editor/index.ts:32](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/editor/index.ts#L32)*

___

### `Const` Element

### ▪ **Element**: *object*

*Defined in [interfaces/element.ts:15](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/element.ts#L15)*

###  isElement

▸ **isElement**(`value`: any): *value is Element*

*Defined in [interfaces/element.ts:20](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/element.ts#L20)*

Check if a value implements the `Element` interface.

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *value is Element*

###  isElementList

▸ **isElementList**(`value`: any): *value is Element[]*

*Defined in [interfaces/element.ts:32](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/element.ts#L32)*

Check if a value is an array of `Element` objects.

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *value is Element[]*

###  matches

▸ **matches**(`element`: [Element](interfaces/element.md), `props`: Partial‹[Element](interfaces/element.md)›): *boolean*

*Defined in [interfaces/element.ts:46](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/element.ts#L46)*

Check if an element matches set of properties.

Note: this checks custom properties, and it does not ensure that any
children are equivalent.

**Parameters:**

Name | Type |
------ | ------ |
`element` | [Element](interfaces/element.md) |
`props` | Partial‹[Element](interfaces/element.md)› |

**Returns:** *boolean*

___

### `Const` ElementQueries

### ▪ **ElementQueries**: *object*

*Defined in [interfaces/editor/queries/element.ts:3](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/editor/queries/element.ts#L3)*

###  hasBlocks

▸ **hasBlocks**(`editor`: [Editor](interfaces/editor.md), `element`: [Element](interfaces/element.md)): *boolean*

*Defined in [interfaces/editor/queries/element.ts:8](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/editor/queries/element.ts#L8)*

Check if a node has block children.

**Parameters:**

Name | Type |
------ | ------ |
`editor` | [Editor](interfaces/editor.md) |
`element` | [Element](interfaces/element.md) |

**Returns:** *boolean*

###  hasInlines

▸ **hasInlines**(`editor`: [Editor](interfaces/editor.md), `element`: [Element](interfaces/element.md)): *boolean*

*Defined in [interfaces/editor/queries/element.ts:18](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/editor/queries/element.ts#L18)*

Check if a node has inline and text children.

**Parameters:**

Name | Type |
------ | ------ |
`editor` | [Editor](interfaces/editor.md) |
`element` | [Element](interfaces/element.md) |

**Returns:** *boolean*

###  hasTexts

▸ **hasTexts**(`editor`: [Editor](interfaces/editor.md), `element`: [Element](interfaces/element.md)): *boolean*

*Defined in [interfaces/editor/queries/element.ts:28](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/editor/queries/element.ts#L28)*

Check if a node has text children.

**Parameters:**

Name | Type |
------ | ------ |
`editor` | [Editor](interfaces/editor.md) |
`element` | [Element](interfaces/element.md) |

**Returns:** *boolean*

###  isEmpty

▸ **isEmpty**(`editor`: [Editor](interfaces/editor.md), `element`: [Element](interfaces/element.md)): *boolean*

*Defined in [interfaces/editor/queries/element.ts:36](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/editor/queries/element.ts#L36)*

Check if an element is empty, accounting for void nodes.

**Parameters:**

Name | Type |
------ | ------ |
`editor` | [Editor](interfaces/editor.md) |
`element` | [Element](interfaces/element.md) |

**Returns:** *boolean*

___

### `Const` GeneralQueries

### ▪ **GeneralQueries**: *object*

*Defined in [interfaces/editor/queries/general.ts:19](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/editor/queries/general.ts#L19)*

###  isEditor

▸ **isEditor**(`value`: any): *value is Editor*

*Defined in [interfaces/editor/queries/general.ts:24](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/editor/queries/general.ts#L24)*

Check if a value is an `Editor` object.

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *value is Editor*

###  isNormalizing

▸ **isNormalizing**(`editor`: [Editor](interfaces/editor.md)): *boolean*

*Defined in [interfaces/editor/queries/general.ts:43](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/editor/queries/general.ts#L43)*

Check if the editor is currently normalizing after each operation.

**Parameters:**

Name | Type |
------ | ------ |
`editor` | [Editor](interfaces/editor.md) |

**Returns:** *boolean*

###  pathRef

▸ **pathRef**(`editor`: [Editor](interfaces/editor.md), `path`: [Path](globals.md#path), `options`: object): *[PathRef](interfaces/pathref.md)*

*Defined in [interfaces/editor/queries/general.ts:53](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/editor/queries/general.ts#L53)*

Create a mutable ref for a `Path` object, which will stay in sync as new
operations are applied to the editor.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`editor` | [Editor](interfaces/editor.md) | - |
`path` | [Path](globals.md#path) | - |
`options` | object |  {} |

**Returns:** *[PathRef](interfaces/pathref.md)*

###  pathRefs

▸ **pathRefs**(`editor`: [Editor](interfaces/editor.md)): *Set‹[PathRef](interfaces/pathref.md)›*

*Defined in [interfaces/editor/queries/general.ts:82](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/editor/queries/general.ts#L82)*

Get the set of currently tracked path refs of the editor.

**Parameters:**

Name | Type |
------ | ------ |
`editor` | [Editor](interfaces/editor.md) |

**Returns:** *Set‹[PathRef](interfaces/pathref.md)›*

###  pointRef

▸ **pointRef**(`editor`: [Editor](interfaces/editor.md), `point`: [Point](interfaces/point.md), `options`: object): *[PointRef](interfaces/pointref.md)*

*Defined in [interfaces/editor/queries/general.ts:98](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/editor/queries/general.ts#L98)*

Create a mutable ref for a `Point` object, which will stay in sync as new
operations are applied to the editor.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`editor` | [Editor](interfaces/editor.md) | - |
`point` | [Point](interfaces/point.md) | - |
`options` | object |  {} |

**Returns:** *[PointRef](interfaces/pointref.md)*

###  pointRefs

▸ **pointRefs**(`editor`: [Editor](interfaces/editor.md)): *Set‹[PointRef](interfaces/pointref.md)›*

*Defined in [interfaces/editor/queries/general.ts:127](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/editor/queries/general.ts#L127)*

Get the set of currently tracked point refs of the editor.

**Parameters:**

Name | Type |
------ | ------ |
`editor` | [Editor](interfaces/editor.md) |

**Returns:** *Set‹[PointRef](interfaces/pointref.md)›*

###  rangeRef

▸ **rangeRef**(`editor`: [Editor](interfaces/editor.md), `range`: [Range](interfaces/range.md), `options`: object): *[RangeRef](interfaces/rangeref.md)*

*Defined in [interfaces/editor/queries/general.ts:143](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/editor/queries/general.ts#L143)*

Create a mutable ref for a `Range` object, which will stay in sync as new
operations are applied to the editor.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`editor` | [Editor](interfaces/editor.md) | - |
`range` | [Range](interfaces/range.md) | - |
`options` | object |  {} |

**Returns:** *[RangeRef](interfaces/rangeref.md)*

###  rangeRefs

▸ **rangeRefs**(`editor`: [Editor](interfaces/editor.md)): *Set‹[RangeRef](interfaces/rangeref.md)›*

*Defined in [interfaces/editor/queries/general.ts:172](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/editor/queries/general.ts#L172)*

Get the set of currently tracked range refs of the editor.

**Parameters:**

Name | Type |
------ | ------ |
`editor` | [Editor](interfaces/editor.md) |

**Returns:** *Set‹[RangeRef](interfaces/rangeref.md)›*

###  withoutNormalizing

▸ **withoutNormalizing**(`editor`: [Editor](interfaces/editor.md), `fn`: function): *void*

*Defined in [interfaces/editor/queries/general.ts:187](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/editor/queries/general.ts#L187)*

Call a function, deferring normalization until after it completes.

**Parameters:**

▪ **editor**: *[Editor](interfaces/editor.md)*

▪ **fn**: *function*

▸ (): *void*

**Returns:** *void*

___

### `Const` GeneralTransforms

### ▪ **GeneralTransforms**: *object*

*Defined in [interfaces/editor/transforms/general.ts:17](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/editor/transforms/general.ts#L17)*

###  normalize

▸ **normalize**(`editor`: [Editor](interfaces/editor.md), `options`: object): *void*

*Defined in [interfaces/editor/transforms/general.ts:22](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/editor/transforms/general.ts#L22)*

Normalize any dirty objects in the editor.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`editor` | [Editor](interfaces/editor.md) | - |
`options` | object |  {} |

**Returns:** *void*

###  transform

▸ **transform**(`editor`: [Editor](interfaces/editor.md), `op`: Operation): *void*

*Defined in [interfaces/editor/transforms/general.ts:66](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/editor/transforms/general.ts#L66)*

Transform the editor by an operation.

**Parameters:**

Name | Type |
------ | ------ |
`editor` | [Editor](interfaces/editor.md) |
`op` | Operation |

**Returns:** *void*

___

### `Const` Location

### ▪ **Location**: *object*

*Defined in [interfaces/location.ts:14](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/location.ts#L14)*

###  isLocation

▸ **isLocation**(`value`: any): *value is Location*

*Defined in [interfaces/location.ts:19](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/location.ts#L19)*

Check if a value implements the `Location` interface.

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *value is Location*

___

### `Const` LocationQueries

### ▪ **LocationQueries**: *object*

*Defined in [interfaces/editor/queries/location.ts:24](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/editor/queries/location.ts#L24)*

###  activeMarks

▸ **activeMarks**(`editor`: [Editor](interfaces/editor.md), `options`: object): *[Mark](interfaces/mark.md)[]*

*Defined in [interfaces/editor/queries/location.ts:39](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/editor/queries/location.ts#L39)*

Get the marks that are "active" at a location. These are the
marks that will be added to any text that is inserted.

The `union: true` option can be passed to create a union of marks across
the text nodes in the selection, instead of creating an intersection, which
is the default.

Note: to obey common rich text behavior, if the selection is collapsed at
the start of a text node and there are previous text nodes in the same
block, it will carry those marks forward from the previous text node. This
allows for continuation of marks from previous words.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`editor` | [Editor](interfaces/editor.md) | - |
`options` | object |  {} |

**Returns:** *[Mark](interfaces/mark.md)[]*

###  after

▸ **after**(`editor`: [Editor](interfaces/editor.md), `at`: [Location](globals.md#location), `options`: object): *[Point](interfaces/point.md) | undefined*

*Defined in [interfaces/editor/queries/location.ts:116](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/editor/queries/location.ts#L116)*

Get the point after a location.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`editor` | [Editor](interfaces/editor.md) | - |
`at` | [Location](globals.md#location) | - |
`options` | object |  {} |

**Returns:** *[Point](interfaces/point.md) | undefined*

###  ancestor

▸ **ancestor**(`editor`: [Editor](interfaces/editor.md), `at`: [Location](globals.md#location), `options`: object): *[AncestorEntry](globals.md#ancestorentry)*

*Defined in [interfaces/editor/queries/location.ts:150](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/editor/queries/location.ts#L150)*

Get the common ancestor node of a location.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`editor` | [Editor](interfaces/editor.md) | - |
`at` | [Location](globals.md#location) | - |
`options` | object |  {} |

**Returns:** *[AncestorEntry](globals.md#ancestorentry)*

###  before

▸ **before**(`editor`: [Editor](interfaces/editor.md), `at`: [Location](globals.md#location), `options`: object): *[Point](interfaces/point.md) | undefined*

*Defined in [interfaces/editor/queries/location.ts:175](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/editor/queries/location.ts#L175)*

Get the point before a location.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`editor` | [Editor](interfaces/editor.md) | - |
`at` | [Location](globals.md#location) | - |
`options` | object |  {} |

**Returns:** *[Point](interfaces/point.md) | undefined*

###  edges

▸ **edges**(`editor`: [Editor](interfaces/editor.md), `at`: [Location](globals.md#location)): *[[Point](interfaces/point.md), [Point](interfaces/point.md)]*

*Defined in [interfaces/editor/queries/location.ts:213](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/editor/queries/location.ts#L213)*

Get the start and end points of a location.

**Parameters:**

Name | Type |
------ | ------ |
`editor` | [Editor](interfaces/editor.md) |
`at` | [Location](globals.md#location) |

**Returns:** *[[Point](interfaces/point.md), [Point](interfaces/point.md)]*

###  elements

▸ **elements**(`editor`: [Editor](interfaces/editor.md), `options`: object): *Iterable‹[ElementEntry](globals.md#elemententry)›*

*Defined in [interfaces/editor/queries/location.ts:221](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/editor/queries/location.ts#L221)*

Iterate through all of the elements in the Editor.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`editor` | [Editor](interfaces/editor.md) | - |
`options` | object |  {} |

**Returns:** *Iterable‹[ElementEntry](globals.md#elemententry)›*

###  end

▸ **end**(`editor`: [Editor](interfaces/editor.md), `at`: [Location](globals.md#location)): *[Point](interfaces/point.md)*

*Defined in [interfaces/editor/queries/location.ts:248](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/editor/queries/location.ts#L248)*

Get the end point of a location.

**Parameters:**

Name | Type |
------ | ------ |
`editor` | [Editor](interfaces/editor.md) |
`at` | [Location](globals.md#location) |

**Returns:** *[Point](interfaces/point.md)*

###  first

▸ **first**(`editor`: [Editor](interfaces/editor.md), `at`: [Location](globals.md#location)): *[NodeEntry](globals.md#nodeentry)*

*Defined in [interfaces/editor/queries/location.ts:256](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/editor/queries/location.ts#L256)*

Get the first node at a location.

**Parameters:**

Name | Type |
------ | ------ |
`editor` | [Editor](interfaces/editor.md) |
`at` | [Location](globals.md#location) |

**Returns:** *[NodeEntry](globals.md#nodeentry)*

###  fragment

▸ **fragment**(`editor`: [Editor](interfaces/editor.md), `at`: [Location](globals.md#location)): *[Descendant](globals.md#descendant)[]*

*Defined in [interfaces/editor/queries/location.ts:265](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/editor/queries/location.ts#L265)*

Get the fragment at a location.

**Parameters:**

Name | Type |
------ | ------ |
`editor` | [Editor](interfaces/editor.md) |
`at` | [Location](globals.md#location) |

**Returns:** *[Descendant](globals.md#descendant)[]*

###  isEdge

▸ **isEdge**(`editor`: [Editor](interfaces/editor.md), `point`: [Point](interfaces/point.md), `at`: [Location](globals.md#location)): *boolean*

*Defined in [interfaces/editor/queries/location.ts:298](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/editor/queries/location.ts#L298)*

Check if a point is an edge of a location.

**Parameters:**

Name | Type |
------ | ------ |
`editor` | [Editor](interfaces/editor.md) |
`point` | [Point](interfaces/point.md) |
`at` | [Location](globals.md#location) |

**Returns:** *boolean*

###  isEnd

▸ **isEnd**(`editor`: [Editor](interfaces/editor.md), `point`: [Point](interfaces/point.md), `at`: [Location](globals.md#location)): *boolean*

*Defined in [interfaces/editor/queries/location.ts:289](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/editor/queries/location.ts#L289)*

Check if a point is the end point of a location.

**Parameters:**

Name | Type |
------ | ------ |
`editor` | [Editor](interfaces/editor.md) |
`point` | [Point](interfaces/point.md) |
`at` | [Location](globals.md#location) |

**Returns:** *boolean*

###  isStart

▸ **isStart**(`editor`: [Editor](interfaces/editor.md), `point`: [Point](interfaces/point.md), `at`: [Location](globals.md#location)): *boolean*

*Defined in [interfaces/editor/queries/location.ts:275](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/editor/queries/location.ts#L275)*

Check if a point the start point of a location.

**Parameters:**

Name | Type |
------ | ------ |
`editor` | [Editor](interfaces/editor.md) |
`point` | [Point](interfaces/point.md) |
`at` | [Location](globals.md#location) |

**Returns:** *boolean*

###  last

▸ **last**(`editor`: [Editor](interfaces/editor.md), `at`: [Location](globals.md#location)): *[NodeEntry](globals.md#nodeentry)*

*Defined in [interfaces/editor/queries/location.ts:306](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/editor/queries/location.ts#L306)*

Get the last node at a location.

**Parameters:**

Name | Type |
------ | ------ |
`editor` | [Editor](interfaces/editor.md) |
`at` | [Location](globals.md#location) |

**Returns:** *[NodeEntry](globals.md#nodeentry)*

###  leaf

▸ **leaf**(`editor`: [Editor](interfaces/editor.md), `at`: [Location](globals.md#location), `options`: object): *[TextEntry](globals.md#textentry)*

*Defined in [interfaces/editor/queries/location.ts:315](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/editor/queries/location.ts#L315)*

Get the leaf text node at a location.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`editor` | [Editor](interfaces/editor.md) | - |
`at` | [Location](globals.md#location) | - |
`options` | object |  {} |

**Returns:** *[TextEntry](globals.md#textentry)*

###  levels

▸ **levels**(`editor`: [Editor](interfaces/editor.md), `options`: object): *Iterable‹[NodeEntry](globals.md#nodeentry)›*

*Defined in [interfaces/editor/queries/location.ts:332](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/editor/queries/location.ts#L332)*

Iterate through all of the levels at a location.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`editor` | [Editor](interfaces/editor.md) | - |
`options` | object |  {} |

**Returns:** *Iterable‹[NodeEntry](globals.md#nodeentry)›*

###  marks

▸ **marks**(`editor`: [Editor](interfaces/editor.md), `options`: object): *Iterable‹[MarkEntry](globals.md#markentry)›*

*Defined in [interfaces/editor/queries/location.ts:367](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/editor/queries/location.ts#L367)*

Iterate through all of the text nodes in the Editor.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`editor` | [Editor](interfaces/editor.md) | - |
`options` | object |  {} |

**Returns:** *Iterable‹[MarkEntry](globals.md#markentry)›*

###  match

▸ **match**(`editor`: [Editor](interfaces/editor.md), `at`: [Location](globals.md#location), `match`: [NodeMatch](globals.md#nodematch)): *[NodeEntry](globals.md#nodeentry) | undefined*

*Defined in [interfaces/editor/queries/location.ts:394](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/editor/queries/location.ts#L394)*

Get the first matching node in a single branch of the document.

**Parameters:**

Name | Type |
------ | ------ |
`editor` | [Editor](interfaces/editor.md) |
`at` | [Location](globals.md#location) |
`match` | [NodeMatch](globals.md#nodematch) |

**Returns:** *[NodeEntry](globals.md#nodeentry) | undefined*

###  matches

▸ **matches**(`editor`: [Editor](interfaces/editor.md), `options`: object): *Iterable‹[NodeEntry](globals.md#nodeentry)›*

*Defined in [interfaces/editor/queries/location.ts:408](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/editor/queries/location.ts#L408)*

Iterate through all of the nodes that match.

**Parameters:**

Name | Type |
------ | ------ |
`editor` | [Editor](interfaces/editor.md) |
`options` | object |

**Returns:** *Iterable‹[NodeEntry](globals.md#nodeentry)›*

###  next

▸ **next**(`editor`: [Editor](interfaces/editor.md), `at`: [Location](globals.md#location), `match`: [NodeMatch](globals.md#nodematch)): *[NodeEntry](globals.md#nodeentry) | undefined*

*Defined in [interfaces/editor/queries/location.ts:450](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/editor/queries/location.ts#L450)*

Get the matching node in the branch of the document after a location.

**Parameters:**

Name | Type |
------ | ------ |
`editor` | [Editor](interfaces/editor.md) |
`at` | [Location](globals.md#location) |
`match` | [NodeMatch](globals.md#nodematch) |

**Returns:** *[NodeEntry](globals.md#nodeentry) | undefined*

###  node

▸ **node**(`editor`: [Editor](interfaces/editor.md), `at`: [Location](globals.md#location), `options`: object): *[NodeEntry](globals.md#nodeentry)*

*Defined in [interfaces/editor/queries/location.ts:469](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/editor/queries/location.ts#L469)*

Get the node at a location.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`editor` | [Editor](interfaces/editor.md) | - |
`at` | [Location](globals.md#location) | - |
`options` | object |  {} |

**Returns:** *[NodeEntry](globals.md#nodeentry)*

###  nodes

▸ **nodes**(`editor`: [Editor](interfaces/editor.md), `options`: object): *Iterable‹[NodeEntry](globals.md#nodeentry)›*

*Defined in [interfaces/editor/queries/location.ts:486](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/editor/queries/location.ts#L486)*

Iterate through all of the nodes in the Editor.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`editor` | [Editor](interfaces/editor.md) | - |
`options` | object |  {} |

**Returns:** *Iterable‹[NodeEntry](globals.md#nodeentry)›*

###  parent

▸ **parent**(`editor`: [Editor](interfaces/editor.md), `at`: [Location](globals.md#location), `options`: object): *[AncestorEntry](globals.md#ancestorentry)*

*Defined in [interfaces/editor/queries/location.ts:516](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/editor/queries/location.ts#L516)*

Get the parent node of a location.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`editor` | [Editor](interfaces/editor.md) | - |
`at` | [Location](globals.md#location) | - |
`options` | object |  {} |

**Returns:** *[AncestorEntry](globals.md#ancestorentry)*

###  path

▸ **path**(`editor`: [Editor](interfaces/editor.md), `at`: [Location](globals.md#location), `options`: object): *[Path](globals.md#path)*

*Defined in [interfaces/editor/queries/location.ts:534](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/editor/queries/location.ts#L534)*

Get the path of a location.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`editor` | [Editor](interfaces/editor.md) | - |
`at` | [Location](globals.md#location) | - |
`options` | object |  {} |

**Returns:** *[Path](globals.md#path)*

###  point

▸ **point**(`editor`: [Editor](interfaces/editor.md), `at`: [Location](globals.md#location), `options`: object): *[Point](interfaces/point.md)*

*Defined in [interfaces/editor/queries/location.ts:579](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/editor/queries/location.ts#L579)*

Get the start or end point of a location.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`editor` | [Editor](interfaces/editor.md) | - |
`at` | [Location](globals.md#location) | - |
`options` | object |  {} |

**Returns:** *[Point](interfaces/point.md)*

###  positions

▸ **positions**(`editor`: [Editor](interfaces/editor.md), `options`: object): *Iterable‹[Point](interfaces/point.md)›*

*Defined in [interfaces/editor/queries/location.ts:630](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/editor/queries/location.ts#L630)*

Iterate through all of the positions in the document where a `Point` can be
placed.

By default it will move forward by individual offsets at a time,  but you
can pass the `unit: 'character'` option to moved forward one character, word,
or line at at time.

Note: void nodes are treated as a single point, and iteration will not
happen inside their content.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`editor` | [Editor](interfaces/editor.md) | - |
`options` | object |  {} |

**Returns:** *Iterable‹[Point](interfaces/point.md)›*

###  previous

▸ **previous**(`editor`: [Editor](interfaces/editor.md), `at`: [Location](globals.md#location), `match`: [NodeMatch](globals.md#nodematch)): *[NodeEntry](globals.md#nodeentry) | undefined*

*Defined in [interfaces/editor/queries/location.ts:744](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/editor/queries/location.ts#L744)*

Get the matching node in the branch of the document before a location.

**Parameters:**

Name | Type |
------ | ------ |
`editor` | [Editor](interfaces/editor.md) |
`at` | [Location](globals.md#location) |
`match` | [NodeMatch](globals.md#nodematch) |

**Returns:** *[NodeEntry](globals.md#nodeentry) | undefined*

###  range

▸ **range**(`editor`: [Editor](interfaces/editor.md), `at`: [Location](globals.md#location), `to?`: [Location](globals.md#location)): *[Range](interfaces/range.md)*

*Defined in [interfaces/editor/queries/location.ts:771](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/editor/queries/location.ts#L771)*

Get a range of a location.

**Parameters:**

Name | Type |
------ | ------ |
`editor` | [Editor](interfaces/editor.md) |
`at` | [Location](globals.md#location) |
`to?` | [Location](globals.md#location) |

**Returns:** *[Range](interfaces/range.md)*

###  start

▸ **start**(`editor`: [Editor](interfaces/editor.md), `at`: [Location](globals.md#location)): *[Point](interfaces/point.md)*

*Defined in [interfaces/editor/queries/location.ts:785](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/editor/queries/location.ts#L785)*

Get the start point of a location.

**Parameters:**

Name | Type |
------ | ------ |
`editor` | [Editor](interfaces/editor.md) |
`at` | [Location](globals.md#location) |

**Returns:** *[Point](interfaces/point.md)*

###  text

▸ **text**(`editor`: [Editor](interfaces/editor.md), `at`: [Location](globals.md#location)): *string*

*Defined in [interfaces/editor/queries/location.ts:796](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/editor/queries/location.ts#L796)*

Get the text content of a location.

Note: the text of void nodes is presumed to be an empty string, regardless
of what their actual content is.

**Parameters:**

Name | Type |
------ | ------ |
`editor` | [Editor](interfaces/editor.md) |
`at` | [Location](globals.md#location) |

**Returns:** *string*

###  texts

▸ **texts**(`editor`: [Editor](interfaces/editor.md), `options`: object): *Iterable‹[TextEntry](globals.md#textentry)›*

*Defined in [interfaces/editor/queries/location.ts:822](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/editor/queries/location.ts#L822)*

Iterate through all of the text nodes in the Editor.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`editor` | [Editor](interfaces/editor.md) | - |
`options` | object |  {} |

**Returns:** *Iterable‹[TextEntry](globals.md#textentry)›*

___

### `Const` Mark

### ▪ **Mark**: *object*

*Defined in [interfaces/mark.ts:13](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/mark.ts#L13)*

###  exists

▸ **exists**(`mark`: [Mark](interfaces/mark.md), `marks`: [Mark](interfaces/mark.md)[]): *boolean*

*Defined in [interfaces/mark.ts:18](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/mark.ts#L18)*

Check if a mark exists in a set of marks.

**Parameters:**

Name | Type |
------ | ------ |
`mark` | [Mark](interfaces/mark.md) |
`marks` | [Mark](interfaces/mark.md)[] |

**Returns:** *boolean*

###  isMark

▸ **isMark**(`value`: any): *value is Mark*

*Defined in [interfaces/mark.ts:26](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/mark.ts#L26)*

Check if a value implements the `Mark` interface.

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *value is Mark*

###  isMarkSet

▸ **isMarkSet**(`value`: any): *value is Mark[]*

*Defined in [interfaces/mark.ts:34](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/mark.ts#L34)*

Check if a value is an array of `Mark` objects.

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *value is Mark[]*

###  matches

▸ **matches**(`mark`: [Mark](interfaces/mark.md), `props`: Partial‹[Mark](interfaces/mark.md)›): *boolean*

*Defined in [interfaces/mark.ts:42](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/mark.ts#L42)*

Check if a mark matches set of properties.

**Parameters:**

Name | Type |
------ | ------ |
`mark` | [Mark](interfaces/mark.md) |
`props` | Partial‹[Mark](interfaces/mark.md)› |

**Returns:** *boolean*

___

### `Const` MarkTransforms

### ▪ **MarkTransforms**: *object*

*Defined in [interfaces/editor/transforms/mark.ts:3](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/editor/transforms/mark.ts#L3)*

###  addMarks

▸ **addMarks**(`editor`: [Editor](interfaces/editor.md), `marks`: [Mark](interfaces/mark.md)[], `options`: object): *void*

*Defined in [interfaces/editor/transforms/mark.ts:8](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/editor/transforms/mark.ts#L8)*

Add a set of marks to the text nodes at a location.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`editor` | [Editor](interfaces/editor.md) | - |
`marks` | [Mark](interfaces/mark.md)[] | - |
`options` | object |  {} |

**Returns:** *void*

###  removeMarks

▸ **removeMarks**(`editor`: [Editor](interfaces/editor.md), `marks`: [Mark](interfaces/mark.md)[], `options`: object): *void*

*Defined in [interfaces/editor/transforms/mark.ts:42](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/editor/transforms/mark.ts#L42)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`editor` | [Editor](interfaces/editor.md) | - |
`marks` | [Mark](interfaces/mark.md)[] | - |
`options` | object |  {} |

**Returns:** *void*

###  setMarks

▸ **setMarks**(`editor`: [Editor](interfaces/editor.md), `marks`: [Mark](interfaces/mark.md)[], `props`: Partial‹[Mark](interfaces/mark.md)›, `options`: object): *void*

*Defined in [interfaces/editor/transforms/mark.ts:63](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/editor/transforms/mark.ts#L63)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`editor` | [Editor](interfaces/editor.md) | - |
`marks` | [Mark](interfaces/mark.md)[] | - |
`props` | Partial‹[Mark](interfaces/mark.md)› | - |
`options` | object |  {} |

**Returns:** *void*

___

### `Const` Node

### ▪ **Node**: *object*

*Defined in [interfaces/node.ts:20](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/node.ts#L20)*

###  ancestor

▸ **ancestor**(`root`: [Node](globals.md#node), `path`: [Path](globals.md#path)): *[Ancestor](globals.md#ancestor)*

*Defined in [interfaces/node.ts:32](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/node.ts#L32)*

Get the node at a specific path, asserting that it's an ancestor node.

**Parameters:**

Name | Type |
------ | ------ |
`root` | [Node](globals.md#node) |
`path` | [Path](globals.md#path) |

**Returns:** *[Ancestor](globals.md#ancestor)*

###  ancestors

▸ **ancestors**(`root`: [Node](globals.md#node), `path`: [Path](globals.md#path), `options`: object): *Iterable‹[AncestorEntry](globals.md#ancestorentry)›*

*Defined in [interfaces/node.ts:51](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/node.ts#L51)*

Return an iterable of all the ancestor nodes above a specific path.

By default the order is bottom-up, from lowest to highest ancestor in
the tree, but you can pass the `reverse: true` option to go top-down.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`root` | [Node](globals.md#node) | - |
`path` | [Path](globals.md#path) | - |
`options` | object |  {} |

**Returns:** *Iterable‹[AncestorEntry](globals.md#ancestorentry)›*

###  child

▸ **child**(`root`: [Node](globals.md#node), `index`: number): *[Descendant](globals.md#descendant)*

*Defined in [interfaces/node.ts:69](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/node.ts#L69)*

Get the child of a node at a specific index.

**Parameters:**

Name | Type |
------ | ------ |
`root` | [Node](globals.md#node) |
`index` | number |

**Returns:** *[Descendant](globals.md#descendant)*

###  closest

▸ **closest**(`root`: [Node](globals.md#node), `path`: [Path](globals.md#path), `predicate`: function): *[NodeEntry](globals.md#nodeentry) | undefined*

*Defined in [interfaces/node.ts:93](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/node.ts#L93)*

Find the closest matching node entry starting from a specific path.

**Parameters:**

▪ **root**: *[Node](globals.md#node)*

▪ **path**: *[Path](globals.md#path)*

▪ **predicate**: *function*

▸ (`entry`: [NodeEntry](globals.md#nodeentry)): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`entry` | [NodeEntry](globals.md#nodeentry) |

**Returns:** *[NodeEntry](globals.md#nodeentry) | undefined*

###  common

▸ **common**(`root`: [Node](globals.md#node), `path`: [Path](globals.md#path), `another`: [Path](globals.md#path)): *[NodeEntry](globals.md#nodeentry)*

*Defined in [interfaces/node.ts:109](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/node.ts#L109)*

Get an entry for the common ancesetor node of two paths.

**Parameters:**

Name | Type |
------ | ------ |
`root` | [Node](globals.md#node) |
`path` | [Path](globals.md#path) |
`another` | [Path](globals.md#path) |

**Returns:** *[NodeEntry](globals.md#nodeentry)*

###  descendant

▸ **descendant**(`root`: [Node](globals.md#node), `path`: [Path](globals.md#path)): *[Descendant](globals.md#descendant)*

*Defined in [interfaces/node.ts:119](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/node.ts#L119)*

Get the node at a specific path, asserting that it's a descendant node.

**Parameters:**

Name | Type |
------ | ------ |
`root` | [Node](globals.md#node) |
`path` | [Path](globals.md#path) |

**Returns:** *[Descendant](globals.md#descendant)*

###  descendants

▸ **descendants**(`root`: [Node](globals.md#node), `options`: object): *Iterable‹[DescendantEntry](globals.md#descendantentry)›*

*Defined in [interfaces/node.ts:135](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/node.ts#L135)*

Return an iterable of all the descendant node entries inside a root node.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`root` | [Node](globals.md#node) | - |
`options` | object |  {} |

**Returns:** *Iterable‹[DescendantEntry](globals.md#descendantentry)›*

###  elements

▸ **elements**(`root`: [Node](globals.md#node), `options`: object): *Iterable‹[ElementEntry](globals.md#elemententry)›*

*Defined in [interfaces/node.ts:159](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/node.ts#L159)*

Return an iterable of all the element nodes inside a root node. Each iteration
will return an `ElementEntry` tuple consisting of `[Element, Path]`. If the
root node is an element it will be included in the iteration as well.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`root` | [Node](globals.md#node) | - |
`options` | object |  {} |

**Returns:** *Iterable‹[ElementEntry](globals.md#elemententry)›*

###  first

▸ **first**(`root`: [Node](globals.md#node), `path`: [Path](globals.md#path)): *[NodeEntry](globals.md#nodeentry)*

*Defined in [interfaces/node.ts:179](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/node.ts#L179)*

Get the first node entry in a root node from a path.

**Parameters:**

Name | Type |
------ | ------ |
`root` | [Node](globals.md#node) |
`path` | [Path](globals.md#path) |

**Returns:** *[NodeEntry](globals.md#nodeentry)*

###  fragment

▸ **fragment**(`root`: [Node](globals.md#node), `range`: [Range](interfaces/range.md)): *[Descendant](globals.md#descendant)[]*

*Defined in [interfaces/node.ts:199](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/node.ts#L199)*

Get the sliced fragment represented by a range inside a root node.

**Parameters:**

Name | Type |
------ | ------ |
`root` | [Node](globals.md#node) |
`range` | [Range](interfaces/range.md) |

**Returns:** *[Descendant](globals.md#descendant)[]*

###  furthest

▸ **furthest**(`root`: [Node](globals.md#node), `path`: [Path](globals.md#path), `predicate`: function): *[NodeEntry](globals.md#nodeentry) | undefined*

*Defined in [interfaces/node.ts:243](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/node.ts#L243)*

Find the furthest matching node entry starting from a specific path.

**Parameters:**

▪ **root**: *[Node](globals.md#node)*

▪ **path**: *[Path](globals.md#path)*

▪ **predicate**: *function*

▸ (`entry`: [NodeEntry](globals.md#nodeentry)): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`entry` | [NodeEntry](globals.md#nodeentry) |

**Returns:** *[NodeEntry](globals.md#nodeentry) | undefined*

###  get

▸ **get**(`root`: [Node](globals.md#node), `path`: [Path](globals.md#path)): *[Node](globals.md#node)*

*Defined in [interfaces/node.ts:260](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/node.ts#L260)*

Get the descendant node referred to by a specific path. If the path is an
empty array, it refers to the root node itself.

**Parameters:**

Name | Type |
------ | ------ |
`root` | [Node](globals.md#node) |
`path` | [Path](globals.md#path) |

**Returns:** *[Node](globals.md#node)*

###  has

▸ **has**(`root`: [Node](globals.md#node), `path`: [Path](globals.md#path)): *boolean*

*Defined in [interfaces/node.ts:284](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/node.ts#L284)*

Check if a descendant node exists at a specific path.

**Parameters:**

Name | Type |
------ | ------ |
`root` | [Node](globals.md#node) |
`path` | [Path](globals.md#path) |

**Returns:** *boolean*

###  isNode

▸ **isNode**(`value`: any): *value is Node*

*Defined in [interfaces/node.ts:304](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/node.ts#L304)*

Check if a value implements the `Node` interface.

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *value is Node*

###  isNodeList

▸ **isNodeList**(`value`: any): *value is Node[]*

*Defined in [interfaces/node.ts:314](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/node.ts#L314)*

Check if a value is a list of `Node` objects.

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *value is Node[]*

###  last

▸ **last**(`root`: [Node](globals.md#node), `path`: [Path](globals.md#path)): *[NodeEntry](globals.md#nodeentry)*

*Defined in [interfaces/node.ts:322](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/node.ts#L322)*

Get the lash node entry in a root node from a path.

**Parameters:**

Name | Type |
------ | ------ |
`root` | [Node](globals.md#node) |
`path` | [Path](globals.md#path) |

**Returns:** *[NodeEntry](globals.md#nodeentry)*

###  leaf

▸ **leaf**(`root`: [Node](globals.md#node), `path`: [Path](globals.md#path)): *[Text](interfaces/text.md)*

*Defined in [interfaces/node.ts:343](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/node.ts#L343)*

Get the node at a specific path, ensuring it's a leaf text node.

**Parameters:**

Name | Type |
------ | ------ |
`root` | [Node](globals.md#node) |
`path` | [Path](globals.md#path) |

**Returns:** *[Text](interfaces/text.md)*

###  levels

▸ **levels**(`root`: [Node](globals.md#node), `path`: [Path](globals.md#path), `options`: object): *Iterable‹[NodeEntry](globals.md#nodeentry)›*

*Defined in [interfaces/node.ts:362](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/node.ts#L362)*

Return an iterable of the in a branch of the tree, from a specific path.

By default the order is top-down, from lowest to highest node in the tree,
but you can pass the `reverse: true` option to go bottom-up.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`root` | [Node](globals.md#node) | - |
`path` | [Path](globals.md#path) | - |
`options` | object |  {} |

**Returns:** *Iterable‹[NodeEntry](globals.md#nodeentry)›*

###  marks

▸ **marks**(`root`: [Node](globals.md#node), `options`: object): *Iterable‹[MarkEntry](globals.md#markentry)›*

*Defined in [interfaces/node.ts:379](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/node.ts#L379)*

Return an iterable of all the marks in all of the text nodes in a root node.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`root` | [Node](globals.md#node) | - |
`options` | object |  {} |

**Returns:** *Iterable‹[MarkEntry](globals.md#markentry)›*

###  matches

▸ **matches**(`node`: [Node](globals.md#node), `props`: Partial‹[Node](globals.md#node)›): *boolean*

*Defined in [interfaces/node.ts:21](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/node.ts#L21)*

**Parameters:**

Name | Type |
------ | ------ |
`node` | [Node](globals.md#node) |
`props` | Partial‹[Node](globals.md#node)› |

**Returns:** *boolean*

###  nodes

▸ **nodes**(`root`: [Node](globals.md#node), `options`: object): *Iterable‹[NodeEntry](globals.md#nodeentry)›*

*Defined in [interfaces/node.ts:402](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/node.ts#L402)*

Return an iterable of all the node entries of a root node. Each entry is
returned as a `[Node, Path]` tuple, with the path referring to the node's
position inside the root node.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`root` | [Node](globals.md#node) | - |
`options` | object |  {} |

**Returns:** *Iterable‹[NodeEntry](globals.md#nodeentry)›*

###  parent

▸ **parent**(`root`: [Node](globals.md#node), `path`: [Path](globals.md#path)): *[Ancestor](globals.md#ancestor)*

*Defined in [interfaces/node.ts:480](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/node.ts#L480)*

Get the parent of a node at a specific path.

**Parameters:**

Name | Type |
------ | ------ |
`root` | [Node](globals.md#node) |
`path` | [Path](globals.md#path) |

**Returns:** *[Ancestor](globals.md#ancestor)*

###  text

▸ **text**(`node`: [Node](globals.md#node)): *string*

*Defined in [interfaces/node.ts:501](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/node.ts#L501)*

Get the concatenated text string of a node's content.

Note that this will not include spaces or line breaks between block nodes.
It is not a user-facing string, but a string for performing offset-related
computations for a node.

**Parameters:**

Name | Type |
------ | ------ |
`node` | [Node](globals.md#node) |

**Returns:** *string*

###  texts

▸ **texts**(`root`: [Node](globals.md#node), `options`: object): *Iterable‹[TextEntry](globals.md#textentry)›*

*Defined in [interfaces/node.ts:513](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/node.ts#L513)*

Return an iterable of all leaf text nodes in a root node.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`root` | [Node](globals.md#node) | - |
`options` | object |  {} |

**Returns:** *Iterable‹[TextEntry](globals.md#textentry)›*

___

### `Const` NodeQueries

### ▪ **NodeQueries**: *object*

*Defined in [interfaces/editor/queries/node.ts:3](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/editor/queries/node.ts#L3)*

###  isMatch

▸ **isMatch**(`editor`: [Editor](interfaces/editor.md), `entry`: [NodeEntry](globals.md#nodeentry), `match`: [NodeMatch](globals.md#nodematch) | [NodeMatch](globals.md#nodematch)[]): *boolean*

*Defined in [interfaces/editor/queries/node.ts:8](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/editor/queries/node.ts#L8)*

Check if a node entry is a match.

**Parameters:**

Name | Type |
------ | ------ |
`editor` | [Editor](interfaces/editor.md) |
`entry` | [NodeEntry](globals.md#nodeentry) |
`match` | [NodeMatch](globals.md#nodematch) &#124; [NodeMatch](globals.md#nodematch)[] |

**Returns:** *boolean*

___

### `Const` NodeTransforms

### ▪ **NodeTransforms**: *object*

*Defined in [interfaces/editor/transforms/node.ts:14](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/editor/transforms/node.ts#L14)*

###  insertNodes

▸ **insertNodes**(`editor`: [Editor](interfaces/editor.md), `nodes`: [Node](globals.md#node) | [Node](globals.md#node)[], `options`: object): *void*

*Defined in [interfaces/editor/transforms/node.ts:19](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/editor/transforms/node.ts#L19)*

Insert nodes at a specific location in the Editor.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`editor` | [Editor](interfaces/editor.md) | - |
`nodes` | [Node](globals.md#node) &#124; [Node](globals.md#node)[] | - |
`options` | object |  {} |

**Returns:** *void*

###  liftNodes

▸ **liftNodes**(`editor`: [Editor](interfaces/editor.md), `options`: object): *void*

*Defined in [interfaces/editor/transforms/node.ts:123](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/editor/transforms/node.ts#L123)*

Lift nodes at a specific location upwards in the document tree, splitting
their parent in two if necessary.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`editor` | [Editor](interfaces/editor.md) | - |
`options` | object |  {} |

**Returns:** *void*

###  mergeNodes

▸ **mergeNodes**(`editor`: [Editor](interfaces/editor.md), `options`: object): *void*

*Defined in [interfaces/editor/transforms/node.ts:183](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/editor/transforms/node.ts#L183)*

Merge a node at a location with the previous node of the same depth,
removing any empty containing nodes after the merge if necessary.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`editor` | [Editor](interfaces/editor.md) | - |
`options` | object |  {} |

**Returns:** *void*

###  moveNodes

▸ **moveNodes**(`editor`: [Editor](interfaces/editor.md), `options`: object): *void*

*Defined in [interfaces/editor/transforms/node.ts:329](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/editor/transforms/node.ts#L329)*

Move the nodes at a location to a new location.

**Parameters:**

Name | Type |
------ | ------ |
`editor` | [Editor](interfaces/editor.md) |
`options` | object |

**Returns:** *void*

###  removeNodes

▸ **removeNodes**(`editor`: [Editor](interfaces/editor.md), `options`: object): *void*

*Defined in [interfaces/editor/transforms/node.ts:375](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/editor/transforms/node.ts#L375)*

Remove the nodes at a specific location in the document.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`editor` | [Editor](interfaces/editor.md) | - |
`options` | object |  {} |

**Returns:** *void*

###  setNodes

▸ **setNodes**(`editor`: [Editor](interfaces/editor.md), `props`: Partial‹[Node](globals.md#node)›, `options`: object): *void*

*Defined in [interfaces/editor/transforms/node.ts:419](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/editor/transforms/node.ts#L419)*

Set new properties on the nodes ...

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`editor` | [Editor](interfaces/editor.md) | - |
`props` | Partial‹[Node](globals.md#node)› | - |
`options` | object |  {} |

**Returns:** *void*

###  splitNodes

▸ **splitNodes**(`editor`: [Editor](interfaces/editor.md), `options`: object): *void*

*Defined in [interfaces/editor/transforms/node.ts:485](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/editor/transforms/node.ts#L485)*

Split the nodes at a specific location.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`editor` | [Editor](interfaces/editor.md) | - |
`options` | object |  {} |

**Returns:** *void*

###  unwrapNodes

▸ **unwrapNodes**(`editor`: [Editor](interfaces/editor.md), `options`: object): *void*

*Defined in [interfaces/editor/transforms/node.ts:609](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/editor/transforms/node.ts#L609)*

Unwrap the nodes at a location from a parent node, splitting the parent if
necessary to ensure that only the content in the range is unwrapped.

**Parameters:**

Name | Type |
------ | ------ |
`editor` | [Editor](interfaces/editor.md) |
`options` | object |

**Returns:** *void*

###  wrapNodes

▸ **wrapNodes**(`editor`: [Editor](interfaces/editor.md), `element`: [Element](interfaces/element.md), `options`: object): *void*

*Defined in [interfaces/editor/transforms/node.ts:659](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/editor/transforms/node.ts#L659)*

Wrap the nodes at a location in a new container node, splitting the edges
of the range first to ensure that only the content in the range is wrapped.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`editor` | [Editor](interfaces/editor.md) | - |
`element` | [Element](interfaces/element.md) | - |
`options` | object |  {} |

**Returns:** *void*

___

### `Const` Path

### ▪ **Path**: *object*

*Defined in [interfaces/path.ts:12](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/path.ts#L12)*

###  ancestors

▸ **ancestors**(`path`: [Path](globals.md#path), `options`: object): *[Path](globals.md#path)[]*

*Defined in [interfaces/path.ts:20](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/path.ts#L20)*

Get a list of ancestor paths for a given path.

The paths are sorted from deepest to shallowest ancestor. However, if the
`reverse: true` option is passed, they are reversed.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`path` | [Path](globals.md#path) | - |
`options` | object |  {} |

**Returns:** *[Path](globals.md#path)[]*

###  common

▸ **common**(`path`: [Path](globals.md#path), `another`: [Path](globals.md#path)): *[Path](globals.md#path)*

*Defined in [interfaces/path.ts:37](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/path.ts#L37)*

Get the common ancestor path of two paths.

**Parameters:**

Name | Type |
------ | ------ |
`path` | [Path](globals.md#path) |
`another` | [Path](globals.md#path) |

**Returns:** *[Path](globals.md#path)*

###  compare

▸ **compare**(`path`: [Path](globals.md#path), `another`: [Path](globals.md#path)): *-1 | 0 | 1*

*Defined in [interfaces/path.ts:63](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/path.ts#L63)*

Compare a path to another, returning an integer indicating whether the path
was before, at, or after the other.

Note: Two paths of unequal length can still receive a `0` result if one is
directly above or below the other. If you want exact matching, use
[Path.equals](globals.md#equals) instead.

**Parameters:**

Name | Type |
------ | ------ |
`path` | [Path](globals.md#path) |
`another` | [Path](globals.md#path) |

**Returns:** *-1 | 0 | 1*

###  endsAfter

▸ **endsAfter**(`path`: [Path](globals.md#path), `another`: [Path](globals.md#path)): *boolean*

*Defined in [interfaces/path.ts:78](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/path.ts#L78)*

Check if a path ends after one of the indexes in another.

**Parameters:**

Name | Type |
------ | ------ |
`path` | [Path](globals.md#path) |
`another` | [Path](globals.md#path) |

**Returns:** *boolean*

###  endsAt

▸ **endsAt**(`path`: [Path](globals.md#path), `another`: [Path](globals.md#path)): *boolean*

*Defined in [interfaces/path.ts:91](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/path.ts#L91)*

Check if a path ends at one of the indexes in another.

**Parameters:**

Name | Type |
------ | ------ |
`path` | [Path](globals.md#path) |
`another` | [Path](globals.md#path) |

**Returns:** *boolean*

###  endsBefore

▸ **endsBefore**(`path`: [Path](globals.md#path), `another`: [Path](globals.md#path)): *boolean*

*Defined in [interfaces/path.ts:102](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/path.ts#L102)*

Check if a path ends before one of the indexes in another.

**Parameters:**

Name | Type |
------ | ------ |
`path` | [Path](globals.md#path) |
`another` | [Path](globals.md#path) |

**Returns:** *boolean*

###  equals

▸ **equals**(`path`: [Path](globals.md#path), `another`: [Path](globals.md#path)): *boolean*

*Defined in [interfaces/path.ts:115](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/path.ts#L115)*

Check if a path is exactly equal to another.

**Parameters:**

Name | Type |
------ | ------ |
`path` | [Path](globals.md#path) |
`another` | [Path](globals.md#path) |

**Returns:** *boolean*

###  isAfter

▸ **isAfter**(`path`: [Path](globals.md#path), `another`: [Path](globals.md#path)): *boolean*

*Defined in [interfaces/path.ts:125](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/path.ts#L125)*

Check if a path is after another.

**Parameters:**

Name | Type |
------ | ------ |
`path` | [Path](globals.md#path) |
`another` | [Path](globals.md#path) |

**Returns:** *boolean*

###  isAncestor

▸ **isAncestor**(`path`: [Path](globals.md#path), `another`: [Path](globals.md#path)): *boolean*

*Defined in [interfaces/path.ts:133](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/path.ts#L133)*

Check if a path is an ancestor of another.

**Parameters:**

Name | Type |
------ | ------ |
`path` | [Path](globals.md#path) |
`another` | [Path](globals.md#path) |

**Returns:** *boolean*

###  isBefore

▸ **isBefore**(`path`: [Path](globals.md#path), `another`: [Path](globals.md#path)): *boolean*

*Defined in [interfaces/path.ts:141](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/path.ts#L141)*

Check if a path is before another.

**Parameters:**

Name | Type |
------ | ------ |
`path` | [Path](globals.md#path) |
`another` | [Path](globals.md#path) |

**Returns:** *boolean*

###  isChild

▸ **isChild**(`path`: [Path](globals.md#path), `another`: [Path](globals.md#path)): *boolean*

*Defined in [interfaces/path.ts:149](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/path.ts#L149)*

Check if a path is a child of another.

**Parameters:**

Name | Type |
------ | ------ |
`path` | [Path](globals.md#path) |
`another` | [Path](globals.md#path) |

**Returns:** *boolean*

###  isCommon

▸ **isCommon**(`path`: [Path](globals.md#path), `another`: [Path](globals.md#path)): *boolean*

*Defined in [interfaces/path.ts:159](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/path.ts#L159)*

Check if a path is equal to or an ancestor of another.

**Parameters:**

Name | Type |
------ | ------ |
`path` | [Path](globals.md#path) |
`another` | [Path](globals.md#path) |

**Returns:** *boolean*

###  isDescendant

▸ **isDescendant**(`path`: [Path](globals.md#path), `another`: [Path](globals.md#path)): *boolean*

*Defined in [interfaces/path.ts:167](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/path.ts#L167)*

Check if a path is a descendant of another.

**Parameters:**

Name | Type |
------ | ------ |
`path` | [Path](globals.md#path) |
`another` | [Path](globals.md#path) |

**Returns:** *boolean*

###  isParent

▸ **isParent**(`path`: [Path](globals.md#path), `another`: [Path](globals.md#path)): *boolean*

*Defined in [interfaces/path.ts:175](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/path.ts#L175)*

Check if a path is the parent of another.

**Parameters:**

Name | Type |
------ | ------ |
`path` | [Path](globals.md#path) |
`another` | [Path](globals.md#path) |

**Returns:** *boolean*

###  isPath

▸ **isPath**(`value`: any): *value is Path*

*Defined in [interfaces/path.ts:185](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/path.ts#L185)*

Check is a value implements the `Path` interface.

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *value is Path*

###  isSibling

▸ **isSibling**(`path`: [Path](globals.md#path), `another`: [Path](globals.md#path)): *boolean*

*Defined in [interfaces/path.ts:196](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/path.ts#L196)*

Check if a path is a sibling of another.

**Parameters:**

Name | Type |
------ | ------ |
`path` | [Path](globals.md#path) |
`another` | [Path](globals.md#path) |

**Returns:** *boolean*

###  levels

▸ **levels**(`path`: [Path](globals.md#path), `options`: object): *[Path](globals.md#path)[]*

*Defined in [interfaces/path.ts:216](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/path.ts#L216)*

Get a list of paths at every level down to a path. Note: this is the same
as `Path.ancestors`, but including the path itself.

The paths are sorted from shallowest to deepest. However, if the `reverse:
true` option is passed, they are reversed.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`path` | [Path](globals.md#path) | - |
`options` | object |  {} |

**Returns:** *[Path](globals.md#path)[]*

###  next

▸ **next**(`path`: [Path](globals.md#path)): *[Path](globals.md#path)*

*Defined in [interfaces/path.ts:240](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/path.ts#L240)*

Given a path, get the path to the next sibling node.

**Parameters:**

Name | Type |
------ | ------ |
`path` | [Path](globals.md#path) |

**Returns:** *[Path](globals.md#path)*

###  parent

▸ **parent**(`path`: [Path](globals.md#path)): *[Path](globals.md#path)*

*Defined in [interfaces/path.ts:255](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/path.ts#L255)*

Given a path, return a new path referring to the parent node above it.

**Parameters:**

Name | Type |
------ | ------ |
`path` | [Path](globals.md#path) |

**Returns:** *[Path](globals.md#path)*

###  previous

▸ **previous**(`path`: [Path](globals.md#path)): *[Path](globals.md#path)*

*Defined in [interfaces/path.ts:267](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/path.ts#L267)*

Given a path, get the path to the previous sibling node.

**Parameters:**

Name | Type |
------ | ------ |
`path` | [Path](globals.md#path) |

**Returns:** *[Path](globals.md#path)*

###  relative

▸ **relative**(`path`: [Path](globals.md#path), `ancestor`: [Path](globals.md#path)): *[Path](globals.md#path)*

*Defined in [interfaces/path.ts:289](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/path.ts#L289)*

Get a path relative to an ancestor.

**Parameters:**

Name | Type |
------ | ------ |
`path` | [Path](globals.md#path) |
`ancestor` | [Path](globals.md#path) |

**Returns:** *[Path](globals.md#path)*

###  transform

▸ **transform**(`path`: [Path](globals.md#path), `operation`: Operation, `options`: object): *[Path](globals.md#path) | null*

*Defined in [interfaces/path.ts:303](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/path.ts#L303)*

Transform a path by an operation.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`path` | [Path](globals.md#path) | - |
`operation` | Operation | - |
`options` | object |  {} |

**Returns:** *[Path](globals.md#path) | null*

___

### `Const` PathRef

### ▪ **PathRef**: *object*

*Defined in [interfaces/path-ref.ts:15](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/path-ref.ts#L15)*

###  transform

▸ **transform**(`ref`: [PathRef](interfaces/pathref.md), `op`: Operation): *void*

*Defined in [interfaces/path-ref.ts:20](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/path-ref.ts#L20)*

Transform the path ref's current value by an operation.

**Parameters:**

Name | Type |
------ | ------ |
`ref` | [PathRef](interfaces/pathref.md) |
`op` | Operation |

**Returns:** *void*

___

### `Const` Point

### ▪ **Point**: *object*

*Defined in [interfaces/point.ts:18](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/point.ts#L18)*

###  compare

▸ **compare**(`point`: [Point](interfaces/point.md), `another`: [Point](interfaces/point.md)): *-1 | 0 | 1*

*Defined in [interfaces/point.ts:24](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/point.ts#L24)*

Compare a point to another, returning an integer indicating whether the
point was before, at, or after the other.

**Parameters:**

Name | Type |
------ | ------ |
`point` | [Point](interfaces/point.md) |
`another` | [Point](interfaces/point.md) |

**Returns:** *-1 | 0 | 1*

###  equals

▸ **equals**(`point`: [Point](interfaces/point.md), `another`: [Point](interfaces/point.md)): *boolean*

*Defined in [interfaces/point.ts:56](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/point.ts#L56)*

Check if a point is exactly equal to another.

**Parameters:**

Name | Type |
------ | ------ |
`point` | [Point](interfaces/point.md) |
`another` | [Point](interfaces/point.md) |

**Returns:** *boolean*

###  isAfter

▸ **isAfter**(`point`: [Point](interfaces/point.md), `another`: [Point](interfaces/point.md)): *boolean*

*Defined in [interfaces/point.ts:40](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/point.ts#L40)*

Check if a point is after another.

**Parameters:**

Name | Type |
------ | ------ |
`point` | [Point](interfaces/point.md) |
`another` | [Point](interfaces/point.md) |

**Returns:** *boolean*

###  isBefore

▸ **isBefore**(`point`: [Point](interfaces/point.md), `another`: [Point](interfaces/point.md)): *boolean*

*Defined in [interfaces/point.ts:48](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/point.ts#L48)*

Check if a point is before another.

**Parameters:**

Name | Type |
------ | ------ |
`point` | [Point](interfaces/point.md) |
`another` | [Point](interfaces/point.md) |

**Returns:** *boolean*

###  isPoint

▸ **isPoint**(`value`: any): *value is Point*

*Defined in [interfaces/point.ts:67](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/point.ts#L67)*

Check if a value implements the `Point` interface.

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *value is Point*

###  transform

▸ **transform**(`point`: [Point](interfaces/point.md), `op`: Operation, `options`: object): *[Point](interfaces/point.md) | null*

*Defined in [interfaces/point.ts:79](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/point.ts#L79)*

Transform a point by an operation.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`point` | [Point](interfaces/point.md) | - |
`op` | Operation | - |
`options` | object |  {} |

**Returns:** *[Point](interfaces/point.md) | null*

___

### `Const` PointRef

### ▪ **PointRef**: *object*

*Defined in [interfaces/point-ref.ts:15](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/point-ref.ts#L15)*

###  transform

▸ **transform**(`ref`: [PointRef](interfaces/pointref.md), `op`: Operation): *void*

*Defined in [interfaces/point-ref.ts:20](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/point-ref.ts#L20)*

Transform the point ref's current value by an operation.

**Parameters:**

Name | Type |
------ | ------ |
`ref` | [PointRef](interfaces/pointref.md) |
`op` | Operation |

**Returns:** *void*

___

### `Const` Range

### ▪ **Range**: *object*

*Defined in [interfaces/range.ts:17](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/range.ts#L17)*

###  edges

▸ **edges**(`range`: [Range](interfaces/range.md), `options`: object): *[[Point](interfaces/point.md), [Point](interfaces/point.md)]*

*Defined in [interfaces/range.ts:23](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/range.ts#L23)*

Get the start and end points of a range, in the order in which they appear
in the document.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`range` | [Range](interfaces/range.md) | - |
`options` | object |  {} |

**Returns:** *[[Point](interfaces/point.md), [Point](interfaces/point.md)]*

###  end

▸ **end**(`range`: [Range](interfaces/range.md)): *[Point](interfaces/point.md)*

*Defined in [interfaces/range.ts:40](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/range.ts#L40)*

Get the end point of a range.

**Parameters:**

Name | Type |
------ | ------ |
`range` | [Range](interfaces/range.md) |

**Returns:** *[Point](interfaces/point.md)*

###  equals

▸ **equals**(`range`: [Range](interfaces/range.md), `another`: [Range](interfaces/range.md)): *boolean*

*Defined in [interfaces/range.ts:49](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/range.ts#L49)*

Check if a range is exactly equal to another.

**Parameters:**

Name | Type |
------ | ------ |
`range` | [Range](interfaces/range.md) |
`another` | [Range](interfaces/range.md) |

**Returns:** *boolean*

###  exists

▸ **exists**(`range`: [Range](interfaces/range.md), `target`: [Range](interfaces/range.md)[] | Record‹string, [Range](interfaces/range.md)›): *boolean*

*Defined in [interfaces/range.ts:60](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/range.ts#L60)*

Check if a range exists in a list or map of ranges.

**Parameters:**

Name | Type |
------ | ------ |
`range` | [Range](interfaces/range.md) |
`target` | [Range](interfaces/range.md)[] &#124; Record‹string, [Range](interfaces/range.md)› |

**Returns:** *boolean*

###  includes

▸ **includes**(`range`: [Range](interfaces/range.md), `target`: [Path](globals.md#path) | [Point](interfaces/point.md) | [Range](interfaces/range.md)): *boolean*

*Defined in [interfaces/range.ts:80](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/range.ts#L80)*

Check if a range includes a path, a point or part of another range.

**Parameters:**

Name | Type |
------ | ------ |
`range` | [Range](interfaces/range.md) |
`target` | [Path](globals.md#path) &#124; [Point](interfaces/point.md) &#124; [Range](interfaces/range.md) |

**Returns:** *boolean*

###  intersection

▸ **intersection**(`range`: [Range](interfaces/range.md), `another`: [Range](interfaces/range.md)): *[Range](interfaces/range.md) | null*

*Defined in [interfaces/range.ts:113](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/range.ts#L113)*

Get the intersection of a range with another.

**Parameters:**

Name | Type |
------ | ------ |
`range` | [Range](interfaces/range.md) |
`another` | [Range](interfaces/range.md) |

**Returns:** *[Range](interfaces/range.md) | null*

###  isBackward

▸ **isBackward**(`range`: [Range](interfaces/range.md)): *boolean*

*Defined in [interfaces/range.ts:132](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/range.ts#L132)*

Check if a range is backward, meaning that its anchor point appears in the
document _after_ its focus point.

**Parameters:**

Name | Type |
------ | ------ |
`range` | [Range](interfaces/range.md) |

**Returns:** *boolean*

###  isCollapsed

▸ **isCollapsed**(`range`: [Range](interfaces/range.md)): *boolean*

*Defined in [interfaces/range.ts:142](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/range.ts#L142)*

Check if a range is collapsed, meaning that both its anchor and focus
points refer to the exact same position in the document.

**Parameters:**

Name | Type |
------ | ------ |
`range` | [Range](interfaces/range.md) |

**Returns:** *boolean*

###  isExpanded

▸ **isExpanded**(`range`: [Range](interfaces/range.md)): *boolean*

*Defined in [interfaces/range.ts:153](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/range.ts#L153)*

Check if a range is expanded.

This is the opposite of [Range.isCollapsed](globals.md#iscollapsed) and is provided for legibility.

**Parameters:**

Name | Type |
------ | ------ |
`range` | [Range](interfaces/range.md) |

**Returns:** *boolean*

###  isForward

▸ **isForward**(`range`: [Range](interfaces/range.md)): *boolean*

*Defined in [interfaces/range.ts:163](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/range.ts#L163)*

Check if a range is forward.

This is the opposite of [Range.isBackward](globals.md#isbackward) and is provided for legibility.

**Parameters:**

Name | Type |
------ | ------ |
`range` | [Range](interfaces/range.md) |

**Returns:** *boolean*

###  isRange

▸ **isRange**(`value`: any): *value is Range*

*Defined in [interfaces/range.ts:171](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/range.ts#L171)*

Check if a value implements the [Range](interfaces/range.md) interface.

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *value is Range*

###  isRangeList

▸ **isRangeList**(`value`: any): *value is Range[]*

*Defined in [interfaces/range.ts:183](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/range.ts#L183)*

Check if a value is an array of `Range` objects.

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *value is Range[]*

###  isRangeMap

▸ **isRangeMap**(`value`: any): *value is Record<string, Range>*

*Defined in [interfaces/range.ts:193](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/range.ts#L193)*

Check if a value is a map of `Range` objects.

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *value is Record<string, Range>*

###  points

▸ **points**(`range`: [Range](interfaces/range.md)): *Iterable‹[PointEntry](globals.md#pointentry)›*

*Defined in [interfaces/range.ts:209](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/range.ts#L209)*

Iterate through all of the point entries in a range.

**Parameters:**

Name | Type |
------ | ------ |
`range` | [Range](interfaces/range.md) |

**Returns:** *Iterable‹[PointEntry](globals.md#pointentry)›*

###  start

▸ **start**(`range`: [Range](interfaces/range.md)): *[Point](interfaces/point.md)*

*Defined in [interfaces/range.ts:218](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/range.ts#L218)*

Get the start point of a range.

**Parameters:**

Name | Type |
------ | ------ |
`range` | [Range](interfaces/range.md) |

**Returns:** *[Point](interfaces/point.md)*

###  transform

▸ **transform**(`range`: [Range](interfaces/range.md), `op`: Operation, `options`: object): *[Range](interfaces/range.md) | null*

*Defined in [interfaces/range.ts:227](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/range.ts#L227)*

Transform a range by an operation.

**Parameters:**

Name | Type |
------ | ------ |
`range` | [Range](interfaces/range.md) |
`op` | Operation |
`options` | object |

**Returns:** *[Range](interfaces/range.md) | null*

___

### `Const` RangeQueries

### ▪ **RangeQueries**: *object*

*Defined in [interfaces/editor/queries/range.ts:3](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/editor/queries/range.ts#L3)*

###  unhangRange

▸ **unhangRange**(`editor`: [Editor](interfaces/editor.md), `range`: [Range](interfaces/range.md)): *[Range](interfaces/range.md)*

*Defined in [interfaces/editor/queries/range.ts:8](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/editor/queries/range.ts#L8)*

Convert a range into a non-hanging one.

**Parameters:**

Name | Type |
------ | ------ |
`editor` | [Editor](interfaces/editor.md) |
`range` | [Range](interfaces/range.md) |

**Returns:** *[Range](interfaces/range.md)*

___

### `Const` RangeRef

### ▪ **RangeRef**: *object*

*Defined in [interfaces/range-ref.ts:15](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/range-ref.ts#L15)*

###  transform

▸ **transform**(`ref`: [RangeRef](interfaces/rangeref.md), `op`: Operation): *void*

*Defined in [interfaces/range-ref.ts:20](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/range-ref.ts#L20)*

Transform the range ref's current value by an operation.

**Parameters:**

Name | Type |
------ | ------ |
`ref` | [RangeRef](interfaces/rangeref.md) |
`op` | Operation |

**Returns:** *void*

___

### `Const` SelectionTransforms

### ▪ **SelectionTransforms**: *object*

*Defined in [interfaces/editor/transforms/selection.ts:3](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/editor/transforms/selection.ts#L3)*

###  collapse

▸ **collapse**(`editor`: [Editor](interfaces/editor.md), `options`: object): *void*

*Defined in [interfaces/editor/transforms/selection.ts:8](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/editor/transforms/selection.ts#L8)*

Collapse the selection.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`editor` | [Editor](interfaces/editor.md) | - |
`options` | object |  {} |

**Returns:** *void*

###  deselect

▸ **deselect**(`editor`: [Editor](interfaces/editor.md)): *void*

*Defined in [interfaces/editor/transforms/selection.ts:36](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/editor/transforms/selection.ts#L36)*

Unset the selection.

**Parameters:**

Name | Type |
------ | ------ |
`editor` | [Editor](interfaces/editor.md) |

**Returns:** *void*

###  move

▸ **move**(`editor`: [Editor](interfaces/editor.md), `options`: object): *void*

*Defined in [interfaces/editor/transforms/selection.ts:52](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/editor/transforms/selection.ts#L52)*

Move the selection's point forward or backward.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`editor` | [Editor](interfaces/editor.md) | - |
`options` | object |  {} |

**Returns:** *void*

###  select

▸ **select**(`editor`: [Editor](interfaces/editor.md), `target`: [Location](globals.md#location)): *void*

*Defined in [interfaces/editor/transforms/selection.ts:108](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/editor/transforms/selection.ts#L108)*

Set the selection to a new value.

**Parameters:**

Name | Type |
------ | ------ |
`editor` | [Editor](interfaces/editor.md) |
`target` | [Location](globals.md#location) |

**Returns:** *void*

###  setPoint

▸ **setPoint**(`editor`: [Editor](interfaces/editor.md), `props`: Partial‹[Point](interfaces/point.md)›, `options`: object): *void*

*Defined in [interfaces/editor/transforms/selection.ts:136](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/editor/transforms/selection.ts#L136)*

Set new properties on one of the selection's points.

**Parameters:**

Name | Type |
------ | ------ |
`editor` | [Editor](interfaces/editor.md) |
`props` | Partial‹[Point](interfaces/point.md)› |
`options` | object |

**Returns:** *void*

###  setSelection

▸ **setSelection**(`editor`: [Editor](interfaces/editor.md), `props`: Partial‹[Range](interfaces/range.md)›): *void*

*Defined in [interfaces/editor/transforms/selection.ts:173](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/editor/transforms/selection.ts#L173)*

Set new properties on the selection.

**Parameters:**

Name | Type |
------ | ------ |
`editor` | [Editor](interfaces/editor.md) |
`props` | Partial‹[Range](interfaces/range.md)› |

**Returns:** *void*

___

### `Const` Span

### ▪ **Span**: *object*

*Defined in [interfaces/location.ts:31](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/location.ts#L31)*

###  isSpan

▸ **isSpan**(`value`: any): *value is Span*

*Defined in [interfaces/location.ts:36](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/location.ts#L36)*

Check if a value implements the `Span` interface.

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *value is Span*

___

### `Const` Text

### ▪ **Text**: *object*

*Defined in [interfaces/text.ts:16](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/text.ts#L16)*

###  isText

▸ **isText**(`value`: any): *value is Text*

*Defined in [interfaces/text.ts:21](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/text.ts#L21)*

Check if a value implements the `Text` interface.

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *value is Text*

###  isTextList

▸ **isTextList**(`value`: any): *value is Text[]*

*Defined in [interfaces/text.ts:33](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/text.ts#L33)*

Check if a value is a list of `Text` objects.

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *value is Text[]*

###  matches

▸ **matches**(`text`: [Text](interfaces/text.md), `props`: Partial‹[Text](interfaces/text.md)›): *boolean*

*Defined in [interfaces/text.ts:45](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/text.ts#L45)*

Check if an text matches set of properties.

Note: this is for matching custom properties, and it does not ensure that
the `text` property are two nodes equal. However, if `marks` are passed it
will ensure that the set of marks is exactly equal.

**Parameters:**

Name | Type |
------ | ------ |
`text` | [Text](interfaces/text.md) |
`props` | Partial‹[Text](interfaces/text.md)› |

**Returns:** *boolean*

___

### `Const` TextTransforms

### ▪ **TextTransforms**: *object*

*Defined in [interfaces/editor/transforms/text.ts:12](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/editor/transforms/text.ts#L12)*

###  delete

▸ **delete**(`editor`: [Editor](interfaces/editor.md), `options`: object): *void*

*Defined in [interfaces/editor/transforms/text.ts:17](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/editor/transforms/text.ts#L17)*

Delete content in the editor.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`editor` | [Editor](interfaces/editor.md) | - |
`options` | object |  {} |

**Returns:** *void*

###  insertFragment

▸ **insertFragment**(`editor`: [Editor](interfaces/editor.md), `fragment`: [Node](globals.md#node)[], `options`: object): *void*

*Defined in [interfaces/editor/transforms/text.ts:154](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/editor/transforms/text.ts#L154)*

Insert a fragment at a specific location in the editor.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`editor` | [Editor](interfaces/editor.md) | - |
`fragment` | [Node](globals.md#node)[] | - |
`options` | object |  {} |

**Returns:** *void*

###  insertText

▸ **insertText**(`editor`: [Editor](interfaces/editor.md), `text`: string, `options`: object): *void*

*Defined in [interfaces/editor/transforms/text.ts:331](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/editor/transforms/text.ts#L331)*

Insert a string of text in the Editor.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`editor` | [Editor](interfaces/editor.md) | - |
`text` | string | - |
`options` | object |  {} |

**Returns:** *void*
