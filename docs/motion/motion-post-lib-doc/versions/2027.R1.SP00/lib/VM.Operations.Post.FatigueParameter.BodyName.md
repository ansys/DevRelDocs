# Property BodyName
<a id="VM_Operations_Post_FatigueParameter_BodyName"></a>

Namespace: [VM.Operations.Post](VM.Operations.Post.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_FatigueParameter_BodyName"></a> BodyName

Gets or sets the legacy body name used by the obsolete fatigue parameter model to find a finite-element body in the legacy analysis path.

```csharp
[Obsolete("This property will be deprecated in the near future.")]
public string BodyName { get; set; }
```

### Property Value

 string

### Remarks

This property is obsolete. New analyses identify target bodies with [`Targets`](VM.ViewModels.Post.IDurabilityAnalysisParameter.Targets.md) and configure the target through [`IOperationsFEBody`](VM.Operations.Post.Interfaces.IOperationsFEBody.md).
