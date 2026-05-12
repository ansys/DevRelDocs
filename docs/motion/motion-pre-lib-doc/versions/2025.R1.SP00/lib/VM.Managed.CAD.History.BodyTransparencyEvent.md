#  Class BodyTransparencyEvent

Namespace: [VM.Managed.CAD.History](VM.Managed.CAD.History.md)  
Assembly: VMAppCore.dll  

This class is to represent the transparency event for body.

```csharp
public class BodyTransparencyEvent : BodyEventBase
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
HistoryEvent ← 
[BodyEventBase](VM.Managed.CAD.History.BodyEventBase.md) ← 
[BodyTransparencyEvent](VM.Managed.CAD.History.BodyTransparencyEvent.md)

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

### <a id="VM_Managed_CAD_History_BodyTransparencyEvent__ctor_System_Object_System_Double_"></a> BodyTransparencyEvent\(object, double\)

```csharp
public BodyTransparencyEvent(object obOriginal, double dTransparency)
```

#### Parameters

`obOriginal` [object](https://learn.microsoft.com/dotnet/api/system.object)

`dTransparency` [double](https://learn.microsoft.com/dotnet/api/system.double)

## Methods

### <a id="VM_Managed_CAD_History_BodyTransparencyEvent_GetTransparency"></a> GetTransparency\(\)

```csharp
protected virtual double GetTransparency()
```

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_CAD_History_BodyTransparencyEvent_Redo_VM_Managed_History_HistoryEventArgs_"></a> Redo\(HistoryEventArgs\)

```csharp
public override void Redo(HistoryEventArgs args)
```

#### Parameters

`args` HistoryEventArgs

### <a id="VM_Managed_CAD_History_BodyTransparencyEvent_ReplaceTransparency_System_Double_"></a> ReplaceTransparency\(double\)

```csharp
protected virtual void ReplaceTransparency(double dTransparency)
```

#### Parameters

`dTransparency` [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_CAD_History_BodyTransparencyEvent_Undo_VM_Managed_History_HistoryEventArgs_"></a> Undo\(HistoryEventArgs\)

```csharp
public override void Undo(HistoryEventArgs args)
```

#### Parameters

`args` HistoryEventArgs

