# <a id="VM_Models_Post_LineDataSeries3DBase"></a> Class LineDataSeries3DBase

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public abstract class LineDataSeries3DBase : ObjectBase, IObservableObject, IDisposableObject, ISeries, IObject, IHasName
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
[ObjectBase](VM.Models.Post.ObjectBase.md) ← 
[LineDataSeries3DBase](VM.Models.Post.LineDataSeries3DBase.md)

#### Derived

[HeatmapLineDataSeries3D](VM.Models.Post.HeatmapLineDataSeries3D.md)

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

### <a id="VM_Models_Post_LineDataSeries3DBase__ctor_System_Int32_System_String_System_String_VM_Models_Post_ExtendedUnit_"></a> LineDataSeries3DBase\(int, string, string, ExtendedUnit\)

```csharp
protected LineDataSeries3DBase(int parentID, string id, string fullName, ExtendedUnit unit)
```

#### Parameters

`parentID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`unit` [ExtendedUnit](VM.Models.Post.ExtendedUnit.md)

## Properties

### <a id="VM_Models_Post_LineDataSeries3DBase_Color"></a> Color

```csharp
public Color Color { get; set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)

### <a id="VM_Models_Post_LineDataSeries3DBase_Expression"></a> Expression

```csharp
public string Expression { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_LineDataSeries3DBase_ID"></a> ID

```csharp
public string ID { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_LineDataSeries3DBase_IsRefresh"></a> IsRefresh

```csharp
[SaveProperty(false)]
public bool IsRefresh { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_LineDataSeries3DBase_LineSeriesType"></a> LineSeriesType

```csharp
public abstract LineSeriesType LineSeriesType { get; }
```

#### Property Value

 [LineSeriesType](VM.Models.Post.LineSeriesType.md)

### <a id="VM_Models_Post_LineDataSeries3DBase_NeedSavePoints"></a> NeedSavePoints

```csharp
public bool NeedSavePoints { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_LineDataSeries3DBase_ParentID"></a> ParentID

```csharp
public int ParentID { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_LineDataSeries3DBase_PointSize"></a> PointSize

```csharp
public float PointSize { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="VM_Models_Post_LineDataSeries3DBase_PointType"></a> PointType

```csharp
public PointType PointType { get; set; }
```

#### Property Value

 [PointType](VM.Models.Post.PointType.md)

### <a id="VM_Models_Post_LineDataSeries3DBase_Points"></a> Points

```csharp
public Vector[] Points { get; set; }
```

#### Property Value

 Vector\[\]

### <a id="VM_Models_Post_LineDataSeries3DBase_RelatedSeries"></a> RelatedSeries

```csharp
public IEnumerable<ISeries> RelatedSeries { get; }
```

#### Property Value

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[ISeries](VM.Models.Post.ISeries.md)\>

### <a id="VM_Models_Post_LineDataSeries3DBase_ResultDocumentFilePath"></a> ResultDocumentFilePath

```csharp
public string ResultDocumentFilePath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_LineDataSeries3DBase_StrokeThickness"></a> StrokeThickness

```csharp
public float StrokeThickness { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="VM_Models_Post_LineDataSeries3DBase_Unit"></a> Unit

```csharp
public ExtendedUnit Unit { get; }
```

#### Property Value

 [ExtendedUnit](VM.Models.Post.ExtendedUnit.md)

### <a id="VM_Models_Post_LineDataSeries3DBase_XAxisID"></a> XAxisID

```csharp
public string XAxisID { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_LineDataSeries3DBase_YAxisID"></a> YAxisID

```csharp
public string YAxisID { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="VM_Models_Post_LineDataSeries3DBase_ChangeParent_System_Int32_"></a> ChangeParent\(int\)

```csharp
public void ChangeParent(int parentID)
```

#### Parameters

`parentID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

