# <a id="OpenTD_Results_Dataset_DataItemIdentifierCollection"></a> Class DataItemIdentifierCollection

Namespace: [OpenTD.Results.Dataset](OpenTD.Results.Dataset.md)  
Assembly: OpenTD.Results.dll  

Collection of DataItemIdentifiers

```csharp
public class DataItemIdentifierCollection : IList<DataItemIdentifier>, ICollection<DataItemIdentifier>, IEnumerable<DataItemIdentifier>, IEnumerable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DataItemIdentifierCollection](OpenTD.Results.Dataset.DataItemIdentifierCollection.md)

#### Implements

[IList<DataItemIdentifier\>](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1), 
[ICollection<DataItemIdentifier\>](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1), 
[IEnumerable<DataItemIdentifier\>](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1), 
[IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.ienumerable)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="OpenTD_Results_Dataset_DataItemIdentifierCollection__ctor_System_Collections_Generic_IEnumerable_OpenTD_Results_Dataset_DataItemIdentifier__"></a> DataItemIdentifierCollection\(IEnumerable<DataItemIdentifier\>\)

```csharp
public DataItemIdentifierCollection(IEnumerable<DataItemIdentifier> collection)
```

#### Parameters

`collection` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[DataItemIdentifier](OpenTD.Results.Dataset.DataItemIdentifier.md)\>

### <a id="OpenTD_Results_Dataset_DataItemIdentifierCollection__ctor"></a> DataItemIdentifierCollection\(\)

```csharp
public DataItemIdentifierCollection()
```

### <a id="OpenTD_Results_Dataset_DataItemIdentifierCollection__ctor_OpenTD_Results_Dataset_ItemIdentifierCollection_System_Collections_Generic_List_OpenTD_Results_Dataset_DataSubtype__System_Boolean_"></a> DataItemIdentifierCollection\(ItemIdentifierCollection, List<DataSubtype\>, bool\)

```csharp
public DataItemIdentifierCollection(ItemIdentifierCollection items, List<DataSubtype> subtypes, bool createAllCombinations = true)
```

#### Parameters

`items` [ItemIdentifierCollection](OpenTD.Results.Dataset.ItemIdentifierCollection.md)

`subtypes` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[DataSubtype](OpenTD.Results.Dataset.DataSubtype.md)\>

`createAllCombinations` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_Results_Dataset_DataItemIdentifierCollection__ctor_OpenTD_Results_Dataset_ItemIdentifierCollection_OpenTD_Results_Dataset_DataSubtype_"></a> DataItemIdentifierCollection\(ItemIdentifierCollection, DataSubtype\)

```csharp
public DataItemIdentifierCollection(ItemIdentifierCollection items, DataSubtype subtype)
```

#### Parameters

`items` [ItemIdentifierCollection](OpenTD.Results.Dataset.ItemIdentifierCollection.md)

`subtype` [DataSubtype](OpenTD.Results.Dataset.DataSubtype.md)

### <a id="OpenTD_Results_Dataset_DataItemIdentifierCollection__ctor_System_Collections_Generic_IEnumerable_System_String__"></a> DataItemIdentifierCollection\(IEnumerable<string\>\)

```csharp
public DataItemIdentifierCollection(IEnumerable<string> dataItemNames)
```

#### Parameters

`dataItemNames` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="OpenTD_Results_Dataset_DataItemIdentifierCollection__ctor_System_String___"></a> DataItemIdentifierCollection\(params string\[\]\)

```csharp
public DataItemIdentifierCollection(params string[] sindaNames)
```

#### Parameters

`sindaNames` [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

## Properties

### <a id="OpenTD_Results_Dataset_DataItemIdentifierCollection_AutoNamer"></a> AutoNamer

```csharp
protected AutoNamer AutoNamer { get; set; }
```

#### Property Value

 AutoNamer

### <a id="OpenTD_Results_Dataset_DataItemIdentifierCollection_Count"></a> Count

Gets the number of elements contained in the <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref>.

```csharp
public int Count { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_Results_Dataset_DataItemIdentifierCollection_InternalSuggestedName"></a> InternalSuggestedName

```csharp
public string InternalSuggestedName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_Results_Dataset_DataItemIdentifierCollection_IsReadOnly"></a> IsReadOnly

Gets a value indicating whether the <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref> is read-only.

```csharp
public bool IsReadOnly { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_Results_Dataset_DataItemIdentifierCollection_ItemIdentifiers"></a> ItemIdentifiers

The ItemIdentifiers associated with the DataItemIdentifiers in this collection.

```csharp
public ItemIdentifierCollection ItemIdentifiers { get; }
```

#### Property Value

 [ItemIdentifierCollection](OpenTD.Results.Dataset.ItemIdentifierCollection.md)

### <a id="OpenTD_Results_Dataset_DataItemIdentifierCollection_Name"></a> Name

```csharp
public string Name { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_Results_Dataset_DataItemIdentifierCollection_Subtype"></a> Subtype

If all the DataItemIdentifiers in the collection have the same DataSubtype,
this will equal that. Otherwise this will be null.

```csharp
public DataSubtype Subtype { get; }
```

#### Property Value

 [DataSubtype](OpenTD.Results.Dataset.DataSubtype.md)

### <a id="OpenTD_Results_Dataset_DataItemIdentifierCollection_Item_System_Int32_"></a> this\[int\]

Gets or sets the element at the specified index.

```csharp
public DataItemIdentifier this[int index] { get; set; }
```

#### Property Value

 [DataItemIdentifier](OpenTD.Results.Dataset.DataItemIdentifier.md)

#### Exceptions

 [ArgumentOutOfRangeException](https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception)

<code class="paramref">index</code> is not a valid index in the <xref href="System.Collections.Generic.IList%601" data-throw-if-not-resolved="false"></xref>.

 [NotSupportedException](https://learn.microsoft.com/dotnet/api/system.notsupportedexception)

The property is set and the <xref href="System.Collections.Generic.IList%601" data-throw-if-not-resolved="false"></xref> is read-only.

## Methods

### <a id="OpenTD_Results_Dataset_DataItemIdentifierCollection_Add_OpenTD_Results_Dataset_DataItemIdentifier_"></a> Add\(DataItemIdentifier\)

Adds an item to the <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref>.

```csharp
public void Add(DataItemIdentifier item)
```

#### Parameters

`item` [DataItemIdentifier](OpenTD.Results.Dataset.DataItemIdentifier.md)

The object to add to the <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref>.

#### Exceptions

 [NotSupportedException](https://learn.microsoft.com/dotnet/api/system.notsupportedexception)

The <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref> is read-only.

### <a id="OpenTD_Results_Dataset_DataItemIdentifierCollection_AddRange_System_Collections_Generic_IEnumerable_OpenTD_Results_Dataset_DataItemIdentifier__"></a> AddRange\(IEnumerable<DataItemIdentifier\>\)

```csharp
public void AddRange(IEnumerable<DataItemIdentifier> collection)
```

#### Parameters

`collection` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[DataItemIdentifier](OpenTD.Results.Dataset.DataItemIdentifier.md)\>

### <a id="OpenTD_Results_Dataset_DataItemIdentifierCollection_Clear"></a> Clear\(\)

Removes all items from the <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref>.

```csharp
public void Clear()
```

#### Exceptions

 [NotSupportedException](https://learn.microsoft.com/dotnet/api/system.notsupportedexception)

The <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref> is read-only.

### <a id="OpenTD_Results_Dataset_DataItemIdentifierCollection_Contains_OpenTD_Results_Dataset_DataItemIdentifier_"></a> Contains\(DataItemIdentifier\)

Determines whether the <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref> contains a specific value.

```csharp
public bool Contains(DataItemIdentifier item)
```

#### Parameters

`item` [DataItemIdentifier](OpenTD.Results.Dataset.DataItemIdentifier.md)

The object to locate in the <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref>.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if <code class="paramref">item</code> is found in the <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref>; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### <a id="OpenTD_Results_Dataset_DataItemIdentifierCollection_CopyTo_OpenTD_Results_Dataset_DataItemIdentifier___System_Int32_"></a> CopyTo\(DataItemIdentifier\[\], int\)

Copies the elements of the <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref> to an <xref href="System.Array" data-throw-if-not-resolved="false"></xref>, starting at a particular <xref href="System.Array" data-throw-if-not-resolved="false"></xref> index.

```csharp
public void CopyTo(DataItemIdentifier[] array, int arrayIndex)
```

#### Parameters

`array` [DataItemIdentifier](OpenTD.Results.Dataset.DataItemIdentifier.md)\[\]

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

### <a id="OpenTD_Results_Dataset_DataItemIdentifierCollection_GetEnumerator"></a> GetEnumerator\(\)

Returns an enumerator that iterates through the collection.

```csharp
public IEnumerator<DataItemIdentifier> GetEnumerator()
```

#### Returns

 [IEnumerator](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerator\-1)<[DataItemIdentifier](OpenTD.Results.Dataset.DataItemIdentifier.md)\>

An enumerator that can be used to iterate through the collection.

### <a id="OpenTD_Results_Dataset_DataItemIdentifierCollection_GetSelfSuggestedName"></a> GetSelfSuggestedName\(\)

```csharp
protected virtual string GetSelfSuggestedName()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_Results_Dataset_DataItemIdentifierCollection_IndexOf_OpenTD_Results_Dataset_DataItemIdentifier_"></a> IndexOf\(DataItemIdentifier\)

Determines the index of a specific item in the <xref href="System.Collections.Generic.IList%601" data-throw-if-not-resolved="false"></xref>.

```csharp
public int IndexOf(DataItemIdentifier item)
```

#### Parameters

`item` [DataItemIdentifier](OpenTD.Results.Dataset.DataItemIdentifier.md)

The object to locate in the <xref href="System.Collections.Generic.IList%601" data-throw-if-not-resolved="false"></xref>.

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

The index of <code class="paramref">item</code> if found in the list; otherwise, -1.

### <a id="OpenTD_Results_Dataset_DataItemIdentifierCollection_Insert_System_Int32_OpenTD_Results_Dataset_DataItemIdentifier_"></a> Insert\(int, DataItemIdentifier\)

Inserts an item to the <xref href="System.Collections.Generic.IList%601" data-throw-if-not-resolved="false"></xref> at the specified index.

```csharp
public void Insert(int index, DataItemIdentifier item)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The zero-based index at which <code class="paramref">item</code> should be inserted.

`item` [DataItemIdentifier](OpenTD.Results.Dataset.DataItemIdentifier.md)

The object to insert into the <xref href="System.Collections.Generic.IList%601" data-throw-if-not-resolved="false"></xref>.

#### Exceptions

 [ArgumentOutOfRangeException](https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception)

<code class="paramref">index</code> is not a valid index in the <xref href="System.Collections.Generic.IList%601" data-throw-if-not-resolved="false"></xref>.

 [NotSupportedException](https://learn.microsoft.com/dotnet/api/system.notsupportedexception)

The <xref href="System.Collections.Generic.IList%601" data-throw-if-not-resolved="false"></xref> is read-only.

### <a id="OpenTD_Results_Dataset_DataItemIdentifierCollection_InsertRange_System_Int32_System_Collections_Generic_IEnumerable_OpenTD_Results_Dataset_DataItemIdentifier__"></a> InsertRange\(int, IEnumerable<DataItemIdentifier\>\)

```csharp
public void InsertRange(int index, IEnumerable<DataItemIdentifier> collection)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`collection` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[DataItemIdentifier](OpenTD.Results.Dataset.DataItemIdentifier.md)\>

### <a id="OpenTD_Results_Dataset_DataItemIdentifierCollection_Remove_OpenTD_Results_Dataset_DataItemIdentifier_"></a> Remove\(DataItemIdentifier\)

Removes the first occurrence of a specific object from the <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref>.

```csharp
public bool Remove(DataItemIdentifier item)
```

#### Parameters

`item` [DataItemIdentifier](OpenTD.Results.Dataset.DataItemIdentifier.md)

The object to remove from the <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref>.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if <code class="paramref">item</code> was successfully removed from the <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref>; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>. This method also returns <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a> if <code class="paramref">item</code> is not found in the original <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref>.

#### Exceptions

 [NotSupportedException](https://learn.microsoft.com/dotnet/api/system.notsupportedexception)

The <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref> is read-only.

### <a id="OpenTD_Results_Dataset_DataItemIdentifierCollection_RemoveAt_System_Int32_"></a> RemoveAt\(int\)

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

### <a id="OpenTD_Results_Dataset_DataItemIdentifierCollection_RemoveRange_System_Int32_System_Int32_"></a> RemoveRange\(int, int\)

```csharp
public void RemoveRange(int index, int count)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`count` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_Results_Dataset_DataItemIdentifierCollection_ToString"></a> ToString\(\)

Returns a string that represents the current object.

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

A string that represents the current object.

