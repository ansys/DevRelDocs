#  Class RecalcBodyEvent

Namespace: [VM.Managed.History](VM.Managed.History.md)  
Assembly: VMAppCore.dll  

```csharp
public class RecalcBodyEvent : SerializableEntityModifiedEvent
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
HistoryEvent ← 
SerializableObjectModifiedEvent ← 
[SerializableObjectBaseModifiedEventBase](VM.Managed.History.SerializableObjectBaseModifiedEventBase.md) ← 
[SerializableObjectBaseModifiedEvent](VM.Managed.History.SerializableObjectBaseModifiedEvent.md) ← 
[SerializableEntityModifiedEvent](VM.Managed.History.SerializableEntityModifiedEvent.md) ← 
[RecalcBodyEvent](VM.Managed.History.RecalcBodyEvent.md)

#### Inherited Members

[SerializableObjectBaseModifiedEvent.MergeImpl\(SerializableObjectBaseModifiedEventBase\)](VM.Managed.History.SerializableObjectBaseModifiedEvent.md\#VM\_Managed\_History\_SerializableObjectBaseModifiedEvent\_MergeImpl\_VM\_Managed\_History\_SerializableObjectBaseModifiedEventBase\_), 
[SerializableObjectBaseModifiedEvent.AfterUndo\(HistoryEventArgs\)](VM.Managed.History.SerializableObjectBaseModifiedEvent.md\#VM\_Managed\_History\_SerializableObjectBaseModifiedEvent\_AfterUndo\_VM\_Managed\_History\_HistoryEventArgs\_), 
[SerializableObjectBaseModifiedEvent.AfterRedo\(HistoryEventArgs\)](VM.Managed.History.SerializableObjectBaseModifiedEvent.md\#VM\_Managed\_History\_SerializableObjectBaseModifiedEvent\_AfterRedo\_VM\_Managed\_History\_HistoryEventArgs\_), 
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

### <a id="VM_Managed_History_RecalcBodyEvent__ctor_System_Object_System_Boolean_"></a> RecalcBodyEvent\(object, bool\)

```csharp
public RecalcBodyEvent(object obOriginal, bool bUpdateOnlyCADBody)
```

#### Parameters

`obOriginal` [object](https://learn.microsoft.com/dotnet/api/system.object)

`bUpdateOnlyCADBody` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_History_RecalcBodyEvent__ctor_System_Object_"></a> RecalcBodyEvent\(object\)

```csharp
public RecalcBodyEvent(object obOriginal)
```

#### Parameters

`obOriginal` [object](https://learn.microsoft.com/dotnet/api/system.object)

## Methods

### <a id="VM_Managed_History_RecalcBodyEvent_AfterRedo_VM_Managed_History_HistoryEventArgs_"></a> AfterRedo\(HistoryEventArgs\)

```csharp
protected override void AfterRedo(HistoryEventArgs args)
```

#### Parameters

`args` HistoryEventArgs

### <a id="VM_Managed_History_RecalcBodyEvent_AfterUndo_VM_Managed_History_HistoryEventArgs_"></a> AfterUndo\(HistoryEventArgs\)

```csharp
protected override void AfterUndo(HistoryEventArgs args)
```

#### Parameters

`args` HistoryEventArgs

### <a id="VM_Managed_History_RecalcBodyEvent_MergeImpl_VM_Managed_History_SerializableObjectBaseModifiedEventBase_"></a> MergeImpl\(SerializableObjectBaseModifiedEventBase\)

```csharp
protected override SerializableObjectBaseModifiedEventBase.MergeTo MergeImpl(SerializableObjectBaseModifiedEventBase evtNext)
```

#### Parameters

`evtNext` [SerializableObjectBaseModifiedEventBase](VM.Managed.History.SerializableObjectBaseModifiedEventBase.md)

#### Returns

 [SerializableObjectBaseModifiedEventBase](VM.Managed.History.SerializableObjectBaseModifiedEventBase.md).[MergeTo](VM.Managed.History.SerializableObjectBaseModifiedEventBase.MergeTo.md)

### <a id="VM_Managed_History_RecalcBodyEvent_RecalcBody_System_Object_System_Boolean_"></a> RecalcBody\(object, bool\)

```csharp
public static void RecalcBody(object body, bool bUpdateOnlyCADBody)
```

#### Parameters

`body` [object](https://learn.microsoft.com/dotnet/api/system.object)

`bUpdateOnlyCADBody` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_History_RecalcBodyEvent_RecalcBody_System_Object_"></a> RecalcBody\(object\)

```csharp
public static void RecalcBody(object body)
```

#### Parameters

`body` [object](https://learn.microsoft.com/dotnet/api/system.object)

