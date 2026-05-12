#  Class RegisterFaceSetEvent

Namespace: [VM.Managed.History](VM.Managed.History.md)  
Assembly: VMAppCore.dll  

```csharp
public class RegisterFaceSetEvent : RegisterSetEventBase
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
HistoryEvent ← 
[RegisterSetEventBase](VM.Managed.History.RegisterSetEventBase.md) ← 
[RegisterFaceSetEvent](VM.Managed.History.RegisterFaceSetEvent.md)

#### Inherited Members

[RegisterSetEventBase.m\_keySet](VM.Managed.History.RegisterSetEventBase.md\#VM\_Managed\_History\_RegisterSetEventBase\_m\_keySet), 
[RegisterSetEventBase.m\_arKeyUndoTopology](VM.Managed.History.RegisterSetEventBase.md\#VM\_Managed\_History\_RegisterSetEventBase\_m\_arKeyUndoTopology), 
[RegisterSetEventBase.m\_arKeyRedoTopology](VM.Managed.History.RegisterSetEventBase.md\#VM\_Managed\_History\_RegisterSetEventBase\_m\_arKeyRedoTopology), 
[RegisterSetEventBase.Clear\(bool\)](VM.Managed.History.RegisterSetEventBase.md\#VM\_Managed\_History\_RegisterSetEventBase\_Clear\_System\_Boolean\_), 
[RegisterSetEventBase.AfterUndo\(HistoryEventArgs\)](VM.Managed.History.RegisterSetEventBase.md\#VM\_Managed\_History\_RegisterSetEventBase\_AfterUndo\_VM\_Managed\_History\_HistoryEventArgs\_), 
[RegisterSetEventBase.AfterRedo\(HistoryEventArgs\)](VM.Managed.History.RegisterSetEventBase.md\#VM\_Managed\_History\_RegisterSetEventBase\_AfterRedo\_VM\_Managed\_History\_HistoryEventArgs\_), 
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

### <a id="VM_Managed_History_RegisterFaceSetEvent__ctor_System_UIntPtr_System_UIntPtr___System_UIntPtr___"></a> RegisterFaceSetEvent\(UIntPtr, UIntPtr\[\], UIntPtr\[\]\)

```csharp
public RegisterFaceSetEvent(UIntPtr ptrSet, UIntPtr[] arKeyUndoTopology, UIntPtr[] arKeyRedoTopology)
```

#### Parameters

`ptrSet` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

`arKeyUndoTopology` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)\[\]

`arKeyRedoTopology` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)\[\]

## Methods

### <a id="VM_Managed_History_RegisterFaceSetEvent_Redo_VM_Managed_History_HistoryEventArgs_"></a> Redo\(HistoryEventArgs\)

```csharp
protected override void Redo(HistoryEventArgs args)
```

#### Parameters

`args` HistoryEventArgs

### <a id="VM_Managed_History_RegisterFaceSetEvent_RegisterFaceSetModified_System_UIntPtr_System_UIntPtr___System_UIntPtr___"></a> RegisterFaceSetModified\(UIntPtr, UIntPtr\[\], UIntPtr\[\]\)

```csharp
public static void RegisterFaceSetModified(UIntPtr ptrSet, UIntPtr[] arKeyUndoTopology, UIntPtr[] arKeyRedoTopology)
```

#### Parameters

`ptrSet` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

`arKeyUndoTopology` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)\[\]

`arKeyRedoTopology` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)\[\]

### <a id="VM_Managed_History_RegisterFaceSetEvent_Undo_VM_Managed_History_HistoryEventArgs_"></a> Undo\(HistoryEventArgs\)

```csharp
protected override void Undo(HistoryEventArgs args)
```

#### Parameters

`args` HistoryEventArgs

