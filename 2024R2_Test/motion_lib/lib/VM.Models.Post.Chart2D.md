# <a id="VM_Models_Post_Chart2D"></a> Class Chart2D

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public abstract class Chart2D : Chart, IObservableObject, IDisposableObject, IObject, IHasName
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
[ObjectBase](VM.Models.Post.ObjectBase.md) ← 
[Slot](VM.Models.Post.Slot.md) ← 
[Chart](VM.Models.Post.Chart.md) ← 
[Chart2D](VM.Models.Post.Chart2D.md)

#### Derived

[HeatMap2D](VM.Models.Post.HeatMap2D.md), 
[Line2D](VM.Models.Post.Line2D.md)

#### Implements

IObservableObject, 
IDisposableObject, 
[IObject](VM.Models.Post.IObject.md), 
IHasName

#### Inherited Members

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

### <a id="VM_Models_Post_Chart2D__ctor_System_Nullable_System_Int32__System_String_"></a> Chart2D\(int?, string\)

```csharp
protected Chart2D(int? id, string fullName)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_Chart2D__ctor_VM_Identifier_System_Nullable_System_Int32__System_String_"></a> Chart2D\(Identifier, int?, string\)

```csharp
protected Chart2D(Identifier parentDocumentID, int? id, string fullName)
```

#### Parameters

`parentDocumentID` Identifier

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="VM_Models_Post_Chart2D_CreateCalculusLineSeries_System_Int32_System_String_System_String_System_String_VM_Models_Post_ExtendedUnit_VM_Point2D___VM_Models_Post_CalculusType_System_String_System_String_System_Boolean_"></a> CreateCalculusLineSeries\(int, string, string, string, ExtendedUnit, Point2D\[\], CalculusType, string, string, bool\)

```csharp
public static CalculusLineDataSeries CreateCalculusLineSeries(int parentID, string originalSeriesID, string id, string fullName, ExtendedUnit unit, Point2D[] points, CalculusType calculusType, string xDimension, string yDimension, bool addAfterCreate = true)
```

#### Parameters

`parentID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`originalSeriesID` [string](https://learn.microsoft.com/dotnet/api/system.string)

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`unit` [ExtendedUnit](VM.Models.Post.ExtendedUnit.md)

`points` Point2D\[\]

`calculusType` [CalculusType](VM.Models.Post.CalculusType.md)

`xDimension` [string](https://learn.microsoft.com/dotnet/api/system.string)

`yDimension` [string](https://learn.microsoft.com/dotnet/api/system.string)

`addAfterCreate` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [CalculusLineDataSeries](VM.Models.Post.CalculusLineDataSeries.md)

### <a id="VM_Models_Post_Chart2D_CreateDynamicPPTELineSeries_System_Int32_System_String_System_String_VM_Models_Post_ExtendedUnit_System_String_VM_Point2D___System_String_System_String_System_Int32_System_Double_System_Boolean_"></a> CreateDynamicPPTELineSeries\(int, string, string, ExtendedUnit, string, Point2D\[\], string, string, int, double, bool\)

```csharp
public static DynamicPPTELineDataSeries CreateDynamicPPTELineSeries(int parentID, string id, string fullName, ExtendedUnit unit, string documentFilePath, Point2D[] points, string selectedObjectFullPath, string selectedObject, int slice, double startTime, bool addAfterCreate = true)
```

#### Parameters

`parentID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`unit` [ExtendedUnit](VM.Models.Post.ExtendedUnit.md)

`documentFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

`points` Point2D\[\]

`selectedObjectFullPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

`selectedObject` [string](https://learn.microsoft.com/dotnet/api/system.string)

`slice` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`startTime` [double](https://learn.microsoft.com/dotnet/api/system.double)

`addAfterCreate` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [DynamicPPTELineDataSeries](VM.Models.Post.DynamicPPTELineDataSeries.md)

### <a id="VM_Models_Post_Chart2D_CreateFFTLineSeries_System_Int32_System_String_System_String_System_String_VM_Models_Post_ExtendedUnit_VM_Point2D___System_Double_System_Double_VM_Models_Post_ScaleType_VM_Models_Post_FFTType_VM_Models_Post_FFTWindowType_System_Int32_System_String_System_String_System_Boolean_"></a> CreateFFTLineSeries\(int, string, string, string, ExtendedUnit, Point2D\[\], double, double, ScaleType, FFTType, FFTWindowType, int, string, string, bool\)

```csharp
public static FFTLineDataSeries CreateFFTLineSeries(int parentID, string originalSeriesID, string id, string fullName, ExtendedUnit unit, Point2D[] points, double start, double end, ScaleType fftScaleType, FFTType fftType, FFTWindowType fftWindowType, int selectedPoints, string xDimension, string yDimension, bool addAfterCreate = true)
```

#### Parameters

`parentID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`originalSeriesID` [string](https://learn.microsoft.com/dotnet/api/system.string)

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`unit` [ExtendedUnit](VM.Models.Post.ExtendedUnit.md)

`points` Point2D\[\]

`start` [double](https://learn.microsoft.com/dotnet/api/system.double)

`end` [double](https://learn.microsoft.com/dotnet/api/system.double)

`fftScaleType` [ScaleType](VM.Models.Post.ScaleType.md)

`fftType` [FFTType](VM.Models.Post.FFTType.md)

`fftWindowType` [FFTWindowType](VM.Models.Post.FFTWindowType.md)

`selectedPoints` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`xDimension` [string](https://learn.microsoft.com/dotnet/api/system.string)

`yDimension` [string](https://learn.microsoft.com/dotnet/api/system.string)

`addAfterCreate` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [FFTLineDataSeries](VM.Models.Post.FFTLineDataSeries.md)

### <a id="VM_Models_Post_Chart2D_CreateFiltering_System_Int32_System_String_System_String_System_String_VM_Models_Post_ExtendedUnit_VM_Point2D___System_Double_VM_Models_Post_FilteringType_System_Double_System_Double_System_Int32_System_String_System_String_System_Boolean_"></a> CreateFiltering\(int, string, string, string, ExtendedUnit, Point2D\[\], double, FilteringType, double, double, int, string, string, bool\)

```csharp
public static SignalProcessingLineDataSeries CreateFiltering(int parentID, string originalSeriesID, string id, string fullName, ExtendedUnit unit, Point2D[] points, double cutOfFrequency, FilteringType filteringType, double highCutOfFrequency, double lowCutOfFrequency, int order, string xDimension, string yDimension, bool addAfterCreate = true)
```

#### Parameters

`parentID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`originalSeriesID` [string](https://learn.microsoft.com/dotnet/api/system.string)

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`unit` [ExtendedUnit](VM.Models.Post.ExtendedUnit.md)

`points` Point2D\[\]

`cutOfFrequency` [double](https://learn.microsoft.com/dotnet/api/system.double)

`filteringType` [FilteringType](VM.Models.Post.FilteringType.md)

`highCutOfFrequency` [double](https://learn.microsoft.com/dotnet/api/system.double)

`lowCutOfFrequency` [double](https://learn.microsoft.com/dotnet/api/system.double)

`order` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`xDimension` [string](https://learn.microsoft.com/dotnet/api/system.string)

`yDimension` [string](https://learn.microsoft.com/dotnet/api/system.string)

`addAfterCreate` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [SignalProcessingLineDataSeries](VM.Models.Post.SignalProcessingLineDataSeries.md)

### <a id="VM_Models_Post_Chart2D_CreateFrequencyResponseLineSeries_System_Int32_System_String_System_String_VM_Models_Post_ExtendedUnit_System_String_VM_Point2D___System_Double_System_Double_System_Double_System_UInt32_System_String___System_String_System_Int32_System_Boolean_"></a> CreateFrequencyResponseLineSeries\(int, string, string, ExtendedUnit, string, Point2D\[\], double, double, double, uint, string\[\], string, int, bool\)

```csharp
public static FrequencyResponseLineDataSeries CreateFrequencyResponseLineSeries(int parentID, string id, string fullName, ExtendedUnit unit, string documentFilePath, Point2D[] points, double from, double to, double samplingTime, uint samplingTimeSequence, string[] selectedInputChannels, string selectedOutputChannel, int step, bool addAfterCreate = true)
```

#### Parameters

`parentID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`unit` [ExtendedUnit](VM.Models.Post.ExtendedUnit.md)

`documentFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

`points` Point2D\[\]

`from` [double](https://learn.microsoft.com/dotnet/api/system.double)

`to` [double](https://learn.microsoft.com/dotnet/api/system.double)

`samplingTime` [double](https://learn.microsoft.com/dotnet/api/system.double)

`samplingTimeSequence` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

`selectedInputChannels` [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

`selectedOutputChannel` [string](https://learn.microsoft.com/dotnet/api/system.string)

`step` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`addAfterCreate` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [FrequencyResponseLineDataSeries](VM.Models.Post.FrequencyResponseLineDataSeries.md)

### <a id="VM_Models_Post_Chart2D_CreateFrequencySequenceLineSeries_System_Int32_System_String_System_String_VM_Models_Post_ExtendedUnit_System_String_VM_Point2D___VM_Models_Post_IEntity_System_String_System_String_System_Boolean_"></a> CreateFrequencySequenceLineSeries\(int, string, string, ExtendedUnit, string, Point2D\[\], IEntity, string, string, bool\)

```csharp
public static FrequencySequenceLineDataSeries CreateFrequencySequenceLineSeries(int parentID, string id, string fullName, ExtendedUnit unit, string documentFilePath, Point2D[] points, IEntity target, string xDimension, string yDimension, bool addAfterCreate = true)
```

#### Parameters

`parentID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`unit` [ExtendedUnit](VM.Models.Post.ExtendedUnit.md)

`documentFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

`points` Point2D\[\]

`target` [IEntity](VM.Models.Post.IEntity.md)

`xDimension` [string](https://learn.microsoft.com/dotnet/api/system.string)

`yDimension` [string](https://learn.microsoft.com/dotnet/api/system.string)

`addAfterCreate` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [FrequencySequenceLineDataSeries](VM.Models.Post.FrequencySequenceLineDataSeries.md)

### <a id="VM_Models_Post_Chart2D_CreateFrequencyTimeLineSeries_System_Int32_System_String_System_String_VM_Models_Post_ExtendedUnit_System_String_VM_Point2D___VM_Models_Post_FrequencyTime_System_String_System_String_System_Boolean_"></a> CreateFrequencyTimeLineSeries\(int, string, string, ExtendedUnit, string, Point2D\[\], FrequencyTime, string, string, bool\)

```csharp
public static FrequencyTimeLineDataSeries CreateFrequencyTimeLineSeries(int parentID, string id, string fullName, ExtendedUnit unit, string documentFilePath, Point2D[] points, FrequencyTime target, string xDimension, string yDimension, bool addAfterCreate = true)
```

#### Parameters

`parentID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`unit` [ExtendedUnit](VM.Models.Post.ExtendedUnit.md)

`documentFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

`points` Point2D\[\]

`target` [FrequencyTime](VM.Models.Post.FrequencyTime.md)

`xDimension` [string](https://learn.microsoft.com/dotnet/api/system.string)

`yDimension` [string](https://learn.microsoft.com/dotnet/api/system.string)

`addAfterCreate` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [FrequencyTimeLineDataSeries](VM.Models.Post.FrequencyTimeLineDataSeries.md)

### <a id="VM_Models_Post_Chart2D_CreateFrequencyWeighting_System_Int32_System_String_System_String_System_String_VM_Models_Post_ExtendedUnit_VM_Point2D___VM_Models_Post_FrequencyAxisType_VM_Models_Post_WeightingType_System_String_System_String_System_Boolean_"></a> CreateFrequencyWeighting\(int, string, string, string, ExtendedUnit, Point2D\[\], FrequencyAxisType, WeightingType, string, string, bool\)

```csharp
public static SignalProcessingLineDataSeries CreateFrequencyWeighting(int parentID, string originalSeriesID, string id, string fullName, ExtendedUnit unit, Point2D[] points, FrequencyAxisType frequencyAxisType, WeightingType weightingType, string xDimension, string yDimension, bool addAfterCreate = true)
```

#### Parameters

`parentID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`originalSeriesID` [string](https://learn.microsoft.com/dotnet/api/system.string)

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`unit` [ExtendedUnit](VM.Models.Post.ExtendedUnit.md)

`points` Point2D\[\]

`frequencyAxisType` [FrequencyAxisType](VM.Models.Post.FrequencyAxisType.md)

`weightingType` [WeightingType](VM.Models.Post.WeightingType.md)

`xDimension` [string](https://learn.microsoft.com/dotnet/api/system.string)

`yDimension` [string](https://learn.microsoft.com/dotnet/api/system.string)

`addAfterCreate` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [SignalProcessingLineDataSeries](VM.Models.Post.SignalProcessingLineDataSeries.md)

### <a id="VM_Models_Post_Chart2D_CreateHarmonicTELineSeries_System_Int32_System_String_System_String_VM_Models_Post_ExtendedUnit_System_String_VM_Point2D___System_String_VM_Models_Post_FFTType_VM_Models_Post_ScaleType_System_Int32_System_Double_System_Double_System_String_System_Boolean_"></a> CreateHarmonicTELineSeries\(int, string, string, ExtendedUnit, string, Point2D\[\], string, FFTType, ScaleType, int, double, double, string, bool\)

```csharp
public static HarmonicTELineDataSeries CreateHarmonicTELineSeries(int parentID, string id, string fullName, ExtendedUnit unit, string documentFilePath, Point2D[] points, string selectedObject, FFTType selectedFFTType, ScaleType selectedScaleType, int selectedPoint, double start, double end, string displayName, bool addAfterCreate = true)
```

#### Parameters

`parentID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`unit` [ExtendedUnit](VM.Models.Post.ExtendedUnit.md)

`documentFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

`points` Point2D\[\]

`selectedObject` [string](https://learn.microsoft.com/dotnet/api/system.string)

`selectedFFTType` [FFTType](VM.Models.Post.FFTType.md)

`selectedScaleType` [ScaleType](VM.Models.Post.ScaleType.md)

`selectedPoint` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`start` [double](https://learn.microsoft.com/dotnet/api/system.double)

`end` [double](https://learn.microsoft.com/dotnet/api/system.double)

`displayName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`addAfterCreate` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [HarmonicTELineDataSeries](VM.Models.Post.HarmonicTELineDataSeries.md)

### <a id="VM_Models_Post_Chart2D_CreateInterpolationLineSeries_System_Int32_System_String_System_String_System_String_VM_Models_Post_ExtendedUnit_VM_Point2D___System_Int32_System_String_System_String_System_Boolean_"></a> CreateInterpolationLineSeries\(int, string, string, string, ExtendedUnit, Point2D\[\], int, string, string, bool\)

```csharp
public static InterpolationLineDataSeries CreateInterpolationLineSeries(int parentID, string originalSeriesID, string id, string fullName, ExtendedUnit unit, Point2D[] points, int pointCount, string xDimension, string yDimension, bool addAfterCreate = true)
```

#### Parameters

`parentID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`originalSeriesID` [string](https://learn.microsoft.com/dotnet/api/system.string)

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`unit` [ExtendedUnit](VM.Models.Post.ExtendedUnit.md)

`points` Point2D\[\]

`pointCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`xDimension` [string](https://learn.microsoft.com/dotnet/api/system.string)

`yDimension` [string](https://learn.microsoft.com/dotnet/api/system.string)

`addAfterCreate` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [InterpolationLineDataSeries](VM.Models.Post.InterpolationLineDataSeries.md)

### <a id="VM_Models_Post_Chart2D_CreateLineSeries_System_Int32_System_String_System_String_VM_Models_Post_ExtendedUnit_System_String_VM_Point2D___VM_Models_Post_IEntity_VM_Models_PlotDataType_System_String_System_String_VM_Models_Post_UserDefinedAxisDataSet_VM_Models_Post_UserDefinedAxisDataSet_System_Boolean_"></a> CreateLineSeries\(int, string, string, ExtendedUnit, string, Point2D\[\], IEntity, PlotDataType, string, string, UserDefinedAxisDataSet, UserDefinedAxisDataSet, bool\)

```csharp
public static LineDataSeries CreateLineSeries(int parentID, string id, string fullName, ExtendedUnit unit, string resultDocumentFilePath, Point2D[] points, IEntity target, PlotDataType plotData, string xDimension, string yDimension, UserDefinedAxisDataSet xUserDefinedAxisDataSet = null, UserDefinedAxisDataSet yUserDefinedAxisDataSet = null, bool addAfterCreate = true)
```

#### Parameters

`parentID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`unit` [ExtendedUnit](VM.Models.Post.ExtendedUnit.md)

`resultDocumentFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

`points` Point2D\[\]

`target` [IEntity](VM.Models.Post.IEntity.md)

`plotData` PlotDataType

`xDimension` [string](https://learn.microsoft.com/dotnet/api/system.string)

`yDimension` [string](https://learn.microsoft.com/dotnet/api/system.string)

`xUserDefinedAxisDataSet` [UserDefinedAxisDataSet](VM.Models.Post.UserDefinedAxisDataSet.md)

`yUserDefinedAxisDataSet` [UserDefinedAxisDataSet](VM.Models.Post.UserDefinedAxisDataSet.md)

`addAfterCreate` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [LineDataSeries](VM.Models.Post.LineDataSeries.md)

### <a id="VM_Models_Post_Chart2D_CreateNumericLineSeries_System_Int32_System_String_System_String_System_String_System_String_System_String_System_Boolean_"></a> CreateNumericLineSeries\(int, string, string, string, string, string, bool\)

```csharp
public static NumericLineDataSeries CreateNumericLineSeries(int parentID, string id, string fullName, string filePath, string targetX, string targetY, bool addAfterCreate = true)
```

#### Parameters

`parentID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`filePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

`targetX` [string](https://learn.microsoft.com/dotnet/api/system.string)

`targetY` [string](https://learn.microsoft.com/dotnet/api/system.string)

`addAfterCreate` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [NumericLineDataSeries](VM.Models.Post.NumericLineDataSeries.md)

### <a id="VM_Models_Post_Chart2D_CreateNumericLineSeries_System_Int32_System_String_System_String_VM_Point2D___System_String_System_String_System_String_System_Boolean_"></a> CreateNumericLineSeries\(int, string, string, Point2D\[\], string, string, string, bool\)

```csharp
public static NumericLineDataSeries CreateNumericLineSeries(int parentID, string id, string fullName, Point2D[] points, string filePath, string targetX, string targetY, bool addAfterCreate = true)
```

#### Parameters

`parentID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`points` Point2D\[\]

`filePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

`targetX` [string](https://learn.microsoft.com/dotnet/api/system.string)

`targetY` [string](https://learn.microsoft.com/dotnet/api/system.string)

`addAfterCreate` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [NumericLineDataSeries](VM.Models.Post.NumericLineDataSeries.md)

### <a id="VM_Models_Post_Chart2D_CreateShuttlingForceLineDataSeries_System_Int32_System_String_System_String_VM_Models_Post_ExtendedUnit_System_String_VM_Point2D___System_String_System_String_System_Int32_System_Double_System_Boolean_"></a> CreateShuttlingForceLineDataSeries\(int, string, string, ExtendedUnit, string, Point2D\[\], string, string, int, double, bool\)

```csharp
public static ShuttlingForceLineDataSeries CreateShuttlingForceLineDataSeries(int parentID, string id, string fullName, ExtendedUnit unit, string documentFilePath, Point2D[] points, string selectedObject, string selectedObjectFullPath, int slice, double startTime, bool addAfterCreate = true)
```

#### Parameters

`parentID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`unit` [ExtendedUnit](VM.Models.Post.ExtendedUnit.md)

`documentFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

`points` Point2D\[\]

`selectedObject` [string](https://learn.microsoft.com/dotnet/api/system.string)

`selectedObjectFullPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

`slice` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`startTime` [double](https://learn.microsoft.com/dotnet/api/system.double)

`addAfterCreate` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [ShuttlingForceLineDataSeries](VM.Models.Post.ShuttlingForceLineDataSeries.md)

### <a id="VM_Models_Post_Chart2D_CreateSignalProcessingLineSeries_System_Int32_System_String_System_String_System_String_VM_Models_Post_ExtendedUnit_VM_Point2D___System_Boolean_"></a> CreateSignalProcessingLineSeries\(int, string, string, string, ExtendedUnit, Point2D\[\], bool\)

```csharp
public static SignalProcessingLineDataSeries CreateSignalProcessingLineSeries(int parentID, string originalSeriesID, string id, string fullName, ExtendedUnit unit, Point2D[] points, bool addAfterCreate = true)
```

#### Parameters

`parentID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`originalSeriesID` [string](https://learn.microsoft.com/dotnet/api/system.string)

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`unit` [ExtendedUnit](VM.Models.Post.ExtendedUnit.md)

`points` Point2D\[\]

`addAfterCreate` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [SignalProcessingLineDataSeries](VM.Models.Post.SignalProcessingLineDataSeries.md)

### <a id="VM_Models_Post_Chart2D_CreateSimpleMathLineSeries_System_Int32_System_String_System_String_VM_Models_Post_ExtendedUnit_VM_Point2D___System_String_System_String_VM_Models_Post_SimpleMathType_System_Int32_System_String_System_String_System_Boolean_"></a> CreateSimpleMathLineSeries\(int, string, string, ExtendedUnit, Point2D\[\], string, string, SimpleMathType, int, string, string, bool\)

```csharp
public static SimpleMathLineDataSeries CreateSimpleMathLineSeries(int parentID, string id, string fullName, ExtendedUnit unit, Point2D[] points, string expression, string innerExpression, SimpleMathType mathType, int pointCount, string xDimension, string yDimension, bool addAfterCreate = true)
```

#### Parameters

`parentID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`unit` [ExtendedUnit](VM.Models.Post.ExtendedUnit.md)

`points` Point2D\[\]

`expression` [string](https://learn.microsoft.com/dotnet/api/system.string)

`innerExpression` [string](https://learn.microsoft.com/dotnet/api/system.string)

`mathType` [SimpleMathType](VM.Models.Post.SimpleMathType.md)

`pointCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`xDimension` [string](https://learn.microsoft.com/dotnet/api/system.string)

`yDimension` [string](https://learn.microsoft.com/dotnet/api/system.string)

`addAfterCreate` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [SimpleMathLineDataSeries](VM.Models.Post.SimpleMathLineDataSeries.md)

### <a id="VM_Models_Post_Chart2D_CreateSmoothing_System_Int32_System_String_System_String_System_String_VM_Models_Post_ExtendedUnit_VM_Point2D___System_Int32_System_Int32_VM_Models_Post_SmoothingType_System_String_System_String_System_Boolean_"></a> CreateSmoothing\(int, string, string, string, ExtendedUnit, Point2D\[\], int, int, SmoothingType, string, string, bool\)

```csharp
public static SignalProcessingLineDataSeries CreateSmoothing(int parentID, string originalSeriesID, string id, string fullName, ExtendedUnit unit, Point2D[] points, int pointsOfWindow, int polynomialOrder, SmoothingType smoothingType, string xDimension, string yDimension, bool addAfterCreate = true)
```

#### Parameters

`parentID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`originalSeriesID` [string](https://learn.microsoft.com/dotnet/api/system.string)

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`unit` [ExtendedUnit](VM.Models.Post.ExtendedUnit.md)

`points` Point2D\[\]

`pointsOfWindow` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`polynomialOrder` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`smoothingType` [SmoothingType](VM.Models.Post.SmoothingType.md)

`xDimension` [string](https://learn.microsoft.com/dotnet/api/system.string)

`yDimension` [string](https://learn.microsoft.com/dotnet/api/system.string)

`addAfterCreate` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [SignalProcessingLineDataSeries](VM.Models.Post.SignalProcessingLineDataSeries.md)

### <a id="VM_Models_Post_Chart2D_CreateSoundPressureLevelLineSeries_System_Int32_System_String_System_String_VM_Models_Post_ExtendedUnit_System_String_VM_Point2D___System_String_System_String_System_Boolean_"></a> CreateSoundPressureLevelLineSeries\(int, string, string, ExtendedUnit, string, Point2D\[\], string, string, bool\)

```csharp
public static SoundPressureLevelLineDataSeries CreateSoundPressureLevelLineSeries(int parentID, string id, string fullName, ExtendedUnit unit, string resultDocumentFilePath, Point2D[] points, string xDimension, string yDimension, bool addAfterCreate = true)
```

#### Parameters

`parentID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`unit` [ExtendedUnit](VM.Models.Post.ExtendedUnit.md)

`resultDocumentFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

`points` Point2D\[\]

`xDimension` [string](https://learn.microsoft.com/dotnet/api/system.string)

`yDimension` [string](https://learn.microsoft.com/dotnet/api/system.string)

`addAfterCreate` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [SoundPressureLevelLineDataSeries](VM.Models.Post.SoundPressureLevelLineDataSeries.md)

### <a id="VM_Models_Post_Chart2D_CreateStorageLineSeries_System_Int32_System_String_System_String_VM_Models_Post_ExtendedUnit_VM_Point2D___System_String_System_String_System_Boolean_"></a> CreateStorageLineSeries\(int, string, string, ExtendedUnit, Point2D\[\], string, string, bool\)

```csharp
public static StorageLineDataSeries CreateStorageLineSeries(int parentID, string id, string fullName, ExtendedUnit unit, Point2D[] points, string xDimension, string yDimension, bool addAfterCreate = true)
```

#### Parameters

`parentID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`unit` [ExtendedUnit](VM.Models.Post.ExtendedUnit.md)

`points` Point2D\[\]

`xDimension` [string](https://learn.microsoft.com/dotnet/api/system.string)

`yDimension` [string](https://learn.microsoft.com/dotnet/api/system.string)

`addAfterCreate` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [StorageLineDataSeries](VM.Models.Post.StorageLineDataSeries.md)

### <a id="VM_Models_Post_Chart2D_CreateTransformLineSeries_System_Int32_System_String_System_String_System_String_System_String_VM_Models_Post_ExtendedUnit_VM_Point2D___VM_Models_Post_TransformType_System_String_System_String_System_Boolean_"></a> CreateTransformLineSeries\(int, string, string, string, string, ExtendedUnit, Point2D\[\], TransformType, string, string, bool\)

```csharp
public static TransformLineDataSeries CreateTransformLineSeries(int parentID, string targetSeriesID, string sourceSeriesID, string id, string fullName, ExtendedUnit unit, Point2D[] points, TransformType transformType, string xDimension, string yDimension, bool addAfterCreate = true)
```

#### Parameters

`parentID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`targetSeriesID` [string](https://learn.microsoft.com/dotnet/api/system.string)

`sourceSeriesID` [string](https://learn.microsoft.com/dotnet/api/system.string)

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`unit` [ExtendedUnit](VM.Models.Post.ExtendedUnit.md)

`points` Point2D\[\]

`transformType` [TransformType](VM.Models.Post.TransformType.md)

`xDimension` [string](https://learn.microsoft.com/dotnet/api/system.string)

`yDimension` [string](https://learn.microsoft.com/dotnet/api/system.string)

`addAfterCreate` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [TransformLineDataSeries](VM.Models.Post.TransformLineDataSeries.md)

### <a id="VM_Models_Post_Chart2D_CreateTransformLineSeries_System_Int32_System_String_System_String_System_String_VM_Models_Post_ExtendedUnit_VM_Point2D___VM_Models_Post_TransformType_System_String_System_String_System_Boolean_"></a> CreateTransformLineSeries\(int, string, string, string, ExtendedUnit, Point2D\[\], TransformType, string, string, bool\)

```csharp
public static TransformLineDataSeries CreateTransformLineSeries(int parentID, string originalSeriesID, string id, string fullName, ExtendedUnit unit, Point2D[] points, TransformType transformType, string xDimension, string yDimension, bool addAfterCreate = true)
```

#### Parameters

`parentID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`originalSeriesID` [string](https://learn.microsoft.com/dotnet/api/system.string)

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`unit` [ExtendedUnit](VM.Models.Post.ExtendedUnit.md)

`points` Point2D\[\]

`transformType` [TransformType](VM.Models.Post.TransformType.md)

`xDimension` [string](https://learn.microsoft.com/dotnet/api/system.string)

`yDimension` [string](https://learn.microsoft.com/dotnet/api/system.string)

`addAfterCreate` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [TransformLineDataSeries](VM.Models.Post.TransformLineDataSeries.md)

