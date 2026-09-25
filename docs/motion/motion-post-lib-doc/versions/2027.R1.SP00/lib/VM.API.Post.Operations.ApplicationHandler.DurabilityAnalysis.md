# Method DurabilityAnalysis
<a id="VM_API_Post_Operations_ApplicationHandler_DurabilityAnalysis_VM_ViewModels_Post_IDurabilityAnalysisParameter_"></a>

Namespace: [VM.API.Post.Operations](VM.API.Post.Operations.md)  
Assembly: VM.API.Post.Operations.dll  

## <a id="VM_API_Post_Operations_ApplicationHandler_DurabilityAnalysis_VM_ViewModels_Post_IDurabilityAnalysisParameter_"></a> DurabilityAnalysis\(IDurabilityAnalysisParameter\)

Runs the obsolete combined durability-analysis operation.

```csharp
[Obsolete("This method is considered outdated and its use is discouraged. It may be removed in future versions, so it is advisable to use the RunFatigueAnalysisAndGenerateContours function of the DurabilityAnalysis class instead.", true)]
public bool DurabilityAnalysis(IDurabilityAnalysisParameter parameter)
```

### Parameters

`parameter` [IDurabilityAnalysisParameter](VM.ViewModels.Post.IDurabilityAnalysisParameter.md)

The fatigue-analysis and contour-generation settings.

### Returns

 bool

<code>true</code> when both operations complete successfully; otherwise, <code>false</code>.

### Remarks

This method is obsolete. Use [RunFatigueAnalysis\(IDurabilityAnalysisParameter\)](VM.API.Post.Operations.DurabilityAnalysis.RunFatigueAnalysis.md) and the contour APIs instead.
