# Class DerivedDataArray

Namespace: [OpenTD.Results.Dataset](OpenTD.Results.Dataset.md)  
Assembly: OpenTD.Results.dll  

A DerivedDataArray is a DataArray that gets its data by operating on its InputCollection
of DataArrays. For example, a SelectMaxDataArray selects the DataArray with the maximum
value and returns data from it only. An AverageDataArray returns the average value of its
InputCollection at each record. To create your own custom DerivedDataArray, inherit from
this class and override at least the SetDerivedData() method.

```csharp
public abstract class DerivedDataArray : DataArray, IEnumerable<double>, IEnumerable
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DataArray](OpenTD.Results.Dataset.DataArray.md) ← 
[DerivedDataArray](OpenTD.Results.Dataset.DerivedDataArray.md)

#### Derived

[FormulaDataArray](OpenTD.Results.Dataset.FormulaDataArray.md), 
[OneSubtypeDerivedDataArray](OpenTD.Results.Dataset.OneSubtypeDerivedDataArray.md), 
[SelectOneDataArray](OpenTD.Results.Dataset.SelectOneDataArray.md)

## Implements

[IEnumerable<double\>](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1), 
[IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.ienumerable)

## Inherited Members

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

### DerivedDataArray\(DataArrayCollection\)

```csharp
public DerivedDataArray(DataArrayCollection inputCollection)
```

#### Parameters

`inputCollection` [DataArrayCollection](OpenTD.Results.Dataset.DataArrayCollection.md)

### DerivedDataArray\(\)

```csharp
public DerivedDataArray()
```

## Properties

### Count

The number of items in this DataArray.

```csharp
public override int Count { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### IgnoreNaNInCalculations

```csharp
public bool IgnoreNaNInCalculations { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### InputCollection

The collection of DataArrays operated upon to derive data.

```csharp
public DataArrayCollection InputCollection { get; set; }
```

#### Property Value

 [DataArrayCollection](OpenTD.Results.Dataset.DataArrayCollection.md)

### SourceDataset

The source Dataset for the InputCollection.

```csharp
public override IDataset SourceDataset { get; }
```

#### Property Value

 [IDataset](OpenTD.Results.Dataset.IDataset.md)

#### Exceptions

 OpenTDException

Cannot set DerivedDataArray.SourceDataset directly. It will be derived from InputArrays.

### SourceItem

The SourceItem for the InputCollection.

```csharp
public override ItemIdentifier SourceItem { get; }
```

#### Property Value

 [ItemIdentifier](OpenTD.Results.Dataset.ItemIdentifier.md)

#### Exceptions

 OpenTDException

Cannot set DerivedDataArray.SourceItem directly. It will be derived from InputArrays.

### this\[int\]

```csharp
public override double this[int index] { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

## Methods

### CheckData\(\)

```csharp
protected override void CheckData()
```

### GetSelfSuggestedName\(\)

```csharp
protected override string GetSelfSuggestedName()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### GetValues\(UnitsData\)

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

### SetDerivedData\(\)

For setting ValuesSI, any other derived data

```csharp
protected virtual void SetDerivedData()
```

## See Also

[DataArray](OpenTD.Results.Dataset.DataArray.md), 
[SelectMaxDataArray](OpenTD.Results.Dataset.SelectMaxDataArray.md), 
[AverageDataArray](OpenTD.Results.Dataset.AverageDataArray.md)


