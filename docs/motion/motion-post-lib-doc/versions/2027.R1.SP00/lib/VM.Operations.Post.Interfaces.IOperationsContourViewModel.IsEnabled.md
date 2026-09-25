# Property IsEnabled
<a id="VM_Operations_Post_Interfaces_IOperationsContourViewModel_IsEnabled"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsContourViewModel_IsEnabled"></a> IsEnabled

Gets or sets whether contour data is active in the animation view. `true` activates and displays the contour; `false` deactivates it.

```csharp
bool IsEnabled { get; set; }
```

### Property Value

 bool

### Remarks

Activating this contour deactivates any other contour already active in the same analysis result, so only one contour is active at a time. Deactivating this contour removes it from active display.

> [!IMPORTANT]
> Activation has no effect until an animation frame is available for the analysis result. Setting this value to `true` before a frame is loaded leaves the contour disabled.
