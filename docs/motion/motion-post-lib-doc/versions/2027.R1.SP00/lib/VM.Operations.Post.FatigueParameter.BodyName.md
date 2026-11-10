# Property BodyName
<div align="right"><a href="/lib/VM.Operations.Post.FatigueParameter.BodyName.md" download="VM.Operations.Post.FatigueParameter.BodyName.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Operations_Post_FatigueParameter_BodyName"></a>

Namespace: [VM.Operations.Post](VM.Operations.Post.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_FatigueParameter_BodyName"></a> BodyName

Gets or sets the legacy body name used by the obsolete fatigue parameter model to find a finite-element body in the legacy analysis path.

```csharp
public string BodyName { get; set; }
```

### Property Value

 string

### Remarks

This property is obsolete. New analyses identify target bodies with [`Targets`](VM.ViewModels.Post.IDurabilityAnalysisParameter.Targets.md) and configure the target through [`IOperationsFEBody`](VM.Operations.Post.Interfaces.IOperationsFEBody.md).
