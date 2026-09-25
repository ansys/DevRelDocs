# Property IsDeformationSuppressed
<a id="VM_Operations_Post_Interfaces_IOperationsFEBody_IsDeformationSuppressed"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsFEBody_IsDeformationSuppressed"></a> IsDeformationSuppressed

Gets or sets whether result deformation is excluded from node transformations for the finite-element body. `true` uses rigid-body transformations; `false` includes available result deformation.

```csharp
bool IsDeformationSuppressed { get; set; }
```

### Property Value

 bool

### Remarks

When this value is `true`, node transformations use rigid-body motion and do not apply result deformation. When it is `false`, loaded deformation data contributes to the transformations. This property is not exposed for eigenvalue or mode-contribution results.
