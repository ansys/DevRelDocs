#  Class ObjectBaseEdgesetRemoveEdgesEvent

Namespace: [VM.Managed.DAFUL.FE.History](VM.Managed.DAFUL.FE.History.md)  
Assembly: VMFE.dll  

This base class is to represent the remove event for edgeset.

```csharp
public class ObjectBaseEdgesetRemoveEdgesEvent : ObjectBaseEdgesetAddRemoveEdgesEvent
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
HistoryEvent ← 
[ObjectBaseEdgesetAddRemoveEdgesEvent](VM.Managed.DAFUL.FE.History.ObjectBaseEdgesetAddRemoveEdgesEvent.md) ← 
[ObjectBaseEdgesetRemoveEdgesEvent](VM.Managed.DAFUL.FE.History.ObjectBaseEdgesetRemoveEdgesEvent.md)

#### Inherited Members

[ObjectBaseEdgesetAddRemoveEdgesEvent.Clear\(bool\)](VM.Managed.DAFUL.FE.History.ObjectBaseEdgesetAddRemoveEdgesEvent.md\#VM\_Managed\_DAFUL\_FE\_History\_ObjectBaseEdgesetAddRemoveEdgesEvent\_Clear\_System\_Boolean\_), 
[ObjectBaseEdgesetAddRemoveEdgesEvent.AfterUndo\(HistoryEventArgs\)](VM.Managed.DAFUL.FE.History.ObjectBaseEdgesetAddRemoveEdgesEvent.md\#VM\_Managed\_DAFUL\_FE\_History\_ObjectBaseEdgesetAddRemoveEdgesEvent\_AfterUndo\_VM\_Managed\_History\_HistoryEventArgs\_), 
[ObjectBaseEdgesetAddRemoveEdgesEvent.AfterRedo\(HistoryEventArgs\)](VM.Managed.DAFUL.FE.History.ObjectBaseEdgesetAddRemoveEdgesEvent.md\#VM\_Managed\_DAFUL\_FE\_History\_ObjectBaseEdgesetAddRemoveEdgesEvent\_AfterRedo\_VM\_Managed\_History\_HistoryEventArgs\_), 
[ObjectBaseEdgesetAddRemoveEdgesEvent.AddEdges\(\)](VM.Managed.DAFUL.FE.History.ObjectBaseEdgesetAddRemoveEdgesEvent.md\#VM\_Managed\_DAFUL\_FE\_History\_ObjectBaseEdgesetAddRemoveEdgesEvent\_AddEdges), 
[ObjectBaseEdgesetAddRemoveEdgesEvent.RemoveEdges\(\)](VM.Managed.DAFUL.FE.History.ObjectBaseEdgesetAddRemoveEdgesEvent.md\#VM\_Managed\_DAFUL\_FE\_History\_ObjectBaseEdgesetAddRemoveEdgesEvent\_RemoveEdges), 
[ObjectBaseEdgesetAddRemoveEdgesEvent.RefreshNavigator\(\)](VM.Managed.DAFUL.FE.History.ObjectBaseEdgesetAddRemoveEdgesEvent.md\#VM\_Managed\_DAFUL\_FE\_History\_ObjectBaseEdgesetAddRemoveEdgesEvent\_RefreshNavigator), 
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

### <a id="VM_Managed_DAFUL_FE_History_ObjectBaseEdgesetRemoveEdgesEvent__ctor_System_Object_System_Collections_Generic_ICollection_System_Tuple_System_UInt32_System_UInt32___"></a> ObjectBaseEdgesetRemoveEdgesEvent\(object, ICollection<Tuple<uint, uint\>\>\)

```csharp
public ObjectBaseEdgesetRemoveEdgesEvent(object obOriginal, ICollection<Tuple<uint, uint>> edges)
```

#### Parameters

`obOriginal` [object](https://learn.microsoft.com/dotnet/api/system.object)

`edges` [ICollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1)<[Tuple](https://learn.microsoft.com/dotnet/api/system.tuple\-2)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32), [uint](https://learn.microsoft.com/dotnet/api/system.uint32)\>\>

## Methods

### <a id="VM_Managed_DAFUL_FE_History_ObjectBaseEdgesetRemoveEdgesEvent_Redo_VM_Managed_History_HistoryEventArgs_"></a> Redo\(HistoryEventArgs\)

```csharp
public override void Redo(HistoryEventArgs args)
```

#### Parameters

`args` HistoryEventArgs

### <a id="VM_Managed_DAFUL_FE_History_ObjectBaseEdgesetRemoveEdgesEvent_Undo_VM_Managed_History_HistoryEventArgs_"></a> Undo\(HistoryEventArgs\)

```csharp
public override void Undo(HistoryEventArgs args)
```

#### Parameters

`args` HistoryEventArgs

