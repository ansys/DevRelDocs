#  Class ObjectBasePatchsetRemovePatchesEvent

Namespace: [VM.Managed.DAFUL.FE.History](VM.Managed.DAFUL.FE.History.md)  
Assembly: VMFE.dll  

This base class is to represent the remove event for patchset.

```csharp
public class ObjectBasePatchsetRemovePatchesEvent : ObjectBasePatchsetAddRemovePatchesEvent
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
HistoryEvent ← 
[ObjectBasePatchsetAddRemovePatchesEvent](VM.Managed.DAFUL.FE.History.ObjectBasePatchsetAddRemovePatchesEvent.md) ← 
[ObjectBasePatchsetRemovePatchesEvent](VM.Managed.DAFUL.FE.History.ObjectBasePatchsetRemovePatchesEvent.md)

#### Inherited Members

[ObjectBasePatchsetAddRemovePatchesEvent.Clear\(bool\)](VM.Managed.DAFUL.FE.History.ObjectBasePatchsetAddRemovePatchesEvent.md\#VM\_Managed\_DAFUL\_FE\_History\_ObjectBasePatchsetAddRemovePatchesEvent\_Clear\_System\_Boolean\_), 
[ObjectBasePatchsetAddRemovePatchesEvent.AfterUndo\(HistoryEventArgs\)](VM.Managed.DAFUL.FE.History.ObjectBasePatchsetAddRemovePatchesEvent.md\#VM\_Managed\_DAFUL\_FE\_History\_ObjectBasePatchsetAddRemovePatchesEvent\_AfterUndo\_VM\_Managed\_History\_HistoryEventArgs\_), 
[ObjectBasePatchsetAddRemovePatchesEvent.AfterRedo\(HistoryEventArgs\)](VM.Managed.DAFUL.FE.History.ObjectBasePatchsetAddRemovePatchesEvent.md\#VM\_Managed\_DAFUL\_FE\_History\_ObjectBasePatchsetAddRemovePatchesEvent\_AfterRedo\_VM\_Managed\_History\_HistoryEventArgs\_), 
[ObjectBasePatchsetAddRemovePatchesEvent.AddPatches\(\)](VM.Managed.DAFUL.FE.History.ObjectBasePatchsetAddRemovePatchesEvent.md\#VM\_Managed\_DAFUL\_FE\_History\_ObjectBasePatchsetAddRemovePatchesEvent\_AddPatches), 
[ObjectBasePatchsetAddRemovePatchesEvent.RemovePatches\(\)](VM.Managed.DAFUL.FE.History.ObjectBasePatchsetAddRemovePatchesEvent.md\#VM\_Managed\_DAFUL\_FE\_History\_ObjectBasePatchsetAddRemovePatchesEvent\_RemovePatches), 
[ObjectBasePatchsetAddRemovePatchesEvent.RefreshNavigator\(\)](VM.Managed.DAFUL.FE.History.ObjectBasePatchsetAddRemovePatchesEvent.md\#VM\_Managed\_DAFUL\_FE\_History\_ObjectBasePatchsetAddRemovePatchesEvent\_RefreshNavigator), 
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

### <a id="VM_Managed_DAFUL_FE_History_ObjectBasePatchsetRemovePatchesEvent__ctor_System_Object_System_Collections_Generic_ICollection_VM_Managed_DAFUL_FE_Patch__"></a> ObjectBasePatchsetRemovePatchesEvent\(object, ICollection<Patch\>\)

```csharp
public ObjectBasePatchsetRemovePatchesEvent(object obOriginal, ICollection<Patch> patches)
```

#### Parameters

`obOriginal` [object](https://learn.microsoft.com/dotnet/api/system.object)

`patches` [ICollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1)<[Patch](VM.Managed.DAFUL.FE.Patch.md)\>

## Methods

### <a id="VM_Managed_DAFUL_FE_History_ObjectBasePatchsetRemovePatchesEvent_Redo_VM_Managed_History_HistoryEventArgs_"></a> Redo\(HistoryEventArgs\)

```csharp
public override void Redo(HistoryEventArgs args)
```

#### Parameters

`args` HistoryEventArgs

### <a id="VM_Managed_DAFUL_FE_History_ObjectBasePatchsetRemovePatchesEvent_Undo_VM_Managed_History_HistoryEventArgs_"></a> Undo\(HistoryEventArgs\)

```csharp
public override void Undo(HistoryEventArgs args)
```

#### Parameters

`args` HistoryEventArgs

