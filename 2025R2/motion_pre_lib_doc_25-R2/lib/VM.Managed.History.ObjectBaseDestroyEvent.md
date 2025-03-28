# <a id="VM_Managed_History_ObjectBaseDestroyEvent"></a> Class ObjectBaseDestroyEvent

Namespace: [VM.Managed.History](VM.Managed.History.md)  
Assembly: VMAppCore.dll  

```csharp
public class ObjectBaseDestroyEvent : ObjectBaseRemovedFromDocEvent
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
HistoryEvent ← 
SerializableObjectModifiedEvent ← 
[SerializableObjectBaseModifiedEventBase](VM.Managed.History.SerializableObjectBaseModifiedEventBase.md) ← 
[ObjectBaseLifecycleEvent](VM.Managed.History.ObjectBaseLifecycleEvent.md) ← 
[ObjectBaseRemovedFromDocEvent](VM.Managed.History.ObjectBaseRemovedFromDocEvent.md) ← 
[ObjectBaseDestroyEvent](VM.Managed.History.ObjectBaseDestroyEvent.md)

#### Inherited Members

[ObjectBaseRemovedFromDocEvent.BeforeUndo\(HistoryEventArgs\)](VM.Managed.History.ObjectBaseRemovedFromDocEvent.md\#VM\_Managed\_History\_ObjectBaseRemovedFromDocEvent\_BeforeUndo\_VM\_Managed\_History\_HistoryEventArgs\_), 
[ObjectBaseRemovedFromDocEvent.BeforeRedo\(HistoryEventArgs\)](VM.Managed.History.ObjectBaseRemovedFromDocEvent.md\#VM\_Managed\_History\_ObjectBaseRemovedFromDocEvent\_BeforeRedo\_VM\_Managed\_History\_HistoryEventArgs\_), 
[ObjectBaseRemovedFromDocEvent.AfterUndo\(HistoryEventArgs\)](VM.Managed.History.ObjectBaseRemovedFromDocEvent.md\#VM\_Managed\_History\_ObjectBaseRemovedFromDocEvent\_AfterUndo\_VM\_Managed\_History\_HistoryEventArgs\_), 
[ObjectBaseRemovedFromDocEvent.AfterRedo\(HistoryEventArgs\)](VM.Managed.History.ObjectBaseRemovedFromDocEvent.md\#VM\_Managed\_History\_ObjectBaseRemovedFromDocEvent\_AfterRedo\_VM\_Managed\_History\_HistoryEventArgs\_), 
[ObjectBaseRemovedFromDocEvent.MergeImpl\(SerializableObjectBaseModifiedEventBase\)](VM.Managed.History.ObjectBaseRemovedFromDocEvent.md\#VM\_Managed\_History\_ObjectBaseRemovedFromDocEvent\_MergeImpl\_VM\_Managed\_History\_SerializableObjectBaseModifiedEventBase\_), 
[ObjectBaseLifecycleEvent.Clear\(bool\)](VM.Managed.History.ObjectBaseLifecycleEvent.md\#VM\_Managed\_History\_ObjectBaseLifecycleEvent\_Clear\_System\_Boolean\_), 
[ObjectBaseLifecycleEvent.AfterAdded\(HistoryEventArgs\)](VM.Managed.History.ObjectBaseLifecycleEvent.md\#VM\_Managed\_History\_ObjectBaseLifecycleEvent\_AfterAdded\_VM\_Managed\_History\_HistoryEventArgs\_), 
[ObjectBaseLifecycleEvent.Unregister\(HistoryEventArgs\)](VM.Managed.History.ObjectBaseLifecycleEvent.md\#VM\_Managed\_History\_ObjectBaseLifecycleEvent\_Unregister\_VM\_Managed\_History\_HistoryEventArgs\_), 
[ObjectBaseLifecycleEvent.Register\(HistoryEventArgs\)](VM.Managed.History.ObjectBaseLifecycleEvent.md\#VM\_Managed\_History\_ObjectBaseLifecycleEvent\_Register\_VM\_Managed\_History\_HistoryEventArgs\_), 
[ObjectBaseLifecycleEvent.InitialBackup](VM.Managed.History.ObjectBaseLifecycleEvent.md\#VM\_Managed\_History\_ObjectBaseLifecycleEvent\_InitialBackup), 
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

### <a id="VM_Managed_History_ObjectBaseDestroyEvent__ctor_System_Object_"></a> ObjectBaseDestroyEvent\(object\)

```csharp
public ObjectBaseDestroyEvent(object obOriginal)
```

#### Parameters

`obOriginal` [object](https://learn.microsoft.com/dotnet/api/system.object)

## Methods

### <a id="VM_Managed_History_ObjectBaseDestroyEvent_AfterRedo_VM_Managed_History_HistoryEventArgs_"></a> AfterRedo\(HistoryEventArgs\)

```csharp
protected override void AfterRedo(HistoryEventArgs args)
```

#### Parameters

`args` HistoryEventArgs

### <a id="VM_Managed_History_ObjectBaseDestroyEvent_AfterUndo_VM_Managed_History_HistoryEventArgs_"></a> AfterUndo\(HistoryEventArgs\)

```csharp
protected override void AfterUndo(HistoryEventArgs args)
```

#### Parameters

`args` HistoryEventArgs

### <a id="VM_Managed_History_ObjectBaseDestroyEvent_MergeImpl_VM_Managed_History_SerializableObjectBaseModifiedEventBase_"></a> MergeImpl\(SerializableObjectBaseModifiedEventBase\)

```csharp
protected override SerializableObjectBaseModifiedEventBase.MergeTo MergeImpl(SerializableObjectBaseModifiedEventBase evtNext)
```

#### Parameters

`evtNext` [SerializableObjectBaseModifiedEventBase](VM.Managed.History.SerializableObjectBaseModifiedEventBase.md)

#### Returns

 [SerializableObjectBaseModifiedEventBase](VM.Managed.History.SerializableObjectBaseModifiedEventBase.md).[MergeTo](VM.Managed.History.SerializableObjectBaseModifiedEventBase.MergeTo.md)

### <a id="VM_Managed_History_ObjectBaseDestroyEvent_SameKey_System_UIntPtr_"></a> SameKey\(UIntPtr\)

```csharp
public bool SameKey(UIntPtr key)
```

#### Parameters

`key` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

