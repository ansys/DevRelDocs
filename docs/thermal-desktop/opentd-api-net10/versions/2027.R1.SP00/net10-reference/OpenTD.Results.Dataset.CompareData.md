# Class CompareData

Namespace: [OpenTD.Results.Dataset](OpenTD.Results.Dataset.md)  
Assembly: OpenTD.Results.dll  

```csharp
public abstract class CompareData : ICompareData
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CompareData](OpenTD.Results.Dataset.CompareData.md)

#### Derived

[PercentDifferenceCompareData](OpenTD.Results.Dataset.PercentDifferenceCompareData.md)

## Implements

[ICompareData](OpenTD.Results.Dataset.ICompareData.md)

## Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### CompareData\(IComparerInput, IComparerOutput\)

```csharp
public CompareData(IComparerInput comparerInput, IComparerOutput comparerOutput)
```

#### Parameters

`comparerInput` [IComparerInput](OpenTD.Results.Dataset.IComparerInput.md)

`comparerOutput` [IComparerOutput](OpenTD.Results.Dataset.IComparerOutput.md)

## Properties

### ComparerInput

The Comparer will send data from the datasets through this member.

```csharp
public IComparerInput ComparerInput { get; set; }
```

#### Property Value

 [IComparerInput](OpenTD.Results.Dataset.IComparerInput.md)

### ComparerOutput

Send output from the comparison to the Comparer through this member.

```csharp
public IComparerOutput ComparerOutput { get; set; }
```

#### Property Value

 [IComparerOutput](OpenTD.Results.Dataset.IComparerOutput.md)

## Methods

### Compare\(string, DataSubtype, IEnumerable<string\>, IEnumerable<long\>, IEnumerable<long\>, bool\)

This method implements the comparison algorithm.

```csharp
public abstract void Compare(string name, DataSubtype subtype, IEnumerable<string> commonNames, IEnumerable<long> commonIndicesA, IEnumerable<long> commonIndicesB, bool msgOnSuccess = true)
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


