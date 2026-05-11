# Class InstanceContainerHistMgrAddon

Namespace: [VM.Managed.History](VM.Managed.History.md)  
Assembly: VMAppCore.dll  

```csharp
public class InstanceContainerHistMgrAddon : HistoryManagerAddon
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
HistoryManagerAddon ← 
[InstanceContainerHistMgrAddon](VM.Managed.History.InstanceContainerHistMgrAddon.md)

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

### InstanceContainerHistMgrAddon\(\)

```csharp
public InstanceContainerHistMgrAddon()
```

## Methods

### AfterRecord\(object, HistoryEventArgs\)

```csharp
protected override void AfterRecord(object o, HistoryEventArgs args)
```

#### Parameters

`o` [object](https://learn.microsoft.com/dotnet/api/system.object)

`args` HistoryEventArgs

### BeforeRecord\(object, HistoryEventArgs\)

```csharp
protected override void BeforeRecord(object o, HistoryEventArgs args)
```

#### Parameters

`o` [object](https://learn.microsoft.com/dotnet/api/system.object)

`args` HistoryEventArgs

### OpenInstanceContainer\(string\)

```csharp
public static void OpenInstanceContainer(string strPath)
```

#### Parameters

`strPath` [string](https://learn.microsoft.com/dotnet/api/system.string)


