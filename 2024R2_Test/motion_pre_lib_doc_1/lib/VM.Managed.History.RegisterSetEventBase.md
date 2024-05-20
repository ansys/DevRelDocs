# Class RegisterSetEventBase

Namespace: [VM.Managed.History](VM.Managed.History.md)  
Assembly: VMAppCore.dll  

```csharp
public abstract class RegisterSetEventBase : HistoryEvent
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
HistoryEvent ← 
[RegisterSetEventBase](VM.Managed.History.RegisterSetEventBase.md)

#### Derived

[RegisterCurveSetEvent](VM.Managed.History.RegisterCurveSetEvent.md), 
[RegisterFaceSetEvent](VM.Managed.History.RegisterFaceSetEvent.md)

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

### RegisterSetEventBase\(UIntPtr, UIntPtr\[\], UIntPtr\[\]\)

```csharp
public RegisterSetEventBase(UIntPtr ptrSet, UIntPtr[] arKeyUndoTopology, UIntPtr[] arKeyRedoTopology)
```

#### Parameters

`ptrSet` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

`arKeyUndoTopology` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)\[\]

`arKeyRedoTopology` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)\[\]

## Fields

### m\_arKeyRedoTopology

```csharp
protected UIntPtr[] m_arKeyRedoTopology
```

#### Field Value

 [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)\[\]

### m\_arKeyUndoTopology

```csharp
protected UIntPtr[] m_arKeyUndoTopology
```

#### Field Value

 [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)\[\]

### m\_keySet

```csharp
protected UIntPtr m_keySet
```

#### Field Value

 [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

## Methods

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


