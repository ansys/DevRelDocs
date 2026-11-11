# Class CompareSuite

Namespace: [OpenTD.Results.Dataset](OpenTD.Results.Dataset.md)  
Assembly: OpenTD.Results.dll  

Use a CompareSuite to test whether multiple pairs of Datasets are equal or not. 
Tests a set of CompareAssertions and collects the results.

```csharp
public class CompareSuite : IList<CompareAssertion>, ICollection<CompareAssertion>, IEnumerable<CompareAssertion>, IEnumerable
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CompareSuite](OpenTD.Results.Dataset.CompareSuite.md)

## Implements

[IList<CompareAssertion\>](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1), 
[ICollection<CompareAssertion\>](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1), 
[IEnumerable<CompareAssertion\>](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1), 
[IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.ienumerable)

## Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### Count

Gets the number of elements contained in the <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref>.

```csharp
public int Count { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### IsReadOnly

Gets a value indicating whether the <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref> is read-only.

```csharp
public bool IsReadOnly { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Log

```csharp
public string Log { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### Message

```csharp
public string Message { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### this\[int\]

Gets or sets the element at the specified index.

```csharp
public CompareAssertion this[int index] { get; set; }
```

#### Property Value

 [CompareAssertion](OpenTD.Results.Dataset.CompareAssertion.md)

#### Exceptions

 [ArgumentOutOfRangeException](https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception)

<code class="paramref">index</code> is not a valid index in the <xref href="System.Collections.Generic.IList%601" data-throw-if-not-resolved="false"></xref>.

 [NotSupportedException](https://learn.microsoft.com/dotnet/api/system.notsupportedexception)

The property is set and the <xref href="System.Collections.Generic.IList%601" data-throw-if-not-resolved="false"></xref> is read-only.

## Methods

### Add\(IDataset, IDataset, bool\)

```csharp
public void Add(IDataset a, IDataset b, bool assertDatasetsSame)
```

#### Parameters

`a` [IDataset](OpenTD.Results.Dataset.IDataset.md)

`b` [IDataset](OpenTD.Results.Dataset.IDataset.md)

`assertDatasetsSame` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Add\(CompareAssertion\)

Adds an item to the <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref>.

```csharp
public void Add(CompareAssertion item)
```

#### Parameters

`item` [CompareAssertion](OpenTD.Results.Dataset.CompareAssertion.md)

The object to add to the <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref>.

#### Exceptions

 [NotSupportedException](https://learn.microsoft.com/dotnet/api/system.notsupportedexception)

The <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref> is read-only.

### Clear\(\)

Removes all items from the <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref>.

```csharp
public void Clear()
```

#### Exceptions

 [NotSupportedException](https://learn.microsoft.com/dotnet/api/system.notsupportedexception)

The <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref> is read-only.

### Contains\(CompareAssertion\)

Determines whether the <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref> contains a specific value.

```csharp
public bool Contains(CompareAssertion item)
```

#### Parameters

`item` [CompareAssertion](OpenTD.Results.Dataset.CompareAssertion.md)

The object to locate in the <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref>.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

[true](https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool) if <code class="paramref">item</code> is found in the <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref>; otherwise, [false](https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool).

### CopyTo\(CompareAssertion\[\], int\)

Copies the elements of the <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref> to an <xref href="System.Array" data-throw-if-not-resolved="false"></xref>, starting at a particular <xref href="System.Array" data-throw-if-not-resolved="false"></xref> index.

```csharp
public void CopyTo(CompareAssertion[] array, int arrayIndex)
```

#### Parameters

`array` [CompareAssertion](OpenTD.Results.Dataset.CompareAssertion.md)\[\]

The one-dimensional <xref href="System.Array" data-throw-if-not-resolved="false"></xref> that is the destination of the elements copied from <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref>. The <xref href="System.Array" data-throw-if-not-resolved="false"></xref> must have zero-based indexing.

`arrayIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The zero-based index in <code class="paramref">array</code> at which copying begins.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

<code class="paramref">array</code> is [null](https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null).

 [ArgumentOutOfRangeException](https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception)

<code class="paramref">arrayIndex</code> is less than 0.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

The number of elements in the source <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref> is greater than the available space from <code class="paramref">arrayIndex</code> to the end of the destination <code class="paramref">array</code>.

### GetEnumerator\(\)

Returns an enumerator that iterates through the collection.

```csharp
public IEnumerator<CompareAssertion> GetEnumerator()
```

#### Returns

 [IEnumerator](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerator\-1)<[CompareAssertion](OpenTD.Results.Dataset.CompareAssertion.md)\>

An enumerator that can be used to iterate through the collection.

### IndexOf\(CompareAssertion\)

Determines the index of a specific item in the <xref href="System.Collections.Generic.IList%601" data-throw-if-not-resolved="false"></xref>.

```csharp
public int IndexOf(CompareAssertion item)
```

#### Parameters

`item` [CompareAssertion](OpenTD.Results.Dataset.CompareAssertion.md)

The object to locate in the <xref href="System.Collections.Generic.IList%601" data-throw-if-not-resolved="false"></xref>.

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

The index of <code class="paramref">item</code> if found in the list; otherwise, -1.

### Insert\(int, CompareAssertion\)

Inserts an item to the <xref href="System.Collections.Generic.IList%601" data-throw-if-not-resolved="false"></xref> at the specified index.

```csharp
public void Insert(int index, CompareAssertion item)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The zero-based index at which <code class="paramref">item</code> should be inserted.

`item` [CompareAssertion](OpenTD.Results.Dataset.CompareAssertion.md)

The object to insert into the <xref href="System.Collections.Generic.IList%601" data-throw-if-not-resolved="false"></xref>.

#### Exceptions

 [ArgumentOutOfRangeException](https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception)

<code class="paramref">index</code> is not a valid index in the <xref href="System.Collections.Generic.IList%601" data-throw-if-not-resolved="false"></xref>.

 [NotSupportedException](https://learn.microsoft.com/dotnet/api/system.notsupportedexception)

The <xref href="System.Collections.Generic.IList%601" data-throw-if-not-resolved="false"></xref> is read-only.

### Remove\(CompareAssertion\)

Removes the first occurrence of a specific object from the <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref>.

```csharp
public bool Remove(CompareAssertion item)
```

#### Parameters

`item` [CompareAssertion](OpenTD.Results.Dataset.CompareAssertion.md)

The object to remove from the <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref>.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

[true](https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool) if <code class="paramref">item</code> was successfully removed from the <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref>; otherwise, [false](https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool). This method also returns [false](https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool) if <code class="paramref">item</code> is not found in the original <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref>.

#### Exceptions

 [NotSupportedException](https://learn.microsoft.com/dotnet/api/system.notsupportedexception)

The <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref> is read-only.

### RemoveAt\(int\)

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

### Run\(\)

```csharp
public Tuple<int, int> Run()
```

#### Returns

 [Tuple](https://learn.microsoft.com/dotnet/api/system.tuple\-2)<[int](https://learn.microsoft.com/dotnet/api/system.int32), [int](https://learn.microsoft.com/dotnet/api/system.int32)\>


