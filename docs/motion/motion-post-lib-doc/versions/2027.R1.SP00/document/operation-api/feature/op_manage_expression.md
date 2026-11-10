# Manage Expression
<div align="right"><a href="/document/operation-api/feature/op_manage_expression.md" download="op_manage_expression.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

This feature covers creating, finding, and removing expressions with [`IOperationsDynamicAnalysisResultViewModel`](../../../lib/VM.Operations.Post.Interfaces.IOperationsDynamicAnalysisResultViewModel.md) for a dynamic analysis result.

## Creating
Create an expression with [`CreateExpression(string)`](../../../lib/VM.Operations.Post.Interfaces.IOperationsDynamicAnalysisResultViewModel.CreateExpression.md). Set its formula with [`Expression`](../../../lib/VM.Operations.Post.Interfaces.IOperationsPythonExpressionViewModel.Expression.md).

Use the expression as curve data by setting [`Target`](../../../lib/VM.Models.OutputReader.PlotParameters.Target.md) of [`PlotParameters`](../../../lib/VM.Models.OutputReader.PlotParameters.md) to its name in [`AddCurves(string, PlotParameters)`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.AddCurves.md), see [Manage a Curve - Creating](op_manage_curve.md#creating).

## Getting
Get an expression by name with [`GetExpression(string)`](../../../lib/VM.Operations.Post.Interfaces.IOperationsDynamicAnalysisResultViewModel.GetExpression.md).

## Removing
Remove an expression by name with [`RemoveExpression(string)`](../../../lib/VM.Operations.Post.Interfaces.IOperationsDynamicAnalysisResultViewModel.RemoveExpression.md). The named expression is removed from the dynamic analysis result.
