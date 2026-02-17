# <a id="OpenTD_Results_Dataset_IComparerInput"></a> Interface IComparerInput

Namespace: [OpenTD.Results.Dataset](OpenTD.Results.Dataset.md)  
Assembly: OpenTD.Results.dll  

Collects together all of the Comparer members that will be input to an ICompareData object.

```csharp
public interface IComparerInput
```

## Properties

### <a id="OpenTD_Results_Dataset_IComparerInput_CompareJustFinalRecord"></a> CompareJustFinalRecord

Determines whether Compare() will compare just the final data values
in each dataset.

```csharp
bool CompareJustFinalRecord { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_Results_Dataset_IComparerInput_DatasetA"></a> DatasetA

One of the datasets to compare.

```csharp
IDataset DatasetA { get; }
```

#### Property Value

 [IDataset](OpenTD.Results.Dataset.IDataset.md)

### <a id="OpenTD_Results_Dataset_IComparerInput_DatasetB"></a> DatasetB

One of the datasets to compare.

```csharp
IDataset DatasetB { get; }
```

#### Property Value

 [IDataset](OpenTD.Results.Dataset.IDataset.md)

### <a id="OpenTD_Results_Dataset_IComparerInput_RecNumsA"></a> RecNumsA

A list of the record numbers in DatasetA.

```csharp
List<long> RecNumsA { get; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[long](https://learn.microsoft.com/dotnet/api/system.int64)\>

### <a id="OpenTD_Results_Dataset_IComparerInput_RecNumsB"></a> RecNumsB

A list of the record numbers in DatasetB.

```csharp
List<long> RecNumsB { get; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[long](https://learn.microsoft.com/dotnet/api/system.int64)\>

### <a id="OpenTD_Results_Dataset_IComparerInput_TimesA"></a> TimesA

A list of the times in DatasetA.

```csharp
List<double> TimesA { get; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### <a id="OpenTD_Results_Dataset_IComparerInput_TimesB"></a> TimesB

A list of the times in DatasetB.

```csharp
List<double> TimesB { get; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

## See Also

[Comparer](OpenTD.Results.Dataset.Comparer.md), 
[ICompareData](OpenTD.Results.Dataset.ICompareData.md)

