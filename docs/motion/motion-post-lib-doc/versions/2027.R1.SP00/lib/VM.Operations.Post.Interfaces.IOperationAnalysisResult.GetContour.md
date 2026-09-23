# Method GetContour
<a id="VM_Operations_Post_Interfaces_IOperationAnalysisResult_GetContour_System_String_"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationAnalysisResult_GetContour_System_String_"></a> GetContour\(string\)

Gets a contour by its [`FullName`](VM.Operations.Post.Interfaces.IOperationsContourViewModel.FullName.md).

```csharp
IOperationsContourViewModel GetContour(string name)
```

### Parameters

`name` string

Full name of a contour previously created with [CreateContour\(IList<string\>, ContourMappingType, string, string, string\)](VM.Operations.Post.Interfaces.IOperationAnalysisResult.CreateContour.md).

### Returns

 [IOperationsContourViewModel](VM.Operations.Post.Interfaces.IOperationsContourViewModel.md)

Matching [`IOperationsContourViewModel`](VM.Operations.Post.Interfaces.IOperationsContourViewModel.md), or `null` if no contour with that name exists.
