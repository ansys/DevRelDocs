# Interface IOperationsDynamicAnalysisResultViewModel
<div align="right"><a href="/lib/VM.Operations.Post.Interfaces.IOperationsDynamicAnalysisResultViewModel.md" download="VM.Operations.Post.Interfaces.IOperationsDynamicAnalysisResultViewModel.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Operations_Post_Interfaces_IOperationsDynamicAnalysisResultViewModel"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

Provides frame, vector-display, and expression operations for a dynamic analysis result through [`IOperationAnalysisResult`](VM.Operations.Post.Interfaces.IOperationAnalysisResult.md).

```csharp
public interface IOperationsDynamicAnalysisResultViewModel : IOperationAnalysisResult
```

## Methods

 [CreateExpression\(string\)](VM.Operations.Post.Interfaces.IOperationsDynamicAnalysisResultViewModel.CreateExpression.md\#VM\_Operations\_Post\_Interfaces\_IOperationsDynamicAnalysisResultViewModel\_CreateExpression\_System\_String\_)

Creates a named Python expression in the dynamic result.

For a complete operations, see [Operation API Example - Expression](../document/operation-api/example/example_animation_for_operation_api.md#expression).

 [CreateVectorDisplay\(string, string\)](VM.Operations.Post.Interfaces.IOperationsDynamicAnalysisResultViewModel.CreateVectorDisplay.md\#VM\_Operations\_Post\_Interfaces\_IOperationsDynamicAnalysisResultViewModel\_CreateVectorDisplay\_System\_String\_System\_String\_)

Creates a vector display for an entity and characteristic in the dynamic result.

For a complete operations, see [Operation API Example - Vector Display](../document/operation-api/example/example_animation_for_operation_api.md#vector-display).

 [GetExpression\(string\)](VM.Operations.Post.Interfaces.IOperationsDynamicAnalysisResultViewModel.GetExpression.md\#VM\_Operations\_Post\_Interfaces\_IOperationsDynamicAnalysisResultViewModel\_GetExpression\_System\_String\_)

Gets a Python expression by its name.

For a complete operations, see [Operation API Example - Expression](../document/operation-api/example/example_animation_for_operation_api.md#expression).

 [GetVectorDisplay\(string\)](VM.Operations.Post.Interfaces.IOperationsDynamicAnalysisResultViewModel.GetVectorDisplay.md\#VM\_Operations\_Post\_Interfaces\_IOperationsDynamicAnalysisResultViewModel\_GetVectorDisplay\_System\_String\_)

Gets a vector display by its full name.

 [GetVectorDisplayCharacteristics\(string\)](VM.Operations.Post.Interfaces.IOperationsDynamicAnalysisResultViewModel.GetVectorDisplayCharacteristics.md\#VM\_Operations\_Post\_Interfaces\_IOperationsDynamicAnalysisResultViewModel\_GetVectorDisplayCharacteristics\_System\_String\_)

Gets vector-display characteristic names supported by an entity in the dynamic result.

 [RemoveExpression\(string\)](VM.Operations.Post.Interfaces.IOperationsDynamicAnalysisResultViewModel.RemoveExpression.md\#VM\_Operations\_Post\_Interfaces\_IOperationsDynamicAnalysisResultViewModel\_RemoveExpression\_System\_String\_)

Removes a Python expression by its name.

For a complete operations, see [Operation API Example - Expression](../document/operation-api/example/example_animation_for_operation_api.md#expression).

 [RemoveVectorDisplay\(string\)](VM.Operations.Post.Interfaces.IOperationsDynamicAnalysisResultViewModel.RemoveVectorDisplay.md\#VM\_Operations\_Post\_Interfaces\_IOperationsDynamicAnalysisResultViewModel\_RemoveVectorDisplay\_System\_String\_)

Removes a vector display by its full name.

 [SetAnimationFrame\(int\)](VM.Operations.Post.Interfaces.IOperationsDynamicAnalysisResultViewModel.SetAnimationFrame.md\#VM\_Operations\_Post\_Interfaces\_IOperationsDynamicAnalysisResultViewModel\_SetAnimationFrame\_System\_Int32\_)

Loads a specified number of frames from the dynamic analysis result.

 [SetAnimationFrame\(IEnumerable<int\>\)](VM.Operations.Post.Interfaces.IOperationsDynamicAnalysisResultViewModel.SetAnimationFrame.md\#VM\_Operations\_Post\_Interfaces\_IOperationsDynamicAnalysisResultViewModel\_SetAnimationFrame\_System\_Collections\_Generic\_IEnumerable\_System\_Int32\_\_)

Loads dynamic animation frames identified by their States.
