#  Class RecalcMassAddon

Namespace: [VM.Managed.DAFUL.History](VM.Managed.DAFUL.History.md)  
Assembly: VMDFBase.dll  

History addon for racalcolate mass property

```csharp
public class RecalcMassAddon : ObjectBaseAddon
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
HistoryManagerAddon ← 
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
HistoryManagerAddon.BeforeUndo\(object, HistoryEventArgs\), 
HistoryManagerAddon.AfterUndo\(object, HistoryEventArgs\), 
HistoryManagerAddon.BeforeRedo\(object, HistoryEventArgs\), 
HistoryManagerAddon.AfterRedo\(object, HistoryEventArgs\), 
HistoryManagerAddon.BeforeRollback\(object, HistoryEventArgs\), 
HistoryManagerAddon.AfterRollback\(object, HistoryEventArgs\), 
HistoryManagerAddon.BeforeRecord\(object, HistoryEventArgs\), 
HistoryManagerAddon.AfterRecord\(object, HistoryEventArgs\), 
HistoryManagerAddon.Register\(HistoryManager\), 
HistoryManagerAddon.ClearMarkCollection\(ICollection<HistoryMark\>\), 
HistoryManagerAddon.ClearMark\(HistoryMark\), 
HistoryManagerAddon.Parent, 
HistoryManagerAddon.DoneList, 
HistoryManagerAddon.UndoneList

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

`o` [object](https://learn.microsoft.com/dotnet/api/system.object)

The object

`args` HistoryEventArgs

The <xref href="VM.Managed.History.HistoryEventArgs?text=HistoryEventArgs" data-throw-if-not-resolved="false"></xref>

