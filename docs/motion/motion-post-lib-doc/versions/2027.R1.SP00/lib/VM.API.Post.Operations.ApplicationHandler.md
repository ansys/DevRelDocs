# Class ApplicationHandler
<a id="VM_API_Post_Operations_ApplicationHandler"></a>

Namespace: [VM.API.Post.Operations](VM.API.Post.Operations.md)  
Assembly: VM.API.Post.Operations.dll  

Provides the entry point for Operation API operations in a running Postprocessor session.

```csharp
public class ApplicationHandler
```

## Constructors

 [ApplicationHandler\(\)](VM.API.Post.Operations.ApplicationHandler.\-ctor.md\#VM\_API\_Post\_Operations\_ApplicationHandler\_\_ctor)

Initializes `ApplicationHandler` and sets [`IsShowMessageBox`](VM.API.Post.Operations.ApplicationHandler.IsShowMessageBox.md) to `false`.

## Properties

 [IsShowMessageBox](VM.API.Post.Operations.ApplicationHandler.IsShowMessageBox.md\#VM\_API\_Post\_Operations\_ApplicationHandler\_IsShowMessageBox)

Gets or sets whether Operation API errors are displayed in a message box. `false` writes error messages to a `.log` file instead.

## Methods

 [AddDocument\(IList<string\>\)](VM.API.Post.Operations.ApplicationHandler.AddDocument.md\#VM\_API\_Post\_Operations\_ApplicationHandler\_AddDocument\_System\_Collections\_Generic\_IList\_System\_String\_\_)

Imports result documents from the specified file paths.

 [AddPage\(string\)](VM.API.Post.Operations.ApplicationHandler.AddPage.md\#VM\_API\_Post\_Operations\_ApplicationHandler\_AddPage\_System\_String\_)

Adds and activates a page with the specified name.

 [AddPlotView\(\)](VM.API.Post.Operations.ApplicationHandler.AddPlotView.md\#VM\_API\_Post\_Operations\_ApplicationHandler\_AddPlotView)

Adds a new plot view by creating a chart.

 [Close\(\)](VM.API.Post.Operations.ApplicationHandler.Close.md\#VM\_API\_Post\_Operations\_ApplicationHandler\_Close)

Closes an open application.

 [CloseDocument\(string\)](VM.API.Post.Operations.ApplicationHandler.CloseDocument.md\#VM\_API\_Post\_Operations\_ApplicationHandler\_CloseDocument\_System\_String\_)

Closes an open document by its file path.

 [ClosePage\(Guid\)](VM.API.Post.Operations.ApplicationHandler.ClosePage.md\#VM\_API\_Post\_Operations\_ApplicationHandler\_ClosePage\_System\_Guid\_)

Closes an open page by its ID.

 [ClosePage\(string\)](VM.API.Post.Operations.ApplicationHandler.ClosePage.md\#VM\_API\_Post\_Operations\_ApplicationHandler\_ClosePage\_System\_String\_)

Closes an open page by its full name.

 [DurabilityAnalysis\(IDurabilityAnalysisParameter\)](VM.API.Post.Operations.ApplicationHandler.DurabilityAnalysis.md\#VM\_API\_Post\_Operations\_ApplicationHandler\_DurabilityAnalysis\_VM\_ViewModels\_Post\_IDurabilityAnalysisParameter\_)

Runs the obsolete combined durability-analysis operation.

 [ExportImage\(IView, string, ImageFormat, double?, double?\)](VM.API.Post.Operations.ApplicationHandler.ExportImage.md\#VM\_API\_Post\_Operations\_ApplicationHandler\_ExportImage\_VM\_Operations\_Post\_Interfaces\_IView\_System\_String\_VM\_Models\_Post\_ImageFormat\_System\_Nullable\_System\_Double\_\_System\_Nullable\_System\_Double\_\_)

Exports [`IView`](VM.Operations.Post.Interfaces.IView.md) image data to a file.

 [ExportImage\(IView, string, ExportType, double?, double?\)](VM.API.Post.Operations.ApplicationHandler.ExportImage.md\#VM\_API\_Post\_Operations\_ApplicationHandler\_ExportImage\_VM\_Operations\_Post\_Interfaces\_IView\_System\_String\_SciChart\_Core\_ExportType\_System\_Nullable\_System\_Double\_\_System\_Nullable\_System\_Double\_\_)

Exports the current image to a specified file format. This function saves the image to the given file path.

 [GetActiveAnimationView\(\)](VM.API.Post.Operations.ApplicationHandler.GetActiveAnimationView.md\#VM\_API\_Post\_Operations\_ApplicationHandler\_GetActiveAnimationView)

Retrieves the active animation view from the current page.

 [GetActivePage\(\)](VM.API.Post.Operations.ApplicationHandler.GetActivePage.md\#VM\_API\_Post\_Operations\_ApplicationHandler\_GetActivePage)

Retrieves the active page.

 [GetActivePlotView\(\)](VM.API.Post.Operations.ApplicationHandler.GetActivePlotView.md\#VM\_API\_Post\_Operations\_ApplicationHandler\_GetActivePlotView)

Retrieves the active chart view from the current page.

 [GetDocument\(string\)](VM.API.Post.Operations.ApplicationHandler.GetDocument.md\#VM\_API\_Post\_Operations\_ApplicationHandler\_GetDocument\_System\_String\_)

Retrieves an imported document by its file path.

 [GetPage\(string\)](VM.API.Post.Operations.ApplicationHandler.GetPage.md\#VM\_API\_Post\_Operations\_ApplicationHandler\_GetPage\_System\_String\_)

Retrieves and activates a page by its full name.

 [GetPage\(Guid\)](VM.API.Post.Operations.ApplicationHandler.GetPage.md\#VM\_API\_Post\_Operations\_ApplicationHandler\_GetPage\_System\_Guid\_)

Retrieves and activates a page by its ID.

 [GetPages\(\)](VM.API.Post.Operations.ApplicationHandler.GetPages.md\#VM\_API\_Post\_Operations\_ApplicationHandler\_GetPages)

Retrieves all currently created pages.

 [GetView\(int\)](VM.API.Post.Operations.ApplicationHandler.GetView.md\#VM\_API\_Post\_Operations\_ApplicationHandler\_GetView\_System\_Int32\_)

Retrieves a view by its ID.

 [GetView\(string\)](VM.API.Post.Operations.ApplicationHandler.GetView.md\#VM\_API\_Post\_Operations\_ApplicationHandler\_GetView\_System\_String\_)

Retrieves a view by its name.

 [ImportNumeric\(IOperationsLine2DViewModelBase, string, List<INumericParameter\>\)](VM.API.Post.Operations.ApplicationHandler.ImportNumeric.md\#VM\_API\_Post\_Operations\_ApplicationHandler\_ImportNumeric\_VM\_Operations\_Post\_Interfaces\_IOperationsLine2DViewModelBase\_System\_String\_System\_Collections\_Generic\_List\_VM\_ViewModels\_Post\_INumericParameter\_\_)

Imports numeric data from a file.

 [RemoveDocument\(string\)](VM.API.Post.Operations.ApplicationHandler.RemoveDocument.md\#VM\_API\_Post\_Operations\_ApplicationHandler\_RemoveDocument\_System\_String\_)

Closes an open document by its file path.

 [RemoveView\(string\)](VM.API.Post.Operations.ApplicationHandler.RemoveView.md\#VM\_API\_Post\_Operations\_ApplicationHandler\_RemoveView\_System\_String\_)

Removes a view by its name.
