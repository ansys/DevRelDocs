# <a id="VM_Models_Post_Chart3D"></a> Class Chart3D

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public abstract class Chart3D : Chart, IObservableObject, IDisposableObject, IObject, IHasName
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
[ObjectBase](VM.Models.Post.ObjectBase.md) ← 
[Slot](VM.Models.Post.Slot.md) ← 
[Chart](VM.Models.Post.Chart.md) ← 
[Chart3D](VM.Models.Post.Chart3D.md)

#### Derived

[STFT3D](VM.Models.Post.STFT3D.md)

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

### <a id="VM_Models_Post_Chart3D__ctor_System_Nullable_System_Int32__System_String_"></a> Chart3D\(int?, string\)

```csharp
protected Chart3D(int? id, string fullName)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_Chart3D__ctor_VM_Identifier_System_Nullable_System_Int32__System_String_"></a> Chart3D\(Identifier, int?, string\)

```csharp
protected Chart3D(Identifier parentDocumentID, int? id, string fullName)
```

#### Parameters

`parentDocumentID` Identifier

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="VM_Models_Post_Chart3D_AddAxis_VM_Models_Post_Axis_"></a> AddAxis\(Axis\)

```csharp
public override void AddAxis(Axis axis)
```

#### Parameters

`axis` [Axis](VM.Models.Post.Axis.md)

### <a id="VM_Models_Post_Chart3D_ClearAxes"></a> ClearAxes\(\)

```csharp
public override void ClearAxes()
```

### <a id="VM_Models_Post_Chart3D_CreateHeatmapLineSeries3D_System_Int32_System_String_System_String_VM_Models_Post_ExtendedUnit_VM_Vector___System_Double_System_Double_System_Single_VM_Models_Post_PointType_System_Drawing_Color_System_Single_"></a> CreateHeatmapLineSeries3D\(int, string, string, ExtendedUnit, Vector\[\], double, double, float, PointType, Color, float\)

```csharp
public static HeatmapLineDataSeries3D CreateHeatmapLineSeries3D(int parentID, string id, string fullName, ExtendedUnit unit, Vector[] points, double harmonic, double interval, float pointSize, PointType pointType, Color stroke, float strokeThickness)
```

#### Parameters

`parentID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`unit` [ExtendedUnit](VM.Models.Post.ExtendedUnit.md)

`points` Vector\[\]

`harmonic` [double](https://learn.microsoft.com/dotnet/api/system.double)

`interval` [double](https://learn.microsoft.com/dotnet/api/system.double)

`pointSize` [float](https://learn.microsoft.com/dotnet/api/system.single)

`pointType` [PointType](VM.Models.Post.PointType.md)

`stroke` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)

`strokeThickness` [float](https://learn.microsoft.com/dotnet/api/system.single)

#### Returns

 [HeatmapLineDataSeries3D](VM.Models.Post.HeatmapLineDataSeries3D.md)

### <a id="VM_Models_Post_Chart3D_DisposeManagedResources"></a> DisposeManagedResources\(\)

```csharp
protected override void DisposeManagedResources()
```

### <a id="VM_Models_Post_Chart3D_GetAxisConnectableObservable_VM_Models_Post_AxisDirection_System_Boolean_"></a> GetAxisConnectableObservable\(AxisDirection, bool\)

```csharp
public override IConnectableObservable<IChangeSet<Axis, Guid>> GetAxisConnectableObservable(AxisDirection axisDirection, bool isReplay = true)
```

#### Parameters

`axisDirection` [AxisDirection](VM.Models.Post.AxisDirection.md)

`isReplay` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 IConnectableObservable<IChangeSet<[Axis](VM.Models.Post.Axis.md), [Guid](https://learn.microsoft.com/dotnet/api/system.guid)\>\>

### <a id="VM_Models_Post_Chart3D_RemoveAxis_VM_Models_Post_AxisDirection_System_Guid___"></a> RemoveAxis\(AxisDirection, params Guid\[\]\)

```csharp
public override void RemoveAxis(AxisDirection axisDirection, params Guid[] id)
```

#### Parameters

`axisDirection` [AxisDirection](VM.Models.Post.AxisDirection.md)

`id` [Guid](https://learn.microsoft.com/dotnet/api/system.guid)\[\]

