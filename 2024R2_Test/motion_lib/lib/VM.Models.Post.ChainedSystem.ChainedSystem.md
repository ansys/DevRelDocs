# <a id="VM_Models_Post_ChainedSystem_ChainedSystem"></a> Class ChainedSystem

Namespace: [VM.Models.Post.ChainedSystem](VM.Models.Post.ChainedSystem.md)  
Assembly: VM.Models.Post.EntityTypes.dll  

```csharp
public sealed class ChainedSystem : EntityBase, IObservableObject, IDisposableObject, IContourable, IEntity, IObject, IHasName, IHasIndex, IHasID
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
ObjectBase ← 
EntityBase ← 
[ChainedSystem](VM.Models.Post.ChainedSystem.ChainedSystem.md)

#### Implements

IObservableObject, 
IDisposableObject, 
IContourable, 
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

### <a id="VM_Models_Post_ChainedSystem_ChainedSystem__ctor_VM_Models_Post_ResultDocument_VM_Identifier_System_String_"></a> ChainedSystem\(ResultDocument, Identifier, string\)

```csharp
public ChainedSystem(ResultDocument parentDocumentID, Identifier analysisResultID, string fullName)
```

#### Parameters

`parentDocumentID` ResultDocument

`analysisResultID` Identifier

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### <a id="VM_Models_Post_ChainedSystem_ChainedSystem_CategoryType"></a> CategoryType

```csharp
public override CategoryType CategoryType { get; }
```

#### Property Value

 CategoryType

### <a id="VM_Models_Post_ChainedSystem_ChainedSystem_ContourTypes"></a> ContourTypes

```csharp
public Dictionary<AnalysisResultType, Dictionary<ContourMappingType, Dictionary<string, (string, int)[]>>> ContourTypes { get; }
```

#### Property Value

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<AnalysisResultType, [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<ContourMappingType, [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), \([string](https://learn.microsoft.com/dotnet/api/system.string), [int](https://learn.microsoft.com/dotnet/api/system.int32)\)\[\]\>\>\>

### <a id="VM_Models_Post_ChainedSystem_ChainedSystem_EntityType"></a> EntityType

```csharp
public override EntityType EntityType { get; }
```

#### Property Value

 EntityType

### <a id="VM_Models_Post_ChainedSystem_ChainedSystem_Segments"></a> Segments

```csharp
public IList<IList<int>> Segments { get; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>\>

### <a id="VM_Models_Post_ChainedSystem_ChainedSystem_Type"></a> Type

```csharp
public ChainedSystemType Type { get; set; }
```

#### Property Value

 ChainedSystemType

### <a id="VM_Models_Post_ChainedSystem_ChainedSystem_UserSubroutineIndex"></a> UserSubroutineIndex

```csharp
public int UserSubroutineIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### <a id="VM_Models_Post_ChainedSystem_ChainedSystem_CanContour_VM_Models_ContourMappingType_"></a> CanContour\(ContourMappingType\)

```csharp
public bool CanContour(ContourMappingType contourMappingType)
```

#### Parameters

`contourMappingType` ContourMappingType

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

