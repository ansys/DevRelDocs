#  Class ObjectBaseVisibleEvent

Namespace: [VM.Managed.History](VM.Managed.History.md)  
Assembly: VMAppCore.dll  

```csharp
public class ObjectBaseVisibleEvent : HistoryEvent
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
HistoryEvent ← 
[ObjectBaseVisibleEvent](VM.Managed.History.ObjectBaseVisibleEvent.md)

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

### <a id="VM_Managed_History_ObjectBaseVisibleEvent__ctor_System_Object_"></a> ObjectBaseVisibleEvent\(object\)

```csharp
public ObjectBaseVisibleEvent(object obOriginal)
```

#### Parameters

`obOriginal` [object](https://learn.microsoft.com/dotnet/api/system.object)

## Methods

### <a id="VM_Managed_History_ObjectBaseVisibleEvent_AfterRedo_VM_Managed_History_HistoryEventArgs_"></a> AfterRedo\(HistoryEventArgs\)

```csharp
public override void AfterRedo(HistoryEventArgs args)
```

#### Parameters

`args` HistoryEventArgs

### <a id="VM_Managed_History_ObjectBaseVisibleEvent_AfterUndo_VM_Managed_History_HistoryEventArgs_"></a> AfterUndo\(HistoryEventArgs\)

```csharp
public override void AfterUndo(HistoryEventArgs args)
```

#### Parameters

`args` HistoryEventArgs

### <a id="VM_Managed_History_ObjectBaseVisibleEvent_Clear_System_Boolean_"></a> Clear\(bool\)

```csharp
public override void Clear(bool bReserveReferenceCount)
```

#### Parameters

`bReserveReferenceCount` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_History_ObjectBaseVisibleEvent_GetLayer"></a> GetLayer\(\)

```csharp
protected virtual Layer GetLayer()
```

#### Returns

 [Layer](VM.Managed.Layer.md)

### <a id="VM_Managed_History_ObjectBaseVisibleEvent_Redo_VM_Managed_History_HistoryEventArgs_"></a> Redo\(HistoryEventArgs\)

```csharp
public override void Redo(HistoryEventArgs args)
```

#### Parameters

`args` HistoryEventArgs

### <a id="VM_Managed_History_ObjectBaseVisibleEvent_ReplaceLayer_VM_Managed_Layer_"></a> ReplaceLayer\(Layer\)

```csharp
protected virtual void ReplaceLayer(Layer layer)
```

#### Parameters

`layer` [Layer](VM.Managed.Layer.md)

### <a id="VM_Managed_History_ObjectBaseVisibleEvent_Undo_VM_Managed_History_HistoryEventArgs_"></a> Undo\(HistoryEventArgs\)

```csharp
public override void Undo(HistoryEventArgs args)
```

#### Parameters

`args` HistoryEventArgs

