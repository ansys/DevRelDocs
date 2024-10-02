#  Class ObjectBaseLifecycleEvent

Namespace: [VM.Managed.History](VM.Managed.History.md)  
Assembly: VMAppCore.dll  

```csharp
public abstract class ObjectBaseLifecycleEvent : SerializableObjectBaseModifiedEventBase
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
HistoryEvent ← 
SerializableObjectModifiedEvent ← 
[SerializableObjectBaseModifiedEventBase](VM.Managed.History.SerializableObjectBaseModifiedEventBase.md) ← 
[ObjectBaseLifecycleEvent](VM.Managed.History.ObjectBaseLifecycleEvent.md)

#### Derived

[ObjectBaseAddedToDocEvent](VM.Managed.History.ObjectBaseAddedToDocEvent.md), 
[ObjectBaseRemovedFromDocEvent](VM.Managed.History.ObjectBaseRemovedFromDocEvent.md)

#### Inherited Members

[SerializableObjectBaseModifiedEventBase.Merge\(SerializableObjectBaseModifiedEventBase\)](VM.Managed.History.SerializableObjectBaseModifiedEventBase.md\#VM\_Managed\_History\_SerializableObjectBaseModifiedEventBase\_Merge\_VM\_Managed\_History\_SerializableObjectBaseModifiedEventBase\_), 
[SerializableObjectBaseModifiedEventBase.MergeImpl\(SerializableObjectBaseModifiedEventBase\)](VM.Managed.History.SerializableObjectBaseModifiedEventBase.md\#VM\_Managed\_History\_SerializableObjectBaseModifiedEventBase\_MergeImpl\_VM\_Managed\_History\_SerializableObjectBaseModifiedEventBase\_), 
[SerializableObjectBaseModifiedEventBase.Clear\(bool\)](VM.Managed.History.SerializableObjectBaseModifiedEventBase.md\#VM\_Managed\_History\_SerializableObjectBaseModifiedEventBase\_Clear\_System\_Boolean\_), 
[SerializableObjectBaseModifiedEventBase.BeforeAdded\(AddToHistoryManagerEventArgs\)](VM.Managed.History.SerializableObjectBaseModifiedEventBase.md\#VM\_Managed\_History\_SerializableObjectBaseModifiedEventBase\_BeforeAdded\_VM\_Managed\_History\_AddToHistoryManagerEventArgs\_), 
[SerializableObjectBaseModifiedEventBase.AfterAdded\(HistoryEventArgs\)](VM.Managed.History.SerializableObjectBaseModifiedEventBase.md\#VM\_Managed\_History\_SerializableObjectBaseModifiedEventBase\_AfterAdded\_VM\_Managed\_History\_HistoryEventArgs\_), 
[SerializableObjectBaseModifiedEventBase.BeforeUndo\(HistoryEventArgs\)](VM.Managed.History.SerializableObjectBaseModifiedEventBase.md\#VM\_Managed\_History\_SerializableObjectBaseModifiedEventBase\_BeforeUndo\_VM\_Managed\_History\_HistoryEventArgs\_), 
[SerializableObjectBaseModifiedEventBase.BeforeRedo\(HistoryEventArgs\)](VM.Managed.History.SerializableObjectBaseModifiedEventBase.md\#VM\_Managed\_History\_SerializableObjectBaseModifiedEventBase\_BeforeRedo\_VM\_Managed\_History\_HistoryEventArgs\_), 
[SerializableObjectBaseModifiedEventBase.AfterUndo\(HistoryEventArgs\)](VM.Managed.History.SerializableObjectBaseModifiedEventBase.md\#VM\_Managed\_History\_SerializableObjectBaseModifiedEventBase\_AfterUndo\_VM\_Managed\_History\_HistoryEventArgs\_), 
[SerializableObjectBaseModifiedEventBase.AfterRedo\(HistoryEventArgs\)](VM.Managed.History.SerializableObjectBaseModifiedEventBase.md\#VM\_Managed\_History\_SerializableObjectBaseModifiedEventBase\_AfterRedo\_VM\_Managed\_History\_HistoryEventArgs\_), 
[SerializableObjectBaseModifiedEventBase.Dispose\(bool\)](VM.Managed.History.SerializableObjectBaseModifiedEventBase.md\#VM\_Managed\_History\_SerializableObjectBaseModifiedEventBase\_Dispose\_System\_Boolean\_), 
[SerializableObjectBaseModifiedEventBase.Dispose\(\)](VM.Managed.History.SerializableObjectBaseModifiedEventBase.md\#VM\_Managed\_History\_SerializableObjectBaseModifiedEventBase\_Dispose), 
[SerializableObjectBaseModifiedEventBase.InitialBackup](VM.Managed.History.SerializableObjectBaseModifiedEventBase.md\#VM\_Managed\_History\_SerializableObjectBaseModifiedEventBase\_InitialBackup), 
[SerializableObjectBaseModifiedEventBase.ObjectDelegateKey](VM.Managed.History.SerializableObjectBaseModifiedEventBase.md\#VM\_Managed\_History\_SerializableObjectBaseModifiedEventBase\_ObjectDelegateKey), 
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

### <a id="VM_Managed_History_ObjectBaseLifecycleEvent__ctor_System_Object_"></a> ObjectBaseLifecycleEvent\(object\)

```csharp
public ObjectBaseLifecycleEvent(object obOriginal)
```

#### Parameters

`obOriginal` [object](https://learn.microsoft.com/dotnet/api/system.object)

## Properties

### <a id="VM_Managed_History_ObjectBaseLifecycleEvent_InitialBackup"></a> InitialBackup

```csharp
protected override bool InitialBackup { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="VM_Managed_History_ObjectBaseLifecycleEvent_AfterAdded_VM_Managed_History_HistoryEventArgs_"></a> AfterAdded\(HistoryEventArgs\)

```csharp
protected override void AfterAdded(HistoryEventArgs args)
```

#### Parameters

`args` HistoryEventArgs

### <a id="VM_Managed_History_ObjectBaseLifecycleEvent_Clear_System_Boolean_"></a> Clear\(bool\)

```csharp
protected override void Clear(bool bReserveReferenceCount)
```

#### Parameters

`bReserveReferenceCount` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_History_ObjectBaseLifecycleEvent_Register_VM_Managed_History_HistoryEventArgs_"></a> Register\(HistoryEventArgs\)

```csharp
protected void Register(HistoryEventArgs args)
```

#### Parameters

`args` HistoryEventArgs

### <a id="VM_Managed_History_ObjectBaseLifecycleEvent_Unregister_VM_Managed_History_HistoryEventArgs_"></a> Unregister\(HistoryEventArgs\)

```csharp
protected void Unregister(HistoryEventArgs args)
```

#### Parameters

`args` HistoryEventArgs

