# Property IsDeformationSuppressed
<div align="right"><a href="/lib/VM.Operations.Post.Interfaces.IOperationsFEBody.IsDeformationSuppressed.md" download="VM.Operations.Post.Interfaces.IOperationsFEBody.IsDeformationSuppressed.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

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
