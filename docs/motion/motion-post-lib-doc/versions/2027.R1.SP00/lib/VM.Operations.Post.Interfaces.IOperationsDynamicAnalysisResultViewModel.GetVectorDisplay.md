# Method GetVectorDisplay
<div align="right"><a href="/lib/VM.Operations.Post.Interfaces.IOperationsDynamicAnalysisResultViewModel.GetVectorDisplay.md" download="VM.Operations.Post.Interfaces.IOperationsDynamicAnalysisResultViewModel.GetVectorDisplay.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Operations_Post_Interfaces_IOperationsDynamicAnalysisResultViewModel_GetVectorDisplay_System_String_"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsDynamicAnalysisResultViewModel_GetVectorDisplay_System_String_"></a> GetVectorDisplay\(string\)

Gets a vector display by its full name.

```csharp
IOperationsVectorDisplayBaseViewModel GetVectorDisplay(string name)
```

### Parameters

`name` string

Full name from [`FullName`](VM.Operations.Post.Interfaces.IOperationsVectorDisplayBaseViewModel.FullName.md) for a vector display in the dynamic result.

### Returns

 [IOperationsVectorDisplayBaseViewModel](VM.Operations.Post.Interfaces.IOperationsVectorDisplayBaseViewModel.md)

Matching [`IOperationsVectorDisplayBaseViewModel`](VM.Operations.Post.Interfaces.IOperationsVectorDisplayBaseViewModel.md), or `null` when no matching display exists.

### Remarks

The operation returns `null` when `name` does not identify an existing vector display; it does not create a display.
