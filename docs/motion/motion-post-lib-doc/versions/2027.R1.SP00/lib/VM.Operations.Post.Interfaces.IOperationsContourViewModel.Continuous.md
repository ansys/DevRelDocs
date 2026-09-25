# Property Continuous
<a id="VM_Operations_Post_Interfaces_IOperationsContourViewModel_Continuous"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsContourViewModel_Continuous"></a> Continuous

Gets or sets whether contour colors are interpolated continuously. `true` interpolates between colors and `false` uses discrete color bands.

```csharp
bool Continuous { get; set; }
```

### Property Value

 bool

### Remarks

Changing this value updates scalar contour rendering. Continuous mode is unavailable while logarithmic scaling is active.
