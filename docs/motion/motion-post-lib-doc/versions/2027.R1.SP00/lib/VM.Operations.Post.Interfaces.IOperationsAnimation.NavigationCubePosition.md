# Property NavigationCubePosition
<a id="VM_Operations_Post_Interfaces_IOperationsAnimation_NavigationCubePosition"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsAnimation_NavigationCubePosition"></a> NavigationCubePosition

Gets or sets the navigation-cube position selected from [`Layout`](VM.Models.Post.Layout.md).

```csharp
Layout NavigationCubePosition { get; set; }
```

### Property Value

 [Layout](VM.Models.Post.Layout.md)

### Remarks

[`Layout`](VM.Models.Post.Layout.md) selects a predefined corner position for the overlay in the animation view and captured frames when [`IsVisibleNavigationCube`](VM.Operations.Post.Interfaces.IOperationsAnimation.IsVisibleNavigationCube.md) is `true`.
