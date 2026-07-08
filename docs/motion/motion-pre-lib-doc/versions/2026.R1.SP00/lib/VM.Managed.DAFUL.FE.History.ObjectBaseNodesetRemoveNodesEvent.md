# Class ObjectBaseNodesetRemoveNodesEvent
<a id="VM_Managed_DAFUL_FE_History_ObjectBaseNodesetRemoveNodesEvent"></a>

Namespace: [VM.Managed.DAFUL.FE.History](VM.Managed.DAFUL.FE.History.md)  
Assembly: VMFE.dll  

This class is to represent the remove event for nodeset.

```csharp
public class ObjectBaseNodesetRemoveNodesEvent : ObjectBaseNodesetAddRemoveNodesEvent
```

#### Inheritance

object ← 
[HistoryEvent](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/HistoryEvent.cs) ← 
[ObjectBaseNodesetAddRemoveNodesEvent](VM.Managed.DAFUL.FE.History.ObjectBaseNodesetAddRemoveNodesEvent.md) ← 
[ObjectBaseNodesetRemoveNodesEvent](VM.Managed.DAFUL.FE.History.ObjectBaseNodesetRemoveNodesEvent.md)

#### Inherited Members

[ObjectBaseNodesetAddRemoveNodesEvent.Clear\(bool\)](VM.Managed.DAFUL.FE.History.ObjectBaseNodesetAddRemoveNodesEvent.md\#VM\_Managed\_DAFUL\_FE\_History\_ObjectBaseNodesetAddRemoveNodesEvent\_Clear\_System\_Boolean\_), 
[ObjectBaseNodesetAddRemoveNodesEvent.AfterUndo\(HistoryEventArgs\)](VM.Managed.DAFUL.FE.History.ObjectBaseNodesetAddRemoveNodesEvent.md\#VM\_Managed\_DAFUL\_FE\_History\_ObjectBaseNodesetAddRemoveNodesEvent\_AfterUndo\_VM\_Managed\_History\_HistoryEventArgs\_), 
[ObjectBaseNodesetAddRemoveNodesEvent.AfterRedo\(HistoryEventArgs\)](VM.Managed.DAFUL.FE.History.ObjectBaseNodesetAddRemoveNodesEvent.md\#VM\_Managed\_DAFUL\_FE\_History\_ObjectBaseNodesetAddRemoveNodesEvent\_AfterRedo\_VM\_Managed\_History\_HistoryEventArgs\_), 
[ObjectBaseNodesetAddRemoveNodesEvent.AddNodes\(\)](VM.Managed.DAFUL.FE.History.ObjectBaseNodesetAddRemoveNodesEvent.md\#VM\_Managed\_DAFUL\_FE\_History\_ObjectBaseNodesetAddRemoveNodesEvent\_AddNodes), 
[ObjectBaseNodesetAddRemoveNodesEvent.RemoveNodes\(\)](VM.Managed.DAFUL.FE.History.ObjectBaseNodesetAddRemoveNodesEvent.md\#VM\_Managed\_DAFUL\_FE\_History\_ObjectBaseNodesetAddRemoveNodesEvent\_RemoveNodes), 
[ObjectBaseNodesetAddRemoveNodesEvent.RefreshNavigator\(\)](VM.Managed.DAFUL.FE.History.ObjectBaseNodesetAddRemoveNodesEvent.md\#VM\_Managed\_DAFUL\_FE\_History\_ObjectBaseNodesetAddRemoveNodesEvent\_RefreshNavigator), 
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

### <a id="VM_Managed_DAFUL_FE_History_ObjectBaseNodesetRemoveNodesEvent__ctor_System_Object_System_Collections_Generic_ICollection_System_UInt32__"></a> ObjectBaseNodesetRemoveNodesEvent\(object, ICollection<uint\>\)

```csharp
public ObjectBaseNodesetRemoveNodesEvent(object obOriginal, ICollection<uint> arNodeIndex)
```

#### Parameters

`obOriginal` object

`arNodeIndex` ICollection<uint\>

## Methods

### <a id="VM_Managed_DAFUL_FE_History_ObjectBaseNodesetRemoveNodesEvent_Redo_VM_Managed_History_HistoryEventArgs_"></a> Redo\(HistoryEventArgs\)

```csharp
protected override void Redo(HistoryEventArgs args)
```

#### Parameters

`args` [HistoryEventArgs](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/HistoryEventArgs.cs)

### <a id="VM_Managed_DAFUL_FE_History_ObjectBaseNodesetRemoveNodesEvent_Undo_VM_Managed_History_HistoryEventArgs_"></a> Undo\(HistoryEventArgs\)

```csharp
protected override void Undo(HistoryEventArgs args)
```

#### Parameters

`args` [HistoryEventArgs](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/HistoryEventArgs.cs)

