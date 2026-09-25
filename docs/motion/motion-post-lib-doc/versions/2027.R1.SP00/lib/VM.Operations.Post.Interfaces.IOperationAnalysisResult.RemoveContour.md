# Method RemoveContour
<a id="VM_Operations_Post_Interfaces_IOperationAnalysisResult_RemoveContour_System_String_"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationAnalysisResult_RemoveContour_System_String_"></a> RemoveContour\(string\)

Removes a contour by its [`FullName`](VM.Operations.Post.Interfaces.IOperationsContourViewModel.FullName.md).

```csharp
void RemoveContour(string name)
```

### Parameters

`name` string

Full name of a contour previously created with [CreateContour\(IList<string\>, ContourMappingType, string, string, string\)](VM.Operations.Post.Interfaces.IOperationAnalysisResult.CreateContour.md).

### Remarks

If `name` does not identify an existing contour, this method has no effect.
