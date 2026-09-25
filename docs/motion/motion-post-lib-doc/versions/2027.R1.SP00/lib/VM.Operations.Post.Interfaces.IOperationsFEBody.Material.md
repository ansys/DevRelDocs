# Property Material
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
