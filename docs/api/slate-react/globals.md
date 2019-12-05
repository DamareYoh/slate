[slate-react](README.md) › [Globals](globals.md)

# slate-react

## Index

### Classes

* [Key](classes/key.md)

### Interfaces

* [CustomDecorationProps](interfaces/customdecorationprops.md)
* [CustomElementProps](interfaces/customelementprops.md)
* [CustomMarkProps](interfaces/custommarkprops.md)
* [InsertDataCommand](interfaces/insertdatacommand.md)
* [ReactEditor](interfaces/reacteditor.md)

### Type aliases

* [DOMPoint](globals.md#dompoint)
* [ReactCommand](globals.md#reactcommand)

### Variables

* [EDITOR_TO_CONTEXT_LISTENER](globals.md#const-editor_to_context_listener)
* [EDITOR_TO_ELEMENT](globals.md#const-editor_to_element)
* [ELEMENT_TO_NODE](globals.md#const-element_to_node)
* [EditorContext](globals.md#const-editorcontext)
* [FocusedContext](globals.md#const-focusedcontext)
* [IS_APPLE](globals.md#const-is_apple)
* [IS_CLICKING](globals.md#const-is_clicking)
* [IS_DRAGGING](globals.md#const-is_dragging)
* [IS_FIREFOX](globals.md#const-is_firefox)
* [IS_FOCUSED](globals.md#const-is_focused)
* [IS_IOS](globals.md#const-is_ios)
* [IS_READ_ONLY](globals.md#const-is_read_only)
* [IS_SAFARI](globals.md#const-is_safari)
* [KEY_TO_ELEMENT](globals.md#const-key_to_element)
* [NODE_TO_ELEMENT](globals.md#const-node_to_element)
* [NODE_TO_INDEX](globals.md#const-node_to_index)
* [NODE_TO_KEY](globals.md#const-node_to_key)
* [NODE_TO_PARENT](globals.md#const-node_to_parent)
* [PLACEHOLDER_SYMBOL](globals.md#const-placeholder_symbol)
* [ReadOnlyContext](globals.md#const-readonlycontext)
* [SelectedContext](globals.md#const-selectedcontext)
* [SlateContext](globals.md#const-slatecontext)

### Functions

* [CustomDecoration](globals.md#const-customdecoration)
* [CustomElement](globals.md#const-customelement)
* [CustomMark](globals.md#const-custommark)
* [Editable](globals.md#const-editable)
* [PlaceholderDecoration](globals.md#const-placeholderdecoration)
* [Slate](globals.md#const-slate)
* [getEditableChild](globals.md#const-geteditablechild)
* [isDOMComment](globals.md#const-isdomcomment)
* [isDOMElement](globals.md#const-isdomelement)
* [isDOMNode](globals.md#const-isdomnode)
* [isDOMText](globals.md#const-isdomtext)
* [normalizeDOMPoint](globals.md#const-normalizedompoint)
* [useEditor](globals.md#const-useeditor)
* [useFocused](globals.md#const-usefocused)
* [useReadOnly](globals.md#const-usereadonly)
* [useSelected](globals.md#const-useselected)
* [useSlate](globals.md#const-useslate)
* [withReact](globals.md#const-withreact)

### Object literals

* [ReactCommand](globals.md#const-reactcommand)
* [ReactEditor](globals.md#const-reacteditor)

## Type aliases

###  DOMPoint

Ƭ **DOMPoint**: *[Node, number]*

*Defined in [slate-react/src/utils/dom.ts:25](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-react/src/utils/dom.ts#L25)*

___

###  ReactCommand

Ƭ **ReactCommand**: *[InsertDataCommand](interfaces/insertdatacommand.md)*

*Defined in [slate-react/src/react-command.ts:16](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-react/src/react-command.ts#L16)*

The `ReactCommand` union for all commands that the React plugins defines.

## Variables

### `Const` EDITOR_TO_CONTEXT_LISTENER

• **EDITOR_TO_CONTEXT_LISTENER**: *WeakMap‹Editor, function›* =  new WeakMap<
  Editor,
  (children: Node[], operations: Operation[]) => void
>()

*Defined in [slate-react/src/hooks/use-slate.tsx:12](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-react/src/hooks/use-slate.tsx#L12)*

Associate the context change listener with the editor.

___

### `Const` EDITOR_TO_ELEMENT

• **EDITOR_TO_ELEMENT**: *WeakMap‹Editor, HTMLElement›* =  new WeakMap()

*Defined in [slate-react/src/utils/weak-maps.ts:18](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-react/src/utils/weak-maps.ts#L18)*

Weak maps that allow us to go between Slate nodes and DOM nodes. These
are used to resolve DOM event-related logic into Slate actions.

___

### `Const` ELEMENT_TO_NODE

• **ELEMENT_TO_NODE**: *WeakMap‹HTMLElement, Node›* =  new WeakMap()

*Defined in [slate-react/src/utils/weak-maps.ts:20](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-react/src/utils/weak-maps.ts#L20)*

___

### `Const` EditorContext

• **EditorContext**: *Context‹null | Editor›* =  createContext<Editor | null>(null)

*Defined in [slate-react/src/hooks/use-editor.tsx:8](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-react/src/hooks/use-editor.tsx#L8)*

A React context for sharing the `Editor` class.

___

### `Const` FocusedContext

• **FocusedContext**: *Context‹boolean›* =  createContext(false)

*Defined in [slate-react/src/hooks/use-focused.ts:7](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-react/src/hooks/use-focused.ts#L7)*

A React context for sharing the `focused` state of the editor.

___

### `Const` IS_APPLE

• **IS_APPLE**: *boolean* = 
  typeof navigator !== 'undefined' && /Mac OS X/.test(navigator.userAgent)

*Defined in [slate-react/src/utils/environment.ts:7](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-react/src/utils/environment.ts#L7)*

___

### `Const` IS_CLICKING

• **IS_CLICKING**: *WeakMap‹Editor, boolean›* =  new WeakMap()

*Defined in [slate-react/src/utils/weak-maps.ts:31](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-react/src/utils/weak-maps.ts#L31)*

___

### `Const` IS_DRAGGING

• **IS_DRAGGING**: *WeakMap‹Editor, boolean›* =  new WeakMap()

*Defined in [slate-react/src/utils/weak-maps.ts:30](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-react/src/utils/weak-maps.ts#L30)*

___

### `Const` IS_FIREFOX

• **IS_FIREFOX**: *boolean* = 
  typeof navigator !== 'undefined' &&
  /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent)

*Defined in [slate-react/src/utils/environment.ts:10](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-react/src/utils/environment.ts#L10)*

___

### `Const` IS_FOCUSED

• **IS_FOCUSED**: *WeakMap‹Editor, boolean›* =  new WeakMap()

*Defined in [slate-react/src/utils/weak-maps.ts:29](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-react/src/utils/weak-maps.ts#L29)*

___

### `Const` IS_IOS

• **IS_IOS**: *false* = 
  typeof navigator !== 'undefined' &&
  typeof window !== 'undefined' &&
  /iPad|iPhone|iPod/.test(navigator.userAgent) &&
  !window.MSStream

*Defined in [slate-react/src/utils/environment.ts:1](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-react/src/utils/environment.ts#L1)*

___

### `Const` IS_READ_ONLY

• **IS_READ_ONLY**: *WeakMap‹Editor, boolean›* =  new WeakMap()

*Defined in [slate-react/src/utils/weak-maps.ts:28](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-react/src/utils/weak-maps.ts#L28)*

Weak maps for storing editor-related state.

___

### `Const` IS_SAFARI

• **IS_SAFARI**: *boolean* = 
  typeof navigator !== 'undefined' &&
  /Version\/[\d\.]+.*Safari/.test(navigator.userAgent)

*Defined in [slate-react/src/utils/environment.ts:14](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-react/src/utils/environment.ts#L14)*

___

### `Const` KEY_TO_ELEMENT

• **KEY_TO_ELEMENT**: *WeakMap‹[Key](classes/key.md), HTMLElement›* =  new WeakMap()

*Defined in [slate-react/src/utils/weak-maps.ts:22](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-react/src/utils/weak-maps.ts#L22)*

___

### `Const` NODE_TO_ELEMENT

• **NODE_TO_ELEMENT**: *WeakMap‹Node, HTMLElement›* =  new WeakMap()

*Defined in [slate-react/src/utils/weak-maps.ts:19](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-react/src/utils/weak-maps.ts#L19)*

___

### `Const` NODE_TO_INDEX

• **NODE_TO_INDEX**: *WeakMap‹Node, number›* =  new WeakMap()

*Defined in [slate-react/src/utils/weak-maps.ts:10](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-react/src/utils/weak-maps.ts#L10)*

Two weak maps that allow us rebuild a path given a node. They are populated
at render time such that after a render occurs we can always backtrack.

___

### `Const` NODE_TO_KEY

• **NODE_TO_KEY**: *WeakMap‹Node, [Key](classes/key.md)›* =  new WeakMap()

*Defined in [slate-react/src/utils/weak-maps.ts:21](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-react/src/utils/weak-maps.ts#L21)*

___

### `Const` NODE_TO_PARENT

• **NODE_TO_PARENT**: *WeakMap‹Node, Ancestor›* =  new WeakMap()

*Defined in [slate-react/src/utils/weak-maps.ts:11](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-react/src/utils/weak-maps.ts#L11)*

___

### `Const` PLACEHOLDER_SYMBOL

• **PLACEHOLDER_SYMBOL**: *unique symbol* =  Symbol('placeholder')

*Defined in [slate-react/src/utils/weak-maps.ts:37](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-react/src/utils/weak-maps.ts#L37)*

Symbols.

___

### `Const` ReadOnlyContext

• **ReadOnlyContext**: *Context‹boolean›* =  createContext(false)

*Defined in [slate-react/src/hooks/use-read-only.ts:7](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-react/src/hooks/use-read-only.ts#L7)*

A React context for sharing the `readOnly` state of the editor.

___

### `Const` SelectedContext

• **SelectedContext**: *Context‹boolean›* =  createContext(false)

*Defined in [slate-react/src/hooks/use-selected.ts:7](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-react/src/hooks/use-selected.ts#L7)*

A React context for sharing the `selected` state of an element.

___

### `Const` SlateContext

• **SlateContext**: *Context‹null | [Editor]›* =  createContext<[Editor] | null>(null)

*Defined in [slate-react/src/hooks/use-slate.tsx:22](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-react/src/hooks/use-slate.tsx#L22)*

A React context for sharing the `Editor` class, in a way that re-renders the
context whenever changes occur.

## Functions

### `Const` CustomDecoration

▸ **CustomDecoration**(`props`: [CustomDecorationProps](interfaces/customdecorationprops.md)): *Element‹›*

*Defined in [slate-react/src/components/custom.tsx:21](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-react/src/components/custom.tsx#L21)*

The default custom decoration renderer.

**Parameters:**

Name | Type |
------ | ------ |
`props` | [CustomDecorationProps](interfaces/customdecorationprops.md) |

**Returns:** *Element‹›*

___

### `Const` CustomElement

▸ **CustomElement**(`props`: [CustomElementProps](interfaces/customelementprops.md)): *Element‹›*

*Defined in [slate-react/src/components/custom.tsx:46](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-react/src/components/custom.tsx#L46)*

The default element renderer.

**Parameters:**

Name | Type |
------ | ------ |
`props` | [CustomElementProps](interfaces/customelementprops.md) |

**Returns:** *Element‹›*

___

### `Const` CustomMark

▸ **CustomMark**(`props`: [CustomMarkProps](interfaces/custommarkprops.md)): *Element‹›*

*Defined in [slate-react/src/components/custom.tsx:75](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-react/src/components/custom.tsx#L75)*

The default custom mark renderer.

**Parameters:**

Name | Type |
------ | ------ |
`props` | [CustomMarkProps](interfaces/custommarkprops.md) |

**Returns:** *Element‹›*

___

### `Const` Editable

▸ **Editable**(`props`: object): *Element‹›*

*Defined in [slate-react/src/components/editable.tsx:39](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-react/src/components/editable.tsx#L39)*

Editable.

**Parameters:**

Name | Type |
------ | ------ |
`props` | object |

**Returns:** *Element‹›*

___

### `Const` PlaceholderDecoration

▸ **PlaceholderDecoration**(`props`: [CustomDecorationProps](interfaces/customdecorationprops.md)): *Element‹›*

*Defined in [slate-react/src/components/custom.tsx:84](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-react/src/components/custom.tsx#L84)*

A custom decoration for the default placeholder behavior.

**Parameters:**

Name | Type |
------ | ------ |
`props` | [CustomDecorationProps](interfaces/customdecorationprops.md) |

**Returns:** *Element‹›*

___

### `Const` Slate

▸ **Slate**(`props`: object): *Element‹›*

*Defined in [slate-react/src/hooks/use-slate.tsx:29](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-react/src/hooks/use-slate.tsx#L29)*

A wrapper around the provider to handle `onChange` events, because the editor
is a mutable singleton so it won't ever register as "changed" otherwise.

**Parameters:**

Name | Type |
------ | ------ |
`props` | object |

**Returns:** *Element‹›*

___

### `Const` getEditableChild

▸ **getEditableChild**(`parent`: DOMElement, `index`: number, `direction`: "forward" | "backward"): *DOMNode*

*Defined in [slate-react/src/utils/dom.ts:94](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-react/src/utils/dom.ts#L94)*

Get the nearest editable child at `index` in a `parent`, preferring
`direction`.

**Parameters:**

Name | Type |
------ | ------ |
`parent` | DOMElement |
`index` | number |
`direction` | "forward" &#124; "backward" |

**Returns:** *DOMNode*

___

### `Const` isDOMComment

▸ **isDOMComment**(`value`: any): *value is DOMComment*

*Defined in [slate-react/src/utils/dom.ts:31](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-react/src/utils/dom.ts#L31)*

Check if a DOM node is a comment node.

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *value is DOMComment*

___

### `Const` isDOMElement

▸ **isDOMElement**(`value`: any): *value is DOMElement*

*Defined in [slate-react/src/utils/dom.ts:39](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-react/src/utils/dom.ts#L39)*

Check if a DOM node is an element node.

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *value is DOMElement*

___

### `Const` isDOMNode

▸ **isDOMNode**(`value`: any): *value is DOMNode*

*Defined in [slate-react/src/utils/dom.ts:47](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-react/src/utils/dom.ts#L47)*

Check if a value is a DOM node.

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *value is DOMNode*

___

### `Const` isDOMText

▸ **isDOMText**(`value`: any): *value is DOMText*

*Defined in [slate-react/src/utils/dom.ts:55](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-react/src/utils/dom.ts#L55)*

Check if a DOM node is an element node.

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *value is DOMText*

___

### `Const` normalizeDOMPoint

▸ **normalizeDOMPoint**(`domPoint`: [DOMPoint](globals.md#dompoint)): *[DOMPoint](globals.md#dompoint)*

*Defined in [slate-react/src/utils/dom.ts:63](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-react/src/utils/dom.ts#L63)*

Normalize a DOM point so that it always refers to a text node.

**Parameters:**

Name | Type |
------ | ------ |
`domPoint` | [DOMPoint](globals.md#dompoint) |

**Returns:** *[DOMPoint](globals.md#dompoint)*

___

### `Const` useEditor

▸ **useEditor**(): *Editor*

*Defined in [slate-react/src/hooks/use-editor.tsx:14](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-react/src/hooks/use-editor.tsx#L14)*

Get the current `Editor` class that the component lives under.

**Returns:** *Editor*

___

### `Const` useFocused

▸ **useFocused**(): *boolean*

*Defined in [slate-react/src/hooks/use-focused.ts:13](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-react/src/hooks/use-focused.ts#L13)*

Get the current `focused` state of the editor.

**Returns:** *boolean*

___

### `Const` useReadOnly

▸ **useReadOnly**(): *boolean*

*Defined in [slate-react/src/hooks/use-read-only.ts:13](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-react/src/hooks/use-read-only.ts#L13)*

Get the current `readOnly` state of the editor.

**Returns:** *boolean*

___

### `Const` useSelected

▸ **useSelected**(): *boolean*

*Defined in [slate-react/src/hooks/use-selected.ts:13](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-react/src/hooks/use-selected.ts#L13)*

Get the current `selected` state of an element.

**Returns:** *boolean*

___

### `Const` useSlate

▸ **useSlate**(): *Editor*

*Defined in [slate-react/src/hooks/use-slate.tsx:64](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-react/src/hooks/use-slate.tsx#L64)*

Get the current `Editor` class that the component lives under.

**Returns:** *Editor*

___

### `Const` withReact

▸ **withReact**(`editor`: Editor): *Editor*

*Defined in [slate-react/src/with-react.ts:12](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-react/src/with-react.ts#L12)*

`withReact` adds React and DOM specific behaviors to the editor.

**Parameters:**

Name | Type |
------ | ------ |
`editor` | Editor |

**Returns:** *Editor*

## Object literals

### `Const` ReactCommand

### ▪ **ReactCommand**: *object*

*Defined in [slate-react/src/react-command.ts:18](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-react/src/react-command.ts#L18)*

###  isInsertDataCommand

▸ **isInsertDataCommand**(`value`: any): *value is InsertDataCommand*

*Defined in [slate-react/src/react-command.ts:23](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-react/src/react-command.ts#L23)*

Check if a value is an `InsertDataCommand` object.

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *value is InsertDataCommand*

###  isReactCommand

▸ **isReactCommand**(`value`: any): *value is InsertDataCommand*

*Defined in [slate-react/src/react-command.ts:35](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-react/src/react-command.ts#L35)*

Check if a value is a `ReactCommand` object.

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *value is InsertDataCommand*

___

### `Const` ReactEditor

### ▪ **ReactEditor**: *object*

*Defined in [slate-react/src/react-editor.ts:28](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-react/src/react-editor.ts#L28)*

###  blur

▸ **blur**(`editor`: [ReactEditor](interfaces/reacteditor.md)): *void*

*Defined in [slate-react/src/react-editor.ts:98](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-react/src/react-editor.ts#L98)*

Blur the editor.

**Parameters:**

Name | Type |
------ | ------ |
`editor` | [ReactEditor](interfaces/reacteditor.md) |

**Returns:** *void*

###  deselect

▸ **deselect**(`editor`: [ReactEditor](interfaces/reacteditor.md)): *void*

*Defined in [slate-react/src/react-editor.ts:124](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-react/src/react-editor.ts#L124)*

Deselect the editor.

**Parameters:**

Name | Type |
------ | ------ |
`editor` | [ReactEditor](interfaces/reacteditor.md) |

**Returns:** *void*

###  findEventRange

▸ **findEventRange**(`editor`: [ReactEditor](interfaces/reacteditor.md), `event`: any): *Range*

*Defined in [slate-react/src/react-editor.ts:281](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-react/src/react-editor.ts#L281)*

Get the target range from a DOM `event`.

**Parameters:**

Name | Type |
------ | ------ |
`editor` | [ReactEditor](interfaces/reacteditor.md) |
`event` | any |

**Returns:** *Range*

###  findKey

▸ **findKey**(`editor`: [ReactEditor](interfaces/reacteditor.md), `node`: Node): *[Key](classes/key.md)*

*Defined in [slate-react/src/react-editor.ts:33](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-react/src/react-editor.ts#L33)*

Find a key for a Slate node.

**Parameters:**

Name | Type |
------ | ------ |
`editor` | [ReactEditor](interfaces/reacteditor.md) |
`node` | Node |

**Returns:** *[Key](classes/key.md)*

###  findPath

▸ **findPath**(`editor`: [ReactEditor](interfaces/reacteditor.md), `node`: Node): *Path*

*Defined in [slate-react/src/react-editor.ts:48](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-react/src/react-editor.ts#L48)*

Find the path of Slate node.

**Parameters:**

Name | Type |
------ | ------ |
`editor` | [ReactEditor](interfaces/reacteditor.md) |
`node` | Node |

**Returns:** *Path*

###  focus

▸ **focus**(`editor`: [ReactEditor](interfaces/reacteditor.md)): *void*

*Defined in [slate-react/src/react-editor.ts:111](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-react/src/react-editor.ts#L111)*

Focus the editor.

**Parameters:**

Name | Type |
------ | ------ |
`editor` | [ReactEditor](interfaces/reacteditor.md) |

**Returns:** *void*

###  hasDOMNode

▸ **hasDOMNode**(`editor`: [ReactEditor](interfaces/reacteditor.md), `target`: DOMNode, `options`: object): *boolean*

*Defined in [slate-react/src/react-editor.ts:141](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-react/src/react-editor.ts#L141)*

Check if a DOM node is within the editor.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`editor` | [ReactEditor](interfaces/reacteditor.md) | - |
`target` | DOMNode | - |
`options` | object |  {} |

**Returns:** *boolean*

###  isFocused

▸ **isFocused**(`editor`: [ReactEditor](interfaces/reacteditor.md)): *boolean*

*Defined in [slate-react/src/react-editor.ts:82](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-react/src/react-editor.ts#L82)*

Check if the editor is focused.

**Parameters:**

Name | Type |
------ | ------ |
`editor` | [ReactEditor](interfaces/reacteditor.md) |

**Returns:** *boolean*

###  isReadOnly

▸ **isReadOnly**(`editor`: [ReactEditor](interfaces/reacteditor.md)): *boolean*

*Defined in [slate-react/src/react-editor.ts:90](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-react/src/react-editor.ts#L90)*

Check if the editor is in read-only mode.

**Parameters:**

Name | Type |
------ | ------ |
`editor` | [ReactEditor](interfaces/reacteditor.md) |

**Returns:** *boolean*

###  toDOMNode

▸ **toDOMNode**(`editor`: [ReactEditor](interfaces/reacteditor.md), `node`: Node): *HTMLElement*

*Defined in [slate-react/src/react-editor.ts:178](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-react/src/react-editor.ts#L178)*

Find the native DOM element from a Slate node.

**Parameters:**

Name | Type |
------ | ------ |
`editor` | [ReactEditor](interfaces/reacteditor.md) |
`node` | Node |

**Returns:** *HTMLElement*

###  toDOMPoint

▸ **toDOMPoint**(`editor`: [ReactEditor](interfaces/reacteditor.md), `point`: Point): *[DOMPoint](globals.md#dompoint)*

*Defined in [slate-react/src/react-editor.ts:196](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-react/src/react-editor.ts#L196)*

Find a native DOM selection point from a Slate point.

**Parameters:**

Name | Type |
------ | ------ |
`editor` | [ReactEditor](interfaces/reacteditor.md) |
`point` | Point |

**Returns:** *[DOMPoint](globals.md#dompoint)*

###  toDOMRange

▸ **toDOMRange**(`editor`: [ReactEditor](interfaces/reacteditor.md), `range`: Range): *DOMRange*

*Defined in [slate-react/src/react-editor.ts:242](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-react/src/react-editor.ts#L242)*

Find a native DOM range from a Slate `range`.

**Parameters:**

Name | Type |
------ | ------ |
`editor` | [ReactEditor](interfaces/reacteditor.md) |
`range` | Range |

**Returns:** *DOMRange*

###  toSlateNode

▸ **toSlateNode**(`editor`: [ReactEditor](interfaces/reacteditor.md), `domNode`: DOMNode): *Node*

*Defined in [slate-react/src/react-editor.ts:261](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-react/src/react-editor.ts#L261)*

Find a Slate node from a native DOM `element`.

**Parameters:**

Name | Type |
------ | ------ |
`editor` | [ReactEditor](interfaces/reacteditor.md) |
`domNode` | DOMNode |

**Returns:** *Node*

###  toSlatePoint

▸ **toSlatePoint**(`editor`: [ReactEditor](interfaces/reacteditor.md), `domPoint`: [DOMPoint](globals.md#dompoint)): *Point*

*Defined in [slate-react/src/react-editor.ts:347](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-react/src/react-editor.ts#L347)*

Find a Slate point from a DOM selection's `domNode` and `domOffset`.

**Parameters:**

Name | Type |
------ | ------ |
`editor` | [ReactEditor](interfaces/reacteditor.md) |
`domPoint` | [DOMPoint](globals.md#dompoint) |

**Returns:** *Point*

###  toSlateRange

▸ **toSlateRange**(`editor`: [ReactEditor](interfaces/reacteditor.md), `domRange`: DOMRange | DOMStaticRange | DOMSelection): *Range*

*Defined in [slate-react/src/react-editor.ts:424](https://github.com/DamareYoh/slate/blob/26e8a411/packages/slate-react/src/react-editor.ts#L424)*

Find a Slate range from a DOM range or selection.

**Parameters:**

Name | Type |
------ | ------ |
`editor` | [ReactEditor](interfaces/reacteditor.md) |
`domRange` | DOMRange &#124; DOMStaticRange &#124; DOMSelection |

**Returns:** *Range*
