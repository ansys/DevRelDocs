# <a id="VM_Models_Post_HeatmapLineDataSeries3D"></a> Class HeatmapLineDataSeries3D

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public sealed class HeatmapLineDataSeries3D : LineDataSeries3DBase, IObservableObject, IDisposableObject, ISeries, IObject, IHasName
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
[ObjectBase](VM.Models.Post.ObjectBase.md) ← 
[LineDataSeries3DBase](VM.Models.Post.LineDataSeries3DBase.md) ← 
[HeatmapLineDataSeries3D](VM.Models.Post.HeatmapLineDataSeries3D.md)

#### Implements

IObservableObject, 
IDisposableObject, 
[ISeries](VM.Models.Post.ISeries.md), 
[IObject](VM.Models.Post.IObject.md), 
IHasName

#### Inherited Members

[LineDataSeries3DBase.ChangeParent\(int\)](VM.Models.Post.LineDataSeries3DBase.md\#VM\_Models\_Post\_LineDataSeries3DBase\_ChangeParent\_System\_Int32\_), 
[LineDataSeries3DBase.Color](VM.Models.Post.LineDataSeries3DBase.md\#VM\_Models\_Post\_LineDataSeries3DBase\_Color), 
[LineDataSeries3DBase.Expression](VM.Models.Post.LineDataSeries3DBase.md\#VM\_Models\_Post\_LineDataSeries3DBase\_Expression), 
[LineDataSeries3DBase.ID](VM.Models.Post.LineDataSeries3DBase.md\#VM\_Models\_Post\_LineDataSeries3DBase\_ID), 
[LineDataSeries3DBase.IsRefresh](VM.Models.Post.LineDataSeries3DBase.md\#VM\_Models\_Post\_LineDataSeries3DBase\_IsRefresh), 
[LineDataSeries3DBase.LineSeriesType](VM.Models.Post.LineDataSeries3DBase.md\#VM\_Models\_Post\_LineDataSeries3DBase\_LineSeriesType), 
[LineDataSeries3DBase.NeedSavePoints](VM.Models.Post.LineDataSeries3DBase.md\#VM\_Models\_Post\_LineDataSeries3DBase\_NeedSavePoints), 
[LineDataSeries3DBase.ParentID](VM.Models.Post.LineDataSeries3DBase.md\#VM\_Models\_Post\_LineDataSeries3DBase\_ParentID), 
[LineDataSeries3DBase.Points](VM.Models.Post.LineDataSeries3DBase.md\#VM\_Models\_Post\_LineDataSeries3DBase\_Points), 
[LineDataSeries3DBase.PointSize](VM.Models.Post.LineDataSeries3DBase.md\#VM\_Models\_Post\_LineDataSeries3DBase\_PointSize), 
[LineDataSeries3DBase.PointType](VM.Models.Post.LineDataSeries3DBase.md\#VM\_Models\_Post\_LineDataSeries3DBase\_PointType), 
[LineDataSeries3DBase.RelatedSeries](VM.Models.Post.LineDataSeries3DBase.md\#VM\_Models\_Post\_LineDataSeries3DBase\_RelatedSeries), 
[LineDataSeries3DBase.ResultDocumentFilePath](VM.Models.Post.LineDataSeries3DBase.md\#VM\_Models\_Post\_LineDataSeries3DBase\_ResultDocumentFilePath), 
[LineDataSeries3DBase.StrokeThickness](VM.Models.Post.LineDataSeries3DBase.md\#VM\_Models\_Post\_LineDataSeries3DBase\_StrokeThickness), 
[LineDataSeries3DBase.Unit](VM.Models.Post.LineDataSeries3DBase.md\#VM\_Models\_Post\_LineDataSeries3DBase\_Unit), 
[LineDataSeries3DBase.XAxisID](VM.Models.Post.LineDataSeries3DBase.md\#VM\_Models\_Post\_LineDataSeries3DBase\_XAxisID), 
[LineDataSeries3DBase.YAxisID](VM.Models.Post.LineDataSeries3DBase.md\#VM\_Models\_Post\_LineDataSeries3DBase\_YAxisID), 
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

### <a id="VM_Models_Post_HeatmapLineDataSeries3D_Harmonic"></a> Harmonic

```csharp
public double Harmonic { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_HeatmapLineDataSeries3D_Interval"></a> Interval

```csharp
public double Interval { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_HeatmapLineDataSeries3D_LineSeriesType"></a> LineSeriesType

```csharp
public override LineSeriesType LineSeriesType { get; }
```

#### Property Value

 [LineSeriesType](VM.Models.Post.LineSeriesType.md)

