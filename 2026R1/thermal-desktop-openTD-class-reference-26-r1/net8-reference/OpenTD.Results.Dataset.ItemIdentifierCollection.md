# <a id="OpenTD_Results_Dataset_ItemIdentifierCollection"></a> Class ItemIdentifierCollection

Namespace: [OpenTD.Results.Dataset](OpenTD.Results.Dataset.md)  
Assembly: OpenTD.Results.dll  

Collection of ItemIdentifiers

```csharp
public class ItemIdentifierCollection : IList<ItemIdentifier>, ICollection<ItemIdentifier>, IEnumerable<ItemIdentifier>, IEnumerable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ItemIdentifierCollection](OpenTD.Results.Dataset.ItemIdentifierCollection.md)

#### Implements

[IList<ItemIdentifier\>](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1), 
[ICollection<ItemIdentifier\>](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1), 
[IEnumerable<ItemIdentifier\>](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1), 
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

### <a id="OpenTD_Results_Dataset_ItemIdentifierCollection__ctor_System_Collections_Generic_IEnumerable_OpenTD_Results_Dataset_ItemIdentifier__"></a> ItemIdentifierCollection\(IEnumerable<ItemIdentifier\>\)

```csharp
public ItemIdentifierCollection(IEnumerable<ItemIdentifier> collection)
```

#### Parameters

`collection` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[ItemIdentifier](OpenTD.Results.Dataset.ItemIdentifier.md)\>

### <a id="OpenTD_Results_Dataset_ItemIdentifierCollection__ctor"></a> ItemIdentifierCollection\(\)

```csharp
public ItemIdentifierCollection()
```

### <a id="OpenTD_Results_Dataset_ItemIdentifierCollection__ctor_System_String_OpenTD_ThermalDesktop_"></a> ItemIdentifierCollection\(string, ThermalDesktop\)

Initializes a new instance of the <xref href="OpenTD.Results.Dataset.ItemIdentifierCollection" data-throw-if-not-resolved="false"></xref> class with
node names from a domain.

```csharp
public ItemIdentifierCollection(string domainName, ThermalDesktop td)
```

#### Parameters

`domainName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`td` ThermalDesktop

### <a id="OpenTD_Results_Dataset_ItemIdentifierCollection__ctor_OpenTD_Results_Dataset_DataTypes_System_String_OpenTD_Results_Dataset_IDataset_"></a> ItemIdentifierCollection\(DataTypes, string, IDataset\)

Initializes a new instance of the <xref href="OpenTD.Results.Dataset.ItemIdentifierCollection" data-throw-if-not-resolved="false"></xref> class with
entity names (conductors, nodes, lumps, etc.) from a DataSet.

```csharp
public ItemIdentifierCollection(DataTypes dataType, string submodelName, IDataset dataset)
```

#### Parameters

`dataType` [DataTypes](OpenTD.Results.Dataset.DataTypes.md)

`submodelName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`dataset` [IDataset](OpenTD.Results.Dataset.IDataset.md)

### <a id="OpenTD_Results_Dataset_ItemIdentifierCollection__ctor_System_Collections_Generic_IEnumerable_System_String__"></a> ItemIdentifierCollection\(IEnumerable<string\>\)

```csharp
public ItemIdentifierCollection(IEnumerable<string> dataItemNames)
```

#### Parameters

`dataItemNames` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="OpenTD_Results_Dataset_ItemIdentifierCollection__ctor_System_String___"></a> ItemIdentifierCollection\(params string\[\]\)

```csharp
public ItemIdentifierCollection(params string[] sindaNames)
```

#### Parameters

`sindaNames` [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

## Properties

### <a id="OpenTD_Results_Dataset_ItemIdentifierCollection_AutoCommenter"></a> AutoCommenter

```csharp
protected AutoCommenter AutoCommenter { get; set; }
```

#### Property Value

 AutoCommenter

### <a id="OpenTD_Results_Dataset_ItemIdentifierCollection_AutoNamer"></a> AutoNamer

```csharp
protected AutoNamer AutoNamer { get; set; }
```

#### Property Value

 AutoNamer

### <a id="OpenTD_Results_Dataset_ItemIdentifierCollection_Comment"></a> Comment

```csharp
public string Comment { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_Results_Dataset_ItemIdentifierCollection_Count"></a> Count

Gets the number of elements contained in the <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref>.

```csharp
public int Count { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_Results_Dataset_ItemIdentifierCollection_Id"></a> Id

If all the ItemIdentifiers in the collection have the same Id, this will
equal that. Otherwise this will be -1.

```csharp
public long Id { get; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="OpenTD_Results_Dataset_ItemIdentifierCollection_InternalSuggestedComment"></a> InternalSuggestedComment

```csharp
public string InternalSuggestedComment { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_Results_Dataset_ItemIdentifierCollection_InternalSuggestedName"></a> InternalSuggestedName

```csharp
public string InternalSuggestedName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_Results_Dataset_ItemIdentifierCollection_IsReadOnly"></a> IsReadOnly

Gets a value indicating whether the <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref> is read-only.

```csharp
public bool IsReadOnly { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_Results_Dataset_ItemIdentifierCollection_Name"></a> Name

```csharp
public string Name { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_Results_Dataset_ItemIdentifierCollection_RecordNum"></a> RecordNum

If all the ItemRecordNumentifiers in the collection have the same RecordNum, this will
equal that. Otherwise this will be -1.

```csharp
public long RecordNum { get; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="OpenTD_Results_Dataset_ItemIdentifierCollection_RegisterName"></a> RegisterName

If all the ItemIdentifiers in the collection have the same RegisterName, this will
equal that. Otherwise this will be null.

```csharp
public string RegisterName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_Results_Dataset_ItemIdentifierCollection_Submodel"></a> Submodel

If all the ItemIdentifiers in the collection have the same Submodel, this will
equal that. Otherwise this will be null.

```csharp
public string Submodel { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_Results_Dataset_ItemIdentifierCollection_Type"></a> Type

If all the ItemIdentifiers in the collection have the same Type, this will
equal that. Otherwise this will be NOT_SET.

```csharp
public ItemIdentifier.Types Type { get; }
```

#### Property Value

 [ItemIdentifier](OpenTD.Results.Dataset.ItemIdentifier.md).[Types](OpenTD.Results.Dataset.ItemIdentifier.Types.md)

### <a id="OpenTD_Results_Dataset_ItemIdentifierCollection_Item_System_Int32_"></a> this\[int\]

Gets or sets the element at the specified index.

```csharp
public ItemIdentifier this[int index] { get; set; }
```

#### Property Value

 [ItemIdentifier](OpenTD.Results.Dataset.ItemIdentifier.md)

#### Exceptions

 [ArgumentOutOfRangeException](https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception)

<code class="paramref">index</code> is not a valid index in the <xref href="System.Collections.Generic.IList%601" data-throw-if-not-resolved="false"></xref>.

 [NotSupportedException](https://learn.microsoft.com/dotnet/api/system.notsupportedexception)

The property is set and the <xref href="System.Collections.Generic.IList%601" data-throw-if-not-resolved="false"></xref> is read-only.

## Methods

### <a id="OpenTD_Results_Dataset_ItemIdentifierCollection_Add_OpenTD_Results_Dataset_ItemIdentifier_"></a> Add\(ItemIdentifier\)

Adds an item to the <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref>.

```csharp
public void Add(ItemIdentifier item)
```

#### Parameters

`item` [ItemIdentifier](OpenTD.Results.Dataset.ItemIdentifier.md)

The object to add to the <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref>.

#### Exceptions

 [NotSupportedException](https://learn.microsoft.com/dotnet/api/system.notsupportedexception)

The <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref> is read-only.

### <a id="OpenTD_Results_Dataset_ItemIdentifierCollection_AddRange_System_Collections_Generic_IEnumerable_OpenTD_Results_Dataset_ItemIdentifier__"></a> AddRange\(IEnumerable<ItemIdentifier\>\)

```csharp
public void AddRange(IEnumerable<ItemIdentifier> collection)
```

#### Parameters

`collection` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[ItemIdentifier](OpenTD.Results.Dataset.ItemIdentifier.md)\>

### <a id="OpenTD_Results_Dataset_ItemIdentifierCollection_Clear"></a> Clear\(\)

Removes all items from the <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref>.

```csharp
public void Clear()
```

#### Exceptions

 [NotSupportedException](https://learn.microsoft.com/dotnet/api/system.notsupportedexception)

The <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref> is read-only.

### <a id="OpenTD_Results_Dataset_ItemIdentifierCollection_Contains_OpenTD_Results_Dataset_ItemIdentifier_"></a> Contains\(ItemIdentifier\)

Determines whether the <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref> contains a specific value.

```csharp
public bool Contains(ItemIdentifier item)
```

#### Parameters

`item` [ItemIdentifier](OpenTD.Results.Dataset.ItemIdentifier.md)

The object to locate in the <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref>.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if <code class="paramref">item</code> is found in the <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref>; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### <a id="OpenTD_Results_Dataset_ItemIdentifierCollection_CopyTo_OpenTD_Results_Dataset_ItemIdentifier___System_Int32_"></a> CopyTo\(ItemIdentifier\[\], int\)

Copies the elements of the <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref> to an <xref href="System.Array" data-throw-if-not-resolved="false"></xref>, starting at a particular <xref href="System.Array" data-throw-if-not-resolved="false"></xref> index.

```csharp
public void CopyTo(ItemIdentifier[] array, int arrayIndex)
```

#### Parameters

`array` [ItemIdentifier](OpenTD.Results.Dataset.ItemIdentifier.md)\[\]

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

### <a id="OpenTD_Results_Dataset_ItemIdentifierCollection_GetEnumerator"></a> GetEnumerator\(\)

Returns an enumerator that iterates through the collection.

```csharp
public IEnumerator<ItemIdentifier> GetEnumerator()
```

#### Returns

 [IEnumerator](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerator\-1)<[ItemIdentifier](OpenTD.Results.Dataset.ItemIdentifier.md)\>

An enumerator that can be used to iterate through the collection.

### <a id="OpenTD_Results_Dataset_ItemIdentifierCollection_GetSelfSuggestedComment"></a> GetSelfSuggestedComment\(\)

```csharp
protected virtual string GetSelfSuggestedComment()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_Results_Dataset_ItemIdentifierCollection_GetSelfSuggestedName"></a> GetSelfSuggestedName\(\)

```csharp
protected virtual string GetSelfSuggestedName()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_Results_Dataset_ItemIdentifierCollection_IndexOf_OpenTD_Results_Dataset_ItemIdentifier_"></a> IndexOf\(ItemIdentifier\)

Determines the index of a specific item in the <xref href="System.Collections.Generic.IList%601" data-throw-if-not-resolved="false"></xref>.

```csharp
public int IndexOf(ItemIdentifier item)
```

#### Parameters

`item` [ItemIdentifier](OpenTD.Results.Dataset.ItemIdentifier.md)

The object to locate in the <xref href="System.Collections.Generic.IList%601" data-throw-if-not-resolved="false"></xref>.

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

The index of <code class="paramref">item</code> if found in the list; otherwise, -1.

### <a id="OpenTD_Results_Dataset_ItemIdentifierCollection_Insert_System_Int32_OpenTD_Results_Dataset_ItemIdentifier_"></a> Insert\(int, ItemIdentifier\)

Inserts an item to the <xref href="System.Collections.Generic.IList%601" data-throw-if-not-resolved="false"></xref> at the specified index.

```csharp
public void Insert(int index, ItemIdentifier item)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The zero-based index at which <code class="paramref">item</code> should be inserted.

`item` [ItemIdentifier](OpenTD.Results.Dataset.ItemIdentifier.md)

The object to insert into the <xref href="System.Collections.Generic.IList%601" data-throw-if-not-resolved="false"></xref>.

#### Exceptions

 [ArgumentOutOfRangeException](https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception)

<code class="paramref">index</code> is not a valid index in the <xref href="System.Collections.Generic.IList%601" data-throw-if-not-resolved="false"></xref>.

 [NotSupportedException](https://learn.microsoft.com/dotnet/api/system.notsupportedexception)

The <xref href="System.Collections.Generic.IList%601" data-throw-if-not-resolved="false"></xref> is read-only.

### <a id="OpenTD_Results_Dataset_ItemIdentifierCollection_InsertRange_System_Int32_System_Collections_Generic_IEnumerable_OpenTD_Results_Dataset_ItemIdentifier__"></a> InsertRange\(int, IEnumerable<ItemIdentifier\>\)

```csharp
public void InsertRange(int index, IEnumerable<ItemIdentifier> collection)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`collection` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[ItemIdentifier](OpenTD.Results.Dataset.ItemIdentifier.md)\>

### <a id="OpenTD_Results_Dataset_ItemIdentifierCollection_Remove_OpenTD_Results_Dataset_ItemIdentifier_"></a> Remove\(ItemIdentifier\)

Removes the first occurrence of a specific object from the <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref>.

```csharp
public bool Remove(ItemIdentifier item)
```

#### Parameters

`item` [ItemIdentifier](OpenTD.Results.Dataset.ItemIdentifier.md)

The object to remove from the <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref>.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if <code class="paramref">item</code> was successfully removed from the <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref>; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>. This method also returns <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a> if <code class="paramref">item</code> is not found in the original <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref>.

#### Exceptions

 [NotSupportedException](https://learn.microsoft.com/dotnet/api/system.notsupportedexception)

The <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref> is read-only.

### <a id="OpenTD_Results_Dataset_ItemIdentifierCollection_RemoveAt_System_Int32_"></a> RemoveAt\(int\)

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

### <a id="OpenTD_Results_Dataset_ItemIdentifierCollection_RemoveRange_System_Int32_System_Int32_"></a> RemoveRange\(int, int\)

```csharp
public void RemoveRange(int index, int count)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`count` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_Results_Dataset_ItemIdentifierCollection_ToString"></a> ToString\(\)

Returns a string that represents the current object.

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

A string that represents the current object.

