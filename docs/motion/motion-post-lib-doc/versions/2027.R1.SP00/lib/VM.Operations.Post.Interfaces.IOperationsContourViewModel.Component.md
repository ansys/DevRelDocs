# Property Component
<a id="VM_Operations_Post_Interfaces_IOperationsContourViewModel_Component"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsContourViewModel_Component"></a> Component

Gets or sets the contour component selected from [`ComponentList`](VM.Operations.Post.Interfaces.IOperationsContourViewModel.ComponentList.md) for display.

```csharp
string Component { get; set; }
```

### Property Value

 string

### Remarks

Changing the component updates contour data and resets the range to automatic calculation.
