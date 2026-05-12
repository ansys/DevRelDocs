#  Class SerializableObjectBaseModifiedEventBase

Namespace: [VM.Managed.History](VM.Managed.History.md)  
Assembly: VMAppCore.dll  

```csharp
public abstract class SerializableObjectBaseModifiedEventBase : SerializableObjectModifiedEvent
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
HistoryEvent ← 
SerializableObjectModifiedEvent ← 
[SerializableObjectBaseModifiedEventBase](VM.Managed.History.SerializableObjectBaseModifiedEventBase.md)

#### Derived

[ObjectBaseLifecycleEvent](VM.Managed.History.ObjectBaseLifecycleEvent.md), 
[SerializableObjectBaseModifiedEvent](VM.Managed.History.SerializableObjectBaseModifiedEvent.md)

#### Inherited Members

SerializableObjectModifiedEvent.Undo\(HistoryEventArgs\), 
SerializableObjectModifiedEvent.Redo\(HistoryEventArgs\), 
SerializableObjectModifiedEvent.Clear\(bool\), 
SerializableObjectModifiedEvent.ReplaceBackupData\(byte\[\], IHistoryObjectSerializableDelegate\), 
SerializableObjectModifiedEvent.SetObjectDelegate\(IHistoryObjectSerializableDelegate\), 
SerializableObjectModifiedEvent.Modified\(object\), 
SerializableObjectModifiedEvent.ObjectDelegate, 
SerializableObjectModifiedEvent.Backup, 
SerializableObjectModifiedEvent.IsBackup, 
SerializableObjectModifiedEvent.Context, 
SerializableObjectModifiedEvent.SurrogateSelector, 
SerializableObjectModifiedEvent.DoingUndoRedoSerialize, 
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

### <a id="VM_Managed_History_SerializableObjectBaseModifiedEventBase__ctor_System_Object_"></a> SerializableObjectBaseModifiedEventBase\(object\)

```csharp
public SerializableObjectBaseModifiedEventBase(object obOriginal)
```

#### Parameters

`obOriginal` [object](https://learn.microsoft.com/dotnet/api/system.object)

## Properties

### <a id="VM_Managed_History_SerializableObjectBaseModifiedEventBase_InitialBackup"></a> InitialBackup

```csharp
protected virtual bool InitialBackup { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_History_SerializableObjectBaseModifiedEventBase_ObjectDelegateKey"></a> ObjectDelegateKey

```csharp
public UIntPtr ObjectDelegateKey { get; }
```

#### Property Value

 [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

## Methods

### <a id="VM_Managed_History_SerializableObjectBaseModifiedEventBase_AfterAdded_VM_Managed_History_HistoryEventArgs_"></a> AfterAdded\(HistoryEventArgs\)

```csharp
protected override void AfterAdded(HistoryEventArgs args)
```

#### Parameters

`args` HistoryEventArgs

### <a id="VM_Managed_History_SerializableObjectBaseModifiedEventBase_AfterRedo_VM_Managed_History_HistoryEventArgs_"></a> AfterRedo\(HistoryEventArgs\)

```csharp
protected override void AfterRedo(HistoryEventArgs args)
```

#### Parameters

`args` HistoryEventArgs

### <a id="VM_Managed_History_SerializableObjectBaseModifiedEventBase_AfterUndo_VM_Managed_History_HistoryEventArgs_"></a> AfterUndo\(HistoryEventArgs\)

```csharp
protected override void AfterUndo(HistoryEventArgs args)
```

#### Parameters

`args` HistoryEventArgs

### <a id="VM_Managed_History_SerializableObjectBaseModifiedEventBase_BeforeAdded_VM_Managed_History_AddToHistoryManagerEventArgs_"></a> BeforeAdded\(AddToHistoryManagerEventArgs\)

```csharp
protected override void BeforeAdded(AddToHistoryManagerEventArgs args)
```

#### Parameters

`args` AddToHistoryManagerEventArgs

### <a id="VM_Managed_History_SerializableObjectBaseModifiedEventBase_BeforeRedo_VM_Managed_History_HistoryEventArgs_"></a> BeforeRedo\(HistoryEventArgs\)

```csharp
protected override void BeforeRedo(HistoryEventArgs args)
```

#### Parameters

`args` HistoryEventArgs

### <a id="VM_Managed_History_SerializableObjectBaseModifiedEventBase_BeforeUndo_VM_Managed_History_HistoryEventArgs_"></a> BeforeUndo\(HistoryEventArgs\)

```csharp
protected override void BeforeUndo(HistoryEventArgs args)
```

#### Parameters

`args` HistoryEventArgs

### <a id="VM_Managed_History_SerializableObjectBaseModifiedEventBase_Clear_System_Boolean_"></a> Clear\(bool\)

```csharp
protected override void Clear(bool bReserveReferenceCount)
```

#### Parameters

`bReserveReferenceCount` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_History_SerializableObjectBaseModifiedEventBase_Dispose_System_Boolean_"></a> Dispose\(bool\)

```csharp
[HandleProcessCorruptedStateExceptions]
protected virtual void Dispose(bool A_0)
```

#### Parameters

`A_0` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_History_SerializableObjectBaseModifiedEventBase_Dispose"></a> Dispose\(\)

```csharp
public override sealed void Dispose()
```

### <a id="VM_Managed_History_SerializableObjectBaseModifiedEventBase_Finalize"></a> \~SerializableObjectBaseModifiedEventBase\(\)

```csharp
protected ~SerializableObjectBaseModifiedEventBase()
```

### <a id="VM_Managed_History_SerializableObjectBaseModifiedEventBase_Merge_VM_Managed_History_SerializableObjectBaseModifiedEventBase_"></a> Merge\(SerializableObjectBaseModifiedEventBase\)

```csharp
public SerializableObjectBaseModifiedEventBase.MergeTo Merge(SerializableObjectBaseModifiedEventBase evtNext)
```

#### Parameters

`evtNext` [SerializableObjectBaseModifiedEventBase](VM.Managed.History.SerializableObjectBaseModifiedEventBase.md)

#### Returns

 [SerializableObjectBaseModifiedEventBase](VM.Managed.History.SerializableObjectBaseModifiedEventBase.md).[MergeTo](VM.Managed.History.SerializableObjectBaseModifiedEventBase.MergeTo.md)

### <a id="VM_Managed_History_SerializableObjectBaseModifiedEventBase_MergeImpl_VM_Managed_History_SerializableObjectBaseModifiedEventBase_"></a> MergeImpl\(SerializableObjectBaseModifiedEventBase\)

```csharp
protected abstract SerializableObjectBaseModifiedEventBase.MergeTo MergeImpl(SerializableObjectBaseModifiedEventBase evtNext)
```

#### Parameters

`evtNext` [SerializableObjectBaseModifiedEventBase](VM.Managed.History.SerializableObjectBaseModifiedEventBase.md)

#### Returns

 [SerializableObjectBaseModifiedEventBase](VM.Managed.History.SerializableObjectBaseModifiedEventBase.md).[MergeTo](VM.Managed.History.SerializableObjectBaseModifiedEventBase.MergeTo.md)

