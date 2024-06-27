# Class LinkCollection<T, TLink, TCollection\>

Namespace: [VM.Managed.Collections](VM.Managed.Collections.md)  
Assembly: VMAppCore.dll  

```csharp
public class LinkCollection<T, TLink, TCollection> : ILinkCollection, IPostDeserialized where T : class where TLink : class, ITypedLink<T> where TCollection : ICollection<TLink>, new()
```

#### Type Parameters

`T` 

`TLink` 

`TCollection` 

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[LinkCollection<T, TLink, TCollection\>](VM.Managed.Collections.LinkCollection\-3.md)

#### Implements

[ILinkCollection](VM.Managed.Collections.ILinkCollection.md), 
IPostDeserialized

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### LinkCollection\(ILinkContainer\)

```csharp
public LinkCollection(ILinkContainer objParent)
```

#### Parameters

`objParent` ILinkContainer

### LinkCollection\(ILinkContainer, TCollection\)

```csharp
public LinkCollection(ILinkContainer objParent, TCollection collection)
```

#### Parameters

`objParent` ILinkContainer

`collection` TCollection

## Fields

### m\_collection

```csharp
protected TCollection m_collection
```

#### Field Value

 TCollection

### m\_ehCollectionChanged

```csharp
protected NotifyCollectionChangedEventHandler m_ehCollectionChanged
```

#### Field Value

 [NotifyCollectionChangedEventHandler](https://learn.microsoft.com/dotnet/api/system.collections.specialized.notifycollectionchangedeventhandler)

### m\_objLinkOwner

```csharp
protected ILinkContainer m_objLinkOwner
```

#### Field Value

 ILinkContainer

### m\_syncLock

```csharp
protected object m_syncLock
```

#### Field Value

 [object](https://learn.microsoft.com/dotnet/api/system.object)

## Properties

### Count

```csharp
public virtual int Count { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### IsReadOnly

```csharp
public virtual bool IsReadOnly { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### Add\(T\)

```csharp
public virtual void Add(T item)
```

#### Parameters

`item` T

### Add\(T, bool\)

```csharp
public virtual void Add(T item, bool bContainsDocument)
```

#### Parameters

`item` T

`bContainsDocument` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### AddDestroyEvent\(TLink\)

```csharp
protected void AddDestroyEvent(TLink obj)
```

#### Parameters

`obj` TLink

### Clear\(\)

```csharp
public virtual void Clear()
```

### Clear\(bool\)

```csharp
public virtual void Clear(bool bContainsDocument)
```

#### Parameters

`bContainsDocument` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Contains\(T\)

```csharp
public virtual bool Contains(T item)
```

#### Parameters

`item` T

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### CopyTo\(T\[\], int\)

```csharp
public virtual void CopyTo(T[] ar, int arrayIndex)
```

#### Parameters

`ar` T\[\]

`arrayIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### GetEnumerator\(\)

```csharp
public virtual IEnumerator<T> GetEnumerator()
```

#### Returns

 [IEnumerator](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerator\-1)<T\>

### GetEnumeratorImpl\(\)

```csharp
IEnumerator GetEnumeratorImpl()
```

#### Returns

 [IEnumerator](https://learn.microsoft.com/dotnet/api/system.collections.ienumerator)

### Remove\(T\)

```csharp
public virtual bool Remove(T item)
```

#### Parameters

`item` T

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Remove\(T, bool\)

```csharp
public virtual bool Remove(T item, bool bContainsDocument)
```

#### Parameters

`item` T

`bContainsDocument` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetModified\(ModifiedType, bool\)

```csharp
public void SetModified(ModifiedType modifiedType, bool bContainsDocument)
```

#### Parameters

`modifiedType` [ModifiedType](VM.Managed.Collections.ModifiedType.md)

`bContainsDocument` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SimpleValueModifiedForCollection\(ModifiedType\)

```csharp
protected void SimpleValueModifiedForCollection(ModifiedType modifiedType)
```

#### Parameters

`modifiedType` [ModifiedType](VM.Managed.Collections.ModifiedType.md)

### SimpleValueModifiedForCollection\(ModifiedType, bool\)

```csharp
protected void SimpleValueModifiedForCollection(ModifiedType modifiedType, bool bContainsDocument)
```

#### Parameters

`modifiedType` [ModifiedType](VM.Managed.Collections.ModifiedType.md)

`bContainsDocument` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### raise\_CollectionChanged\(object, NotifyCollectionChangedEventArgs\)

```csharp
public void raise_CollectionChanged(object objNotifier, NotifyCollectionChangedEventArgs e)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

`e` [NotifyCollectionChangedEventArgs](https://learn.microsoft.com/dotnet/api/system.collections.specialized.notifycollectionchangedeventargs)

### CollectionChanged

```csharp
public event NotifyCollectionChangedEventHandler CollectionChanged
```

#### Event Type

 [NotifyCollectionChangedEventHandler](https://learn.microsoft.com/dotnet/api/system.collections.specialized.notifycollectionchangedeventhandler)


