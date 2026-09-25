# Property Scale
<a id="VM_Operations_Post_FatigueParameter_Scale"></a>

Namespace: [VM.Operations.Post](VM.Operations.Post.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_FatigueParameter_Scale"></a> Scale

Gets or sets the legacy fatigue scale factor applied by the legacy analysis path.

```csharp
[Obsolete("This property will be deprecated in the near future.")]
public double Scale { get; set; }
```

### Property Value

 double

### Remarks

This property is obsolete. New analyses set [`Scale`](VM.Operations.Post.Interfaces.IOperationsFEBody.Scale.md) on the selected target body.
