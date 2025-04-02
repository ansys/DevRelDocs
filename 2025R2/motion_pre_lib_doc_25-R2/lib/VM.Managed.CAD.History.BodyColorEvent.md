#  Class BodyColorEvent

Namespace: [VM.Managed.CAD.History](VM.Managed.CAD.History.md)  
Assembly: VMAppCore.dll  

This class is to represent the color event for body.

```csharp
public class BodyColorEvent : BodyEventBase
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
HistoryEvent ← 
[BodyEventBase](VM.Managed.CAD.History.BodyEventBase.md) ← 
[BodyColorEvent](VM.Managed.CAD.History.BodyColorEvent.md)

#### Inherited Members

[BodyEventBase.m\_keyBody](VM.Managed.CAD.History.BodyEventBase.md\#VM\_Managed\_CAD\_History\_BodyEventBase\_m\_keyBody), 
[BodyEventBase.Clear\(bool\)](VM.Managed.CAD.History.BodyEventBase.md\#VM\_Managed\_CAD\_History\_BodyEventBase\_Clear\_System\_Boolean\_), 
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

### <a id="VM_Managed_CAD_History_BodyColorEvent__ctor_System_Object_"></a> BodyColorEvent\(object\)

```csharp
public BodyColorEvent(object obOriginal)
```

#### Parameters

`obOriginal` [object](https://learn.microsoft.com/dotnet/api/system.object)

## Methods

### <a id="VM_Managed_CAD_History_BodyColorEvent_GetColor"></a> GetColor\(\)

```csharp
protected virtual Color GetColor()
```

#### Returns

 [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)

### <a id="VM_Managed_CAD_History_BodyColorEvent_Redo_VM_Managed_History_HistoryEventArgs_"></a> Redo\(HistoryEventArgs\)

```csharp
public override void Redo(HistoryEventArgs args)
```

#### Parameters

`args` HistoryEventArgs

### <a id="VM_Managed_CAD_History_BodyColorEvent_ReplaceColor_System_Drawing_Color_"></a> ReplaceColor\(Color\)

```csharp
protected virtual void ReplaceColor(Color color)
```

#### Parameters

`color` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)

### <a id="VM_Managed_CAD_History_BodyColorEvent_Undo_VM_Managed_History_HistoryEventArgs_"></a> Undo\(HistoryEventArgs\)

```csharp
public override void Undo(HistoryEventArgs args)
```

#### Parameters

`args` HistoryEventArgs

