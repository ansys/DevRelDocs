# Property MaterialName
<a id="VM_Operations_Post_FatigueParameter_MaterialName"></a>

Namespace: [VM.Operations.Post](VM.Operations.Post.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_FatigueParameter_MaterialName"></a> MaterialName

Gets or sets the legacy material name used by the legacy analysis path.

```csharp
[Obsolete("This property will be deprecated in the near future.")]
public string MaterialName { get; set; }
```

### Property Value

 string

### Remarks

This property is obsolete. New analyses assign fatigue material through [`Material`](VM.Operations.Post.Interfaces.IOperationsFEBody.Material.md).
