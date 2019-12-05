[slate-history](../README.md) › [Globals](../globals.md) › [HistoryEditor](historyeditor.md)

# Interface: HistoryEditor

`HistoryEditor` contains helpers for history-enabled editors.

## Hierarchy

* Editor

  ↳ **HistoryEditor**

## Indexable

* \[ **key**: *string*\]: any

`HistoryEditor` contains helpers for history-enabled editors.

## Index

### Properties

* [Editor](historyeditor.md#editor)
* [apply](historyeditor.md#apply)
* [children](historyeditor.md#children)
* [exec](historyeditor.md#exec)
* [history](historyeditor.md#history)
* [isInline](historyeditor.md#isinline)
* [isVoid](historyeditor.md#isvoid)
* [normalizeNode](historyeditor.md#normalizenode)
* [onChange](historyeditor.md#onchange)
* [operations](historyeditor.md#operations)
* [selection](historyeditor.md#selection)

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

###  history

• **history**: *[History](history.md)*

*Defined in [slate-history/src/history-editor.ts:17](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-history/src/history-editor.ts#L17)*

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
