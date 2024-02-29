# <a id="VM_Models_Post_DriveTrainLineDataSeriesBase"></a> Class DriveTrainLineDataSeriesBase

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public abstract class DriveTrainLineDataSeriesBase : LineDataSeriesBase, IObservableObject, IDisposableObject, ISeries, IObject, IHasName
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
[ObjectBase](VM.Models.Post.ObjectBase.md) ← 
[LineDataSeriesBase](VM.Models.Post.LineDataSeriesBase.md) ← 
[DriveTrainLineDataSeriesBase](VM.Models.Post.DriveTrainLineDataSeriesBase.md)

#### Derived

[DynamicPPTELineDataSeries](VM.Models.Post.DynamicPPTELineDataSeries.md), 
[HarmonicTELineDataSeries](VM.Models.Post.HarmonicTELineDataSeries.md), 
[ShuttlingForceLineDataSeries](VM.Models.Post.ShuttlingForceLineDataSeries.md)

#### Implements

IObservableObject, 
IDisposableObject, 
[ISeries](VM.Models.Post.ISeries.md), 
[IObject](VM.Models.Post.IObject.md), 
IHasName

#### Inherited Members

[LineDataSeriesBase.Separators](VM.Models.Post.LineDataSeriesBase.md\#VM\_Models\_Post\_LineDataSeriesBase\_Separators), 
[LineDataSeriesBase.ChangeParent\(int\)](VM.Models.Post.LineDataSeriesBase.md\#VM\_Models\_Post\_LineDataSeriesBase\_ChangeParent\_System\_Int32\_), 
[LineDataSeriesBase.Initialize\(Action\)](VM.Models.Post.LineDataSeriesBase.md\#VM\_Models\_Post\_LineDataSeriesBase\_Initialize\_System\_Action\_), 
[LineDataSeriesBase.DisposeManagedResources\(\)](VM.Models.Post.LineDataSeriesBase.md\#VM\_Models\_Post\_LineDataSeriesBase\_DisposeManagedResources), 
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

### <a id="VM_Models_Post_DriveTrainLineDataSeriesBase__ctor_System_Int32_System_String_System_String_VM_Models_Post_ExtendedUnit_System_String_"></a> DriveTrainLineDataSeriesBase\(int, string, string, ExtendedUnit, string\)

```csharp
public DriveTrainLineDataSeriesBase(int parentID, string id, string fullName, ExtendedUnit unit, string resultDocumentFilePath)
```

#### Parameters

`parentID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`unit` [ExtendedUnit](VM.Models.Post.ExtendedUnit.md)

`resultDocumentFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### <a id="VM_Models_Post_DriveTrainLineDataSeriesBase_NeedSavePoints"></a> NeedSavePoints

```csharp
public override bool NeedSavePoints { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_DriveTrainLineDataSeriesBase_SelectedObject"></a> SelectedObject

```csharp
[SaveProperty(false)]
public string SelectedObject { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_DriveTrainLineDataSeriesBase_SelectedObjectFullPath"></a> SelectedObjectFullPath

```csharp
[SaveProperty(false)]
public string SelectedObjectFullPath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

