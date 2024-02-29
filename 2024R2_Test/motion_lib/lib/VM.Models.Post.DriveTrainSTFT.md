# <a id="VM_Models_Post_DriveTrainSTFT"></a> Class DriveTrainSTFT

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public sealed class DriveTrainSTFT : HeatMapSTFT, IObservableObject, IDisposableObject, IObject, IHasName
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
[ObjectBase](VM.Models.Post.ObjectBase.md) ← 
[Slot](VM.Models.Post.Slot.md) ← 
[Chart](VM.Models.Post.Chart.md) ← 
[HeatMapSTFT](VM.Models.Post.HeatMapSTFT.md) ← 
[DriveTrainSTFT](VM.Models.Post.DriveTrainSTFT.md)

#### Implements

IObservableObject, 
IDisposableObject, 
[IObject](VM.Models.Post.IObject.md), 
IHasName

#### Inherited Members

[HeatMapSTFT.IsWaterfallType](VM.Models.Post.HeatMapSTFT.md\#VM\_Models\_Post\_HeatMapSTFT\_IsWaterfallType), 
[HeatMapSTFT.STFT2D](VM.Models.Post.HeatMapSTFT.md\#VM\_Models\_Post\_HeatMapSTFT\_STFT2D), 
[HeatMapSTFT.STFT3D](VM.Models.Post.HeatMapSTFT.md\#VM\_Models\_Post\_HeatMapSTFT\_STFT3D), 
[HeatMapSTFT.TypeForChart](VM.Models.Post.HeatMapSTFT.md\#VM\_Models\_Post\_HeatMapSTFT\_TypeForChart), 
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

### <a id="VM_Models_Post_DriveTrainSTFT_TypeForChart"></a> TypeForChart

```csharp
[SaveProperty(false)]
public override TypeForChart TypeForChart { get; }
```

#### Property Value

 [TypeForChart](VM.Models.Post.TypeForChart.md)

