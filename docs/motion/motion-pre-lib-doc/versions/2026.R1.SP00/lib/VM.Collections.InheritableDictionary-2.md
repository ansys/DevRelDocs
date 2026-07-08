# Class InheritableDictionary<TKey, TValue\>
<a id="VM_Collections_InheritableDictionary_2"></a>

Namespace: [VM.Collections](VM.Collections.md)  
Assembly: VM.dll  

```csharp
public abstract class InheritableDictionary<TKey, TValue> : Dictionary<TKey, TValue>
```

#### Type Parameters

`TKey` 

`TValue` 

#### Inheritance

object ← 
Dictionary<TKey, TValue\> ← 
[InheritableDictionary<TKey, TValue\>](VM.Collections.InheritableDictionary\-2.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Collections_InheritableDictionary_2__ctor"></a> InheritableDictionary\(\)

```csharp
public InheritableDictionary()
```

### <a id="VM_Collections_InheritableDictionary_2__ctor_System_Int32_"></a> InheritableDictionary\(int\)

```csharp
public InheritableDictionary(int capacity)
```

#### Parameters

`capacity` int

### <a id="VM_Collections_InheritableDictionary_2__ctor_System_Collections_Generic_IEqualityComparer__0__"></a> InheritableDictionary\(IEqualityComparer<TKey\>\)

```csharp
public InheritableDictionary(IEqualityComparer<TKey> comparer)
```

#### Parameters

`comparer` IEqualityComparer<TKey\>

### <a id="VM_Collections_InheritableDictionary_2__ctor_System_Int32_System_Collections_Generic_IEqualityComparer__0__"></a> InheritableDictionary\(int, IEqualityComparer<TKey\>\)

```csharp
public InheritableDictionary(int capacity, IEqualityComparer<TKey> comparer)
```

#### Parameters

`capacity` int

`comparer` IEqualityComparer<TKey\>

### <a id="VM_Collections_InheritableDictionary_2__ctor_System_Collections_Generic_IDictionary__0__1__"></a> InheritableDictionary\(IDictionary<TKey, TValue\>\)

```csharp
public InheritableDictionary(IDictionary<TKey, TValue> dictionary)
```

#### Parameters

`dictionary` IDictionary<TKey, TValue\>

### <a id="VM_Collections_InheritableDictionary_2__ctor_System_Collections_Generic_IDictionary__0__1__System_Collections_Generic_IEqualityComparer__0__"></a> InheritableDictionary\(IDictionary<TKey, TValue\>, IEqualityComparer<TKey\>\)

```csharp
public InheritableDictionary(IDictionary<TKey, TValue> dictionary, IEqualityComparer<TKey> comparer)
```

#### Parameters

`dictionary` IDictionary<TKey, TValue\>

`comparer` IEqualityComparer<TKey\>

### <a id="VM_Collections_InheritableDictionary_2__ctor_System_Runtime_Serialization_SerializationInfo_System_Runtime_Serialization_StreamingContext_"></a> InheritableDictionary\(SerializationInfo, StreamingContext\)

```csharp
protected InheritableDictionary(SerializationInfo serializationInfo, StreamingContext streamingContext)
```

#### Parameters

`serializationInfo` SerializationInfo

`streamingContext` StreamingContext

## Properties

### <a id="VM_Collections_InheritableDictionary_2_Item__0_"></a> this\[TKey\]

```csharp
public TValue this[TKey key] { get; set; }
```

#### Property Value

 TValue

## Methods

### <a id="VM_Collections_InheritableDictionary_2_Add__0__1_"></a> Add\(TKey, TValue\)

```csharp
public void Add(TKey key, TValue value)
```

#### Parameters

`key` TKey

`value` TValue

### <a id="VM_Collections_InheritableDictionary_2_AddItem__0__1_"></a> AddItem\(TKey, TValue\)

```csharp
protected virtual void AddItem(TKey key, TValue value)
```

#### Parameters

`key` TKey

`value` TValue

### <a id="VM_Collections_InheritableDictionary_2_Clear"></a> Clear\(\)

```csharp
public void Clear()
```

### <a id="VM_Collections_InheritableDictionary_2_ClearItems"></a> ClearItems\(\)

```csharp
protected virtual void ClearItems()
```

### <a id="VM_Collections_InheritableDictionary_2_Remove__0_"></a> Remove\(TKey\)

```csharp
public bool Remove(TKey key)
```

#### Parameters

`key` TKey

#### Returns

 bool

### <a id="VM_Collections_InheritableDictionary_2_RemoveItem__0_"></a> RemoveItem\(TKey\)

```csharp
protected virtual bool RemoveItem(TKey key)
```

#### Parameters

`key` TKey

#### Returns

 bool

