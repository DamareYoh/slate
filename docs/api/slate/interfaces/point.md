[slate](../README.md) › [Globals](../globals.md) › [Point](point.md)

# Interface: Point

`Point` objects refer to a specific location in a text node in a Slate
document. Its path refers to the location of the node in the tree, and its
offset refers to the distance into the node's string of text. Points can
only refer to `Text` nodes.

## Hierarchy

* **Point**

## Indexable

* \[ **key**: *string*\]: any

`Point` objects refer to a specific location in a text node in a Slate
document. Its path refers to the location of the node in the tree, and its
offset refers to the distance into the node's string of text. Points can
only refer to `Text` nodes.

## Index

### Properties

* [offset](point.md#offset)
* [path](point.md#path)

## Properties

###  offset

• **offset**: *number*

*Defined in [interfaces/point.ts:14](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/point.ts#L14)*

___

###  path

• **path**: *[Path](../globals.md#path)*

*Defined in [interfaces/point.ts:13](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate/src/interfaces/point.ts#L13)*
