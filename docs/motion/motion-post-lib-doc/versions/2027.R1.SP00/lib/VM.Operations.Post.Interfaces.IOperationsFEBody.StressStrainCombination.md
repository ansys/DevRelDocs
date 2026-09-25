# Property StressStrainCombination
<a id="VM_Operations_Post_Interfaces_IOperationsFEBody_StressStrainCombination"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsFEBody_StressStrainCombination"></a> StressStrainCombination

Gets or sets the stress or strain combination selected from [`StressStrainCombinationType`](VM.Models.StressStrainCombinationType.md) for fatigue analysis.

```csharp
StressStrainCombinationType StressStrainCombination { get; set; }
```

### Property Value

 [StressStrainCombinationType](VM.Models.StressStrainCombinationType.md)

### Remarks

The selected combination determines how stress or strain components are combined before fatigue results are evaluated.
