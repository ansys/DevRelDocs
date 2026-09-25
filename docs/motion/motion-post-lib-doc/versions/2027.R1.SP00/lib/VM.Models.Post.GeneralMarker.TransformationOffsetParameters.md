# Property TransformationOffsetParameters
<a id="VM_Models_Post_GeneralMarker_TransformationOffsetParameters"></a>

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

## <a id="VM_Models_Post_GeneralMarker_TransformationOffsetParameters"></a> TransformationOffsetParameters

Gets or sets the angle, position, rotation-axis, and rotation-type values for this marker's transformation offset.

```csharp
[SaveProperty(false)]
public TransformationParameters TransformationOffsetParameters { get; set; }
```

### Property Value

 [TransformationParameters](VM.Models.Post.TransformationParameters.md)

### Remarks

Changing a parameter updates the marker's transformation offset.
