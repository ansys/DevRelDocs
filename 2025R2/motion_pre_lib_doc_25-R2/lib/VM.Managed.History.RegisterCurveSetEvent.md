# Class RegisterCurveSetEvent

Namespace: [VM.Managed.History](VM.Managed.History.md)  
Assembly: VMAppCore.dll  

```csharp
public class RegisterCurveSetEvent : RegisterSetEventBase
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
HistoryEvent ← 
[RegisterSetEventBase](VM.Managed.History.RegisterSetEventBase.md) ← 
[RegisterCurveSetEvent](VM.Managed.History.RegisterCurveSetEvent.md)

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

### RegisterCurveSetEvent\(UIntPtr, UIntPtr\[\], UIntPtr\[\]\)

```csharp
public RegisterCurveSetEvent(UIntPtr ptrSet, UIntPtr[] arKeyTopology, UIntPtr[] arKeyRedoTopology)
```

#### Parameters

`ptrSet` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

`arKeyTopology` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)\[\]

`arKeyRedoTopology` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)\[\]

## Methods

### Redo\(HistoryEventArgs\)

```csharp
protected override void Redo(HistoryEventArgs args)
```

#### Parameters

`args` HistoryEventArgs

### RegisterCurveSetModified\(UIntPtr, UIntPtr\[\], UIntPtr\[\]\)

```csharp
public static void RegisterCurveSetModified(UIntPtr ptrSet, UIntPtr[] arKeyTopology, UIntPtr[] arKeyRedoTopology)
```

#### Parameters

`ptrSet` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

`arKeyTopology` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)\[\]

`arKeyRedoTopology` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)\[\]

### Undo\(HistoryEventArgs\)

```csharp
protected override void Undo(HistoryEventArgs args)
```

#### Parameters

`args` HistoryEventArgs


