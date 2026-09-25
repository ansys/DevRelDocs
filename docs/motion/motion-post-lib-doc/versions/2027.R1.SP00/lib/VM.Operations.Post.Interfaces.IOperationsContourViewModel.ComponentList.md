# Property ComponentList
<a id="VM_Operations_Post_Interfaces_IOperationsContourViewModel_ComponentList"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsContourViewModel_ComponentList"></a> ComponentList

Gets the component names available for the contour target and characteristic and accepted by [`Component`](VM.Operations.Post.Interfaces.IOperationsContourViewModel.Component.md).

```csharp
IEnumerable<string> ComponentList { get; }
```

### Property Value

 IEnumerable<string\>

### Remarks

The collection is provided by the created contour's selected target, mapping type, and characteristic.
