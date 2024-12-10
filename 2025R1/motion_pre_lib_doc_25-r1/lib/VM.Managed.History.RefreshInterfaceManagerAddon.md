#  Class RefreshInterfaceManagerAddon

Namespace: [VM.Managed.History](VM.Managed.History.md)  
Assembly: VMObjBase.dll  

History addon for refresh assembled body

```csharp
public class RefreshInterfaceManagerAddon : HistoryManagerAddon
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
HistoryManagerAddon ← 
[RefreshInterfaceManagerAddon](VM.Managed.History.RefreshInterfaceManagerAddon.md)

#### Inherited Members

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

### <a id="VM_Managed_History_RefreshInterfaceManagerAddon__ctor"></a> RefreshInterfaceManagerAddon\(\)

Construct new RefreshInterfaceManagerAddon

```csharp
public RefreshInterfaceManagerAddon()
```

## Methods

### <a id="VM_Managed_History_RefreshInterfaceManagerAddon_AddDocument_VM_Managed_Document3D_"></a> AddDocument\(Document3D\)

```csharp
public void AddDocument(Document3D document3D)
```

#### Parameters

`document3D` Document3D

### <a id="VM_Managed_History_RefreshInterfaceManagerAddon_AfterRedo_System_Object_VM_Managed_History_HistoryEventArgs_"></a> AfterRedo\(object, HistoryEventArgs\)

```csharp
protected override void AfterRedo(object o, HistoryEventArgs args)
```

#### Parameters

`o` [object](https://learn.microsoft.com/dotnet/api/system.object)

`args` HistoryEventArgs

### <a id="VM_Managed_History_RefreshInterfaceManagerAddon_AfterUndo_System_Object_VM_Managed_History_HistoryEventArgs_"></a> AfterUndo\(object, HistoryEventArgs\)

```csharp
protected override void AfterUndo(object o, HistoryEventArgs args)
```

#### Parameters

`o` [object](https://learn.microsoft.com/dotnet/api/system.object)

`args` HistoryEventArgs

