# Property SphericalAxis2
<a id="VM_Operations_Post_Interfaces_IOperationsCSYSViewModel_SphericalAxis2"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsCSYSViewModel_SphericalAxis2"></a> SphericalAxis2

Gets or sets the second spherical-axis direction selected from [`CoordinateType`](VM.Models.Post.CoordinateType.md) when [`CurrentCoordinateSystemType`](VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.CurrentCoordinateSystemType.md) is spherical.

```csharp
CoordinateType SphericalAxis2 { get; set; }
```

### Property Value

 [CoordinateType](VM.Models.Post.CoordinateType.md)

### Remarks

The value affects the orientation used to interpret spherical coordinates. The coordinate system keeps the two spherical axes distinct.
