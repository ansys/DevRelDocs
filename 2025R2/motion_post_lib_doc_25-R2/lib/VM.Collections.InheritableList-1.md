# Class InheritableList<T\>

Namespace: [VM.Collections](VM.Collections.md)  
Assembly: VM.dll  

```python
public abstract class InheritableList<T> : List<T>
```

#### Type Parameters

`T` 

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ??
[List<T\>](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1) ??
[InheritableList<T\>](VM.Collections.InheritableList\-1.md)

## Constructors

### InheritableList\(\)

```python
public InheritableList()
```

### InheritableList\(int\)

```python
public InheritableList(int capacity)
```

#### Parameters

`capacity` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### InheritableList\(IEnumerable<T\>\)

```python
public InheritableList(IEnumerable<T> collection)
```

#### Parameters

`collection` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<T\>

## Properties

### this\[int\]

```python
public T this[int index] { get; set; }
```

#### Property Value

 T

## Methods

### Add\(T\)

```python
public void Add(T item)
```

#### Parameters

`item` T

### AddRange\(IEnumerable<T\>\)

```python
public void AddRange(IEnumerable<T> collection)
```

#### Parameters

`collection` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<T\>

### Clear\(\)

```python
public void Clear()
```

### ClearItems\(\)

```python
protected virtual void ClearItems()
```

### Insert\(int, T\)

```python
public void Insert(int index, T item)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`item` T

### InsertItem\(int, T\)

```python
protected virtual void InsertItem(int index, T item)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`item` T

### InsertRange\(int, IEnumerable<T\>\)

```python
public void InsertRange(int index, IEnumerable<T> collection)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`collection` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<T\>

### Remove\(T\)

```python
public bool Remove(T item)
```

#### Parameters

`item` T

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### RemoveAll\(Predicate<T\>\)

```python
public int RemoveAll(Predicate<T> match)
```

#### Parameters

`match` [Predicate](https://learn.microsoft.com/dotnet/api/system.predicate\-1)<T\>

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### RemoveAt\(int\)

```python
public void RemoveAt(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### RemoveItem\(int\)

```python
protected virtual void RemoveItem(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### RemoveRange\(int, int\)

```python
public void RemoveRange(int index, int count)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`count` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SetItem\(int, T\)

```python
protected virtual void SetItem(int index, T item)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`item` T


