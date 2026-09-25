# Property SphericalAxis1
<a id="VM_Operations_Post_Interfaces_IOperationsCSYSViewModel_SphericalAxis1"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsCSYSViewModel_SphericalAxis1"></a> SphericalAxis1

Gets or sets the first spherical-axis direction selected from [`CoordinateType`](VM.Models.Post.CoordinateType.md) when [`CurrentCoordinateSystemType`](VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.CurrentCoordinateSystemType.md) is spherical.

```csharp
CoordinateType SphericalAxis1 { get; set; }
```

### Property Value

 [CoordinateType](VM.Models.Post.CoordinateType.md)

### Remarks

The value affects the orientation used to interpret spherical coordinates and applies only to spherical representation.
