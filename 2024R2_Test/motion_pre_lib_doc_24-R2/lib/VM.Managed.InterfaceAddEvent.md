# Class InterfaceAddEvent

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMObjBase.dll  

This class is to represent [interface add event].

```csharp
public class InterfaceAddEvent : InterfaceEvent
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
HistoryEvent ← 
DocumentMemberModifiedEvent ← 
DocumentSimpleValueModifiedEvent<List<InterfaceManager.InterfaceInfoForUndo\>\> ← 
[InterfaceEvent](VM.Managed.InterfaceEvent.md) ← 
[InterfaceAddEvent](VM.Managed.InterfaceAddEvent.md)

#### Inherited Members

[InterfaceEvent.AfterUndo\(HistoryEventArgs\)](VM.Managed.InterfaceEvent.md\#VM\_Managed\_InterfaceEvent\_AfterUndo\_VM\_Managed\_History\_HistoryEventArgs\_), 
[InterfaceEvent.AfterRedo\(HistoryEventArgs\)](VM.Managed.InterfaceEvent.md\#VM\_Managed\_InterfaceEvent\_AfterRedo\_VM\_Managed\_History\_HistoryEventArgs\_), 
[InterfaceEvent.Add\(\)](VM.Managed.InterfaceEvent.md\#VM\_Managed\_InterfaceEvent\_Add), 
[InterfaceEvent.Remove\(\)](VM.Managed.InterfaceEvent.md\#VM\_Managed\_InterfaceEvent\_Remove), 
DocumentSimpleValueModifiedEvent<List<InterfaceManager.InterfaceInfoForUndo\>\>.PreExecute, 
DocumentSimpleValueModifiedEvent<List<InterfaceManager.InterfaceInfoForUndo\>\>.PostExecute, 
DocumentSimpleValueModifiedEvent<List<InterfaceManager.InterfaceInfoForUndo\>\>.m\_value, 
DocumentSimpleValueModifiedEvent<List<InterfaceManager.InterfaceInfoForUndo\>\>.m\_strPropertyName, 
DocumentSimpleValueModifiedEvent<List<InterfaceManager.InterfaceInfoForUndo\>\>.m\_arAddOn, 
DocumentSimpleValueModifiedEvent<List<InterfaceManager.InterfaceInfoForUndo\>\>.m\_objParam, 
DocumentSimpleValueModifiedEvent<List<InterfaceManager.InterfaceInfoForUndo\>\>.Undo\(HistoryEventArgs\), 
DocumentSimpleValueModifiedEvent<List<InterfaceManager.InterfaceInfoForUndo\>\>.Redo\(HistoryEventArgs\), 
DocumentSimpleValueModifiedEvent<List<InterfaceManager.InterfaceInfoForUndo\>\>.BeforeUndo\(HistoryEventArgs\), 
DocumentSimpleValueModifiedEvent<List<InterfaceManager.InterfaceInfoForUndo\>\>.BeforeRedo\(HistoryEventArgs\), 
DocumentSimpleValueModifiedEvent<List<InterfaceManager.InterfaceInfoForUndo\>\>.AfterUndo\(HistoryEventArgs\), 
DocumentSimpleValueModifiedEvent<List<InterfaceManager.InterfaceInfoForUndo\>\>.AfterRedo\(HistoryEventArgs\), 
DocumentSimpleValueModifiedEvent<List<InterfaceManager.InterfaceInfoForUndo\>\>.Clear\(bool\), 
DocumentSimpleValueModifiedEvent<List<InterfaceManager.InterfaceInfoForUndo\>\>.DocumentSimpleValueModified\(Document, object, string\), 
DocumentSimpleValueModifiedEvent<List<InterfaceManager.InterfaceInfoForUndo\>\>.DocumentSimpleValueModified\(Document, object, string, object\), 
DocumentSimpleValueModifiedEvent<List<InterfaceManager.InterfaceInfoForUndo\>\>.DocumentSimpleValueModified\(Document, object, string, object, IUpdateDocAddOn\[\]\), 
DocumentSimpleValueModifiedEvent<List<InterfaceManager.InterfaceInfoForUndo\>\>.DocumentSimpleValueModified\(Document, object, string, object, object, DocumentSimpleValueModifiedEvent<List<InterfaceManager.InterfaceInfoForUndo\>\>.PreExecuteCallback\), 
DocumentSimpleValueModifiedEvent<List<InterfaceManager.InterfaceInfoForUndo\>\>.DocumentSimpleValueModified\(Document, object, string, object, object, DocumentSimpleValueModifiedEvent<List<InterfaceManager.InterfaceInfoForUndo\>\>.PostExecuteCallback\), 
DocumentSimpleValueModifiedEvent<List<InterfaceManager.InterfaceInfoForUndo\>\>.DocumentSimpleValueModified\(Document, object, string, object, IUpdateDocAddOn\[\], object, DocumentSimpleValueModifiedEvent<List<InterfaceManager.InterfaceInfoForUndo\>\>.PreExecuteCallback\), 
DocumentSimpleValueModifiedEvent<List<InterfaceManager.InterfaceInfoForUndo\>\>.DocumentSimpleValueModified\(Document, object, string, object, IUpdateDocAddOn\[\], object, DocumentSimpleValueModifiedEvent<List<InterfaceManager.InterfaceInfoForUndo\>\>.PostExecuteCallback\), 
DocumentMemberModifiedEvent.m\_doc, 
DocumentMemberModifiedEvent.m\_obj, 
DocumentMemberModifiedEvent.Clear\(bool\), 
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

### InterfaceAddEvent\(Document, object, string, object, object, PostExecuteCallback, string\)

Initializes a new instance of the <xref href="VM.Managed.InterfaceAddEvent" data-throw-if-not-resolved="false"></xref> class.

```csharp
public InterfaceAddEvent(Document doc, object obj, string strPropertyName, object objTarget, object objParam, DocumentSimpleValueModifiedEvent<List<InterfaceManager.InterfaceInfoForUndo>>.PostExecuteCallback delPostExecute, string strXML)
```

#### Parameters

`doc` Document

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

`strPropertyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`objTarget` [object](https://learn.microsoft.com/dotnet/api/system.object)

`objParam` [object](https://learn.microsoft.com/dotnet/api/system.object)

`delPostExecute` DocumentSimpleValueModifiedEvent<[List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[InterfaceManager](VM.Managed.InterfaceManager.md).[InterfaceInfoForUndo](VM.Managed.InterfaceManager.InterfaceInfoForUndo.md)\>\>.PostExecuteCallback

`strXML` [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### AfterRedo\(HistoryEventArgs\)

After redo.
<param name="args">The argument</param>

```csharp
protected override void AfterRedo(HistoryEventArgs args)
```

#### Parameters

`args` HistoryEventArgs

### AfterUndo\(HistoryEventArgs\)

After undo.
<param name="args">The argument</param>

```csharp
protected override void AfterUndo(HistoryEventArgs args)
```

#### Parameters

`args` HistoryEventArgs


