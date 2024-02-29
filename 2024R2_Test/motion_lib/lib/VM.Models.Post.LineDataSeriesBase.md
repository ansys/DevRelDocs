# <a id="VM_Models_Post_LineDataSeriesBase"></a> Class LineDataSeriesBase

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public abstract class LineDataSeriesBase : ObjectBase, IObservableObject, IDisposableObject, ISeries, IObject, IHasName
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
[ObjectBase](VM.Models.Post.ObjectBase.md) ← 
[LineDataSeriesBase](VM.Models.Post.LineDataSeriesBase.md)

#### Derived

[DriveTrainLineDataSeriesBase](VM.Models.Post.DriveTrainLineDataSeriesBase.md), 
[FrequencyResponseLineDataSeries](VM.Models.Post.FrequencyResponseLineDataSeries.md), 
[FrequencySequenceLineDataSeries](VM.Models.Post.FrequencySequenceLineDataSeries.md), 
[FrequencyTimeLineDataSeries](VM.Models.Post.FrequencyTimeLineDataSeries.md), 
[HasOriginalSeries](VM.Models.Post.HasOriginalSeries.md), 
[HeatmapLineDataSeries](VM.Models.Post.HeatmapLineDataSeries.md), 
[LineDataSeries](VM.Models.Post.LineDataSeries.md), 
[NumericLineDataSeries](VM.Models.Post.NumericLineDataSeries.md), 
[SimpleMathLineDataSeries](VM.Models.Post.SimpleMathLineDataSeries.md), 
[SoundPressureLevelLineDataSeries](VM.Models.Post.SoundPressureLevelLineDataSeries.md), 
[StorageLineDataSeries](VM.Models.Post.StorageLineDataSeries.md)

#### Implements

IObservableObject, 
IDisposableObject, 
[ISeries](VM.Models.Post.ISeries.md), 
[IObject](VM.Models.Post.IObject.md), 
IHasName

#### Inherited Members

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

### <a id="VM_Models_Post_LineDataSeriesBase__ctor_System_Int32_System_String_System_String_VM_Models_Post_ExtendedUnit_System_String_"></a> LineDataSeriesBase\(int, string, string, ExtendedUnit, string\)

```csharp
protected LineDataSeriesBase(int parentID, string id, string fullName, ExtendedUnit unit, string resultDocumentFilePath = "")
```

#### Parameters

`parentID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`unit` [ExtendedUnit](VM.Models.Post.ExtendedUnit.md)

`resultDocumentFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

## Fields

### <a id="VM_Models_Post_LineDataSeriesBase_Separators"></a> Separators

```csharp
public static readonly char[] Separators
```

#### Field Value

 [char](https://learn.microsoft.com/dotnet/api/system.char)\[\]

## Properties

### <a id="VM_Models_Post_LineDataSeriesBase_Color"></a> Color

```csharp
[SaveProperty(false)]
public Color Color { get; set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)

### <a id="VM_Models_Post_LineDataSeriesBase_Expression"></a> Expression

```csharp
[SaveProperty(false)]
public string Expression { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_LineDataSeriesBase_ID"></a> ID

```csharp
[SaveProperty(true)]
public string ID { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_LineDataSeriesBase_InnerExpression"></a> InnerExpression

```csharp
[SaveProperty(false)]
public string InnerExpression { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_LineDataSeriesBase_IsRefresh"></a> IsRefresh

```csharp
[SaveProperty(false)]
public virtual bool IsRefresh { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_LineDataSeriesBase_LineSeriesType"></a> LineSeriesType

```csharp
[SaveProperty(false)]
public virtual LineSeriesType LineSeriesType { get; }
```

#### Property Value

 [LineSeriesType](VM.Models.Post.LineSeriesType.md)

### <a id="VM_Models_Post_LineDataSeriesBase_LineStrokeDash"></a> LineStrokeDash

```csharp
public double[] LineStrokeDash { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_LineDataSeriesBase_LineStyle"></a> LineStyle

```csharp
[SaveProperty(false)]
public LineStyleType LineStyle { get; set; }
```

#### Property Value

 [LineStyleType](VM.Models.Post.LineStyleType.md)

### <a id="VM_Models_Post_LineDataSeriesBase_NeedSavePoints"></a> NeedSavePoints

```csharp
public virtual bool NeedSavePoints { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_LineDataSeriesBase_ParentDocument"></a> ParentDocument

```csharp
public override ResultDocument ParentDocument { get; }
```

#### Property Value

 [ResultDocument](VM.Models.Post.ResultDocument.md)

### <a id="VM_Models_Post_LineDataSeriesBase_ParentID"></a> ParentID

```csharp
[SaveProperty(true)]
public int ParentID { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_LineDataSeriesBase_PointMarker"></a> PointMarker

```csharp
[SaveProperty(false)]
public PointMarker PointMarker { get; set; }
```

#### Property Value

 [PointMarker](VM.Models.Post.PointMarker.md)

### <a id="VM_Models_Post_LineDataSeriesBase_Points"></a> Points

```csharp
public Point2D[] Points { get; set; }
```

#### Property Value

 Point2D\[\]

### <a id="VM_Models_Post_LineDataSeriesBase_RelatedSeries"></a> RelatedSeries

```csharp
public IEnumerable<ISeries> RelatedSeries { get; }
```

#### Property Value

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[ISeries](VM.Models.Post.ISeries.md)\>

### <a id="VM_Models_Post_LineDataSeriesBase_ResultDocumentFilePath"></a> ResultDocumentFilePath

```csharp
[SaveProperty(false)]
public string ResultDocumentFilePath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_LineDataSeriesBase_SeriesType"></a> SeriesType

```csharp
[SaveProperty(false)]
public SeriesType SeriesType { get; set; }
```

#### Property Value

 [SeriesType](VM.Models.Post.SeriesType.md)

### <a id="VM_Models_Post_LineDataSeriesBase_Target"></a> Target

```csharp
[SaveProperty(false)]
public IEntity Target { get; init; }
```

#### Property Value

 [IEntity](VM.Models.Post.IEntity.md)

### <a id="VM_Models_Post_LineDataSeriesBase_TargetName"></a> TargetName

```csharp
[SaveProperty(false)]
public string TargetName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_LineDataSeriesBase_Thickness"></a> Thickness

```csharp
[SaveProperty(false)]
public int Thickness { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_LineDataSeriesBase_Unit"></a> Unit

```csharp
[SaveProperty(false)]
public ExtendedUnit Unit { get; }
```

#### Property Value

 [ExtendedUnit](VM.Models.Post.ExtendedUnit.md)

### <a id="VM_Models_Post_LineDataSeriesBase_XAxisID"></a> XAxisID

```csharp
[SaveProperty(false)]
public string XAxisID { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_LineDataSeriesBase_XDimension"></a> XDimension

```csharp
[SaveProperty(false)]
public string XDimension { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_LineDataSeriesBase_XUnit"></a> XUnit

```csharp
public virtual string XUnit { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_LineDataSeriesBase_YAxisID"></a> YAxisID

```csharp
[SaveProperty(false)]
public string YAxisID { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_LineDataSeriesBase_YDimension"></a> YDimension

```csharp
[SaveProperty(false)]
public string YDimension { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_LineDataSeriesBase_YUnit"></a> YUnit

```csharp
public virtual string YUnit { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="VM_Models_Post_LineDataSeriesBase_ChangeParent_System_Int32_"></a> ChangeParent\(int\)

```csharp
public void ChangeParent(int parentID)
```

#### Parameters

`parentID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_LineDataSeriesBase_DisposeManagedResources"></a> DisposeManagedResources\(\)

```csharp
protected override void DisposeManagedResources()
```

### <a id="VM_Models_Post_LineDataSeriesBase_Initialize_System_Action_"></a> Initialize\(Action\)

```csharp
public void Initialize(Action initializeAction)
```

#### Parameters

`initializeAction` [Action](https://learn.microsoft.com/dotnet/api/system.action)

