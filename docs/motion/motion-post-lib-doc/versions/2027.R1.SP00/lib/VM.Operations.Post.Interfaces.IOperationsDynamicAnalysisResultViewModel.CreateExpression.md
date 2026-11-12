# Method CreateExpression
<div align="right"><a href="/lib/VM.Operations.Post.Interfaces.IOperationsDynamicAnalysisResultViewModel.CreateExpression.md" download="VM.Operations.Post.Interfaces.IOperationsDynamicAnalysisResultViewModel.CreateExpression.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Operations_Post_Interfaces_IOperationsDynamicAnalysisResultViewModel_CreateExpression_System_String_"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsDynamicAnalysisResultViewModel_CreateExpression_System_String_"></a> CreateExpression\(string\)

Creates a named Python expression in the dynamic result.

For a complete operations, see [Operation API Example - Expression](../document/operation-api/example/example_animation_for_operation_api.md#expression).

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

```python
# Get the dynamic analysis result.
# RESULT_FILE_PATH : .dfr result file path (e.g., D:\PostprocessorAPI\Results\Tutorial_ModalFlex.dfr)
# The document opened from the result file.
document = application_handler.GetDocument(RESULT_FILE_PATH)
# The type of the analysis result to retrieve.
analysis_result_type = AnalysisResultType.Dynamics
# The dynamic analysis result of the document.
dynamic_analysis = document.GetAnalysisResultViewModel(analysis_result_type)

# Create a named expression.
# The name of the new expression.
expression_name = "Expression"
# The expression created in the dynamic analysis result.
expression = dynamic_analysis.CreateExpression(expression_name)
```

### Remarks

The new expression is added with an empty formula. Set [`Expression`](VM.Operations.Post.Interfaces.IOperationsPythonExpressionViewModel.Expression.md) before evaluating or using it as curve data.
