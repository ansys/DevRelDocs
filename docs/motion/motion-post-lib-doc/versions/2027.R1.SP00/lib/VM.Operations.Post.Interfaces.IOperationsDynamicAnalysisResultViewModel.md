# Interface IOperationsDynamicAnalysisResultViewModel
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

 [CreateVectorDisplay\(string, string\)](VM.Operations.Post.Interfaces.IOperationsDynamicAnalysisResultViewModel.CreateVectorDisplay.md\#VM\_Operations\_Post\_Interfaces\_IOperationsDynamicAnalysisResultViewModel\_CreateVectorDisplay\_System\_String\_System\_String\_)

Creates a vector display for an entity and characteristic in the dynamic result.

 [GetExpression\(string\)](VM.Operations.Post.Interfaces.IOperationsDynamicAnalysisResultViewModel.GetExpression.md\#VM\_Operations\_Post\_Interfaces\_IOperationsDynamicAnalysisResultViewModel\_GetExpression\_System\_String\_)

Gets a Python expression by its name.

 [GetVectorDisplay\(string\)](VM.Operations.Post.Interfaces.IOperationsDynamicAnalysisResultViewModel.GetVectorDisplay.md\#VM\_Operations\_Post\_Interfaces\_IOperationsDynamicAnalysisResultViewModel\_GetVectorDisplay\_System\_String\_)

Gets a vector display by its full name.

 [GetVectorDisplayCharacteristics\(string\)](VM.Operations.Post.Interfaces.IOperationsDynamicAnalysisResultViewModel.GetVectorDisplayCharacteristics.md\#VM\_Operations\_Post\_Interfaces\_IOperationsDynamicAnalysisResultViewModel\_GetVectorDisplayCharacteristics\_System\_String\_)

Gets vector-display characteristic names supported by an entity in the dynamic result.

 [RemoveExpression\(string\)](VM.Operations.Post.Interfaces.IOperationsDynamicAnalysisResultViewModel.RemoveExpression.md\#VM\_Operations\_Post\_Interfaces\_IOperationsDynamicAnalysisResultViewModel\_RemoveExpression\_System\_String\_)

Removes a Python expression by its name.

 [RemoveVectorDisplay\(string\)](VM.Operations.Post.Interfaces.IOperationsDynamicAnalysisResultViewModel.RemoveVectorDisplay.md\#VM\_Operations\_Post\_Interfaces\_IOperationsDynamicAnalysisResultViewModel\_RemoveVectorDisplay\_System\_String\_)

Removes a vector display by its full name.

 [SetAnimationFrame\(int\)](VM.Operations.Post.Interfaces.IOperationsDynamicAnalysisResultViewModel.SetAnimationFrame.md\#VM\_Operations\_Post\_Interfaces\_IOperationsDynamicAnalysisResultViewModel\_SetAnimationFrame\_System\_Int32\_)

Loads a specified number of frames from the dynamic analysis result.

 [SetAnimationFrame\(IEnumerable<int\>\)](VM.Operations.Post.Interfaces.IOperationsDynamicAnalysisResultViewModel.SetAnimationFrame.md\#VM\_Operations\_Post\_Interfaces\_IOperationsDynamicAnalysisResultViewModel\_SetAnimationFrame\_System\_Collections\_Generic\_IEnumerable\_System\_Int32\_\_)

Loads dynamic animation frames identified by their States.
