# Class ObjectBaseNodesetAddRemoveNodesEvent

Namespace: [VM.Managed.DAFUL.FE.History](VM.Managed.DAFUL.FE.History.md)  
Assembly: VMFE.dll  

This base class is to represent the add/remove event for nodeset.

```csharp
public abstract class ObjectBaseNodesetAddRemoveNodesEvent : HistoryEvent
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
HistoryEvent ← 
[ObjectBaseNodesetAddRemoveNodesEvent](VM.Managed.DAFUL.FE.History.ObjectBaseNodesetAddRemoveNodesEvent.md)

#### Derived

[ObjectBaseNodesetAddNodesEvent](VM.Managed.DAFUL.FE.History.ObjectBaseNodesetAddNodesEvent.md), 
[ObjectBaseNodesetRemoveNodesEvent](VM.Managed.DAFUL.FE.History.ObjectBaseNodesetRemoveNodesEvent.md)

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

### ObjectBaseNodesetAddRemoveNodesEvent\(object, ICollection<uint\>\)

```csharp
public ObjectBaseNodesetAddRemoveNodesEvent(object obOriginal, ICollection<uint> arNodeIndex)
```

#### Parameters

`obOriginal` [object](https://learn.microsoft.com/dotnet/api/system.object)

`arNodeIndex` [ICollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)\>

## Methods

### AddNodes\(\)

```csharp
protected void AddNodes()
```

### AfterRedo\(HistoryEventArgs\)

```csharp
protected override void AfterRedo(HistoryEventArgs args)
```

#### Parameters

`args` HistoryEventArgs

### AfterUndo\(HistoryEventArgs\)

```csharp
protected override void AfterUndo(HistoryEventArgs args)
```

#### Parameters

`args` HistoryEventArgs

### Clear\(bool\)

```csharp
protected override void Clear(bool bReserveReferenceCount)
```

#### Parameters

`bReserveReferenceCount` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### RefreshNavigator\(\)

```csharp
protected void RefreshNavigator()
```

### RemoveNodes\(\)

```csharp
protected void RemoveNodes()
```


