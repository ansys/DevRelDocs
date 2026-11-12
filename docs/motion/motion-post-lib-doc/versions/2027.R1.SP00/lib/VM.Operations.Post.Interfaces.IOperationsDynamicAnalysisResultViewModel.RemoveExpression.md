# Method RemoveExpression
<div align="right"><a href="/lib/VM.Operations.Post.Interfaces.IOperationsDynamicAnalysisResultViewModel.RemoveExpression.md" download="VM.Operations.Post.Interfaces.IOperationsDynamicAnalysisResultViewModel.RemoveExpression.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Operations_Post_Interfaces_IOperationsDynamicAnalysisResultViewModel_RemoveExpression_System_String_"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsDynamicAnalysisResultViewModel_RemoveExpression_System_String_"></a> RemoveExpression\(string\)

Removes a Python expression by its name.

For a complete operations, see [Operation API Example - Expression](../document/operation-api/example/example_animation_for_operation_api.md#expression).

```csharp
void RemoveExpression(string name)
```

### Parameters

`name` string

Full name from [`FullName`](VM.Operations.Post.Interfaces.IOperationsPythonExpressionViewModel.FullName.md) for an expression in the dynamic result.

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

# Create and retrieve the expression that will be removed.
# The name of the new expression.
expression_name = "ExpressionToRemove"
# The expression created in the dynamic analysis result.
expression = dynamic_analysis.CreateExpression(expression_name)
expression.Expression = 'DM("Crank/CM")'
expression = dynamic_analysis.GetExpression(expression_name)

# Remove the expression from the dynamic result.
dynamic_analysis.RemoveExpression(expression.FullName)
```

### Remarks

When a matching expression exists, it is removed from the dynamic result.

If no expression with the specified name exists, the dynamic result is unchanged.
