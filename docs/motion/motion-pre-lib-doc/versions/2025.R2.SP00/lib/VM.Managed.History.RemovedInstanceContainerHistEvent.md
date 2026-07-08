#  Class RemovedInstanceContainerHistEvent

Namespace: [VM.Managed.History](VM.Managed.History.md)  
Assembly: VMAppCore.dll  

```csharp
public class RemovedInstanceContainerHistEvent : InstanceContainerHistEventBase
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
HistoryEvent ← 
[InstanceContainerHistEventBase](VM.Managed.History.InstanceContainerHistEventBase.md) ← 
[RemovedInstanceContainerHistEvent](VM.Managed.History.RemovedInstanceContainerHistEvent.md)

#### Inherited Members

[InstanceContainerHistEventBase.m\_strPathName](VM.Managed.History.InstanceContainerHistEventBase.md\#VM\_Managed\_History\_InstanceContainerHistEventBase\_m\_strPathName), 
[InstanceContainerHistEventBase.Clear\(bool\)](VM.Managed.History.InstanceContainerHistEventBase.md\#VM\_Managed\_History\_InstanceContainerHistEventBase\_Clear\_System\_Boolean\_), 
[InstanceContainerHistEventBase.Undo\(HistoryEventArgs\)](VM.Managed.History.InstanceContainerHistEventBase.md\#VM\_Managed\_History\_InstanceContainerHistEventBase\_Undo\_VM\_Managed\_History\_HistoryEventArgs\_), 
[InstanceContainerHistEventBase.Redo\(HistoryEventArgs\)](VM.Managed.History.InstanceContainerHistEventBase.md\#VM\_Managed\_History\_InstanceContainerHistEventBase\_Redo\_VM\_Managed\_History\_HistoryEventArgs\_), 
[InstanceContainerHistEventBase.AfterAdded\(HistoryEventArgs\)](VM.Managed.History.InstanceContainerHistEventBase.md\#VM\_Managed\_History\_InstanceContainerHistEventBase\_AfterAdded\_VM\_Managed\_History\_HistoryEventArgs\_), 
[InstanceContainerHistEventBase.IsAvailableEvent\(Document\)](VM.Managed.History.InstanceContainerHistEventBase.md\#VM\_Managed\_History\_InstanceContainerHistEventBase\_IsAvailableEvent\_VM\_Managed\_Document\_), 
[InstanceContainerHistEventBase.AddEventCore\(Document, InstanceContainerHistEventBase\)](VM.Managed.History.InstanceContainerHistEventBase.md\#VM\_Managed\_History\_InstanceContainerHistEventBase\_AddEventCore\_VM\_Managed\_Document\_VM\_Managed\_History\_InstanceContainerHistEventBase\_), 
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

### <a id="VM_Managed_History_RemovedInstanceContainerHistEvent__ctor_System_String_"></a> RemovedInstanceContainerHistEvent\(string\)

```csharp
public RemovedInstanceContainerHistEvent(string strPathName)
```

#### Parameters

`strPathName` [string](https://learn.microsoft.com/dotnet/api/system.string)

