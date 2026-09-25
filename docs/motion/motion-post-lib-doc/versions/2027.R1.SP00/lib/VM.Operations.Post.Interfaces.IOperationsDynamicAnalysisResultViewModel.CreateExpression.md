# Method CreateExpression
<a id="VM_Operations_Post_Interfaces_IOperationsDynamicAnalysisResultViewModel_CreateExpression_System_String_"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsDynamicAnalysisResultViewModel_CreateExpression_System_String_"></a> CreateExpression\(string\)

Creates a named Python expression in the dynamic result.

```csharp
IOperationsPythonExpressionViewModel CreateExpression(string newName)
```

### Parameters

`newName` string

Name used for the new expression and exposed through [`FullName`](VM.Operations.Post.Interfaces.IOperationsPythonExpressionViewModel.FullName.md).

### Returns

 [IOperationsPythonExpressionViewModel](VM.Operations.Post.Interfaces.IOperationsPythonExpressionViewModel.md)

Created [`IOperationsPythonExpressionViewModel`](VM.Operations.Post.Interfaces.IOperationsPythonExpressionViewModel.md).

### Examples

For the complete expression workflow, see [Operation API Example - Expression](../document/operation-api/example/example_animation_for_operation_api.md#expression).

```python
# Get the dynamic analysis result.
# RESULT_FILE_PATH : .dfr result file path
document = application_handler.GetDocument(RESULT_FILE_PATH)
analysis_result_type = AnalysisResultType.Dynamics
dynamic_analysis = document.GetAnalysisResultViewModel(analysis_result_type)

# Create a named expression.
expression_name = "Expression"
expression = dynamic_analysis.CreateExpression(expression_name)
```

### Remarks

The new expression is added with an empty formula. Set [`Expression`](VM.Operations.Post.Interfaces.IOperationsPythonExpressionViewModel.Expression.md) before evaluating or using it as curve data.
