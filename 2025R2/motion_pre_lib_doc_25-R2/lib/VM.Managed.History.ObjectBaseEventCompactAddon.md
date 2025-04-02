#  Class ObjectBaseEventCompactAddon

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

### <a id="VM_Managed_History_ObjectBaseEventCompactAddon__ctor"></a> ObjectBaseEventCompactAddon\(\)

```csharp
public ObjectBaseEventCompactAddon()
```

## Methods

### <a id="VM_Managed_History_ObjectBaseEventCompactAddon_AddEvent_System_Collections_Generic_LinkedListNode_VM_Managed_History_HistoryEvent__"></a> AddEvent\(LinkedListNode<HistoryEvent\>\)

```csharp
public void AddEvent(LinkedListNode<HistoryEvent> e)
```

#### Parameters

`e` [LinkedListNode](https://learn.microsoft.com/dotnet/api/system.collections.generic.linkedlistnode\-1)<HistoryEvent\>

### <a id="VM_Managed_History_ObjectBaseEventCompactAddon_AfterRecord_System_Object_VM_Managed_History_HistoryEventArgs_"></a> AfterRecord\(object, HistoryEventArgs\)

```csharp
protected override void AfterRecord(object o, HistoryEventArgs args)
```

#### Parameters

`o` [object](https://learn.microsoft.com/dotnet/api/system.object)

`args` HistoryEventArgs

### <a id="VM_Managed_History_ObjectBaseEventCompactAddon_BeforeRecord_System_Object_VM_Managed_History_HistoryEventArgs_"></a> BeforeRecord\(object, HistoryEventArgs\)

```csharp
protected override void BeforeRecord(object o, HistoryEventArgs args)
```

#### Parameters

`o` [object](https://learn.microsoft.com/dotnet/api/system.object)

`args` HistoryEventArgs

### <a id="VM_Managed_History_ObjectBaseEventCompactAddon_GetLastEvent_System_UIntPtr_"></a> GetLastEvent\(UIntPtr\)

```csharp
public SerializableObjectBaseModifiedEventBase GetLastEvent(UIntPtr keyObj)
```

#### Parameters

`keyObj` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

#### Returns

 [SerializableObjectBaseModifiedEventBase](VM.Managed.History.SerializableObjectBaseModifiedEventBase.md)

### <a id="VM_Managed_History_ObjectBaseEventCompactAddon_RemoveLastEvent_System_UIntPtr_"></a> RemoveLastEvent\(UIntPtr\)

```csharp
public void RemoveLastEvent(UIntPtr keyObj)
```

#### Parameters

`keyObj` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

