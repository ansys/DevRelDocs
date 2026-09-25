# Method RemoveTarget
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
