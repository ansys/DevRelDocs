# <a id="OpenTD_Results_Dataset_IComparerOutput"></a> Interface IComparerOutput

Namespace: [OpenTD.Results.Dataset](OpenTD.Results.Dataset.md)  
Assembly: OpenTD.Results.dll  

Collects together all of the Comparer members that will be output from an ICompareData object.

```csharp
public interface IComparerOutput
```

## Properties

### <a id="OpenTD_Results_Dataset_IComparerOutput_Exceedances"></a> Exceedances

Collect a list of exceedances for the tested DataSubtype here, if it makes sense
for your comparison algorithm.

```csharp
Dictionary<DataSubtype, List<Exceedance>> Exceedances { get; }
```

#### Property Value

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[DataSubtype](OpenTD.Results.Dataset.DataSubtype.md), [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Exceedance](OpenTD.Results.Dataset.Exceedance.md)\>\>

#### See Also

[DataSubtype](OpenTD.Results.Dataset.DataSubtype.md), 
[Exceedance](OpenTD.Results.Dataset.Exceedance.md)

## Methods

### <a id="OpenTD_Results_Dataset_IComparerOutput__markdiff_System_String_"></a> \_markdiff\(string\)

Use to record a difference between datasets; for example
"Type X data differed between datasets".
This will also up the diffCount. If the diffCount is greater than
0 the datasets will be considered different.

```csharp
void _markdiff(string msg)
```

#### Parameters

`msg` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_Results_Dataset_IComparerOutput__writeline_System_String_"></a> \_writeline\(string\)

Use to send a general message to Comparer output; for example
"Starting to compare data of Type X..."

```csharp
void _writeline(string msg)
```

#### Parameters

`msg` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_Results_Dataset_IComparerOutput__writesuccess_System_String_"></a> \_writesuccess\(string\)

Use to send a success message to Comparer output; for example
"Type X data was the same in both datasets"

```csharp
void _writesuccess(string msg)
```

#### Parameters

`msg` [string](https://learn.microsoft.com/dotnet/api/system.string)

## See Also

[Comparer](OpenTD.Results.Dataset.Comparer.md), 
[ICompareData](OpenTD.Results.Dataset.ICompareData.md)

