[slate-react](../README.md) › [Globals](../globals.md) › [ReactEditor](reacteditor.md)

# Interface: ReactEditor

## Hierarchy

* Editor

  ↳ **ReactEditor**

## Indexable

* \[ **key**: *string*\]: any

## Index

### Properties

* [Editor](reacteditor.md#editor)
* [apply](reacteditor.md#apply)
* [children](reacteditor.md#children)
* [exec](reacteditor.md#exec)
* [isInline](reacteditor.md#isinline)
* [isVoid](reacteditor.md#isvoid)
* [normalizeNode](reacteditor.md#normalizenode)
* [onChange](reacteditor.md#onchange)
* [operations](reacteditor.md#operations)
* [selection](reacteditor.md#selection)

## Properties

###  Editor

• **Editor**: *object*

Defined in slate/lib/interfaces/editor/index.d.ts:18

#### Type declaration:

___

###  apply

• **apply**: *function*

*Inherited from void*

Defined in slate/lib/interfaces/editor/index.d.ts:7

#### Type declaration:

▸ (`operation`: Operation): *void*

**Parameters:**

Name | Type |
------ | ------ |
`operation` | Operation |

___

###  children

• **children**: *Node[]*

*Inherited from void*

Defined in slate/lib/interfaces/editor/index.d.ts:8

___

###  exec

• **exec**: *function*

*Inherited from void*

Defined in slate/lib/interfaces/editor/index.d.ts:9

#### Type declaration:

▸ (`command`: Command): *void*

**Parameters:**

Name | Type |
------ | ------ |
`command` | Command |

___

###  isInline

• **isInline**: *function*

*Inherited from void*

Defined in slate/lib/interfaces/editor/index.d.ts:10

#### Type declaration:

▸ (`element`: Element): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`element` | Element |

___

###  isVoid

• **isVoid**: *function*

*Inherited from void*

Defined in slate/lib/interfaces/editor/index.d.ts:11

#### Type declaration:

▸ (`element`: Element): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`element` | Element |

___

###  normalizeNode

• **normalizeNode**: *function*

*Inherited from void*

Defined in slate/lib/interfaces/editor/index.d.ts:12

#### Type declaration:

▸ (`entry`: NodeEntry): *void*

**Parameters:**

Name | Type |
------ | ------ |
`entry` | NodeEntry |

___

###  onChange

• **onChange**: *function*

*Inherited from void*

Defined in slate/lib/interfaces/editor/index.d.ts:13

#### Type declaration:

▸ (`children`: Node[], `operations`: Operation[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`children` | Node[] |
`operations` | Operation[] |

___

###  operations

• **operations**: *Operation[]*

*Inherited from void*

Defined in slate/lib/interfaces/editor/index.d.ts:14

___

###  selection

• **selection**: *Range | null*

*Inherited from void*

Defined in slate/lib/interfaces/editor/index.d.ts:15
