# Property Parameters
<a id="VM_ViewModels_Post_IDurabilityAnalysisParameter_Parameters"></a>

Namespace: [VM.ViewModels.Post](VM.ViewModels.Post.md)  
Assembly: VM.ViewModels.Post.dll  

## <a id="VM_ViewModels_Post_IDurabilityAnalysisParameter_Parameters"></a> Parameters

Gets the legacy fatigue parameter collection.

```csharp
[Obsolete("Use Targets instead.")]
IList<IFatigueParameter> Parameters { get; }
```

### Property Value

 IList<IFatigueParameter\>

### Remarks

This property is obsolete. Configure fatigue settings on the target [`IOperationsFEBody`](VM.Operations.Post.Interfaces.IOperationsFEBody.md) and add its identifier through [`Targets`](VM.ViewModels.Post.IDurabilityAnalysisParameter.Targets.md) instead.
