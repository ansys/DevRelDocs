#  Class MeshAddRemoveEventBase

Namespace: [VM.Managed.DAFUL.FE.History](VM.Managed.DAFUL.FE.History.md)  
Assembly: VMFE.dll  

This base class is to represent the add/remove event for mesh.

```csharp
public abstract class MeshAddRemoveEventBase : HistoryEvent
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
HistoryEvent ← 
[MeshAddRemoveEventBase](VM.Managed.DAFUL.FE.History.MeshAddRemoveEventBase.md)

#### Derived

[MeshAddEvent](VM.Managed.DAFUL.FE.History.MeshAddEvent.md), 
[MeshRemoveEvent](VM.Managed.DAFUL.FE.History.MeshRemoveEvent.md)

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

### <a id="VM_Managed_DAFUL_FE_History_MeshAddRemoveEventBase__ctor_System_UIntPtr_System_UIntPtr_"></a> MeshAddRemoveEventBase\(UIntPtr, UIntPtr\)

```csharp
protected MeshAddRemoveEventBase(UIntPtr keyMesh, UIntPtr keyObj)
```

#### Parameters

`keyMesh` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

`keyObj` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

## Methods

### <a id="VM_Managed_DAFUL_FE_History_MeshAddRemoveEventBase_Clear_System_Boolean_"></a> Clear\(bool\)

```csharp
protected override void Clear(bool bReserveReferenceCount)
```

#### Parameters

`bReserveReferenceCount` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

