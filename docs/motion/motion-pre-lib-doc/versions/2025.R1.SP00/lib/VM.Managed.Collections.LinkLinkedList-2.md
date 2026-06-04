#  Class LinkLinkedList<T, TLink\>

Namespace: [VM.Managed.Collections](VM.Managed.Collections.md)  
Assembly: VMAppCore.dll  

```csharp
public sealed class LinkLinkedList<T, TLink> : LinkCollection<T, TLink, LinkedList<TLink>>, ILinkCollection, IPostDeserialized where T : class where TLink : class, ITypedLink<T>
```

#### Type Parameters

`T` 

`TLink` 

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[LinkCollection<T, TLink, LinkedList<TLink\>\>](VM.Managed.Collections.LinkCollection\-3.md) ← 
[LinkLinkedList<T, TLink\>](VM.Managed.Collections.LinkLinkedList\-2.md)

#### Implements

[ILinkCollection](VM.Managed.Collections.ILinkCollection.md), 
IPostDeserialized

#### Inherited Members

[LinkCollection<T, TLink, LinkedList<TLink\>\>.raise\_CollectionChanged\(object, NotifyCollectionChangedEventArgs\)](VM.Managed.Collections.LinkCollection\-3.md\#VM\_Managed\_Collections\_LinkCollection\_3\_raise\_CollectionChanged\_System\_Object\_System\_Collections\_Specialized\_NotifyCollectionChangedEventArgs\_), 
[LinkCollection<T, TLink, LinkedList<TLink\>\>.Add\(T\)](VM.Managed.Collections.LinkCollection\-3.md\#VM\_Managed\_Collections\_LinkCollection\_3\_Add\_\_0\_), 
[LinkCollection<T, TLink, LinkedList<TLink\>\>.Add\(T, bool\)](VM.Managed.Collections.LinkCollection\-3.md\#VM\_Managed\_Collections\_LinkCollection\_3\_Add\_\_0\_System\_Boolean\_), 
[LinkCollection<T, TLink, LinkedList<TLink\>\>.Clear\(\)](VM.Managed.Collections.LinkCollection\-3.md\#VM\_Managed\_Collections\_LinkCollection\_3\_Clear), 
[LinkCollection<T, TLink, LinkedList<TLink\>\>.Clear\(bool\)](VM.Managed.Collections.LinkCollection\-3.md\#VM\_Managed\_Collections\_LinkCollection\_3\_Clear\_System\_Boolean\_), 
[LinkCollection<T, TLink, LinkedList<TLink\>\>.Contains\(T\)](VM.Managed.Collections.LinkCollection\-3.md\#VM\_Managed\_Collections\_LinkCollection\_3\_Contains\_\_0\_), 
[LinkCollection<T, TLink, LinkedList<TLink\>\>.CopyTo\(T\[\], int\)](VM.Managed.Collections.LinkCollection\-3.md\#VM\_Managed\_Collections\_LinkCollection\_3\_CopyTo\_\_0\_\_\_System\_Int32\_), 
[LinkCollection<T, TLink, LinkedList<TLink\>\>.GetEnumeratorImpl\(\)](VM.Managed.Collections.LinkCollection\-3.md\#VM\_Managed\_Collections\_LinkCollection\_3\_GetEnumeratorImpl), 
[LinkCollection<T, TLink, LinkedList<TLink\>\>.GetEnumerator\(\)](VM.Managed.Collections.LinkCollection\-3.md\#VM\_Managed\_Collections\_LinkCollection\_3\_GetEnumerator), 
[LinkCollection<T, TLink, LinkedList<TLink\>\>.Remove\(T\)](VM.Managed.Collections.LinkCollection\-3.md\#VM\_Managed\_Collections\_LinkCollection\_3\_Remove\_\_0\_), 
[LinkCollection<T, TLink, LinkedList<TLink\>\>.Remove\(T, bool\)](VM.Managed.Collections.LinkCollection\-3.md\#VM\_Managed\_Collections\_LinkCollection\_3\_Remove\_\_0\_System\_Boolean\_), 
[LinkCollection<T, TLink, LinkedList<TLink\>\>.SetModified\(ModifiedType, bool\)](VM.Managed.Collections.LinkCollection\-3.md\#VM\_Managed\_Collections\_LinkCollection\_3\_SetModified\_VM\_Managed\_Collections\_ModifiedType\_System\_Boolean\_), 
[LinkCollection<T, TLink, LinkedList<TLink\>\>.IsReadOnly](VM.Managed.Collections.LinkCollection\-3.md\#VM\_Managed\_Collections\_LinkCollection\_3\_IsReadOnly), 
[LinkCollection<T, TLink, LinkedList<TLink\>\>.Count](VM.Managed.Collections.LinkCollection\-3.md\#VM\_Managed\_Collections\_LinkCollection\_3\_Count), 
[LinkCollection<T, TLink, LinkedList<TLink\>\>.CollectionChanged](VM.Managed.Collections.LinkCollection\-3.md\#VM\_Managed\_Collections\_LinkCollection\_3\_CollectionChanged)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_Collections_LinkLinkedList_2__ctor_VM_Models_Pre_ILinkContainer_"></a> LinkLinkedList\(ILinkContainer\)

```csharp
public LinkLinkedList(ILinkContainer objParent)
```

#### Parameters

`objParent` ILinkContainer

### <a id="VM_Managed_Collections_LinkLinkedList_2__ctor_VM_Models_Pre_ILinkContainer_System_Collections_Generic_LinkedList__1__"></a> LinkLinkedList\(ILinkContainer, LinkedList<TLink\>\)

```csharp
public LinkLinkedList(ILinkContainer objParent, LinkedList<TLink> collection)
```

#### Parameters

`objParent` ILinkContainer

`collection` [LinkedList](https://learn.microsoft.com/dotnet/api/system.collections.generic.linkedlist\-1)<TLink\>

## Properties

### <a id="VM_Managed_Collections_LinkLinkedList_2_First"></a> First

```csharp
public LinkedListNode<TLink> First { get; }
```

#### Property Value

 [LinkedListNode](https://learn.microsoft.com/dotnet/api/system.collections.generic.linkedlistnode\-1)<TLink\>

### <a id="VM_Managed_Collections_LinkLinkedList_2_Last"></a> Last

```csharp
public LinkedListNode<TLink> Last { get; }
```

#### Property Value

 [LinkedListNode](https://learn.microsoft.com/dotnet/api/system.collections.generic.linkedlistnode\-1)<TLink\>

### <a id="VM_Managed_Collections_LinkLinkedList_2_UseSearchCache"></a> UseSearchCache

```csharp
public bool UseSearchCache { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="VM_Managed_Collections_LinkLinkedList_2_Add__0_"></a> Add\(T\)

```csharp
public override sealed void Add(T item)
```

#### Parameters

`item` T

### <a id="VM_Managed_Collections_LinkLinkedList_2_Add__0_System_Boolean_"></a> Add\(T, bool\)

```csharp
public override sealed void Add(T item, bool bContainsDocument)
```

#### Parameters

`item` T

`bContainsDocument` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Collections_LinkLinkedList_2_AddAfter__0__0_"></a> AddAfter\(T, T\)

```csharp
public LinkedListNode<TLink> AddAfter(T item, T newItem)
```

#### Parameters

`item` T

`newItem` T

#### Returns

 [LinkedListNode](https://learn.microsoft.com/dotnet/api/system.collections.generic.linkedlistnode\-1)<TLink\>

### <a id="VM_Managed_Collections_LinkLinkedList_2_AddBefore__0__0_"></a> AddBefore\(T, T\)

```csharp
public LinkedListNode<TLink> AddBefore(T item, T newItem)
```

#### Parameters

`item` T

`newItem` T

#### Returns

 [LinkedListNode](https://learn.microsoft.com/dotnet/api/system.collections.generic.linkedlistnode\-1)<TLink\>

### <a id="VM_Managed_Collections_LinkLinkedList_2_AddFirst__0_"></a> AddFirst\(T\)

```csharp
public LinkedListNode<TLink> AddFirst(T item)
```

#### Parameters

`item` T

#### Returns

 [LinkedListNode](https://learn.microsoft.com/dotnet/api/system.collections.generic.linkedlistnode\-1)<TLink\>

### <a id="VM_Managed_Collections_LinkLinkedList_2_AddLast__0_"></a> AddLast\(T\)

```csharp
public LinkedListNode<TLink> AddLast(T item)
```

#### Parameters

`item` T

#### Returns

 [LinkedListNode](https://learn.microsoft.com/dotnet/api/system.collections.generic.linkedlistnode\-1)<TLink\>

### <a id="VM_Managed_Collections_LinkLinkedList_2_Clear"></a> Clear\(\)

```csharp
public override sealed void Clear()
```

### <a id="VM_Managed_Collections_LinkLinkedList_2_Clear_System_Boolean_"></a> Clear\(bool\)

```csharp
public override sealed void Clear(bool bContainsDocument)
```

#### Parameters

`bContainsDocument` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Collections_LinkLinkedList_2_Contains__0_"></a> Contains\(T\)

```csharp
public override sealed bool Contains(T item)
```

#### Parameters

`item` T

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Collections_LinkLinkedList_2_Remove__0_"></a> Remove\(T\)

```csharp
public override sealed bool Remove(T item)
```

#### Parameters

`item` T

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Collections_LinkLinkedList_2_Remove__0_System_Boolean_"></a> Remove\(T, bool\)

```csharp
public override sealed bool Remove(T item, bool bContainsDocument)
```

#### Parameters

`item` T

`bContainsDocument` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

