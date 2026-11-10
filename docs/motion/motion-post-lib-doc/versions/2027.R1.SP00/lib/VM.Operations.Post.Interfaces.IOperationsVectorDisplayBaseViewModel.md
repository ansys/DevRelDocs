# Interface IOperationsVectorDisplayBaseViewModel
<div align="right"><a href="/lib/VM.Operations.Post.Interfaces.IOperationsVectorDisplayBaseViewModel.md" download="VM.Operations.Post.Interfaces.IOperationsVectorDisplayBaseViewModel.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Operations_Post_Interfaces_IOperationsVectorDisplayBaseViewModel"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

Provides settings for a vector display created with a dynamic analysis result.

```csharp
public interface IOperationsVectorDisplayBaseViewModel
```

## Properties

 [FullName](VM.Operations.Post.Interfaces.IOperationsVectorDisplayBaseViewModel.FullName.md\#VM\_Operations\_Post\_Interfaces\_IOperationsVectorDisplayBaseViewModel\_FullName)

Gets or sets the full name used to identify the vector display with its analysis result.

 [IsLabel](VM.Operations.Post.Interfaces.IOperationsVectorDisplayBaseViewModel.IsLabel.md\#VM\_Operations\_Post\_Interfaces\_IOperationsVectorDisplayBaseViewModel\_IsLabel)

Gets or sets whether the vector label is displayed. `true` shows the label and `false` hides it.

 [IsVisible](VM.Operations.Post.Interfaces.IOperationsVectorDisplayBaseViewModel.IsVisible.md\#VM\_Operations\_Post\_Interfaces\_IOperationsVectorDisplayBaseViewModel\_IsVisible)

Gets or sets whether the vector display is visible. `true` shows it and `false` hides it.

 [LabelBackgroundColor](VM.Operations.Post.Interfaces.IOperationsVectorDisplayBaseViewModel.LabelBackgroundColor.md\#VM\_Operations\_Post\_Interfaces\_IOperationsVectorDisplayBaseViewModel\_LabelBackgroundColor)

Gets or sets the color used to draw the vector-label background.

 [LabelTextColor](VM.Operations.Post.Interfaces.IOperationsVectorDisplayBaseViewModel.LabelTextColor.md\#VM\_Operations\_Post\_Interfaces\_IOperationsVectorDisplayBaseViewModel\_LabelTextColor)

Gets or sets the color used to draw vector-label text.

## Methods

 [SetCharacteristic\(string\)](VM.Operations.Post.Interfaces.IOperationsVectorDisplayBaseViewModel.SetCharacteristic.md\#VM\_Operations\_Post\_Interfaces\_IOperationsVectorDisplayBaseViewModel\_SetCharacteristic\_System\_String\_)

Changes the result characteristic shown by the vector display.
