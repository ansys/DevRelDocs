# <a id="VM_Models_Post_DriveTrainSTFT3D"></a> Class DriveTrainSTFT3D

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public sealed class DriveTrainSTFT3D : STFT3D, IObservableObject, IDisposableObject, IObject, IHasName
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
[ObjectBase](VM.Models.Post.ObjectBase.md) ← 
[Slot](VM.Models.Post.Slot.md) ← 
[Chart](VM.Models.Post.Chart.md) ← 
[Chart3D](VM.Models.Post.Chart3D.md) ← 
[STFT3D](VM.Models.Post.STFT3D.md) ← 
[DriveTrainSTFT3D](VM.Models.Post.DriveTrainSTFT3D.md)

#### Implements

IObservableObject, 
IDisposableObject, 
[IObject](VM.Models.Post.IObject.md), 
IHasName

#### Inherited Members

[STFT3D.CreateAxis3D\(AxisDirection, Guid?, bool\)](VM.Models.Post.STFT3D.md\#VM\_Models\_Post\_STFT3D\_CreateAxis3D\_VM\_Models\_Post\_AxisDirection\_System\_Nullable\_System\_Guid\_\_System\_Boolean\_), 
[STFT3D.End](VM.Models.Post.STFT3D.md\#VM\_Models\_Post\_STFT3D\_End), 
[STFT3D.IsAutoRange](VM.Models.Post.STFT3D.md\#VM\_Models\_Post\_STFT3D\_IsAutoRange), 
[STFT3D.IsRefresh](VM.Models.Post.STFT3D.md\#VM\_Models\_Post\_STFT3D\_IsRefresh), 
[STFT3D.IsStrokeFill](VM.Models.Post.STFT3D.md\#VM\_Models\_Post\_STFT3D\_IsStrokeFill), 
[STFT3D.LegendColorType](VM.Models.Post.STFT3D.md\#VM\_Models\_Post\_STFT3D\_LegendColorType), 
[STFT3D.LegendFontColor](VM.Models.Post.STFT3D.md\#VM\_Models\_Post\_STFT3D\_LegendFontColor), 
[STFT3D.LegendFontSize](VM.Models.Post.STFT3D.md\#VM\_Models\_Post\_STFT3D\_LegendFontSize), 
[STFT3D.Max](VM.Models.Post.STFT3D.md\#VM\_Models\_Post\_STFT3D\_Max), 
[STFT3D.Min](VM.Models.Post.STFT3D.md\#VM\_Models\_Post\_STFT3D\_Min), 
[STFT3D.OriginalSeriesID](VM.Models.Post.STFT3D.md\#VM\_Models\_Post\_STFT3D\_OriginalSeriesID), 
[STFT3D.Overlap](VM.Models.Post.STFT3D.md\#VM\_Models\_Post\_STFT3D\_Overlap), 
[STFT3D.ReferenceValue](VM.Models.Post.STFT3D.md\#VM\_Models\_Post\_STFT3D\_ReferenceValue), 
[STFT3D.SamplingFrequency](VM.Models.Post.STFT3D.md\#VM\_Models\_Post\_STFT3D\_SamplingFrequency), 
[STFT3D.ScaleFactor](VM.Models.Post.STFT3D.md\#VM\_Models\_Post\_STFT3D\_ScaleFactor), 
[STFT3D.SelectedPoints](VM.Models.Post.STFT3D.md\#VM\_Models\_Post\_STFT3D\_SelectedPoints), 
[STFT3D.SelectedScaleType](VM.Models.Post.STFT3D.md\#VM\_Models\_Post\_STFT3D\_SelectedScaleType), 
[STFT3D.SourceX](VM.Models.Post.STFT3D.md\#VM\_Models\_Post\_STFT3D\_SourceX), 
[STFT3D.SourceY](VM.Models.Post.STFT3D.md\#VM\_Models\_Post\_STFT3D\_SourceY), 
[STFT3D.SourceZ](VM.Models.Post.STFT3D.md\#VM\_Models\_Post\_STFT3D\_SourceZ), 
[STFT3D.Start](VM.Models.Post.STFT3D.md\#VM\_Models\_Post\_STFT3D\_Start), 
[STFT3D.TimeSlice](VM.Models.Post.STFT3D.md\#VM\_Models\_Post\_STFT3D\_TimeSlice), 
[STFT3D.TypeForChart](VM.Models.Post.STFT3D.md\#VM\_Models\_Post\_STFT3D\_TypeForChart), 
[STFT3D.ZValue](VM.Models.Post.STFT3D.md\#VM\_Models\_Post\_STFT3D\_ZValue), 
[Chart3D.CreateHeatmapLineSeries3D\(int, string, string, ExtendedUnit, Vector\[\], double, double, float, PointType, Color, float\)](VM.Models.Post.Chart3D.md\#VM\_Models\_Post\_Chart3D\_CreateHeatmapLineSeries3D\_System\_Int32\_System\_String\_System\_String\_VM\_Models\_Post\_ExtendedUnit\_VM\_Vector\_\_\_System\_Double\_System\_Double\_System\_Single\_VM\_Models\_Post\_PointType\_System\_Drawing\_Color\_System\_Single\_), 
[Chart3D.AddAxis\(Axis\)](VM.Models.Post.Chart3D.md\#VM\_Models\_Post\_Chart3D\_AddAxis\_VM\_Models\_Post\_Axis\_), 
[Chart3D.ClearAxes\(\)](VM.Models.Post.Chart3D.md\#VM\_Models\_Post\_Chart3D\_ClearAxes), 
[Chart3D.GetAxisConnectableObservable\(AxisDirection, bool\)](VM.Models.Post.Chart3D.md\#VM\_Models\_Post\_Chart3D\_GetAxisConnectableObservable\_VM\_Models\_Post\_AxisDirection\_System\_Boolean\_), 
[Chart3D.RemoveAxis\(AxisDirection, params Guid\[\]\)](VM.Models.Post.Chart3D.md\#VM\_Models\_Post\_Chart3D\_RemoveAxis\_VM\_Models\_Post\_AxisDirection\_System\_Guid\_\_\_), 
[Chart.AddAxis\(Axis\)](VM.Models.Post.Chart.md\#VM\_Models\_Post\_Chart\_AddAxis\_VM\_Models\_Post\_Axis\_), 
[Chart.ClearAxes\(\)](VM.Models.Post.Chart.md\#VM\_Models\_Post\_Chart\_ClearAxes), 
[Chart.GetAxisConnectableObservable\(AxisDirection, bool\)](VM.Models.Post.Chart.md\#VM\_Models\_Post\_Chart\_GetAxisConnectableObservable\_VM\_Models\_Post\_AxisDirection\_System\_Boolean\_), 
[Chart.Initialize\(Action\)](VM.Models.Post.Chart.md\#VM\_Models\_Post\_Chart\_Initialize\_System\_Action\_), 
[Chart.RemoveAxis\(AxisDirection, params Guid\[\]\)](VM.Models.Post.Chart.md\#VM\_Models\_Post\_Chart\_RemoveAxis\_VM\_Models\_Post\_AxisDirection\_System\_Guid\_\_\_), 
[Chart.Background](VM.Models.Post.Chart.md\#VM\_Models\_Post\_Chart\_Background), 
[Chart.BorderColor](VM.Models.Post.Chart.md\#VM\_Models\_Post\_Chart\_BorderColor), 
[Chart.ChartAxisType](VM.Models.Post.Chart.md\#VM\_Models\_Post\_Chart\_ChartAxisType), 
[Chart.ChartTitle](VM.Models.Post.Chart.md\#VM\_Models\_Post\_Chart\_ChartTitle), 
[Chart.Decimal](VM.Models.Post.Chart.md\#VM\_Models\_Post\_Chart\_Decimal), 
[Chart.Default](VM.Models.Post.Chart.md\#VM\_Models\_Post\_Chart\_Default), 
[Chart.FontColor](VM.Models.Post.Chart.md\#VM\_Models\_Post\_Chart\_FontColor), 
[Chart.FontFace](VM.Models.Post.Chart.md\#VM\_Models\_Post\_Chart\_FontFace), 
[Chart.FontSize](VM.Models.Post.Chart.md\#VM\_Models\_Post\_Chart\_FontSize), 
[Chart.FontStyle](VM.Models.Post.Chart.md\#VM\_Models\_Post\_Chart\_FontStyle), 
[Chart.FontWeight](VM.Models.Post.Chart.md\#VM\_Models\_Post\_Chart\_FontWeight), 
[Chart.IsXUnitSplit](VM.Models.Post.Chart.md\#VM\_Models\_Post\_Chart\_IsXUnitSplit), 
[Chart.IsYUnitSplit](VM.Models.Post.Chart.md\#VM\_Models\_Post\_Chart\_IsYUnitSplit), 
[Chart.LabelFormatType](VM.Models.Post.Chart.md\#VM\_Models\_Post\_Chart\_LabelFormatType), 
[Chart.LegendModifier](VM.Models.Post.Chart.md\#VM\_Models\_Post\_Chart\_LegendModifier), 
[Chart.NeedInitialize](VM.Models.Post.Chart.md\#VM\_Models\_Post\_Chart\_NeedInitialize), 
[Chart.TextFormatting](VM.Models.Post.Chart.md\#VM\_Models\_Post\_Chart\_TextFormatting), 
[Chart.Theme](VM.Models.Post.Chart.md\#VM\_Models\_Post\_Chart\_Theme), 
[Chart.Type](VM.Models.Post.Chart.md\#VM\_Models\_Post\_Chart\_Type), 
[Chart.TypeForChart](VM.Models.Post.Chart.md\#VM\_Models\_Post\_Chart\_TypeForChart), 
[Chart.XAxisGridLineColor](VM.Models.Post.Chart.md\#VM\_Models\_Post\_Chart\_XAxisGridLineColor), 
[Chart.XAxisGridLineStyle](VM.Models.Post.Chart.md\#VM\_Models\_Post\_Chart\_XAxisGridLineStyle), 
[Chart.XAxisGridLineWidth](VM.Models.Post.Chart.md\#VM\_Models\_Post\_Chart\_XAxisGridLineWidth), 
[Chart.YAxisGridLineColor](VM.Models.Post.Chart.md\#VM\_Models\_Post\_Chart\_YAxisGridLineColor), 
[Chart.YAxisGridLineStyle](VM.Models.Post.Chart.md\#VM\_Models\_Post\_Chart\_YAxisGridLineStyle), 
[Chart.YAxisGridLineWidth](VM.Models.Post.Chart.md\#VM\_Models\_Post\_Chart\_YAxisGridLineWidth), 
[Slot.Activate\(\)](VM.Models.Post.Slot.md\#VM\_Models\_Post\_Slot\_Activate), 
[Slot.GetParentGroup\(\)](VM.Models.Post.Slot.md\#VM\_Models\_Post\_Slot\_GetParentGroup), 
[Slot.Inactivate\(\)](VM.Models.Post.Slot.md\#VM\_Models\_Post\_Slot\_Inactivate), 
[Slot.GroupID](VM.Models.Post.Slot.md\#VM\_Models\_Post\_Slot\_GroupID), 
[Slot.ID](VM.Models.Post.Slot.md\#VM\_Models\_Post\_Slot\_ID), 
[Slot.IsActive](VM.Models.Post.Slot.md\#VM\_Models\_Post\_Slot\_IsActive), 
[Slot.ParentDocument](VM.Models.Post.Slot.md\#VM\_Models\_Post\_Slot\_ParentDocument), 
[Slot.ResultDocumentFilePath](VM.Models.Post.Slot.md\#VM\_Models\_Post\_Slot\_ResultDocumentFilePath), 
[Slot.Type](VM.Models.Post.Slot.md\#VM\_Models\_Post\_Slot\_Type), 
[ObjectBase.GetUnstructGridModel\(\)](VM.Models.Post.ObjectBase.md\#VM\_Models\_Post\_ObjectBase\_GetUnstructGridModel), 
[ObjectBase.SetName\(string\)](VM.Models.Post.ObjectBase.md\#VM\_Models\_Post\_ObjectBase\_SetName\_System\_String\_), 
[ObjectBase.UpdateAnimation\(UpdateActionType\)](VM.Models.Post.ObjectBase.md\#VM\_Models\_Post\_ObjectBase\_UpdateAnimation\_VM\_Models\_Post\_UpdateActionType\_), 
[ObjectBase.AnalysisResult](VM.Models.Post.ObjectBase.md\#VM\_Models\_Post\_ObjectBase\_AnalysisResult), 
[ObjectBase.AnalysisResultID](VM.Models.Post.ObjectBase.md\#VM\_Models\_Post\_ObjectBase\_AnalysisResultID), 
[ObjectBase.AnalysisResultType](VM.Models.Post.ObjectBase.md\#VM\_Models\_Post\_ObjectBase\_AnalysisResultType), 
[ObjectBase.DisplayName](VM.Models.Post.ObjectBase.md\#VM\_Models\_Post\_ObjectBase\_DisplayName), 
[ObjectBase.FullName](VM.Models.Post.ObjectBase.md\#VM\_Models\_Post\_ObjectBase\_FullName), 
[ObjectBase.Name](VM.Models.Post.ObjectBase.md\#VM\_Models\_Post\_ObjectBase\_Name), 
[ObjectBase.ParentDocument](VM.Models.Post.ObjectBase.md\#VM\_Models\_Post\_ObjectBase\_ParentDocument), 
ObservableObject.Dispose\(\), 
ObservableObject.RaisePropertyChanged\(string\), 
ObservableObject.RaisePropertyChanged\(string, object, object\), 
ObservableObject.IsDisposed, 
ObservableObject.TryDisposing, 
ObservableObject.Disposed, 
ObservableObject.Disposing, 
ObservableObject.PropertyChanged

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Models_Post_DriveTrainSTFT3D_SelectedObject"></a> SelectedObject

```csharp
[SaveProperty(false)]
public IPathComboBoxItem SelectedObject { get; set; }
```

#### Property Value

 [IPathComboBoxItem](VM.Models.Post.IPathComboBoxItem.md)

### <a id="VM_Models_Post_DriveTrainSTFT3D_SelectedResult"></a> SelectedResult

```csharp
[SaveProperty(false)]
public ITooltipComboBoxItem SelectedResult { get; set; }
```

#### Property Value

 [ITooltipComboBoxItem](VM.Models.Post.ITooltipComboBoxItem.md)

### <a id="VM_Models_Post_DriveTrainSTFT3D_SelectionObject"></a> SelectionObject

```csharp
[SaveProperty(false)]
public string SelectionObject { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_DriveTrainSTFT3D_TypeForChart"></a> TypeForChart

```csharp
[SaveProperty(false)]
public override TypeForChart TypeForChart { get; }
```

#### Property Value

 [TypeForChart](VM.Models.Post.TypeForChart.md)

