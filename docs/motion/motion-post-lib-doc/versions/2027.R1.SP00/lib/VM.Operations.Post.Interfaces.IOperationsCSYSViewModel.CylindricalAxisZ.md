# Property CylindricalAxisZ
<a id="VM_Operations_Post_Interfaces_IOperationsCSYSViewModel_CylindricalAxisZ"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsCSYSViewModel_CylindricalAxisZ"></a> CylindricalAxisZ

Gets or sets the axial direction selected from [`CoordinateType`](VM.Models.Post.CoordinateType.md) for cylindrical coordinates.

```csharp
CoordinateType CylindricalAxisZ { get; set; }
```

### Property Value

 [CoordinateType](VM.Models.Post.CoordinateType.md)

### Remarks

This property applies when [`CurrentCoordinateSystemType`](VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.CurrentCoordinateSystemType.md) is cylindrical. Assigning an axis already used by the other cylindrical axis changes the other axis to its next available value.
