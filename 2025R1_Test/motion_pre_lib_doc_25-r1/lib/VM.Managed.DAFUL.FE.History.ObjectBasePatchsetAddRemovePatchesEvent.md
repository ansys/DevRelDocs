#  Class ObjectBasePatchsetAddRemovePatchesEvent

Namespace: [VM.Managed.DAFUL.FE.History](VM.Managed.DAFUL.FE.History.md)  
Assembly: VMFE.dll  

This base class is to represent the add/remove event for patchset.

```csharp
public abstract class ObjectBasePatchsetAddRemovePatchesEvent : HistoryEvent
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
HistoryEvent ← 
[ObjectBasePatchsetAddRemovePatchesEvent](VM.Managed.DAFUL.FE.History.ObjectBasePatchsetAddRemovePatchesEvent.md)

#### Derived

[ObjectBasePatchsetAddPatchesEvent](VM.Managed.DAFUL.FE.History.ObjectBasePatchsetAddPatchesEvent.md), 
[ObjectBasePatchsetRemovePatchesEvent](VM.Managed.DAFUL.FE.History.ObjectBasePatchsetRemovePatchesEvent.md)

#### Inherited Members

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

### <a id="VM_Managed_DAFUL_FE_History_ObjectBasePatchsetAddRemovePatchesEvent__ctor_System_Object_System_Collections_Generic_ICollection_VM_Managed_DAFUL_FE_Patch__"></a> ObjectBasePatchsetAddRemovePatchesEvent\(object, ICollection<Patch\>\)

```csharp
public ObjectBasePatchsetAddRemovePatchesEvent(object obOriginal, ICollection<Patch> patches)
```

#### Parameters

`obOriginal` [object](https://learn.microsoft.com/dotnet/api/system.object)

`patches` [ICollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1)<[Patch](VM.Managed.DAFUL.FE.Patch.md)\>

## Methods

### <a id="VM_Managed_DAFUL_FE_History_ObjectBasePatchsetAddRemovePatchesEvent_AddPatches"></a> AddPatches\(\)

```csharp
protected void AddPatches()
```

### <a id="VM_Managed_DAFUL_FE_History_ObjectBasePatchsetAddRemovePatchesEvent_AfterRedo_VM_Managed_History_HistoryEventArgs_"></a> AfterRedo\(HistoryEventArgs\)

```csharp
protected override void AfterRedo(HistoryEventArgs args)
```

#### Parameters

`args` HistoryEventArgs

### <a id="VM_Managed_DAFUL_FE_History_ObjectBasePatchsetAddRemovePatchesEvent_AfterUndo_VM_Managed_History_HistoryEventArgs_"></a> AfterUndo\(HistoryEventArgs\)

```csharp
protected override void AfterUndo(HistoryEventArgs args)
```

#### Parameters

`args` HistoryEventArgs

### <a id="VM_Managed_DAFUL_FE_History_ObjectBasePatchsetAddRemovePatchesEvent_Clear_System_Boolean_"></a> Clear\(bool\)

```csharp
protected override void Clear(bool bReserveReferenceCount)
```

#### Parameters

`bReserveReferenceCount` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_FE_History_ObjectBasePatchsetAddRemovePatchesEvent_RefreshNavigator"></a> RefreshNavigator\(\)

```csharp
protected void RefreshNavigator()
```

### <a id="VM_Managed_DAFUL_FE_History_ObjectBasePatchsetAddRemovePatchesEvent_RemovePatches"></a> RemovePatches\(\)

```csharp
protected void RemovePatches()
```

