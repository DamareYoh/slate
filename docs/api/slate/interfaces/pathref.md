[slate](../README.md) › [Globals](../globals.md) › [PathRef](pathref.md)

# Interface: PathRef

`PathRef` objects keep a specific path in a document synced over time as new
operations are applied to the editor. You can access their `current` property
at any time for the up-to-date path value.

## Hierarchy

* **PathRef**

## Index

### Properties

* [affinity](pathref.md#affinity)
* [current](pathref.md#current)

### Methods

* [unref](pathref.md#unref)

## Properties

###  affinity

• **affinity**: *"forward" | "backward" | null*

*Defined in [interfaces/path-ref.ts:11](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/path-ref.ts#L11)*

___

###  current

• **current**: *[Path](../globals.md#path) | null*

*Defined in [interfaces/path-ref.ts:10](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/path-ref.ts#L10)*

## Methods

###  unref

▸ **unref**(): *[Path](../globals.md#path) | null*

*Defined in [interfaces/path-ref.ts:12](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/path-ref.ts#L12)*

**Returns:** *[Path](../globals.md#path) | null*
