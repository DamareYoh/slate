[slate-hyperscript](README.md) › [Globals](globals.md)

# slate-hyperscript

## Index

### Classes

* [AnchorToken](classes/anchortoken.md)
* [FocusToken](classes/focustoken.md)
* [Token](classes/token.md)

### Functions

* [addAnchorToken](globals.md#const-addanchortoken)
* [addFocusToken](globals.md#const-addfocustoken)
* [createAnchor](globals.md#createanchor)
* [createCursor](globals.md#createcursor)
* [createEditor](globals.md#createeditor)
* [createElement](globals.md#createelement)
* [createFocus](globals.md#createfocus)
* [createFragment](globals.md#createfragment)
* [createMark](globals.md#createmark)
* [createSelection](globals.md#createselection)
* [createText](globals.md#createtext)
* [getAnchorOffset](globals.md#const-getanchoroffset)
* [getFocusOffset](globals.md#const-getfocusoffset)

## Functions

### `Const` addAnchorToken

▸ **addAnchorToken**(`text`: Text, `token`: [AnchorToken](classes/anchortoken.md)): *void*

*Defined in [tokens.ts:79](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-hyperscript/src/tokens.ts#L79)*

Add an anchor token to the end of a text node.

**Parameters:**

Name | Type |
------ | ------ |
`text` | Text |
`token` | [AnchorToken](classes/anchortoken.md) |

**Returns:** *void*

___

### `Const` addFocusToken

▸ **addFocusToken**(`text`: Text, `token`: [FocusToken](classes/focustoken.md)): *void*

*Defined in [tokens.ts:98](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-hyperscript/src/tokens.ts#L98)*

Add a focus token to the end of a text node.

**Parameters:**

Name | Type |
------ | ------ |
`text` | Text |
`token` | [FocusToken](classes/focustoken.md) |

**Returns:** *void*

___

###  createAnchor

▸ **createAnchor**(`tagName`: string, `attributes`: object, `children`: any[]): *[AnchorToken](classes/anchortoken.md)*

*Defined in [creators.ts:90](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-hyperscript/src/creators.ts#L90)*

Create an anchor token.

**Parameters:**

Name | Type |
------ | ------ |
`tagName` | string |
`attributes` | object |
`children` | any[] |

**Returns:** *[AnchorToken](classes/anchortoken.md)*

___

###  createCursor

▸ **createCursor**(`tagName`: string, `attributes`: object, `children`: any[]): *[Token](classes/token.md)[]*

*Defined in [creators.ts:102](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-hyperscript/src/creators.ts#L102)*

Create an anchor and a focus token.

**Parameters:**

Name | Type |
------ | ------ |
`tagName` | string |
`attributes` | object |
`children` | any[] |

**Returns:** *[Token](classes/token.md)[]*

___

###  createEditor

▸ **createEditor**(`tagName`: string, `attributes`: object, `children`: any[]): *Editor*

*Defined in [creators.ts:260](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-hyperscript/src/creators.ts#L260)*

Create a top-level `Editor` object.

**Parameters:**

Name | Type |
------ | ------ |
`tagName` | string |
`attributes` | object |
`children` | any[] |

**Returns:** *Editor*

___

###  createElement

▸ **createElement**(`tagName`: string, `attributes`: object, `children`: any[]): *Element*

*Defined in [creators.ts:114](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-hyperscript/src/creators.ts#L114)*

Create an `Element` object.

**Parameters:**

Name | Type |
------ | ------ |
`tagName` | string |
`attributes` | object |
`children` | any[] |

**Returns:** *Element*

___

###  createFocus

▸ **createFocus**(`tagName`: string, `attributes`: object, `children`: any[]): *[FocusToken](classes/focustoken.md)*

*Defined in [creators.ts:126](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-hyperscript/src/creators.ts#L126)*

Create a focus token.

**Parameters:**

Name | Type |
------ | ------ |
`tagName` | string |
`attributes` | object |
`children` | any[] |

**Returns:** *[FocusToken](classes/focustoken.md)*

___

###  createFragment

▸ **createFragment**(`tagName`: string, `attributes`: object, `children`: any[]): *Descendant[]*

*Defined in [creators.ts:138](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-hyperscript/src/creators.ts#L138)*

Create a fragment.

**Parameters:**

Name | Type |
------ | ------ |
`tagName` | string |
`attributes` | object |
`children` | any[] |

**Returns:** *Descendant[]*

___

###  createMark

▸ **createMark**(`tagName`: string, `attributes`: object, `children`: any[]): *Text*

*Defined in [creators.ts:150](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-hyperscript/src/creators.ts#L150)*

Create a `Text` object with a mark applied.

**Parameters:**

Name | Type |
------ | ------ |
`tagName` | string |
`attributes` | object |
`children` | any[] |

**Returns:** *Text*

___

###  createSelection

▸ **createSelection**(`tagName`: string, `attributes`: object, `children`: any[]): *Range*

*Defined in [creators.ts:187](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-hyperscript/src/creators.ts#L187)*

Create a `Selection` object.

**Parameters:**

Name | Type |
------ | ------ |
`tagName` | string |
`attributes` | object |
`children` | any[] |

**Returns:** *Range*

___

###  createText

▸ **createText**(`tagName`: string, `attributes`: object, `children`: any[]): *Text*

*Defined in [creators.ts:224](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-hyperscript/src/creators.ts#L224)*

Create a `Text` object.

**Parameters:**

Name | Type |
------ | ------ |
`tagName` | string |
`attributes` | object |
`children` | any[] |

**Returns:** *Text*

___

### `Const` getAnchorOffset

▸ **getAnchorOffset**(`text`: Text): *[number, [AnchorToken](classes/anchortoken.md)] | undefined*

*Defined in [tokens.ts:88](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-hyperscript/src/tokens.ts#L88)*

Get the offset if a text node has an associated anchor token.

**Parameters:**

Name | Type |
------ | ------ |
`text` | Text |

**Returns:** *[number, [AnchorToken](classes/anchortoken.md)] | undefined*

___

### `Const` getFocusOffset

▸ **getFocusOffset**(`text`: Text): *[number, [FocusToken](classes/focustoken.md)] | undefined*

*Defined in [tokens.ts:107](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-hyperscript/src/tokens.ts#L107)*

Get the offset if a text node has an associated focus token.

**Parameters:**

Name | Type |
------ | ------ |
`text` | Text |

**Returns:** *[number, [FocusToken](classes/focustoken.md)] | undefined*
