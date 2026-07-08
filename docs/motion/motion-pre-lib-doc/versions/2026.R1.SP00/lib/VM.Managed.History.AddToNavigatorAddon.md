# Class AddToNavigatorAddon
<a id="VM_Managed_History_AddToNavigatorAddon"></a>

Namespace: [VM.Managed.History](VM.Managed.History.md)  
Assembly: VMAppCore.dll  

```csharp
public class AddToNavigatorAddon : NavigatorAddon
```

#### Inheritance

object ← 
[HistoryManagerAddon](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/HistoryManagerAddon.cs) ← 
[ObjectBaseAddon](VM.Managed.History.ObjectBaseAddon.md) ← 
[NavigatorAddon](VM.Managed.History.NavigatorAddon.md) ← 
[AddToNavigatorAddon](VM.Managed.History.AddToNavigatorAddon.md)

#### Inherited Members

[NavigatorAddon.Process\(object, HistoryEventArgs\)](VM.Managed.History.NavigatorAddon.md\#VM\_Managed\_History\_NavigatorAddon\_Process\_System\_Object\_VM\_Managed\_History\_HistoryEventArgs\_), 
[NavigatorAddon.Add\(\)](VM.Managed.History.NavigatorAddon.md\#VM\_Managed\_History\_NavigatorAddon\_Add), 
[NavigatorAddon.Remove\(\)](VM.Managed.History.NavigatorAddon.md\#VM\_Managed\_History\_NavigatorAddon\_Remove), 
[NavigatorAddon.Update\(\)](VM.Managed.History.NavigatorAddon.md\#VM\_Managed\_History\_NavigatorAddon\_Update), 
[NavigatorAddon.Rename\(\)](VM.Managed.History.NavigatorAddon.md\#VM\_Managed\_History\_NavigatorAddon\_Rename), 
[NavigatorAddon.AddCore\(UIntPtr\)](VM.Managed.History.NavigatorAddon.md\#VM\_Managed\_History\_NavigatorAddon\_AddCore\_System\_UIntPtr\_), 
[NavigatorAddon.RemoveCore\(UIntPtr\)](VM.Managed.History.NavigatorAddon.md\#VM\_Managed\_History\_NavigatorAddon\_RemoveCore\_System\_UIntPtr\_), 
[NavigatorAddon.UpdateCore\(UIntPtr\)](VM.Managed.History.NavigatorAddon.md\#VM\_Managed\_History\_NavigatorAddon\_UpdateCore\_System\_UIntPtr\_), 
[NavigatorAddon.RenameCore\(UIntPtr\)](VM.Managed.History.NavigatorAddon.md\#VM\_Managed\_History\_NavigatorAddon\_RenameCore\_System\_UIntPtr\_), 
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

### <a id="VM_Managed_History_AddToNavigatorAddon__ctor"></a> AddToNavigatorAddon\(\)

```csharp
public AddToNavigatorAddon()
```

## Methods

### <a id="VM_Managed_History_AddToNavigatorAddon_Process_System_Object_VM_Managed_History_HistoryEventArgs_"></a> Process\(object, HistoryEventArgs\)

```csharp
protected override void Process(object o, HistoryEventArgs args)
```

#### Parameters

`o` object

`args` [HistoryEventArgs](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/HistoryEventArgs.cs)

