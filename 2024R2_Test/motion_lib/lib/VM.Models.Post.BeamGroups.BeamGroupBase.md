# <a id="VM_Models_Post_BeamGroups_BeamGroupBase"></a> Class BeamGroupBase

Namespace: [VM.Models.Post.BeamGroups](VM.Models.Post.BeamGroups.md)  
Assembly: VM.Models.Post.EntityTypes.dll  

```csharp
public abstract class BeamGroupBase : EntityBase, IObservableObject, IDisposableObject, IBodyBase, IEntity, IObject, IHasName, IHasIndex, IHasID
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
ObjectBase ← 
EntityBase ← 
[BeamGroupBase](VM.Models.Post.BeamGroups.BeamGroupBase.md)

#### Derived

[FEBeamGroup](VM.Models.Post.BeamGroups.FEBeamGroup.md), 
[RigidBeamGroup](VM.Models.Post.BeamGroups.RigidBeamGroup.md)

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

### <a id="VM_Models_Post_BeamGroups_BeamGroupBase__ctor_VM_Models_Post_ResultDocument_VM_Identifier_System_String_"></a> BeamGroupBase\(ResultDocument, Identifier, string\)

```csharp
protected BeamGroupBase(ResultDocument parentDocument, Identifier analysisResultID, string fullName)
```

#### Parameters

`parentDocument` ResultDocument

`analysisResultID` Identifier

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### <a id="VM_Models_Post_BeamGroups_BeamGroupBase_CanLoad"></a> CanLoad

```csharp
protected override bool CanLoad { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_BeamGroups_BeamGroupBase_CanSave"></a> CanSave

```csharp
protected override bool CanSave { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_BeamGroups_BeamGroupBase_CategoryType"></a> CategoryType

```csharp
public override CategoryType CategoryType { get; }
```

#### Property Value

 CategoryType

### <a id="VM_Models_Post_BeamGroups_BeamGroupBase_Color"></a> Color

```csharp
public Color Color { get; set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)

### <a id="VM_Models_Post_BeamGroups_BeamGroupBase_DataParts"></a> DataParts

```csharp
public IList<IDataPart> DataParts { get; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<IDataPart\>

### <a id="VM_Models_Post_BeamGroups_BeamGroupBase_EntityType"></a> EntityType

```csharp
public override EntityType EntityType { get; }
```

#### Property Value

 EntityType

### <a id="VM_Models_Post_BeamGroups_BeamGroupBase_IsContour"></a> IsContour

```csharp
public bool IsContour { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_BeamGroups_BeamGroupBase_IsVisible"></a> IsVisible

```csharp
[SaveProperty(false)]
public bool IsVisible { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_BeamGroups_BeamGroupBase_PointSize"></a> PointSize

```csharp
public int PointSize { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_BeamGroups_BeamGroupBase_RenderType"></a> RenderType

```csharp
public RenderingType RenderType { get; set; }
```

#### Property Value

 RenderingType

### <a id="VM_Models_Post_BeamGroups_BeamGroupBase_TextureImage"></a> TextureImage

```csharp
public Bitmap TextureImage { get; set; }
```

#### Property Value

 Bitmap

## Methods

### <a id="VM_Models_Post_BeamGroups_BeamGroupBase_ContainsPartIndex_System_Int32_"></a> ContainsPartIndex\(int\)

```csharp
public bool ContainsPartIndex(int partIndex)
```

#### Parameters

`partIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

