#  Class ObjectBaseFEImportEvent

Namespace: [VM.Managed.DAFUL.FE.History](VM.Managed.DAFUL.FE.History.md)  
Assembly: VMFE.dll  

This class is to represent the FE Import event.

```csharp
public class ObjectBaseFEImportEvent : SerializableFEDisplayObjectModifiedEvent
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
HistoryEvent ← 
SerializableObjectModifiedEvent ← 
SerializableObjectBaseModifiedEventBase ← 
SerializableObjectBaseModifiedEvent ← 
SerializableFEDisplayObjectModifiedEvent ← 
[ObjectBaseFEImportEvent](VM.Managed.DAFUL.FE.History.ObjectBaseFEImportEvent.md)

#### Inherited Members

SerializableObjectBaseModifiedEvent.MergeImpl\(SerializableObjectBaseModifiedEventBase\), 
SerializableObjectBaseModifiedEvent.AfterUndo\(HistoryEventArgs\), 
SerializableObjectBaseModifiedEvent.AfterRedo\(HistoryEventArgs\), 
SerializableObjectBaseModifiedEventBase.Merge\(SerializableObjectBaseModifiedEventBase\), 
SerializableObjectBaseModifiedEventBase.MergeImpl\(SerializableObjectBaseModifiedEventBase\), 
SerializableObjectBaseModifiedEventBase.Clear\(bool\), 
SerializableObjectBaseModifiedEventBase.BeforeAdded\(AddToHistoryManagerEventArgs\), 
SerializableObjectBaseModifiedEventBase.AfterAdded\(HistoryEventArgs\), 
SerializableObjectBaseModifiedEventBase.BeforeUndo\(HistoryEventArgs\), 
SerializableObjectBaseModifiedEventBase.BeforeRedo\(HistoryEventArgs\), 
SerializableObjectBaseModifiedEventBase.AfterUndo\(HistoryEventArgs\), 
SerializableObjectBaseModifiedEventBase.AfterRedo\(HistoryEventArgs\), 
SerializableObjectBaseModifiedEventBase.Dispose\(bool\), 
SerializableObjectBaseModifiedEventBase.Dispose\(\), 
SerializableObjectBaseModifiedEventBase.InitialBackup, 
SerializableObjectBaseModifiedEventBase.ObjectDelegateKey, 
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

### <a id="VM_Managed_DAFUL_FE_History_ObjectBaseFEImportEvent__ctor_System_Object_"></a> ObjectBaseFEImportEvent\(object\)

```csharp
public ObjectBaseFEImportEvent(object obOriginal)
```

#### Parameters

`obOriginal` [object](https://learn.microsoft.com/dotnet/api/system.object)

