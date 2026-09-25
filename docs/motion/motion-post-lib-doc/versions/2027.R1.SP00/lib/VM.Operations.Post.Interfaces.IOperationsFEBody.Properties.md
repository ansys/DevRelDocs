# Property Properties
<a id="VM_Operations_Post_Interfaces_IOperationsFEBody_Properties"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsFEBody_Properties"></a> Properties

Gets the read-only collection of finite-element property entries associated with the finite-element body.

```csharp
IEnumerable<IViewModel> Properties { get; }
```

### Property Value

 IEnumerable<[IViewModel](VM.ViewModels.IViewModel.md)\>

### Remarks

The collection contains the available entries in the finite-element property category. An empty collection is returned when that category is unavailable.
