# Method GetExpression
<a id="VM_Operations_Post_Interfaces_IOperationsDynamicAnalysisResultViewModel_GetExpression_System_String_"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsDynamicAnalysisResultViewModel_GetExpression_System_String_"></a> GetExpression\(string\)

Gets a Python expression by its name.

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

For the complete expression workflow, see [Operation API Example - Expression](../document/operation-api/example/example_animation_for_operation_api.md#expression).

```python
# Get the dynamic analysis result.
# RESULT_FILE_PATH : .dfr result file path
document = application_handler.GetDocument(RESULT_FILE_PATH)
analysis_result_type = AnalysisResultType.Dynamics
dynamic_analysis = document.GetAnalysisResultViewModel(analysis_result_type)

# Create an expression that produces one value for each evaluation time.
expression_name = "Expression"
expression = dynamic_analysis.CreateExpression(expression_name)
expression.Expression = 'DM("Crank/CM")'

# Retrieve the expression and add its value as curve data.
expression = dynamic_analysis.GetExpression(expression_name)
page_name = "Page"
page = application_handler.GetPage(page_name)
chart_name = "ExpressionChart"
chart = page.CreateChart(chart_name)
curve_paths = List[str]()
curve_path = "Expression/Value"
curve_paths.Add(curve_path)
parameters = PlotParameters()
parameters.Target = expression.FullName
parameters.Paths = curve_paths
# RESULT_FILE_PATH : .dfr result file path
curves = chart.AddCurves(RESULT_FILE_PATH, parameters)
```

### Remarks

The operation only looks up an existing expression and does not create one when `name` is not found.
