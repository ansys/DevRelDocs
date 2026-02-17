# <a id="OpenTD_Results_Dataset_DataArrayCollection"></a> Class DataArrayCollection

Namespace: [OpenTD.Results.Dataset](OpenTD.Results.Dataset.md)  
Assembly: OpenTD.Results.dll  

A collection of DataArrays, with some metadata describing them.

```csharp
public class DataArrayCollection : IList<DataArray>, ICollection<DataArray>, IEnumerable<DataArray>, IEnumerable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DataArrayCollection](OpenTD.Results.Dataset.DataArrayCollection.md)

#### Implements

[IList<DataArray\>](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1), 
[ICollection<DataArray\>](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1), 
[IEnumerable<DataArray\>](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1), 
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

### <a id="OpenTD_Results_Dataset_DataArrayCollection__ctor"></a> DataArrayCollection\(\)

```csharp
public DataArrayCollection()
```

### <a id="OpenTD_Results_Dataset_DataArrayCollection__ctor_System_Collections_Generic_IEnumerable_OpenTD_Results_Dataset_DataArray__"></a> DataArrayCollection\(IEnumerable<DataArray\>\)

```csharp
public DataArrayCollection(IEnumerable<DataArray> collection)
```

#### Parameters

`collection` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[DataArray](OpenTD.Results.Dataset.DataArray.md)\>

### <a id="OpenTD_Results_Dataset_DataArrayCollection__ctor_OpenTD_Results_Dataset_StandardDataSubtypes_System_Collections_Generic_IEnumerable_System_Collections_Generic_IEnumerable_System_Double___OpenTD_UnitsData_OpenTD_Results_Dataset_IDataset_OpenTD_Results_Dataset_ItemIdentifier_"></a> DataArrayCollection\(StandardDataSubtypes, IEnumerable<IEnumerable<double\>\>, UnitsData, IDataset, ItemIdentifier\)

```csharp
public DataArrayCollection(StandardDataSubtypes subtype, IEnumerable<IEnumerable<double>> collection, UnitsData units, IDataset sourceDataset = null, ItemIdentifier sourceItem = null)
```

#### Parameters

`subtype` [StandardDataSubtypes](OpenTD.Results.Dataset.StandardDataSubtypes.md)

`collection` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>\>

`units` UnitsData

`sourceDataset` [IDataset](OpenTD.Results.Dataset.IDataset.md)

`sourceItem` [ItemIdentifier](OpenTD.Results.Dataset.ItemIdentifier.md)

### <a id="OpenTD_Results_Dataset_DataArrayCollection__ctor_OpenTD_Results_Dataset_DataSubtype_System_Collections_Generic_IEnumerable_System_Collections_Generic_IEnumerable_System_Double___OpenTD_UnitsData_OpenTD_Results_Dataset_IDataset_OpenTD_Results_Dataset_ItemIdentifier_"></a> DataArrayCollection\(DataSubtype, IEnumerable<IEnumerable<double\>\>, UnitsData, IDataset, ItemIdentifier\)

```csharp
public DataArrayCollection(DataSubtype subtype, IEnumerable<IEnumerable<double>> collection, UnitsData units, IDataset sourceDataset = null, ItemIdentifier sourceItem = null)
```

#### Parameters

`subtype` [DataSubtype](OpenTD.Results.Dataset.DataSubtype.md)

`collection` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>\>

`units` UnitsData

`sourceDataset` [IDataset](OpenTD.Results.Dataset.IDataset.md)

`sourceItem` [ItemIdentifier](OpenTD.Results.Dataset.ItemIdentifier.md)

### <a id="OpenTD_Results_Dataset_DataArrayCollection__ctor_OpenTD_Results_Dataset_DataArrayCollection_"></a> DataArrayCollection\(DataArrayCollection\)

```csharp
public DataArrayCollection(DataArrayCollection collection)
```

#### Parameters

`collection` [DataArrayCollection](OpenTD.Results.Dataset.DataArrayCollection.md)

## Properties

### <a id="OpenTD_Results_Dataset_DataArrayCollection_AutoCommenter"></a> AutoCommenter

```csharp
protected AutoCommenter AutoCommenter { get; set; }
```

#### Property Value

 AutoCommenter

### <a id="OpenTD_Results_Dataset_DataArrayCollection_AutoNamer"></a> AutoNamer

```csharp
protected AutoNamer AutoNamer { get; set; }
```

#### Property Value

 AutoNamer

### <a id="OpenTD_Results_Dataset_DataArrayCollection_Comment"></a> Comment

```csharp
public string Comment { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_Results_Dataset_DataArrayCollection_Count"></a> Count

Gets the number of elements contained in the <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref>.

```csharp
public int Count { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_Results_Dataset_DataArrayCollection_DataItemCount"></a> DataItemCount

If all the DataArrays in the collection have the same number of items,
this will equal that. Otherwise this will be -1.

```csharp
public virtual int DataItemCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_Results_Dataset_DataArrayCollection_Dimension"></a> Dimension

If all the DataArrays in the collection have the same physical dimension,
this will equal that. Otherwise this will be UnitsData.UnitsType.UNITS_NOT_SET.

```csharp
public virtual UnitsData.UnitsType Dimension { get; }
```

#### Property Value

 UnitsData.UnitsType

### <a id="OpenTD_Results_Dataset_DataArrayCollection_InternalSuggestedComment"></a> InternalSuggestedComment

```csharp
public string InternalSuggestedComment { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_Results_Dataset_DataArrayCollection_InternalSuggestedName"></a> InternalSuggestedName

```csharp
public string InternalSuggestedName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_Results_Dataset_DataArrayCollection_IsReadOnly"></a> IsReadOnly

Gets a value indicating whether the <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref> is read-only.

```csharp
public bool IsReadOnly { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_Results_Dataset_DataArrayCollection_MaxDataItemCount"></a> MaxDataItemCount

The maximum item count found in the arrays of the collection.

```csharp
public virtual int MaxDataItemCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_Results_Dataset_DataArrayCollection_MinDataItemCount"></a> MinDataItemCount

The minimum item count found in the arrays of the collection.

```csharp
public virtual int MinDataItemCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_Results_Dataset_DataArrayCollection_Name"></a> Name

```csharp
public string Name { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_Results_Dataset_DataArrayCollection_SourceDataItemIdentifiers"></a> SourceDataItemIdentifiers

The SourceDataItemIdentifiers associated with the DataArrays in this collection.

```csharp
public DataItemIdentifierCollection SourceDataItemIdentifiers { get; }
```

#### Property Value

 [DataItemIdentifierCollection](OpenTD.Results.Dataset.DataItemIdentifierCollection.md)

### <a id="OpenTD_Results_Dataset_DataArrayCollection_SourceDataset"></a> SourceDataset

If all the DataArrays in the collection have the same SourceDataset, this will
equal that. Otherwise this will be null.

```csharp
public virtual IDataset SourceDataset { get; }
```

#### Property Value

 [IDataset](OpenTD.Results.Dataset.IDataset.md)

### <a id="OpenTD_Results_Dataset_DataArrayCollection_SourceItem"></a> SourceItem

If all the DataArrays in the collection have the same SourceItem, this will
equal that. Otherwise this will be null.

```csharp
public virtual ItemIdentifier SourceItem { get; }
```

#### Property Value

 [ItemIdentifier](OpenTD.Results.Dataset.ItemIdentifier.md)

### <a id="OpenTD_Results_Dataset_DataArrayCollection_SourceItemIdentifiers"></a> SourceItemIdentifiers

The SourceItemIdentifiers associated with the DataArrays in this collection.

```csharp
public ItemIdentifierCollection SourceItemIdentifiers { get; }
```

#### Property Value

 [ItemIdentifierCollection](OpenTD.Results.Dataset.ItemIdentifierCollection.md)

### <a id="OpenTD_Results_Dataset_DataArrayCollection_SourceItemSubmodel"></a> SourceItemSubmodel

If all the DataArrays in the collection have the same SourceItem submodel, this will
equal that. Otherwise this will be null.

```csharp
public virtual string SourceItemSubmodel { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_Results_Dataset_DataArrayCollection_Subtype"></a> Subtype

If all the DataArrays in the collection have the same data subtype, this will
equal that. Otherwise this will be null.

```csharp
public virtual DataSubtype Subtype { get; }
```

#### Property Value

 [DataSubtype](OpenTD.Results.Dataset.DataSubtype.md)

### <a id="OpenTD_Results_Dataset_DataArrayCollection_Item_System_Int32_"></a> this\[int\]

Gets or sets the element at the specified index.

```csharp
public DataArray this[int index] { get; set; }
```

#### Property Value

 [DataArray](OpenTD.Results.Dataset.DataArray.md)

#### Exceptions

 [ArgumentOutOfRangeException](https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception)

<code class="paramref">index</code> is not a valid index in the <xref href="System.Collections.Generic.IList%601" data-throw-if-not-resolved="false"></xref>.

 [NotSupportedException](https://learn.microsoft.com/dotnet/api/system.notsupportedexception)

The property is set and the <xref href="System.Collections.Generic.IList%601" data-throw-if-not-resolved="false"></xref> is read-only.

## Methods

### <a id="OpenTD_Results_Dataset_DataArrayCollection_Add_OpenTD_Results_Dataset_DataArray_"></a> Add\(DataArray\)

Adds an item to the <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref>.

```csharp
public void Add(DataArray x)
```

#### Parameters

`x` [DataArray](OpenTD.Results.Dataset.DataArray.md)

#### Exceptions

 [NotSupportedException](https://learn.microsoft.com/dotnet/api/system.notsupportedexception)

The <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref> is read-only.

### <a id="OpenTD_Results_Dataset_DataArrayCollection_AddRange_System_Collections_Generic_IEnumerable_OpenTD_Results_Dataset_DataArray__"></a> AddRange\(IEnumerable<DataArray\>\)

```csharp
public void AddRange(IEnumerable<DataArray> collection)
```

#### Parameters

`collection` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[DataArray](OpenTD.Results.Dataset.DataArray.md)\>

### <a id="OpenTD_Results_Dataset_DataArrayCollection_Clear"></a> Clear\(\)

Removes all items from the <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref>.

```csharp
public void Clear()
```

#### Exceptions

 [NotSupportedException](https://learn.microsoft.com/dotnet/api/system.notsupportedexception)

The <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref> is read-only.

### <a id="OpenTD_Results_Dataset_DataArrayCollection_Contains_OpenTD_Results_Dataset_DataArray_"></a> Contains\(DataArray\)

Determines whether the <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref> contains a specific value.

```csharp
public bool Contains(DataArray item)
```

#### Parameters

`item` [DataArray](OpenTD.Results.Dataset.DataArray.md)

The object to locate in the <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref>.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if <code class="paramref">item</code> is found in the <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref>; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### <a id="OpenTD_Results_Dataset_DataArrayCollection_CopyTo_OpenTD_Results_Dataset_DataArray___System_Int32_"></a> CopyTo\(DataArray\[\], int\)

Copies the elements of the <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref> to an <xref href="System.Array" data-throw-if-not-resolved="false"></xref>, starting at a particular <xref href="System.Array" data-throw-if-not-resolved="false"></xref> index.

```csharp
public void CopyTo(DataArray[] array, int arrayIndex)
```

#### Parameters

`array` [DataArray](OpenTD.Results.Dataset.DataArray.md)\[\]

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

### <a id="OpenTD_Results_Dataset_DataArrayCollection_Filter_OpenTD_Results_Dataset_DataItemIdentifierCollection_"></a> Filter\(DataItemIdentifierCollection\)

```csharp
public DataArrayCollection Filter(DataItemIdentifierCollection dataItems)
```

#### Parameters

`dataItems` [DataItemIdentifierCollection](OpenTD.Results.Dataset.DataItemIdentifierCollection.md)

#### Returns

 [DataArrayCollection](OpenTD.Results.Dataset.DataArrayCollection.md)

### <a id="OpenTD_Results_Dataset_DataArrayCollection_GetEnumerator"></a> GetEnumerator\(\)

Returns an enumerator that iterates through the collection.

```csharp
public IEnumerator<DataArray> GetEnumerator()
```

#### Returns

 [IEnumerator](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerator\-1)<[DataArray](OpenTD.Results.Dataset.DataArray.md)\>

An enumerator that can be used to iterate through the collection.

### <a id="OpenTD_Results_Dataset_DataArrayCollection_GetSelfSuggestedComment"></a> GetSelfSuggestedComment\(\)

```csharp
protected virtual string GetSelfSuggestedComment()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_Results_Dataset_DataArrayCollection_GetSelfSuggestedName"></a> GetSelfSuggestedName\(\)

```csharp
protected virtual string GetSelfSuggestedName()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_Results_Dataset_DataArrayCollection_GetTranspose"></a> GetTranspose\(\)

```csharp
public virtual DataArrayCollection GetTranspose()
```

#### Returns

 [DataArrayCollection](OpenTD.Results.Dataset.DataArrayCollection.md)

### <a id="OpenTD_Results_Dataset_DataArrayCollection_GetValues"></a> GetValues\(\)

```csharp
public virtual List<List<double>> GetValues()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>\>

### <a id="OpenTD_Results_Dataset_DataArrayCollection_GetValues_OpenTD_UnitsData_"></a> GetValues\(UnitsData\)

```csharp
public virtual List<List<double>> GetValues(UnitsData units)
```

#### Parameters

`units` UnitsData

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>\>

### <a id="OpenTD_Results_Dataset_DataArrayCollection_IndexOf_OpenTD_Results_Dataset_DataArray_"></a> IndexOf\(DataArray\)

Determines the index of a specific item in the <xref href="System.Collections.Generic.IList%601" data-throw-if-not-resolved="false"></xref>.

```csharp
public int IndexOf(DataArray item)
```

#### Parameters

`item` [DataArray](OpenTD.Results.Dataset.DataArray.md)

The object to locate in the <xref href="System.Collections.Generic.IList%601" data-throw-if-not-resolved="false"></xref>.

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

The index of <code class="paramref">item</code> if found in the list; otherwise, -1.

### <a id="OpenTD_Results_Dataset_DataArrayCollection_Insert_System_Int32_OpenTD_Results_Dataset_DataArray_"></a> Insert\(int, DataArray\)

Inserts an item to the <xref href="System.Collections.Generic.IList%601" data-throw-if-not-resolved="false"></xref> at the specified index.

```csharp
public void Insert(int index, DataArray item)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The zero-based index at which <code class="paramref">item</code> should be inserted.

`item` [DataArray](OpenTD.Results.Dataset.DataArray.md)

The object to insert into the <xref href="System.Collections.Generic.IList%601" data-throw-if-not-resolved="false"></xref>.

#### Exceptions

 [ArgumentOutOfRangeException](https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception)

<code class="paramref">index</code> is not a valid index in the <xref href="System.Collections.Generic.IList%601" data-throw-if-not-resolved="false"></xref>.

 [NotSupportedException](https://learn.microsoft.com/dotnet/api/system.notsupportedexception)

The <xref href="System.Collections.Generic.IList%601" data-throw-if-not-resolved="false"></xref> is read-only.

### <a id="OpenTD_Results_Dataset_DataArrayCollection_InsertRange_System_Int32_System_Collections_Generic_IEnumerable_OpenTD_Results_Dataset_DataArray__"></a> InsertRange\(int, IEnumerable<DataArray\>\)

```csharp
public void InsertRange(int index, IEnumerable<DataArray> collection)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`collection` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[DataArray](OpenTD.Results.Dataset.DataArray.md)\>

### <a id="OpenTD_Results_Dataset_DataArrayCollection_Remove_OpenTD_Results_Dataset_DataArray_"></a> Remove\(DataArray\)

Removes the first occurrence of a specific object from the <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref>.

```csharp
public bool Remove(DataArray x)
```

#### Parameters

`x` [DataArray](OpenTD.Results.Dataset.DataArray.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if <code class="paramref">item</code> was successfully removed from the <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref>; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>. This method also returns <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a> if <code class="paramref">item</code> is not found in the original <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref>.

#### Exceptions

 [NotSupportedException](https://learn.microsoft.com/dotnet/api/system.notsupportedexception)

The <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref> is read-only.

### <a id="OpenTD_Results_Dataset_DataArrayCollection_RemoveAt_System_Int32_"></a> RemoveAt\(int\)

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

### <a id="OpenTD_Results_Dataset_DataArrayCollection_RemoveRange_System_Int32_System_Int32_"></a> RemoveRange\(int, int\)

```csharp
public void RemoveRange(int index, int count)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`count` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_Results_Dataset_DataArrayCollection_ToString"></a> ToString\(\)

Returns a string that represents the current object.

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

A string that represents the current object.

## See Also

IAutoName, 
[ICollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1)<T\>, 
[IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<T\>, 
[IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<T\>

