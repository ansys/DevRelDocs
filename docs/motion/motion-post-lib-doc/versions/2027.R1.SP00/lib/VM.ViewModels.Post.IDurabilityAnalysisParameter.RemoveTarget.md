# Method RemoveTarget
<div align="right"><a href="/lib/VM.ViewModels.Post.IDurabilityAnalysisParameter.RemoveTarget.md" download="VM.ViewModels.Post.IDurabilityAnalysisParameter.RemoveTarget.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_ViewModels_Post_IDurabilityAnalysisParameter_RemoveTarget_System_Guid_"></a>

Namespace: [VM.ViewModels.Post](VM.ViewModels.Post.md)  
Assembly: VM.ViewModels.Post.dll  

## <a id="VM_ViewModels_Post_IDurabilityAnalysisParameter_RemoveTarget_System_Guid_"></a> RemoveTarget\(Guid\)

Removes a finite-element body identifier from the fatigue analysis targets.

```csharp
void RemoveTarget(Guid target)
```

### Parameters

`target` Guid

The identifier of the finite-element body to remove.

### Remarks

If the identifier is not present in [`Targets`](VM.ViewModels.Post.IDurabilityAnalysisParameter.Targets.md), the collection remains unchanged.
