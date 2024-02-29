# <a id="VM_Models_Post_SignalProcessingLineDataSeries"></a> Class SignalProcessingLineDataSeries

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public sealed class SignalProcessingLineDataSeries : HasOriginalSeries, IObservableObject, IDisposableObject, ISeries, IObject, IHasName
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
[ObjectBase](VM.Models.Post.ObjectBase.md) ← 
[LineDataSeriesBase](VM.Models.Post.LineDataSeriesBase.md) ← 
[HasOriginalSeries](VM.Models.Post.HasOriginalSeries.md) ← 
[SignalProcessingLineDataSeries](VM.Models.Post.SignalProcessingLineDataSeries.md)

#### Implements

IObservableObject, 
IDisposableObject, 
[ISeries](VM.Models.Post.ISeries.md), 
[IObject](VM.Models.Post.IObject.md), 
IHasName

#### Inherited Members

[HasOriginalSeries.NeedSavePoints](VM.Models.Post.HasOriginalSeries.md\#VM\_Models\_Post\_HasOriginalSeries\_NeedSavePoints), 
[HasOriginalSeries.OriginalSeriesID](VM.Models.Post.HasOriginalSeries.md\#VM\_Models\_Post\_HasOriginalSeries\_OriginalSeriesID), 
[HasOriginalSeries.ParentDocument](VM.Models.Post.HasOriginalSeries.md\#VM\_Models\_Post\_HasOriginalSeries\_ParentDocument), 
[LineDataSeriesBase.Separators](VM.Models.Post.LineDataSeriesBase.md\#VM\_Models\_Post\_LineDataSeriesBase\_Separators), 
[LineDataSeriesBase.ChangeParent\(int\)](VM.Models.Post.LineDataSeriesBase.md\#VM\_Models\_Post\_LineDataSeriesBase\_ChangeParent\_System\_Int32\_), 
[LineDataSeriesBase.Initialize\(Action\)](VM.Models.Post.LineDataSeriesBase.md\#VM\_Models\_Post\_LineDataSeriesBase\_Initialize\_System\_Action\_), 
[LineDataSeriesBase.Color](VM.Models.Post.LineDataSeriesBase.md\#VM\_Models\_Post\_LineDataSeriesBase\_Color), 
[LineDataSeriesBase.Expression](VM.Models.Post.LineDataSeriesBase.md\#VM\_Models\_Post\_LineDataSeriesBase\_Expression), 
[LineDataSeriesBase.ID](VM.Models.Post.LineDataSeriesBase.md\#VM\_Models\_Post\_LineDataSeriesBase\_ID), 
[LineDataSeriesBase.InnerExpression](VM.Models.Post.LineDataSeriesBase.md\#VM\_Models\_Post\_LineDataSeriesBase\_InnerExpression), 
[LineDataSeriesBase.IsRefresh](VM.Models.Post.LineDataSeriesBase.md\#VM\_Models\_Post\_LineDataSeriesBase\_IsRefresh), 
[LineDataSeriesBase.LineSeriesType](VM.Models.Post.LineDataSeriesBase.md\#VM\_Models\_Post\_LineDataSeriesBase\_LineSeriesType), 
[LineDataSeriesBase.LineStrokeDash](VM.Models.Post.LineDataSeriesBase.md\#VM\_Models\_Post\_LineDataSeriesBase\_LineStrokeDash), 
[LineDataSeriesBase.LineStyle](VM.Models.Post.LineDataSeriesBase.md\#VM\_Models\_Post\_LineDataSeriesBase\_LineStyle), 
[LineDataSeriesBase.NeedSavePoints](VM.Models.Post.LineDataSeriesBase.md\#VM\_Models\_Post\_LineDataSeriesBase\_NeedSavePoints), 
[LineDataSeriesBase.ParentDocument](VM.Models.Post.LineDataSeriesBase.md\#VM\_Models\_Post\_LineDataSeriesBase\_ParentDocument), 
[LineDataSeriesBase.ParentID](VM.Models.Post.LineDataSeriesBase.md\#VM\_Models\_Post\_LineDataSeriesBase\_ParentID), 
[LineDataSeriesBase.PointMarker](VM.Models.Post.LineDataSeriesBase.md\#VM\_Models\_Post\_LineDataSeriesBase\_PointMarker), 
[LineDataSeriesBase.Points](VM.Models.Post.LineDataSeriesBase.md\#VM\_Models\_Post\_LineDataSeriesBase\_Points), 
[LineDataSeriesBase.RelatedSeries](VM.Models.Post.LineDataSeriesBase.md\#VM\_Models\_Post\_LineDataSeriesBase\_RelatedSeries), 
[LineDataSeriesBase.ResultDocumentFilePath](VM.Models.Post.LineDataSeriesBase.md\#VM\_Models\_Post\_LineDataSeriesBase\_ResultDocumentFilePath), 
[LineDataSeriesBase.SeriesType](VM.Models.Post.LineDataSeriesBase.md\#VM\_Models\_Post\_LineDataSeriesBase\_SeriesType), 
[LineDataSeriesBase.Target](VM.Models.Post.LineDataSeriesBase.md\#VM\_Models\_Post\_LineDataSeriesBase\_Target), 
[LineDataSeriesBase.TargetName](VM.Models.Post.LineDataSeriesBase.md\#VM\_Models\_Post\_LineDataSeriesBase\_TargetName), 
[LineDataSeriesBase.Thickness](VM.Models.Post.LineDataSeriesBase.md\#VM\_Models\_Post\_LineDataSeriesBase\_Thickness), 
[LineDataSeriesBase.Unit](VM.Models.Post.LineDataSeriesBase.md\#VM\_Models\_Post\_LineDataSeriesBase\_Unit), 
[LineDataSeriesBase.XAxisID](VM.Models.Post.LineDataSeriesBase.md\#VM\_Models\_Post\_LineDataSeriesBase\_XAxisID), 
[LineDataSeriesBase.XDimension](VM.Models.Post.LineDataSeriesBase.md\#VM\_Models\_Post\_LineDataSeriesBase\_XDimension), 
[LineDataSeriesBase.XUnit](VM.Models.Post.LineDataSeriesBase.md\#VM\_Models\_Post\_LineDataSeriesBase\_XUnit), 
[LineDataSeriesBase.YAxisID](VM.Models.Post.LineDataSeriesBase.md\#VM\_Models\_Post\_LineDataSeriesBase\_YAxisID), 
[LineDataSeriesBase.YDimension](VM.Models.Post.LineDataSeriesBase.md\#VM\_Models\_Post\_LineDataSeriesBase\_YDimension), 
[LineDataSeriesBase.YUnit](VM.Models.Post.LineDataSeriesBase.md\#VM\_Models\_Post\_LineDataSeriesBase\_YUnit), 
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

### <a id="VM_Models_Post_SignalProcessingLineDataSeries_CutOffFrequency"></a> CutOffFrequency

```csharp
[SaveProperty(false)]
public double CutOffFrequency { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_SignalProcessingLineDataSeries_FilteringType"></a> FilteringType

```csharp
[SaveProperty(false)]
public FilteringType FilteringType { get; set; }
```

#### Property Value

 [FilteringType](VM.Models.Post.FilteringType.md)

### <a id="VM_Models_Post_SignalProcessingLineDataSeries_FrequencyAxisType"></a> FrequencyAxisType

```csharp
[SaveProperty(false)]
public FrequencyAxisType FrequencyAxisType { get; set; }
```

#### Property Value

 [FrequencyAxisType](VM.Models.Post.FrequencyAxisType.md)

### <a id="VM_Models_Post_SignalProcessingLineDataSeries_HighCutOffFrequency"></a> HighCutOffFrequency

```csharp
[SaveProperty(false)]
public double HighCutOffFrequency { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_SignalProcessingLineDataSeries_IsFiltering"></a> IsFiltering

```csharp
[SaveProperty(false)]
public bool IsFiltering { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_SignalProcessingLineDataSeries_IsFilteringBand"></a> IsFilteringBand

```csharp
[SaveProperty(false)]
public bool IsFilteringBand { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_SignalProcessingLineDataSeries_IsFilteringLowHeight"></a> IsFilteringLowHeight

```csharp
[SaveProperty(false)]
public bool IsFilteringLowHeight { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_SignalProcessingLineDataSeries_IsFrequencyWeighting"></a> IsFrequencyWeighting

```csharp
[SaveProperty(false)]
public bool IsFrequencyWeighting { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_SignalProcessingLineDataSeries_IsSmoothing"></a> IsSmoothing

```csharp
[SaveProperty(false)]
public bool IsSmoothing { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_SignalProcessingLineDataSeries_IsSmoothingSavitzkyGolay"></a> IsSmoothingSavitzkyGolay

```csharp
[SaveProperty(false)]
public bool IsSmoothingSavitzkyGolay { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_SignalProcessingLineDataSeries_LineSeriesType"></a> LineSeriesType

```csharp
[SaveProperty(false)]
public override LineSeriesType LineSeriesType { get; }
```

#### Property Value

 [LineSeriesType](VM.Models.Post.LineSeriesType.md)

### <a id="VM_Models_Post_SignalProcessingLineDataSeries_LowCutOffFrequency"></a> LowCutOffFrequency

```csharp
[SaveProperty(false)]
public double LowCutOffFrequency { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_SignalProcessingLineDataSeries_NeedSavePoints"></a> NeedSavePoints

```csharp
public override bool NeedSavePoints { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_SignalProcessingLineDataSeries_Order"></a> Order

```csharp
[SaveProperty(false)]
public int Order { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_SignalProcessingLineDataSeries_PointsOfWindow"></a> PointsOfWindow

```csharp
[SaveProperty(false)]
public int PointsOfWindow { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_SignalProcessingLineDataSeries_PolynomialOrder"></a> PolynomialOrder

```csharp
[SaveProperty(false)]
public int PolynomialOrder { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_SignalProcessingLineDataSeries_SignalProcessingType"></a> SignalProcessingType

```csharp
[SaveProperty(false)]
public SignalProcessingType SignalProcessingType { get; set; }
```

#### Property Value

 [SignalProcessingType](VM.Models.Post.SignalProcessingType.md)

### <a id="VM_Models_Post_SignalProcessingLineDataSeries_SmoothingType"></a> SmoothingType

```csharp
[SaveProperty(false)]
public SmoothingType SmoothingType { get; set; }
```

#### Property Value

 [SmoothingType](VM.Models.Post.SmoothingType.md)

### <a id="VM_Models_Post_SignalProcessingLineDataSeries_WeightingType"></a> WeightingType

```csharp
[SaveProperty(false)]
public WeightingType WeightingType { get; set; }
```

#### Property Value

 [WeightingType](VM.Models.Post.WeightingType.md)

