# Class DataArray

Namespace: [OpenTD.Results.Dataset](OpenTD.Results.Dataset.md)  
Assembly: OpenTD.Results.dll  

Data is returned from Datasets in the form of DataArrays, which in addition to 
containing the actual data, also know the physical dimension of the data, what
units it is in, and have a reference to the Dataset it came from. Use the GetValues
methods to get the data as lists of doubles, or use DataArrays directly as
inputs to SimplePlots.

```csharp
public class DataArray : IEnumerable<double>, IEnumerable
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DataArray](OpenTD.Results.Dataset.DataArray.md)

#### Derived

[DerivedDataArray](OpenTD.Results.Dataset.DerivedDataArray.md)

## Implements

[IEnumerable<double\>](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1), 
[IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.ienumerable)

## Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### DataArray\(DataItemIdentifier, IEnumerable<double\>, UnitsData\)

```csharp
public DataArray(DataItemIdentifier dataItem, IEnumerable<double> values, UnitsData units)
```

#### Parameters

`dataItem` [DataItemIdentifier](OpenTD.Results.Dataset.DataItemIdentifier.md)

`values` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

`units` UnitsData

### DataArray\(\)

```csharp
public DataArray()
```

### DataArray\(IEnumerable<double\>\)

Initializes a new instance of the <xref href="OpenTD.Results.Dataset.DataArray" data-throw-if-not-resolved="false"></xref> class, assuming dimensionless data.

```csharp
public DataArray(IEnumerable<double> values)
```

#### Parameters

`values` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

The values.

### DataArray\(DataSubtype, IEnumerable<double\>, UnitsData, ItemIdentifier\)

```csharp
public DataArray(DataSubtype subtype, IEnumerable<double> values, UnitsData units, ItemIdentifier item = null)
```

#### Parameters

`subtype` [DataSubtype](OpenTD.Results.Dataset.DataSubtype.md)

`values` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

`units` UnitsData

`item` [ItemIdentifier](OpenTD.Results.Dataset.ItemIdentifier.md)

### DataArray\(DataArray\)

```csharp
public DataArray(DataArray x)
```

#### Parameters

`x` [DataArray](OpenTD.Results.Dataset.DataArray.md)

## Fields

### ValuesSI

```csharp
protected List<double> ValuesSI
```

#### Field Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

## Properties

### AutoCommenter

```csharp
protected AutoCommenter AutoCommenter { get; set; }
```

#### Property Value

 AutoCommenter

### AutoNamer

```csharp
protected AutoNamer AutoNamer { get; set; }
```

#### Property Value

 AutoNamer

### Comment

```csharp
public string Comment { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### Count

The number of items in this DataArray.

```csharp
public virtual int Count { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Dimension

The physical dimension of this data.

```csharp
public UnitsData.UnitsType Dimension { get; }
```

#### Property Value

 UnitsData.UnitsType

### InternalSuggestedComment

```csharp
public string InternalSuggestedComment { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### InternalSuggestedName

```csharp
public string InternalSuggestedName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### IsInteger

Returns true if the subtype of this data represents integer data.

```csharp
public bool IsInteger { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Name

```csharp
public string Name { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### SourceDataItem

Combines the SourceItem and Subtype. If either are null, this is null.

```csharp
public DataItemIdentifier SourceDataItem { get; }
```

#### Property Value

 [DataItemIdentifier](OpenTD.Results.Dataset.DataItemIdentifier.md)

### SourceDataset

The source Dataset for this data.

```csharp
public virtual IDataset SourceDataset { get; }
```

#### Property Value

 [IDataset](OpenTD.Results.Dataset.IDataset.md)

### SourceItem

Identifies the item (node, lump, register, etc.) this data came from.

```csharp
public virtual ItemIdentifier SourceItem { get; }
```

#### Property Value

 [ItemIdentifier](OpenTD.Results.Dataset.ItemIdentifier.md)

### Subtype

The DataSubtype (T, TL, PL, GTX, etc.)

```csharp
public virtual DataSubtype Subtype { get; set; }
```

#### Property Value

 [DataSubtype](OpenTD.Results.Dataset.DataSubtype.md)

### this\[int\]

```csharp
public virtual double this[int index] { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

## Methods

### CheckData\(\)

```csharp
protected virtual void CheckData()
```

### GetEnumerator\(\)

Returns an enumerator that iterates through the collection.

```csharp
public IEnumerator<double> GetEnumerator()
```

#### Returns

 [IEnumerator](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerator\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

An enumerator that can be used to iterate through the collection.

### GetSelfSuggestedComment\(\)

```csharp
protected virtual string GetSelfSuggestedComment()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### GetSelfSuggestedName\(\)

```csharp
protected virtual string GetSelfSuggestedName()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### GetValues\(\)

Gets the data in the current WorkingUnits.

```csharp
public List<double> GetValues()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

List&lt;System.Double&gt;.

#### See Also

Units.WorkingUnits

### GetValues\(UnitsData\)

Gets the data in the units provided.

```csharp
public virtual List<double> GetValues(UnitsData units)
```

#### Parameters

`units` UnitsData

The units to return the data in.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

List&lt;System.Double&gt;.

### SetValues\(IEnumerable<double\>, DataSubtype, UnitsData, ItemIdentifier\)

```csharp
public virtual void SetValues(IEnumerable<double> values, DataSubtype subtype = null, UnitsData units = null, ItemIdentifier item = null)
```

#### Parameters

`values` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

`subtype` [DataSubtype](OpenTD.Results.Dataset.DataSubtype.md)

`units` UnitsData

`item` [ItemIdentifier](OpenTD.Results.Dataset.ItemIdentifier.md)

### ToString\(\)

Returns a string that represents the current object.

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

A string that represents the current object.

## Operators

### implicit operator List<double\>\(DataArray\)

```csharp
public static implicit operator List<double>(DataArray x)
```

#### Parameters

`x` [DataArray](OpenTD.Results.Dataset.DataArray.md)

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### implicit operator List<DataArray\>\(DataArray\)

```csharp
public static implicit operator List<DataArray>(DataArray x)
```

#### Parameters

`x` [DataArray](OpenTD.Results.Dataset.DataArray.md)

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[DataArray](OpenTD.Results.Dataset.DataArray.md)\>

## See Also

[Dataset](OpenTD.Results.Dataset.Dataset.md), 
IAutoName, 
[SimplePlot](OpenTD.Results.Plot.SimplePlot.md)


