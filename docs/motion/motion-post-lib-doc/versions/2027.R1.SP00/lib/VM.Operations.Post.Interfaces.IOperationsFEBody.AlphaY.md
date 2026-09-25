# Property AlphaY
<a id="VM_Operations_Post_Interfaces_IOperationsFEBody_AlphaY"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsFEBody_AlphaY"></a> AlphaY

Gets or sets the non-negative Y component of the deformation scale used for finite-element result display.

```csharp
double AlphaY { get; set; }
```

### Property Value

 double

### Remarks

Changing this value updates the combined deformation scale while preserving the X and Z components. The scale is used for dynamic and static analysis results.
