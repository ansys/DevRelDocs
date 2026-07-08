# Class ObjectBasePatchsetAddPatchesEvent
<a id="VM_Managed_DAFUL_FE_History_ObjectBasePatchsetAddPatchesEvent"></a>

Namespace: [VM.Managed.DAFUL.FE.History](VM.Managed.DAFUL.FE.History.md)  
Assembly: VMFE.dll  

This base class is to represent the add event for patchset.

```csharp
public class ObjectBasePatchsetAddPatchesEvent : ObjectBasePatchsetAddRemovePatchesEvent
```

#### Inheritance

object ← 
[HistoryEvent](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/HistoryEvent.cs) ← 
[ObjectBasePatchsetAddRemovePatchesEvent](VM.Managed.DAFUL.FE.History.ObjectBasePatchsetAddRemovePatchesEvent.md) ← 
[ObjectBasePatchsetAddPatchesEvent](VM.Managed.DAFUL.FE.History.ObjectBasePatchsetAddPatchesEvent.md)

#### Inherited Members

[ObjectBasePatchsetAddRemovePatchesEvent.Clear\(bool\)](VM.Managed.DAFUL.FE.History.ObjectBasePatchsetAddRemovePatchesEvent.md\#VM\_Managed\_DAFUL\_FE\_History\_ObjectBasePatchsetAddRemovePatchesEvent\_Clear\_System\_Boolean\_), 
[ObjectBasePatchsetAddRemovePatchesEvent.AfterUndo\(HistoryEventArgs\)](VM.Managed.DAFUL.FE.History.ObjectBasePatchsetAddRemovePatchesEvent.md\#VM\_Managed\_DAFUL\_FE\_History\_ObjectBasePatchsetAddRemovePatchesEvent\_AfterUndo\_VM\_Managed\_History\_HistoryEventArgs\_), 
[ObjectBasePatchsetAddRemovePatchesEvent.AfterRedo\(HistoryEventArgs\)](VM.Managed.DAFUL.FE.History.ObjectBasePatchsetAddRemovePatchesEvent.md\#VM\_Managed\_DAFUL\_FE\_History\_ObjectBasePatchsetAddRemovePatchesEvent\_AfterRedo\_VM\_Managed\_History\_HistoryEventArgs\_), 
[ObjectBasePatchsetAddRemovePatchesEvent.AddPatches\(\)](VM.Managed.DAFUL.FE.History.ObjectBasePatchsetAddRemovePatchesEvent.md\#VM\_Managed\_DAFUL\_FE\_History\_ObjectBasePatchsetAddRemovePatchesEvent\_AddPatches), 
[ObjectBasePatchsetAddRemovePatchesEvent.RemovePatches\(\)](VM.Managed.DAFUL.FE.History.ObjectBasePatchsetAddRemovePatchesEvent.md\#VM\_Managed\_DAFUL\_FE\_History\_ObjectBasePatchsetAddRemovePatchesEvent\_RemovePatches), 
[ObjectBasePatchsetAddRemovePatchesEvent.RefreshNavigator\(\)](VM.Managed.DAFUL.FE.History.ObjectBasePatchsetAddRemovePatchesEvent.md\#VM\_Managed\_DAFUL\_FE\_History\_ObjectBasePatchsetAddRemovePatchesEvent\_RefreshNavigator), 
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

### <a id="VM_Managed_DAFUL_FE_History_ObjectBasePatchsetAddPatchesEvent__ctor_System_Object_System_Collections_Generic_ICollection_VM_Managed_DAFUL_FE_Patch__"></a> ObjectBasePatchsetAddPatchesEvent\(object, ICollection<Patch\>\)

```csharp
public ObjectBasePatchsetAddPatchesEvent(object obOriginal, ICollection<Patch> patches)
```

#### Parameters

`obOriginal` object

`patches` ICollection<[Patch](VM.Managed.DAFUL.FE.Patch.md)\>

## Methods

### <a id="VM_Managed_DAFUL_FE_History_ObjectBasePatchsetAddPatchesEvent_Redo_VM_Managed_History_HistoryEventArgs_"></a> Redo\(HistoryEventArgs\)

```csharp
public override void Redo(HistoryEventArgs args)
```

#### Parameters

`args` [HistoryEventArgs](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/HistoryEventArgs.cs)

### <a id="VM_Managed_DAFUL_FE_History_ObjectBasePatchsetAddPatchesEvent_Undo_VM_Managed_History_HistoryEventArgs_"></a> Undo\(HistoryEventArgs\)

```csharp
public override void Undo(HistoryEventArgs args)
```

#### Parameters

`args` [HistoryEventArgs](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/HistoryEventArgs.cs)

