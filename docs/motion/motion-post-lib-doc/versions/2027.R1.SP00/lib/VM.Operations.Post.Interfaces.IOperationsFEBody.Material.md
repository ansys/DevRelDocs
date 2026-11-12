# Property Material
<div align="right"><a href="/lib/VM.Operations.Post.Interfaces.IOperationsFEBody.Material.md" download="VM.Operations.Post.Interfaces.IOperationsFEBody.Material.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Operations_Post_Interfaces_IOperationsFEBody_Material"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsFEBody_Material"></a> Material

Gets or sets `IOperationMaterial` associated with the finite-element body, or `null` when no material is available.

```csharp
IOperationMaterial Material { get; set; }
```

### Property Value

 IOperationMaterial

### Remarks

Getting this property returns the fatigue material associated with the body properties. Setting a supported material assigns it to the fatigue properties. Setting an unsupported value or `null` clears the associated fatigue material.
