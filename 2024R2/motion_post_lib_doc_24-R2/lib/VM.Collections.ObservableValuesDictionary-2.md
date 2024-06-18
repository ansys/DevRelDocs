# Class ObservableValuesDictionary<TKey, TValue\>

Namespace: [VM.Collections](VM.Collections.md)  
Assembly: VM.dll  

```csharp
public class ObservableValuesDictionary<TKey, TValue>
```

#### Type Parameters

`TKey` 

`TValue` 

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ObservableValuesDictionary<TKey, TValue\>](VM.Collections.ObservableValuesDictionary\-2.md)

## Constructors

### ObservableValuesDictionary\(\)

```csharp
public ObservableValuesDictionary()
```

## Properties

### Count

```csharp
public int Count { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### IsReadOnly

```csharp
public bool IsReadOnly { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Keys

```csharp
public ICollection<TKey> Keys { get; }
```

#### Property Value

 [ICollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1)<TKey\>

### Values

```csharp
public ReadOnlyObservableCollection<TValue> Values { get; }
```

#### Property Value

 [ReadOnlyObservableCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlyobservablecollection\-1)<TValue\>

### this\[TKey\]

```csharp
public TValue this[TKey key] { get; set; }
```

#### Property Value

 TValue

## Methods

### Add\(TKey, TValue\)

```csharp
public void Add(TKey key, TValue value)
```

#### Parameters

`key` TKey

`value` TValue

### Clear\(\)

```csharp
public void Clear()
```

### Contains\(KeyValuePair<TKey, TValue\>\)

```csharp
public bool Contains(KeyValuePair<TKey, TValue> item)
```

#### Parameters

`item` [KeyValuePair](https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair\-2)<TKey, TValue\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ContainsKey\(TKey\)

```csharp
public bool ContainsKey(TKey key)
```

#### Parameters

`key` TKey

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ContainsValue\(TValue\)

```csharp
public bool ContainsValue(TValue value)
```

#### Parameters

`value` TValue

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### CopyTo\(KeyValuePair<TKey, TValue\>\[\], int\)

```csharp
public void CopyTo(KeyValuePair<TKey, TValue>[] array, int arrayIndex)
```

#### Parameters

`array` [KeyValuePair](https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair\-2)<TKey, TValue\>\[\]

`arrayIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### GetEnumerator\(\)

```csharp
public IEnumerator GetEnumerator()
```

#### Returns

 [IEnumerator](https://learn.microsoft.com/dotnet/api/system.collections.ienumerator)

### Remove\(TKey\)

```csharp
public virtual bool Remove(TKey key)
```

#### Parameters

`key` TKey

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### TryGetValue\(TKey, out TValue\)

```csharp
public bool TryGetValue(TKey key, out TValue value)
```

#### Parameters

`key` TKey

`value` TValue

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


