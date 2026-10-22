# Property LogScale
<a id="VM_Operations_Post_Interfaces_IOperationsContourViewModel_LogScale"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsContourViewModel_LogScale"></a> LogScale

Gets or sets whether contour values use logarithmic scaling. `true` uses logarithmic scaling and `false` uses linear scaling.

```csharp
bool LogScale { get; set; }
```

### Property Value

 bool

### Remarks

Changing this value updates scalar contour rendering and makes continuous-color settings unavailable while logarithmic scaling is active.

<a href="/lib/VM.Operations.Post.Interfaces.IOperationsContourViewModel.LogScale.md" download="VM.Operations.Post.Interfaces.IOperationsContourViewModel.LogScale.md">Download this page as Markdown</a>
