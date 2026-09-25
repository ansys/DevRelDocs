# Manage Expression
This feature covers creating, finding, and removing expressions with [`IOperationsDynamicAnalysisResultViewModel`](../../../lib/VM.Operations.Post.Interfaces.IOperationsDynamicAnalysisResultViewModel.md) for a dynamic analysis result.

## Creating
Create an expression with [`CreateExpression(string)`](../../../lib/VM.Operations.Post.Interfaces.IOperationsDynamicAnalysisResultViewModel.CreateExpression.md). Set its formula with [`Expression`](../../../lib/VM.Operations.Post.Interfaces.IOperationsPythonExpressionViewModel.Expression.md).

Use the expression as curve data by setting [`Target`](../../../lib/VM.Models.OutputReader.PlotParameters.Target.md) of [`PlotParameters`](../../../lib/VM.Models.OutputReader.PlotParameters.md) to its name in [`AddCurves(string, PlotParameters)`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.AddCurves.md), see [Manage a Curve - Adding](op_manage_curve.md#adding).

## Getting
Get an expression by name with [`GetExpression(string)`](../../../lib/VM.Operations.Post.Interfaces.IOperationsDynamicAnalysisResultViewModel.GetExpression.md).

## Removing
Remove an expression by name with [`RemoveExpression(string)`](../../../lib/VM.Operations.Post.Interfaces.IOperationsDynamicAnalysisResultViewModel.RemoveExpression.md). The named expression is removed from the dynamic analysis result.