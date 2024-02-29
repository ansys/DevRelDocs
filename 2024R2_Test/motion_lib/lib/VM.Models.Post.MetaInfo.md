# <a id="VM_Models_Post_MetaInfo"></a> Class MetaInfo

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public sealed class MetaInfo : ObservableObject, IObservableObject, IDisposableObject
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
[MetaInfo](VM.Models.Post.MetaInfo.md)

#### Implements

IObservableObject, 
IDisposableObject

#### Inherited Members

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

### <a id="VM_Models_Post_MetaInfo__ctor_VM_Identifier_"></a> MetaInfo\(Identifier\)

```csharp
public MetaInfo(Identifier analysisResultID)
```

#### Parameters

`analysisResultID` Identifier

## Properties

### <a id="VM_Models_Post_MetaInfo_DummyCount"></a> DummyCount

```csharp
public int DummyCount { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_MetaInfo_EigenvalueAnalysisInfos"></a> EigenvalueAnalysisInfos

```csharp
public IList<EigenvalueAnalysisInfo> EigenvalueAnalysisInfos { get; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[EigenvalueAnalysisInfo](VM.Models.Post.EigenvalueAnalysisInfo.md)\>

### <a id="VM_Models_Post_MetaInfo_Entities"></a> Entities

```csharp
public IEnumerable<EntityBase> Entities { get; }
```

#### Property Value

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[EntityBase](VM.Models.Post.EntityBase.md)\>

### <a id="VM_Models_Post_MetaInfo_ModalBodyCount"></a> ModalBodyCount

```csharp
public int ModalBodyCount { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_MetaInfo_ModelName"></a> ModelName

```csharp
public string ModelName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_MetaInfo_NodalBodyCount"></a> NodalBodyCount

```csharp
public int NodalBodyCount { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_MetaInfo_PartIdentifiers"></a> PartIdentifiers

```csharp
public Identifier[] PartIdentifiers { get; set; }
```

#### Property Value

 Identifier\[\]

### <a id="VM_Models_Post_MetaInfo_RigidBodyCount"></a> RigidBodyCount

```csharp
public int RigidBodyCount { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_MetaInfo_SystemUnit"></a> SystemUnit

```csharp
public ExtendedUnit SystemUnit { get; set; }
```

#### Property Value

 [ExtendedUnit](VM.Models.Post.ExtendedUnit.md)

### <a id="VM_Models_Post_MetaInfo_UserDefinedVectorEntityInfos"></a> UserDefinedVectorEntityInfos

```csharp
public IList<UserDefinedVectorEntityInfo> UserDefinedVectorEntityInfos { get; set; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[UserDefinedVectorEntityInfo](VM.Models.Post.UserDefinedVectorEntityInfo.md)\>

### <a id="VM_Models_Post_MetaInfo_UserDefinedVectorIndexes"></a> UserDefinedVectorIndexes

```csharp
public IDictionary<string, int> UserDefinedVectorIndexes { get; set; }
```

#### Property Value

 [IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [int](https://learn.microsoft.com/dotnet/api/system.int32)\>

## Methods

### <a id="VM_Models_Post_MetaInfo_Add_VM_Models_Post_EntityBase_"></a> Add\(EntityBase\)

```csharp
public void Add(EntityBase entity)
```

#### Parameters

`entity` [EntityBase](VM.Models.Post.EntityBase.md)

### <a id="VM_Models_Post_MetaInfo_Add_System_Collections_Generic_IEnumerable_VM_Models_Post_EntityBase__"></a> Add\(IEnumerable<EntityBase\>\)

```csharp
public void Add(IEnumerable<EntityBase> entities)
```

#### Parameters

`entities` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[EntityBase](VM.Models.Post.EntityBase.md)\>

### <a id="VM_Models_Post_MetaInfo_Contains_System_String_"></a> Contains\(string\)

```csharp
public bool Contains(string fullName)
```

#### Parameters

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_MetaInfo_DisposeManagedResources"></a> DisposeManagedResources\(\)

```csharp
protected override void DisposeManagedResources()
```

### <a id="VM_Models_Post_MetaInfo_GetConnectableObservable_System_Boolean_"></a> GetConnectableObservable\(bool\)

```csharp
public IConnectableObservable<IChangeSet<EntityBase, Identifier>> GetConnectableObservable(bool isReplay = true)
```

#### Parameters

`isReplay` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 IConnectableObservable<IChangeSet<[EntityBase](VM.Models.Post.EntityBase.md), Identifier\>\>

### <a id="VM_Models_Post_MetaInfo_GetEntities__1_VM_Models_Post_EntityType_"></a> GetEntities<TEntity\>\(EntityType\)

```csharp
public IEnumerable<TEntity> GetEntities<TEntity>(EntityType entityType) where TEntity : IEntity
```

#### Parameters

`entityType` [EntityType](VM.Models.Post.EntityType.md)

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<TEntity\>

#### Type Parameters

`TEntity` 

### <a id="VM_Models_Post_MetaInfo_GetEntities__1_VM_Models_Post_EntityType___"></a> GetEntities<TEntity\>\(params EntityType\[\]\)

```csharp
public IEnumerable<TEntity> GetEntities<TEntity>(params EntityType[] entityTypes) where TEntity : EntityBase
```

#### Parameters

`entityTypes` [EntityType](VM.Models.Post.EntityType.md)\[\]

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<TEntity\>

#### Type Parameters

`TEntity` 

### <a id="VM_Models_Post_MetaInfo_GetEntities_VM_Models_Post_EntityType_"></a> GetEntities\(EntityType\)

```csharp
public IEnumerable<EntityBase> GetEntities(EntityType entityType)
```

#### Parameters

`entityType` [EntityType](VM.Models.Post.EntityType.md)

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[EntityBase](VM.Models.Post.EntityBase.md)\>

### <a id="VM_Models_Post_MetaInfo_GetEntity_VM_Identifier_"></a> GetEntity\(Identifier\)

```csharp
public EntityBase GetEntity(Identifier identifier)
```

#### Parameters

`identifier` Identifier

#### Returns

 [EntityBase](VM.Models.Post.EntityBase.md)

### <a id="VM_Models_Post_MetaInfo_GetEntity__1_VM_Identifier_"></a> GetEntity<TEntity\>\(Identifier\)

```csharp
public TEntity GetEntity<TEntity>(Identifier identifier) where TEntity : IEntity
```

#### Parameters

`identifier` Identifier

#### Returns

 TEntity

#### Type Parameters

`TEntity` 

### <a id="VM_Models_Post_MetaInfo_GetEntity_VM_Models_Post_EntityType_System_Int32_"></a> GetEntity\(EntityType, int\)

```csharp
public EntityBase GetEntity(EntityType entityType, int index)
```

#### Parameters

`entityType` [EntityType](VM.Models.Post.EntityType.md)

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [EntityBase](VM.Models.Post.EntityBase.md)

### <a id="VM_Models_Post_MetaInfo_GetEntity__1_VM_Models_Post_EntityType_System_Int32_"></a> GetEntity<TEntity\>\(EntityType, int\)

```csharp
public TEntity GetEntity<TEntity>(EntityType entityType, int index) where TEntity : IEntity
```

#### Parameters

`entityType` [EntityType](VM.Models.Post.EntityType.md)

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 TEntity

#### Type Parameters

`TEntity` 

### <a id="VM_Models_Post_MetaInfo_GetEntity_System_String_"></a> GetEntity\(string\)

```csharp
public EntityBase GetEntity(string fullName)
```

#### Parameters

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [EntityBase](VM.Models.Post.EntityBase.md)

### <a id="VM_Models_Post_MetaInfo_GetEntity__1_System_String_"></a> GetEntity<TEntity\>\(string\)

```csharp
public TEntity GetEntity<TEntity>(string fullName) where TEntity : IEntity
```

#### Parameters

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 TEntity

#### Type Parameters

`TEntity` 

### <a id="VM_Models_Post_MetaInfo_GetEntityCount"></a> GetEntityCount\(\)

```csharp
public int GetEntityCount()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_MetaInfo_GetEntityCount_VM_Models_Post_EntityType_"></a> GetEntityCount\(EntityType\)

```csharp
public int GetEntityCount(EntityType entityType)
```

#### Parameters

`entityType` [EntityType](VM.Models.Post.EntityType.md)

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_MetaInfo_GetUniqueName_System_String_"></a> GetUniqueName\(string\)

```csharp
public string GetUniqueName(string fullName)
```

#### Parameters

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_MetaInfo_Remove_VM_Models_Post_EntityBase___"></a> Remove\(params EntityBase\[\]\)

```csharp
public void Remove(params EntityBase[] entities)
```

#### Parameters

`entities` [EntityBase](VM.Models.Post.EntityBase.md)\[\]

### <a id="VM_Models_Post_MetaInfo_Remove_VM_Identifier___"></a> Remove\(params Identifier\[\]\)

```csharp
public void Remove(params Identifier[] identifiers)
```

#### Parameters

`identifiers` Identifier\[\]

### <a id="VM_Models_Post_MetaInfo_Remove_VM_Models_Post_EntityType_"></a> Remove\(EntityType\)

```csharp
public void Remove(EntityType entityType)
```

#### Parameters

`entityType` [EntityType](VM.Models.Post.EntityType.md)

### <a id="VM_Models_Post_MetaInfo_TryGetEntity__1_VM_Identifier___0__"></a> TryGetEntity<TEntity\>\(Identifier, out TEntity\)

```csharp
public bool TryGetEntity<TEntity>(Identifier identifier, out TEntity entity) where TEntity : IEntity
```

#### Parameters

`identifier` Identifier

`entity` TEntity

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`TEntity` 

### <a id="VM_Models_Post_MetaInfo_TryGetEntity_VM_Identifier_VM_Models_Post_EntityBase__"></a> TryGetEntity\(Identifier, out EntityBase\)

```csharp
public bool TryGetEntity(Identifier identifier, out EntityBase entity)
```

#### Parameters

`identifier` Identifier

`entity` [EntityBase](VM.Models.Post.EntityBase.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_MetaInfo_TryGetEntity__1_System_String___0__"></a> TryGetEntity<TEntity\>\(string, out TEntity\)

```csharp
public bool TryGetEntity<TEntity>(string fullName, out TEntity entity) where TEntity : class, IEntity
```

#### Parameters

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`entity` TEntity

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`TEntity` 

### <a id="VM_Models_Post_MetaInfo_TryGetEntity_System_String_VM_Models_Post_EntityBase__"></a> TryGetEntity\(string, out EntityBase\)

```csharp
public bool TryGetEntity(string fullName, out EntityBase entity)
```

#### Parameters

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`entity` [EntityBase](VM.Models.Post.EntityBase.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_MetaInfo_TryGetEntity__1_VM_Models_Post_EntityType_System_Int32___0__"></a> TryGetEntity<TEntity\>\(EntityType, int, out TEntity\)

```csharp
public bool TryGetEntity<TEntity>(EntityType entityType, int index, out TEntity entity) where TEntity : class, IEntity
```

#### Parameters

`entityType` [EntityType](VM.Models.Post.EntityType.md)

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`entity` TEntity

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`TEntity` 

### <a id="VM_Models_Post_MetaInfo_TryGetIdentifierByIndex_VM_Models_Post_EntityType_System_Int32_VM_Identifier__"></a> TryGetIdentifierByIndex\(EntityType, int, out Identifier\)

```csharp
public bool TryGetIdentifierByIndex(EntityType entityType, int index, out Identifier identifier)
```

#### Parameters

`entityType` [EntityType](VM.Models.Post.EntityType.md)

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`identifier` Identifier

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

