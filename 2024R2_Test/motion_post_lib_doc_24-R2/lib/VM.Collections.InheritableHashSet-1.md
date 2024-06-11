# Class InheritableHashSet<T\>

Namespace: [VM.Collections](VM.Collections.md)  
Assembly: VM.dll  

```csharp
public abstract class InheritableHashSet<T> : HashSet<T>
```

#### Type Parameters

`T` 

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[HashSet<T\>](https://learn.microsoft.com/dotnet/api/system.collections.generic.hashset\-1) ← 
[InheritableHashSet<T\>](VM.Collections.InheritableHashSet\-1.md)

## Constructors

### InheritableHashSet\(\)

```csharp
public InheritableHashSet()
```

### InheritableHashSet\(IEnumerable<T\>\)

```csharp
public InheritableHashSet(IEnumerable<T> collection)
```

#### Parameters

`collection` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<T\>

### InheritableHashSet\(IEqualityComparer<T\>\)

```csharp
public InheritableHashSet(IEqualityComparer<T> comparer)
```

#### Parameters

`comparer` [IEqualityComparer](https://learn.microsoft.com/dotnet/api/system.collections.generic.iequalitycomparer\-1)<T\>

### InheritableHashSet\(IEnumerable<T\>, IEqualityComparer<T\>\)

```csharp
public InheritableHashSet(IEnumerable<T> collection, IEqualityComparer<T> comparer)
```

#### Parameters

`collection` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<T\>

`comparer` [IEqualityComparer](https://learn.microsoft.com/dotnet/api/system.collections.generic.iequalitycomparer\-1)<T\>

### InheritableHashSet\(SerializationInfo, StreamingContext\)

```csharp
protected InheritableHashSet(SerializationInfo serializationInfo, StreamingContext streamingContext)
```

#### Parameters

`serializationInfo` [SerializationInfo](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.serializationinfo)

`streamingContext` [StreamingContext](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.streamingcontext)

## Methods

### Add\(T\)

```csharp
public bool Add(T item)
```

#### Parameters

`item` T

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### AddItem\(T\)

```csharp
protected virtual bool AddItem(T item)
```

#### Parameters

`item` T

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Clear\(\)

```csharp
public void Clear()
```

### ClearItems\(\)

```csharp
protected virtual void ClearItems()
```

### Remove\(T\)

```csharp
public bool Remove(T item)
```

#### Parameters

`item` T

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### RemoveItem\(T\)

```csharp
protected virtual bool RemoveItem(T item)
```

#### Parameters

`item` T

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


