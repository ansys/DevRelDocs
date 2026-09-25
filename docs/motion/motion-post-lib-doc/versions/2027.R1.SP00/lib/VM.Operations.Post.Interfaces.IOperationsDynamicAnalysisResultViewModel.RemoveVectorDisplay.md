# Method RemoveVectorDisplay
<a id="VM_Operations_Post_Interfaces_IOperationsDynamicAnalysisResultViewModel_RemoveVectorDisplay_System_String_"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsDynamicAnalysisResultViewModel_RemoveVectorDisplay_System_String_"></a> RemoveVectorDisplay\(string\)

Removes a vector display by its full name.

```csharp
void RemoveVectorDisplay(string name)
```

### Parameters

`name` string

Full name from [`FullName`](VM.Operations.Post.Interfaces.IOperationsVectorDisplayBaseViewModel.FullName.md) for a vector display in the dynamic result.

### Remarks

When a matching vector display exists, it is removed from the dynamic result and the animation display is updated.

If no vector display matches `name`, the dynamic result is unchanged.
