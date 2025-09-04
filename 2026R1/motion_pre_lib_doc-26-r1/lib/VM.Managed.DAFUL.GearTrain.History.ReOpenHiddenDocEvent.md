#  Class ReOpenHiddenDocEvent

Namespace: [VM.Managed.DAFUL.GearTrain.History](VM.Managed.DAFUL.GearTrain.History.md)  
Assembly: VMDGearTrain.dll  

The re-open hidden document event class

```csharp
public class ReOpenHiddenDocEvent : HistoryEvent
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
HistoryEvent ← 
[ReOpenHiddenDocEvent](VM.Managed.DAFUL.GearTrain.History.ReOpenHiddenDocEvent.md)

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

### <a id="VM_Managed_DAFUL_GearTrain_History_ReOpenHiddenDocEvent__ctor_System_Object_"></a> ReOpenHiddenDocEvent\(object\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.History.ReOpenHiddenDocEvent" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ReOpenHiddenDocEvent(object obOriginal)
```

#### Parameters

`obOriginal` [object](https://learn.microsoft.com/dotnet/api/system.object)

The original object.

## Methods

### <a id="VM_Managed_DAFUL_GearTrain_History_ReOpenHiddenDocEvent_AfterRedo_VM_Managed_History_HistoryEventArgs_"></a> AfterRedo\(HistoryEventArgs\)

Called after redo by HistoryManager.

```csharp
protected override void AfterRedo(HistoryEventArgs args)
```

#### Parameters

`args` HistoryEventArgs

The event argument for call this method.

### <a id="VM_Managed_DAFUL_GearTrain_History_ReOpenHiddenDocEvent_AfterUndo_VM_Managed_History_HistoryEventArgs_"></a> AfterUndo\(HistoryEventArgs\)

Called after undo by HistoryManager.

```csharp
protected override void AfterUndo(HistoryEventArgs args)
```

#### Parameters

`args` HistoryEventArgs

The event argument for call this method.

### <a id="VM_Managed_DAFUL_GearTrain_History_ReOpenHiddenDocEvent_Clear_System_Boolean_"></a> Clear\(bool\)

Clear this event.

```csharp
protected override void Clear(bool bReserveReferenceCount)
```

#### Parameters

`bReserveReferenceCount` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The event argument for clear.

### <a id="VM_Managed_DAFUL_GearTrain_History_ReOpenHiddenDocEvent_ReOpenHiddenDocument_System_Object_"></a> ReOpenHiddenDocument\(object\)

Re-open hidden document.

```csharp
public static void ReOpenHiddenDocument(object obj)
```

#### Parameters

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

The object.

### <a id="VM_Managed_DAFUL_GearTrain_History_ReOpenHiddenDocEvent_Redo_VM_Managed_History_HistoryEventArgs_"></a> Redo\(HistoryEventArgs\)

Redo this event.

```csharp
protected override void Redo(HistoryEventArgs args)
```

#### Parameters

`args` HistoryEventArgs

The event argument for redo.

### <a id="VM_Managed_DAFUL_GearTrain_History_ReOpenHiddenDocEvent_Undo_VM_Managed_History_HistoryEventArgs_"></a> Undo\(HistoryEventArgs\)

Undo this event.

```csharp
protected override void Undo(HistoryEventArgs args)
```

#### Parameters

`args` HistoryEventArgs

The event argument for undo.

