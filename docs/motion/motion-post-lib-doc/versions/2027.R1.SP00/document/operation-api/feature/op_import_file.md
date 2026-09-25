# Import File
With the Import File feature, [`ApplicationHandler`](../../../lib/VM.API.Post.Operations.ApplicationHandler.md) imports a result file containing simulation analysis results into the Postprocessor. Values from a numeric file can also be added as curve data to existing [`IOperationsChartViewModel`](../../../lib/VM.Operations.Post.Interfaces.IOperationsChartViewModel.md).

## Analysis Result
Use [`ApplicationHandler`](../../../lib/VM.API.Post.Operations.ApplicationHandler.md) to import a result file. For more information, see [Operation API Getting Started](../getting-started/getting_started_operation_api_using_py.md#api-entry-point).

A `.dfr` result file contains simulation analysis results. Use [`AddDocument(IList<string>)`](../../../lib/VM.API.Post.Operations.ApplicationHandler.AddDocument.md) to import one or more result files.

Later, call [`GetDocument(string)`](../../../lib/VM.API.Post.Operations.ApplicationHandler.GetDocument.md) with the same file path to retrieve the open [`IOperationDocument`](../../../lib/VM.ViewModels.Post.Interfaces.IOperationDocument.md).
Retrieve [`IAnalysisResultViewModel`](../../../lib/VM.ViewModels.Post.IAnalysisResultViewModel.md) from the returned `IOperationDocument` with [`GetAnalysisResultViewModel(AnalysisResultType)`](../../../lib/VM.ViewModels.Post.Interfaces.IOperationDocument.GetAnalysisResultViewModel.md) or [`GetAnalysisResultViewModel(Guid)`](../../../lib/VM.ViewModels.Post.Interfaces.IOperationDocument.GetAnalysisResultViewModel.md).

For a dynamic analysis result, select `Dynamics` from [`AnalysisResultType`](../../../lib/VM.Models.AnalysisResultType.md) to use [`IOperationsDynamicAnalysisResultViewModel`](../../../lib/VM.Operations.Post.Interfaces.IOperationsDynamicAnalysisResultViewModel.md). For an eigenvalue analysis result, select `Eigenvalue` to use [`IOperationsEigenValueAnalysisResultViewModel`](../../../lib/VM.Operations.Post.Interfaces.IOperationsEigenValueAnalysisResultViewModel.md).

Use the returned `IAnalysisResultViewModel` to create an animation or chart view, see [Manage View](op_manage_view.md).

When the document is no longer needed, close imported `IOperationDocument` with [`CloseDocument(string)`](../../../lib/VM.API.Post.Operations.ApplicationHandler.CloseDocument.md).

## Numeric
Before importing a numeric file, create `IOperationsChartViewModel` that will contain the curve data, see [Manage View](op_manage_view.md).

Use [`ImportNumeric(string, List<INumericParameter>)`](../../../lib/VM.Operations.Post.Interfaces.IOperationsChartViewModel.ImportNumeric.md) to import a numeric file. The method adds values from the input file to `IOperationsChartViewModel` as curve data.

The input file can be in any of the following formats:

- `*.txt`
- `*.csv`
- `*.out`
- `*.rsp`

After the import, the resulting curve data is available for:

- Get and manage the imported curve data, see [Manage a Curve](op_manage_curve.md).
- Transform the imported curve data, see [Postprocess a Curve](op_postprocess_curve.md).
- Configure the imported curve data, see [Curve Properties](op_curve_properties.md).