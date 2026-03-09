# Class SelectMinDataArray

Namespace: [OpenTD.Results.Dataset](OpenTD.Results.Dataset.md)  
Assembly: OpenTD.Results.dll  

A SelectOneDataArray that selects the DataArray with the minimum
value and returns data from it only.

```csharp
public class SelectMinDataArray : SelectOneDataArray, IEnumerable<double>, IEnumerable
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DataArray](OpenTD.Results.Dataset.DataArray.md) ← 
[DerivedDataArray](OpenTD.Results.Dataset.DerivedDataArray.md) ← 
[SelectOneDataArray](OpenTD.Results.Dataset.SelectOneDataArray.md) ← 
[SelectMinDataArray](OpenTD.Results.Dataset.SelectMinDataArray.md)

## Implements

[IEnumerable<double\>](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1), 
[IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.ienumerable)

## Inherited Members

[SelectOneDataArray.GetValues\(UnitsData\)](OpenTD.Results.Dataset.SelectOneDataArray.md\#OpenTD\_Results\_Dataset\_SelectOneDataArray\_GetValues\_OpenTD\_UnitsData\_), 
[SelectOneDataArray.SourceDataset](OpenTD.Results.Dataset.SelectOneDataArray.md\#OpenTD\_Results\_Dataset\_SelectOneDataArray\_SourceDataset), 
[SelectOneDataArray.SourceItem](OpenTD.Results.Dataset.SelectOneDataArray.md\#OpenTD\_Results\_Dataset\_SelectOneDataArray\_SourceItem), 
[SelectOneDataArray.Count](OpenTD.Results.Dataset.SelectOneDataArray.md\#OpenTD\_Results\_Dataset\_SelectOneDataArray\_Count), 
[SelectOneDataArray.GetSelfSuggestedName\(\)](OpenTD.Results.Dataset.SelectOneDataArray.md\#OpenTD\_Results\_Dataset\_SelectOneDataArray\_GetSelfSuggestedName), 
[SelectOneDataArray.CheckData\(\)](OpenTD.Results.Dataset.SelectOneDataArray.md\#OpenTD\_Results\_Dataset\_SelectOneDataArray\_CheckData), 
[SelectOneDataArray.selectedArray](OpenTD.Results.Dataset.SelectOneDataArray.md\#OpenTD\_Results\_Dataset\_SelectOneDataArray\_selectedArray), 
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
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

### SelectMinDataArray\(DataArrayCollection\)

```csharp
public SelectMinDataArray(DataArrayCollection inputCollection)
```

#### Parameters

`inputCollection` [DataArrayCollection](OpenTD.Results.Dataset.DataArrayCollection.md)

### SelectMinDataArray\(\)

```csharp
public SelectMinDataArray()
```

## Methods

### SetDerivedData\(\)

For setting ValuesSI, any other derived data

```csharp
protected override void SetDerivedData()
```

## See Also

[SelectOneDataArray](OpenTD.Results.Dataset.SelectOneDataArray.md)


