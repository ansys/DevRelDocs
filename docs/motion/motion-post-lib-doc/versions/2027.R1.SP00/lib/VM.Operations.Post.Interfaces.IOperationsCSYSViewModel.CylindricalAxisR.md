# Property CylindricalAxisR
<a id="VM_Operations_Post_Interfaces_IOperationsCSYSViewModel_CylindricalAxisR"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsCSYSViewModel_CylindricalAxisR"></a> CylindricalAxisR

Gets or sets the radial axis selected from [`CoordinateType`](VM.Models.Post.CoordinateType.md) for cylindrical coordinates.

```csharp
CoordinateType CylindricalAxisR { get; set; }
```

### Property Value

 [CoordinateType](VM.Models.Post.CoordinateType.md)

### Remarks

This property applies when [`CurrentCoordinateSystemType`](VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.CurrentCoordinateSystemType.md) is cylindrical. The coordinate system keeps the primary and secondary axes distinct.
