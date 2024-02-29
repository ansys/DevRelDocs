# <a id="VM_Models_Post_BeamGroups_FEBeamGroup"></a> Class FEBeamGroup

Namespace: [VM.Models.Post.BeamGroups](VM.Models.Post.BeamGroups.md)  
Assembly: VM.Models.Post.EntityTypes.dll  

```csharp
public sealed class FEBeamGroup : BeamGroupBase, IObservableObject, IDisposableObject, IBodyBase, IEntity, IObject, IHasName, IHasIndex, IHasID
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
ObjectBase ← 
EntityBase ← 
[BeamGroupBase](VM.Models.Post.BeamGroups.BeamGroupBase.md) ← 
[FEBeamGroup](VM.Models.Post.BeamGroups.FEBeamGroup.md)

#### Implements

IObservableObject, 
IDisposableObject, 
IBodyBase, 
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

### <a id="VM_Models_Post_BeamGroups_FEBeamGroup__ctor_VM_Models_Post_ResultDocument_VM_Identifier_System_String_"></a> FEBeamGroup\(ResultDocument, Identifier, string\)

```csharp
public FEBeamGroup(ResultDocument parentDocument, Identifier analysisResultID, string fullName)
```

#### Parameters

`parentDocument` ResultDocument

`analysisResultID` Identifier

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### <a id="VM_Models_Post_BeamGroups_FEBeamGroup_BeamSegments"></a> BeamSegments

```csharp
public IList<FEBeamSegment> BeamSegments { get; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[FEBeamSegment](VM.Models.Post.BeamGroups.FEBeamSegment.md)\>

### <a id="VM_Models_Post_BeamGroups_FEBeamGroup_CanLoad"></a> CanLoad

```csharp
protected override bool CanLoad { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_BeamGroups_FEBeamGroup_CanSave"></a> CanSave

```csharp
protected override bool CanSave { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_BeamGroups_FEBeamGroup_IsSupportedGeneralMode"></a> IsSupportedGeneralMode

```csharp
protected override bool IsSupportedGeneralMode { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_BeamGroups_FEBeamGroup_ParentIndex"></a> ParentIndex

```csharp
public int ParentIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### <a id="VM_Models_Post_BeamGroups_FEBeamGroup_Dispose_System_Boolean_"></a> Dispose\(bool\)

```csharp
protected override void Dispose(bool disposing)
```

#### Parameters

`disposing` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

