// This is an auto-generated file. Do not edit.
// Run 'BALLERINA_HOME="your/ballerina/home" npm run gen-models' to generate.
// tslint:disable:ban-types
export interface STNode {
  kind: string;
  value: any;
  parent?: STNode;
}

export interface AbstractKeyword extends STNode {
  isToken: boolean;
  value: string;
}

export interface Annotation extends STNode {
  annotReference: QualifiedIdentifier;
  annotValue: MappingConstructor;
  atToken: AtToken;
}

export interface ArrayType extends STNode {
  closeBracketToken: CloseBracketToken;
  openBracketToken: OpenBracketToken;
  typeDescriptorNode: SimpleType;
}

export interface AssignmentStatement extends STNode {
  equalsToken: EqualToken;
  expression: IdentifierToken | MemberAccess;
  semicolonToken: SemicolonToken;
  varRef: FieldAccess | MemberAccess;
}

export interface AsteriskToken extends STNode {
  isToken: boolean;
  value: string;
}

export interface AtToken extends STNode {
  isToken: boolean;
  value: string;
}

export interface BinaryExpression extends STNode {
  lhsExpr:
    | DecimalIntegerLiteral
    | FieldAccess
    | FunctionCall
    | IdentifierToken
    | StringLiteral;
  operator: AsteriskToken | LtToken | PlusToken;
  rhsExpr: BinaryExpression | FieldAccess | FunctionCall | IdentifierToken;
}

export interface BlockStatement extends STNode {
  closeBraceToken: CloseBraceToken;
  openBraceToken: OpenBraceToken;
  statements: Array<AssignmentStatement | CallStatement>;
}

export interface BracedExpression extends STNode {
  closeParen: CloseParenToken;
  expression: BinaryExpression | TypeTestExpression;
  openParen: OpenParenToken;
}

export interface CallStatement extends STNode {
  expression: FunctionCall | MethodCall;
  semicolonToken: SemicolonToken;
}

export interface CloseBracePipeToken extends STNode {
  isToken: boolean;
  value: string;
}

export interface CloseBraceToken extends STNode {
  isToken: boolean;
  value: string;
}

export interface CloseBracketToken extends STNode {
  isToken: boolean;
  value: string;
}

export interface CloseParenToken extends STNode {
  isToken: boolean;
  value: string;
}

export interface ColonToken extends STNode {
  isToken: boolean;
  value: string;
}

export interface CommaToken extends STNode {
  isToken: boolean;
  value: string;
}

export interface CompoundAssignmentStatement extends STNode {
  binaryOperator: PlusToken;
  equalsToken: EqualToken;
  lhsExpression: IdentifierToken;
  rhsExpression: DecimalIntegerLiteral;
  semicolonToken: SemicolonToken;
}

export interface DecimalIntegerLiteral extends STNode {
  isToken: boolean;
  value: string;
}

export interface DotToken extends STNode {
  isToken: boolean;
  value: string;
}

export interface EllipsisToken extends STNode {
  isToken: boolean;
  value: string;
}

export interface ElseBlock extends STNode {
  elseBody: BlockStatement;
  elseKeyword: ElseKeyword;
}

export interface ElseKeyword extends STNode {
  isToken: boolean;
  value: string;
}

export interface EofToken extends STNode {
  isToken: boolean;
  value: string;
}

export interface EqualToken extends STNode {
  isToken: boolean;
  value: string;
}

export interface ExpressionListItem extends STNode {
  expression: IdentifierToken;
}

export interface ExternalFunctionBody extends STNode {
  annotations: Annotation[];
  equalsToken: EqualToken;
  externalKeyword: ExternalKeyword;
  semicolonToken: SemicolonToken;
}

export interface ExternalKeyword extends STNode {
  isToken: boolean;
  value: string;
}

export interface FieldAccess extends STNode {
  dotToken: DotToken;
  expression: FieldAccess | IdentifierToken;
  fieldName: IdentifierToken;
}

export interface FunctionBodyBlock extends STNode {
  closeBraceToken: CloseBraceToken;
  openBraceToken: OpenBraceToken;
  statements: Array<
    | AssignmentStatement
    | BlockStatement
    | CallStatement
    | CompoundAssignmentStatement
    | IfElseStatement
    | Invalid
    | LocalVarDecl
    | ReturnStatement
  >;
}

export interface FunctionCall extends STNode {
  arguments: Array<NamedArg | PositionalArg>;
  closeParenToken: CloseParenToken;
  functionName: IdentifierToken | QualifiedIdentifier;
  openParenToken: OpenParenToken;
}

export interface FunctionDefinition extends STNode {
  closeParenToken: CloseParenToken;
  functionBody: ExternalFunctionBody | FunctionBodyBlock;
  functionKeyword: FunctionKeyword;
  functionName: IdentifierToken;
  metadata: Metadata;
  openParenToken: OpenParenToken;
  parameters: Array<RequiredParam | RestParam>;
  returnTypeDesc?: ReturnTypeDescriptor;
  visibilityQualifier?: PublicKeyword | ResourceKeyword;
}

export interface FunctionKeyword extends STNode {
  isToken: boolean;
  value: string;
}

export interface IdentifierToken extends STNode {
  isToken: boolean;
  value: string;
}

export interface IfElseStatement extends STNode {
  condition: BracedExpression;
  elseBody?: ElseBlock;
  ifBody: BlockStatement;
  ifKeyword: IfKeyword;
}

export interface IfKeyword extends STNode {
  isToken: boolean;
  value: string;
}

export interface ImportDeclaration extends STNode {
  importKeyword: ImportKeyword;
  moduleName: IdentifierToken[];
  orgName: ImportOrgName;
  semicolon: SemicolonToken;
}

export interface ImportKeyword extends STNode {
  isToken: boolean;
  value: string;
}

export interface ImportOrgName extends STNode {
  orgName: IdentifierToken;
  slashToken: SlashToken;
}

export interface Invalid extends STNode {
  expression: IdentifierToken | MemberAccess;
  semicolonToken: SemicolonToken;
}

export interface IsKeyword extends STNode {
  isToken: boolean;
  value: string;
}

export interface ListenerDeclaration extends STNode {
  equalsToken: EqualToken;
  initializer: FunctionCall;
  listenerKeyword: ListenerKeyword;
  metadata: Metadata;
  semicolonToken: SemicolonToken;
  typeDescriptor: QualifiedIdentifier;
  variableName: IdentifierToken;
}

export interface ListenerKeyword extends STNode {
  isToken: boolean;
  value: string;
}

export interface LocalVarDecl extends STNode {
  annotations: any;
  equalsToken?: EqualToken;
  initializer?:
    | BinaryExpression
    | DecimalIntegerLiteral
    | FunctionCall
    | IdentifierToken
    | MappingConstructor
    | MemberAccess
    | RemoteMethodCallAction
    | StringLiteral;
  semicolonToken: SemicolonToken;
  typeName:
    | ArrayType
    | IdentifierToken
    | NilType
    | ObjectTypeDescriptor
    | QualifiedIdentifier
    | RecordTypeDescriptor
    | SimpleType
    | VarKeyword;
  variableName: IdentifierToken;
}

export interface LtToken extends STNode {
  isToken: boolean;
  value: string;
}

export interface MappingConstructor extends STNode {
  closeBrace: CloseBraceToken;
  fields: SpecificField[];
  openBrace: OpenBraceToken;
}

export interface MemberAccess extends STNode {
  closeBracket: CloseBracketToken;
  containerExpression: IdentifierToken;
  keyExpression: DecimalIntegerLiteral | IdentifierToken;
  openBracket: OpenBracketToken;
}

export interface Metadata extends STNode {
  annotations: Annotation[];
}

export interface MethodCall extends STNode {
  arguments: PositionalArg[];
  closeParenToken: CloseParenToken;
  dotToken: DotToken;
  expression: IdentifierToken;
  methodName: IdentifierToken;
  openParenToken: OpenParenToken;
}

export interface ModuleVarDecl extends STNode {
  equalsToken: EqualToken;
  initializer: DecimalIntegerLiteral | MemberAccess;
  metadata: Metadata;
  semicolonToken: SemicolonToken;
  typeName: ArrayType | SimpleType;
  variableName: IdentifierToken;
}

export interface NamedArg extends STNode {
  argumentName: IdentifierToken;
  equalsToken: EqualToken;
  expression: StringLiteral;
}

export interface NilType extends STNode {
  closeParenToken: CloseParenToken;
  openParenToken: OpenParenToken;
}

export interface ObjectField extends STNode {
  fieldName: IdentifierToken;
  metadata: Metadata;
  semicolonToken: SemicolonToken;
  typeName: SimpleType;
  visibilityQualifier: PublicKeyword;
}

export interface ObjectKeyword extends STNode {
  isToken: boolean;
  value: string;
}

export interface ObjectTypeDescriptor extends STNode {
  closeBrace: CloseBraceToken;
  members: Array<FunctionDefinition | ObjectField>;
  objectKeyword: ObjectKeyword;
  objectTypeQualifiers: AbstractKeyword[];
  openBrace: OpenBraceToken;
}

export interface OnKeyword extends STNode {
  isToken: boolean;
  value: string;
}

export interface OpenBracePipeToken extends STNode {
  isToken: boolean;
  value: string;
}

export interface OpenBraceToken extends STNode {
  isToken: boolean;
  value: string;
}

export interface OpenBracketToken extends STNode {
  isToken: boolean;
  value: string;
}

export interface OpenParenToken extends STNode {
  isToken: boolean;
  value: string;
}

export interface PlusToken extends STNode {
  isToken: boolean;
  value: string;
}

export interface PositionalArg extends STNode {
  expression:
    | DecimalIntegerLiteral
    | FieldAccess
    | IdentifierToken
    | MemberAccess
    | MethodCall
    | StringLiteral;
  leadingComma?: CommaToken;
}

export interface PublicKeyword extends STNode {
  isToken: boolean;
  value: string;
}

export interface QualifiedIdentifier extends STNode {
  colon: ColonToken;
  identifier: IdentifierToken;
  modulePrefix: IdentifierToken;
}

export interface RecordField extends STNode {
  fieldName: IdentifierToken;
  metadata: Metadata;
  semicolonToken: SemicolonToken;
  typeName: ObjectTypeDescriptor | RecordTypeDescriptor | SimpleType;
}

export interface RecordKeyword extends STNode {
  isToken: boolean;
  value: string;
}

export interface RecordTypeDescriptor extends STNode {
  bodyEndDelimiter: CloseBracePipeToken | CloseBraceToken;
  bodyStartDelimiter: OpenBracePipeToken | OpenBraceToken;
  fields: RecordField[];
  objectKeyword: RecordKeyword;
}

export interface RemoteMethodCallAction extends STNode {
  arguments: PositionalArg[];
  closeParenToken: CloseParenToken;
  expression: IdentifierToken;
  methodName: IdentifierToken;
  openParenToken: OpenParenToken;
  rightArrowToken: RightArrowToken;
}

export interface RequiredParam extends STNode {
  annotations: Annotation[];
  leadingComma?: CommaToken;
  paramName: IdentifierToken;
  typeName: RecordTypeDescriptor | SimpleType;
}

export interface ResourceKeyword extends STNode {
  isToken: boolean;
  value: string;
}

export interface RestParam extends STNode {
  annotations: any;
  ellipsisToken: EllipsisToken;
  paramName: IdentifierToken;
  typeName: SimpleType;
}

export interface ReturnKeyword extends STNode {
  isToken: boolean;
  value: string;
}

export interface ReturnStatement extends STNode {
  expression: BinaryExpression | IdentifierToken;
  returnKeyword: ReturnKeyword;
  semicolonToken: SemicolonToken;
}

export interface ReturnTypeDescriptor extends STNode {
  annotations: any;
  returnsKeyword: ReturnsKeyword;
  type: ArrayType | SimpleType;
}

export interface ReturnsKeyword extends STNode {
  isToken: boolean;
  value: string;
}

export interface RightArrowToken extends STNode {
  isToken: boolean;
  value: string;
}

export interface SemicolonToken extends STNode {
  isToken: boolean;
  value: string;
}

export interface ServiceBody extends STNode {
  closeBraceToken: CloseBraceToken;
  openBraceToken: OpenBraceToken;
  resources: FunctionDefinition[];
}

export interface ServiceDeclaration extends STNode {
  expressions: ExpressionListItem[];
  metadata: Metadata;
  onKeyword: OnKeyword;
  serviceBody: ServiceBody;
  serviceKeyword: ServiceKeyword;
  serviceName: IdentifierToken;
}

export interface ServiceKeyword extends STNode {
  isToken: boolean;
  value: string;
}

export interface SimpleType extends STNode {
  isToken: boolean;
  value: string;
}

export interface SlashToken extends STNode {
  isToken: boolean;
  value: string;
}

export interface SpecificField extends STNode {
  colon?: ColonToken;
  fieldName: IdentifierToken;
  leadingComma?: CommaToken;
  valueExpr?:
    | DecimalIntegerLiteral
    | FunctionCall
    | IdentifierToken
    | MappingConstructor
    | StringLiteral;
}

export interface StringLiteral extends STNode {
  isToken: boolean;
  value: string;
}

export interface SyntaxTree extends STNode {
  eofToken: EofToken;
  imports: ImportDeclaration[];
  members: Array<
    | FunctionDefinition
    | ListenerDeclaration
    | ModuleVarDecl
    | ServiceDeclaration
    | TypeDefinition
  >;
}

export interface TypeDefinition extends STNode {
  metadata: Metadata;
  semicolonToken: SemicolonToken;
  typeDescriptor: ObjectTypeDescriptor | RecordTypeDescriptor;
  typeKeyword: TypeKeyword;
  typeName: IdentifierToken;
  visibilityQualifier?: PublicKeyword;
}

export interface TypeKeyword extends STNode {
  isToken: boolean;
  value: string;
}

export interface TypeTestExpression extends STNode {
  expression: IdentifierToken;
  isKeyword: IsKeyword;
  typeDescriptor: IdentifierToken | QualifiedIdentifier;
}

export interface VarKeyword extends STNode {
  isToken: boolean;
  value: string;
}

// tslint:enable:ban-types
