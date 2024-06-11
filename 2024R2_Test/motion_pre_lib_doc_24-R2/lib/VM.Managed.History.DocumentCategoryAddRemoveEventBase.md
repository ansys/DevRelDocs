# Class DocumentCategoryAddRemoveEventBase

Namespace: [VM.Managed.History](VM.Managed.History.md)  
Assembly: VMAppCore.dll  

```csharp
public abstract class DocumentCategoryAddRemoveEventBase : HistoryEvent
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
HistoryEvent ← 
[DocumentCategoryAddRemoveEventBase](VM.Managed.History.DocumentCategoryAddRemoveEventBase.md)

#### Derived

[DocumentCategoryAddEvent](VM.Managed.History.DocumentCategoryAddEvent.md), 
[DocumentCategoryRemoveEvent](VM.Managed.History.DocumentCategoryRemoveEvent.md)

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

### DocumentCategoryAddRemoveEventBase\(Document, ObjectBase, ObjectBase, LinkLinkedList<ObjectBase, Child<ObjectBase, Update\>\>\)

```csharp
protected DocumentCategoryAddRemoveEventBase(Document document, ObjectBase obj, ObjectBase objAfter, LinkLinkedList<ObjectBase, Child<ObjectBase, LinkContainer.Update>> category)
```

#### Parameters

`document` [Document](VM.Managed.Document.md)

`obj` [ObjectBase](VM.Managed.ObjectBase.md)

`objAfter` [ObjectBase](VM.Managed.ObjectBase.md)

`category` [LinkLinkedList](VM.Managed.Collections.LinkLinkedList\-2.md)<[ObjectBase](VM.Managed.ObjectBase.md), [Child](VM.Managed.Child\-2.md)<[ObjectBase](VM.Managed.ObjectBase.md), [LinkContainer](VM.Managed.LinkContainer.md).[Update](VM.Managed.LinkContainer.Update.md)\>\>

## Fields

### m\_category

```csharp
protected LinkLinkedList<ObjectBase, Child<ObjectBase, LinkContainer.Update>> m_category
```

#### Field Value

 [LinkLinkedList](VM.Managed.Collections.LinkLinkedList\-2.md)<[ObjectBase](VM.Managed.ObjectBase.md), [Child](VM.Managed.Child\-2.md)<[ObjectBase](VM.Managed.ObjectBase.md), [LinkContainer](VM.Managed.LinkContainer.md).[Update](VM.Managed.LinkContainer.Update.md)\>\>

### m\_doc

```csharp
protected Document3D m_doc
```

#### Field Value

 [Document3D](VM.Managed.Document3D.md)

### m\_objAfterKey

```csharp
protected UIntPtr m_objAfterKey
```

#### Field Value

 [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

### m\_objKey

```csharp
protected UIntPtr m_objKey
```

#### Field Value

 [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

## Methods

### AddEventCore\(IDocument, HistoryEvent\)

```csharp
public static void AddEventCore(IDocument doc, HistoryEvent eventHist)
```

#### Parameters

`doc` IDocument

`eventHist` HistoryEvent

### Clear\(bool\)

```csharp
protected override void Clear(bool bReserveReferenceCount)
```

#### Parameters

`bReserveReferenceCount` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetObjectFromKey\(UIntPtr\)

```csharp
protected ObjectBase GetObjectFromKey(UIntPtr key)
```

#### Parameters

`key` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

#### Returns

 [ObjectBase](VM.Managed.ObjectBase.md)

### IsAvailableEvent\(IDocument\)

```csharp
public static bool IsAvailableEvent(IDocument doc)
```

#### Parameters

`doc` IDocument

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


