[slate-history](README.md) › [Globals](globals.md)

# slate-history

## Index

### Interfaces

* [History](interfaces/history.md)
* [HistoryEditor](interfaces/historyeditor.md)
* [RedoCommand](interfaces/redocommand.md)
* [UndoCommand](interfaces/undocommand.md)

### Type aliases

* [HistoryCommand](globals.md#historycommand)

### Variables

* [HISTORY](globals.md#const-history)
* [MERGING](globals.md#const-merging)
* [SAVING](globals.md#const-saving)

### Functions

* [withHistory](globals.md#const-withhistory)

### Object literals

* [History](globals.md#const-history)
* [HistoryCommand](globals.md#const-historycommand)
* [HistoryEditor](globals.md#const-historyeditor)

## Type aliases

###  HistoryCommand

Ƭ **HistoryCommand**: *[RedoCommand](interfaces/redocommand.md) | [UndoCommand](interfaces/undocommand.md)*

*Defined in [slate-history/src/history-command.ts:11](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-history/src/history-command.ts#L11)*

## Variables

### `Const` HISTORY

• **HISTORY**: *WeakMap‹Editor, [History](interfaces/history.md)›* =  new WeakMap<Editor, History>()

*Defined in [slate-history/src/history-editor.ts:8](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-history/src/history-editor.ts#L8)*

Weakmaps for attaching state to the editor.

___

### `Const` MERGING

• **MERGING**: *WeakMap‹Editor, undefined | false | true›* =  new WeakMap<Editor, boolean | undefined>()

*Defined in [slate-history/src/history-editor.ts:10](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-history/src/history-editor.ts#L10)*

___

### `Const` SAVING

• **SAVING**: *WeakMap‹Editor, undefined | false | true›* =  new WeakMap<Editor, boolean | undefined>()

*Defined in [slate-history/src/history-editor.ts:9](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-history/src/history-editor.ts#L9)*

## Functions

### `Const` withHistory

▸ **withHistory**(`editor`: Editor): *Editor*

*Defined in [slate-history/src/with-history.ts:11](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-history/src/with-history.ts#L11)*

The `withHistory` plugin keeps track of the operation history of a Slate
editor as operations are applied to it, using undo and redo stacks.

**Parameters:**

Name | Type |
------ | ------ |
`editor` | Editor |

**Returns:** *Editor*

## Object literals

### `Const` History

### ▪ **History**: *object*

*Defined in [slate-history/src/history.ts:14](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-history/src/history.ts#L14)*

###  isHistory

▸ **isHistory**(`value`: any): *value is History*

*Defined in [slate-history/src/history.ts:19](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-history/src/history.ts#L19)*

Check if a value is a `History` object.

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *value is History*

___

### `Const` HistoryCommand

### ▪ **HistoryCommand**: *object*

*Defined in [slate-history/src/history-command.ts:13](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-history/src/history-command.ts#L13)*

###  isHistoryCommand

▸ **isHistoryCommand**(`value`: any): *value is HistoryCommand*

*Defined in [slate-history/src/history-command.ts:18](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-history/src/history-command.ts#L18)*

Check if a value is a `HistoryCommand` object.

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *value is HistoryCommand*

###  isRedoCommand

▸ **isRedoCommand**(`value`: any): *value is RedoCommand*

*Defined in [slate-history/src/history-command.ts:28](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-history/src/history-command.ts#L28)*

Check if a value is a `RedoCommand` object.

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *value is RedoCommand*

###  isUndoCommand

▸ **isUndoCommand**(`value`: any): *value is UndoCommand*

*Defined in [slate-history/src/history-command.ts:36](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-history/src/history-command.ts#L36)*

Check if a value is an `UndoCommand` object.

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *value is UndoCommand*

___

### `Const` HistoryEditor

### ▪ **HistoryEditor**: *object*

*Defined in [slate-history/src/history-editor.ts:20](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-history/src/history-editor.ts#L20)*

###  isHistoryEditor

▸ **isHistoryEditor**(`value`: any): *value is HistoryEditor*

*Defined in [slate-history/src/history-editor.ts:25](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-history/src/history-editor.ts#L25)*

Check if a value is a `HistoryEditor` object.

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *value is HistoryEditor*

###  isMerging

▸ **isMerging**(`editor`: Editor): *boolean | undefined*

*Defined in [slate-history/src/history-editor.ts:33](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-history/src/history-editor.ts#L33)*

Get the merge flag's current value.

**Parameters:**

Name | Type |
------ | ------ |
`editor` | Editor |

**Returns:** *boolean | undefined*

###  isSaving

▸ **isSaving**(`editor`: Editor): *boolean | undefined*

*Defined in [slate-history/src/history-editor.ts:41](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-history/src/history-editor.ts#L41)*

Get the saving flag's current value.

**Parameters:**

Name | Type |
------ | ------ |
`editor` | Editor |

**Returns:** *boolean | undefined*

###  withoutMerging

▸ **withoutMerging**(`editor`: Editor, `fn`: function): *void*

*Defined in [slate-history/src/history-editor.ts:50](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-history/src/history-editor.ts#L50)*

Apply a series of changes inside a synchronous `fn`, without merging any of
the new operations into previous save point in the history.

**Parameters:**

▪ **editor**: *Editor*

▪ **fn**: *function*

▸ (): *void*

**Returns:** *void*

###  withoutSaving

▸ **withoutSaving**(`editor`: Editor, `fn`: function): *void*

*Defined in [slate-history/src/history-editor.ts:62](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-history/src/history-editor.ts#L62)*

Apply a series of changes inside a synchronous `fn`, without saving any of
their operations into the history.

**Parameters:**

▪ **editor**: *Editor*

▪ **fn**: *function*

▸ (): *void*

**Returns:** *void*
