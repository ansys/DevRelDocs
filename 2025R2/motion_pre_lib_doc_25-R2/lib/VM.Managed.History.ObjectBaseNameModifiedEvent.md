#  Class ObjectBaseNameModifiedEvent

Namespace: [VM.Managed.History](VM.Managed.History.md)  
Assembly: VMAppCore.dll  

```csharp
public class ObjectBaseNameModifiedEvent : HistoryEvent
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
HistoryEvent ← 
[ObjectBaseNameModifiedEvent](VM.Managed.History.ObjectBaseNameModifiedEvent.md)

#### Inherited Members

HistoryEvent.ClearEvent\(bool\), 
HistoryEvent.Undo\(HistoryEventArgs\), 
HistoryEvent.Redo\(HistoryEventArgs\), 
HistoryEvent.Clear\(bool\), 
HistoryEvent.BeforeUndo\(HistoryEventArgs\), 
HistoryEvent.AfterUndo\(HistoryEventArgs\), 
HistoryEvent.BeforeRedo\(HistoryEventArgs\), 
HistoryEvent.AfterRedo\(HistoryEventArgs\), 
HistoryEvent.BeforeAdded\(AddToHistoryManagerEventArgs\), 
HistoryEvent.AfterAdded\(HistoryEventArgs\), 
HistoryEvent.IsValid

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_History_ObjectBaseNameModifiedEvent__ctor_System_Object_System_String_System_String_"></a> ObjectBaseNameModifiedEvent\(object, string, string\)

```csharp
public ObjectBaseNameModifiedEvent(object obOriginal, string strName1, string strName2)
```

#### Parameters

`obOriginal` [object](https://learn.microsoft.com/dotnet/api/system.object)

`strName1` [string](https://learn.microsoft.com/dotnet/api/system.string)

`strName2` [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="VM_Managed_History_ObjectBaseNameModifiedEvent_AfterRedo_VM_Managed_History_HistoryEventArgs_"></a> AfterRedo\(HistoryEventArgs\)

```csharp
protected override void AfterRedo(HistoryEventArgs args)
```

#### Parameters

`args` HistoryEventArgs

### <a id="VM_Managed_History_ObjectBaseNameModifiedEvent_AfterUndo_VM_Managed_History_HistoryEventArgs_"></a> AfterUndo\(HistoryEventArgs\)

```csharp
protected override void AfterUndo(HistoryEventArgs args)
```

#### Parameters

`args` HistoryEventArgs

### <a id="VM_Managed_History_ObjectBaseNameModifiedEvent_Clear_System_Boolean_"></a> Clear\(bool\)

```csharp
protected override void Clear(bool bReserveReferenceCount)
```

#### Parameters

`bReserveReferenceCount` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_History_ObjectBaseNameModifiedEvent_ObjectBaseNameModified_System_Object_System_String_System_String_"></a> ObjectBaseNameModified\(object, string, string\)

```csharp
public static void ObjectBaseNameModified(object @object, string strOld, string strNew)
```

#### Parameters

`object` [object](https://learn.microsoft.com/dotnet/api/system.object)

`strOld` [string](https://learn.microsoft.com/dotnet/api/system.string)

`strNew` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_History_ObjectBaseNameModifiedEvent_Redo_VM_Managed_History_HistoryEventArgs_"></a> Redo\(HistoryEventArgs\)

```csharp
protected override void Redo(HistoryEventArgs args)
```

#### Parameters

`args` HistoryEventArgs

### <a id="VM_Managed_History_ObjectBaseNameModifiedEvent_Undo_VM_Managed_History_HistoryEventArgs_"></a> Undo\(HistoryEventArgs\)

```csharp
protected override void Undo(HistoryEventArgs args)
```

#### Parameters

`args` HistoryEventArgs

