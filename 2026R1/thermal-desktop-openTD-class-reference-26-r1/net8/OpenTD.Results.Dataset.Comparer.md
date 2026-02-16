# <a id="OpenTD_Results_Dataset_Comparer"></a> Class Comparer

Namespace: [OpenTD.Results.Dataset](OpenTD.Results.Dataset.md)  
Assembly: OpenTD.Results.dll  

Use to compare two Datasets.

```csharp
public class Comparer : IComparerInput, IComparerOutput
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Comparer](OpenTD.Results.Dataset.Comparer.md)

#### Implements

[IComparerInput](OpenTD.Results.Dataset.IComparerInput.md), 
[IComparerOutput](OpenTD.Results.Dataset.IComparerOutput.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="OpenTD_Results_Dataset_Comparer__ctor_OpenTD_Results_Dataset_IDataset_OpenTD_Results_Dataset_IDataset_"></a> Comparer\(IDataset, IDataset\)

Initializes a new instance of the <xref href="OpenTD.Results.Dataset.Comparer" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Comparer(IDataset a, IDataset b)
```

#### Parameters

`a` [IDataset](OpenTD.Results.Dataset.IDataset.md)

Dataset A

`b` [IDataset](OpenTD.Results.Dataset.IDataset.md)

Dataset B

## Properties

### <a id="OpenTD_Results_Dataset_Comparer_CompareConductorNames"></a> CompareConductorNames

Determines whether Run() will compare the ID's of conductors in common
thermal submodels.

```csharp
public bool CompareConductorNames { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_Results_Dataset_Comparer_CompareFTieNames"></a> CompareFTieNames

Determines whether Run() will compare the ID's of FTies in common
fluid submodels.

```csharp
public bool CompareFTieNames { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_Results_Dataset_Comparer_CompareFluidSubmodels"></a> CompareFluidSubmodels

Determines whether Run() will compare the names of the fluid submodels.

```csharp
public bool CompareFluidSubmodels { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_Results_Dataset_Comparer_CompareIFaceNames"></a> CompareIFaceNames

Determines whether Run() will compare the ID's of IFaces in common
fluid submodels.

```csharp
public bool CompareIFaceNames { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_Results_Dataset_Comparer_CompareJustFinalRecord"></a> CompareJustFinalRecord

Determines whether Run() will compare just the final data values
in each dataset. If true, will also ignore differences in number
of records and won't compare times. Defaults to false.

```csharp
public bool CompareJustFinalRecord { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_Results_Dataset_Comparer_CompareLumpNames"></a> CompareLumpNames

Determines whether Run() will compare the ID's of lumps in common
fluid submodels.

```csharp
public bool CompareLumpNames { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_Results_Dataset_Comparer_CompareNodeNames"></a> CompareNodeNames

Determines whether Run() will compare the ID's of nodes in common
thermal submodels.

```csharp
public bool CompareNodeNames { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_Results_Dataset_Comparer_ComparePathNames"></a> ComparePathNames

Determines whether Run() will compare the ID's of paths in common
fluid submodels.

```csharp
public bool ComparePathNames { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_Results_Dataset_Comparer_CompareRecords"></a> CompareRecords

Determines whether Run() will compare the number of records.

```csharp
public bool CompareRecords { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_Results_Dataset_Comparer_CompareRegisterNames"></a> CompareRegisterNames

Determines whether Run() will compare the names of registers.

```csharp
public bool CompareRegisterNames { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_Results_Dataset_Comparer_CompareThermalSubmodels"></a> CompareThermalSubmodels

Determines whether Run() will compare the names of the thermal submodels.

```csharp
public bool CompareThermalSubmodels { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_Results_Dataset_Comparer_CompareTieNames"></a> CompareTieNames

Determines whether Run() will compare the ID's of ties in common
fluid submodels.

```csharp
public bool CompareTieNames { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_Results_Dataset_Comparer_CompareTimes"></a> CompareTimes

Determines whether Run() will compare the max and min times.

```csharp
public bool CompareTimes { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_Results_Dataset_Comparer_ComparisonMethods"></a> ComparisonMethods

This dispatch table determines what comparison methods will be used for each
StandardDataSubtype (T, TL, etc.). All others not listed will use the
DefaultComparisonMethod algorithm.

```csharp
public Dictionary<StandardDataSubtypes, ICompareData> ComparisonMethods { get; set; }
```

#### Property Value

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[StandardDataSubtypes](OpenTD.Results.Dataset.StandardDataSubtypes.md), [ICompareData](OpenTD.Results.Dataset.ICompareData.md)\>

#### See Also

[DataSubtype](OpenTD.Results.Dataset.DataSubtype.md), 
[Comparer](OpenTD.Results.Dataset.Comparer.md).[DefaultComparisonMethod](OpenTD.Results.Dataset.Comparer.md\#OpenTD\_Results\_Dataset\_Comparer\_DefaultComparisonMethod), 
[StandardDataSubtypes](OpenTD.Results.Dataset.StandardDataSubtypes.md)

### <a id="OpenTD_Results_Dataset_Comparer_DataToCompare"></a> DataToCompare

List of FullStandardDataSubtype (T, TL, PL, etc.) to compare for all common-name entities.
For example, if TL is in the list, then Run() will find all the lump
names that are common between the two Datasets and compare all values of TL for
all of them.

```csharp
public List<FullStandardDataSubtype> DataToCompare { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[FullStandardDataSubtype](OpenTD.Results.Dataset.FullStandardDataSubtype.md)\>

#### See Also

[FullStandardDataSubtype](OpenTD.Results.Dataset.FullStandardDataSubtype.md)

### <a id="OpenTD_Results_Dataset_Comparer_DatasetA"></a> DatasetA

One of the datasets to compare.

```csharp
public IDataset DatasetA { get; }
```

#### Property Value

 [IDataset](OpenTD.Results.Dataset.IDataset.md)

### <a id="OpenTD_Results_Dataset_Comparer_DatasetB"></a> DatasetB

One of the datasets to compare.

```csharp
public IDataset DatasetB { get; }
```

#### Property Value

 [IDataset](OpenTD.Results.Dataset.IDataset.md)

### <a id="OpenTD_Results_Dataset_Comparer_DefaultComparisonMethod"></a> DefaultComparisonMethod

For StandardDataSubtypes (T, TL, etc.) not listed in the ComparisonMethods
dispatch table, use this comparison algorithm.

```csharp
public ICompareData DefaultComparisonMethod { get; set; }
```

#### Property Value

 [ICompareData](OpenTD.Results.Dataset.ICompareData.md)

#### See Also

[DataSubtype](OpenTD.Results.Dataset.DataSubtype.md), 
[Comparer](OpenTD.Results.Dataset.Comparer.md).[ComparisonMethods](OpenTD.Results.Dataset.Comparer.md\#OpenTD\_Results\_Dataset\_Comparer\_ComparisonMethods), 
[StandardDataSubtypes](OpenTD.Results.Dataset.StandardDataSubtypes.md)

### <a id="OpenTD_Results_Dataset_Comparer_Exceedances"></a> Exceedances

After calling Run(), contains information about data items that exceeded the
allowable percent tolerance. Contains a dictionary with one entry for each
FullStandardDataSubtype (T, TL, PL, etc.) tested. The entries are lists of all
items that exceed the percent tolerance, in descending order by exceedance amount.

```csharp
public Dictionary<DataSubtype, List<Exceedance>> Exceedances { get; }
```

#### Property Value

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[DataSubtype](OpenTD.Results.Dataset.DataSubtype.md), [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Exceedance](OpenTD.Results.Dataset.Exceedance.md)\>\>

#### See Also

[FullStandardDataSubtype](OpenTD.Results.Dataset.FullStandardDataSubtype.md), 
[Exceedance](OpenTD.Results.Dataset.Exceedance.md)

### <a id="OpenTD_Results_Dataset_Comparer_Message"></a> Message

Run() outputs a report to this string.

```csharp
public string Message { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_Results_Dataset_Comparer_RecNumsA"></a> RecNumsA

A list of the record numbers in DatasetA.

```csharp
public List<long> RecNumsA { get; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[long](https://learn.microsoft.com/dotnet/api/system.int64)\>

### <a id="OpenTD_Results_Dataset_Comparer_RecNumsB"></a> RecNumsB

A list of the record numbers in DatasetB.

```csharp
public List<long> RecNumsB { get; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[long](https://learn.microsoft.com/dotnet/api/system.int64)\>

### <a id="OpenTD_Results_Dataset_Comparer_RegisterDataToCompare"></a> RegisterDataToCompare

List of registers to compare, if common between datasets.
If list is empty, will compare data for all common registers.

```csharp
public List<string> RegisterDataToCompare { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="OpenTD_Results_Dataset_Comparer_TimePercentTol"></a> TimePercentTol

Tolerance for comparison of time series.

```csharp
public double TimePercentTol { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_Results_Dataset_Comparer_TimesA"></a> TimesA

A list of the times in DatasetA.

```csharp
public List<double> TimesA { get; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### <a id="OpenTD_Results_Dataset_Comparer_TimesB"></a> TimesB

A list of the times in DatasetB.

```csharp
public List<double> TimesB { get; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

## Methods

### <a id="OpenTD_Results_Dataset_Comparer_CloseDatasets"></a> CloseDatasets\(\)

```csharp
public void CloseDatasets()
```

### <a id="OpenTD_Results_Dataset_Comparer_GetExceedancePlots_System_Int32_System_Collections_Generic_IEnumerable_OpenTD_Results_Dataset_DataSubtype__"></a> GetExceedancePlots\(int, IEnumerable<DataSubtype\>\)

```csharp
public List<ExceedancePlot> GetExceedancePlots(int maxPerSubtype = 1, IEnumerable<DataSubtype> subtypes = null)
```

#### Parameters

`maxPerSubtype` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`subtypes` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[DataSubtype](OpenTD.Results.Dataset.DataSubtype.md)\>

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[ExceedancePlot](OpenTD.Results.Dataset.ExceedancePlot.md)\>

### <a id="OpenTD_Results_Dataset_Comparer_PlotExceedances_System_Int32_System_Collections_Generic_IEnumerable_OpenTD_Results_Dataset_DataSubtype__"></a> PlotExceedances\(int, IEnumerable<DataSubtype\>\)

```csharp
public List<ExceedancePlot> PlotExceedances(int maxPerSubtype = 1, IEnumerable<DataSubtype> subtypes = null)
```

#### Parameters

`maxPerSubtype` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`subtypes` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[DataSubtype](OpenTD.Results.Dataset.DataSubtype.md)\>

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[ExceedancePlot](OpenTD.Results.Dataset.ExceedancePlot.md)\>

### <a id="OpenTD_Results_Dataset_Comparer_ReOpenDatasets"></a> ReOpenDatasets\(\)

```csharp
public void ReOpenDatasets()
```

### <a id="OpenTD_Results_Dataset_Comparer_Run"></a> Run\(\)

Compares the datasets. Writes a report to the string Message. Returns true if the
Datasets are found to be equal for all of the tests performed.

```csharp
public bool Run()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if all tests performed indicate the Datasets are equal, <code>false</code> otherwise.

#### See Also

[Comparer](OpenTD.Results.Dataset.Comparer.md).[Message](OpenTD.Results.Dataset.Comparer.md\#OpenTD\_Results\_Dataset\_Comparer\_Message)

### <a id="OpenTD_Results_Dataset_Comparer_SaveExceedancePlots_System_String_System_String__System_String_System_Int32_System_Collections_Generic_IEnumerable_OpenTD_Results_Dataset_DataSubtype__"></a> SaveExceedancePlots\(string, out string, string, int, IEnumerable<DataSubtype\>\)

```csharp
public bool SaveExceedancePlots(string directoryPath, out string resultMsg, string prefix = "", int maxPerSubtype = 1, IEnumerable<DataSubtype> subtypes = null)
```

#### Parameters

`directoryPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

`resultMsg` [string](https://learn.microsoft.com/dotnet/api/system.string)

`prefix` [string](https://learn.microsoft.com/dotnet/api/system.string)

`maxPerSubtype` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`subtypes` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[DataSubtype](OpenTD.Results.Dataset.DataSubtype.md)\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_Results_Dataset_Comparer_ToString"></a> ToString\(\)

Returns a string that represents the current object.

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

A string that represents the current object.

### <a id="OpenTD_Results_Dataset_Comparer__markdiff_System_String_"></a> \_markdiff\(string\)

Do not use.

```csharp
public void _markdiff(string msg)
```

#### Parameters

`msg` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_Results_Dataset_Comparer__writeline_System_String_"></a> \_writeline\(string\)

Do not use.

```csharp
public void _writeline(string msg)
```

#### Parameters

`msg` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_Results_Dataset_Comparer__writesuccess_System_String_"></a> \_writesuccess\(string\)

Do not use.

```csharp
public void _writesuccess(string msg)
```

#### Parameters

`msg` [string](https://learn.microsoft.com/dotnet/api/system.string)

## See Also

[Dataset](OpenTD.Results.Dataset.Dataset.md)

