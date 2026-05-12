#  Class UpdateAssembledBodyEvent

Namespace: [VM.Managed.DAFUL.History](VM.Managed.DAFUL.History.md)  
Assembly: VMDFBase.dll  

Update assembled body history event

```csharp
public class UpdateAssembledBodyEvent : HistoryEvent
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
HistoryEvent ← 
[UpdateAssembledBodyEvent](VM.Managed.DAFUL.History.UpdateAssembledBodyEvent.md)

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

### <a id="VM_Managed_DAFUL_History_UpdateAssembledBodyEvent__ctor_VM_Managed_DAFUL_PartDocument_System_UIntPtr_"></a> UpdateAssembledBodyEvent\(PartDocument, UIntPtr\)

Construct new UpdateAssembledBodyEvent

```csharp
public UpdateAssembledBodyEvent(PartDocument doc, UIntPtr key)
```

#### Parameters

`doc` [PartDocument](VM.Managed.DAFUL.PartDocument.md)

`key` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

## Methods

### <a id="VM_Managed_DAFUL_History_UpdateAssembledBodyEvent_AfterRedo_VM_Managed_History_HistoryEventArgs_"></a> AfterRedo\(HistoryEventArgs\)

Called after redo this event

```csharp
protected override void AfterRedo(HistoryEventArgs args)
```

#### Parameters

`args` HistoryEventArgs

The event argument

### <a id="VM_Managed_DAFUL_History_UpdateAssembledBodyEvent_AfterUndo_VM_Managed_History_HistoryEventArgs_"></a> AfterUndo\(HistoryEventArgs\)

Called after undo this event

```csharp
protected override void AfterUndo(HistoryEventArgs args)
```

#### Parameters

`args` HistoryEventArgs

The event argument

### <a id="VM_Managed_DAFUL_History_UpdateAssembledBodyEvent_Clear_System_Boolean_"></a> Clear\(bool\)

Clear event

```csharp
protected override void Clear(bool bReserveReferenceCount)
```

#### Parameters

`bReserveReferenceCount` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

true to reserve reference count, otherwise false.

### <a id="VM_Managed_DAFUL_History_UpdateAssembledBodyEvent_Redo_VM_Managed_History_HistoryEventArgs_"></a> Redo\(HistoryEventArgs\)

Redo event

```csharp
protected override void Redo(HistoryEventArgs args)
```

#### Parameters

`args` HistoryEventArgs

The event argument

### <a id="VM_Managed_DAFUL_History_UpdateAssembledBodyEvent_Undo_VM_Managed_History_HistoryEventArgs_"></a> Undo\(HistoryEventArgs\)

Undo event

```csharp
protected override void Undo(HistoryEventArgs args)
```

#### Parameters

`args` HistoryEventArgs

The event argument

