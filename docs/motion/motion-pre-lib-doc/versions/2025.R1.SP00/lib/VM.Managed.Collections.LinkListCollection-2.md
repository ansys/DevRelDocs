#  Class LinkListCollection<T, TLink\>

Namespace: [VM.Managed.Collections](VM.Managed.Collections.md)  
Assembly: VMAppCore.dll  

```csharp
public class LinkListCollection<T, TLink> : LinkCollection<T, TLink, List<TLink>>, ILinkCollection, IPostDeserialized where T : class where TLink : class, ITypedLink<T>
```

#### Type Parameters

`T` 

`TLink` 

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[LinkCollection<T, TLink, List<TLink\>\>](VM.Managed.Collections.LinkCollection\-3.md) ← 
[LinkListCollection<T, TLink\>](VM.Managed.Collections.LinkListCollection\-2.md)

#### Implements

[ILinkCollection](VM.Managed.Collections.ILinkCollection.md), 
IPostDeserialized

#### Inherited Members

[LinkCollection<T, TLink, List<TLink\>\>.m\_collection](VM.Managed.Collections.LinkCollection\-3.md\#VM\_Managed\_Collections\_LinkCollection\_3\_m\_collection), 
[LinkCollection<T, TLink, List<TLink\>\>.m\_objLinkOwner](VM.Managed.Collections.LinkCollection\-3.md\#VM\_Managed\_Collections\_LinkCollection\_3\_m\_objLinkOwner), 
[LinkCollection<T, TLink, List<TLink\>\>.m\_ehCollectionChanged](VM.Managed.Collections.LinkCollection\-3.md\#VM\_Managed\_Collections\_LinkCollection\_3\_m\_ehCollectionChanged), 
[LinkCollection<T, TLink, List<TLink\>\>.m\_syncLock](VM.Managed.Collections.LinkCollection\-3.md\#VM\_Managed\_Collections\_LinkCollection\_3\_m\_syncLock), 
[LinkCollection<T, TLink, List<TLink\>\>.raise\_CollectionChanged\(object, NotifyCollectionChangedEventArgs\)](VM.Managed.Collections.LinkCollection\-3.md\#VM\_Managed\_Collections\_LinkCollection\_3\_raise\_CollectionChanged\_System\_Object\_System\_Collections\_Specialized\_NotifyCollectionChangedEventArgs\_), 
[LinkCollection<T, TLink, List<TLink\>\>.Add\(T\)](VM.Managed.Collections.LinkCollection\-3.md\#VM\_Managed\_Collections\_LinkCollection\_3\_Add\_\_0\_), 
[LinkCollection<T, TLink, List<TLink\>\>.Add\(T, bool\)](VM.Managed.Collections.LinkCollection\-3.md\#VM\_Managed\_Collections\_LinkCollection\_3\_Add\_\_0\_System\_Boolean\_), 
[LinkCollection<T, TLink, List<TLink\>\>.Clear\(\)](VM.Managed.Collections.LinkCollection\-3.md\#VM\_Managed\_Collections\_LinkCollection\_3\_Clear), 
[LinkCollection<T, TLink, List<TLink\>\>.Clear\(bool\)](VM.Managed.Collections.LinkCollection\-3.md\#VM\_Managed\_Collections\_LinkCollection\_3\_Clear\_System\_Boolean\_), 
[LinkCollection<T, TLink, List<TLink\>\>.Contains\(T\)](VM.Managed.Collections.LinkCollection\-3.md\#VM\_Managed\_Collections\_LinkCollection\_3\_Contains\_\_0\_), 
[LinkCollection<T, TLink, List<TLink\>\>.CopyTo\(T\[\], int\)](VM.Managed.Collections.LinkCollection\-3.md\#VM\_Managed\_Collections\_LinkCollection\_3\_CopyTo\_\_0\_\_\_System\_Int32\_), 
[LinkCollection<T, TLink, List<TLink\>\>.GetEnumeratorImpl\(\)](VM.Managed.Collections.LinkCollection\-3.md\#VM\_Managed\_Collections\_LinkCollection\_3\_GetEnumeratorImpl), 
[LinkCollection<T, TLink, List<TLink\>\>.GetEnumerator\(\)](VM.Managed.Collections.LinkCollection\-3.md\#VM\_Managed\_Collections\_LinkCollection\_3\_GetEnumerator), 
[LinkCollection<T, TLink, List<TLink\>\>.Remove\(T\)](VM.Managed.Collections.LinkCollection\-3.md\#VM\_Managed\_Collections\_LinkCollection\_3\_Remove\_\_0\_), 
[LinkCollection<T, TLink, List<TLink\>\>.Remove\(T, bool\)](VM.Managed.Collections.LinkCollection\-3.md\#VM\_Managed\_Collections\_LinkCollection\_3\_Remove\_\_0\_System\_Boolean\_), 
[LinkCollection<T, TLink, List<TLink\>\>.SetModified\(ModifiedType, bool\)](VM.Managed.Collections.LinkCollection\-3.md\#VM\_Managed\_Collections\_LinkCollection\_3\_SetModified\_VM\_Managed\_Collections\_ModifiedType\_System\_Boolean\_), 
[LinkCollection<T, TLink, List<TLink\>\>.SimpleValueModifiedForCollection\(ModifiedType\)](VM.Managed.Collections.LinkCollection\-3.md\#VM\_Managed\_Collections\_LinkCollection\_3\_SimpleValueModifiedForCollection\_VM\_Managed\_Collections\_ModifiedType\_), 
[LinkCollection<T, TLink, List<TLink\>\>.SimpleValueModifiedForCollection\(ModifiedType, bool\)](VM.Managed.Collections.LinkCollection\-3.md\#VM\_Managed\_Collections\_LinkCollection\_3\_SimpleValueModifiedForCollection\_VM\_Managed\_Collections\_ModifiedType\_System\_Boolean\_), 
[LinkCollection<T, TLink, List<TLink\>\>.AddDestroyEvent\(TLink\)](VM.Managed.Collections.LinkCollection\-3.md\#VM\_Managed\_Collections\_LinkCollection\_3\_AddDestroyEvent\_\_1\_), 
[LinkCollection<T, TLink, List<TLink\>\>.IsReadOnly](VM.Managed.Collections.LinkCollection\-3.md\#VM\_Managed\_Collections\_LinkCollection\_3\_IsReadOnly), 
[LinkCollection<T, TLink, List<TLink\>\>.Count](VM.Managed.Collections.LinkCollection\-3.md\#VM\_Managed\_Collections\_LinkCollection\_3\_Count), 
[LinkCollection<T, TLink, List<TLink\>\>.CollectionChanged](VM.Managed.Collections.LinkCollection\-3.md\#VM\_Managed\_Collections\_LinkCollection\_3\_CollectionChanged)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_Collections_LinkListCollection_2__ctor_VM_Models_Pre_ILinkContainer_"></a> LinkListCollection\(ILinkContainer\)

```csharp
public LinkListCollection(ILinkContainer objParent)
```

#### Parameters

`objParent` ILinkContainer

### <a id="VM_Managed_Collections_LinkListCollection_2__ctor_VM_Models_Pre_ILinkContainer_System_Collections_Generic_List__1__"></a> LinkListCollection\(ILinkContainer, List<TLink\>\)

```csharp
public LinkListCollection(ILinkContainer objParent, List<TLink> collection)
```

#### Parameters

`objParent` ILinkContainer

`collection` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<TLink\>

## Properties

### <a id="VM_Managed_Collections_LinkListCollection_2_Item_System_Int32_"></a> this\[int\]

```csharp
public virtual T this[int nIdx] { get; set; }
```

#### Property Value

 T

## Methods

### <a id="VM_Managed_Collections_LinkListCollection_2_ClearForLargeAmount"></a> ClearForLargeAmount\(\)

```csharp
public virtual void ClearForLargeAmount()
```

### <a id="VM_Managed_Collections_LinkListCollection_2_IndexOf__0_"></a> IndexOf\(T\)

```csharp
public virtual int IndexOf(T item)
```

#### Parameters

`item` T

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Managed_Collections_LinkListCollection_2_Insert_System_Int32__0_"></a> Insert\(int, T\)

```csharp
public virtual void Insert(int index, T item)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`item` T

### <a id="VM_Managed_Collections_LinkListCollection_2_Remove__0_"></a> Remove\(T\)

```csharp
public override bool Remove(T item)
```

#### Parameters

`item` T

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Collections_LinkListCollection_2_Remove__0_System_Boolean_"></a> Remove\(T, bool\)

```csharp
public override bool Remove(T item, bool bContainsDocument)
```

#### Parameters

`item` T

`bContainsDocument` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Collections_LinkListCollection_2_RemoveAt_System_Int32_"></a> RemoveAt\(int\)

```csharp
public virtual void RemoveAt(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Managed_Collections_LinkListCollection_2_RemoveAt_System_Int32_System_Boolean_"></a> RemoveAt\(int, bool\)

```csharp
public virtual void RemoveAt(int index, bool bContainsDocument)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`bContainsDocument` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Collections_LinkListCollection_2_Replace__0__0_"></a> Replace\(T, T\)

```csharp
public virtual void Replace(T oldItem, T newItem)
```

#### Parameters

`oldItem` T

`newItem` T

### <a id="VM_Managed_Collections_LinkListCollection_2_Set__0___"></a> Set\(T\[\]\)

```csharp
public virtual void Set(T[] items)
```

#### Parameters

`items` T\[\]

