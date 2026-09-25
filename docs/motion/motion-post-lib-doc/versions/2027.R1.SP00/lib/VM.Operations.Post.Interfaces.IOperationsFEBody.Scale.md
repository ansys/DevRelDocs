# Property Scale
<a id="VM_Operations_Post_Interfaces_IOperationsFEBody_Scale"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsFEBody_Scale"></a> Scale

Gets or sets the fatigue scale factor stored with the fatigue parameters. The default value is `1.0`.

```csharp
double Scale { get; set; }
```

### Property Value

 double

### Remarks

This property is exposed when the analysis result is dynamic or static and the body can be used as a durability-analysis target. Changing it updates the scale stored with the fatigue parameters.
