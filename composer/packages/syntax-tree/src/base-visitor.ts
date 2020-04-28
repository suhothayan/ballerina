// This is an auto-generated file. Do not edit.
// Run 'BALLERINA_HOME="your/ballerina/home" npm run gen-models' to generate.
import * as Ballerina from "./syntax-tree-interfaces";

export interface Visitor {
  beginVisitSTNode?(node: Ballerina.STNode, parent?: Ballerina.STNode): void;
  endVisitSTNode?(node: Ballerina.STNode, parent?: Ballerina.STNode): void;

  beginVisitAbstractKeyword?(
    node: Ballerina.AbstractKeyword,
    parent?: Ballerina.STNode
  ): void;
  endVisitAbstractKeyword?(
    node: Ballerina.AbstractKeyword,
    parent?: Ballerina.STNode
  ): void;

  beginVisitAnnotation?(
    node: Ballerina.Annotation,
    parent?: Ballerina.STNode
  ): void;
  endVisitAnnotation?(
    node: Ballerina.Annotation,
    parent?: Ballerina.STNode
  ): void;

  beginVisitArrayType?(
    node: Ballerina.ArrayType,
    parent?: Ballerina.STNode
  ): void;
  endVisitArrayType?(
    node: Ballerina.ArrayType,
    parent?: Ballerina.STNode
  ): void;

  beginVisitAssignmentStatement?(
    node: Ballerina.AssignmentStatement,
    parent?: Ballerina.STNode
  ): void;
  endVisitAssignmentStatement?(
    node: Ballerina.AssignmentStatement,
    parent?: Ballerina.STNode
  ): void;

  beginVisitAsteriskToken?(
    node: Ballerina.AsteriskToken,
    parent?: Ballerina.STNode
  ): void;
  endVisitAsteriskToken?(
    node: Ballerina.AsteriskToken,
    parent?: Ballerina.STNode
  ): void;

  beginVisitAtToken?(node: Ballerina.AtToken, parent?: Ballerina.STNode): void;
  endVisitAtToken?(node: Ballerina.AtToken, parent?: Ballerina.STNode): void;

  beginVisitBinaryExpression?(
    node: Ballerina.BinaryExpression,
    parent?: Ballerina.STNode
  ): void;
  endVisitBinaryExpression?(
    node: Ballerina.BinaryExpression,
    parent?: Ballerina.STNode
  ): void;

  beginVisitBlockStatement?(
    node: Ballerina.BlockStatement,
    parent?: Ballerina.STNode
  ): void;
  endVisitBlockStatement?(
    node: Ballerina.BlockStatement,
    parent?: Ballerina.STNode
  ): void;

  beginVisitBracedExpression?(
    node: Ballerina.BracedExpression,
    parent?: Ballerina.STNode
  ): void;
  endVisitBracedExpression?(
    node: Ballerina.BracedExpression,
    parent?: Ballerina.STNode
  ): void;

  beginVisitCallStatement?(
    node: Ballerina.CallStatement,
    parent?: Ballerina.STNode
  ): void;
  endVisitCallStatement?(
    node: Ballerina.CallStatement,
    parent?: Ballerina.STNode
  ): void;

  beginVisitCloseBracePipeToken?(
    node: Ballerina.CloseBracePipeToken,
    parent?: Ballerina.STNode
  ): void;
  endVisitCloseBracePipeToken?(
    node: Ballerina.CloseBracePipeToken,
    parent?: Ballerina.STNode
  ): void;

  beginVisitCloseBraceToken?(
    node: Ballerina.CloseBraceToken,
    parent?: Ballerina.STNode
  ): void;
  endVisitCloseBraceToken?(
    node: Ballerina.CloseBraceToken,
    parent?: Ballerina.STNode
  ): void;

  beginVisitCloseBracketToken?(
    node: Ballerina.CloseBracketToken,
    parent?: Ballerina.STNode
  ): void;
  endVisitCloseBracketToken?(
    node: Ballerina.CloseBracketToken,
    parent?: Ballerina.STNode
  ): void;

  beginVisitCloseParenToken?(
    node: Ballerina.CloseParenToken,
    parent?: Ballerina.STNode
  ): void;
  endVisitCloseParenToken?(
    node: Ballerina.CloseParenToken,
    parent?: Ballerina.STNode
  ): void;

  beginVisitColonToken?(
    node: Ballerina.ColonToken,
    parent?: Ballerina.STNode
  ): void;
  endVisitColonToken?(
    node: Ballerina.ColonToken,
    parent?: Ballerina.STNode
  ): void;

  beginVisitCommaToken?(
    node: Ballerina.CommaToken,
    parent?: Ballerina.STNode
  ): void;
  endVisitCommaToken?(
    node: Ballerina.CommaToken,
    parent?: Ballerina.STNode
  ): void;

  beginVisitCompoundAssignmentStatement?(
    node: Ballerina.CompoundAssignmentStatement,
    parent?: Ballerina.STNode
  ): void;
  endVisitCompoundAssignmentStatement?(
    node: Ballerina.CompoundAssignmentStatement,
    parent?: Ballerina.STNode
  ): void;

  beginVisitDecimalIntegerLiteral?(
    node: Ballerina.DecimalIntegerLiteral,
    parent?: Ballerina.STNode
  ): void;
  endVisitDecimalIntegerLiteral?(
    node: Ballerina.DecimalIntegerLiteral,
    parent?: Ballerina.STNode
  ): void;

  beginVisitDotToken?(
    node: Ballerina.DotToken,
    parent?: Ballerina.STNode
  ): void;
  endVisitDotToken?(node: Ballerina.DotToken, parent?: Ballerina.STNode): void;

  beginVisitEllipsisToken?(
    node: Ballerina.EllipsisToken,
    parent?: Ballerina.STNode
  ): void;
  endVisitEllipsisToken?(
    node: Ballerina.EllipsisToken,
    parent?: Ballerina.STNode
  ): void;

  beginVisitElseBlock?(
    node: Ballerina.ElseBlock,
    parent?: Ballerina.STNode
  ): void;
  endVisitElseBlock?(
    node: Ballerina.ElseBlock,
    parent?: Ballerina.STNode
  ): void;

  beginVisitElseKeyword?(
    node: Ballerina.ElseKeyword,
    parent?: Ballerina.STNode
  ): void;
  endVisitElseKeyword?(
    node: Ballerina.ElseKeyword,
    parent?: Ballerina.STNode
  ): void;

  beginVisitEofToken?(
    node: Ballerina.EofToken,
    parent?: Ballerina.STNode
  ): void;
  endVisitEofToken?(node: Ballerina.EofToken, parent?: Ballerina.STNode): void;

  beginVisitEqualToken?(
    node: Ballerina.EqualToken,
    parent?: Ballerina.STNode
  ): void;
  endVisitEqualToken?(
    node: Ballerina.EqualToken,
    parent?: Ballerina.STNode
  ): void;

  beginVisitExpressionListItem?(
    node: Ballerina.ExpressionListItem,
    parent?: Ballerina.STNode
  ): void;
  endVisitExpressionListItem?(
    node: Ballerina.ExpressionListItem,
    parent?: Ballerina.STNode
  ): void;

  beginVisitExternalFunctionBody?(
    node: Ballerina.ExternalFunctionBody,
    parent?: Ballerina.STNode
  ): void;
  endVisitExternalFunctionBody?(
    node: Ballerina.ExternalFunctionBody,
    parent?: Ballerina.STNode
  ): void;

  beginVisitExternalKeyword?(
    node: Ballerina.ExternalKeyword,
    parent?: Ballerina.STNode
  ): void;
  endVisitExternalKeyword?(
    node: Ballerina.ExternalKeyword,
    parent?: Ballerina.STNode
  ): void;

  beginVisitFieldAccess?(
    node: Ballerina.FieldAccess,
    parent?: Ballerina.STNode
  ): void;
  endVisitFieldAccess?(
    node: Ballerina.FieldAccess,
    parent?: Ballerina.STNode
  ): void;

  beginVisitFunctionBodyBlock?(
    node: Ballerina.FunctionBodyBlock,
    parent?: Ballerina.STNode
  ): void;
  endVisitFunctionBodyBlock?(
    node: Ballerina.FunctionBodyBlock,
    parent?: Ballerina.STNode
  ): void;

  beginVisitFunctionCall?(
    node: Ballerina.FunctionCall,
    parent?: Ballerina.STNode
  ): void;
  endVisitFunctionCall?(
    node: Ballerina.FunctionCall,
    parent?: Ballerina.STNode
  ): void;

  beginVisitFunctionDefinition?(
    node: Ballerina.FunctionDefinition,
    parent?: Ballerina.STNode
  ): void;
  endVisitFunctionDefinition?(
    node: Ballerina.FunctionDefinition,
    parent?: Ballerina.STNode
  ): void;

  beginVisitFunctionKeyword?(
    node: Ballerina.FunctionKeyword,
    parent?: Ballerina.STNode
  ): void;
  endVisitFunctionKeyword?(
    node: Ballerina.FunctionKeyword,
    parent?: Ballerina.STNode
  ): void;

  beginVisitIdentifierToken?(
    node: Ballerina.IdentifierToken,
    parent?: Ballerina.STNode
  ): void;
  endVisitIdentifierToken?(
    node: Ballerina.IdentifierToken,
    parent?: Ballerina.STNode
  ): void;

  beginVisitIfElseStatement?(
    node: Ballerina.IfElseStatement,
    parent?: Ballerina.STNode
  ): void;
  endVisitIfElseStatement?(
    node: Ballerina.IfElseStatement,
    parent?: Ballerina.STNode
  ): void;

  beginVisitIfKeyword?(
    node: Ballerina.IfKeyword,
    parent?: Ballerina.STNode
  ): void;
  endVisitIfKeyword?(
    node: Ballerina.IfKeyword,
    parent?: Ballerina.STNode
  ): void;

  beginVisitImportDeclaration?(
    node: Ballerina.ImportDeclaration,
    parent?: Ballerina.STNode
  ): void;
  endVisitImportDeclaration?(
    node: Ballerina.ImportDeclaration,
    parent?: Ballerina.STNode
  ): void;

  beginVisitImportKeyword?(
    node: Ballerina.ImportKeyword,
    parent?: Ballerina.STNode
  ): void;
  endVisitImportKeyword?(
    node: Ballerina.ImportKeyword,
    parent?: Ballerina.STNode
  ): void;

  beginVisitImportOrgName?(
    node: Ballerina.ImportOrgName,
    parent?: Ballerina.STNode
  ): void;
  endVisitImportOrgName?(
    node: Ballerina.ImportOrgName,
    parent?: Ballerina.STNode
  ): void;

  beginVisitInvalid?(node: Ballerina.Invalid, parent?: Ballerina.STNode): void;
  endVisitInvalid?(node: Ballerina.Invalid, parent?: Ballerina.STNode): void;

  beginVisitIsKeyword?(
    node: Ballerina.IsKeyword,
    parent?: Ballerina.STNode
  ): void;
  endVisitIsKeyword?(
    node: Ballerina.IsKeyword,
    parent?: Ballerina.STNode
  ): void;

  beginVisitListenerDeclaration?(
    node: Ballerina.ListenerDeclaration,
    parent?: Ballerina.STNode
  ): void;
  endVisitListenerDeclaration?(
    node: Ballerina.ListenerDeclaration,
    parent?: Ballerina.STNode
  ): void;

  beginVisitListenerKeyword?(
    node: Ballerina.ListenerKeyword,
    parent?: Ballerina.STNode
  ): void;
  endVisitListenerKeyword?(
    node: Ballerina.ListenerKeyword,
    parent?: Ballerina.STNode
  ): void;

  beginVisitLocalVarDecl?(
    node: Ballerina.LocalVarDecl,
    parent?: Ballerina.STNode
  ): void;
  endVisitLocalVarDecl?(
    node: Ballerina.LocalVarDecl,
    parent?: Ballerina.STNode
  ): void;

  beginVisitLtToken?(node: Ballerina.LtToken, parent?: Ballerina.STNode): void;
  endVisitLtToken?(node: Ballerina.LtToken, parent?: Ballerina.STNode): void;

  beginVisitMappingConstructor?(
    node: Ballerina.MappingConstructor,
    parent?: Ballerina.STNode
  ): void;
  endVisitMappingConstructor?(
    node: Ballerina.MappingConstructor,
    parent?: Ballerina.STNode
  ): void;

  beginVisitMemberAccess?(
    node: Ballerina.MemberAccess,
    parent?: Ballerina.STNode
  ): void;
  endVisitMemberAccess?(
    node: Ballerina.MemberAccess,
    parent?: Ballerina.STNode
  ): void;

  beginVisitMetadata?(
    node: Ballerina.Metadata,
    parent?: Ballerina.STNode
  ): void;
  endVisitMetadata?(node: Ballerina.Metadata, parent?: Ballerina.STNode): void;

  beginVisitMethodCall?(
    node: Ballerina.MethodCall,
    parent?: Ballerina.STNode
  ): void;
  endVisitMethodCall?(
    node: Ballerina.MethodCall,
    parent?: Ballerina.STNode
  ): void;

  beginVisitModuleVarDecl?(
    node: Ballerina.ModuleVarDecl,
    parent?: Ballerina.STNode
  ): void;
  endVisitModuleVarDecl?(
    node: Ballerina.ModuleVarDecl,
    parent?: Ballerina.STNode
  ): void;

  beginVisitNamedArg?(
    node: Ballerina.NamedArg,
    parent?: Ballerina.STNode
  ): void;
  endVisitNamedArg?(node: Ballerina.NamedArg, parent?: Ballerina.STNode): void;

  beginVisitNilType?(node: Ballerina.NilType, parent?: Ballerina.STNode): void;
  endVisitNilType?(node: Ballerina.NilType, parent?: Ballerina.STNode): void;

  beginVisitObjectField?(
    node: Ballerina.ObjectField,
    parent?: Ballerina.STNode
  ): void;
  endVisitObjectField?(
    node: Ballerina.ObjectField,
    parent?: Ballerina.STNode
  ): void;

  beginVisitObjectKeyword?(
    node: Ballerina.ObjectKeyword,
    parent?: Ballerina.STNode
  ): void;
  endVisitObjectKeyword?(
    node: Ballerina.ObjectKeyword,
    parent?: Ballerina.STNode
  ): void;

  beginVisitObjectTypeDescriptor?(
    node: Ballerina.ObjectTypeDescriptor,
    parent?: Ballerina.STNode
  ): void;
  endVisitObjectTypeDescriptor?(
    node: Ballerina.ObjectTypeDescriptor,
    parent?: Ballerina.STNode
  ): void;

  beginVisitOnKeyword?(
    node: Ballerina.OnKeyword,
    parent?: Ballerina.STNode
  ): void;
  endVisitOnKeyword?(
    node: Ballerina.OnKeyword,
    parent?: Ballerina.STNode
  ): void;

  beginVisitOpenBracePipeToken?(
    node: Ballerina.OpenBracePipeToken,
    parent?: Ballerina.STNode
  ): void;
  endVisitOpenBracePipeToken?(
    node: Ballerina.OpenBracePipeToken,
    parent?: Ballerina.STNode
  ): void;

  beginVisitOpenBraceToken?(
    node: Ballerina.OpenBraceToken,
    parent?: Ballerina.STNode
  ): void;
  endVisitOpenBraceToken?(
    node: Ballerina.OpenBraceToken,
    parent?: Ballerina.STNode
  ): void;

  beginVisitOpenBracketToken?(
    node: Ballerina.OpenBracketToken,
    parent?: Ballerina.STNode
  ): void;
  endVisitOpenBracketToken?(
    node: Ballerina.OpenBracketToken,
    parent?: Ballerina.STNode
  ): void;

  beginVisitOpenParenToken?(
    node: Ballerina.OpenParenToken,
    parent?: Ballerina.STNode
  ): void;
  endVisitOpenParenToken?(
    node: Ballerina.OpenParenToken,
    parent?: Ballerina.STNode
  ): void;

  beginVisitPlusToken?(
    node: Ballerina.PlusToken,
    parent?: Ballerina.STNode
  ): void;
  endVisitPlusToken?(
    node: Ballerina.PlusToken,
    parent?: Ballerina.STNode
  ): void;

  beginVisitPositionalArg?(
    node: Ballerina.PositionalArg,
    parent?: Ballerina.STNode
  ): void;
  endVisitPositionalArg?(
    node: Ballerina.PositionalArg,
    parent?: Ballerina.STNode
  ): void;

  beginVisitPublicKeyword?(
    node: Ballerina.PublicKeyword,
    parent?: Ballerina.STNode
  ): void;
  endVisitPublicKeyword?(
    node: Ballerina.PublicKeyword,
    parent?: Ballerina.STNode
  ): void;

  beginVisitQualifiedIdentifier?(
    node: Ballerina.QualifiedIdentifier,
    parent?: Ballerina.STNode
  ): void;
  endVisitQualifiedIdentifier?(
    node: Ballerina.QualifiedIdentifier,
    parent?: Ballerina.STNode
  ): void;

  beginVisitRecordField?(
    node: Ballerina.RecordField,
    parent?: Ballerina.STNode
  ): void;
  endVisitRecordField?(
    node: Ballerina.RecordField,
    parent?: Ballerina.STNode
  ): void;

  beginVisitRecordKeyword?(
    node: Ballerina.RecordKeyword,
    parent?: Ballerina.STNode
  ): void;
  endVisitRecordKeyword?(
    node: Ballerina.RecordKeyword,
    parent?: Ballerina.STNode
  ): void;

  beginVisitRecordTypeDescriptor?(
    node: Ballerina.RecordTypeDescriptor,
    parent?: Ballerina.STNode
  ): void;
  endVisitRecordTypeDescriptor?(
    node: Ballerina.RecordTypeDescriptor,
    parent?: Ballerina.STNode
  ): void;

  beginVisitRemoteMethodCallAction?(
    node: Ballerina.RemoteMethodCallAction,
    parent?: Ballerina.STNode
  ): void;
  endVisitRemoteMethodCallAction?(
    node: Ballerina.RemoteMethodCallAction,
    parent?: Ballerina.STNode
  ): void;

  beginVisitRequiredParam?(
    node: Ballerina.RequiredParam,
    parent?: Ballerina.STNode
  ): void;
  endVisitRequiredParam?(
    node: Ballerina.RequiredParam,
    parent?: Ballerina.STNode
  ): void;

  beginVisitResourceKeyword?(
    node: Ballerina.ResourceKeyword,
    parent?: Ballerina.STNode
  ): void;
  endVisitResourceKeyword?(
    node: Ballerina.ResourceKeyword,
    parent?: Ballerina.STNode
  ): void;

  beginVisitRestParam?(
    node: Ballerina.RestParam,
    parent?: Ballerina.STNode
  ): void;
  endVisitRestParam?(
    node: Ballerina.RestParam,
    parent?: Ballerina.STNode
  ): void;

  beginVisitReturnKeyword?(
    node: Ballerina.ReturnKeyword,
    parent?: Ballerina.STNode
  ): void;
  endVisitReturnKeyword?(
    node: Ballerina.ReturnKeyword,
    parent?: Ballerina.STNode
  ): void;

  beginVisitReturnStatement?(
    node: Ballerina.ReturnStatement,
    parent?: Ballerina.STNode
  ): void;
  endVisitReturnStatement?(
    node: Ballerina.ReturnStatement,
    parent?: Ballerina.STNode
  ): void;

  beginVisitReturnTypeDescriptor?(
    node: Ballerina.ReturnTypeDescriptor,
    parent?: Ballerina.STNode
  ): void;
  endVisitReturnTypeDescriptor?(
    node: Ballerina.ReturnTypeDescriptor,
    parent?: Ballerina.STNode
  ): void;

  beginVisitReturnsKeyword?(
    node: Ballerina.ReturnsKeyword,
    parent?: Ballerina.STNode
  ): void;
  endVisitReturnsKeyword?(
    node: Ballerina.ReturnsKeyword,
    parent?: Ballerina.STNode
  ): void;

  beginVisitRightArrowToken?(
    node: Ballerina.RightArrowToken,
    parent?: Ballerina.STNode
  ): void;
  endVisitRightArrowToken?(
    node: Ballerina.RightArrowToken,
    parent?: Ballerina.STNode
  ): void;

  beginVisitSemicolonToken?(
    node: Ballerina.SemicolonToken,
    parent?: Ballerina.STNode
  ): void;
  endVisitSemicolonToken?(
    node: Ballerina.SemicolonToken,
    parent?: Ballerina.STNode
  ): void;

  beginVisitServiceBody?(
    node: Ballerina.ServiceBody,
    parent?: Ballerina.STNode
  ): void;
  endVisitServiceBody?(
    node: Ballerina.ServiceBody,
    parent?: Ballerina.STNode
  ): void;

  beginVisitServiceDeclaration?(
    node: Ballerina.ServiceDeclaration,
    parent?: Ballerina.STNode
  ): void;
  endVisitServiceDeclaration?(
    node: Ballerina.ServiceDeclaration,
    parent?: Ballerina.STNode
  ): void;

  beginVisitServiceKeyword?(
    node: Ballerina.ServiceKeyword,
    parent?: Ballerina.STNode
  ): void;
  endVisitServiceKeyword?(
    node: Ballerina.ServiceKeyword,
    parent?: Ballerina.STNode
  ): void;

  beginVisitSimpleType?(
    node: Ballerina.SimpleType,
    parent?: Ballerina.STNode
  ): void;
  endVisitSimpleType?(
    node: Ballerina.SimpleType,
    parent?: Ballerina.STNode
  ): void;

  beginVisitSlashToken?(
    node: Ballerina.SlashToken,
    parent?: Ballerina.STNode
  ): void;
  endVisitSlashToken?(
    node: Ballerina.SlashToken,
    parent?: Ballerina.STNode
  ): void;

  beginVisitSpecificField?(
    node: Ballerina.SpecificField,
    parent?: Ballerina.STNode
  ): void;
  endVisitSpecificField?(
    node: Ballerina.SpecificField,
    parent?: Ballerina.STNode
  ): void;

  beginVisitStringLiteral?(
    node: Ballerina.StringLiteral,
    parent?: Ballerina.STNode
  ): void;
  endVisitStringLiteral?(
    node: Ballerina.StringLiteral,
    parent?: Ballerina.STNode
  ): void;

  beginVisitSyntaxTree?(
    node: Ballerina.SyntaxTree,
    parent?: Ballerina.STNode
  ): void;
  endVisitSyntaxTree?(
    node: Ballerina.SyntaxTree,
    parent?: Ballerina.STNode
  ): void;

  beginVisitTypeDefinition?(
    node: Ballerina.TypeDefinition,
    parent?: Ballerina.STNode
  ): void;
  endVisitTypeDefinition?(
    node: Ballerina.TypeDefinition,
    parent?: Ballerina.STNode
  ): void;

  beginVisitTypeKeyword?(
    node: Ballerina.TypeKeyword,
    parent?: Ballerina.STNode
  ): void;
  endVisitTypeKeyword?(
    node: Ballerina.TypeKeyword,
    parent?: Ballerina.STNode
  ): void;

  beginVisitTypeTestExpression?(
    node: Ballerina.TypeTestExpression,
    parent?: Ballerina.STNode
  ): void;
  endVisitTypeTestExpression?(
    node: Ballerina.TypeTestExpression,
    parent?: Ballerina.STNode
  ): void;

  beginVisitVarKeyword?(
    node: Ballerina.VarKeyword,
    parent?: Ballerina.STNode
  ): void;
  endVisitVarKeyword?(
    node: Ballerina.VarKeyword,
    parent?: Ballerina.STNode
  ): void;
}
