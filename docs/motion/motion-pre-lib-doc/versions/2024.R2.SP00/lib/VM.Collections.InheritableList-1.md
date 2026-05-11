# Class InheritableList<T\>

Namespace: [VM.Collections](VM.Collections.md)  
Assembly: VM.dll  

```csharp
public abstract class InheritableList<T> : List<T>
```

#### Type Parameters

`T` 

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[List<T\>](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1) ← 
[InheritableList<T\>](VM.Collections.InheritableList\-1.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### InheritableList\(\)

```csharp
public InheritableList()
```

### InheritableList\(int\)

```csharp
public InheritableList(int capacity)
```

#### Parameters

`capacity` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### InheritableList\(IEnumerable<T\>\)

```csharp
public InheritableList(IEnumerable<T> collection)
```

#### Parameters

`collection` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<T\>

## Properties

### this\[int\]

```csharp
public T this[int index] { get; set; }
```

#### Property Value

 T

## Methods

### Add\(T\)

```csharp
public void Add(T item)
```

#### Parameters

`item` T

### AddRange\(IEnumerable<T\>\)

```csharp
public void AddRange(IEnumerable<T> collection)
```

#### Parameters

`collection` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<T\>

### Clear\(\)

```csharp
public void Clear()
```

### ClearItems\(\)

```csharp
protected virtual void ClearItems()
```

### Insert\(int, T\)

```csharp
public void Insert(int index, T item)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`item` T

### InsertItem\(int, T\)

```csharp
protected virtual void InsertItem(int index, T item)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`item` T

### InsertRange\(int, IEnumerable<T\>\)

```csharp
public void InsertRange(int index, IEnumerable<T> collection)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`collection` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<T\>

### Remove\(T\)

```csharp
public bool Remove(T item)
```

#### Parameters

`item` T

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### RemoveAll\(Predicate<T\>\)

```csharp
public int RemoveAll(Predicate<T> match)
```

#### Parameters

`match` [Predicate](https://learn.microsoft.com/dotnet/api/system.predicate\-1)<T\>

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### RemoveAt\(int\)

```csharp
public void RemoveAt(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### RemoveItem\(int\)

```csharp
protected virtual void RemoveItem(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### RemoveRange\(int, int\)

```csharp
public void RemoveRange(int index, int count)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`count` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SetItem\(int, T\)

```csharp
protected virtual void SetItem(int index, T item)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`item` T


