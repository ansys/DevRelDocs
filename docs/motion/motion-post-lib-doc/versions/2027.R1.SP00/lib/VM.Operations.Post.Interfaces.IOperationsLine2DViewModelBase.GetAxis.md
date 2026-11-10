# Method GetAxis
<div align="right"><a href="/lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.GetAxis.md" download="VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.GetAxis.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase_GetAxis_System_String_"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase_GetAxis_System_String_"></a> GetAxis\(string\)

Retrieves an axis by its name.

```csharp
IOperationsAxisViewModelBase GetAxis(string name)
```

### Parameters

`name` string

The name of the axis to be retrieved.

### Returns

 [IOperationsAxisViewModelBase](VM.Operations.Post.Interfaces.IOperationsAxisViewModelBase.md)

Matching [`IOperationsAxisViewModelBase`](VM.Operations.Post.Interfaces.IOperationsAxisViewModelBase.md), or `null` if no such axis exists.

### Remarks

This method searches for an axis with the given name and returns the matching axis.
If no axis with the specified name is found, the method returns `null`.
