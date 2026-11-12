# Property IsEnabled
<div align="right"><a href="/lib/VM.Operations.Post.Interfaces.IOperationsContourViewModel.IsEnabled.md" download="VM.Operations.Post.Interfaces.IOperationsContourViewModel.IsEnabled.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

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

<Danger>
Activation has no effect until an animation frame is available for the analysis result. Setting this value to `true` before a frame is loaded leaves the contour disabled.
</Danger>
