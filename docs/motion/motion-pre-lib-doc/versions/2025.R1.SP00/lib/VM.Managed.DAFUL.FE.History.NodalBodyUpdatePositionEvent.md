#  Class NodalBodyUpdatePositionEvent

Namespace: [VM.Managed.DAFUL.FE.History](VM.Managed.DAFUL.FE.History.md)  
Assembly: VMFE.dll  

This class is to represent the FE Import event.

```csharp
public class NodalBodyUpdatePositionEvent : HistoryEvent
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
HistoryEvent ← 
[NodalBodyUpdatePositionEvent](VM.Managed.DAFUL.FE.History.NodalBodyUpdatePositionEvent.md)

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

### <a id="VM_Managed_DAFUL_FE_History_NodalBodyUpdatePositionEvent__ctor_System_Object_VM_Managed_DAFUL_FE_NodalBody_NodeInformation___VM_Managed_DAFUL_FE_NodalBody_ElementInformation___"></a> NodalBodyUpdatePositionEvent\(object, NodeInformation\[\], ElementInformation\[\]\)

```csharp
public NodalBodyUpdatePositionEvent(object obj, NodalBody.NodeInformation[] arNodeInfo, NodalBody.ElementInformation[] arElementInfo)
```

#### Parameters

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

`arNodeInfo` [NodalBody](VM.Managed.DAFUL.FE.NodalBody.md).[NodeInformation](VM.Managed.DAFUL.FE.NodalBody.NodeInformation.md)\[\]

`arElementInfo` [NodalBody](VM.Managed.DAFUL.FE.NodalBody.md).[ElementInformation](VM.Managed.DAFUL.FE.NodalBody.ElementInformation.md)\[\]

## Methods

### <a id="VM_Managed_DAFUL_FE_History_NodalBodyUpdatePositionEvent_Clear_System_Boolean_"></a> Clear\(bool\)

```csharp
public override void Clear(bool bReserveReferenceCount)
```

#### Parameters

`bReserveReferenceCount` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_FE_History_NodalBodyUpdatePositionEvent_Redo_VM_Managed_History_HistoryEventArgs_"></a> Redo\(HistoryEventArgs\)

```csharp
public override void Redo(HistoryEventArgs args)
```

#### Parameters

`args` HistoryEventArgs

### <a id="VM_Managed_DAFUL_FE_History_NodalBodyUpdatePositionEvent_Undo_VM_Managed_History_HistoryEventArgs_"></a> Undo\(HistoryEventArgs\)

```csharp
public override void Undo(HistoryEventArgs args)
```

#### Parameters

`args` HistoryEventArgs

