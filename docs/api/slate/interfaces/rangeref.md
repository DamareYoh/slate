[slate](../README.md) › [Globals](../globals.md) › [RangeRef](rangeref.md)

# Interface: RangeRef

`RangeRef` objects keep a specific range in a document synced over time as new
operations are applied to the editor. You can access their `current` property
at any time for the up-to-date range value.

## Hierarchy

* **RangeRef**

## Index

### Properties

* [affinity](rangeref.md#affinity)
* [current](rangeref.md#current)

### Methods

* [unref](rangeref.md#unref)

## Properties

###  affinity

• **affinity**: *"forward" | "backward" | "outward" | "inward" | null*

*Defined in [interfaces/range-ref.ts:11](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/range-ref.ts#L11)*

___

###  current

• **current**: *[Range](range.md) | null*

*Defined in [interfaces/range-ref.ts:10](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/range-ref.ts#L10)*

## Methods

###  unref

▸ **unref**(): *[Range](range.md) | null*

*Defined in [interfaces/range-ref.ts:12](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/range-ref.ts#L12)*

**Returns:** *[Range](range.md) | null*
