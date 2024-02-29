# <a id="VM_Models_Post_HeatMap2D"></a> Class HeatMap2D

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public abstract class HeatMap2D : Chart2D, IObservableObject, IDisposableObject, IObject, IHasName
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
[ObjectBase](VM.Models.Post.ObjectBase.md) ← 
[Slot](VM.Models.Post.Slot.md) ← 
[Chart](VM.Models.Post.Chart.md) ← 
[Chart2D](VM.Models.Post.Chart2D.md) ← 
[HeatMap2D](VM.Models.Post.HeatMap2D.md)

#### Derived

[ModeContribution2D](VM.Models.Post.ModeContribution2D.md), 
[STFT2D](VM.Models.Post.STFT2D.md), 
[ToothContact](VM.Models.Post.ToothContact.md)

#### Implements

IObservableObject, 
IDisposableObject, 
[IObject](VM.Models.Post.IObject.md), 
IHasName

#### Inherited Members

[Chart2D.CreateCalculusLineSeries\(int, string, string, string, ExtendedUnit, Point2D\[\], CalculusType, string, string, bool\)](VM.Models.Post.Chart2D.md\#VM\_Models\_Post\_Chart2D\_CreateCalculusLineSeries\_System\_Int32\_System\_String\_System\_String\_System\_String\_VM\_Models\_Post\_ExtendedUnit\_VM\_Point2D\_\_\_VM\_Models\_Post\_CalculusType\_System\_String\_System\_String\_System\_Boolean\_), 
[Chart2D.CreateDynamicPPTELineSeries\(int, string, string, ExtendedUnit, string, Point2D\[\], string, string, int, double, bool\)](VM.Models.Post.Chart2D.md\#VM\_Models\_Post\_Chart2D\_CreateDynamicPPTELineSeries\_System\_Int32\_System\_String\_System\_String\_VM\_Models\_Post\_ExtendedUnit\_System\_String\_VM\_Point2D\_\_\_System\_String\_System\_String\_System\_Int32\_System\_Double\_System\_Boolean\_), 
[Chart2D.CreateFFTLineSeries\(int, string, string, string, ExtendedUnit, Point2D\[\], double, double, ScaleType, FFTType, FFTWindowType, int, string, string, bool\)](VM.Models.Post.Chart2D.md\#VM\_Models\_Post\_Chart2D\_CreateFFTLineSeries\_System\_Int32\_System\_String\_System\_String\_System\_String\_VM\_Models\_Post\_ExtendedUnit\_VM\_Point2D\_\_\_System\_Double\_System\_Double\_VM\_Models\_Post\_ScaleType\_VM\_Models\_Post\_FFTType\_VM\_Models\_Post\_FFTWindowType\_System\_Int32\_System\_String\_System\_String\_System\_Boolean\_), 
[Chart2D.CreateFiltering\(int, string, string, string, ExtendedUnit, Point2D\[\], double, FilteringType, double, double, int, string, string, bool\)](VM.Models.Post.Chart2D.md\#VM\_Models\_Post\_Chart2D\_CreateFiltering\_System\_Int32\_System\_String\_System\_String\_System\_String\_VM\_Models\_Post\_ExtendedUnit\_VM\_Point2D\_\_\_System\_Double\_VM\_Models\_Post\_FilteringType\_System\_Double\_System\_Double\_System\_Int32\_System\_String\_System\_String\_System\_Boolean\_), 
[Chart2D.CreateFrequencyResponseLineSeries\(int, string, string, ExtendedUnit, string, Point2D\[\], double, double, double, uint, string\[\], string, int, bool\)](VM.Models.Post.Chart2D.md\#VM\_Models\_Post\_Chart2D\_CreateFrequencyResponseLineSeries\_System\_Int32\_System\_String\_System\_String\_VM\_Models\_Post\_ExtendedUnit\_System\_String\_VM\_Point2D\_\_\_System\_Double\_System\_Double\_System\_Double\_System\_UInt32\_System\_String\_\_\_System\_String\_System\_Int32\_System\_Boolean\_), 
[Chart2D.CreateFrequencySequenceLineSeries\(int, string, string, ExtendedUnit, string, Point2D\[\], IEntity, string, string, bool\)](VM.Models.Post.Chart2D.md\#VM\_Models\_Post\_Chart2D\_CreateFrequencySequenceLineSeries\_System\_Int32\_System\_String\_System\_String\_VM\_Models\_Post\_ExtendedUnit\_System\_String\_VM\_Point2D\_\_\_VM\_Models\_Post\_IEntity\_System\_String\_System\_String\_System\_Boolean\_), 
[Chart2D.CreateFrequencyTimeLineSeries\(int, string, string, ExtendedUnit, string, Point2D\[\], FrequencyTime, string, string, bool\)](VM.Models.Post.Chart2D.md\#VM\_Models\_Post\_Chart2D\_CreateFrequencyTimeLineSeries\_System\_Int32\_System\_String\_System\_String\_VM\_Models\_Post\_ExtendedUnit\_System\_String\_VM\_Point2D\_\_\_VM\_Models\_Post\_FrequencyTime\_System\_String\_System\_String\_System\_Boolean\_), 
[Chart2D.CreateFrequencyWeighting\(int, string, string, string, ExtendedUnit, Point2D\[\], FrequencyAxisType, WeightingType, string, string, bool\)](VM.Models.Post.Chart2D.md\#VM\_Models\_Post\_Chart2D\_CreateFrequencyWeighting\_System\_Int32\_System\_String\_System\_String\_System\_String\_VM\_Models\_Post\_ExtendedUnit\_VM\_Point2D\_\_\_VM\_Models\_Post\_FrequencyAxisType\_VM\_Models\_Post\_WeightingType\_System\_String\_System\_String\_System\_Boolean\_), 
[Chart2D.CreateHarmonicTELineSeries\(int, string, string, ExtendedUnit, string, Point2D\[\], string, FFTType, ScaleType, int, double, double, string, bool\)](VM.Models.Post.Chart2D.md\#VM\_Models\_Post\_Chart2D\_CreateHarmonicTELineSeries\_System\_Int32\_System\_String\_System\_String\_VM\_Models\_Post\_ExtendedUnit\_System\_String\_VM\_Point2D\_\_\_System\_String\_VM\_Models\_Post\_FFTType\_VM\_Models\_Post\_ScaleType\_System\_Int32\_System\_Double\_System\_Double\_System\_String\_System\_Boolean\_), 
[Chart2D.CreateInterpolationLineSeries\(int, string, string, string, ExtendedUnit, Point2D\[\], int, string, string, bool\)](VM.Models.Post.Chart2D.md\#VM\_Models\_Post\_Chart2D\_CreateInterpolationLineSeries\_System\_Int32\_System\_String\_System\_String\_System\_String\_VM\_Models\_Post\_ExtendedUnit\_VM\_Point2D\_\_\_System\_Int32\_System\_String\_System\_String\_System\_Boolean\_), 
[Chart2D.CreateLineSeries\(int, string, string, ExtendedUnit, string, Point2D\[\], IEntity, PlotDataType, string, string, UserDefinedAxisDataSet, UserDefinedAxisDataSet, bool\)](VM.Models.Post.Chart2D.md\#VM\_Models\_Post\_Chart2D\_CreateLineSeries\_System\_Int32\_System\_String\_System\_String\_VM\_Models\_Post\_ExtendedUnit\_System\_String\_VM\_Point2D\_\_\_VM\_Models\_Post\_IEntity\_VM\_Models\_PlotDataType\_System\_String\_System\_String\_VM\_Models\_Post\_UserDefinedAxisDataSet\_VM\_Models\_Post\_UserDefinedAxisDataSet\_System\_Boolean\_), 
[Chart2D.CreateNumericLineSeries\(int, string, string, string, string, string, bool\)](VM.Models.Post.Chart2D.md\#VM\_Models\_Post\_Chart2D\_CreateNumericLineSeries\_System\_Int32\_System\_String\_System\_String\_System\_String\_System\_String\_System\_String\_System\_Boolean\_), 
[Chart2D.CreateNumericLineSeries\(int, string, string, Point2D\[\], string, string, string, bool\)](VM.Models.Post.Chart2D.md\#VM\_Models\_Post\_Chart2D\_CreateNumericLineSeries\_System\_Int32\_System\_String\_System\_String\_VM\_Point2D\_\_\_System\_String\_System\_String\_System\_String\_System\_Boolean\_), 
[Chart2D.CreateShuttlingForceLineDataSeries\(int, string, string, ExtendedUnit, string, Point2D\[\], string, string, int, double, bool\)](VM.Models.Post.Chart2D.md\#VM\_Models\_Post\_Chart2D\_CreateShuttlingForceLineDataSeries\_System\_Int32\_System\_String\_System\_String\_VM\_Models\_Post\_ExtendedUnit\_System\_String\_VM\_Point2D\_\_\_System\_String\_System\_String\_System\_Int32\_System\_Double\_System\_Boolean\_), 
[Chart2D.CreateSignalProcessingLineSeries\(int, string, string, string, ExtendedUnit, Point2D\[\], bool\)](VM.Models.Post.Chart2D.md\#VM\_Models\_Post\_Chart2D\_CreateSignalProcessingLineSeries\_System\_Int32\_System\_String\_System\_String\_System\_String\_VM\_Models\_Post\_ExtendedUnit\_VM\_Point2D\_\_\_System\_Boolean\_), 
[Chart2D.CreateSimpleMathLineSeries\(int, string, string, ExtendedUnit, Point2D\[\], string, string, SimpleMathType, int, string, string, bool\)](VM.Models.Post.Chart2D.md\#VM\_Models\_Post\_Chart2D\_CreateSimpleMathLineSeries\_System\_Int32\_System\_String\_System\_String\_VM\_Models\_Post\_ExtendedUnit\_VM\_Point2D\_\_\_System\_String\_System\_String\_VM\_Models\_Post\_SimpleMathType\_System\_Int32\_System\_String\_System\_String\_System\_Boolean\_), 
[Chart2D.CreateSmoothing\(int, string, string, string, ExtendedUnit, Point2D\[\], int, int, SmoothingType, string, string, bool\)](VM.Models.Post.Chart2D.md\#VM\_Models\_Post\_Chart2D\_CreateSmoothing\_System\_Int32\_System\_String\_System\_String\_System\_String\_VM\_Models\_Post\_ExtendedUnit\_VM\_Point2D\_\_\_System\_Int32\_System\_Int32\_VM\_Models\_Post\_SmoothingType\_System\_String\_System\_String\_System\_Boolean\_), 
[Chart2D.CreateSoundPressureLevelLineSeries\(int, string, string, ExtendedUnit, string, Point2D\[\], string, string, bool\)](VM.Models.Post.Chart2D.md\#VM\_Models\_Post\_Chart2D\_CreateSoundPressureLevelLineSeries\_System\_Int32\_System\_String\_System\_String\_VM\_Models\_Post\_ExtendedUnit\_System\_String\_VM\_Point2D\_\_\_System\_String\_System\_String\_System\_Boolean\_), 
[Chart2D.CreateStorageLineSeries\(int, string, string, ExtendedUnit, Point2D\[\], string, string, bool\)](VM.Models.Post.Chart2D.md\#VM\_Models\_Post\_Chart2D\_CreateStorageLineSeries\_System\_Int32\_System\_String\_System\_String\_VM\_Models\_Post\_ExtendedUnit\_VM\_Point2D\_\_\_System\_String\_System\_String\_System\_Boolean\_), 
[Chart2D.CreateTransformLineSeries\(int, string, string, string, string, ExtendedUnit, Point2D\[\], TransformType, string, string, bool\)](VM.Models.Post.Chart2D.md\#VM\_Models\_Post\_Chart2D\_CreateTransformLineSeries\_System\_Int32\_System\_String\_System\_String\_System\_String\_System\_String\_VM\_Models\_Post\_ExtendedUnit\_VM\_Point2D\_\_\_VM\_Models\_Post\_TransformType\_System\_String\_System\_String\_System\_Boolean\_), 
[Chart2D.CreateTransformLineSeries\(int, string, string, string, ExtendedUnit, Point2D\[\], TransformType, string, string, bool\)](VM.Models.Post.Chart2D.md\#VM\_Models\_Post\_Chart2D\_CreateTransformLineSeries\_System\_Int32\_System\_String\_System\_String\_System\_String\_VM\_Models\_Post\_ExtendedUnit\_VM\_Point2D\_\_\_VM\_Models\_Post\_TransformType\_System\_String\_System\_String\_System\_Boolean\_), 
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

## Constructors

### <a id="VM_Models_Post_HeatMap2D__ctor_System_Nullable_System_Int32__System_String_"></a> HeatMap2D\(int?, string\)

```csharp
protected HeatMap2D(int? id, string fullName)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_HeatMap2D__ctor_VM_Identifier_System_Nullable_System_Int32__System_String_"></a> HeatMap2D\(Identifier, int?, string\)

```csharp
protected HeatMap2D(Identifier parentDocumentID, int? id, string fullName)
```

#### Parameters

`parentDocumentID` Identifier

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### <a id="VM_Models_Post_HeatMap2D_IsAutoRange"></a> IsAutoRange

```csharp
[SaveProperty(false)]
public bool IsAutoRange { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_HeatMap2D_IsRefresh"></a> IsRefresh

```csharp
[SaveProperty(false)]
public virtual bool IsRefresh { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_HeatMap2D_LegendFontColor"></a> LegendFontColor

```csharp
[SaveProperty(false)]
public Color LegendFontColor { get; set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)

### <a id="VM_Models_Post_HeatMap2D_LegendFontSize"></a> LegendFontSize

```csharp
[SaveProperty(false)]
public double LegendFontSize { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_HeatMap2D_Max"></a> Max

```csharp
[SaveProperty(false)]
public double Max { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_HeatMap2D_Min"></a> Min

```csharp
[SaveProperty(false)]
public double Min { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_HeatMap2D_SourceX"></a> SourceX

```csharp
[SaveProperty(false)]
public IList<double> SourceX { get; set; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### <a id="VM_Models_Post_HeatMap2D_SourceY"></a> SourceY

```csharp
[SaveProperty(false)]
public IList<double> SourceY { get; set; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### <a id="VM_Models_Post_HeatMap2D_SourceZ"></a> SourceZ

```csharp
[SaveProperty(false)]
public IList<double> SourceZ { get; set; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### <a id="VM_Models_Post_HeatMap2D_TypeForChart"></a> TypeForChart

```csharp
public override TypeForChart TypeForChart { get; }
```

#### Property Value

 [TypeForChart](VM.Models.Post.TypeForChart.md)

### <a id="VM_Models_Post_HeatMap2D_ZValue"></a> ZValue

```csharp
[SaveProperty(false)]
public double[] ZValue { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

## Methods

### <a id="VM_Models_Post_HeatMap2D_CreateAxis2D_System_String_VM_Models_Post_AxisDirection_System_Nullable_System_Guid__System_Boolean_"></a> CreateAxis2D\(string, AxisDirection, Guid?, bool\)

```csharp
public Axis2D CreateAxis2D(string title, AxisDirection axisDirection, Guid? id = null, bool addAfterCreate = true)
```

#### Parameters

`title` [string](https://learn.microsoft.com/dotnet/api/system.string)

`axisDirection` [AxisDirection](VM.Models.Post.AxisDirection.md)

`id` [Guid](https://learn.microsoft.com/dotnet/api/system.guid)?

`addAfterCreate` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [Axis2D](VM.Models.Post.Axis2D.md)

### <a id="VM_Models_Post_HeatMap2D_CreateHeatmapLineSeries_System_Int32_System_String_System_String_VM_Models_Post_ExtendedUnit_VM_Point2D___System_Boolean_"></a> CreateHeatmapLineSeries\(int, string, string, ExtendedUnit, Point2D\[\], bool\)

```csharp
public static HeatmapLineDataSeries CreateHeatmapLineSeries(int parentID, string id, string fullName, ExtendedUnit unit, Point2D[] points, bool addAfterCreate = true)
```

#### Parameters

`parentID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`unit` [ExtendedUnit](VM.Models.Post.ExtendedUnit.md)

`points` Point2D\[\]

`addAfterCreate` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [HeatmapLineDataSeries](VM.Models.Post.HeatmapLineDataSeries.md)

