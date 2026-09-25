# Property AlphaX
<a id="VM_Operations_Post_Interfaces_IOperationsFEBody_AlphaX"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsFEBody_AlphaX"></a> AlphaX

Gets or sets the non-negative X component of the deformation scale used for finite-element result display.

```csharp
double AlphaX { get; set; }
```

### Property Value

 double

### Remarks

Changing this value updates the combined deformation scale while preserving the Y and Z components. The scale is used for dynamic and static analysis results.
