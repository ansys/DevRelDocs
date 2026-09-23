# Property IsVisible
<a id="VM_Operations_Post_Interfaces_IOperationsCSYSViewModel_IsVisible"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsCSYSViewModel_IsVisible"></a> IsVisible

Gets or sets whether the coordinate-system marker is rendered. `true` shows the marker and `false` hides it.

```csharp
bool IsVisible { get; set; }
```

### Property Value

 bool

### Remarks

When this value is `false`, marker-size changes have no visible effect until the marker is shown again.
