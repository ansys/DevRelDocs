# <a id="VM_Models_Post_DriveTrains_BeamGroupShaftSet"></a> Class BeamGroupShaftSet

Namespace: [VM.Models.Post.DriveTrains](VM.Models.Post.DriveTrains.md)  
Assembly: VM.Models.Post.EntityTypes.dll  

```csharp
public sealed class BeamGroupShaftSet : ShaftSetBase, IObservableObject, IDisposableObject, IDriveTrain, IBodyBase, IRigidBeamGroup, IContourable, IPlottable, IEntity, IObject, IHasName, IHasIndex, IHasID
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
ObjectBase ← 
EntityBase ← 
[DriveTrainBase](VM.Models.Post.DriveTrains.DriveTrainBase.md) ← 
[ShaftSetBase](VM.Models.Post.DriveTrains.ShaftSetBase.md) ← 
[BeamGroupShaftSet](VM.Models.Post.DriveTrains.BeamGroupShaftSet.md)

#### Implements

IObservableObject, 
IDisposableObject, 
IDriveTrain, 
IBodyBase, 
IRigidBeamGroup, 
IContourable, 
IPlottable, 
IEntity, 
IObject, 
IHasName, 
IHasIndex, 
IHasID

#### Inherited Members

[ShaftSetBase.CategoryType](VM.Models.Post.DriveTrains.ShaftSetBase.md\#VM\_Models\_Post\_DriveTrains\_ShaftSetBase\_CategoryType), 
[ShaftSetBase.EntityType](VM.Models.Post.DriveTrains.ShaftSetBase.md\#VM\_Models\_Post\_DriveTrains\_ShaftSetBase\_EntityType), 
[DriveTrainBase.AddSubRequest\(ISubRequest\)](VM.Models.Post.DriveTrains.DriveTrainBase.md\#VM\_Models\_Post\_DriveTrains\_DriveTrainBase\_AddSubRequest\_VM\_Models\_Post\_ISubRequest\_), 
[DriveTrainBase.DisplayName](VM.Models.Post.DriveTrains.DriveTrainBase.md\#VM\_Models\_Post\_DriveTrains\_DriveTrainBase\_DisplayName), 
[DriveTrainBase.ChartCharacteristics](VM.Models.Post.DriveTrains.DriveTrainBase.md\#VM\_Models\_Post\_DriveTrains\_DriveTrainBase\_ChartCharacteristics), 
[DriveTrainBase.DataCount](VM.Models.Post.DriveTrains.DriveTrainBase.md\#VM\_Models\_Post\_DriveTrains\_DriveTrainBase\_DataCount), 
[DriveTrainBase.Datas](VM.Models.Post.DriveTrains.DriveTrainBase.md\#VM\_Models\_Post\_DriveTrains\_DriveTrainBase\_Datas), 
[DriveTrainBase.FilePath](VM.Models.Post.DriveTrains.DriveTrainBase.md\#VM\_Models\_Post\_DriveTrains\_DriveTrainBase\_FilePath), 
[DriveTrainBase.MainFileType](VM.Models.Post.DriveTrains.DriveTrainBase.md\#VM\_Models\_Post\_DriveTrains\_DriveTrainBase\_MainFileType), 
[DriveTrainBase.SubRequests](VM.Models.Post.DriveTrains.DriveTrainBase.md\#VM\_Models\_Post\_DriveTrains\_DriveTrainBase\_SubRequests), 
[DriveTrainBase.Times](VM.Models.Post.DriveTrains.DriveTrainBase.md\#VM\_Models\_Post\_DriveTrains\_DriveTrainBase\_Times), 
[DriveTrainBase.TransientData](VM.Models.Post.DriveTrains.DriveTrainBase.md\#VM\_Models\_Post\_DriveTrains\_DriveTrainBase\_TransientData), 
EntityBase.IsSupported\(EntityFilterMode\), 
EntityBase.CategoryType, 
EntityBase.EntityType, 
EntityBase.HasGeometry, 
EntityBase.ID, 
EntityBase.Index, 
EntityBase.InitialValues, 
EntityBase.IsDummy, 
EntityBase.IsPlottable, 
ObjectBase.GetUnstructGridModel\(\), 
ObjectBase.SetName\(string\), 
ObjectBase.UpdateAnimation\(UpdateActionType\), 
ObjectBase.AnalysisResult, 
ObjectBase.AnalysisResultID, 
ObjectBase.AnalysisResultType, 
ObjectBase.DisplayName, 
ObjectBase.FullName, 
ObjectBase.Name, 
ObjectBase.ParentDocument, 
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

## Constructors

### <a id="VM_Models_Post_DriveTrains_BeamGroupShaftSet__ctor_VM_Models_Post_ResultDocument_VM_Identifier_System_String_"></a> BeamGroupShaftSet\(ResultDocument, Identifier, string\)

```csharp
public BeamGroupShaftSet(ResultDocument parentDocument, Identifier analysisResultID, string fullName)
```

#### Parameters

`parentDocument` ResultDocument

`analysisResultID` Identifier

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### <a id="VM_Models_Post_DriveTrains_BeamGroupShaftSet_CanLoad"></a> CanLoad

```csharp
protected override bool CanLoad { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_DriveTrains_BeamGroupShaftSet_CanSave"></a> CanSave

```csharp
protected override bool CanSave { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_DriveTrains_BeamGroupShaftSet_CategoryType"></a> CategoryType

```csharp
public override CategoryType CategoryType { get; }
```

#### Property Value

 CategoryType

### <a id="VM_Models_Post_DriveTrains_BeamGroupShaftSet_Color"></a> Color

```csharp
public Color Color { get; set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)

### <a id="VM_Models_Post_DriveTrains_BeamGroupShaftSet_DataParts"></a> DataParts

```csharp
public IList<IDataPart> DataParts { get; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<IDataPart\>

### <a id="VM_Models_Post_DriveTrains_BeamGroupShaftSet_EntityType"></a> EntityType

```csharp
public override EntityType EntityType { get; }
```

#### Property Value

 EntityType

### <a id="VM_Models_Post_DriveTrains_BeamGroupShaftSet_IsVisible"></a> IsVisible

```csharp
[SaveProperty(false)]
public bool IsVisible { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_DriveTrains_BeamGroupShaftSet_PlottableType"></a> PlottableType

```csharp
public PlottableType PlottableType { get; }
```

#### Property Value

 PlottableType

### <a id="VM_Models_Post_DriveTrains_BeamGroupShaftSet_RenderType"></a> RenderType

```csharp
[SaveProperty(false)]
public RenderingType RenderType { get; set; }
```

#### Property Value

 RenderingType

### <a id="VM_Models_Post_DriveTrains_BeamGroupShaftSet_SubBeamGroups"></a> SubBeamGroups

```csharp
public SubBeamGroup[] SubBeamGroups { get; set; }
```

#### Property Value

 SubBeamGroup\[\]

### <a id="VM_Models_Post_DriveTrains_BeamGroupShaftSet_TextureImage"></a> TextureImage

```csharp
public Bitmap TextureImage { get; set; }
```

#### Property Value

 Bitmap

## Methods

### <a id="VM_Models_Post_DriveTrains_BeamGroupShaftSet_CanContour_VM_Models_ContourMappingType_"></a> CanContour\(ContourMappingType\)

```csharp
public bool CanContour(ContourMappingType contourMappingType)
```

#### Parameters

`contourMappingType` ContourMappingType

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_DriveTrains_BeamGroupShaftSet_ContainsPartIndex_System_Int32_"></a> ContainsPartIndex\(int\)

```csharp
public bool ContainsPartIndex(int partIndex)
```

#### Parameters

`partIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

