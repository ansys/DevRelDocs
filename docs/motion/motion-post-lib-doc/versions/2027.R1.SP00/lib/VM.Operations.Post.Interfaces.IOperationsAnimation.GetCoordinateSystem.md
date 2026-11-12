# Method GetCoordinateSystem
<div align="right"><a href="/lib/VM.Operations.Post.Interfaces.IOperationsAnimation.GetCoordinateSystem.md" download="VM.Operations.Post.Interfaces.IOperationsAnimation.GetCoordinateSystem.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

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
