# Method AddTarget
<a id="VM_ViewModels_Post_IDurabilityAnalysisParameter_AddTarget_System_Guid_"></a>

Namespace: [VM.ViewModels.Post](VM.ViewModels.Post.md)  
Assembly: VM.ViewModels.Post.dll  

## <a id="VM_ViewModels_Post_IDurabilityAnalysisParameter_AddTarget_System_Guid_"></a> AddTarget\(Guid\)

Adds a finite-element body identifier to the fatigue analysis targets.

```csharp
void AddTarget(Guid target)
```

### Parameters

`target` Guid

The identifier of a finite-element body available in the imported result document.

### Remarks

The identifier is appended to [`Targets`](VM.ViewModels.Post.IDurabilityAnalysisParameter.Targets.md).
