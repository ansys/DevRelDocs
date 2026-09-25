# Method GetVectorDisplay
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
