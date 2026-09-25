# Property IsLog
<a id="VM_Operations_Post_Interfaces_IOperationsVectorDisplayViewModel_IsLog"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsVectorDisplayViewModel_IsLog"></a> IsLog

Gets or sets whether logarithmic vector scaling is enabled. `true` uses logarithmic scaling and `false` uses linear scaling.

```csharp
bool IsLog { get; set; }
```

### Property Value

 bool

### Remarks

Changing this value changes how vector magnitudes are mapped to the displayed scale.
