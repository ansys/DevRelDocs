# Class InheritableDictionary<TKey, TValue\>

Namespace: [VM.Collections](VM.Collections.md)  
Assembly: VM.dll  

```csharp
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

### InheritableDictionary\(\)

```csharp
public InheritableDictionary()
```

### InheritableDictionary\(int\)

```csharp
public InheritableDictionary(int capacity)
```

#### Parameters

`capacity` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### InheritableDictionary\(IEqualityComparer<TKey\>\)

```csharp
public InheritableDictionary(IEqualityComparer<TKey> comparer)
```

#### Parameters

`comparer` [IEqualityComparer](https://learn.microsoft.com/dotnet/api/system.collections.generic.iequalitycomparer\-1)<TKey\>

### InheritableDictionary\(int, IEqualityComparer<TKey\>\)

```csharp
public InheritableDictionary(int capacity, IEqualityComparer<TKey> comparer)
```

#### Parameters

`capacity` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`comparer` [IEqualityComparer](https://learn.microsoft.com/dotnet/api/system.collections.generic.iequalitycomparer\-1)<TKey\>

### InheritableDictionary\(IDictionary<TKey, TValue\>\)

```csharp
public InheritableDictionary(IDictionary<TKey, TValue> dictionary)
```

#### Parameters

`dictionary` [IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary\-2)<TKey, TValue\>

### InheritableDictionary\(IDictionary<TKey, TValue\>, IEqualityComparer<TKey\>\)

```csharp
public InheritableDictionary(IDictionary<TKey, TValue> dictionary, IEqualityComparer<TKey> comparer)
```

#### Parameters

`dictionary` [IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary\-2)<TKey, TValue\>

`comparer` [IEqualityComparer](https://learn.microsoft.com/dotnet/api/system.collections.generic.iequalitycomparer\-1)<TKey\>

### InheritableDictionary\(SerializationInfo, StreamingContext\)

```csharp
protected InheritableDictionary(SerializationInfo serializationInfo, StreamingContext streamingContext)
```

#### Parameters

`serializationInfo` [SerializationInfo](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.serializationinfo)

`streamingContext` [StreamingContext](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.streamingcontext)

## Properties

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

### AddItem\(TKey, TValue\)

```csharp
protected virtual void AddItem(TKey key, TValue value)
```

#### Parameters

`key` TKey

`value` TValue

### Clear\(\)

```csharp
public void Clear()
```

### ClearItems\(\)

```csharp
protected virtual void ClearItems()
```

### Remove\(TKey\)

```csharp
public bool Remove(TKey key)
```

#### Parameters

`key` TKey

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### RemoveItem\(TKey\)

```csharp
protected virtual bool RemoveItem(TKey key)
```

#### Parameters

`key` TKey

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


