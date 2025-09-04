#  Class InheritableList<T\>

Namespace: [VM.Collections](VM.Collections.md)  
Assembly: VM.dll  

```python
public abstract class InheritableList<T> : List<T>
```

#### Type Parameters

`T` 

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[List<T\>](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1) ← 
[InheritableList<T\>](VM.Collections.InheritableList\-1.md)

## Constructors

### <a id="VM_Collections_InheritableList_1__ctor"></a> InheritableList\(\)

```python
public InheritableList()
```

### <a id="VM_Collections_InheritableList_1__ctor_System_Int32_"></a> InheritableList\(int\)

```python
public InheritableList(int capacity)
```

#### Parameters

`capacity` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Collections_InheritableList_1__ctor_System_Collections_Generic_IEnumerable__0__"></a> InheritableList\(IEnumerable<T\>\)

```python
public InheritableList(IEnumerable<T> collection)
```

#### Parameters

`collection` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<T\>

## Properties

### <a id="VM_Collections_InheritableList_1_Item_System_Int32_"></a> this\[int\]

```python
public T this[int index] { get; set; }
```

#### Property Value

 T

## Methods

### <a id="VM_Collections_InheritableList_1_Add__0_"></a> Add\(T\)

```python
public void Add(T item)
```

#### Parameters

`item` T

### <a id="VM_Collections_InheritableList_1_AddRange_System_Collections_Generic_IEnumerable__0__"></a> AddRange\(IEnumerable<T\>\)

```python
public void AddRange(IEnumerable<T> collection)
```

#### Parameters

`collection` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<T\>

### <a id="VM_Collections_InheritableList_1_Clear"></a> Clear\(\)

```python
public void Clear()
```

### <a id="VM_Collections_InheritableList_1_ClearItems"></a> ClearItems\(\)

```python
protected virtual void ClearItems()
```

### <a id="VM_Collections_InheritableList_1_Insert_System_Int32__0_"></a> Insert\(int, T\)

```python
public void Insert(int index, T item)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`item` T

### <a id="VM_Collections_InheritableList_1_InsertItem_System_Int32__0_"></a> InsertItem\(int, T\)

```python
protected virtual void InsertItem(int index, T item)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`item` T

### <a id="VM_Collections_InheritableList_1_InsertRange_System_Int32_System_Collections_Generic_IEnumerable__0__"></a> InsertRange\(int, IEnumerable<T\>\)

```python
public void InsertRange(int index, IEnumerable<T> collection)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`collection` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<T\>

### <a id="VM_Collections_InheritableList_1_Remove__0_"></a> Remove\(T\)

```python
public bool Remove(T item)
```

#### Parameters

`item` T

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Collections_InheritableList_1_RemoveAll_System_Predicate__0__"></a> RemoveAll\(Predicate<T\>\)

```python
public int RemoveAll(Predicate<T> match)
```

#### Parameters

`match` [Predicate](https://learn.microsoft.com/dotnet/api/system.predicate\-1)<T\>

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Collections_InheritableList_1_RemoveAt_System_Int32_"></a> RemoveAt\(int\)

```python
public void RemoveAt(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Collections_InheritableList_1_RemoveItem_System_Int32_"></a> RemoveItem\(int\)

```python
protected virtual void RemoveItem(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Collections_InheritableList_1_RemoveRange_System_Int32_System_Int32_"></a> RemoveRange\(int, int\)

```python
public void RemoveRange(int index, int count)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`count` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Collections_InheritableList_1_SetItem_System_Int32__0_"></a> SetItem\(int, T\)

```python
protected virtual void SetItem(int index, T item)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`item` T


