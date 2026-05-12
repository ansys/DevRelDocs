#  Class ObjectBaseNodesetAddNodesEvent

Namespace: [VM.Managed.DAFUL.FE.History](VM.Managed.DAFUL.FE.History.md)  
Assembly: VMFE.dll  

This class is to represent the add event for nodeset.

```csharp
public class ObjectBaseNodesetAddNodesEvent : ObjectBaseNodesetAddRemoveNodesEvent
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
HistoryEvent ← 
[ObjectBaseNodesetAddRemoveNodesEvent](VM.Managed.DAFUL.FE.History.ObjectBaseNodesetAddRemoveNodesEvent.md) ← 
[ObjectBaseNodesetAddNodesEvent](VM.Managed.DAFUL.FE.History.ObjectBaseNodesetAddNodesEvent.md)

#### Inherited Members

[ObjectBaseNodesetAddRemoveNodesEvent.Clear\(bool\)](VM.Managed.DAFUL.FE.History.ObjectBaseNodesetAddRemoveNodesEvent.md\#VM\_Managed\_DAFUL\_FE\_History\_ObjectBaseNodesetAddRemoveNodesEvent\_Clear\_System\_Boolean\_), 
[ObjectBaseNodesetAddRemoveNodesEvent.AfterUndo\(HistoryEventArgs\)](VM.Managed.DAFUL.FE.History.ObjectBaseNodesetAddRemoveNodesEvent.md\#VM\_Managed\_DAFUL\_FE\_History\_ObjectBaseNodesetAddRemoveNodesEvent\_AfterUndo\_VM\_Managed\_History\_HistoryEventArgs\_), 
[ObjectBaseNodesetAddRemoveNodesEvent.AfterRedo\(HistoryEventArgs\)](VM.Managed.DAFUL.FE.History.ObjectBaseNodesetAddRemoveNodesEvent.md\#VM\_Managed\_DAFUL\_FE\_History\_ObjectBaseNodesetAddRemoveNodesEvent\_AfterRedo\_VM\_Managed\_History\_HistoryEventArgs\_), 
[ObjectBaseNodesetAddRemoveNodesEvent.AddNodes\(\)](VM.Managed.DAFUL.FE.History.ObjectBaseNodesetAddRemoveNodesEvent.md\#VM\_Managed\_DAFUL\_FE\_History\_ObjectBaseNodesetAddRemoveNodesEvent\_AddNodes), 
[ObjectBaseNodesetAddRemoveNodesEvent.RemoveNodes\(\)](VM.Managed.DAFUL.FE.History.ObjectBaseNodesetAddRemoveNodesEvent.md\#VM\_Managed\_DAFUL\_FE\_History\_ObjectBaseNodesetAddRemoveNodesEvent\_RemoveNodes), 
[ObjectBaseNodesetAddRemoveNodesEvent.RefreshNavigator\(\)](VM.Managed.DAFUL.FE.History.ObjectBaseNodesetAddRemoveNodesEvent.md\#VM\_Managed\_DAFUL\_FE\_History\_ObjectBaseNodesetAddRemoveNodesEvent\_RefreshNavigator), 
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

### <a id="VM_Managed_DAFUL_FE_History_ObjectBaseNodesetAddNodesEvent__ctor_System_Object_System_Collections_Generic_ICollection_System_UInt32__"></a> ObjectBaseNodesetAddNodesEvent\(object, ICollection<uint\>\)

```csharp
public ObjectBaseNodesetAddNodesEvent(object obOriginal, ICollection<uint> arNodeIndex)
```

#### Parameters

`obOriginal` [object](https://learn.microsoft.com/dotnet/api/system.object)

`arNodeIndex` [ICollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)\>

## Methods

### <a id="VM_Managed_DAFUL_FE_History_ObjectBaseNodesetAddNodesEvent_Redo_VM_Managed_History_HistoryEventArgs_"></a> Redo\(HistoryEventArgs\)

```csharp
protected override void Redo(HistoryEventArgs args)
```

#### Parameters

`args` HistoryEventArgs

### <a id="VM_Managed_DAFUL_FE_History_ObjectBaseNodesetAddNodesEvent_Undo_VM_Managed_History_HistoryEventArgs_"></a> Undo\(HistoryEventArgs\)

```csharp
protected override void Undo(HistoryEventArgs args)
```

#### Parameters

`args` HistoryEventArgs

