# Class RegisterSetEventBase
<a id="VM_Managed_History_RegisterSetEventBase"></a>

Namespace: [VM.Managed.History](VM.Managed.History.md)  
Assembly: VMAppCore.dll  

```csharp
public abstract class RegisterSetEventBase : HistoryEvent
```

#### Inheritance

object ← 
[HistoryEvent](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/HistoryEvent.cs) ← 
[RegisterSetEventBase](VM.Managed.History.RegisterSetEventBase.md)

#### Derived

[RegisterCurveSetEvent](VM.Managed.History.RegisterCurveSetEvent.md), 
[RegisterFaceSetEvent](VM.Managed.History.RegisterFaceSetEvent.md)

#### Inherited Members

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

### <a id="VM_Managed_History_RegisterSetEventBase__ctor_System_UIntPtr_System_UIntPtr___System_UIntPtr___"></a> RegisterSetEventBase\(UIntPtr, UIntPtr\[\], UIntPtr\[\]\)

```csharp
public RegisterSetEventBase(UIntPtr ptrSet, UIntPtr[] arKeyUndoTopology, UIntPtr[] arKeyRedoTopology)
```

#### Parameters

`ptrSet` UIntPtr

`arKeyUndoTopology` UIntPtr\[\]

`arKeyRedoTopology` UIntPtr\[\]

## Fields

### <a id="VM_Managed_History_RegisterSetEventBase_m_arKeyRedoTopology"></a> m\_arKeyRedoTopology

```csharp
protected UIntPtr[] m_arKeyRedoTopology
```

#### Field Value

 UIntPtr\[\]

### <a id="VM_Managed_History_RegisterSetEventBase_m_arKeyUndoTopology"></a> m\_arKeyUndoTopology

```csharp
protected UIntPtr[] m_arKeyUndoTopology
```

#### Field Value

 UIntPtr\[\]

### <a id="VM_Managed_History_RegisterSetEventBase_m_keySet"></a> m\_keySet

```csharp
protected UIntPtr m_keySet
```

#### Field Value

 UIntPtr

## Methods

### <a id="VM_Managed_History_RegisterSetEventBase_AfterRedo_VM_Managed_History_HistoryEventArgs_"></a> AfterRedo\(HistoryEventArgs\)

```csharp
protected override void AfterRedo(HistoryEventArgs args)
```

#### Parameters

`args` [HistoryEventArgs](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/HistoryEventArgs.cs)

### <a id="VM_Managed_History_RegisterSetEventBase_AfterUndo_VM_Managed_History_HistoryEventArgs_"></a> AfterUndo\(HistoryEventArgs\)

```csharp
protected override void AfterUndo(HistoryEventArgs args)
```

#### Parameters

`args` [HistoryEventArgs](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/HistoryEventArgs.cs)

### <a id="VM_Managed_History_RegisterSetEventBase_Clear_System_Boolean_"></a> Clear\(bool\)

```csharp
protected override void Clear(bool bReserveReferenceCount)
```

#### Parameters

`bReserveReferenceCount` bool

