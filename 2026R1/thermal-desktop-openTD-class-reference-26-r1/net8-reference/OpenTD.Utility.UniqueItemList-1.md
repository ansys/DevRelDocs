# <a id="OpenTD_Utility_UniqueItemList_1"></a> Class UniqueItemList<T\>

Namespace: [OpenTD.Utility](OpenTD.Utility.md)  
Assembly: OpenTD.dll  

Acts like a List, except Add and Insert will remove existing items
that equal the added/inserted item (according to its definition of Equals)

```csharp
public class UniqueItemList<T> : IList<T>, ICollection<T>, IEnumerable<T>, IEnumerable
```

#### Type Parameters

`T` 

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[UniqueItemList<T\>](OpenTD.Utility.UniqueItemList\-1.md)

#### Implements

[IList<T\>](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1), 
[ICollection<T\>](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1), 
[IEnumerable<T\>](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1), 
[IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.ienumerable)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="OpenTD_Utility_UniqueItemList_1_Count"></a> Count

Gets the number of elements contained in the <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref>.

```csharp
public int Count { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_Utility_UniqueItemList_1_IsReadOnly"></a> IsReadOnly

Gets a value indicating whether the <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref> is read-only.

```csharp
public bool IsReadOnly { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_Utility_UniqueItemList_1_Item_System_Int32_"></a> this\[int\]

Gets or sets the element at the specified index.

```csharp
public T this[int index] { get; set; }
```

#### Property Value

 T

#### Exceptions

 [ArgumentOutOfRangeException](https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception)

<code class="paramref">index</code> is not a valid index in the <xref href="System.Collections.Generic.IList%601" data-throw-if-not-resolved="false"></xref>.

 [NotSupportedException](https://learn.microsoft.com/dotnet/api/system.notsupportedexception)

The property is set and the <xref href="System.Collections.Generic.IList%601" data-throw-if-not-resolved="false"></xref> is read-only.

## Methods

### <a id="OpenTD_Utility_UniqueItemList_1_Add__0_"></a> Add\(T\)

Will remove any existing item that equals the added item.

```csharp
public void Add(T item)
```

#### Parameters

`item` T

### <a id="OpenTD_Utility_UniqueItemList_1_Clear"></a> Clear\(\)

Removes all items from the <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref>.

```csharp
public void Clear()
```

#### Exceptions

 [NotSupportedException](https://learn.microsoft.com/dotnet/api/system.notsupportedexception)

The <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref> is read-only.

### <a id="OpenTD_Utility_UniqueItemList_1_Contains__0_"></a> Contains\(T\)

Determines whether the <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref> contains a specific value.

```csharp
public bool Contains(T item)
```

#### Parameters

`item` T

The object to locate in the <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref>.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if <code class="paramref">item</code> is found in the <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref>; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### <a id="OpenTD_Utility_UniqueItemList_1_CopyTo__0___System_Int32_"></a> CopyTo\(T\[\], int\)

Copies the elements of the <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref> to an <xref href="System.Array" data-throw-if-not-resolved="false"></xref>, starting at a particular <xref href="System.Array" data-throw-if-not-resolved="false"></xref> index.

```csharp
public void CopyTo(T[] array, int arrayIndex)
```

#### Parameters

`array` T\[\]

The one-dimensional <xref href="System.Array" data-throw-if-not-resolved="false"></xref> that is the destination of the elements copied from <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref>. The <xref href="System.Array" data-throw-if-not-resolved="false"></xref> must have zero-based indexing.

`arrayIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The zero-based index in <code class="paramref">array</code> at which copying begins.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

<code class="paramref">array</code> is <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a>.

 [ArgumentOutOfRangeException](https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception)

<code class="paramref">arrayIndex</code> is less than 0.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

The number of elements in the source <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref> is greater than the available space from <code class="paramref">arrayIndex</code> to the end of the destination <code class="paramref">array</code>.

### <a id="OpenTD_Utility_UniqueItemList_1_GetEnumerator"></a> GetEnumerator\(\)

Returns an enumerator that iterates through the collection.

```csharp
public IEnumerator<T> GetEnumerator()
```

#### Returns

 [IEnumerator](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerator\-1)<T\>

An enumerator that can be used to iterate through the collection.

### <a id="OpenTD_Utility_UniqueItemList_1_IndexOf__0_"></a> IndexOf\(T\)

Determines the index of a specific item in the <xref href="System.Collections.Generic.IList%601" data-throw-if-not-resolved="false"></xref>.

```csharp
public int IndexOf(T item)
```

#### Parameters

`item` T

The object to locate in the <xref href="System.Collections.Generic.IList%601" data-throw-if-not-resolved="false"></xref>.

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

The index of <code class="paramref">item</code> if found in the list; otherwise, -1.

### <a id="OpenTD_Utility_UniqueItemList_1_Insert_System_Int32__0_"></a> Insert\(int, T\)

Will remove any existing item that equals the inserted item.

```csharp
public void Insert(int index, T item)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`item` T

### <a id="OpenTD_Utility_UniqueItemList_1_Remove__0_"></a> Remove\(T\)

Removes the first occurrence of a specific object from the <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref>.

```csharp
public bool Remove(T item)
```

#### Parameters

`item` T

The object to remove from the <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref>.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if <code class="paramref">item</code> was successfully removed from the <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref>; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>. This method also returns <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a> if <code class="paramref">item</code> is not found in the original <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref>.

#### Exceptions

 [NotSupportedException](https://learn.microsoft.com/dotnet/api/system.notsupportedexception)

The <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref> is read-only.

### <a id="OpenTD_Utility_UniqueItemList_1_RemoveAll_System_Predicate__0__"></a> RemoveAll\(Predicate<T\>\)

```csharp
public int RemoveAll(Predicate<T> match)
```

#### Parameters

`match` [Predicate](https://learn.microsoft.com/dotnet/api/system.predicate\-1)<T\>

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_Utility_UniqueItemList_1_RemoveAt_System_Int32_"></a> RemoveAt\(int\)

Removes the <xref href="System.Collections.Generic.IList%601" data-throw-if-not-resolved="false"></xref> item at the specified index.

```csharp
public void RemoveAt(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The zero-based index of the item to remove.

#### Exceptions

 [ArgumentOutOfRangeException](https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception)

<code class="paramref">index</code> is not a valid index in the <xref href="System.Collections.Generic.IList%601" data-throw-if-not-resolved="false"></xref>.

 [NotSupportedException](https://learn.microsoft.com/dotnet/api/system.notsupportedexception)

The <xref href="System.Collections.Generic.IList%601" data-throw-if-not-resolved="false"></xref> is read-only.

