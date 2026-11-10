# Method GetExpression
<div align="right"><a href="/lib/VM.Operations.Post.Interfaces.IOperationsDynamicAnalysisResultViewModel.GetExpression.md" download="VM.Operations.Post.Interfaces.IOperationsDynamicAnalysisResultViewModel.GetExpression.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Operations_Post_Interfaces_IOperationsDynamicAnalysisResultViewModel_GetExpression_System_String_"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsDynamicAnalysisResultViewModel_GetExpression_System_String_"></a> GetExpression\(string\)

Gets a Python expression by its name.

For a complete operations, see [Operation API Example - Expression](../document/operation-api/example/example_animation_for_operation_api.md#expression).

```csharp
IOperationsPythonExpressionViewModel GetExpression(string name)
```

### Parameters

`name` string

Full name from [`FullName`](VM.Operations.Post.Interfaces.IOperationsPythonExpressionViewModel.FullName.md) for an expression in the dynamic result.

### Returns

 [IOperationsPythonExpressionViewModel](VM.Operations.Post.Interfaces.IOperationsPythonExpressionViewModel.md)

Matching [`IOperationsPythonExpressionViewModel`](VM.Operations.Post.Interfaces.IOperationsPythonExpressionViewModel.md), or `null` when no matching expression exists.

### Examples

```python
# Get the dynamic analysis result.
# RESULT_FILE_PATH : .dfr result file path (e.g., D:\PostprocessorAPI\Results\Tutorial_ModalFlex.dfr)
# The document opened from the result file.
document = application_handler.GetDocument(RESULT_FILE_PATH)
# The type of the analysis result to retrieve.
analysis_result_type = AnalysisResultType.Dynamics
# The dynamic analysis result of the document.
dynamic_analysis = document.GetAnalysisResultViewModel(analysis_result_type)

# Create an expression that produces one value for each evaluation time.
# The name of the new expression.
expression_name = "Expression"
# The expression created in the dynamic analysis result.
expression = dynamic_analysis.CreateExpression(expression_name)
expression.Expression = 'DM("Crank/CM")'

# Retrieve the expression and add its value as curve data.
expression = dynamic_analysis.GetExpression(expression_name)
# The name of the page.
page_name = "Page"
# The page with the specified name.
page = application_handler.GetPage(page_name)
# The name of the new chart view.
chart_name = "ExpressionChart"
# The chart view created on the page.
chart = page.CreateChart(chart_name)
# The characteristic/component paths of the curves to add, in "Characteristic/Component" format.
curve_paths = List[str]()
# The characteristic/component path of the curve to add, in "Characteristic/Component" format.
curve_path = "Expression/Value"
curve_paths.Add(curve_path)
# The parameters that specify the target and curve paths of the plot.
parameters = PlotParameters()
parameters.Target = expression.FullName
parameters.Paths = curve_paths
# RESULT_FILE_PATH : .dfr result file path (e.g., D:\PostprocessorAPI\Results\Tutorial_ModalFlex.dfr)
chart.AddCurves(RESULT_FILE_PATH, parameters)
```

### Remarks

The operation only looks up an existing expression and does not create one when `name` is not found.
