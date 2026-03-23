# Class OpenHiddenDocumentEvent

Namespace: [VM.Managed.DAFUL.GearTrain.History](VM.Managed.DAFUL.GearTrain.History.md)  
Assembly: VMDGearTrain.dll  

The open hidden document event class

```csharp
public class OpenHiddenDocumentEvent : HiddenDocumentEventBase
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
HistoryEvent ← 
[HiddenDocumentEventBase](VM.Managed.DAFUL.GearTrain.History.HiddenDocumentEventBase.md) ← 
[OpenHiddenDocumentEvent](VM.Managed.DAFUL.GearTrain.History.OpenHiddenDocumentEvent.md)

#### Inherited Members

[HiddenDocumentEventBase.Clear\(bool\)](VM.Managed.DAFUL.GearTrain.History.HiddenDocumentEventBase.md\#VM\_Managed\_DAFUL\_GearTrain\_History\_HiddenDocumentEventBase\_Clear\_System\_Boolean\_), 
[HiddenDocumentEventBase.Open\(\)](VM.Managed.DAFUL.GearTrain.History.HiddenDocumentEventBase.md\#VM\_Managed\_DAFUL\_GearTrain\_History\_HiddenDocumentEventBase\_Open), 
[HiddenDocumentEventBase.Close\(\)](VM.Managed.DAFUL.GearTrain.History.HiddenDocumentEventBase.md\#VM\_Managed\_DAFUL\_GearTrain\_History\_HiddenDocumentEventBase\_Close), 
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

### OpenHiddenDocumentEvent\(object, string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.History.OpenHiddenDocumentEvent" data-throw-if-not-resolved="false"></xref> class.

```csharp
public OpenHiddenDocumentEvent(object obOriginal, string strFilePath)
```

#### Parameters

`obOriginal` [object](https://learn.microsoft.com/dotnet/api/system.object)

The original object.

`strFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path.

## Methods

### BeforeRedo\(HistoryEventArgs\)

Called before redo by HistoryManager.

```csharp
protected override void BeforeRedo(HistoryEventArgs args)
```

#### Parameters

`args` HistoryEventArgs

The event argument for call this method.

### BeforeUndo\(HistoryEventArgs\)

Called before undo by HistoryManager.

```csharp
protected override void BeforeUndo(HistoryEventArgs args)
```

#### Parameters

`args` HistoryEventArgs

The event argument for call this method.

### OpenHiddenDocument\(object, string\)

Open hidden document.

```csharp
public static void OpenHiddenDocument(object obj, string strFilePath)
```

#### Parameters

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

The object.

`strFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path.

### Redo\(HistoryEventArgs\)

Redo this event.

```csharp
protected override void Redo(HistoryEventArgs args)
```

#### Parameters

`args` HistoryEventArgs

The event argument for redo.

### Undo\(HistoryEventArgs\)

Undo this event.

```csharp
protected override void Undo(HistoryEventArgs args)
```

#### Parameters

`args` HistoryEventArgs

The event argument for undo.


