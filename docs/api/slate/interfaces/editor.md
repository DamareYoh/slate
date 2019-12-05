[slate](../README.md) › [Globals](../globals.md) › [Editor](editor.md)

# Interface: Editor

The `Editor` interface stores all the state of a Slate editor. It is extended
by plugins that wish to add their own helpers and implement new behaviors.

## Hierarchy

* **Editor**

## Indexable

* \[ **key**: *string*\]: any

The `Editor` interface stores all the state of a Slate editor. It is extended
by plugins that wish to add their own helpers and implement new behaviors.

## Index

### Properties

* [apply](editor.md#apply)
* [children](editor.md#children)
* [exec](editor.md#exec)
* [isInline](editor.md#isinline)
* [isVoid](editor.md#isvoid)
* [normalizeNode](editor.md#normalizenode)
* [onChange](editor.md#onchange)
* [operations](editor.md#operations)
* [selection](editor.md#selection)

## Properties

###  apply

• **apply**: *function*

*Defined in [interfaces/editor/index.ts:20](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/editor/index.ts#L20)*

#### Type declaration:

▸ (`operation`: Operation): *void*

**Parameters:**

Name | Type |
------ | ------ |
`operation` | Operation |

___

###  children

• **children**: *[Node](../globals.md#node)[]*

*Defined in [interfaces/editor/index.ts:21](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/editor/index.ts#L21)*

___

###  exec

• **exec**: *function*

*Defined in [interfaces/editor/index.ts:22](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/editor/index.ts#L22)*

#### Type declaration:

▸ (`command`: [Command](command.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`command` | [Command](command.md) |

___

###  isInline

• **isInline**: *function*

*Defined in [interfaces/editor/index.ts:23](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/editor/index.ts#L23)*

#### Type declaration:

▸ (`element`: [Element](element.md)): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`element` | [Element](element.md) |

___

###  isVoid

• **isVoid**: *function*

*Defined in [interfaces/editor/index.ts:24](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/editor/index.ts#L24)*

#### Type declaration:

▸ (`element`: [Element](element.md)): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`element` | [Element](element.md) |

___

###  normalizeNode

• **normalizeNode**: *function*

*Defined in [interfaces/editor/index.ts:25](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/editor/index.ts#L25)*

#### Type declaration:

▸ (`entry`: [NodeEntry](../globals.md#nodeentry)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`entry` | [NodeEntry](../globals.md#nodeentry) |

___

###  onChange

• **onChange**: *function*

*Defined in [interfaces/editor/index.ts:26](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/editor/index.ts#L26)*

#### Type declaration:

▸ (`children`: [Node](../globals.md#node)[], `operations`: Operation[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`children` | [Node](../globals.md#node)[] |
`operations` | Operation[] |

___

###  operations

• **operations**: *Operation[]*

*Defined in [interfaces/editor/index.ts:27](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/editor/index.ts#L27)*

___

###  selection

• **selection**: *[Range](range.md) | null*

*Defined in [interfaces/editor/index.ts:28](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/editor/index.ts#L28)*
