# Property StressStrainCombinationType
<div align="right"><a href="/lib/VM.Operations.Post.FatigueParameter.StressStrainCombinationType.md" download="VM.Operations.Post.FatigueParameter.StressStrainCombinationType.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Operations_Post_FatigueParameter_StressStrainCombinationType"></a>

Namespace: [VM.Operations.Post](VM.Operations.Post.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_FatigueParameter_StressStrainCombinationType"></a> StressStrainCombinationType

Gets or sets the legacy stress or strain combination selected from `StressStrainCombinationType` for the legacy analysis path.

```csharp
public StressStrainCombinationType StressStrainCombinationType { get; set; }
```

### Property Value

 [StressStrainCombinationType](VM.Models.StressStrainCombinationType.md)

### Remarks

This property is obsolete. New analyses set [`StressStrainCombination`](VM.Operations.Post.Interfaces.IOperationsFEBody.StressStrainCombination.md) on the selected target body.
