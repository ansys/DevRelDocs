# Property CylindricalAxisR
<div align="right"><a href="/lib/VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.CylindricalAxisR.md" download="VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.CylindricalAxisR.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

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
