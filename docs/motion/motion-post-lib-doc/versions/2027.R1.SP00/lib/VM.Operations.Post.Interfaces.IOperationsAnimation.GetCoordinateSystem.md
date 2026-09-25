# Method GetCoordinateSystem
<a id="VM_Operations_Post_Interfaces_IOperationsAnimation_GetCoordinateSystem_System_String_"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsAnimation_GetCoordinateSystem_System_String_"></a> GetCoordinateSystem\(string\)

Gets a coordinate system by its [`FullName`](VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.FullName.md).

```csharp
IOperationsCSYSViewModel GetCoordinateSystem(string name)
```

### Parameters

`name` string

Full name from `IOperationsCSYSViewModel.FullName` for a coordinate system returned by [CreateCoordinateSystem\(string, string\)](VM.Operations.Post.Interfaces.IOperationsAnimation.CreateCoordinateSystem.md) or found through another public coordinate-system lookup.

### Returns

 [IOperationsCSYSViewModel](VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.md)

Matching [`IOperationsCSYSViewModel`](VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.md), or `null` if no coordinate system with that name exists.
