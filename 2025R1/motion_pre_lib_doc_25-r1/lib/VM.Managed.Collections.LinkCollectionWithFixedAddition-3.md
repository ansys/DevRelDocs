#  Class LinkCollectionWithFixedAddition<T, TLink, TCollection\>

Namespace: [VM.Managed.Collections](VM.Managed.Collections.md)  
Assembly: VMAppCore.dll  

```csharp
public sealed class LinkCollectionWithFixedAddition<T, TLink, TCollection> : LinkCollection<T, TLink, TCollection>, ILinkCollection, IPostDeserialized where T : class where TLink : class, ITypedLink<T> where TCollection : ICollection<TLink>, new()
```

#### Type Parameters

`T` 

`TLink` 

`TCollection` 

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[LinkCollection<T, TLink, TCollection\>](VM.Managed.Collections.LinkCollection\-3.md) ← 
[LinkCollectionWithFixedAddition<T, TLink, TCollection\>](VM.Managed.Collections.LinkCollectionWithFixedAddition\-3.md)

#### Implements

[ILinkCollection](VM.Managed.Collections.ILinkCollection.md), 
IPostDeserialized

#### Inherited Members

[LinkCollection<T, TLink, TCollection\>.raise\_CollectionChanged\(object, NotifyCollectionChangedEventArgs\)](VM.Managed.Collections.LinkCollection\-3.md\#VM\_Managed\_Collections\_LinkCollection\_3\_raise\_CollectionChanged\_System\_Object\_System\_Collections\_Specialized\_NotifyCollectionChangedEventArgs\_), 
[LinkCollection<T, TLink, TCollection\>.Add\(T\)](VM.Managed.Collections.LinkCollection\-3.md\#VM\_Managed\_Collections\_LinkCollection\_3\_Add\_\_0\_), 
[LinkCollection<T, TLink, TCollection\>.Add\(T, bool\)](VM.Managed.Collections.LinkCollection\-3.md\#VM\_Managed\_Collections\_LinkCollection\_3\_Add\_\_0\_System\_Boolean\_), 
[LinkCollection<T, TLink, TCollection\>.Clear\(\)](VM.Managed.Collections.LinkCollection\-3.md\#VM\_Managed\_Collections\_LinkCollection\_3\_Clear), 
[LinkCollection<T, TLink, TCollection\>.Clear\(bool\)](VM.Managed.Collections.LinkCollection\-3.md\#VM\_Managed\_Collections\_LinkCollection\_3\_Clear\_System\_Boolean\_), 
[LinkCollection<T, TLink, TCollection\>.Contains\(T\)](VM.Managed.Collections.LinkCollection\-3.md\#VM\_Managed\_Collections\_LinkCollection\_3\_Contains\_\_0\_), 
[LinkCollection<T, TLink, TCollection\>.CopyTo\(T\[\], int\)](VM.Managed.Collections.LinkCollection\-3.md\#VM\_Managed\_Collections\_LinkCollection\_3\_CopyTo\_\_0\_\_\_System\_Int32\_), 
[LinkCollection<T, TLink, TCollection\>.GetEnumeratorImpl\(\)](VM.Managed.Collections.LinkCollection\-3.md\#VM\_Managed\_Collections\_LinkCollection\_3\_GetEnumeratorImpl), 
[LinkCollection<T, TLink, TCollection\>.GetEnumerator\(\)](VM.Managed.Collections.LinkCollection\-3.md\#VM\_Managed\_Collections\_LinkCollection\_3\_GetEnumerator), 
[LinkCollection<T, TLink, TCollection\>.Remove\(T\)](VM.Managed.Collections.LinkCollection\-3.md\#VM\_Managed\_Collections\_LinkCollection\_3\_Remove\_\_0\_), 
[LinkCollection<T, TLink, TCollection\>.Remove\(T, bool\)](VM.Managed.Collections.LinkCollection\-3.md\#VM\_Managed\_Collections\_LinkCollection\_3\_Remove\_\_0\_System\_Boolean\_), 
[LinkCollection<T, TLink, TCollection\>.SetModified\(ModifiedType, bool\)](VM.Managed.Collections.LinkCollection\-3.md\#VM\_Managed\_Collections\_LinkCollection\_3\_SetModified\_VM\_Managed\_Collections\_ModifiedType\_System\_Boolean\_), 
[LinkCollection<T, TLink, TCollection\>.IsReadOnly](VM.Managed.Collections.LinkCollection\-3.md\#VM\_Managed\_Collections\_LinkCollection\_3\_IsReadOnly), 
[LinkCollection<T, TLink, TCollection\>.Count](VM.Managed.Collections.LinkCollection\-3.md\#VM\_Managed\_Collections\_LinkCollection\_3\_Count), 
[LinkCollection<T, TLink, TCollection\>.CollectionChanged](VM.Managed.Collections.LinkCollection\-3.md\#VM\_Managed\_Collections\_LinkCollection\_3\_CollectionChanged)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_Collections_LinkCollectionWithFixedAddition_3__ctor_VM_Models_Pre_ILinkContainer_System_Int32_"></a> LinkCollectionWithFixedAddition\(ILinkContainer, int\)

```csharp
public LinkCollectionWithFixedAddition(ILinkContainer objParent, int nMin)
```

#### Parameters

`objParent` ILinkContainer

`nMin` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Managed_Collections_LinkCollectionWithFixedAddition_3__ctor_VM_Models_Pre_ILinkContainer_System_Int32_System_Int32_"></a> LinkCollectionWithFixedAddition\(ILinkContainer, int, int\)

```csharp
public LinkCollectionWithFixedAddition(ILinkContainer objParent, int nMin, int nMax)
```

#### Parameters

`objParent` ILinkContainer

`nMin` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`nMax` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Managed_Collections_LinkCollectionWithFixedAddition_3__ctor_VM_Models_Pre_ILinkContainer__2_System_Int32_"></a> LinkCollectionWithFixedAddition\(ILinkContainer, TCollection, int\)

```csharp
public LinkCollectionWithFixedAddition(ILinkContainer objParent, TCollection collection, int nMin)
```

#### Parameters

`objParent` ILinkContainer

`collection` TCollection

`nMin` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Managed_Collections_LinkCollectionWithFixedAddition_3__ctor_VM_Models_Pre_ILinkContainer__2_System_Int32_System_Int32_"></a> LinkCollectionWithFixedAddition\(ILinkContainer, TCollection, int, int\)

```csharp
public LinkCollectionWithFixedAddition(ILinkContainer objParent, TCollection collection, int nMin, int nMax)
```

#### Parameters

`objParent` ILinkContainer

`collection` TCollection

`nMin` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`nMax` [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### <a id="VM_Managed_Collections_LinkCollectionWithFixedAddition_3_Add__0_"></a> Add\(T\)

```csharp
public override sealed void Add(T item)
```

#### Parameters

`item` T

### <a id="VM_Managed_Collections_LinkCollectionWithFixedAddition_3_Add__0_System_Boolean_"></a> Add\(T, bool\)

```csharp
public override sealed void Add(T item, bool bContainsDocument)
```

#### Parameters

`item` T

`bContainsDocument` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Collections_LinkCollectionWithFixedAddition_3_Remove__0_"></a> Remove\(T\)

```csharp
public override sealed bool Remove(T item)
```

#### Parameters

`item` T

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Collections_LinkCollectionWithFixedAddition_3_Remove__0_System_Boolean_"></a> Remove\(T, bool\)

```csharp
public override sealed bool Remove(T item, bool bContainsDocument)
```

#### Parameters

`item` T

`bContainsDocument` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

