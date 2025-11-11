# Class RefreshSubEntityAddonForDocument
<a id="VM_Managed_History_RefreshSubEntityAddonForDocument"></a>

Namespace: [VM.Managed.History](VM.Managed.History.md)  
Assembly: VMAppCore.dll  

```csharp
public class RefreshSubEntityAddonForDocument : RefreshSubEntityAddon, IUpdateDocAddOn
```

#### Inheritance

object ← 
[HistoryManagerAddon](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/HistoryManagerAddon.cs) ← 
[ObjectBaseAddon](VM.Managed.History.ObjectBaseAddon.md) ← 
[RefreshSubEntityAddon](VM.Managed.History.RefreshSubEntityAddon.md) ← 
[RefreshSubEntityAddonForDocument](VM.Managed.History.RefreshSubEntityAddonForDocument.md)

#### Implements

[IUpdateDocAddOn](VM.Managed.History.IUpdateDocAddOn.md)

#### Inherited Members

[RefreshSubEntityAddon.Process\(object, HistoryEventArgs\)](VM.Managed.History.RefreshSubEntityAddon.md\#VM\_Managed\_History\_RefreshSubEntityAddon\_Process\_System\_Object\_VM\_Managed\_History\_HistoryEventArgs\_), 
[RefreshSubEntityAddon.ProcessCore\(IEnumerable<UIntPtr\>\)](VM.Managed.History.RefreshSubEntityAddon.md\#VM\_Managed\_History\_RefreshSubEntityAddon\_ProcessCore\_System\_Collections\_Generic\_IEnumerable\_System\_UIntPtr\_\_), 
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

### <a id="VM_Managed_History_RefreshSubEntityAddonForDocument__ctor"></a> RefreshSubEntityAddonForDocument\(\)

```csharp
public RefreshSubEntityAddonForDocument()
```

## Methods

### <a id="VM_Managed_History_RefreshSubEntityAddonForDocument_Process_System_Object_VM_Managed_History_HistoryEventArgs_"></a> Process\(object, HistoryEventArgs\)

```csharp
protected override void Process(object o, HistoryEventArgs args)
```

#### Parameters

`o` object

`args` [HistoryEventArgs](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/HistoryEventArgs.cs)

### <a id="VM_Managed_History_RefreshSubEntityAddonForDocument_SetObject_VM_Managed_ObjectBase_"></a> SetObject\(ObjectBase\)

```csharp
public void SetObject(ObjectBase obj)
```

#### Parameters

`obj` [ObjectBase](VM.Managed.ObjectBase.md)

