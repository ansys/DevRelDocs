#  Class UpdateItemInNavigatorAddon

Namespace: [VM.Managed.History](VM.Managed.History.md)  
Assembly: VMAppCore.dll  

```csharp
public class UpdateItemInNavigatorAddon : NavigatorAddon
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
HistoryManagerAddon ← 
[ObjectBaseAddon](VM.Managed.History.ObjectBaseAddon.md) ← 
[NavigatorAddon](VM.Managed.History.NavigatorAddon.md) ← 
[UpdateItemInNavigatorAddon](VM.Managed.History.UpdateItemInNavigatorAddon.md)

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

### <a id="VM_Managed_History_UpdateItemInNavigatorAddon__ctor"></a> UpdateItemInNavigatorAddon\(\)

```csharp
public UpdateItemInNavigatorAddon()
```

## Methods

### <a id="VM_Managed_History_UpdateItemInNavigatorAddon_Process_System_Object_VM_Managed_History_HistoryEventArgs_"></a> Process\(object, HistoryEventArgs\)

```csharp
protected override void Process(object o, HistoryEventArgs args)
```

#### Parameters

`o` [object](https://learn.microsoft.com/dotnet/api/system.object)

`args` HistoryEventArgs

