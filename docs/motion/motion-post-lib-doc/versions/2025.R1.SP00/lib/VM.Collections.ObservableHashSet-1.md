#  Class ObservableHashSet<T\>

Namespace: [VM.Collections](VM.Collections.md)  
Assembly: VM.dll  

Represents an observable set of values.

```csharp
public sealed class ObservableHashSet<T> : HashSet<T>
```

#### Type Parameters

`T` 

The type of elements in the hash set.

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[HashSet<T\>](https://learn.microsoft.com/dotnet/api/system.collections.generic.hashset\-1) ← 
[ObservableHashSet<T\>](VM.Collections.ObservableHashSet\-1.md)

## Constructors

### <a id="VM_Collections_ObservableHashSet_1__ctor"></a> ObservableHashSet\(\)

```csharp
public ObservableHashSet()
```

### <a id="VM_Collections_ObservableHashSet_1__ctor_System_Collections_Generic_IEnumerable__0__"></a> ObservableHashSet\(IEnumerable<T\>\)

```csharp
public ObservableHashSet(IEnumerable<T> collection)
```

#### Parameters

`collection` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<T\>

### <a id="VM_Collections_ObservableHashSet_1__ctor_System_Collections_Generic_IEqualityComparer__0__"></a> ObservableHashSet\(IEqualityComparer<T\>\)

```csharp
public ObservableHashSet(IEqualityComparer<T> comparer)
```

#### Parameters

`comparer` [IEqualityComparer](https://learn.microsoft.com/dotnet/api/system.collections.generic.iequalitycomparer\-1)<T\>

### <a id="VM_Collections_ObservableHashSet_1__ctor_System_Collections_Generic_IEnumerable__0__System_Collections_Generic_IEqualityComparer__0__"></a> ObservableHashSet\(IEnumerable<T\>, IEqualityComparer<T\>\)

```csharp
public ObservableHashSet(IEnumerable<T> collection, IEqualityComparer<T> comparer)
```

#### Parameters

`collection` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<T\>

`comparer` [IEqualityComparer](https://learn.microsoft.com/dotnet/api/system.collections.generic.iequalitycomparer\-1)<T\>

## Methods

### <a id="VM_Collections_ObservableHashSet_1_Add__0_"></a> Add\(T\)

Adds the specified element to a set.

```csharp
public bool Add(T item)
```

#### Parameters

`item` T

The element to add to the set.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

true if the element is added to the <xref href="VM.Collections.ObservableHashSet%601" data-throw-if-not-resolved="false"></xref> object; false if the element is already present.

### <a id="VM_Collections_ObservableHashSet_1_Clear"></a> Clear\(\)

Removes all elements from a <xref href="VM.Collections.ObservableHashSet%601" data-throw-if-not-resolved="false"></xref> object.

```csharp
public void Clear()
```

### <a id="VM_Collections_ObservableHashSet_1_Dispose"></a> Dispose\(\)

```csharp
public void Dispose()
```

### <a id="VM_Collections_ObservableHashSet_1_ExceptWith_System_Collections_Generic_IEnumerable__0__"></a> ExceptWith\(IEnumerable<T\>\)

Removes all elements in the specified collection from the current <xref href="VM.Collections.ObservableHashSet%601" data-throw-if-not-resolved="false"></xref> object.

```csharp
public void ExceptWith(IEnumerable<T> other)
```

#### Parameters

`other` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<T\>

The collection of items to remove from the <xref href="VM.Collections.ObservableHashSet%601" data-throw-if-not-resolved="false"></xref> object.

### <a id="VM_Collections_ObservableHashSet_1_IntersectWith_System_Collections_Generic_IEnumerable__0__"></a> IntersectWith\(IEnumerable<T\>\)

Modifies the current <xref href="VM.Collections.ObservableHashSet%601" data-throw-if-not-resolved="false"></xref> object to contain only elements that are present in that object and in the specified collection.

```csharp
public void IntersectWith(IEnumerable<T> other)
```

#### Parameters

`other` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<T\>

The collection to compare to the current <xref href="VM.Collections.ObservableHashSet%601" data-throw-if-not-resolved="false"></xref> object.

### <a id="VM_Collections_ObservableHashSet_1_Remove__0_"></a> Remove\(T\)

Removes the specified element from a <xref href="VM.Collections.ObservableHashSet%601" data-throw-if-not-resolved="false"></xref> object.

```csharp
public bool Remove(T item)
```

#### Parameters

`item` T

The element to remove.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

true if the element is successfully found and removed; otherwise, false. This method returns false if item is not found in the <xref href="VM.Collections.ObservableHashSet%601" data-throw-if-not-resolved="false"></xref> object.

### <a id="VM_Collections_ObservableHashSet_1_Reset"></a> Reset\(\)

```csharp
public void Reset()
```

### <a id="VM_Collections_ObservableHashSet_1_SymmetricExceptWith_System_Collections_Generic_IEnumerable__0__"></a> SymmetricExceptWith\(IEnumerable<T\>\)

Modifies the current <xref href="VM.Collections.ObservableHashSet%601" data-throw-if-not-resolved="false"></xref> object to contain only elements that are present either in that object or in the specified collection, but not both.

```csharp
public void SymmetricExceptWith(IEnumerable<T> other)
```

#### Parameters

`other` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<T\>

The collection to compare to the current <xref href="VM.Collections.ObservableHashSet%601" data-throw-if-not-resolved="false"></xref> object.

### <a id="VM_Collections_ObservableHashSet_1_UnionWith_System_Collections_Generic_IEnumerable__0__"></a> UnionWith\(IEnumerable<T\>\)

Modifies the current <xref href="VM.Collections.ObservableHashSet%601" data-throw-if-not-resolved="false"></xref> object to contain all elements that are present in itself, the specified collection, or both.

```csharp
public void UnionWith(IEnumerable<T> other)
```

#### Parameters

`other` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<T\>

The collection to compare to the current <xref href="VM.Collections.ObservableHashSet%601" data-throw-if-not-resolved="false"></xref> object.

### <a id="VM_Collections_ObservableHashSet_1_CollectionChanged"></a> CollectionChanged

```csharp
public event NotifyCollectionChangedEventHandler CollectionChanged
```

#### Event Type

 [NotifyCollectionChangedEventHandler](https://learn.microsoft.com/dotnet/api/system.collections.specialized.notifycollectionchangedeventhandler)

