#  Class LinkListCollectionWithFixedAddition<T, TLink\>

Namespace: [VM.Managed.Collections](VM.Managed.Collections.md)  
Assembly: VMAppCore.dll  

```csharp
public class LinkListCollectionWithFixedAddition<T, TLink> : LinkListCollection<T, TLink>, ILinkCollection, IPostDeserialized where T : class where TLink : class, ITypedLink<T>
```

#### Type Parameters

`T` 

`TLink` 

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[LinkCollection<T, TLink, List<TLink\>\>](VM.Managed.Collections.LinkCollection\-3.md) ← 
[LinkListCollection<T, TLink\>](VM.Managed.Collections.LinkListCollection\-2.md) ← 
[LinkListCollectionWithFixedAddition<T, TLink\>](VM.Managed.Collections.LinkListCollectionWithFixedAddition\-2.md)

#### Implements

[ILinkCollection](VM.Managed.Collections.ILinkCollection.md), 
IPostDeserialized

#### Inherited Members

[LinkListCollection<T, TLink\>.IndexOf\(T\)](VM.Managed.Collections.LinkListCollection\-2.md\#VM\_Managed\_Collections\_LinkListCollection\_2\_IndexOf\_\_0\_), 
[LinkListCollection<T, TLink\>.Insert\(int, T\)](VM.Managed.Collections.LinkListCollection\-2.md\#VM\_Managed\_Collections\_LinkListCollection\_2\_Insert\_System\_Int32\_\_0\_), 
[LinkListCollection<T, TLink\>.Remove\(T\)](VM.Managed.Collections.LinkListCollection\-2.md\#VM\_Managed\_Collections\_LinkListCollection\_2\_Remove\_\_0\_), 
[LinkListCollection<T, TLink\>.Remove\(T, bool\)](VM.Managed.Collections.LinkListCollection\-2.md\#VM\_Managed\_Collections\_LinkListCollection\_2\_Remove\_\_0\_System\_Boolean\_), 
[LinkListCollection<T, TLink\>.RemoveAt\(int\)](VM.Managed.Collections.LinkListCollection\-2.md\#VM\_Managed\_Collections\_LinkListCollection\_2\_RemoveAt\_System\_Int32\_), 
[LinkListCollection<T, TLink\>.RemoveAt\(int, bool\)](VM.Managed.Collections.LinkListCollection\-2.md\#VM\_Managed\_Collections\_LinkListCollection\_2\_RemoveAt\_System\_Int32\_System\_Boolean\_), 
[LinkListCollection<T, TLink\>.Replace\(T, T\)](VM.Managed.Collections.LinkListCollection\-2.md\#VM\_Managed\_Collections\_LinkListCollection\_2\_Replace\_\_0\_\_0\_), 
[LinkListCollection<T, TLink\>.Set\(T\[\]\)](VM.Managed.Collections.LinkListCollection\-2.md\#VM\_Managed\_Collections\_LinkListCollection\_2\_Set\_\_0\_\_\_), 
[LinkListCollection<T, TLink\>.ClearForLargeAmount\(\)](VM.Managed.Collections.LinkListCollection\-2.md\#VM\_Managed\_Collections\_LinkListCollection\_2\_ClearForLargeAmount), 
[LinkListCollection<T, TLink\>.this\[int\]](VM.Managed.Collections.LinkListCollection\-2.md\#VM\_Managed\_Collections\_LinkListCollection\_2\_Item\_System\_Int32\_), 
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

### <a id="VM_Managed_Collections_LinkListCollectionWithFixedAddition_2__ctor_VM_Models_Pre_ILinkContainer_System_Int32_"></a> LinkListCollectionWithFixedAddition\(ILinkContainer, int\)

```csharp
public LinkListCollectionWithFixedAddition(ILinkContainer objParent, int nMin)
```

#### Parameters

`objParent` ILinkContainer

`nMin` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Managed_Collections_LinkListCollectionWithFixedAddition_2__ctor_VM_Models_Pre_ILinkContainer_System_Int32_System_Int32_"></a> LinkListCollectionWithFixedAddition\(ILinkContainer, int, int\)

```csharp
public LinkListCollectionWithFixedAddition(ILinkContainer objParent, int nMin, int nMax)
```

#### Parameters

`objParent` ILinkContainer

`nMin` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`nMax` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Managed_Collections_LinkListCollectionWithFixedAddition_2__ctor_VM_Models_Pre_ILinkContainer_System_Collections_Generic_List__1__System_Int32_"></a> LinkListCollectionWithFixedAddition\(ILinkContainer, List<TLink\>, int\)

```csharp
public LinkListCollectionWithFixedAddition(ILinkContainer objParent, List<TLink> collection, int nMin)
```

#### Parameters

`objParent` ILinkContainer

`collection` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<TLink\>

`nMin` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Managed_Collections_LinkListCollectionWithFixedAddition_2__ctor_VM_Models_Pre_ILinkContainer_System_Collections_Generic_List__1__System_Int32_System_Int32_"></a> LinkListCollectionWithFixedAddition\(ILinkContainer, List<TLink\>, int, int\)

```csharp
public LinkListCollectionWithFixedAddition(ILinkContainer objParent, List<TLink> collection, int nMin, int nMax)
```

#### Parameters

`objParent` ILinkContainer

`collection` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<TLink\>

`nMin` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`nMax` [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### <a id="VM_Managed_Collections_LinkListCollectionWithFixedAddition_2_Add__0_"></a> Add\(T\)

```csharp
public override sealed void Add(T item)
```

#### Parameters

`item` T

### <a id="VM_Managed_Collections_LinkListCollectionWithFixedAddition_2_Add__0_System_Boolean_"></a> Add\(T, bool\)

```csharp
public override sealed void Add(T item, bool bContainsDocument)
```

#### Parameters

`item` T

`bContainsDocument` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Collections_LinkListCollectionWithFixedAddition_2_Insert_System_Int32__0_"></a> Insert\(int, T\)

```csharp
public override sealed void Insert(int index, T item)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`item` T

### <a id="VM_Managed_Collections_LinkListCollectionWithFixedAddition_2_Remove__0_"></a> Remove\(T\)

```csharp
public override sealed bool Remove(T item)
```

#### Parameters

`item` T

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Collections_LinkListCollectionWithFixedAddition_2_Remove__0_System_Boolean_"></a> Remove\(T, bool\)

```csharp
public override sealed bool Remove(T item, bool bContainsDocument)
```

#### Parameters

`item` T

`bContainsDocument` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Collections_LinkListCollectionWithFixedAddition_2_RemoveAt_System_Int32_"></a> RemoveAt\(int\)

```csharp
public override sealed void RemoveAt(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

