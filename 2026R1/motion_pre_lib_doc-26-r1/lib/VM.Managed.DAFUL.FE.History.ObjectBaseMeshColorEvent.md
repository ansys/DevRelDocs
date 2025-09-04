#  Class ObjectBaseMeshColorEvent

Namespace: [VM.Managed.DAFUL.FE.History](VM.Managed.DAFUL.FE.History.md)  
Assembly: VMFE.dll  

This base class is to represent the color event for mesh.

```csharp
public abstract class ObjectBaseMeshColorEvent : HistoryEvent
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
HistoryEvent ← 
[ObjectBaseMeshColorEvent](VM.Managed.DAFUL.FE.History.ObjectBaseMeshColorEvent.md)

#### Derived

[ObjectBaseFEColorEvent](VM.Managed.DAFUL.FE.History.ObjectBaseFEColorEvent.md), 
[ObjectBaseSetBaseColorEvent](VM.Managed.DAFUL.FE.History.ObjectBaseSetBaseColorEvent.md)

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

### <a id="VM_Managed_DAFUL_FE_History_ObjectBaseMeshColorEvent__ctor_System_Object_System_Drawing_Color_"></a> ObjectBaseMeshColorEvent\(object, Color\)

```csharp
public ObjectBaseMeshColorEvent(object obOriginal, Color color)
```

#### Parameters

`obOriginal` [object](https://learn.microsoft.com/dotnet/api/system.object)

`color` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)

### <a id="VM_Managed_DAFUL_FE_History_ObjectBaseMeshColorEvent__ctor_System_Object_"></a> ObjectBaseMeshColorEvent\(object\)

```csharp
public ObjectBaseMeshColorEvent(object obOriginal)
```

#### Parameters

`obOriginal` [object](https://learn.microsoft.com/dotnet/api/system.object)

## Fields

### <a id="VM_Managed_DAFUL_FE_History_ObjectBaseMeshColorEvent_m_Color"></a> m\_Color

```csharp
protected Color m_Color
```

#### Field Value

 [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)

### <a id="VM_Managed_DAFUL_FE_History_ObjectBaseMeshColorEvent_m_keyObj"></a> m\_keyObj

```csharp
protected UIntPtr m_keyObj
```

#### Field Value

 [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

## Methods

### <a id="VM_Managed_DAFUL_FE_History_ObjectBaseMeshColorEvent_Clear_System_Boolean_"></a> Clear\(bool\)

```csharp
public override void Clear(bool bReserveReferenceCount)
```

#### Parameters

`bReserveReferenceCount` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_FE_History_ObjectBaseMeshColorEvent_GetColor"></a> GetColor\(\)

```csharp
protected abstract Color GetColor()
```

#### Returns

 [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)

### <a id="VM_Managed_DAFUL_FE_History_ObjectBaseMeshColorEvent_Redo_VM_Managed_History_HistoryEventArgs_"></a> Redo\(HistoryEventArgs\)

```csharp
public override void Redo(HistoryEventArgs args)
```

#### Parameters

`args` HistoryEventArgs

### <a id="VM_Managed_DAFUL_FE_History_ObjectBaseMeshColorEvent_ReplaceColor_System_Drawing_Color_"></a> ReplaceColor\(Color\)

```csharp
protected abstract void ReplaceColor(Color color)
```

#### Parameters

`color` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)

### <a id="VM_Managed_DAFUL_FE_History_ObjectBaseMeshColorEvent_Undo_VM_Managed_History_HistoryEventArgs_"></a> Undo\(HistoryEventArgs\)

```csharp
public override void Undo(HistoryEventArgs args)
```

#### Parameters

`args` HistoryEventArgs

