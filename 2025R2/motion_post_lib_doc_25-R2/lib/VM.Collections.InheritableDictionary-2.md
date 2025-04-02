#  Class InheritableDictionary<TKey, TValue\>

Namespace: [VM.Collections](VM.Collections.md)  
Assembly: VM.dll  

```python
public abstract class InheritableDictionary<TKey, TValue> : Dictionary<TKey, TValue>
```

#### Type Parameters

`TKey` 

`TValue` 

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Dictionary<TKey, TValue\>](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2) ← 
[InheritableDictionary<TKey, TValue\>](VM.Collections.InheritableDictionary\-2.md)

## Constructors

### <a id="VM_Collections_InheritableDictionary_2__ctor"></a> InheritableDictionary\(\)

```python
public InheritableDictionary()
```

### <a id="VM_Collections_InheritableDictionary_2__ctor_System_Int32_"></a> InheritableDictionary\(int\)

```python
public InheritableDictionary(int capacity)
```

#### Parameters

`capacity` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Collections_InheritableDictionary_2__ctor_System_Collections_Generic_IEqualityComparer__0__"></a> InheritableDictionary\(IEqualityComparer<TKey\>\)

```python
public InheritableDictionary(IEqualityComparer<TKey> comparer)
```

#### Parameters

`comparer` [IEqualityComparer](https://learn.microsoft.com/dotnet/api/system.collections.generic.iequalitycomparer\-1)<TKey\>

### <a id="VM_Collections_InheritableDictionary_2__ctor_System_Int32_System_Collections_Generic_IEqualityComparer__0__"></a> InheritableDictionary\(int, IEqualityComparer<TKey\>\)

```python
public InheritableDictionary(int capacity, IEqualityComparer<TKey> comparer)
```

#### Parameters

`capacity` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`comparer` [IEqualityComparer](https://learn.microsoft.com/dotnet/api/system.collections.generic.iequalitycomparer\-1)<TKey\>

### <a id="VM_Collections_InheritableDictionary_2__ctor_System_Collections_Generic_IDictionary__0__1__"></a> InheritableDictionary\(IDictionary<TKey, TValue\>\)

```python
public InheritableDictionary(IDictionary<TKey, TValue> dictionary)
```

#### Parameters

`dictionary` [IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary\-2)<TKey, TValue\>

### <a id="VM_Collections_InheritableDictionary_2__ctor_System_Collections_Generic_IDictionary__0__1__System_Collections_Generic_IEqualityComparer__0__"></a> InheritableDictionary\(IDictionary<TKey, TValue\>, IEqualityComparer<TKey\>\)

```python
public InheritableDictionary(IDictionary<TKey, TValue> dictionary, IEqualityComparer<TKey> comparer)
```

#### Parameters

`dictionary` [IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary\-2)<TKey, TValue\>

`comparer` [IEqualityComparer](https://learn.microsoft.com/dotnet/api/system.collections.generic.iequalitycomparer\-1)<TKey\>

### <a id="VM_Collections_InheritableDictionary_2__ctor_System_Runtime_Serialization_SerializationInfo_System_Runtime_Serialization_StreamingContext_"></a> InheritableDictionary\(SerializationInfo, StreamingContext\)

```python
protected InheritableDictionary(SerializationInfo serializationInfo, StreamingContext streamingContext)
```

#### Parameters

`serializationInfo` [SerializationInfo](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.serializationinfo)

`streamingContext` [StreamingContext](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.streamingcontext)

## Properties

### <a id="VM_Collections_InheritableDictionary_2_Item__0_"></a> this\[TKey\]

```python
public TValue this[TKey key] { get; set; }
```

#### Property Value

 TValue

## Methods

### <a id="VM_Collections_InheritableDictionary_2_Add__0__1_"></a> Add\(TKey, TValue\)

```python
public void Add(TKey key, TValue value)
```

#### Parameters

`key` TKey

`value` TValue

### <a id="VM_Collections_InheritableDictionary_2_AddItem__0__1_"></a> AddItem\(TKey, TValue\)

```python
protected virtual void AddItem(TKey key, TValue value)
```

#### Parameters

`key` TKey

`value` TValue

### <a id="VM_Collections_InheritableDictionary_2_Clear"></a> Clear\(\)

```python
public void Clear()
```

### <a id="VM_Collections_InheritableDictionary_2_ClearItems"></a> ClearItems\(\)

```python
protected virtual void ClearItems()
```

### <a id="VM_Collections_InheritableDictionary_2_Remove__0_"></a> Remove\(TKey\)

```python
public bool Remove(TKey key)
```

#### Parameters

`key` TKey

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Collections_InheritableDictionary_2_RemoveItem__0_"></a> RemoveItem\(TKey\)

```python
protected virtual bool RemoveItem(TKey key)
```

#### Parameters

`key` TKey

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


