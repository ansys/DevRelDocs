# Property TrajectoryColor
<a id="VM_Operations_Post_Interfaces_IOperationsCSYSViewModel_TrajectoryColor"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsCSYSViewModel_TrajectoryColor"></a> TrajectoryColor

Gets or sets the color used to render the coordinate-system trajectory when [`IsVisibleTrajectory`](VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.IsVisibleTrajectory.md) is `true`.

```csharp
Color TrajectoryColor { get; set; }
```

### Property Value

 Color

### Remarks

Changing this value affects the path drawn across animation frames and does not affect the coordinate-system marker.
