# Class ObjectBaseAddon
<a id="VM_Managed_History_ObjectBaseAddon"></a>

Namespace: [VM.Managed.History](VM.Managed.History.md)  
Assembly: VMAppCore.dll  

```csharp
public abstract class ObjectBaseAddon : HistoryManagerAddon
```

#### Inheritance

object ← 
[HistoryManagerAddon](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/HistoryManagerAddon.cs) ← 
[ObjectBaseAddon](VM.Managed.History.ObjectBaseAddon.md)

#### Derived

[AddToSubEntityAddon](VM.Managed.History.AddToSubEntityAddon.md), 
[HiddenDocumentAddon](VM.Managed.History.HiddenDocumentAddon.md), 
[NavigatorAddon](VM.Managed.History.NavigatorAddon.md), 
[RefreshSubEntityAddon](VM.Managed.History.RefreshSubEntityAddon.md), 
[UpdateSimulationConfigurationAddon](VM.Managed.History.UpdateSimulationConfigurationAddon.md)

#### Inherited Members

[HistoryManagerAddon.BeforeUndo\(object, HistoryEventArgs\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/HistoryManagerAddon.cs), 
[HistoryManagerAddon.AfterUndo\(object, HistoryEventArgs\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/HistoryManagerAddon.cs), 
[HistoryManagerAddon.BeforeRedo\(object, HistoryEventArgs\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/HistoryManagerAddon.cs), 
[HistoryManagerAddon.AfterRedo\(object, HistoryEventArgs\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/HistoryManagerAddon.cs), 
[HistoryManagerAddon.BeforeRollback\(object, HistoryEventArgs\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/HistoryManagerAddon.cs), 
[HistoryManagerAddon.AfterRollback\(object, HistoryEventArgs\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/HistoryManagerAddon.cs), 
[HistoryManagerAddon.BeforeRecord\(object, HistoryEventArgs\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/HistoryManagerAddon.cs), 
[HistoryManagerAddon.AfterRecord\(object, HistoryEventArgs\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/HistoryManagerAddon.cs), 
[HistoryManagerAddon.Register\(HistoryManager\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/HistoryManagerAddon.cs), 
[HistoryManagerAddon.ClearMarkCollection\(ICollection<HistoryMark\>\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/HistoryManagerAddon.cs), 
[HistoryManagerAddon.ClearMark\(HistoryMark\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/HistoryManagerAddon.cs), 
[HistoryManagerAddon.Parent](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/HistoryManagerAddon.cs), 
[HistoryManagerAddon.DoneList](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/HistoryManagerAddon.cs), 
[HistoryManagerAddon.UndoneList](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/HistoryManagerAddon.cs)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_History_ObjectBaseAddon__ctor"></a> ObjectBaseAddon\(\)

```csharp
public ObjectBaseAddon()
```

## Properties

### <a id="VM_Managed_History_ObjectBaseAddon_List"></a> List

```csharp
protected IEnumerable<UIntPtr> List { get; }
```

#### Property Value

 IEnumerable<UIntPtr\>

## Methods

### <a id="VM_Managed_History_ObjectBaseAddon_AddEntity_System_UIntPtr_"></a> AddEntity\(UIntPtr\)

```csharp
public void AddEntity(UIntPtr key)
```

#### Parameters

`key` UIntPtr

### <a id="VM_Managed_History_ObjectBaseAddon_AfterRedo_System_Object_VM_Managed_History_HistoryEventArgs_"></a> AfterRedo\(object, HistoryEventArgs\)

```csharp
protected override sealed void AfterRedo(object o, HistoryEventArgs args)
```

#### Parameters

`o` object

`args` [HistoryEventArgs](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/HistoryEventArgs.cs)

### <a id="VM_Managed_History_ObjectBaseAddon_AfterRollback_System_Object_VM_Managed_History_HistoryEventArgs_"></a> AfterRollback\(object, HistoryEventArgs\)

```csharp
protected override sealed void AfterRollback(object o, HistoryEventArgs args)
```

#### Parameters

`o` object

`args` [HistoryEventArgs](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/HistoryEventArgs.cs)

### <a id="VM_Managed_History_ObjectBaseAddon_AfterUndo_System_Object_VM_Managed_History_HistoryEventArgs_"></a> AfterUndo\(object, HistoryEventArgs\)

```csharp
protected override sealed void AfterUndo(object o, HistoryEventArgs args)
```

#### Parameters

`o` object

`args` [HistoryEventArgs](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/HistoryEventArgs.cs)

### <a id="VM_Managed_History_ObjectBaseAddon_BeforeRedo_System_Object_VM_Managed_History_HistoryEventArgs_"></a> BeforeRedo\(object, HistoryEventArgs\)

```csharp
protected override sealed void BeforeRedo(object o, HistoryEventArgs args)
```

#### Parameters

`o` object

`args` [HistoryEventArgs](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/HistoryEventArgs.cs)

### <a id="VM_Managed_History_ObjectBaseAddon_BeforeRollback_System_Object_VM_Managed_History_HistoryEventArgs_"></a> BeforeRollback\(object, HistoryEventArgs\)

```csharp
protected override sealed void BeforeRollback(object o, HistoryEventArgs args)
```

#### Parameters

`o` object

`args` [HistoryEventArgs](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/HistoryEventArgs.cs)

### <a id="VM_Managed_History_ObjectBaseAddon_BeforeUndo_System_Object_VM_Managed_History_HistoryEventArgs_"></a> BeforeUndo\(object, HistoryEventArgs\)

```csharp
protected override sealed void BeforeUndo(object o, HistoryEventArgs args)
```

#### Parameters

`o` object

`args` [HistoryEventArgs](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/HistoryEventArgs.cs)

### <a id="VM_Managed_History_ObjectBaseAddon_Init_System_Object_VM_Managed_History_HistoryEventArgs_"></a> Init\(object, HistoryEventArgs\)

```csharp
protected virtual void Init(object o, HistoryEventArgs args)
```

#### Parameters

`o` object

`args` [HistoryEventArgs](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/HistoryEventArgs.cs)

### <a id="VM_Managed_History_ObjectBaseAddon_Process_System_Object_VM_Managed_History_HistoryEventArgs_"></a> Process\(object, HistoryEventArgs\)

```csharp
protected virtual void Process(object o, HistoryEventArgs args)
```

#### Parameters

`o` object

`args` [HistoryEventArgs](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/HistoryEventArgs.cs)

### <a id="VM_Managed_History_ObjectBaseAddon_RemoveEntity_System_UIntPtr_"></a> RemoveEntity\(UIntPtr\)

```csharp
public void RemoveEntity(UIntPtr key)
```

#### Parameters

`key` UIntPtr

