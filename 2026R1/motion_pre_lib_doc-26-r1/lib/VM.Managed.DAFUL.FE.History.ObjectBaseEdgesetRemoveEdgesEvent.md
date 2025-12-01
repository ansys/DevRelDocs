# Class ObjectBaseEdgesetRemoveEdgesEvent
<a id="VM_Managed_DAFUL_FE_History_ObjectBaseEdgesetRemoveEdgesEvent"></a>

Namespace: [VM.Managed.DAFUL.FE.History](VM.Managed.DAFUL.FE.History.md)  
Assembly: VMFE.dll  

This base class is to represent the remove event for edgeset.

```csharp
public class ObjectBaseEdgesetRemoveEdgesEvent : ObjectBaseEdgesetAddRemoveEdgesEvent
```

#### Inheritance

object ← 
[HistoryEvent](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/HistoryEvent.cs) ← 
[ObjectBaseEdgesetAddRemoveEdgesEvent](VM.Managed.DAFUL.FE.History.ObjectBaseEdgesetAddRemoveEdgesEvent.md) ← 
[ObjectBaseEdgesetRemoveEdgesEvent](VM.Managed.DAFUL.FE.History.ObjectBaseEdgesetRemoveEdgesEvent.md)

#### Inherited Members

[ObjectBaseEdgesetAddRemoveEdgesEvent.Clear\(bool\)](VM.Managed.DAFUL.FE.History.ObjectBaseEdgesetAddRemoveEdgesEvent.md\#VM\_Managed\_DAFUL\_FE\_History\_ObjectBaseEdgesetAddRemoveEdgesEvent\_Clear\_System\_Boolean\_), 
[ObjectBaseEdgesetAddRemoveEdgesEvent.AfterUndo\(HistoryEventArgs\)](VM.Managed.DAFUL.FE.History.ObjectBaseEdgesetAddRemoveEdgesEvent.md\#VM\_Managed\_DAFUL\_FE\_History\_ObjectBaseEdgesetAddRemoveEdgesEvent\_AfterUndo\_VM\_Managed\_History\_HistoryEventArgs\_), 
[ObjectBaseEdgesetAddRemoveEdgesEvent.AfterRedo\(HistoryEventArgs\)](VM.Managed.DAFUL.FE.History.ObjectBaseEdgesetAddRemoveEdgesEvent.md\#VM\_Managed\_DAFUL\_FE\_History\_ObjectBaseEdgesetAddRemoveEdgesEvent\_AfterRedo\_VM\_Managed\_History\_HistoryEventArgs\_), 
[ObjectBaseEdgesetAddRemoveEdgesEvent.AddEdges\(\)](VM.Managed.DAFUL.FE.History.ObjectBaseEdgesetAddRemoveEdgesEvent.md\#VM\_Managed\_DAFUL\_FE\_History\_ObjectBaseEdgesetAddRemoveEdgesEvent\_AddEdges), 
[ObjectBaseEdgesetAddRemoveEdgesEvent.RemoveEdges\(\)](VM.Managed.DAFUL.FE.History.ObjectBaseEdgesetAddRemoveEdgesEvent.md\#VM\_Managed\_DAFUL\_FE\_History\_ObjectBaseEdgesetAddRemoveEdgesEvent\_RemoveEdges), 
[ObjectBaseEdgesetAddRemoveEdgesEvent.RefreshNavigator\(\)](VM.Managed.DAFUL.FE.History.ObjectBaseEdgesetAddRemoveEdgesEvent.md\#VM\_Managed\_DAFUL\_FE\_History\_ObjectBaseEdgesetAddRemoveEdgesEvent\_RefreshNavigator), 
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

### <a id="VM_Managed_DAFUL_FE_History_ObjectBaseEdgesetRemoveEdgesEvent__ctor_System_Object_System_Collections_Generic_ICollection_System_Tuple_System_UInt32_System_UInt32___"></a> ObjectBaseEdgesetRemoveEdgesEvent\(object, ICollection<Tuple<uint, uint\>\>\)

```csharp
public ObjectBaseEdgesetRemoveEdgesEvent(object obOriginal, ICollection<Tuple<uint, uint>> edges)
```

#### Parameters

`obOriginal` object

`edges` ICollection<Tuple<uint, uint\>\>

## Methods

### <a id="VM_Managed_DAFUL_FE_History_ObjectBaseEdgesetRemoveEdgesEvent_Redo_VM_Managed_History_HistoryEventArgs_"></a> Redo\(HistoryEventArgs\)

```csharp
public override void Redo(HistoryEventArgs args)
```

#### Parameters

`args` [HistoryEventArgs](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/HistoryEventArgs.cs)

### <a id="VM_Managed_DAFUL_FE_History_ObjectBaseEdgesetRemoveEdgesEvent_Undo_VM_Managed_History_HistoryEventArgs_"></a> Undo\(HistoryEventArgs\)

```csharp
public override void Undo(HistoryEventArgs args)
```

#### Parameters

`args` [HistoryEventArgs](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/HistoryEventArgs.cs)

