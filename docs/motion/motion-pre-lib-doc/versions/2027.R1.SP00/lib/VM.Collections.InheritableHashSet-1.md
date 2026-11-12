# Class InheritableHashSet<T\>
<a id="VM_Collections_InheritableHashSet_1"></a>

Namespace: [VM.Collections](VM.Collections.md)  
Assembly: VM.dll  

```csharp
public abstract class InheritableHashSet<T> : HashSet<T>
```

#### Type Parameters

`T` 

#### Inheritance

object ← 
HashSet<T\> ← 
[InheritableHashSet<T\>](VM.Collections.InheritableHashSet\-1.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Collections_InheritableHashSet_1__ctor"></a> InheritableHashSet\(\)

```csharp
public InheritableHashSet()
```

### <a id="VM_Collections_InheritableHashSet_1__ctor_System_Collections_Generic_IEnumerable__0__"></a> InheritableHashSet\(IEnumerable<T\>\)

```csharp
public InheritableHashSet(IEnumerable<T> collection)
```

#### Parameters

`collection` IEnumerable<T\>

### <a id="VM_Collections_InheritableHashSet_1__ctor_System_Collections_Generic_IEqualityComparer__0__"></a> InheritableHashSet\(IEqualityComparer<T\>\)

```csharp
public InheritableHashSet(IEqualityComparer<T> comparer)
```

#### Parameters

`comparer` IEqualityComparer<T\>

### <a id="VM_Collections_InheritableHashSet_1__ctor_System_Collections_Generic_IEnumerable__0__System_Collections_Generic_IEqualityComparer__0__"></a> InheritableHashSet\(IEnumerable<T\>, IEqualityComparer<T\>\)

```csharp
public InheritableHashSet(IEnumerable<T> collection, IEqualityComparer<T> comparer)
```

#### Parameters

`collection` IEnumerable<T\>

`comparer` IEqualityComparer<T\>

### <a id="VM_Collections_InheritableHashSet_1__ctor_System_Runtime_Serialization_SerializationInfo_System_Runtime_Serialization_StreamingContext_"></a> InheritableHashSet\(SerializationInfo, StreamingContext\)

```csharp
protected InheritableHashSet(SerializationInfo serializationInfo, StreamingContext streamingContext)
```

#### Parameters

`serializationInfo` SerializationInfo

`streamingContext` StreamingContext

## Methods

### <a id="VM_Collections_InheritableHashSet_1_Add__0_"></a> Add\(T\)

```csharp
public bool Add(T item)
```

#### Parameters

`item` T

#### Returns

 bool

### <a id="VM_Collections_InheritableHashSet_1_AddItem__0_"></a> AddItem\(T\)

```csharp
protected virtual bool AddItem(T item)
```

#### Parameters

`item` T

#### Returns

 bool

### <a id="VM_Collections_InheritableHashSet_1_Clear"></a> Clear\(\)

```csharp
public void Clear()
```

### <a id="VM_Collections_InheritableHashSet_1_ClearItems"></a> ClearItems\(\)

```csharp
protected virtual void ClearItems()
```

### <a id="VM_Collections_InheritableHashSet_1_Remove__0_"></a> Remove\(T\)

```csharp
public bool Remove(T item)
```

#### Parameters

`item` T

#### Returns

 bool

### <a id="VM_Collections_InheritableHashSet_1_RemoveItem__0_"></a> RemoveItem\(T\)

```csharp
protected virtual bool RemoveItem(T item)
```

#### Parameters

`item` T

#### Returns

 bool

