# Interface ICompareData

Namespace: [OpenTD.Results.Dataset](OpenTD.Results.Dataset.md)  
Assembly: OpenTD.Results.dll  

Represents an algorithm for comparing all data of a single DataSubtype (T, TL, etc.) between two datasets.
Objects that implement this interface can be used within Comparer.ComparisonMethods
or Comparer.DefaultComparisonMethod. See PercentDifferenceCompareData for an example
implementation.

```csharp
public interface ICompareData
```

## Properties

### ComparerInput

The Comparer will send data from the datasets through this member.

```csharp
IComparerInput ComparerInput { get; set; }
```

#### Property Value

 [IComparerInput](OpenTD.Results.Dataset.IComparerInput.md)

### ComparerOutput

Send output from the comparison to the Comparer through this member.

```csharp
IComparerOutput ComparerOutput { get; set; }
```

#### Property Value

 [IComparerOutput](OpenTD.Results.Dataset.IComparerOutput.md)

## Methods

### Compare\(string, DataSubtype, IEnumerable<string\>, IEnumerable<long\>, IEnumerable<long\>, bool\)

This method implements the comparison algorithm.

```csharp
void Compare(string name, DataSubtype subtype, IEnumerable<string> commonNames, IEnumerable<long> commonIndicesA, IEnumerable<long> commonIndicesB, bool msgOnSuccess = true)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

This is a descriptive name for the data being compared. Use it in ComparerOutput messages.

`subtype` [DataSubtype](OpenTD.Results.Dataset.DataSubtype.md)

This is the type of data (T, TL, etc.) to compare.

`commonNames` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

This is a list of Sinda names (MAIN.1, WALL.100, etc.) of entities that hold
data of subtype and are common to both datasets. For example, if subtype is
PL, then commonNames would be names of lumps that are common between the
datasets. The comparison should be performed over all of the items in this
list.

`commonIndicesA` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[long](https://learn.microsoft.com/dotnet/api/system.int64)\>

These are the internal indices to the commonNames list for Dataset A.

`commonIndicesB` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[long](https://learn.microsoft.com/dotnet/api/system.int64)\>

These are the internal indices to the commonNames list for Dataset B.

`msgOnSuccess` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

If true, use ComparerOutput to write a message if this comparison is successful.

## See Also

[Comparer](OpenTD.Results.Dataset.Comparer.md), 
[DataSubtype](OpenTD.Results.Dataset.DataSubtype.md), 
[ICompareData](OpenTD.Results.Dataset.ICompareData.md), 
[PercentDifferenceCompareData](OpenTD.Results.Dataset.PercentDifferenceCompareData.md)


