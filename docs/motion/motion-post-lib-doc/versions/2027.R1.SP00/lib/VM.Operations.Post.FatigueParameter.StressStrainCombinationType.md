# Property StressStrainCombinationType
<a id="VM_Operations_Post_FatigueParameter_StressStrainCombinationType"></a>

Namespace: [VM.Operations.Post](VM.Operations.Post.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_FatigueParameter_StressStrainCombinationType"></a> StressStrainCombinationType

Gets or sets the legacy stress or strain combination selected from `StressStrainCombinationType` for the legacy analysis path.

```csharp
[Obsolete("This property will be deprecated in the near future.")]
public StressStrainCombinationType StressStrainCombinationType { get; set; }
```

### Property Value

 [StressStrainCombinationType](VM.Models.StressStrainCombinationType.md)

### Remarks

This property is obsolete. New analyses set [`StressStrainCombination`](VM.Operations.Post.Interfaces.IOperationsFEBody.StressStrainCombination.md) on the selected target body.
