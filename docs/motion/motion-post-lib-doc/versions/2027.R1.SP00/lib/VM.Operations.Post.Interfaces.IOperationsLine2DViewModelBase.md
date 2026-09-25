# Interface IOperationsLine2DViewModelBase
<a id="VM_Operations_Post_Interfaces_IOperationsLine2DViewModelBase"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

Provides chart appearance, curve management, lookup, and export operations shared by 2D chart views.

```csharp
public interface IOperationsLine2DViewModelBase : IOperationsChartViewModel, IView, IHasGuid
```

## Properties

 [Background](VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.Background.md\#VM\_Operations\_Post\_Interfaces\_IOperationsLine2DViewModelBase\_Background)

Gets or sets `Color` used for the chart background.

 [BorderColor](VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.BorderColor.md\#VM\_Operations\_Post\_Interfaces\_IOperationsLine2DViewModelBase\_BorderColor)

Gets or sets `Color` used for the chart border.

 [ChartAxisType](VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.ChartAxisType.md\#VM\_Operations\_Post\_Interfaces\_IOperationsLine2DViewModelBase\_ChartAxisType)

Gets or sets [`ChartAxisType`](VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.ChartAxisType.md) used to display a single or multiple chart axis.

 [ChartTitle](VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.ChartTitle.md\#VM\_Operations\_Post\_Interfaces\_IOperationsLine2DViewModelBase\_ChartTitle)

Gets or sets the chart title. The default value is an empty string.

 [FontColor](VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.FontColor.md\#VM\_Operations\_Post\_Interfaces\_IOperationsLine2DViewModelBase\_FontColor)

Gets or sets `Color` used for the chart title.

 [FontFace](VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.FontFace.md\#VM\_Operations\_Post\_Interfaces\_IOperationsLine2DViewModelBase\_FontFace)

Gets or sets `FontFamily` used for the chart title.

 [FontSize](VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.FontSize.md\#VM\_Operations\_Post\_Interfaces\_IOperationsLine2DViewModelBase\_FontSize)

Gets or sets the font size used for the chart title.

 [FontStyle](VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.FontStyle.md\#VM\_Operations\_Post\_Interfaces\_IOperationsLine2DViewModelBase\_FontStyle)

Gets or sets the font style used for the chart title.

 [FontWeight](VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.FontWeight.md\#VM\_Operations\_Post\_Interfaces\_IOperationsLine2DViewModelBase\_FontWeight)

Gets or sets the font weight used for the chart title.

## Methods

 [AddCurves\(string, PlotParameters\)](VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.AddCurves.md\#VM\_Operations\_Post\_Interfaces\_IOperationsLine2DViewModelBase\_AddCurves\_System\_String\_VM\_Models\_OutputReader\_PlotParameters\_)

Adds curves to the chart by reading data from the specified file path and using [`PlotParameters`](VM.Models.OutputReader.PlotParameters.md). For details about preparing target values, see [Getting Started](../document/operation-api/getting-started/getting_started_operation_api_using_py.md#how-to-input-the-value-of-the-target-into-the-function-parameter).

 [ExportAllCurves\(string\)](VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.ExportAllCurves.md\#VM\_Operations\_Post\_Interfaces\_IOperationsLine2DViewModelBase\_ExportAllCurves\_System\_String\_)

Exports all curves contained in the chart to the specified file path without displaying a file save dialog.

 [ExportAllDataSeries\(\)](VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.ExportAllDataSeries.md\#VM\_Operations\_Post\_Interfaces\_IOperationsLine2DViewModelBase\_ExportAllDataSeries)

Exports all curves included in the chart.

 [GetAxis\(string\)](VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.GetAxis.md\#VM\_Operations\_Post\_Interfaces\_IOperationsLine2DViewModelBase\_GetAxis\_System\_String\_)

Retrieves an axis by its name.

 [GetCurve\(string\)](VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.GetCurve.md\#VM\_Operations\_Post\_Interfaces\_IOperationsLine2DViewModelBase\_GetCurve\_System\_String\_)

Gets a curve from the chart by its name.

 [GetCurveByID\(string\)](VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.GetCurveByID.md\#VM\_Operations\_Post\_Interfaces\_IOperationsLine2DViewModelBase\_GetCurveByID\_System\_String\_)

Gets a curve from the chart by its ID.

 [GetCurveNameList\(\)](VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.GetCurveNameList.md\#VM\_Operations\_Post\_Interfaces\_IOperationsLine2DViewModelBase\_GetCurveNameList)

Gets a list of names of all curves in the chart view.

 [GetCurves\(\)](VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.GetCurves.md\#VM\_Operations\_Post\_Interfaces\_IOperationsLine2DViewModelBase\_GetCurves)

Gets all the curves currently included in the chart view.

 [GetCurves\(string\)](VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.GetCurves.md\#VM\_Operations\_Post\_Interfaces\_IOperationsLine2DViewModelBase\_GetCurves\_System\_String\_)

Gets all curves from the chart view that contain the specified substring in their names.

 [GetLastCurve\(\)](VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.GetLastCurve.md\#VM\_Operations\_Post\_Interfaces\_IOperationsLine2DViewModelBase\_GetLastCurve)

Gets the most recently added curve from the chart view.

 [Remove\(string\)](VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.Remove.md\#VM\_Operations\_Post\_Interfaces\_IOperationsLine2DViewModelBase\_Remove\_System\_String\_)

Removes a curve from the chart by its id.

 [Remove\(IOperationsLineDataSeriesViewModelBase\)](VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.Remove.md\#VM\_Operations\_Post\_Interfaces\_IOperationsLine2DViewModelBase\_Remove\_VM\_Operations\_Post\_Interfaces\_IOperationsLineDataSeriesViewModelBase\_)

Removes a curve from the chart by its curve object.
