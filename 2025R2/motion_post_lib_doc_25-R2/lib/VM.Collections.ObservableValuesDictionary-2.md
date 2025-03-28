# Class ObservableValuesDictionary<TKey, TValue\>

Namespace: [VM.Collections](VM.Collections.md)  
Assembly: VM.dll  

```python
public class ObservableValuesDictionary<TKey, TValue>
```

#### Type Parameters

`TKey` 

`TValue` 

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ??
[ObservableValuesDictionary<TKey, TValue\>](VM.Collections.ObservableValuesDictionary\-2.md)

## Constructors

### ObservableValuesDictionary\(\)

```python
public ObservableValuesDictionary()
```

## Properties

### Count

```python
public int Count { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### IsReadOnly

```python
public bool IsReadOnly { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Keys

```python
public ICollection<TKey> Keys { get; }
```

#### Property Value

 [ICollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1)<TKey\>

### Values

```python
public ReadOnlyObservableCollection<TValue> Values { get; }
```

#### Property Value

 [ReadOnlyObservableCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlyobservablecollection\-1)<TValue\>

### this\[TKey\]

```python
public TValue this[TKey key] { get; set; }
```

#### Property Value

 TValue

## Methods

### Add\(TKey, TValue\)

```python
public void Add(TKey key, TValue value)
```

#### Parameters

`key` TKey

`value` TValue

### Clear\(\)

```python
public void Clear()
```

### Contains\(KeyValuePair<TKey, TValue\>\)

```python
public bool Contains(KeyValuePair<TKey, TValue> item)
```

#### Parameters

`item` [KeyValuePair](https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair\-2)<TKey, TValue\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ContainsKey\(TKey\)

```python
public bool ContainsKey(TKey key)
```

#### Parameters

`key` TKey

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ContainsValue\(TValue\)

```python
public bool ContainsValue(TValue value)
```

#### Parameters

`value` TValue

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### CopyTo\(KeyValuePair<TKey, TValue\>\[\], int\)

```python
public void CopyTo(KeyValuePair<TKey, TValue>[] array, int arrayIndex)
```

#### Parameters

`array` [KeyValuePair](https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair\-2)<TKey, TValue\>\[\]

`arrayIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### GetEnumerator\(\)

```python
public IEnumerator GetEnumerator()
```

#### Returns

 [IEnumerator](https://learn.microsoft.com/dotnet/api/system.collections.ienumerator)

### Remove\(TKey\)

```python
public virtual bool Remove(TKey key)
```

#### Parameters

`key` TKey

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### TryGetValue\(TKey, out TValue\)

```python
public bool TryGetValue(TKey key, out TValue value)
```

#### Parameters

`key` TKey

`value` TValue

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


