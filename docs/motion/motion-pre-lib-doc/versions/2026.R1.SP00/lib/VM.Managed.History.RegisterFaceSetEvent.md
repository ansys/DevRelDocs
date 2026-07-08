# Class RegisterFaceSetEvent
<a id="VM_Managed_History_RegisterFaceSetEvent"></a>

Namespace: [VM.Managed.History](VM.Managed.History.md)  
Assembly: VMAppCore.dll  

```csharp
public class RegisterFaceSetEvent : RegisterSetEventBase
```

#### Inheritance

object ← 
[HistoryEvent](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/HistoryEvent.cs) ← 
[RegisterSetEventBase](VM.Managed.History.RegisterSetEventBase.md) ← 
[RegisterFaceSetEvent](VM.Managed.History.RegisterFaceSetEvent.md)

#### Inherited Members

[RegisterSetEventBase.m\_keySet](VM.Managed.History.RegisterSetEventBase.md\#VM\_Managed\_History\_RegisterSetEventBase\_m\_keySet), 
[RegisterSetEventBase.m\_arKeyUndoTopology](VM.Managed.History.RegisterSetEventBase.md\#VM\_Managed\_History\_RegisterSetEventBase\_m\_arKeyUndoTopology), 
[RegisterSetEventBase.m\_arKeyRedoTopology](VM.Managed.History.RegisterSetEventBase.md\#VM\_Managed\_History\_RegisterSetEventBase\_m\_arKeyRedoTopology), 
[RegisterSetEventBase.Clear\(bool\)](VM.Managed.History.RegisterSetEventBase.md\#VM\_Managed\_History\_RegisterSetEventBase\_Clear\_System\_Boolean\_), 
[RegisterSetEventBase.AfterUndo\(HistoryEventArgs\)](VM.Managed.History.RegisterSetEventBase.md\#VM\_Managed\_History\_RegisterSetEventBase\_AfterUndo\_VM\_Managed\_History\_HistoryEventArgs\_), 
[RegisterSetEventBase.AfterRedo\(HistoryEventArgs\)](VM.Managed.History.RegisterSetEventBase.md\#VM\_Managed\_History\_RegisterSetEventBase\_AfterRedo\_VM\_Managed\_History\_HistoryEventArgs\_), 
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

### <a id="VM_Managed_History_RegisterFaceSetEvent__ctor_System_UIntPtr_System_UIntPtr___System_UIntPtr___"></a> RegisterFaceSetEvent\(UIntPtr, UIntPtr\[\], UIntPtr\[\]\)

```csharp
public RegisterFaceSetEvent(UIntPtr ptrSet, UIntPtr[] arKeyUndoTopology, UIntPtr[] arKeyRedoTopology)
```

#### Parameters

`ptrSet` UIntPtr

`arKeyUndoTopology` UIntPtr\[\]

`arKeyRedoTopology` UIntPtr\[\]

## Methods

### <a id="VM_Managed_History_RegisterFaceSetEvent_Redo_VM_Managed_History_HistoryEventArgs_"></a> Redo\(HistoryEventArgs\)

```csharp
protected override void Redo(HistoryEventArgs args)
```

#### Parameters

`args` [HistoryEventArgs](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/HistoryEventArgs.cs)

### <a id="VM_Managed_History_RegisterFaceSetEvent_RegisterFaceSetModified_System_UIntPtr_System_UIntPtr___System_UIntPtr___"></a> RegisterFaceSetModified\(UIntPtr, UIntPtr\[\], UIntPtr\[\]\)

```csharp
public static void RegisterFaceSetModified(UIntPtr ptrSet, UIntPtr[] arKeyUndoTopology, UIntPtr[] arKeyRedoTopology)
```

#### Parameters

`ptrSet` UIntPtr

`arKeyUndoTopology` UIntPtr\[\]

`arKeyRedoTopology` UIntPtr\[\]

### <a id="VM_Managed_History_RegisterFaceSetEvent_Undo_VM_Managed_History_HistoryEventArgs_"></a> Undo\(HistoryEventArgs\)

```csharp
protected override void Undo(HistoryEventArgs args)
```

#### Parameters

`args` [HistoryEventArgs](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/HistoryEventArgs.cs)

