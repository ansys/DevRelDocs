# Property TransformationType
<div align="right"><a href="/lib/VM.Operations.Post.Interfaces.IOperationsAnimation.TransformationType.md" download="VM.Operations.Post.Interfaces.IOperationsAnimation.TransformationType.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Operations_Post_Interfaces_IOperationsAnimation_TransformationType"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsAnimation_TransformationType"></a> TransformationType

Gets or sets [`TransformationType`](VM.Models.Post.TransformationType.md) that determines the camera-follow direction.

```csharp
TransformationType TransformationType { get; set; }
```

### Property Value

 [TransformationType](VM.Models.Post.TransformationType.md)

### Remarks

`TransformationType` controls whether the camera follows the target's translational or rotational direction.
The selected mode determines whether camera-follow updates use target translation, target rotation, or both.

<Danger>
`Unknown` is not a settable value. Assigning it throws `NotSupportedException`.
</Danger>
