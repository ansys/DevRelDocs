#  Class ObjectBaseAddon

Namespace: [VM.Managed.History](VM.Managed.History.md)  
Assembly: VMAppCore.dll  

```csharp
public abstract class ObjectBaseAddon : HistoryManagerAddon
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
HistoryManagerAddon ← 
[ObjectBaseAddon](VM.Managed.History.ObjectBaseAddon.md)

#### Derived

[AddToSubEntityAddon](VM.Managed.History.AddToSubEntityAddon.md), 
[HiddenDocumentAddon](VM.Managed.History.HiddenDocumentAddon.md), 
[NavigatorAddon](VM.Managed.History.NavigatorAddon.md), 
[RefreshSubEntityAddon](VM.Managed.History.RefreshSubEntityAddon.md), 
[UpdateSimulationConfigurationAddon](VM.Managed.History.UpdateSimulationConfigurationAddon.md)

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

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)\>

## Methods

### <a id="VM_Managed_History_ObjectBaseAddon_AddEntity_System_UIntPtr_"></a> AddEntity\(UIntPtr\)

```csharp
public void AddEntity(UIntPtr key)
```

#### Parameters

`key` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

### <a id="VM_Managed_History_ObjectBaseAddon_AfterRedo_System_Object_VM_Managed_History_HistoryEventArgs_"></a> AfterRedo\(object, HistoryEventArgs\)

```csharp
protected override sealed void AfterRedo(object o, HistoryEventArgs args)
```

#### Parameters

`o` [object](https://learn.microsoft.com/dotnet/api/system.object)

`args` HistoryEventArgs

### <a id="VM_Managed_History_ObjectBaseAddon_AfterRollback_System_Object_VM_Managed_History_HistoryEventArgs_"></a> AfterRollback\(object, HistoryEventArgs\)

```csharp
protected override sealed void AfterRollback(object o, HistoryEventArgs args)
```

#### Parameters

`o` [object](https://learn.microsoft.com/dotnet/api/system.object)

`args` HistoryEventArgs

### <a id="VM_Managed_History_ObjectBaseAddon_AfterUndo_System_Object_VM_Managed_History_HistoryEventArgs_"></a> AfterUndo\(object, HistoryEventArgs\)

```csharp
protected override sealed void AfterUndo(object o, HistoryEventArgs args)
```

#### Parameters

`o` [object](https://learn.microsoft.com/dotnet/api/system.object)

`args` HistoryEventArgs

### <a id="VM_Managed_History_ObjectBaseAddon_BeforeRedo_System_Object_VM_Managed_History_HistoryEventArgs_"></a> BeforeRedo\(object, HistoryEventArgs\)

```csharp
protected override sealed void BeforeRedo(object o, HistoryEventArgs args)
```

#### Parameters

`o` [object](https://learn.microsoft.com/dotnet/api/system.object)

`args` HistoryEventArgs

### <a id="VM_Managed_History_ObjectBaseAddon_BeforeRollback_System_Object_VM_Managed_History_HistoryEventArgs_"></a> BeforeRollback\(object, HistoryEventArgs\)

```csharp
protected override sealed void BeforeRollback(object o, HistoryEventArgs args)
```

#### Parameters

`o` [object](https://learn.microsoft.com/dotnet/api/system.object)

`args` HistoryEventArgs

### <a id="VM_Managed_History_ObjectBaseAddon_BeforeUndo_System_Object_VM_Managed_History_HistoryEventArgs_"></a> BeforeUndo\(object, HistoryEventArgs\)

```csharp
protected override sealed void BeforeUndo(object o, HistoryEventArgs args)
```

#### Parameters

`o` [object](https://learn.microsoft.com/dotnet/api/system.object)

`args` HistoryEventArgs

### <a id="VM_Managed_History_ObjectBaseAddon_Init_System_Object_VM_Managed_History_HistoryEventArgs_"></a> Init\(object, HistoryEventArgs\)

```csharp
protected virtual void Init(object o, HistoryEventArgs args)
```

#### Parameters

`o` [object](https://learn.microsoft.com/dotnet/api/system.object)

`args` HistoryEventArgs

### <a id="VM_Managed_History_ObjectBaseAddon_Process_System_Object_VM_Managed_History_HistoryEventArgs_"></a> Process\(object, HistoryEventArgs\)

```csharp
protected virtual void Process(object o, HistoryEventArgs args)
```

#### Parameters

`o` [object](https://learn.microsoft.com/dotnet/api/system.object)

`args` HistoryEventArgs

### <a id="VM_Managed_History_ObjectBaseAddon_RemoveEntity_System_UIntPtr_"></a> RemoveEntity\(UIntPtr\)

```csharp
public void RemoveEntity(UIntPtr key)
```

#### Parameters

`key` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

