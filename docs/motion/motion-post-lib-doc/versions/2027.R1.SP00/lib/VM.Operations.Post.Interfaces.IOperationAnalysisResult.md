# Interface IOperationAnalysisResult
<a id="VM_Operations_Post_Interfaces_IOperationAnalysisResult"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

Provides operations for reading and changing an analysis result used by an animation or chart. Implemented by [`IOperationsDynamicAnalysisResultViewModel`](VM.Operations.Post.Interfaces.IOperationsDynamicAnalysisResultViewModel.md) for a dynamic analysis result and [`IOperationsEigenValueAnalysisResultViewModel`](VM.Operations.Post.Interfaces.IOperationsEigenValueAnalysisResultViewModel.md) for an eigenvalue analysis result.

```csharp
public interface IOperationAnalysisResult
```

## Methods

 [CreateContour\(IList<string\>, ContourMappingType, string, string, string\)](VM.Operations.Post.Interfaces.IOperationAnalysisResult.CreateContour.md\#VM\_Operations\_Post\_Interfaces\_IOperationAnalysisResult\_CreateContour\_System\_Collections\_Generic\_IList\_System\_String\_\_VM\_Models\_ContourMappingType\_System\_String\_System\_String\_System\_String\_)

Creates [`IOperationsContourViewModel`](VM.Operations.Post.Interfaces.IOperationsContourViewModel.md) for one or more entities and adds it to the analysis result.

 [GetContour\(string\)](VM.Operations.Post.Interfaces.IOperationAnalysisResult.GetContour.md\#VM\_Operations\_Post\_Interfaces\_IOperationAnalysisResult\_GetContour\_System\_String\_)

Gets a contour by its [`FullName`](VM.Operations.Post.Interfaces.IOperationsContourViewModel.FullName.md).

 [GetContourCharacteristics\(string, ContourMappingType\)](VM.Operations.Post.Interfaces.IOperationAnalysisResult.GetContourCharacteristics.md\#VM\_Operations\_Post\_Interfaces\_IOperationAnalysisResult\_GetContourCharacteristics\_System\_String\_VM\_Models\_ContourMappingType\_)

Gets contour characteristics supported by an entity and mapping type.

 [GetContourComponents\(string, ContourMappingType, string\)](VM.Operations.Post.Interfaces.IOperationAnalysisResult.GetContourComponents.md\#VM\_Operations\_Post\_Interfaces\_IOperationAnalysisResult\_GetContourComponents\_System\_String\_VM\_Models\_ContourMappingType\_System\_String\_)

Gets contour components supported by an entity, mapping type, and characteristic.

 [GetContourables\(ContourMappingType\)](VM.Operations.Post.Interfaces.IOperationAnalysisResult.GetContourables.md\#VM\_Operations\_Post\_Interfaces\_IOperationAnalysisResult\_GetContourables\_VM\_Models\_ContourMappingType\_)

Gets entity names that support a contour mapping type.

 [GetPlotCharacteristics\(string\)](VM.Operations.Post.Interfaces.IOperationAnalysisResult.GetPlotCharacteristics.md\#VM\_Operations\_Post\_Interfaces\_IOperationAnalysisResult\_GetPlotCharacteristics\_System\_String\_)

Gets curve characteristics supported by an entity for use as curve data.

 [GetPlotComponents\(string, string\)](VM.Operations.Post.Interfaces.IOperationAnalysisResult.GetPlotComponents.md\#VM\_Operations\_Post\_Interfaces\_IOperationAnalysisResult\_GetPlotComponents\_System\_String\_System\_String\_)

Gets curve components supported by an entity and characteristic.

 [GetReferenceTimeArray\(\)](VM.Operations.Post.Interfaces.IOperationAnalysisResult.GetReferenceTimeArray.md\#VM\_Operations\_Post\_Interfaces\_IOperationAnalysisResult\_GetReferenceTimeArray)

Gets the reference times stored in the analysis result.

 [GetStateIDArray\(\)](VM.Operations.Post.Interfaces.IOperationAnalysisResult.GetStateIDArray.md\#VM\_Operations\_Post\_Interfaces\_IOperationAnalysisResult\_GetStateIDArray)

Gets the state IDs stored in the analysis result.

 [MoveToAnimationFrame\(int\)](VM.Operations.Post.Interfaces.IOperationAnalysisResult.MoveToAnimationFrame.md\#VM\_Operations\_Post\_Interfaces\_IOperationAnalysisResult\_MoveToAnimationFrame\_System\_Int32\_)

Moves the currently displayed frame of the analysis result to a loaded animation frame.

 [RemoveContour\(string\)](VM.Operations.Post.Interfaces.IOperationAnalysisResult.RemoveContour.md\#VM\_Operations\_Post\_Interfaces\_IOperationAnalysisResult\_RemoveContour\_System\_String\_)

Removes a contour by its [`FullName`](VM.Operations.Post.Interfaces.IOperationsContourViewModel.FullName.md).
