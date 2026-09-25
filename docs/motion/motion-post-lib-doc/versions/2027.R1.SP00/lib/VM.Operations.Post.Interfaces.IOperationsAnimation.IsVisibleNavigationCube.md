# Property IsVisibleNavigationCube
<a id="VM_Operations_Post_Interfaces_IOperationsAnimation_IsVisibleNavigationCube"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsAnimation_IsVisibleNavigationCube"></a> IsVisibleNavigationCube

Gets or sets whether the navigation cube is visible. `true` shows it and `false` hides it.

```csharp
bool IsVisibleNavigationCube { get; set; }
```

### Property Value

 bool

### Remarks

The navigation cube is drawn in the animation view and in captured animation frames when this value is `true`. Its position is controlled by [`NavigationCubePosition`](VM.Operations.Post.Interfaces.IOperationsAnimation.NavigationCubePosition.md).
