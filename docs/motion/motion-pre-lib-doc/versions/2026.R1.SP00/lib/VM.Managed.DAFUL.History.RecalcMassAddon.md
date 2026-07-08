# Class RecalcMassAddon
<a id="VM_Managed_DAFUL_History_RecalcMassAddon"></a>

Namespace: [VM.Managed.DAFUL.History](VM.Managed.DAFUL.History.md)  
Assembly: VMDFBase.dll  

History addon for racalcolate mass property

```csharp
public class RecalcMassAddon : ObjectBaseAddon
```

#### Inheritance

object ← 
[HistoryManagerAddon](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/HistoryManagerAddon.cs) ← 
ObjectBaseAddon ← 
[RecalcMassAddon](VM.Managed.DAFUL.History.RecalcMassAddon.md)

#### Inherited Members

ObjectBaseAddon.BeforeUndo\(object, HistoryEventArgs\), 
ObjectBaseAddon.AfterUndo\(object, HistoryEventArgs\), 
ObjectBaseAddon.BeforeRedo\(object, HistoryEventArgs\), 
ObjectBaseAddon.AfterRedo\(object, HistoryEventArgs\), 
ObjectBaseAddon.BeforeRollback\(object, HistoryEventArgs\), 
ObjectBaseAddon.AfterRollback\(object, HistoryEventArgs\), 
ObjectBaseAddon.Init\(object, HistoryEventArgs\), 
ObjectBaseAddon.Process\(object, HistoryEventArgs\), 
ObjectBaseAddon.AddEntity\(UIntPtr\), 
ObjectBaseAddon.RemoveEntity\(UIntPtr\), 
ObjectBaseAddon.List, 
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

### <a id="VM_Managed_DAFUL_History_RecalcMassAddon__ctor"></a> RecalcMassAddon\(\)

Construct new RecalcMassAddon

```csharp
public RecalcMassAddon()
```

## Methods

### <a id="VM_Managed_DAFUL_History_RecalcMassAddon_Process_System_Object_VM_Managed_History_HistoryEventArgs_"></a> Process\(object, HistoryEventArgs\)

Process addon logic.

```csharp
protected override void Process(object o, HistoryEventArgs args)
```

#### Parameters

`o` object

The object

`args` [HistoryEventArgs](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/HistoryEventArgs.cs)

The <xref href="VM.Managed.History.HistoryEventArgs?text=HistoryEventArgs" data-throw-if-not-resolved="false"></xref>

