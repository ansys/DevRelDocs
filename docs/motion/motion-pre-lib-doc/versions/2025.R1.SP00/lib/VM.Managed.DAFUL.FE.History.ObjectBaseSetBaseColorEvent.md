#  Class ObjectBaseSetBaseColorEvent

Namespace: [VM.Managed.DAFUL.FE.History](VM.Managed.DAFUL.FE.History.md)  
Assembly: VMFE.dll  

This class is to represent the color event for sets.

```csharp
public class ObjectBaseSetBaseColorEvent : ObjectBaseMeshColorEvent
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
HistoryEvent ← 
[ObjectBaseMeshColorEvent](VM.Managed.DAFUL.FE.History.ObjectBaseMeshColorEvent.md) ← 
[ObjectBaseSetBaseColorEvent](VM.Managed.DAFUL.FE.History.ObjectBaseSetBaseColorEvent.md)

#### Inherited Members

[ObjectBaseMeshColorEvent.m\_Color](VM.Managed.DAFUL.FE.History.ObjectBaseMeshColorEvent.md\#VM\_Managed\_DAFUL\_FE\_History\_ObjectBaseMeshColorEvent\_m\_Color), 
[ObjectBaseMeshColorEvent.m\_keyObj](VM.Managed.DAFUL.FE.History.ObjectBaseMeshColorEvent.md\#VM\_Managed\_DAFUL\_FE\_History\_ObjectBaseMeshColorEvent\_m\_keyObj), 
[ObjectBaseMeshColorEvent.Undo\(HistoryEventArgs\)](VM.Managed.DAFUL.FE.History.ObjectBaseMeshColorEvent.md\#VM\_Managed\_DAFUL\_FE\_History\_ObjectBaseMeshColorEvent\_Undo\_VM\_Managed\_History\_HistoryEventArgs\_), 
[ObjectBaseMeshColorEvent.Redo\(HistoryEventArgs\)](VM.Managed.DAFUL.FE.History.ObjectBaseMeshColorEvent.md\#VM\_Managed\_DAFUL\_FE\_History\_ObjectBaseMeshColorEvent\_Redo\_VM\_Managed\_History\_HistoryEventArgs\_), 
[ObjectBaseMeshColorEvent.Clear\(bool\)](VM.Managed.DAFUL.FE.History.ObjectBaseMeshColorEvent.md\#VM\_Managed\_DAFUL\_FE\_History\_ObjectBaseMeshColorEvent\_Clear\_System\_Boolean\_), 
[ObjectBaseMeshColorEvent.GetColor\(\)](VM.Managed.DAFUL.FE.History.ObjectBaseMeshColorEvent.md\#VM\_Managed\_DAFUL\_FE\_History\_ObjectBaseMeshColorEvent\_GetColor), 
[ObjectBaseMeshColorEvent.ReplaceColor\(Color\)](VM.Managed.DAFUL.FE.History.ObjectBaseMeshColorEvent.md\#VM\_Managed\_DAFUL\_FE\_History\_ObjectBaseMeshColorEvent\_ReplaceColor\_System\_Drawing\_Color\_), 
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

### <a id="VM_Managed_DAFUL_FE_History_ObjectBaseSetBaseColorEvent__ctor_System_Object_System_Drawing_Color_"></a> ObjectBaseSetBaseColorEvent\(object, Color\)

```csharp
public ObjectBaseSetBaseColorEvent(object obOriginal, Color color)
```

#### Parameters

`obOriginal` [object](https://learn.microsoft.com/dotnet/api/system.object)

`color` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)

### <a id="VM_Managed_DAFUL_FE_History_ObjectBaseSetBaseColorEvent__ctor_System_Object_"></a> ObjectBaseSetBaseColorEvent\(object\)

```csharp
public ObjectBaseSetBaseColorEvent(object obOriginal)
```

#### Parameters

`obOriginal` [object](https://learn.microsoft.com/dotnet/api/system.object)

## Methods

### <a id="VM_Managed_DAFUL_FE_History_ObjectBaseSetBaseColorEvent_GetColor"></a> GetColor\(\)

```csharp
protected override Color GetColor()
```

#### Returns

 [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)

### <a id="VM_Managed_DAFUL_FE_History_ObjectBaseSetBaseColorEvent_ReplaceColor_System_Drawing_Color_"></a> ReplaceColor\(Color\)

```csharp
protected override void ReplaceColor(Color color)
```

#### Parameters

`color` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)

