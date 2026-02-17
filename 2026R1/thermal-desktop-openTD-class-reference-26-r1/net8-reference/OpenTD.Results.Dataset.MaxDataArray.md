# <a id="OpenTD_Results_Dataset_MaxDataArray"></a> Class MaxDataArray

Namespace: [OpenTD.Results.Dataset](OpenTD.Results.Dataset.md)  
Assembly: OpenTD.Results.dll  

A DerivedDataArray that returns the maximum value across its InputCollection
for each record. DataArrays in the InputCollection must all be the same length
and have the same data subtype.

```csharp
public class MaxDataArray : OneSubtypeDerivedDataArray, IEnumerable<double>, IEnumerable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DataArray](OpenTD.Results.Dataset.DataArray.md) ← 
[DerivedDataArray](OpenTD.Results.Dataset.DerivedDataArray.md) ← 
[OneSubtypeDerivedDataArray](OpenTD.Results.Dataset.OneSubtypeDerivedDataArray.md) ← 
[MaxDataArray](OpenTD.Results.Dataset.MaxDataArray.md)

#### Implements

[IEnumerable<double\>](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1), 
[IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.ienumerable)

#### Inherited Members

[OneSubtypeDerivedDataArray.SetDerivedData\(\)](OpenTD.Results.Dataset.OneSubtypeDerivedDataArray.md\#OpenTD\_Results\_Dataset\_OneSubtypeDerivedDataArray\_SetDerivedData), 
[OneSubtypeDerivedDataArray.CheckData\(\)](OpenTD.Results.Dataset.OneSubtypeDerivedDataArray.md\#OpenTD\_Results\_Dataset\_OneSubtypeDerivedDataArray\_CheckData), 
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

### <a id="OpenTD_Results_Dataset_MaxDataArray__ctor_OpenTD_Results_Dataset_DataArrayCollection_"></a> MaxDataArray\(DataArrayCollection\)

```csharp
public MaxDataArray(DataArrayCollection inputCollection)
```

#### Parameters

`inputCollection` [DataArrayCollection](OpenTD.Results.Dataset.DataArrayCollection.md)

### <a id="OpenTD_Results_Dataset_MaxDataArray__ctor"></a> MaxDataArray\(\)

```csharp
public MaxDataArray()
```

## Methods

### <a id="OpenTD_Results_Dataset_MaxDataArray_CheckData"></a> CheckData\(\)

```csharp
protected override void CheckData()
```

### <a id="OpenTD_Results_Dataset_MaxDataArray_GetSelfSuggestedName"></a> GetSelfSuggestedName\(\)

```csharp
protected override string GetSelfSuggestedName()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_Results_Dataset_MaxDataArray_SetDerivedData"></a> SetDerivedData\(\)

For setting ValuesSI, any other derived data

```csharp
protected override void SetDerivedData()
```

## See Also

[OneSubtypeDerivedDataArray](OpenTD.Results.Dataset.OneSubtypeDerivedDataArray.md), 
[DerivedDataArray](OpenTD.Results.Dataset.DerivedDataArray.md)

