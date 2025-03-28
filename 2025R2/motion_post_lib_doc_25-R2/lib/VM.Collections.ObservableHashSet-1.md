# Class ObservableHashSet<T\>

Namespace: [VM.Collections](VM.Collections.md)  
Assembly: VM.dll  

Represents an observable set of values.

```python
public sealed class ObservableHashSet<T> : HashSet<T>
```

#### Type Parameters

`T` 

The type of elements in the hash set.

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ??
[HashSet<T\>](https://learn.microsoft.com/dotnet/api/system.collections.generic.hashset\-1) ??
[ObservableHashSet<T\>](VM.Collections.ObservableHashSet\-1.md)

## Constructors

### ObservableHashSet\(\)

```python
public ObservableHashSet()
```

### ObservableHashSet\(IEnumerable<T\>\)

```python
public ObservableHashSet(IEnumerable<T> collection)
```

#### Parameters

`collection` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<T\>

### ObservableHashSet\(IEqualityComparer<T\>\)

```python
public ObservableHashSet(IEqualityComparer<T> comparer)
```

#### Parameters

`comparer` [IEqualityComparer](https://learn.microsoft.com/dotnet/api/system.collections.generic.iequalitycomparer\-1)<T\>

### ObservableHashSet\(IEnumerable<T\>, IEqualityComparer<T\>\)

```python
public ObservableHashSet(IEnumerable<T> collection, IEqualityComparer<T> comparer)
```

#### Parameters

`collection` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<T\>

`comparer` [IEqualityComparer](https://learn.microsoft.com/dotnet/api/system.collections.generic.iequalitycomparer\-1)<T\>

## Methods

### Add\(T\)

Adds the specified element to a set.

```python
public bool Add(T item)
```

#### Parameters

`item` T

The element to add to the set.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

true if the element is added to the <xref href="VM.Collections.ObservableHashSet%601" data-throw-if-not-resolved="false"></xref> object; false if the element is already present.

### Clear\(\)

Removes all elements from a <xref href="VM.Collections.ObservableHashSet%601" data-throw-if-not-resolved="false"></xref> object.

```python
public void Clear()
```

### Dispose\(\)

```python
public void Dispose()
```

### ExceptWith\(IEnumerable<T\>\)

Removes all elements in the specified collection from the current <xref href="VM.Collections.ObservableHashSet%601" data-throw-if-not-resolved="false"></xref> object.

```python
public void ExceptWith(IEnumerable<T> other)
```

#### Parameters

`other` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<T\>

The collection of items to remove from the <xref href="VM.Collections.ObservableHashSet%601" data-throw-if-not-resolved="false"></xref> object.

### IntersectWith\(IEnumerable<T\>\)

Modifies the current <xref href="VM.Collections.ObservableHashSet%601" data-throw-if-not-resolved="false"></xref> object to contain only elements that are present in that object and in the specified collection.

```python
public void IntersectWith(IEnumerable<T> other)
```

#### Parameters

`other` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<T\>

The collection to compare to the current <xref href="VM.Collections.ObservableHashSet%601" data-throw-if-not-resolved="false"></xref> object.

### Remove\(T\)

Removes the specified element from a <xref href="VM.Collections.ObservableHashSet%601" data-throw-if-not-resolved="false"></xref> object.

```python
public bool Remove(T item)
```

#### Parameters

`item` T

The element to remove.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

true if the element is successfully found and removed; otherwise, false. This method returns false if item is not found in the <xref href="VM.Collections.ObservableHashSet%601" data-throw-if-not-resolved="false"></xref> object.

### Reset\(\)

```python
public void Reset()
```

### SymmetricExceptWith\(IEnumerable<T\>\)

Modifies the current <xref href="VM.Collections.ObservableHashSet%601" data-throw-if-not-resolved="false"></xref> object to contain only elements that are present either in that object or in the specified collection, but not both.

```python
public void SymmetricExceptWith(IEnumerable<T> other)
```

#### Parameters

`other` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<T\>

The collection to compare to the current <xref href="VM.Collections.ObservableHashSet%601" data-throw-if-not-resolved="false"></xref> object.

### UnionWith\(IEnumerable<T\>\)

Modifies the current <xref href="VM.Collections.ObservableHashSet%601" data-throw-if-not-resolved="false"></xref> object to contain all elements that are present in itself, the specified collection, or both.

```python
public void UnionWith(IEnumerable<T> other)
```

#### Parameters

`other` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<T\>

The collection to compare to the current <xref href="VM.Collections.ObservableHashSet%601" data-throw-if-not-resolved="false"></xref> object.

### CollectionChanged

```python
public event NotifyCollectionChangedEventHandler CollectionChanged
```

#### Event Type

 [NotifyCollectionChangedEventHandler](https://learn.microsoft.com/dotnet/api/system.collections.specialized.notifycollectionchangedeventhandler)


