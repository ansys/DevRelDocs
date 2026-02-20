# Class PercentDifferenceCompareData

Namespace: [OpenTD.Results.Dataset](OpenTD.Results.Dataset.md)  
Assembly: OpenTD.Results.dll  

This ICompareData implementation compares data of a single subtype (T, TL, etc.)
for all applicable common entities (nodes or lumps or... etc.) between two
datasets by examining the percent difference between pairs of values at each
record for each common-named entity. For this comparison, Datasets must have
the same number of records.

```csharp
public class PercentDifferenceCompareData : CompareData, ICompareData
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CompareData](OpenTD.Results.Dataset.CompareData.md) ← 
[PercentDifferenceCompareData](OpenTD.Results.Dataset.PercentDifferenceCompareData.md)

## Implements

[ICompareData](OpenTD.Results.Dataset.ICompareData.md)

## Inherited Members

[CompareData.ComparerInput](OpenTD.Results.Dataset.CompareData.md\#OpenTD\_Results\_Dataset\_CompareData\_ComparerInput), 
[CompareData.ComparerOutput](OpenTD.Results.Dataset.CompareData.md\#OpenTD\_Results\_Dataset\_CompareData\_ComparerOutput), 
[CompareData.Compare\(string, DataSubtype, IEnumerable<string\>, IEnumerable<long\>, IEnumerable<long\>, bool\)](OpenTD.Results.Dataset.CompareData.md\#OpenTD\_Results\_Dataset\_CompareData\_Compare\_System\_String\_OpenTD\_Results\_Dataset\_DataSubtype\_System\_Collections\_Generic\_IEnumerable\_System\_String\_\_System\_Collections\_Generic\_IEnumerable\_System\_Int64\_\_System\_Collections\_Generic\_IEnumerable\_System\_Int64\_\_System\_Boolean\_), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

### PercentDifferenceCompareData\(IComparerInput, IComparerOutput\)

```csharp
public PercentDifferenceCompareData(IComparerInput comparerInput, IComparerOutput comparerOutput)
```

#### Parameters

`comparerInput` [IComparerInput](OpenTD.Results.Dataset.IComparerInput.md)

`comparerOutput` [IComparerOutput](OpenTD.Results.Dataset.IComparerOutput.md)

## Properties

### Floor

Comparison floor for comparing doubles. If the absolute value of a datapoint in dataset A is less than this value, the percent difference for that comparison is set to zero, resulting in that comparison being ignored. All comparisons are in SI units, so set the floor in SI units. Defaults to 0.

```csharp
public double Floor { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### PercentTol

Percent tolerance to use when comparing doubles. Defaults to 1.0.

```csharp
public double PercentTol { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

## Methods

### Compare\(string, DataSubtype, IEnumerable<string\>, IEnumerable<long\>, IEnumerable<long\>, bool\)

This method implements the comparison algorithm.

```csharp
public override void Compare(string name, DataSubtype subtype, IEnumerable<string> commonNames, IEnumerable<long> commonIndicesA, IEnumerable<long> commonIndicesB, bool msgOnSuccess = true)
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

[ICompareData](OpenTD.Results.Dataset.ICompareData.md)


