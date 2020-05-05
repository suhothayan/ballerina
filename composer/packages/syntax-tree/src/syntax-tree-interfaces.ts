// This is an auto-generated file. Do not edit.
// Run 'BALLERINA_HOME="your/ballerina/home" npm run gen-models' to generate.
// tslint:disable:ban-types
export interface STNode {
  kind: string;
  parent?: STNode;
}

export interface AbstractKeyword extends STNode {
  isToken: boolean;
  value: string;
}

export interface Annotation extends STNode {
  annotReference: QualifiedNameReference;
  annotValue: MappingConstructor;
  atToken: AtToken;
}

export interface AnyKeyword extends STNode {
  isToken: boolean;
  value: string;
}

export interface AnyTypeDesc extends STNode {
  name: AnyKeyword;
}

export interface AnydataKeyword extends STNode {
  isToken: boolean;
  value: string;
}

export interface AnydataTypeDesc extends STNode {
  name: AnydataKeyword;
}

export interface ArrayTypeDesc extends STNode {
  arrayLengthNode?: AsteriskToken | DecimalIntegerLiteral;
  closeBracketToken: CloseBracketToken;
  openBracketToken: OpenBracketToken;
  typeDescriptorNode:
    | AnyTypeDesc
    | AnydataTypeDesc
    | ArrayTypeDesc
    | ByteTypeDesc
    | IntTypeDesc
    | SimpleNameReference
    | StringTypeDesc;
}

export interface AssignmentStatement extends STNode {
  equalsToken: EqualToken;
  expression:
    | CheckExpression
    | DecimalFloatingPointLiteral
    | DecimalIntegerLiteral
    | MemberAccess
    | SimpleNameReference
    | StringLiteral;
  semicolonToken: SemicolonToken;
  varRef: FieldAccess | MemberAccess | SimpleNameReference;
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
    | MethodCall
    | SimpleNameReference
    | StringLiteral;
  operator:
    | AsteriskToken
    | BitwiseAndToken
    | BitwiseXorToken
    | DoubleEqualToken
    | LtToken
    | PipeToken
    | PlusToken;
  rhsExpr:
    | BinaryExpression
    | DecimalFloatingPointLiteral
    | DecimalIntegerLiteral
    | FieldAccess
    | FunctionCall
    | SimpleNameReference
    | StringLiteral;
}

export interface BitwiseAndToken extends STNode {
  isToken: boolean;
  value: string;
}

export interface BitwiseXorToken extends STNode {
  isToken: boolean;
  value: string;
}

export interface BlockStatement extends STNode {
  closeBraceToken: CloseBraceToken;
  openBraceToken: OpenBraceToken;
  statements: Array<
    | AssignmentStatement
    | CallStatement
    | CompoundAssignmentStatement
    | ContinueStatement
    | IfElseStatement
    | LocalVarDecl
    | ReturnStatement
  >;
}

export interface BooleanKeyword extends STNode {
  isToken: boolean;
  value: string;
}

export interface BooleanTypeDesc extends STNode {
  name: BooleanKeyword;
}

export interface BracedExpression extends STNode {
  closeParen: CloseParenToken;
  expression:
    | BinaryExpression
    | MemberAccess
    | MethodCall
    | StringLiteral
    | TypeTestExpression;
  openParen: OpenParenToken;
}

export interface ByteKeyword extends STNode {
  isToken: boolean;
  value: string;
}

export interface ByteTypeDesc extends STNode {
  name: ByteKeyword;
}

export interface CallStatement extends STNode {
  expression: FunctionCall | MethodCall;
  semicolonToken: SemicolonToken;
}

export interface CheckExpression extends STNode {
  checkKeyword: CheckKeyword;
  expression: MethodCall;
}

export interface CheckKeyword extends STNode {
  isToken: boolean;
  value: string;
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
  lhsExpression: SimpleNameReference;
  rhsExpression: DecimalIntegerLiteral;
  semicolonToken: SemicolonToken;
}

export interface ComputedNameField extends STNode {
  closeBracket: CloseBracketToken;
  colonToken: ColonToken;
  fieldNameExpr: BracedExpression;
  openBracket: OpenBracketToken;
  valueExpr: FunctionCall;
}

export interface ConstDeclaration extends STNode {
  constKeyword: ConstKeyword;
  equalsToken: EqualToken;
  initializer: ListConstructor;
  metadata: Metadata;
  semicolonToken: SemicolonToken;
  variableName: SimpleNameReference;
}

export interface ConstKeyword extends STNode {
  isToken: boolean;
  value: string;
}

export interface ContinueKeyword extends STNode {
  isToken: boolean;
  value: string;
}

export interface ContinueStatement extends STNode {
  continueToken: ContinueKeyword;
  semicolonToken: SemicolonToken;
}

export interface DecimalFloatingPointLiteral extends STNode {
  isToken?: boolean;
  literalToken?: DecimalFloatingPointLiteral;
  value?: string;
}

export interface DecimalIntegerLiteral extends STNode {
  isToken?: boolean;
  literalToken?: DecimalIntegerLiteral;
  value?: string;
}

export interface DocumentationLine extends STNode {
  isToken: boolean;
  value: string;
}

export interface DocumentationString extends STNode {
  documentationLines: DocumentationLine[];
}

export interface DotToken extends STNode {
  isToken: boolean;
  value: string;
}

export interface DoubleEqualToken extends STNode {
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
  expression: SimpleNameReference;
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

export interface FalseKeyword extends STNode {
  isToken?: boolean;
  literalToken?: FalseKeyword;
  value?: string;
}

export interface FieldAccess extends STNode {
  dotToken: DotToken;
  expression: DecimalFloatingPointLiteral | FieldAccess | SimpleNameReference;
  fieldName: IdentifierToken;
}

export interface FloatKeyword extends STNode {
  isToken: boolean;
  value: string;
}

export interface FloatTypeDesc extends STNode {
  name: FloatKeyword;
}

export interface ForeachKeyword extends STNode {
  isToken: boolean;
  value: string;
}

export interface ForeachStatement extends STNode {
  ActionOrExpressionNode: BinaryExpression | SimpleNameReference;
  blockStatement: BlockStatement;
  forEachKeyword: ForeachKeyword;
  inKeyword: InKeyword;
  typeDescriptor: VarTypeDesc;
  variableName: IdentifierToken;
}

export interface FunctionBodyBlock extends STNode {
  closeBraceToken: CloseBraceToken;
  openBraceToken: OpenBraceToken;
  statements: Array<
    | AssignmentStatement
    | BlockStatement
    | CallStatement
    | CompoundAssignmentStatement
    | ForeachStatement
    | IfElseStatement
    | LocalVarDecl
    | LockStatement
    | ReturnStatement
  >;
}

export interface FunctionCall extends STNode {
  arguments: Array<NamedArg | PositionalArg>;
  closeParenToken: CloseParenToken;
  functionName: QualifiedNameReference | SimpleNameReference;
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

export interface GtToken extends STNode {
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
  moduleName: Array<DotToken | IdentifierToken>;
  orgName?: ImportOrgName;
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

export interface InKeyword extends STNode {
  isToken: boolean;
  value: string;
}

export interface IntKeyword extends STNode {
  isToken: boolean;
  value: string;
}

export interface IntTypeDesc extends STNode {
  name: IntKeyword;
}

export interface IsKeyword extends STNode {
  isToken: boolean;
  value: string;
}

export interface ListConstructor extends STNode {
  closeBracket: CloseBracketToken;
  expressions: Array<
    | CommaToken
    | DecimalIntegerLiteral
    | ListConstructor
    | SimpleNameReference
    | StringLiteral
  >;
  openBracket: OpenBracketToken;
}

export interface ListenerDeclaration extends STNode {
  equalsToken: EqualToken;
  initializer: FunctionCall;
  listenerKeyword: ListenerKeyword;
  metadata: Metadata;
  semicolonToken: SemicolonToken;
  typeDescriptor: QualifiedNameReference;
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
    | ListConstructor
    | MappingConstructor
    | MethodCall
    | RemoteMethodCallAction
    | SimpleNameReference
    | StringLiteral
    | TypeCastExpression
    | TypeTestExpression;
  semicolonToken: SemicolonToken;
  typeName:
    | AnyTypeDesc
    | AnydataTypeDesc
    | ArrayTypeDesc
    | ByteTypeDesc
    | FloatTypeDesc
    | IntTypeDesc
    | NilTypeDesc
    | ObjectTypeDesc
    | QualifiedNameReference
    | RecordTypeDesc
    | SimpleNameReference
    | StringTypeDesc
    | VarTypeDesc;
  variableName: IdentifierToken;
}

export interface LockKeyword extends STNode {
  isToken: boolean;
  value: string;
}

export interface LockStatement extends STNode {
  blockStatement: BlockStatement;
  lockKeyword: LockKeyword;
}

export interface LtToken extends STNode {
  isToken: boolean;
  value: string;
}

export interface MapKeyword extends STNode {
  isToken: boolean;
  value: string;
}

export interface MappingConstructor extends STNode {
  closeBrace: CloseBraceToken;
  fields: Array<ComputedNameField | SpecificField | SpreadField>;
  openBrace: OpenBraceToken;
}

export interface MemberAccess extends STNode {
  closeBracket: CloseBracketToken;
  containerExpression: MethodCall | SimpleNameReference;
  keyExpression: DecimalIntegerLiteral | SimpleNameReference | StringLiteral;
  openBracket: OpenBracketToken;
}

export interface Metadata extends STNode {
  annotations: Annotation[];
  documentationString?: DocumentationString;
}

export interface MethodCall extends STNode {
  arguments: PositionalArg[];
  closeParenToken: CloseParenToken;
  dotToken: DotToken;
  expression: MemberAccess | SimpleNameReference;
  methodName: IdentifierToken;
  openParenToken: OpenParenToken;
}

export interface ModuleVarDecl extends STNode {
  equalsToken?: EqualToken;
  initializer?:
    | DecimalIntegerLiteral
    | ListConstructor
    | MappingConstructor
    | SimpleNameReference;
  metadata: Metadata;
  semicolonToken: SemicolonToken;
  typeName: ArrayTypeDesc | IntTypeDesc | NilTypeDesc | QualifiedNameReference;
  variableName: IdentifierToken;
}

export interface NamedArg extends STNode {
  argumentName: SimpleNameReference;
  equalsToken: EqualToken;
  expression:
    | MappingConstructor
    | MemberAccess
    | SimpleNameReference
    | StringLiteral;
  leadingComma?: CommaToken;
}

export interface NilTypeDesc extends STNode {
  closeParenToken: CloseParenToken;
  openParenToken: OpenParenToken;
}

export interface ObjectField extends STNode {
  fieldName: IdentifierToken;
  metadata: Metadata;
  semicolonToken: SemicolonToken;
  typeName:
    | IntTypeDesc
    | RecordTypeDesc
    | SimpleNameReference
    | StringTypeDesc
    | TypeDesc;
  visibilityQualifier?: PublicKeyword;
}

export interface ObjectKeyword extends STNode {
  isToken: boolean;
  value: string;
}

export interface ObjectTypeDesc extends STNode {
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

export interface OptionalTypeDesc extends STNode {
  questionMarkToken: QuestionMarkToken;
  typeDescriptor: SimpleNameReference;
}

export interface ParameterizedTypeDesc extends STNode {
  gtToken: GtToken;
  ltToken: LtToken;
  parameterizedType: MapKeyword;
  typeNode: NilTypeDesc;
}

export interface PipeToken extends STNode {
  isToken: boolean;
  value: string;
}

export interface PlusToken extends STNode {
  isToken: boolean;
  value: string;
}

export interface PositionalArg extends STNode {
  expression:
    | BinaryExpression
    | DecimalIntegerLiteral
    | FieldAccess
    | FunctionCall
    | MemberAccess
    | MethodCall
    | SimpleNameReference
    | StringLiteral
    | TypeCastExpression;
  leadingComma?: CommaToken;
}

export interface PublicKeyword extends STNode {
  isToken: boolean;
  value: string;
}

export interface QualifiedNameReference extends STNode {
  colon: ColonToken;
  identifier: IdentifierToken;
  modulePrefix: IdentifierToken;
}

export interface QuestionMarkToken extends STNode {
  isToken: boolean;
  value: string;
}

export interface RecordField extends STNode {
  fieldName: IdentifierToken;
  metadata: Metadata;
  semicolonToken: SemicolonToken;
  typeName: IntTypeDesc | ObjectTypeDesc | RecordTypeDesc | StringTypeDesc;
}

export interface RecordKeyword extends STNode {
  isToken: boolean;
  value: string;
}

export interface RecordTypeDesc extends STNode {
  bodyEndDelimiter: CloseBracePipeToken | CloseBraceToken;
  bodyStartDelimiter: OpenBracePipeToken | OpenBraceToken;
  fields: RecordField[];
  objectKeyword: RecordKeyword;
}

export interface RemoteMethodCallAction extends STNode {
  arguments: PositionalArg[];
  closeParenToken: CloseParenToken;
  expression: SimpleNameReference;
  methodName: IdentifierToken;
  openParenToken: OpenParenToken;
  rightArrowToken: RightArrowToken;
}

export interface RequiredParam extends STNode {
  annotations: any;
  leadingComma?: CommaToken;
  paramName: IdentifierToken;
  typeName:
    | IntTypeDesc
    | QualifiedNameReference
    | RecordTypeDesc
    | SimpleNameReference
    | StringTypeDesc;
}

export interface ResourceKeyword extends STNode {
  isToken: boolean;
  value: string;
}

export interface RestParam extends STNode {
  annotations: any;
  ellipsisToken: EllipsisToken;
  paramName: IdentifierToken;
  typeName: AnyTypeDesc;
}

export interface ReturnKeyword extends STNode {
  isToken: boolean;
  value: string;
}

export interface ReturnStatement extends STNode {
  expression:
    | BinaryExpression
    | FalseKeyword
    | FieldAccess
    | SimpleNameReference
    | TrueKeyword;
  returnKeyword: ReturnKeyword;
  semicolonToken: SemicolonToken;
}

export interface ReturnTypeDescriptor extends STNode {
  annotations: any;
  returnsKeyword: ReturnsKeyword;
  type:
    | AnyTypeDesc
    | AnydataTypeDesc
    | ArrayTypeDesc
    | BooleanTypeDesc
    | FloatTypeDesc
    | IntTypeDesc
    | OptionalTypeDesc
    | StringTypeDesc;
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

export interface SimpleNameReference extends STNode {
  name: IdentifierToken;
}

export interface SlashToken extends STNode {
  isToken: boolean;
  value: string;
}

export interface SpecificField extends STNode {
  colon: ColonToken;
  fieldName: IdentifierToken;
  leadingComma?: CommaToken;
  valueExpr:
    | BinaryExpression
    | DecimalIntegerLiteral
    | FunctionCall
    | ListConstructor
    | MappingConstructor
    | SimpleNameReference
    | StringLiteral;
}

export interface SpreadField extends STNode {
  ellipsis: EllipsisToken;
  valueExpr: BracedExpression;
}

export interface StringKeyword extends STNode {
  isToken: boolean;
  value: string;
}

export interface StringLiteral extends STNode {
  isToken?: boolean;
  literalToken?: StringLiteral;
  value?: string;
}

export interface StringTypeDesc extends STNode {
  name: StringKeyword;
}

export interface SyntaxTree extends STNode {
  eofToken: EofToken;
  imports: ImportDeclaration[];
  members: Array<
    | ConstDeclaration
    | EofToken
    | FunctionDefinition
    | ImportDeclaration
    | ListenerDeclaration
    | ModuleVarDecl
    | ServiceDeclaration
    | TypeDefinition
  >;
}

export interface TrueKeyword extends STNode {
  isToken?: boolean;
  literalToken?: TrueKeyword;
  value?: string;
}

export interface TypeCastExpression extends STNode {
  expression: CheckExpression | MemberAccess | SimpleNameReference;
  gtToken: GtToken;
  ltToken: LtToken;
  typeCastParam: TypeCastParam;
}

export interface TypeCastParam extends STNode {
  type: IntTypeDesc | SimpleNameReference | StringTypeDesc;
}

export interface TypeDefinition extends STNode {
  metadata: Metadata;
  semicolonToken: SemicolonToken;
  typeDescriptor: ObjectTypeDesc | RecordTypeDesc;
  typeKeyword: TypeKeyword;
  typeName: IdentifierToken;
  visibilityQualifier?: PublicKeyword;
}

export interface TypeDesc extends STNode {
  isToken: boolean;
  value: string;
}

export interface TypeKeyword extends STNode {
  isToken: boolean;
  value: string;
}

export interface TypeTestExpression extends STNode {
  expression: FieldAccess | SimpleNameReference;
  isKeyword: IsKeyword;
  typeDescriptor:
    | IntTypeDesc
    | ParameterizedTypeDesc
    | QualifiedNameReference
    | SimpleNameReference
    | StringTypeDesc;
}

export interface VarKeyword extends STNode {
  isToken: boolean;
  value: string;
}

export interface VarTypeDesc extends STNode {
  name: VarKeyword;
}

// tslint:enable:ban-types
