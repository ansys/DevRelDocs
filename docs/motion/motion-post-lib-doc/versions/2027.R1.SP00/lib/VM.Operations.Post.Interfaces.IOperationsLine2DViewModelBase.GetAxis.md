# Method GetAxis
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
