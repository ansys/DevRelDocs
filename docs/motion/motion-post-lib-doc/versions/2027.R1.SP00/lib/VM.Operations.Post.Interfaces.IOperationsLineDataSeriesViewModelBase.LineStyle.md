# Property LineStyle
<a id="VM_Operations_Post_Interfaces_IOperationsLineDataSeriesViewModelBase_LineStyle"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsLineDataSeriesViewModelBase_LineStyle"></a> LineStyle

Gets or sets the dash style selected from [`LineStyleType`](VM.Models.Post.LineStyleType.md) to render the line.

```csharp
LineStyleType LineStyle { get; set; }
```

### Property Value

 [LineStyleType](VM.Models.Post.LineStyleType.md)

### Remarks

Changing this value changes the line pattern. Point-only rendering is unaffected.
