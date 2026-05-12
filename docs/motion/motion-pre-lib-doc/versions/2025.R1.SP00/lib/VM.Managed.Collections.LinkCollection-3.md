#  Class LinkCollection<T, TLink, TCollection\>

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

### <a id="VM_Managed_Collections_LinkCollection_3__ctor_VM_Models_Pre_ILinkContainer_"></a> LinkCollection\(ILinkContainer\)

```csharp
public LinkCollection(ILinkContainer objParent)
```

#### Parameters

`objParent` ILinkContainer

### <a id="VM_Managed_Collections_LinkCollection_3__ctor_VM_Models_Pre_ILinkContainer__2_"></a> LinkCollection\(ILinkContainer, TCollection\)

```csharp
public LinkCollection(ILinkContainer objParent, TCollection collection)
```

#### Parameters

`objParent` ILinkContainer

`collection` TCollection

## Fields

### <a id="VM_Managed_Collections_LinkCollection_3_m_collection"></a> m\_collection

```csharp
protected TCollection m_collection
```

#### Field Value

 TCollection

### <a id="VM_Managed_Collections_LinkCollection_3_m_ehCollectionChanged"></a> m\_ehCollectionChanged

```csharp
protected NotifyCollectionChangedEventHandler m_ehCollectionChanged
```

#### Field Value

 [NotifyCollectionChangedEventHandler](https://learn.microsoft.com/dotnet/api/system.collections.specialized.notifycollectionchangedeventhandler)

### <a id="VM_Managed_Collections_LinkCollection_3_m_objLinkOwner"></a> m\_objLinkOwner

```csharp
protected ILinkContainer m_objLinkOwner
```

#### Field Value

 ILinkContainer

### <a id="VM_Managed_Collections_LinkCollection_3_m_syncLock"></a> m\_syncLock

```csharp
protected object m_syncLock
```

#### Field Value

 [object](https://learn.microsoft.com/dotnet/api/system.object)

## Properties

### <a id="VM_Managed_Collections_LinkCollection_3_Count"></a> Count

```csharp
public virtual int Count { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Managed_Collections_LinkCollection_3_IsReadOnly"></a> IsReadOnly

```csharp
public virtual bool IsReadOnly { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="VM_Managed_Collections_LinkCollection_3_Add__0_"></a> Add\(T\)

```csharp
public virtual void Add(T item)
```

#### Parameters

`item` T

### <a id="VM_Managed_Collections_LinkCollection_3_Add__0_System_Boolean_"></a> Add\(T, bool\)

```csharp
public virtual void Add(T item, bool bContainsDocument)
```

#### Parameters

`item` T

`bContainsDocument` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Collections_LinkCollection_3_AddDestroyEvent__1_"></a> AddDestroyEvent\(TLink\)

```csharp
protected void AddDestroyEvent(TLink obj)
```

#### Parameters

`obj` TLink

### <a id="VM_Managed_Collections_LinkCollection_3_Clear"></a> Clear\(\)

```csharp
public virtual void Clear()
```

### <a id="VM_Managed_Collections_LinkCollection_3_Clear_System_Boolean_"></a> Clear\(bool\)

```csharp
public virtual void Clear(bool bContainsDocument)
```

#### Parameters

`bContainsDocument` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Collections_LinkCollection_3_Contains__0_"></a> Contains\(T\)

```csharp
public virtual bool Contains(T item)
```

#### Parameters

`item` T

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Collections_LinkCollection_3_CopyTo__0___System_Int32_"></a> CopyTo\(T\[\], int\)

```csharp
public virtual void CopyTo(T[] ar, int arrayIndex)
```

#### Parameters

`ar` T\[\]

`arrayIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Managed_Collections_LinkCollection_3_GetEnumerator"></a> GetEnumerator\(\)

```csharp
public virtual IEnumerator<T> GetEnumerator()
```

#### Returns

 [IEnumerator](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerator\-1)<T\>

### <a id="VM_Managed_Collections_LinkCollection_3_GetEnumeratorImpl"></a> GetEnumeratorImpl\(\)

```csharp
IEnumerator GetEnumeratorImpl()
```

#### Returns

 [IEnumerator](https://learn.microsoft.com/dotnet/api/system.collections.ienumerator)

### <a id="VM_Managed_Collections_LinkCollection_3_Remove__0_"></a> Remove\(T\)

```csharp
public virtual bool Remove(T item)
```

#### Parameters

`item` T

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Collections_LinkCollection_3_Remove__0_System_Boolean_"></a> Remove\(T, bool\)

```csharp
public virtual bool Remove(T item, bool bContainsDocument)
```

#### Parameters

`item` T

`bContainsDocument` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Collections_LinkCollection_3_SetModified_VM_Managed_Collections_ModifiedType_System_Boolean_"></a> SetModified\(ModifiedType, bool\)

```csharp
public void SetModified(ModifiedType modifiedType, bool bContainsDocument)
```

#### Parameters

`modifiedType` [ModifiedType](VM.Managed.Collections.ModifiedType.md)

`bContainsDocument` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Collections_LinkCollection_3_SimpleValueModifiedForCollection_VM_Managed_Collections_ModifiedType_"></a> SimpleValueModifiedForCollection\(ModifiedType\)

```csharp
protected void SimpleValueModifiedForCollection(ModifiedType modifiedType)
```

#### Parameters

`modifiedType` [ModifiedType](VM.Managed.Collections.ModifiedType.md)

### <a id="VM_Managed_Collections_LinkCollection_3_SimpleValueModifiedForCollection_VM_Managed_Collections_ModifiedType_System_Boolean_"></a> SimpleValueModifiedForCollection\(ModifiedType, bool\)

```csharp
protected void SimpleValueModifiedForCollection(ModifiedType modifiedType, bool bContainsDocument)
```

#### Parameters

`modifiedType` [ModifiedType](VM.Managed.Collections.ModifiedType.md)

`bContainsDocument` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Collections_LinkCollection_3_raise_CollectionChanged_System_Object_System_Collections_Specialized_NotifyCollectionChangedEventArgs_"></a> raise\_CollectionChanged\(object, NotifyCollectionChangedEventArgs\)

```csharp
public void raise_CollectionChanged(object objNotifier, NotifyCollectionChangedEventArgs e)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

`e` [NotifyCollectionChangedEventArgs](https://learn.microsoft.com/dotnet/api/system.collections.specialized.notifycollectionchangedeventargs)

### <a id="VM_Managed_Collections_LinkCollection_3_CollectionChanged"></a> CollectionChanged

```csharp
public event NotifyCollectionChangedEventHandler CollectionChanged
```

#### Event Type

 [NotifyCollectionChangedEventHandler](https://learn.microsoft.com/dotnet/api/system.collections.specialized.notifycollectionchangedeventhandler)

