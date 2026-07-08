#  Class HiddenDocumentEventBase

Namespace: [VM.Managed.DAFUL.GearTrain.History](VM.Managed.DAFUL.GearTrain.History.md)  
Assembly: VMDGearTrain.dll  

The hidden document event base class

```csharp
public abstract class HiddenDocumentEventBase : HistoryEvent
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
HistoryEvent ← 
[HiddenDocumentEventBase](VM.Managed.DAFUL.GearTrain.History.HiddenDocumentEventBase.md)

#### Derived

[CloseHiddenDocumentEvent](VM.Managed.DAFUL.GearTrain.History.CloseHiddenDocumentEvent.md), 
[OpenHiddenDocumentEvent](VM.Managed.DAFUL.GearTrain.History.OpenHiddenDocumentEvent.md)

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

### <a id="VM_Managed_DAFUL_GearTrain_History_HiddenDocumentEventBase__ctor_System_Object_System_String_"></a> HiddenDocumentEventBase\(object, string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.History.HiddenDocumentEventBase" data-throw-if-not-resolved="false"></xref> class.

```csharp
public HiddenDocumentEventBase(object obOriginal, string strFilePath)
```

#### Parameters

`obOriginal` [object](https://learn.microsoft.com/dotnet/api/system.object)

The original object.

`strFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path.

## Methods

### <a id="VM_Managed_DAFUL_GearTrain_History_HiddenDocumentEventBase_Clear_System_Boolean_"></a> Clear\(bool\)

Clear this event.

```csharp
protected override void Clear(bool bReserveReferenceCount)
```

#### Parameters

`bReserveReferenceCount` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The event argument for clear.

### <a id="VM_Managed_DAFUL_GearTrain_History_HiddenDocumentEventBase_Close"></a> Close\(\)

Close hidden document.

```csharp
protected void Close()
```

### <a id="VM_Managed_DAFUL_GearTrain_History_HiddenDocumentEventBase_Open"></a> Open\(\)

Open hidden document.

```csharp
protected void Open()
```

