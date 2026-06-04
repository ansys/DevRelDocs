#  Class InheritableHashSet<T\>

Namespace: [VM.Collections](VM.Collections.md)  
Assembly: VM.dll  

```python
public abstract class InheritableHashSet<T> : HashSet<T>
```

#### Type Parameters

`T` 

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[HashSet<T\>](https://learn.microsoft.com/dotnet/api/system.collections.generic.hashset\-1) ← 
[InheritableHashSet<T\>](VM.Collections.InheritableHashSet\-1.md)

## Constructors

### <a id="VM_Collections_InheritableHashSet_1__ctor"></a> InheritableHashSet\(\)

```python
public InheritableHashSet()
```

### <a id="VM_Collections_InheritableHashSet_1__ctor_System_Collections_Generic_IEnumerable__0__"></a> InheritableHashSet\(IEnumerable<T\>\)

```python
public InheritableHashSet(IEnumerable<T> collection)
```

#### Parameters

`collection` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<T\>

### <a id="VM_Collections_InheritableHashSet_1__ctor_System_Collections_Generic_IEqualityComparer__0__"></a> InheritableHashSet\(IEqualityComparer<T\>\)

```python
public InheritableHashSet(IEqualityComparer<T> comparer)
```

#### Parameters

`comparer` [IEqualityComparer](https://learn.microsoft.com/dotnet/api/system.collections.generic.iequalitycomparer\-1)<T\>

### <a id="VM_Collections_InheritableHashSet_1__ctor_System_Collections_Generic_IEnumerable__0__System_Collections_Generic_IEqualityComparer__0__"></a> InheritableHashSet\(IEnumerable<T\>, IEqualityComparer<T\>\)

```python
public InheritableHashSet(IEnumerable<T> collection, IEqualityComparer<T> comparer)
```

#### Parameters

`collection` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<T\>

`comparer` [IEqualityComparer](https://learn.microsoft.com/dotnet/api/system.collections.generic.iequalitycomparer\-1)<T\>

### <a id="VM_Collections_InheritableHashSet_1__ctor_System_Runtime_Serialization_SerializationInfo_System_Runtime_Serialization_StreamingContext_"></a> InheritableHashSet\(SerializationInfo, StreamingContext\)

```python
protected InheritableHashSet(SerializationInfo serializationInfo, StreamingContext streamingContext)
```

#### Parameters

`serializationInfo` [SerializationInfo](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.serializationinfo)

`streamingContext` [StreamingContext](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.streamingcontext)

## Methods

### <a id="VM_Collections_InheritableHashSet_1_Add__0_"></a> Add\(T\)

```python
public bool Add(T item)
```

#### Parameters

`item` T

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Collections_InheritableHashSet_1_AddItem__0_"></a> AddItem\(T\)

```python
protected virtual bool AddItem(T item)
```

#### Parameters

`item` T

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Collections_InheritableHashSet_1_Clear"></a> Clear\(\)

```python
public void Clear()
```

### <a id="VM_Collections_InheritableHashSet_1_ClearItems"></a> ClearItems\(\)

```python
protected virtual void ClearItems()
```

### <a id="VM_Collections_InheritableHashSet_1_Remove__0_"></a> Remove\(T\)

```python
public bool Remove(T item)
```

#### Parameters

`item` T

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Collections_InheritableHashSet_1_RemoveItem__0_"></a> RemoveItem\(T\)

```python
protected virtual bool RemoveItem(T item)
```

#### Parameters

`item` T

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


