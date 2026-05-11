# Class DocumentMemberModifiedEvent

Namespace: [VM.Managed.History](VM.Managed.History.md)  
Assembly: VMAppCore.dll  

```csharp
public abstract class DocumentMemberModifiedEvent : HistoryEvent
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
HistoryEvent ← 
[DocumentMemberModifiedEvent](VM.Managed.History.DocumentMemberModifiedEvent.md)

#### Derived

[DocumentLinkChildModifiedEvent](VM.Managed.History.DocumentLinkChildModifiedEvent.md), 
[DocumentSimpleValueModifiedEvent<T\>](VM.Managed.History.DocumentSimpleValueModifiedEvent\-1.md)

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

### DocumentMemberModifiedEvent\(Document, object\)

```csharp
protected DocumentMemberModifiedEvent(Document doc, object obj)
```

#### Parameters

`doc` [Document](VM.Managed.Document.md)

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

### DocumentMemberModifiedEvent\(\)

```csharp
protected DocumentMemberModifiedEvent()
```

## Fields

### m\_doc

```csharp
protected Document m_doc
```

#### Field Value

 [Document](VM.Managed.Document.md)

### m\_obj

```csharp
protected object m_obj
```

#### Field Value

 [object](https://learn.microsoft.com/dotnet/api/system.object)

## Methods

### Clear\(bool\)

```csharp
protected override void Clear(bool bReserveReferenceCount)
```

#### Parameters

`bReserveReferenceCount` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


