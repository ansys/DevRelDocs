# <a id="VM_Models_Post_STFT3D"></a> Class STFT3D

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public class STFT3D : Chart3D, IObservableObject, IDisposableObject, IObject, IHasName
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
[ObjectBase](VM.Models.Post.ObjectBase.md) ← 
[Slot](VM.Models.Post.Slot.md) ← 
[Chart](VM.Models.Post.Chart.md) ← 
[Chart3D](VM.Models.Post.Chart3D.md) ← 
[STFT3D](VM.Models.Post.STFT3D.md)

#### Derived

[DriveTrainSTFT3D](VM.Models.Post.DriveTrainSTFT3D.md)

#### Implements

IObservableObject, 
IDisposableObject, 
[IObject](VM.Models.Post.IObject.md), 
IHasName

#### Inherited Members

[Chart3D.CreateHeatmapLineSeries3D\(int, string, string, ExtendedUnit, Vector\[\], double, double, float, PointType, Color, float\)](VM.Models.Post.Chart3D.md\#VM\_Models\_Post\_Chart3D\_CreateHeatmapLineSeries3D\_System\_Int32\_System\_String\_System\_String\_VM\_Models\_Post\_ExtendedUnit\_VM\_Vector\_\_\_System\_Double\_System\_Double\_System\_Single\_VM\_Models\_Post\_PointType\_System\_Drawing\_Color\_System\_Single\_), 
[Chart3D.AddAxis\(Axis\)](VM.Models.Post.Chart3D.md\#VM\_Models\_Post\_Chart3D\_AddAxis\_VM\_Models\_Post\_Axis\_), 
[Chart3D.ClearAxes\(\)](VM.Models.Post.Chart3D.md\#VM\_Models\_Post\_Chart3D\_ClearAxes), 
[Chart3D.GetAxisConnectableObservable\(AxisDirection, bool\)](VM.Models.Post.Chart3D.md\#VM\_Models\_Post\_Chart3D\_GetAxisConnectableObservable\_VM\_Models\_Post\_AxisDirection\_System\_Boolean\_), 
[Chart3D.RemoveAxis\(AxisDirection, params Guid\[\]\)](VM.Models.Post.Chart3D.md\#VM\_Models\_Post\_Chart3D\_RemoveAxis\_VM\_Models\_Post\_AxisDirection\_System\_Guid\_\_\_), 
[Chart3D.DisposeManagedResources\(\)](VM.Models.Post.Chart3D.md\#VM\_Models\_Post\_Chart3D\_DisposeManagedResources), 
[Chart.AddAxis\(Axis\)](VM.Models.Post.Chart.md\#VM\_Models\_Post\_Chart\_AddAxis\_VM\_Models\_Post\_Axis\_), 
[Chart.ClearAxes\(\)](VM.Models.Post.Chart.md\#VM\_Models\_Post\_Chart\_ClearAxes), 
[Chart.GetAxisConnectableObservable\(AxisDirection, bool\)](VM.Models.Post.Chart.md\#VM\_Models\_Post\_Chart\_GetAxisConnectableObservable\_VM\_Models\_Post\_AxisDirection\_System\_Boolean\_), 
[Chart.Initialize\(Action\)](VM.Models.Post.Chart.md\#VM\_Models\_Post\_Chart\_Initialize\_System\_Action\_), 
[Chart.RemoveAxis\(AxisDirection, params Guid\[\]\)](VM.Models.Post.Chart.md\#VM\_Models\_Post\_Chart\_RemoveAxis\_VM\_Models\_Post\_AxisDirection\_System\_Guid\_\_\_), 
[Chart.DisposeManagedResources\(\)](VM.Models.Post.Chart.md\#VM\_Models\_Post\_Chart\_DisposeManagedResources), 
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
[Slot.DisposeManagedResources\(\)](VM.Models.Post.Slot.md\#VM\_Models\_Post\_Slot\_DisposeManagedResources), 
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
[ObjectBase.CanLoad](VM.Models.Post.ObjectBase.md\#VM\_Models\_Post\_ObjectBase\_CanLoad), 
[ObjectBase.CanSave](VM.Models.Post.ObjectBase.md\#VM\_Models\_Post\_ObjectBase\_CanSave), 
ObservableObject.Dispose\(\), 
ObservableObject.RaisePropertyChanged\(string\), 
ObservableObject.RaisePropertyChanged\(string, object, object\), 
ObservableObject.Dispose\(bool\), 
ObservableObject.DisposeManagedResources\(\), 
ObservableObject.DisposeUnmanagedResources\(\), 
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

### <a id="VM_Models_Post_STFT3D_End"></a> End

```csharp
[SaveProperty(false)]
public double End { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_STFT3D_IsAutoRange"></a> IsAutoRange

```csharp
[SaveProperty(false)]
public bool IsAutoRange { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_STFT3D_IsRefresh"></a> IsRefresh

```csharp
[SaveProperty(false)]
public virtual bool IsRefresh { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_STFT3D_IsStrokeFill"></a> IsStrokeFill

```csharp
[SaveProperty(false)]
public bool IsStrokeFill { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_STFT3D_LegendColorType"></a> LegendColorType

```csharp
[SaveProperty(false)]
public ColorSchemeType LegendColorType { get; set; }
```

#### Property Value

 [ColorSchemeType](VM.Models.Post.ColorSchemeType.md)

### <a id="VM_Models_Post_STFT3D_LegendFontColor"></a> LegendFontColor

```csharp
[SaveProperty(false)]
public Color LegendFontColor { get; set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)

### <a id="VM_Models_Post_STFT3D_LegendFontSize"></a> LegendFontSize

```csharp
[SaveProperty(false)]
public double LegendFontSize { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_STFT3D_Max"></a> Max

```csharp
[SaveProperty(false)]
public double Max { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_STFT3D_Min"></a> Min

```csharp
[SaveProperty(false)]
public double Min { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_STFT3D_OriginalSeriesID"></a> OriginalSeriesID

```csharp
[SaveProperty(false)]
public string OriginalSeriesID { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_STFT3D_Overlap"></a> Overlap

```csharp
[SaveProperty(false)]
public double Overlap { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_STFT3D_ReferenceValue"></a> ReferenceValue

```csharp
[SaveProperty(false)]
public double ReferenceValue { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_STFT3D_SamplingFrequency"></a> SamplingFrequency

```csharp
[SaveProperty(false)]
public int SamplingFrequency { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_STFT3D_ScaleFactor"></a> ScaleFactor

```csharp
[SaveProperty(false)]
public double ScaleFactor { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_STFT3D_SelectedPoints"></a> SelectedPoints

```csharp
[SaveProperty(false)]
public int SelectedPoints { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_STFT3D_SelectedScaleType"></a> SelectedScaleType

```csharp
[SaveProperty(false)]
public STFTScaleType SelectedScaleType { get; set; }
```

#### Property Value

 [STFTScaleType](VM.Models.Post.STFTScaleType.md)

### <a id="VM_Models_Post_STFT3D_SourceX"></a> SourceX

```csharp
[SaveProperty(false)]
public IList<double> SourceX { get; set; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### <a id="VM_Models_Post_STFT3D_SourceY"></a> SourceY

```csharp
[SaveProperty(false)]
public IList<double> SourceY { get; set; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### <a id="VM_Models_Post_STFT3D_SourceZ"></a> SourceZ

```csharp
[SaveProperty(false)]
public IList<double> SourceZ { get; set; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### <a id="VM_Models_Post_STFT3D_Start"></a> Start

```csharp
[SaveProperty(false)]
public double Start { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_STFT3D_TimeSlice"></a> TimeSlice

```csharp
[SaveProperty(false)]
public double TimeSlice { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_STFT3D_TypeForChart"></a> TypeForChart

```csharp
[SaveProperty(false)]
public override TypeForChart TypeForChart { get; }
```

#### Property Value

 [TypeForChart](VM.Models.Post.TypeForChart.md)

### <a id="VM_Models_Post_STFT3D_ZValue"></a> ZValue

```csharp
[SaveProperty(false)]
public double[] ZValue { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

## Methods

### <a id="VM_Models_Post_STFT3D_CreateAxis3D_VM_Models_Post_AxisDirection_System_Nullable_System_Guid__System_Boolean_"></a> CreateAxis3D\(AxisDirection, Guid?, bool\)

```csharp
public Axis3D CreateAxis3D(AxisDirection axisDirection, Guid? id = null, bool addAfterCreate = true)
```

#### Parameters

`axisDirection` [AxisDirection](VM.Models.Post.AxisDirection.md)

`id` [Guid](https://learn.microsoft.com/dotnet/api/system.guid)?

`addAfterCreate` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [Axis3D](VM.Models.Post.Axis3D.md)

