# Class NavigatorAddon
<a id="VM_Managed_History_NavigatorAddon"></a>

Namespace: [VM.Managed.History](VM.Managed.History.md)  
Assembly: VMAppCore.dll  

```csharp
public abstract class NavigatorAddon : ObjectBaseAddon
```

#### Inheritance

object ← 
[HistoryManagerAddon](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/HistoryManagerAddon.cs) ← 
[ObjectBaseAddon](VM.Managed.History.ObjectBaseAddon.md) ← 
[NavigatorAddon](VM.Managed.History.NavigatorAddon.md)

#### Derived

[AddToNavigatorAddon](VM.Managed.History.AddToNavigatorAddon.md), 
[RemoveFromNavigatorAddon](VM.Managed.History.RemoveFromNavigatorAddon.md), 
[RenameItemInNavigatorAddon](VM.Managed.History.RenameItemInNavigatorAddon.md), 
[UpdateAllItemInNavigatorAddon](VM.Managed.History.UpdateAllItemInNavigatorAddon.md), 
[UpdateItemInNavigatorAddon](VM.Managed.History.UpdateItemInNavigatorAddon.md), 
[UpdateItemInNavigatorForCollectionAddon](VM.Managed.History.UpdateItemInNavigatorForCollectionAddon.md)

#### Inherited Members

[ObjectBaseAddon.BeforeUndo\(object, HistoryEventArgs\)](VM.Managed.History.ObjectBaseAddon.md\#VM\_Managed\_History\_ObjectBaseAddon\_BeforeUndo\_System\_Object\_VM\_Managed\_History\_HistoryEventArgs\_), 
[ObjectBaseAddon.AfterUndo\(object, HistoryEventArgs\)](VM.Managed.History.ObjectBaseAddon.md\#VM\_Managed\_History\_ObjectBaseAddon\_AfterUndo\_System\_Object\_VM\_Managed\_History\_HistoryEventArgs\_), 
[ObjectBaseAddon.BeforeRedo\(object, HistoryEventArgs\)](VM.Managed.History.ObjectBaseAddon.md\#VM\_Managed\_History\_ObjectBaseAddon\_BeforeRedo\_System\_Object\_VM\_Managed\_History\_HistoryEventArgs\_), 
[ObjectBaseAddon.AfterRedo\(object, HistoryEventArgs\)](VM.Managed.History.ObjectBaseAddon.md\#VM\_Managed\_History\_ObjectBaseAddon\_AfterRedo\_System\_Object\_VM\_Managed\_History\_HistoryEventArgs\_), 
[ObjectBaseAddon.BeforeRollback\(object, HistoryEventArgs\)](VM.Managed.History.ObjectBaseAddon.md\#VM\_Managed\_History\_ObjectBaseAddon\_BeforeRollback\_System\_Object\_VM\_Managed\_History\_HistoryEventArgs\_), 
[ObjectBaseAddon.AfterRollback\(object, HistoryEventArgs\)](VM.Managed.History.ObjectBaseAddon.md\#VM\_Managed\_History\_ObjectBaseAddon\_AfterRollback\_System\_Object\_VM\_Managed\_History\_HistoryEventArgs\_), 
[ObjectBaseAddon.Init\(object, HistoryEventArgs\)](VM.Managed.History.ObjectBaseAddon.md\#VM\_Managed\_History\_ObjectBaseAddon\_Init\_System\_Object\_VM\_Managed\_History\_HistoryEventArgs\_), 
[ObjectBaseAddon.Process\(object, HistoryEventArgs\)](VM.Managed.History.ObjectBaseAddon.md\#VM\_Managed\_History\_ObjectBaseAddon\_Process\_System\_Object\_VM\_Managed\_History\_HistoryEventArgs\_), 
[ObjectBaseAddon.AddEntity\(UIntPtr\)](VM.Managed.History.ObjectBaseAddon.md\#VM\_Managed\_History\_ObjectBaseAddon\_AddEntity\_System\_UIntPtr\_), 
[ObjectBaseAddon.RemoveEntity\(UIntPtr\)](VM.Managed.History.ObjectBaseAddon.md\#VM\_Managed\_History\_ObjectBaseAddon\_RemoveEntity\_System\_UIntPtr\_), 
[ObjectBaseAddon.List](VM.Managed.History.ObjectBaseAddon.md\#VM\_Managed\_History\_ObjectBaseAddon\_List), 
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

### <a id="VM_Managed_History_NavigatorAddon__ctor"></a> NavigatorAddon\(\)

```csharp
public NavigatorAddon()
```

## Methods

### <a id="VM_Managed_History_NavigatorAddon_Add"></a> Add\(\)

```csharp
protected void Add()
```

### <a id="VM_Managed_History_NavigatorAddon_AddCore_System_UIntPtr_"></a> AddCore\(UIntPtr\)

```csharp
public static void AddCore(UIntPtr key)
```

#### Parameters

`key` UIntPtr

### <a id="VM_Managed_History_NavigatorAddon_Process_System_Object_VM_Managed_History_HistoryEventArgs_"></a> Process\(object, HistoryEventArgs\)

```csharp
protected override void Process(object o, HistoryEventArgs args)
```

#### Parameters

`o` object

`args` [HistoryEventArgs](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/HistoryEventArgs.cs)

### <a id="VM_Managed_History_NavigatorAddon_Remove"></a> Remove\(\)

```csharp
protected void Remove()
```

### <a id="VM_Managed_History_NavigatorAddon_RemoveCore_System_UIntPtr_"></a> RemoveCore\(UIntPtr\)

```csharp
public static void RemoveCore(UIntPtr key)
```

#### Parameters

`key` UIntPtr

### <a id="VM_Managed_History_NavigatorAddon_Rename"></a> Rename\(\)

```csharp
protected void Rename()
```

### <a id="VM_Managed_History_NavigatorAddon_RenameCore_System_UIntPtr_"></a> RenameCore\(UIntPtr\)

```csharp
public static void RenameCore(UIntPtr key)
```

#### Parameters

`key` UIntPtr

### <a id="VM_Managed_History_NavigatorAddon_Update"></a> Update\(\)

```csharp
protected void Update()
```

### <a id="VM_Managed_History_NavigatorAddon_UpdateCore_System_UIntPtr_"></a> UpdateCore\(UIntPtr\)

```csharp
public static void UpdateCore(UIntPtr key)
```

#### Parameters

`key` UIntPtr

