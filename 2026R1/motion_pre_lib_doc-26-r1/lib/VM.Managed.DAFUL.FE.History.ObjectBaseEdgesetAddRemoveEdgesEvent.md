#  Class ObjectBaseEdgesetAddRemoveEdgesEvent

Namespace: [VM.Managed.DAFUL.FE.History](VM.Managed.DAFUL.FE.History.md)  
Assembly: VMFE.dll  

This base class is to represent the add/remove event for edgeset.

```csharp
public abstract class ObjectBaseEdgesetAddRemoveEdgesEvent : HistoryEvent
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
HistoryEvent ← 
[ObjectBaseEdgesetAddRemoveEdgesEvent](VM.Managed.DAFUL.FE.History.ObjectBaseEdgesetAddRemoveEdgesEvent.md)

#### Derived

[ObjectBaseEdgesetAddEdgesEvent](VM.Managed.DAFUL.FE.History.ObjectBaseEdgesetAddEdgesEvent.md), 
[ObjectBaseEdgesetRemoveEdgesEvent](VM.Managed.DAFUL.FE.History.ObjectBaseEdgesetRemoveEdgesEvent.md)

#### Inherited Members

HistoryEvent.ClearEvent\(bool\), 
HistoryEvent.Undo\(HistoryEventArgs\), 
HistoryEvent.Redo\(HistoryEventArgs\), 
HistoryEvent.Clear\(bool\), 
HistoryEvent.BeforeUndo\(HistoryEventArgs\), 
HistoryEvent.AfterUndo\(HistoryEventArgs\), 
HistoryEvent.BeforeRedo\(HistoryEventArgs\), 
HistoryEvent.AfterRedo\(HistoryEventArgs\), 
HistoryEvent.BeforeAdded\(AddToHistoryManagerEventArgs\), 
HistoryEvent.AfterAdded\(HistoryEventArgs\), 
HistoryEvent.IsValid

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_FE_History_ObjectBaseEdgesetAddRemoveEdgesEvent__ctor_System_Object_System_Collections_Generic_ICollection_System_Tuple_System_UInt32_System_UInt32___"></a> ObjectBaseEdgesetAddRemoveEdgesEvent\(object, ICollection<Tuple<uint, uint\>\>\)

```csharp
public ObjectBaseEdgesetAddRemoveEdgesEvent(object obOriginal, ICollection<Tuple<uint, uint>> edges)
```

#### Parameters

`obOriginal` [object](https://learn.microsoft.com/dotnet/api/system.object)

`edges` [ICollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1)<[Tuple](https://learn.microsoft.com/dotnet/api/system.tuple\-2)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32), [uint](https://learn.microsoft.com/dotnet/api/system.uint32)\>\>

## Methods

### <a id="VM_Managed_DAFUL_FE_History_ObjectBaseEdgesetAddRemoveEdgesEvent_AddEdges"></a> AddEdges\(\)

```csharp
protected void AddEdges()
```

### <a id="VM_Managed_DAFUL_FE_History_ObjectBaseEdgesetAddRemoveEdgesEvent_AfterRedo_VM_Managed_History_HistoryEventArgs_"></a> AfterRedo\(HistoryEventArgs\)

```csharp
protected override void AfterRedo(HistoryEventArgs args)
```

#### Parameters

`args` HistoryEventArgs

### <a id="VM_Managed_DAFUL_FE_History_ObjectBaseEdgesetAddRemoveEdgesEvent_AfterUndo_VM_Managed_History_HistoryEventArgs_"></a> AfterUndo\(HistoryEventArgs\)

```csharp
protected override void AfterUndo(HistoryEventArgs args)
```

#### Parameters

`args` HistoryEventArgs

### <a id="VM_Managed_DAFUL_FE_History_ObjectBaseEdgesetAddRemoveEdgesEvent_Clear_System_Boolean_"></a> Clear\(bool\)

```csharp
protected override void Clear(bool bReserveReferenceCount)
```

#### Parameters

`bReserveReferenceCount` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_FE_History_ObjectBaseEdgesetAddRemoveEdgesEvent_RefreshNavigator"></a> RefreshNavigator\(\)

```csharp
protected void RefreshNavigator()
```

### <a id="VM_Managed_DAFUL_FE_History_ObjectBaseEdgesetAddRemoveEdgesEvent_RemoveEdges"></a> RemoveEdges\(\)

```csharp
protected void RemoveEdges()
```

