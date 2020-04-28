// This is an auto-generated file. Do not edit.
// Run 'BALLERINA_HOME="your/ballerina/home" npm run gen-models' to generate.
import * as Ballerina from "./syntax-tree-interfaces";

export class STKindChecker {
  public static isAbstractKeyword(
    node: Ballerina.STNode
  ): node is Ballerina.AbstractKeyword {
    return node.kind === "AbstractKeyword";
  }

  public static isAnnotation(
    node: Ballerina.STNode
  ): node is Ballerina.Annotation {
    return node.kind === "Annotation";
  }

  public static isArrayType(
    node: Ballerina.STNode
  ): node is Ballerina.ArrayType {
    return node.kind === "ArrayType";
  }

  public static isAssignmentStatement(
    node: Ballerina.STNode
  ): node is Ballerina.AssignmentStatement {
    return node.kind === "AssignmentStatement";
  }

  public static isAsteriskToken(
    node: Ballerina.STNode
  ): node is Ballerina.AsteriskToken {
    return node.kind === "AsteriskToken";
  }

  public static isAtToken(node: Ballerina.STNode): node is Ballerina.AtToken {
    return node.kind === "AtToken";
  }

  public static isBinaryExpression(
    node: Ballerina.STNode
  ): node is Ballerina.BinaryExpression {
    return node.kind === "BinaryExpression";
  }

  public static isBlockStatement(
    node: Ballerina.STNode
  ): node is Ballerina.BlockStatement {
    return node.kind === "BlockStatement";
  }

  public static isBracedExpression(
    node: Ballerina.STNode
  ): node is Ballerina.BracedExpression {
    return node.kind === "BracedExpression";
  }

  public static isCallStatement(
    node: Ballerina.STNode
  ): node is Ballerina.CallStatement {
    return node.kind === "CallStatement";
  }

  public static isCloseBracePipeToken(
    node: Ballerina.STNode
  ): node is Ballerina.CloseBracePipeToken {
    return node.kind === "CloseBracePipeToken";
  }

  public static isCloseBraceToken(
    node: Ballerina.STNode
  ): node is Ballerina.CloseBraceToken {
    return node.kind === "CloseBraceToken";
  }

  public static isCloseBracketToken(
    node: Ballerina.STNode
  ): node is Ballerina.CloseBracketToken {
    return node.kind === "CloseBracketToken";
  }

  public static isCloseParenToken(
    node: Ballerina.STNode
  ): node is Ballerina.CloseParenToken {
    return node.kind === "CloseParenToken";
  }

  public static isColonToken(
    node: Ballerina.STNode
  ): node is Ballerina.ColonToken {
    return node.kind === "ColonToken";
  }

  public static isCommaToken(
    node: Ballerina.STNode
  ): node is Ballerina.CommaToken {
    return node.kind === "CommaToken";
  }

  public static isCompoundAssignmentStatement(
    node: Ballerina.STNode
  ): node is Ballerina.CompoundAssignmentStatement {
    return node.kind === "CompoundAssignmentStatement";
  }

  public static isDecimalIntegerLiteral(
    node: Ballerina.STNode
  ): node is Ballerina.DecimalIntegerLiteral {
    return node.kind === "DecimalIntegerLiteral";
  }

  public static isDotToken(node: Ballerina.STNode): node is Ballerina.DotToken {
    return node.kind === "DotToken";
  }

  public static isEllipsisToken(
    node: Ballerina.STNode
  ): node is Ballerina.EllipsisToken {
    return node.kind === "EllipsisToken";
  }

  public static isElseBlock(
    node: Ballerina.STNode
  ): node is Ballerina.ElseBlock {
    return node.kind === "ElseBlock";
  }

  public static isElseKeyword(
    node: Ballerina.STNode
  ): node is Ballerina.ElseKeyword {
    return node.kind === "ElseKeyword";
  }

  public static isEofToken(node: Ballerina.STNode): node is Ballerina.EofToken {
    return node.kind === "EofToken";
  }

  public static isEqualToken(
    node: Ballerina.STNode
  ): node is Ballerina.EqualToken {
    return node.kind === "EqualToken";
  }

  public static isExpressionListItem(
    node: Ballerina.STNode
  ): node is Ballerina.ExpressionListItem {
    return node.kind === "ExpressionListItem";
  }

  public static isExternalFunctionBody(
    node: Ballerina.STNode
  ): node is Ballerina.ExternalFunctionBody {
    return node.kind === "ExternalFunctionBody";
  }

  public static isExternalKeyword(
    node: Ballerina.STNode
  ): node is Ballerina.ExternalKeyword {
    return node.kind === "ExternalKeyword";
  }

  public static isFieldAccess(
    node: Ballerina.STNode
  ): node is Ballerina.FieldAccess {
    return node.kind === "FieldAccess";
  }

  public static isFunctionBodyBlock(
    node: Ballerina.STNode
  ): node is Ballerina.FunctionBodyBlock {
    return node.kind === "FunctionBodyBlock";
  }

  public static isFunctionCall(
    node: Ballerina.STNode
  ): node is Ballerina.FunctionCall {
    return node.kind === "FunctionCall";
  }

  public static isFunctionDefinition(
    node: Ballerina.STNode
  ): node is Ballerina.FunctionDefinition {
    return node.kind === "FunctionDefinition";
  }

  public static isFunctionKeyword(
    node: Ballerina.STNode
  ): node is Ballerina.FunctionKeyword {
    return node.kind === "FunctionKeyword";
  }

  public static isIdentifierToken(
    node: Ballerina.STNode
  ): node is Ballerina.IdentifierToken {
    return node.kind === "IdentifierToken";
  }

  public static isIfElseStatement(
    node: Ballerina.STNode
  ): node is Ballerina.IfElseStatement {
    return node.kind === "IfElseStatement";
  }

  public static isIfKeyword(
    node: Ballerina.STNode
  ): node is Ballerina.IfKeyword {
    return node.kind === "IfKeyword";
  }

  public static isImportDeclaration(
    node: Ballerina.STNode
  ): node is Ballerina.ImportDeclaration {
    return node.kind === "ImportDeclaration";
  }

  public static isImportKeyword(
    node: Ballerina.STNode
  ): node is Ballerina.ImportKeyword {
    return node.kind === "ImportKeyword";
  }

  public static isImportOrgName(
    node: Ballerina.STNode
  ): node is Ballerina.ImportOrgName {
    return node.kind === "ImportOrgName";
  }

  public static isInvalid(node: Ballerina.STNode): node is Ballerina.Invalid {
    return node.kind === "Invalid";
  }

  public static isIsKeyword(
    node: Ballerina.STNode
  ): node is Ballerina.IsKeyword {
    return node.kind === "IsKeyword";
  }

  public static isListenerDeclaration(
    node: Ballerina.STNode
  ): node is Ballerina.ListenerDeclaration {
    return node.kind === "ListenerDeclaration";
  }

  public static isListenerKeyword(
    node: Ballerina.STNode
  ): node is Ballerina.ListenerKeyword {
    return node.kind === "ListenerKeyword";
  }

  public static isLocalVarDecl(
    node: Ballerina.STNode
  ): node is Ballerina.LocalVarDecl {
    return node.kind === "LocalVarDecl";
  }

  public static isLtToken(node: Ballerina.STNode): node is Ballerina.LtToken {
    return node.kind === "LtToken";
  }

  public static isMappingConstructor(
    node: Ballerina.STNode
  ): node is Ballerina.MappingConstructor {
    return node.kind === "MappingConstructor";
  }

  public static isMemberAccess(
    node: Ballerina.STNode
  ): node is Ballerina.MemberAccess {
    return node.kind === "MemberAccess";
  }

  public static isMetadata(node: Ballerina.STNode): node is Ballerina.Metadata {
    return node.kind === "Metadata";
  }

  public static isMethodCall(
    node: Ballerina.STNode
  ): node is Ballerina.MethodCall {
    return node.kind === "MethodCall";
  }

  public static isModuleVarDecl(
    node: Ballerina.STNode
  ): node is Ballerina.ModuleVarDecl {
    return node.kind === "ModuleVarDecl";
  }

  public static isNamedArg(node: Ballerina.STNode): node is Ballerina.NamedArg {
    return node.kind === "NamedArg";
  }

  public static isNilType(node: Ballerina.STNode): node is Ballerina.NilType {
    return node.kind === "NilType";
  }

  public static isObjectField(
    node: Ballerina.STNode
  ): node is Ballerina.ObjectField {
    return node.kind === "ObjectField";
  }

  public static isObjectKeyword(
    node: Ballerina.STNode
  ): node is Ballerina.ObjectKeyword {
    return node.kind === "ObjectKeyword";
  }

  public static isObjectTypeDescriptor(
    node: Ballerina.STNode
  ): node is Ballerina.ObjectTypeDescriptor {
    return node.kind === "ObjectTypeDescriptor";
  }

  public static isOnKeyword(
    node: Ballerina.STNode
  ): node is Ballerina.OnKeyword {
    return node.kind === "OnKeyword";
  }

  public static isOpenBracePipeToken(
    node: Ballerina.STNode
  ): node is Ballerina.OpenBracePipeToken {
    return node.kind === "OpenBracePipeToken";
  }

  public static isOpenBraceToken(
    node: Ballerina.STNode
  ): node is Ballerina.OpenBraceToken {
    return node.kind === "OpenBraceToken";
  }

  public static isOpenBracketToken(
    node: Ballerina.STNode
  ): node is Ballerina.OpenBracketToken {
    return node.kind === "OpenBracketToken";
  }

  public static isOpenParenToken(
    node: Ballerina.STNode
  ): node is Ballerina.OpenParenToken {
    return node.kind === "OpenParenToken";
  }

  public static isPlusToken(
    node: Ballerina.STNode
  ): node is Ballerina.PlusToken {
    return node.kind === "PlusToken";
  }

  public static isPositionalArg(
    node: Ballerina.STNode
  ): node is Ballerina.PositionalArg {
    return node.kind === "PositionalArg";
  }

  public static isPublicKeyword(
    node: Ballerina.STNode
  ): node is Ballerina.PublicKeyword {
    return node.kind === "PublicKeyword";
  }

  public static isQualifiedIdentifier(
    node: Ballerina.STNode
  ): node is Ballerina.QualifiedIdentifier {
    return node.kind === "QualifiedIdentifier";
  }

  public static isRecordField(
    node: Ballerina.STNode
  ): node is Ballerina.RecordField {
    return node.kind === "RecordField";
  }

  public static isRecordKeyword(
    node: Ballerina.STNode
  ): node is Ballerina.RecordKeyword {
    return node.kind === "RecordKeyword";
  }

  public static isRecordTypeDescriptor(
    node: Ballerina.STNode
  ): node is Ballerina.RecordTypeDescriptor {
    return node.kind === "RecordTypeDescriptor";
  }

  public static isRemoteMethodCallAction(
    node: Ballerina.STNode
  ): node is Ballerina.RemoteMethodCallAction {
    return node.kind === "RemoteMethodCallAction";
  }

  public static isRequiredParam(
    node: Ballerina.STNode
  ): node is Ballerina.RequiredParam {
    return node.kind === "RequiredParam";
  }

  public static isResourceKeyword(
    node: Ballerina.STNode
  ): node is Ballerina.ResourceKeyword {
    return node.kind === "ResourceKeyword";
  }

  public static isRestParam(
    node: Ballerina.STNode
  ): node is Ballerina.RestParam {
    return node.kind === "RestParam";
  }

  public static isReturnKeyword(
    node: Ballerina.STNode
  ): node is Ballerina.ReturnKeyword {
    return node.kind === "ReturnKeyword";
  }

  public static isReturnStatement(
    node: Ballerina.STNode
  ): node is Ballerina.ReturnStatement {
    return node.kind === "ReturnStatement";
  }

  public static isReturnTypeDescriptor(
    node: Ballerina.STNode
  ): node is Ballerina.ReturnTypeDescriptor {
    return node.kind === "ReturnTypeDescriptor";
  }

  public static isReturnsKeyword(
    node: Ballerina.STNode
  ): node is Ballerina.ReturnsKeyword {
    return node.kind === "ReturnsKeyword";
  }

  public static isRightArrowToken(
    node: Ballerina.STNode
  ): node is Ballerina.RightArrowToken {
    return node.kind === "RightArrowToken";
  }

  public static isSemicolonToken(
    node: Ballerina.STNode
  ): node is Ballerina.SemicolonToken {
    return node.kind === "SemicolonToken";
  }

  public static isServiceBody(
    node: Ballerina.STNode
  ): node is Ballerina.ServiceBody {
    return node.kind === "ServiceBody";
  }

  public static isServiceDeclaration(
    node: Ballerina.STNode
  ): node is Ballerina.ServiceDeclaration {
    return node.kind === "ServiceDeclaration";
  }

  public static isServiceKeyword(
    node: Ballerina.STNode
  ): node is Ballerina.ServiceKeyword {
    return node.kind === "ServiceKeyword";
  }

  public static isSimpleType(
    node: Ballerina.STNode
  ): node is Ballerina.SimpleType {
    return node.kind === "SimpleType";
  }

  public static isSlashToken(
    node: Ballerina.STNode
  ): node is Ballerina.SlashToken {
    return node.kind === "SlashToken";
  }

  public static isSpecificField(
    node: Ballerina.STNode
  ): node is Ballerina.SpecificField {
    return node.kind === "SpecificField";
  }

  public static isStringLiteral(
    node: Ballerina.STNode
  ): node is Ballerina.StringLiteral {
    return node.kind === "StringLiteral";
  }

  public static isSyntaxTree(
    node: Ballerina.STNode
  ): node is Ballerina.SyntaxTree {
    return node.kind === "SyntaxTree";
  }

  public static isTypeDefinition(
    node: Ballerina.STNode
  ): node is Ballerina.TypeDefinition {
    return node.kind === "TypeDefinition";
  }

  public static isTypeKeyword(
    node: Ballerina.STNode
  ): node is Ballerina.TypeKeyword {
    return node.kind === "TypeKeyword";
  }

  public static isTypeTestExpression(
    node: Ballerina.STNode
  ): node is Ballerina.TypeTestExpression {
    return node.kind === "TypeTestExpression";
  }

  public static isVarKeyword(
    node: Ballerina.STNode
  ): node is Ballerina.VarKeyword {
    return node.kind === "VarKeyword";
  }
}
