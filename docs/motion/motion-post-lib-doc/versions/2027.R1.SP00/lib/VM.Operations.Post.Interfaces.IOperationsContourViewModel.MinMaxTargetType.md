# Property MinMaxTargetType
<a id="VM_Operations_Post_Interfaces_IOperationsContourViewModel_MinMaxTargetType"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsContourViewModel_MinMaxTargetType"></a> MinMaxTargetType

Gets or sets the extremal-value scope selected from [`ExtremalValueType`](VM.Models.Post.ExtremalValueType.md) for contour display.

```csharp
ExtremalValueType MinMaxTargetType { get; set; }
```

### Property Value

 [ExtremalValueType](VM.Models.Post.ExtremalValueType.md)

### Remarks

Changing this value updates the animation view so minimum and maximum annotations are calculated for the selected contour scope.
