# Class ObjectBaseAddedToDocEvent
<a id="VM_Managed_History_ObjectBaseAddedToDocEvent"></a>

Namespace: [VM.Managed.History](VM.Managed.History.md)  
Assembly: VMAppCore.dll  

```csharp
public class ObjectBaseAddedToDocEvent : ObjectBaseLifecycleEvent
```

#### Inheritance

object ← 
[HistoryEvent](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/HistoryEvent.cs) ← 
[SerializableObjectModifiedEvent](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/SerializableObjectModifiedEvent.cs) ← 
[SerializableObjectBaseModifiedEventBase](VM.Managed.History.SerializableObjectBaseModifiedEventBase.md) ← 
[ObjectBaseLifecycleEvent](VM.Managed.History.ObjectBaseLifecycleEvent.md) ← 
[ObjectBaseAddedToDocEvent](VM.Managed.History.ObjectBaseAddedToDocEvent.md)

#### Inherited Members

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
[SerializableObjectModifiedEvent.Undo\(HistoryEventArgs\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/SerializableObjectModifiedEvent.cs), 
[SerializableObjectModifiedEvent.Redo\(HistoryEventArgs\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/SerializableObjectModifiedEvent.cs), 
[SerializableObjectModifiedEvent.Clear\(bool\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/SerializableObjectModifiedEvent.cs), 
[SerializableObjectModifiedEvent.ReplaceBackupData\(byte\[\], IHistoryObjectSerializableDelegate\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/SerializableObjectModifiedEvent.cs), 
[SerializableObjectModifiedEvent.SetObjectDelegate\(IHistoryObjectSerializableDelegate\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/SerializableObjectModifiedEvent.cs), 
[SerializableObjectModifiedEvent.Modified\(object\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/SerializableObjectModifiedEvent.cs), 
[SerializableObjectModifiedEvent.ObjectDelegate](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/SerializableObjectModifiedEvent.cs), 
[SerializableObjectModifiedEvent.Backup](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/SerializableObjectModifiedEvent.cs), 
[SerializableObjectModifiedEvent.IsBackup](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/SerializableObjectModifiedEvent.cs), 
[SerializableObjectModifiedEvent.Context](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/SerializableObjectModifiedEvent.cs), 
[SerializableObjectModifiedEvent.SurrogateSelector](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/SerializableObjectModifiedEvent.cs), 
[SerializableObjectModifiedEvent.DoingUndoRedoSerialize](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/SerializableObjectModifiedEvent.cs), 
[HistoryEvent.ClearEvent\(bool\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/HistoryEvent.cs), 
[HistoryEvent.Undo\(HistoryEventArgs\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/HistoryEvent.cs), 
[HistoryEvent.Redo\(HistoryEventArgs\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/HistoryEvent.cs), 
[HistoryEvent.Clear\(bool\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/HistoryEvent.cs), 
[HistoryEvent.BeforeUndo\(HistoryEventArgs\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/HistoryEvent.cs), 
[HistoryEvent.AfterUndo\(HistoryEventArgs\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/HistoryEvent.cs), 
[HistoryEvent.BeforeRedo\(HistoryEventArgs\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/HistoryEvent.cs), 
[HistoryEvent.AfterRedo\(HistoryEventArgs\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/HistoryEvent.cs), 
[HistoryEvent.BeforeAdded\(AddToHistoryManagerEventArgs\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/HistoryEvent.cs), 
[HistoryEvent.AfterAdded\(HistoryEventArgs\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/HistoryEvent.cs), 
[HistoryEvent.IsValid](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/HistoryEvent.cs)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_History_ObjectBaseAddedToDocEvent__ctor_System_Object_"></a> ObjectBaseAddedToDocEvent\(object\)

```csharp
public ObjectBaseAddedToDocEvent(object obOriginal)
```

#### Parameters

`obOriginal` object

## Methods

### <a id="VM_Managed_History_ObjectBaseAddedToDocEvent_AfterRedo_VM_Managed_History_HistoryEventArgs_"></a> AfterRedo\(HistoryEventArgs\)

```csharp
protected override void AfterRedo(HistoryEventArgs args)
```

#### Parameters

`args` [HistoryEventArgs](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/HistoryEventArgs.cs)

### <a id="VM_Managed_History_ObjectBaseAddedToDocEvent_AfterUndo_VM_Managed_History_HistoryEventArgs_"></a> AfterUndo\(HistoryEventArgs\)

```csharp
protected override void AfterUndo(HistoryEventArgs args)
```

#### Parameters

`args` [HistoryEventArgs](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/HistoryEventArgs.cs)

### <a id="VM_Managed_History_ObjectBaseAddedToDocEvent_BeforeRedo_VM_Managed_History_HistoryEventArgs_"></a> BeforeRedo\(HistoryEventArgs\)

```csharp
protected override void BeforeRedo(HistoryEventArgs args)
```

#### Parameters

`args` [HistoryEventArgs](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/HistoryEventArgs.cs)

### <a id="VM_Managed_History_ObjectBaseAddedToDocEvent_BeforeUndo_VM_Managed_History_HistoryEventArgs_"></a> BeforeUndo\(HistoryEventArgs\)

```csharp
protected override void BeforeUndo(HistoryEventArgs args)
```

#### Parameters

`args` [HistoryEventArgs](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/HistoryEventArgs.cs)

### <a id="VM_Managed_History_ObjectBaseAddedToDocEvent_MergeImpl_VM_Managed_History_SerializableObjectBaseModifiedEventBase_"></a> MergeImpl\(SerializableObjectBaseModifiedEventBase\)

```csharp
protected override SerializableObjectBaseModifiedEventBase.MergeTo MergeImpl(SerializableObjectBaseModifiedEventBase evtNext)
```

#### Parameters

`evtNext` [SerializableObjectBaseModifiedEventBase](VM.Managed.History.SerializableObjectBaseModifiedEventBase.md)

#### Returns

 [SerializableObjectBaseModifiedEventBase](VM.Managed.History.SerializableObjectBaseModifiedEventBase.md).[MergeTo](VM.Managed.History.SerializableObjectBaseModifiedEventBase.MergeTo.md)

