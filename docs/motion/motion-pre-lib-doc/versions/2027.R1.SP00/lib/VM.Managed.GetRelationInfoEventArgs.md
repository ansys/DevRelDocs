# Class GetRelationInfoEventArgs
<a id="VM_Managed_GetRelationInfoEventArgs"></a>

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This class is to represent the event information that related connector from linked object.

```csharp
public sealed class GetRelationInfoEventArgs : LinkEventArgs
```

#### Inheritance

object ← 
EventArgs ← 
[LinkEventArgs](VM.Managed.LinkEventArgs.md) ← 
[GetRelationInfoEventArgs](VM.Managed.GetRelationInfoEventArgs.md)

#### Inherited Members

[LinkEventArgs.IsUpdating\(object\)](VM.Managed.LinkEventArgs.md\#VM\_Managed\_LinkEventArgs\_IsUpdating\_System\_Object\_), 
[LinkEventArgs.IsDestroying\(object\)](VM.Managed.LinkEventArgs.md\#VM\_Managed\_LinkEventArgs\_IsDestroying\_System\_Object\_), 
[LinkEventArgs.ExistUpdatingTarget\(object\)](VM.Managed.LinkEventArgs.md\#VM\_Managed\_LinkEventArgs\_ExistUpdatingTarget\_System\_Object\_), 
[LinkEventArgs.ExistDestroyingTarget\(object\)](VM.Managed.LinkEventArgs.md\#VM\_Managed\_LinkEventArgs\_ExistDestroyingTarget\_System\_Object\_), 
[LinkEventArgs.EntitiesForCircularReference](VM.Managed.LinkEventArgs.md\#VM\_Managed\_LinkEventArgs\_EntitiesForCircularReference), 
[LinkEventArgs.PreviousEventNotifier](VM.Managed.LinkEventArgs.md\#VM\_Managed\_LinkEventArgs\_PreviousEventNotifier), 
[LinkEventArgs.InnerEventArgument](VM.Managed.LinkEventArgs.md\#VM\_Managed\_LinkEventArgs\_InnerEventArgument), 
[LinkEventArgs.Extra](VM.Managed.LinkEventArgs.md\#VM\_Managed\_LinkEventArgs\_Extra), 
[LinkEventArgs.Document](VM.Managed.LinkEventArgs.md\#VM\_Managed\_LinkEventArgs\_Document), 
[LinkEventArgs.Reason](VM.Managed.LinkEventArgs.md\#VM\_Managed\_LinkEventArgs\_Reason)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_GetRelationInfoEventArgs__ctor"></a> GetRelationInfoEventArgs\(\)

Initializes a new instance of the <xref href="VM.Managed.GetRelationInfoEventArgs" data-throw-if-not-resolved="false"></xref> class.

```csharp
public GetRelationInfoEventArgs()
```

## Properties

### <a id="VM_Managed_GetRelationInfoEventArgs_RelationList"></a> RelationList

Gets the list of relation.

```csharp
public List<ObjectBase> RelationList { get; }
```

#### Property Value

 List<[ObjectBase](VM.Managed.ObjectBase.md)\>

### <a id="VM_Managed_GetRelationInfoEventArgs_SubEntityList"></a> SubEntityList

Gets the list of sub-entity.

```csharp
public List<ObjectBase> SubEntityList { get; }
```

#### Property Value

 List<[ObjectBase](VM.Managed.ObjectBase.md)\>

## Methods

### <a id="VM_Managed_GetRelationInfoEventArgs_AddRelationList_VM_Managed_ObjectBase_"></a> AddRelationList\(ObjectBase\)

Adds the relation information to list.

```csharp
public void AddRelationList(ObjectBase relation)
```

#### Parameters

`relation` [ObjectBase](VM.Managed.ObjectBase.md)

The added relation.

### <a id="VM_Managed_GetRelationInfoEventArgs_AddSubEntityList_VM_Managed_ObjectBase_"></a> AddSubEntityList\(ObjectBase\)

Adds the sub-entity information to list.

```csharp
public void AddSubEntityList(ObjectBase subentity)
```

#### Parameters

`subentity` [ObjectBase](VM.Managed.ObjectBase.md)

The added sub-entity.

