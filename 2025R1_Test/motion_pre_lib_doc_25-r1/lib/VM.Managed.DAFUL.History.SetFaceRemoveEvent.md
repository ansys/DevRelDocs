#  Class SetFaceRemoveEvent

Namespace: [VM.Managed.DAFUL.History](VM.Managed.DAFUL.History.md)  
Assembly: VMDFBase.dll  

SetFaceRemoveEvent

```csharp
public class SetFaceRemoveEvent : HistoryEvent
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
HistoryEvent ← 
[SetFaceRemoveEvent](VM.Managed.DAFUL.History.SetFaceRemoveEvent.md)

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

### <a id="VM_Managed_DAFUL_History_SetFaceRemoveEvent__ctor_System_UIntPtr_System_UIntPtr_"></a> SetFaceRemoveEvent\(UIntPtr, UIntPtr\)

SetFaceRemoveEvent constructor

```csharp
public SetFaceRemoveEvent(UIntPtr ptrKey, UIntPtr ptrKeyTopology)
```

#### Parameters

`ptrKey` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

key of set

`ptrKeyTopology` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

key of topology

## Methods

### <a id="VM_Managed_DAFUL_History_SetFaceRemoveEvent_Clear_System_Boolean_"></a> Clear\(bool\)

clear

```csharp
protected override void Clear(bool bReserveReferenceCount)
```

#### Parameters

`bReserveReferenceCount` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

reference count flag

### <a id="VM_Managed_DAFUL_History_SetFaceRemoveEvent_Redo_VM_Managed_History_HistoryEventArgs_"></a> Redo\(HistoryEventArgs\)

redo

```csharp
protected override void Redo(HistoryEventArgs args)
```

#### Parameters

`args` HistoryEventArgs

The argument

### <a id="VM_Managed_DAFUL_History_SetFaceRemoveEvent_Undo_VM_Managed_History_HistoryEventArgs_"></a> Undo\(HistoryEventArgs\)

undo

```csharp
protected override void Undo(HistoryEventArgs args)
```

#### Parameters

`args` HistoryEventArgs

The argument

