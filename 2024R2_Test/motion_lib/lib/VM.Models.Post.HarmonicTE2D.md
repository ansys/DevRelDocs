# <a id="VM_Models_Post_HarmonicTE2D"></a> Class HarmonicTE2D

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public sealed class HarmonicTE2D : DriveTrain2D, IObservableObject, IDisposableObject, IObject, IHasName
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
[ObjectBase](VM.Models.Post.ObjectBase.md) ← 
[Slot](VM.Models.Post.Slot.md) ← 
[Chart](VM.Models.Post.Chart.md) ← 
[Chart2D](VM.Models.Post.Chart2D.md) ← 
[Line2D](VM.Models.Post.Line2D.md) ← 
[DriveTrain2D](VM.Models.Post.DriveTrain2D.md) ← 
[HarmonicTE2D](VM.Models.Post.HarmonicTE2D.md)

#### Implements

IObservableObject, 
IDisposableObject, 
[IObject](VM.Models.Post.IObject.md), 
IHasName

#### Inherited Members

[Line2D.CreateExtendedAxis2D\(ChartAxisType, AxisType, AxisDirection, Guid?, string, bool, bool\)](VM.Models.Post.Line2D.md\#VM\_Models\_Post\_Line2D\_CreateExtendedAxis2D\_VM\_Models\_Post\_ChartAxisType\_VM\_Models\_Post\_AxisType\_VM\_Models\_Post\_AxisDirection\_System\_Nullable\_System\_Guid\_\_System\_String\_System\_Boolean\_System\_Boolean\_), 
[Line2D.AnimationX](VM.Models.Post.Line2D.md\#VM\_Models\_Post\_Line2D\_AnimationX), 
[Line2D.AnimationXAxisId](VM.Models.Post.Line2D.md\#VM\_Models\_Post\_Line2D\_AnimationXAxisId), 
[Line2D.AnimationY](VM.Models.Post.Line2D.md\#VM\_Models\_Post\_Line2D\_AnimationY), 
[Line2D.AnimationYAxisId](VM.Models.Post.Line2D.md\#VM\_Models\_Post\_Line2D\_AnimationYAxisId), 
[Line2D.AxisX](VM.Models.Post.Line2D.md\#VM\_Models\_Post\_Line2D\_AxisX), 
[Line2D.AxisY](VM.Models.Post.Line2D.md\#VM\_Models\_Post\_Line2D\_AxisY), 
[Line2D.ChartType](VM.Models.Post.Line2D.md\#VM\_Models\_Post\_Line2D\_ChartType), 
[Line2D.Legend](VM.Models.Post.Line2D.md\#VM\_Models\_Post\_Line2D\_Legend), 
[Line2D.ShowAnimationBar](VM.Models.Post.Line2D.md\#VM\_Models\_Post\_Line2D\_ShowAnimationBar), 
[Line2D.TrackingCurve](VM.Models.Post.Line2D.md\#VM\_Models\_Post\_Line2D\_TrackingCurve), 
[Line2D.TrackingOption](VM.Models.Post.Line2D.md\#VM\_Models\_Post\_Line2D\_TrackingOption), 
[Line2D.UseInterpolation](VM.Models.Post.Line2D.md\#VM\_Models\_Post\_Line2D\_UseInterpolation), 
[Line2D.TypeForChart](VM.Models.Post.Line2D.md\#VM\_Models\_Post\_Line2D\_TypeForChart), 
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

### <a id="VM_Models_Post_HarmonicTE2D_TypeForChart"></a> TypeForChart

```csharp
[SaveProperty(false)]
public override TypeForChart TypeForChart { get; }
```

#### Property Value

 [TypeForChart](VM.Models.Post.TypeForChart.md)

