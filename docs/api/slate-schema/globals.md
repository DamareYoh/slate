[slate-schema](README.md) › [Globals](globals.md)

# slate-schema

## Index

### Interfaces

* [ChildInvalidError](interfaces/childinvaliderror.md)
* [ChildMaxInvalidError](interfaces/childmaxinvaliderror.md)
* [ChildMinInvalidError](interfaces/childmininvaliderror.md)
* [ChildUnexpectedError](interfaces/childunexpectederror.md)
* [ChildValidation](interfaces/childvalidation.md)
* [FirstChildInvalidError](interfaces/firstchildinvaliderror.md)
* [LastChildInvalidError](interfaces/lastchildinvaliderror.md)
* [MarkInvalidError](interfaces/markinvaliderror.md)
* [MarkPropertyInvalidError](interfaces/markpropertyinvaliderror.md)
* [MarkRule](interfaces/markrule.md)
* [MarkValidation](interfaces/markvalidation.md)
* [NextSiblingInvalidError](interfaces/nextsiblinginvaliderror.md)
* [NodePropertyInvalidError](interfaces/nodepropertyinvaliderror.md)
* [NodeRule](interfaces/noderule.md)
* [NodeTextInvalidError](interfaces/nodetextinvaliderror.md)
* [NodeValidation](interfaces/nodevalidation.md)
* [ParentInvalidError](interfaces/parentinvaliderror.md)
* [PreviousSiblingInvalidError](interfaces/previoussiblinginvaliderror.md)

### Type aliases

* [MarkError](globals.md#markerror)
* [NodeError](globals.md#nodeerror)
* [SchemaError](globals.md#schemaerror)
* [SchemaRule](globals.md#schemarule)

### Functions

* [checkAncestor](globals.md#const-checkancestor)
* [checkMark](globals.md#const-checkmark)
* [checkNode](globals.md#const-checknode)
* [checkParent](globals.md#const-checkparent)
* [withSchema](globals.md#const-withschema)

## Type aliases

###  MarkError

Ƭ **MarkError**: *[MarkPropertyInvalidError](interfaces/markpropertyinvaliderror.md)*

*Defined in [errors.ts:99](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-schema/src/errors.ts#L99)*

___

###  NodeError

Ƭ **NodeError**: *[ChildInvalidError](interfaces/childinvaliderror.md) | [ChildMaxInvalidError](interfaces/childmaxinvaliderror.md) | [ChildMinInvalidError](interfaces/childmininvaliderror.md) | [ChildUnexpectedError](interfaces/childunexpectederror.md) | [FirstChildInvalidError](interfaces/firstchildinvaliderror.md) | [LastChildInvalidError](interfaces/lastchildinvaliderror.md) | [MarkInvalidError](interfaces/markinvaliderror.md) | [NextSiblingInvalidError](interfaces/nextsiblinginvaliderror.md) | [NodePropertyInvalidError](interfaces/nodepropertyinvaliderror.md) | [NodeTextInvalidError](interfaces/nodetextinvaliderror.md) | [ParentInvalidError](interfaces/parentinvaliderror.md) | [PreviousSiblingInvalidError](interfaces/previoussiblinginvaliderror.md)*

*Defined in [errors.ts:101](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-schema/src/errors.ts#L101)*

___

###  SchemaError

Ƭ **SchemaError**: *[MarkError](globals.md#markerror) | [NodeError](globals.md#nodeerror)*

*Defined in [errors.ts:115](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-schema/src/errors.ts#L115)*

___

###  SchemaRule

Ƭ **SchemaRule**: *[MarkRule](interfaces/markrule.md) | [NodeRule](interfaces/noderule.md)*

*Defined in [rules.ts:40](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-schema/src/rules.ts#L40)*

## Functions

### `Const` checkAncestor

▸ **checkAncestor**(`editor`: Editor, `entry`: AncestorEntry, `rule`: [NodeRule](interfaces/noderule.md), `ancestorRules`: [NodeRule](interfaces/noderule.md)[]): *[NodeError](globals.md#nodeerror) | undefined*

*Defined in [checkers.ts:115](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-schema/src/checkers.ts#L115)*

Check an ancestor node object's children.

**Parameters:**

Name | Type |
------ | ------ |
`editor` | Editor |
`entry` | AncestorEntry |
`rule` | [NodeRule](interfaces/noderule.md) |
`ancestorRules` | [NodeRule](interfaces/noderule.md)[] |

**Returns:** *[NodeError](globals.md#nodeerror) | undefined*

___

### `Const` checkMark

▸ **checkMark**(`editor`: Editor, `entry`: MarkEntry, `rule`: [MarkRule](interfaces/markrule.md)): *[MarkError](globals.md#markerror) | undefined*

*Defined in [checkers.ts:19](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-schema/src/checkers.ts#L19)*

Check a mark object.

**Parameters:**

Name | Type |
------ | ------ |
`editor` | Editor |
`entry` | MarkEntry |
`rule` | [MarkRule](interfaces/markrule.md) |

**Returns:** *[MarkError](globals.md#markerror) | undefined*

___

### `Const` checkNode

▸ **checkNode**(`editor`: Editor, `entry`: NodeEntry, `rule`: [NodeRule](interfaces/noderule.md), `rules`: [NodeRule](interfaces/noderule.md)[]): *[NodeError](globals.md#nodeerror) | undefined*

*Defined in [checkers.ts:50](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-schema/src/checkers.ts#L50)*

Check a node object.

**Parameters:**

Name | Type |
------ | ------ |
`editor` | Editor |
`entry` | NodeEntry |
`rule` | [NodeRule](interfaces/noderule.md) |
`rules` | [NodeRule](interfaces/noderule.md)[] |

**Returns:** *[NodeError](globals.md#nodeerror) | undefined*

___

### `Const` checkParent

▸ **checkParent**(`editor`: Editor, `entry`: AncestorEntry, `index`: number, `rule`: [NodeRule](interfaces/noderule.md), `childRule`: [NodeRule](interfaces/noderule.md)): *[NodeError](globals.md#nodeerror) | undefined*

*Defined in [checkers.ts:253](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-schema/src/checkers.ts#L253)*

Check a parent node object's children.

**Parameters:**

Name | Type |
------ | ------ |
`editor` | Editor |
`entry` | AncestorEntry |
`index` | number |
`rule` | [NodeRule](interfaces/noderule.md) |
`childRule` | [NodeRule](interfaces/noderule.md) |

**Returns:** *[NodeError](globals.md#nodeerror) | undefined*

___

### `Const` withSchema

▸ **withSchema**(`editor`: Editor, `rules`: [SchemaRule](globals.md#schemarule)[]): *Editor*

*Defined in [with-schema.ts:12](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-schema/src/with-schema.ts#L12)*

The `withSchema` plugin augments an editor to ensure that its content is
normalized to always obey a schema after operations are applied.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`editor` | Editor | - |
`rules` | [SchemaRule](globals.md#schemarule)[] |  [] |

**Returns:** *Editor*
