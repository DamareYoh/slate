[slate](../README.md) › [Globals](../globals.md) › [PointRef](pointref.md)

# Interface: PointRef

`PointRef` objects keep a specific point in a document synced over time as new
operations are applied to the editor. You can access their `current` property
at any time for the up-to-date point value.

## Hierarchy

* **PointRef**

## Index

### Properties

* [affinity](pointref.md#affinity)
* [current](pointref.md#current)

### Methods

* [unref](pointref.md#unref)

## Properties

###  affinity

• **affinity**: *"forward" | "backward" | null*

*Defined in [interfaces/point-ref.ts:11](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/point-ref.ts#L11)*

___

###  current

• **current**: *[Point](point.md) | null*

*Defined in [interfaces/point-ref.ts:10](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/point-ref.ts#L10)*

## Methods

###  unref

▸ **unref**(): *[Point](point.md) | null*

*Defined in [interfaces/point-ref.ts:12](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/point-ref.ts#L12)*

**Returns:** *[Point](point.md) | null*
