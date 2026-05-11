# Class ObjectBaseEventCompactAddon

Namespace: [VM.Managed.History](VM.Managed.History.md)  
Assembly: VMAppCore.dll  

```csharp
public class ObjectBaseEventCompactAddon : HistoryManagerAddon
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
HistoryManagerAddon ← 
[ObjectBaseEventCompactAddon](VM.Managed.History.ObjectBaseEventCompactAddon.md)

#### Inherited Members

HistoryManagerAddon.BeforeUndo\(object, HistoryEventArgs\), 
HistoryManagerAddon.AfterUndo\(object, HistoryEventArgs\), 
HistoryManagerAddon.BeforeRedo\(object, HistoryEventArgs\), 
HistoryManagerAddon.AfterRedo\(object, HistoryEventArgs\), 
HistoryManagerAddon.BeforeRollback\(object, HistoryEventArgs\), 
HistoryManagerAddon.AfterRollback\(object, HistoryEventArgs\), 
HistoryManagerAddon.BeforeRecord\(object, HistoryEventArgs\), 
HistoryManagerAddon.AfterRecord\(object, HistoryEventArgs\), 
HistoryManagerAddon.Register\(HistoryManager\), 
HistoryManagerAddon.ClearMarkCollection\(ICollection<HistoryMark\>\), 
HistoryManagerAddon.ClearMark\(HistoryMark\), 
HistoryManagerAddon.Parent, 
HistoryManagerAddon.DoneList, 
HistoryManagerAddon.UndoneList

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### ObjectBaseEventCompactAddon\(\)

```csharp
public ObjectBaseEventCompactAddon()
```

## Methods

### AddEvent\(LinkedListNode<HistoryEvent\>\)

```csharp
public void AddEvent(LinkedListNode<HistoryEvent> e)
```

#### Parameters

`e` [LinkedListNode](https://learn.microsoft.com/dotnet/api/system.collections.generic.linkedlistnode\-1)<HistoryEvent\>

### AfterRecord\(object, HistoryEventArgs\)

```csharp
protected override void AfterRecord(object o, HistoryEventArgs args)
```

#### Parameters

`o` [object](https://learn.microsoft.com/dotnet/api/system.object)

`args` HistoryEventArgs

### BeforeRecord\(object, HistoryEventArgs\)

```csharp
protected override void BeforeRecord(object o, HistoryEventArgs args)
```

#### Parameters

`o` [object](https://learn.microsoft.com/dotnet/api/system.object)

`args` HistoryEventArgs

### GetLastEvent\(UIntPtr\)

```csharp
public SerializableObjectBaseModifiedEventBase GetLastEvent(UIntPtr keyObj)
```

#### Parameters

`keyObj` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

#### Returns

 [SerializableObjectBaseModifiedEventBase](VM.Managed.History.SerializableObjectBaseModifiedEventBase.md)

### RemoveLastEvent\(UIntPtr\)

```csharp
public void RemoveLastEvent(UIntPtr keyObj)
```

#### Parameters

`keyObj` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)


