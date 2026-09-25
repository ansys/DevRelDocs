# Interface IPage
<a id="VM_Operations_Post_Interfaces_IPage"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

Enables creating, finding, activating, and closing [`IView`](VM.Operations.Post.Interfaces.IView.md) through the Operation API.

```csharp
public interface IPage
```

## Properties

 [FullName](VM.Operations.Post.Interfaces.IPage.FullName.md\#VM\_Operations\_Post\_Interfaces\_IPage\_FullName)

Gets or sets the display name used to identify `IPage`.

 [ID](VM.Operations.Post.Interfaces.IPage.ID.md\#VM\_Operations\_Post\_Interfaces\_IPage\_ID)

Gets the unique identifier assigned to `IPage` when it is created.

## Methods

 [Activate\(\)](VM.Operations.Post.Interfaces.IPage.Activate.md\#VM\_Operations\_Post\_Interfaces\_IPage\_Activate)

Activates `IPage`.

 [Close\(\)](VM.Operations.Post.Interfaces.IPage.Close.md\#VM\_Operations\_Post\_Interfaces\_IPage\_Close)

Closes `IPage` and removes [`IView`](VM.Operations.Post.Interfaces.IView.md) objects associated with it.

 [CloseView\(IView\)](VM.Operations.Post.Interfaces.IPage.CloseView.md\#VM\_Operations\_Post\_Interfaces\_IPage\_CloseView\_VM\_Operations\_Post\_Interfaces\_IView\_)

Closes the given [`IView`](VM.Operations.Post.Interfaces.IView.md) with `IPage`.

 [CloseView\(int\)](VM.Operations.Post.Interfaces.IPage.CloseView.md\#VM\_Operations\_Post\_Interfaces\_IPage\_CloseView\_System\_Int32\_)

Closes [`IView`](VM.Operations.Post.Interfaces.IView.md) with the specified [`Index`](VM.Operations.Post.Interfaces.IView.Index.md).

 [CloseView\(string\)](VM.Operations.Post.Interfaces.IPage.CloseView.md\#VM\_Operations\_Post\_Interfaces\_IPage\_CloseView\_System\_String\_)

Closes [`IView`](VM.Operations.Post.Interfaces.IView.md) with the specified [`FullName`](VM.Operations.Post.Interfaces.IView.FullName.md).

 [CreateAnimation\(IAnalysisResultViewModel, string\)](VM.Operations.Post.Interfaces.IPage.CreateAnimation.md\#VM\_Operations\_Post\_Interfaces\_IPage\_CreateAnimation\_VM\_ViewModels\_Post\_IAnalysisResultViewModel\_System\_String\_)

Creates [`IOperationsAnimation`](VM.Operations.Post.Interfaces.IOperationsAnimation.md) with an analysis result on this page.

 [CreateChart\(string\)](VM.Operations.Post.Interfaces.IPage.CreateChart.md\#VM\_Operations\_Post\_Interfaces\_IPage\_CreateChart\_System\_String\_)

Creates [`IOperationsLine2DViewModelBase`](VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.md) on this page for 2D curve operations.

 [GetActiveView\(\)](VM.Operations.Post.Interfaces.IPage.GetActiveView.md\#VM\_Operations\_Post\_Interfaces\_IPage\_GetActiveView)

Gets [`IView`](VM.Operations.Post.Interfaces.IView.md) currently reported as active by the Operation API.

 [GetView\(int\)](VM.Operations.Post.Interfaces.IPage.GetView.md\#VM\_Operations\_Post\_Interfaces\_IPage\_GetView\_System\_Int32\_)

Finds [`IView`](VM.Operations.Post.Interfaces.IView.md) with the specified [`Index`](VM.Operations.Post.Interfaces.IView.Index.md).

 [GetView\(string\)](VM.Operations.Post.Interfaces.IPage.GetView.md\#VM\_Operations\_Post\_Interfaces\_IPage\_GetView\_System\_String\_)

Finds [`IView`](VM.Operations.Post.Interfaces.IView.md) with the specified [`FullName`](VM.Operations.Post.Interfaces.IView.FullName.md).

 [GetViews\(\)](VM.Operations.Post.Interfaces.IPage.GetViews.md\#VM\_Operations\_Post\_Interfaces\_IPage\_GetViews)

Gets every [`IView`](VM.Operations.Post.Interfaces.IView.md) associated with `IPage`.
