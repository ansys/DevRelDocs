# <a id="VM_Models_Post_BeamGroups_RigidBeamGroup"></a> Class RigidBeamGroup

Namespace: [VM.Models.Post.BeamGroups](VM.Models.Post.BeamGroups.md)  
Assembly: VM.Models.Post.EntityTypes.dll  

```csharp
public abstract class RigidBeamGroup : BeamGroupBase, IObservableObject, IDisposableObject, IBodyBase, IRigidBeamGroup, IContourable, IEntity, IObject, IHasName, IHasIndex, IHasID
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
ObjectBase ← 
EntityBase ← 
[BeamGroupBase](VM.Models.Post.BeamGroups.BeamGroupBase.md) ← 
[RigidBeamGroup](VM.Models.Post.BeamGroups.RigidBeamGroup.md)

#### Derived

[GeneralBeamGroup](VM.Models.Post.BeamGroups.GeneralBeamGroup.md)

#### Implements

IObservableObject, 
IDisposableObject, 
IBodyBase, 
IRigidBeamGroup, 
IContourable, 
IEntity, 
IObject, 
IHasName, 
IHasIndex, 
IHasID

#### Inherited Members

[BeamGroupBase.ContainsPartIndex\(int\)](VM.Models.Post.BeamGroups.BeamGroupBase.md\#VM\_Models\_Post\_BeamGroups\_BeamGroupBase\_ContainsPartIndex\_System\_Int32\_), 
[BeamGroupBase.CategoryType](VM.Models.Post.BeamGroups.BeamGroupBase.md\#VM\_Models\_Post\_BeamGroups\_BeamGroupBase\_CategoryType), 
[BeamGroupBase.Color](VM.Models.Post.BeamGroups.BeamGroupBase.md\#VM\_Models\_Post\_BeamGroups\_BeamGroupBase\_Color), 
[BeamGroupBase.DataParts](VM.Models.Post.BeamGroups.BeamGroupBase.md\#VM\_Models\_Post\_BeamGroups\_BeamGroupBase\_DataParts), 
[BeamGroupBase.EntityType](VM.Models.Post.BeamGroups.BeamGroupBase.md\#VM\_Models\_Post\_BeamGroups\_BeamGroupBase\_EntityType), 
[BeamGroupBase.IsContour](VM.Models.Post.BeamGroups.BeamGroupBase.md\#VM\_Models\_Post\_BeamGroups\_BeamGroupBase\_IsContour), 
[BeamGroupBase.IsVisible](VM.Models.Post.BeamGroups.BeamGroupBase.md\#VM\_Models\_Post\_BeamGroups\_BeamGroupBase\_IsVisible), 
[BeamGroupBase.PointSize](VM.Models.Post.BeamGroups.BeamGroupBase.md\#VM\_Models\_Post\_BeamGroups\_BeamGroupBase\_PointSize), 
[BeamGroupBase.RenderType](VM.Models.Post.BeamGroups.BeamGroupBase.md\#VM\_Models\_Post\_BeamGroups\_BeamGroupBase\_RenderType), 
[BeamGroupBase.TextureImage](VM.Models.Post.BeamGroups.BeamGroupBase.md\#VM\_Models\_Post\_BeamGroups\_BeamGroupBase\_TextureImage), 
[BeamGroupBase.CanLoad](VM.Models.Post.BeamGroups.BeamGroupBase.md\#VM\_Models\_Post\_BeamGroups\_BeamGroupBase\_CanLoad), 
[BeamGroupBase.CanSave](VM.Models.Post.BeamGroups.BeamGroupBase.md\#VM\_Models\_Post\_BeamGroups\_BeamGroupBase\_CanSave), 
EntityBase.IsSupported\(EntityFilterMode\), 
EntityBase.CategoryType, 
EntityBase.EntityType, 
EntityBase.HasGeometry, 
EntityBase.ID, 
EntityBase.Index, 
EntityBase.InitialValues, 
EntityBase.IsDummy, 
EntityBase.IsPlottable, 
EntityBase.IsSupportedGeneralMode, 
EntityBase.IsSupportedVectorDisplayMode, 
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
ObjectBase.CanLoad, 
ObjectBase.CanSave, 
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

### <a id="VM_Models_Post_BeamGroups_RigidBeamGroup__ctor_VM_Models_Post_ResultDocument_VM_Identifier_System_String_"></a> RigidBeamGroup\(ResultDocument, Identifier, string\)

```csharp
protected RigidBeamGroup(ResultDocument parentDocument, Identifier analysisResultID, string fullName)
```

#### Parameters

`parentDocument` ResultDocument

`analysisResultID` Identifier

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### <a id="VM_Models_Post_BeamGroups_RigidBeamGroup_ContourTypes"></a> ContourTypes

```csharp
public Dictionary<AnalysisResultType, Dictionary<ContourMappingType, Dictionary<string, (string, int)[]>>> ContourTypes { get; }
```

#### Property Value

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<AnalysisResultType, [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<ContourMappingType, [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), \([string](https://learn.microsoft.com/dotnet/api/system.string), [int](https://learn.microsoft.com/dotnet/api/system.int32)\)\[\]\>\>\>

### <a id="VM_Models_Post_BeamGroups_RigidBeamGroup_SubBeamGroups"></a> SubBeamGroups

```csharp
public SubBeamGroup[] SubBeamGroups { get; set; }
```

#### Property Value

 SubBeamGroup\[\]

## Methods

### <a id="VM_Models_Post_BeamGroups_RigidBeamGroup_CanContour_VM_Models_ContourMappingType_"></a> CanContour\(ContourMappingType\)

```csharp
public bool CanContour(ContourMappingType contourMappingType)
```

#### Parameters

`contourMappingType` ContourMappingType

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_BeamGroups_RigidBeamGroup_Dispose_System_Boolean_"></a> Dispose\(bool\)

```csharp
protected override void Dispose(bool disposing)
```

#### Parameters

`disposing` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

