# Property SymbolSize
<a id="VM_Operations_Post_Interfaces_IOperationsPointDisplayViewModel_SymbolSize"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsPointDisplayViewModel_SymbolSize"></a> SymbolSize

Gets or sets the symbol size in pixels. The default value returned when no point animation data is available is `10`.

```csharp
int SymbolSize { get; set; }
```

### Property Value

 int

### Remarks

Changing this value updates the point display animation and requests an animation refresh without changing the displayed vector data.
