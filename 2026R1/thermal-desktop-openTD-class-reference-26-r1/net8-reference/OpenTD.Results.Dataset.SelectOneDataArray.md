# <a id="OpenTD_Results_Dataset_SelectOneDataArray"></a> Class SelectOneDataArray

Namespace: [OpenTD.Results.Dataset](OpenTD.Results.Dataset.md)  
Assembly: OpenTD.Results.dll  

A DerivedDataArray that uses some criterion to select one of its input DataArrays
and returns data solely from it.

```csharp
public abstract class SelectOneDataArray : DerivedDataArray, IEnumerable<double>, IEnumerable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DataArray](OpenTD.Results.Dataset.DataArray.md) ← 
[DerivedDataArray](OpenTD.Results.Dataset.DerivedDataArray.md) ← 
[SelectOneDataArray](OpenTD.Results.Dataset.SelectOneDataArray.md)

#### Derived

[SelectMaxDataArray](OpenTD.Results.Dataset.SelectMaxDataArray.md), 
[SelectMinDataArray](OpenTD.Results.Dataset.SelectMinDataArray.md)

#### Implements

[IEnumerable<double\>](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1), 
[IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.ienumerable)

#### Inherited Members

[DerivedDataArray.InputCollection](OpenTD.Results.Dataset.DerivedDataArray.md\#OpenTD\_Results\_Dataset\_DerivedDataArray\_InputCollection), 
[DerivedDataArray.IgnoreNaNInCalculations](OpenTD.Results.Dataset.DerivedDataArray.md\#OpenTD\_Results\_Dataset\_DerivedDataArray\_IgnoreNaNInCalculations), 
[DerivedDataArray.SourceDataset](OpenTD.Results.Dataset.DerivedDataArray.md\#OpenTD\_Results\_Dataset\_DerivedDataArray\_SourceDataset), 
[DerivedDataArray.SourceItem](OpenTD.Results.Dataset.DerivedDataArray.md\#OpenTD\_Results\_Dataset\_DerivedDataArray\_SourceItem), 
[DerivedDataArray.GetValues\(UnitsData\)](OpenTD.Results.Dataset.DerivedDataArray.md\#OpenTD\_Results\_Dataset\_DerivedDataArray\_GetValues\_OpenTD\_UnitsData\_), 
[DerivedDataArray.Count](OpenTD.Results.Dataset.DerivedDataArray.md\#OpenTD\_Results\_Dataset\_DerivedDataArray\_Count), 
[DerivedDataArray.this\[int\]](OpenTD.Results.Dataset.DerivedDataArray.md\#OpenTD\_Results\_Dataset\_DerivedDataArray\_Item\_System\_Int32\_), 
[DerivedDataArray.GetSelfSuggestedName\(\)](OpenTD.Results.Dataset.DerivedDataArray.md\#OpenTD\_Results\_Dataset\_DerivedDataArray\_GetSelfSuggestedName), 
[DerivedDataArray.SetDerivedData\(\)](OpenTD.Results.Dataset.DerivedDataArray.md\#OpenTD\_Results\_Dataset\_DerivedDataArray\_SetDerivedData), 
[DerivedDataArray.CheckData\(\)](OpenTD.Results.Dataset.DerivedDataArray.md\#OpenTD\_Results\_Dataset\_DerivedDataArray\_CheckData), 
[DataArray.SetValues\(IEnumerable<double\>, DataSubtype, UnitsData, ItemIdentifier\)](OpenTD.Results.Dataset.DataArray.md\#OpenTD\_Results\_Dataset\_DataArray\_SetValues\_System\_Collections\_Generic\_IEnumerable\_System\_Double\_\_OpenTD\_Results\_Dataset\_DataSubtype\_OpenTD\_UnitsData\_OpenTD\_Results\_Dataset\_ItemIdentifier\_), 
[DataArray.SourceDataset](OpenTD.Results.Dataset.DataArray.md\#OpenTD\_Results\_Dataset\_DataArray\_SourceDataset), 
[DataArray.SourceItem](OpenTD.Results.Dataset.DataArray.md\#OpenTD\_Results\_Dataset\_DataArray\_SourceItem), 
[DataArray.Subtype](OpenTD.Results.Dataset.DataArray.md\#OpenTD\_Results\_Dataset\_DataArray\_Subtype), 
[DataArray.SourceDataItem](OpenTD.Results.Dataset.DataArray.md\#OpenTD\_Results\_Dataset\_DataArray\_SourceDataItem), 
[DataArray.Dimension](OpenTD.Results.Dataset.DataArray.md\#OpenTD\_Results\_Dataset\_DataArray\_Dimension), 
[DataArray.IsInteger](OpenTD.Results.Dataset.DataArray.md\#OpenTD\_Results\_Dataset\_DataArray\_IsInteger), 
[DataArray.GetValues\(\)](OpenTD.Results.Dataset.DataArray.md\#OpenTD\_Results\_Dataset\_DataArray\_GetValues), 
[DataArray.GetValues\(UnitsData\)](OpenTD.Results.Dataset.DataArray.md\#OpenTD\_Results\_Dataset\_DataArray\_GetValues\_OpenTD\_UnitsData\_), 
[DataArray.Count](OpenTD.Results.Dataset.DataArray.md\#OpenTD\_Results\_Dataset\_DataArray\_Count), 
[DataArray.this\[int\]](OpenTD.Results.Dataset.DataArray.md\#OpenTD\_Results\_Dataset\_DataArray\_Item\_System\_Int32\_), 
[DataArray.ValuesSI](OpenTD.Results.Dataset.DataArray.md\#OpenTD\_Results\_Dataset\_DataArray\_ValuesSI), 
[DataArray.CheckData\(\)](OpenTD.Results.Dataset.DataArray.md\#OpenTD\_Results\_Dataset\_DataArray\_CheckData), 
[DataArray.AutoNamer](OpenTD.Results.Dataset.DataArray.md\#OpenTD\_Results\_Dataset\_DataArray\_AutoNamer), 
[DataArray.Name](OpenTD.Results.Dataset.DataArray.md\#OpenTD\_Results\_Dataset\_DataArray\_Name), 
[DataArray.InternalSuggestedName](OpenTD.Results.Dataset.DataArray.md\#OpenTD\_Results\_Dataset\_DataArray\_InternalSuggestedName), 
[DataArray.GetSelfSuggestedName\(\)](OpenTD.Results.Dataset.DataArray.md\#OpenTD\_Results\_Dataset\_DataArray\_GetSelfSuggestedName), 
[DataArray.ToString\(\)](OpenTD.Results.Dataset.DataArray.md\#OpenTD\_Results\_Dataset\_DataArray\_ToString), 
[DataArray.AutoCommenter](OpenTD.Results.Dataset.DataArray.md\#OpenTD\_Results\_Dataset\_DataArray\_AutoCommenter), 
[DataArray.Comment](OpenTD.Results.Dataset.DataArray.md\#OpenTD\_Results\_Dataset\_DataArray\_Comment), 
[DataArray.InternalSuggestedComment](OpenTD.Results.Dataset.DataArray.md\#OpenTD\_Results\_Dataset\_DataArray\_InternalSuggestedComment), 
[DataArray.GetSelfSuggestedComment\(\)](OpenTD.Results.Dataset.DataArray.md\#OpenTD\_Results\_Dataset\_DataArray\_GetSelfSuggestedComment), 
[DataArray.GetEnumerator\(\)](OpenTD.Results.Dataset.DataArray.md\#OpenTD\_Results\_Dataset\_DataArray\_GetEnumerator), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="OpenTD_Results_Dataset_SelectOneDataArray__ctor_OpenTD_Results_Dataset_DataArrayCollection_"></a> SelectOneDataArray\(DataArrayCollection\)

```csharp
public SelectOneDataArray(DataArrayCollection inputCollection)
```

#### Parameters

`inputCollection` [DataArrayCollection](OpenTD.Results.Dataset.DataArrayCollection.md)

### <a id="OpenTD_Results_Dataset_SelectOneDataArray__ctor"></a> SelectOneDataArray\(\)

```csharp
public SelectOneDataArray()
```

## Fields

### <a id="OpenTD_Results_Dataset_SelectOneDataArray_selectedArray"></a> selectedArray

```csharp
protected DataArray selectedArray
```

#### Field Value

 [DataArray](OpenTD.Results.Dataset.DataArray.md)

## Properties

### <a id="OpenTD_Results_Dataset_SelectOneDataArray_Count"></a> Count

The number of items in this DataArray.

```csharp
public override int Count { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_Results_Dataset_SelectOneDataArray_SourceDataset"></a> SourceDataset

The source Dataset for the InputCollection.

```csharp
public override IDataset SourceDataset { get; }
```

#### Property Value

 [IDataset](OpenTD.Results.Dataset.IDataset.md)

#### Exceptions

 OpenTDException

Cannot set DerivedDataArray.SourceDataset directly. It will be derived from InputArrays.

### <a id="OpenTD_Results_Dataset_SelectOneDataArray_SourceItem"></a> SourceItem

The SourceItem for the InputCollection.

```csharp
public override ItemIdentifier SourceItem { get; }
```

#### Property Value

 [ItemIdentifier](OpenTD.Results.Dataset.ItemIdentifier.md)

#### Exceptions

 OpenTDException

Cannot set DerivedDataArray.SourceItem directly. It will be derived from InputArrays.

## Methods

### <a id="OpenTD_Results_Dataset_SelectOneDataArray_CheckData"></a> CheckData\(\)

```csharp
protected override void CheckData()
```

### <a id="OpenTD_Results_Dataset_SelectOneDataArray_GetSelfSuggestedName"></a> GetSelfSuggestedName\(\)

```csharp
protected override string GetSelfSuggestedName()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_Results_Dataset_SelectOneDataArray_GetValues_OpenTD_UnitsData_"></a> GetValues\(UnitsData\)

Gets the data in the units provided.

```csharp
public override List<double> GetValues(UnitsData units)
```

#### Parameters

`units` UnitsData

The units to return the data in.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

List&lt;System.Double&gt;.

## See Also

[DerivedDataArray](OpenTD.Results.Dataset.DerivedDataArray.md)

