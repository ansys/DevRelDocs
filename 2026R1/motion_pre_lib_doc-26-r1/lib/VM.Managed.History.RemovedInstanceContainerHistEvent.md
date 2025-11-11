# Class RemovedInstanceContainerHistEvent
<a id="VM_Managed_History_RemovedInstanceContainerHistEvent"></a>

Namespace: [VM.Managed.History](VM.Managed.History.md)  
Assembly: VMAppCore.dll  

```csharp
public class RemovedInstanceContainerHistEvent : InstanceContainerHistEventBase
```

#### Inheritance

object ← 
[HistoryEvent](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/HistoryEvent.cs) ← 
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

### <a id="VM_Managed_History_RemovedInstanceContainerHistEvent__ctor_System_String_"></a> RemovedInstanceContainerHistEvent\(string\)

```csharp
public RemovedInstanceContainerHistEvent(string strPathName)
```

#### Parameters

`strPathName` string

