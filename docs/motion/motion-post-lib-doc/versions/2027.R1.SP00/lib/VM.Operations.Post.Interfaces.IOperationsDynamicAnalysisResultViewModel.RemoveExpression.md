# Method RemoveExpression
<a id="VM_Operations_Post_Interfaces_IOperationsDynamicAnalysisResultViewModel_RemoveExpression_System_String_"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsDynamicAnalysisResultViewModel_RemoveExpression_System_String_"></a> RemoveExpression\(string\)

Removes a Python expression by its name.

```csharp
void RemoveExpression(string name)
```

### Parameters

`name` string

Full name from [`FullName`](VM.Operations.Post.Interfaces.IOperationsPythonExpressionViewModel.FullName.md) for an expression in the dynamic result.

### Examples

For the complete expression workflow, see [Operation API Example - Expression](../document/operation-api/example/example_animation_for_operation_api.md#expression).

```python
# Get the dynamic analysis result.
# RESULT_FILE_PATH : .dfr result file path
document = application_handler.GetDocument(RESULT_FILE_PATH)
analysis_result_type = AnalysisResultType.Dynamics
dynamic_analysis = document.GetAnalysisResultViewModel(analysis_result_type)

# Create and retrieve the expression that will be removed.
expression_name = "ExpressionToRemove"
expression = dynamic_analysis.CreateExpression(expression_name)
expression.Expression = 'DM("Crank/CM")'
expression = dynamic_analysis.GetExpression(expression_name)

# Remove the expression from the dynamic result.
dynamic_analysis.RemoveExpression(expression.FullName)
```

### Remarks

When a matching expression exists, it is removed from the dynamic result.

If no expression with the specified name exists, the dynamic result is unchanged.
