# Property LabelBackGroundColor
<a id="VM_Operations_Post_Interfaces_IOperationsCSYSViewModel_LabelBackGroundColor"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsCSYSViewModel_LabelBackGroundColor"></a> LabelBackGroundColor

Gets or sets the background color behind the coordinate-system label when [`IsVisibleLabel`](VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.IsVisibleLabel.md) and [`IsVisibleLabelBackground`](VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.IsVisibleLabelBackground.md) are `true`.

```csharp
Color LabelBackGroundColor { get; set; }
```

### Property Value

 Color

### Remarks

Changing this value affects only the label background; it does not change marker or trajectory colors.
