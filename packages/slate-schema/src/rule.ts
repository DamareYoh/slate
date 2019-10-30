import { Editor } from 'slate'
import { SchemaError } from './error'

interface SchemaValueCheck {
  object?: 'value'
  children?: SchemaChildCheck[]
  first?: SchemaDescendantCheck
  last?: SchemaDescendantCheck
  marks?: SchemaMarkCheck[]
  text?: RegExp
  properties?: {}
}

interface SchemaElementCheck {
  object?: 'element'
  children?: SchemaChildCheck[]
  next?: SchemaDescendantCheck
  previous?: SchemaDescendantCheck
  first?: SchemaDescendantCheck
  last?: SchemaDescendantCheck
  parent?: SchemaAncestorCheck
  marks?: SchemaMarkCheck[]
  text?: (text: string) => boolean
  properties?: {}
}

interface SchemaTextCheck {
  object?: 'text'
  next?: SchemaDescendantCheck
  previous?: SchemaDescendantCheck
  parent?: SchemaAncestorCheck
  marks?: SchemaMarkCheck[]
  text?: RegExp
  properties?: {}
}

type SchemaNodeCheck = SchemaValueCheck | SchemaElementCheck | SchemaTextCheck
type SchemaAncestorCheck = SchemaValueCheck | SchemaElementCheck
type SchemaDescendantCheck = SchemaElementCheck | SchemaTextCheck

interface SchemaChildCheck {
  match?: SchemaDescendantCheck
  min?: number
  max?: number
}

interface SchemaAnnotationCheck {
  object?: 'annotation'
  properties?: {}
}

interface SchemaMarkCheck {
  object?: 'mark'
  properties?: {}
}

interface SchemaFunctionCheck {
  (object: any): boolean
}

type SchemaCheck =
  | SchemaNodeCheck
  | SchemaAnnotationCheck
  | SchemaMarkCheck
  | SchemaFunctionCheck

interface SchemaDefine {
  isInline?: boolean
  isVoid?: boolean
}

interface SchemaNormalize {
  (editor: Editor, error: SchemaError): void
}

interface SchemaRule {
  match: SchemaCheck
  validate?: SchemaCheck
  define?: SchemaDefine
  normalize?: SchemaNormalize
}

export { SchemaCheck, SchemaDefine, SchemaNormalize, SchemaRule }
