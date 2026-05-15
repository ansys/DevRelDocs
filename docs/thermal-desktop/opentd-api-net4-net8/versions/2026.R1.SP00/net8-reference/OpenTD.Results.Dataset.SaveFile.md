# Class SaveFile

Namespace: [OpenTD.Results.Dataset](OpenTD.Results.Dataset.md)  
Assembly: OpenTD.Results.dll  

A Dataset representing one save file.
Units are automatically read from the save file, if available.

```csharp
public sealed class SaveFile : RecordFocusedDataset, IDataset
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Dataset](OpenTD.Results.Dataset.Dataset.md) ← 
RecordFocusedDataset ← 
[SaveFile](OpenTD.Results.Dataset.SaveFile.md)

## Implements

[IDataset](OpenTD.Results.Dataset.IDataset.md)

## Inherited Members

[Dataset.GetData\(DataItemIdentifierCollection\)](OpenTD.Results.Dataset.Dataset.md\#OpenTD\_Results\_Dataset\_Dataset\_GetData\_OpenTD\_Results\_Dataset\_DataItemIdentifierCollection\_), 
[Dataset.GetUdcaData\(DataItemIdentifierCollection\)](OpenTD.Results.Dataset.Dataset.md\#OpenTD\_Results\_Dataset\_Dataset\_GetUdcaData\_OpenTD\_Results\_Dataset\_DataItemIdentifierCollection\_), 
[Dataset.GetData\(params string\[\]\)](OpenTD.Results.Dataset.Dataset.md\#OpenTD\_Results\_Dataset\_Dataset\_GetData\_System\_String\_\_\_), 
[Dataset.GetData\(ItemIdentifierCollection, DataSubtype, UnitsData\)](OpenTD.Results.Dataset.Dataset.md\#OpenTD\_Results\_Dataset\_Dataset\_GetData\_OpenTD\_Results\_Dataset\_ItemIdentifierCollection\_OpenTD\_Results\_Dataset\_DataSubtype\_OpenTD\_UnitsData\_), 
[Dataset.GetDataAtRecord\(DataSubtype, long\)](OpenTD.Results.Dataset.Dataset.md\#OpenTD\_Results\_Dataset\_Dataset\_GetDataAtRecord\_OpenTD\_Results\_Dataset\_DataSubtype\_System\_Int64\_), 
[Dataset.GetRegisterDataAtRecord\(long, DataSubtype, UnitsData\)](OpenTD.Results.Dataset.Dataset.md\#OpenTD\_Results\_Dataset\_Dataset\_GetRegisterDataAtRecord\_System\_Int64\_OpenTD\_Results\_Dataset\_DataSubtype\_OpenTD\_UnitsData\_), 
[Dataset.GetUdfasAtRecord\(long\)](OpenTD.Results.Dataset.Dataset.md\#OpenTD\_Results\_Dataset\_Dataset\_GetUdfasAtRecord\_System\_Int64\_), 
[Dataset.GetUdcaDataAtRecord\(DataSubtype, long\)](OpenTD.Results.Dataset.Dataset.md\#OpenTD\_Results\_Dataset\_Dataset\_GetUdcaDataAtRecord\_OpenTD\_Results\_Dataset\_DataSubtype\_System\_Int64\_), 
[Dataset.GetConstraintData\(long, DataSubtype, UnitsData\)](OpenTD.Results.Dataset.Dataset.md\#OpenTD\_Results\_Dataset\_Dataset\_GetConstraintData\_System\_Int64\_OpenTD\_Results\_Dataset\_DataSubtype\_OpenTD\_UnitsData\_), 
[Dataset.GetReliabilityData\(long, DataSubtype, UnitsData\)](OpenTD.Results.Dataset.Dataset.md\#OpenTD\_Results\_Dataset\_Dataset\_GetReliabilityData\_System\_Int64\_OpenTD\_Results\_Dataset\_DataSubtype\_OpenTD\_UnitsData\_), 
[Dataset.GetRegisterData\(string, DataSubtype, UnitsData\)](OpenTD.Results.Dataset.Dataset.md\#OpenTD\_Results\_Dataset\_Dataset\_GetRegisterData\_System\_String\_OpenTD\_Results\_Dataset\_DataSubtype\_OpenTD\_UnitsData\_), 
[Dataset.GetRecordNumbers\(\)](OpenTD.Results.Dataset.Dataset.md\#OpenTD\_Results\_Dataset\_Dataset\_GetRecordNumbers), 
[Dataset.GetRecordNumbersAsDataArray\(\)](OpenTD.Results.Dataset.Dataset.md\#OpenTD\_Results\_Dataset\_Dataset\_GetRecordNumbersAsDataArray), 
[Dataset.GetRecordNames\(\)](OpenTD.Results.Dataset.Dataset.md\#OpenTD\_Results\_Dataset\_Dataset\_GetRecordNames), 
[Dataset.GetTimes\(\)](OpenTD.Results.Dataset.Dataset.md\#OpenTD\_Results\_Dataset\_Dataset\_GetTimes), 
[Dataset.GetTimesOrRecordNumbers\(\)](OpenTD.Results.Dataset.Dataset.md\#OpenTD\_Results\_Dataset\_Dataset\_GetTimesOrRecordNumbers), 
[Dataset.GetNsol\(long\)](OpenTD.Results.Dataset.Dataset.md\#OpenTD\_Results\_Dataset\_Dataset\_GetNsol\_System\_Int64\_), 
[Dataset.GetNpcsrec\(long\)](OpenTD.Results.Dataset.Dataset.md\#OpenTD\_Results\_Dataset\_Dataset\_GetNpcsrec\_System\_Int64\_), 
[Dataset.GetSigma\(\)](OpenTD.Results.Dataset.Dataset.md\#OpenTD\_Results\_Dataset\_Dataset\_GetSigma), 
[Dataset.GetAbszro\(\)](OpenTD.Results.Dataset.Dataset.md\#OpenTD\_Results\_Dataset\_Dataset\_GetAbszro), 
[Dataset.GetPatmos\(\)](OpenTD.Results.Dataset.Dataset.md\#OpenTD\_Results\_Dataset\_Dataset\_GetPatmos), 
[Dataset.GetLoopctData\(\)](OpenTD.Results.Dataset.Dataset.md\#OpenTD\_Results\_Dataset\_Dataset\_GetLoopctData), 
[Dataset.GetLoopcoData\(\)](OpenTD.Results.Dataset.Dataset.md\#OpenTD\_Results\_Dataset\_Dataset\_GetLoopcoData), 
[Dataset.GetNamedInt\(IntegerNames\)](OpenTD.Results.Dataset.Dataset.md\#OpenTD\_Results\_Dataset\_Dataset\_GetNamedInt\_OpenTD\_Results\_Dataset\_IntegerNames\_), 
[Dataset.GetNamedInt\(string\)](OpenTD.Results.Dataset.Dataset.md\#OpenTD\_Results\_Dataset\_Dataset\_GetNamedInt\_System\_String\_), 
[Dataset.GetNamedIntArray\(ArrayIntegerNames\)](OpenTD.Results.Dataset.Dataset.md\#OpenTD\_Results\_Dataset\_Dataset\_GetNamedIntArray\_OpenTD\_Results\_Dataset\_ArrayIntegerNames\_), 
[Dataset.GetNamedIntArray\(string\)](OpenTD.Results.Dataset.Dataset.md\#OpenTD\_Results\_Dataset\_Dataset\_GetNamedIntArray\_System\_String\_), 
[Dataset.GetThermalSubmodels\(\)](OpenTD.Results.Dataset.Dataset.md\#OpenTD\_Results\_Dataset\_Dataset\_GetThermalSubmodels), 
[Dataset.GetFluidSubmodels\(\)](OpenTD.Results.Dataset.Dataset.md\#OpenTD\_Results\_Dataset\_Dataset\_GetFluidSubmodels), 
[Dataset.GetRegisterNames\(\)](OpenTD.Results.Dataset.Dataset.md\#OpenTD\_Results\_Dataset\_Dataset\_GetRegisterNames), 
[Dataset.GetLumpIds\(string\)](OpenTD.Results.Dataset.Dataset.md\#OpenTD\_Results\_Dataset\_Dataset\_GetLumpIds\_System\_String\_), 
[Dataset.GetPathIds\(string\)](OpenTD.Results.Dataset.Dataset.md\#OpenTD\_Results\_Dataset\_Dataset\_GetPathIds\_System\_String\_), 
[Dataset.GetTieIds\(string\)](OpenTD.Results.Dataset.Dataset.md\#OpenTD\_Results\_Dataset\_Dataset\_GetTieIds\_System\_String\_), 
[Dataset.GetFtieIds\(string\)](OpenTD.Results.Dataset.Dataset.md\#OpenTD\_Results\_Dataset\_Dataset\_GetFtieIds\_System\_String\_), 
[Dataset.GetIfaceIds\(string\)](OpenTD.Results.Dataset.Dataset.md\#OpenTD\_Results\_Dataset\_Dataset\_GetIfaceIds\_System\_String\_), 
[Dataset.GetNodeIds\(string\)](OpenTD.Results.Dataset.Dataset.md\#OpenTD\_Results\_Dataset\_Dataset\_GetNodeIds\_System\_String\_), 
[Dataset.GetConductorIds\(string\)](OpenTD.Results.Dataset.Dataset.md\#OpenTD\_Results\_Dataset\_Dataset\_GetConductorIds\_System\_String\_), 
[Dataset.GetInternalIndex\(DataTypes, string, long\)](OpenTD.Results.Dataset.Dataset.md\#OpenTD\_Results\_Dataset\_Dataset\_GetInternalIndex\_OpenTD\_Results\_Dataset\_DataTypes\_System\_String\_System\_Int64\_), 
[Dataset.GetInternalIndex\(string\)](OpenTD.Results.Dataset.Dataset.md\#OpenTD\_Results\_Dataset\_Dataset\_GetInternalIndex\_System\_String\_), 
[Dataset.Units](OpenTD.Results.Dataset.Dataset.md\#OpenTD\_Results\_Dataset\_Dataset\_Units), 
[Dataset.Source](OpenTD.Results.Dataset.Dataset.md\#OpenTD\_Results\_Dataset\_Dataset\_Source), 
[Dataset.Close\(\)](OpenTD.Results.Dataset.Dataset.md\#OpenTD\_Results\_Dataset\_Dataset\_Close), 
[Dataset.ReOpen\(\)](OpenTD.Results.Dataset.Dataset.md\#OpenTD\_Results\_Dataset\_Dataset\_ReOpen), 
[Dataset.GetUDFAManager\(\)](OpenTD.Results.Dataset.Dataset.md\#OpenTD\_Results\_Dataset\_Dataset\_GetUDFAManager), 
[Dataset.Name](OpenTD.Results.Dataset.Dataset.md\#OpenTD\_Results\_Dataset\_Dataset\_Name), 
[Dataset.InternalSuggestedName](OpenTD.Results.Dataset.Dataset.md\#OpenTD\_Results\_Dataset\_Dataset\_InternalSuggestedName), 
[Dataset.ToString\(\)](OpenTD.Results.Dataset.Dataset.md\#OpenTD\_Results\_Dataset\_Dataset\_ToString), 
[Dataset.Comment](OpenTD.Results.Dataset.Dataset.md\#OpenTD\_Results\_Dataset\_Dataset\_Comment), 
[Dataset.InternalSuggestedComment](OpenTD.Results.Dataset.Dataset.md\#OpenTD\_Results\_Dataset\_Dataset\_InternalSuggestedComment), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### SaveFile\(string\)

```csharp
public SaveFile(string pathToSave)
```

#### Parameters

`pathToSave` [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### Pathname

```csharp
public string Pathname { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### Close\(\)

```csharp
public override void Close()
```

### GetAbszro\(\)

```csharp
public override Dimensional<Temp> GetAbszro()
```

#### Returns

 Dimensional<Temp\>

### GetConductorIds\(string\)

```csharp
public override List<long> GetConductorIds(string submodel)
```

#### Parameters

`submodel` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[long](https://learn.microsoft.com/dotnet/api/system.int64)\>

### GetConstraintData\(long, DataSubtype, UnitsData\)

```csharp
public override DataArray GetConstraintData(long constraintNumber, DataSubtype subtype = null, UnitsData units = null)
```

#### Parameters

`constraintNumber` [long](https://learn.microsoft.com/dotnet/api/system.int64)

`subtype` [DataSubtype](OpenTD.Results.Dataset.DataSubtype.md)

`units` UnitsData

#### Returns

 [DataArray](OpenTD.Results.Dataset.DataArray.md)

### GetData\(DataItemIdentifierCollection\)

Gets data for a collection of data items (e.g., "MAIN.T10", "FLOW.TL40", etc.).

```csharp
public override DataArrayCollection GetData(DataItemIdentifierCollection dataItems)
```

#### Parameters

`dataItems` [DataItemIdentifierCollection](OpenTD.Results.Dataset.DataItemIdentifierCollection.md)

#### Returns

 [DataArrayCollection](OpenTD.Results.Dataset.DataArrayCollection.md)

A <code>DataArrayCollection</code> for the requested dataItems.

### GetDataAtRecord\(DataSubtype, long\)

Gets all data for a given subtype at a single record. If recordNum is invalid,
or if no data of the given subtype exists at the record, will return an empty
DataArray.

```csharp
public override DataArray GetDataAtRecord(DataSubtype subtype, long recordNum)
```

#### Parameters

`subtype` [DataSubtype](OpenTD.Results.Dataset.DataSubtype.md)

`recordNum` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [DataArray](OpenTD.Results.Dataset.DataArray.md)

#### Exceptions

 OpenTDException

Thrown if the <code>DataSubtype</code>
    represents a character UDFA.

### GetFluidSubmodels\(\)

```csharp
public override List<string> GetFluidSubmodels()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### GetFtieIds\(string\)

```csharp
public override List<long> GetFtieIds(string submodel)
```

#### Parameters

`submodel` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[long](https://learn.microsoft.com/dotnet/api/system.int64)\>

### GetIfaceIds\(string\)

```csharp
public override List<long> GetIfaceIds(string submodel)
```

#### Parameters

`submodel` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[long](https://learn.microsoft.com/dotnet/api/system.int64)\>

### GetInternalIndex\(DataTypes, string, long\)

The 0-indexed position of the given Sinda entity in arrays
returned by GetDataAtRecord. Returns -1 if entity can't be found.

```csharp
public override long GetInternalIndex(DataTypes dataType, string submodel, long id)
```

#### Parameters

`dataType` [DataTypes](OpenTD.Results.Dataset.DataTypes.md)

`submodel` [string](https://learn.microsoft.com/dotnet/api/system.string)

`id` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### See Also

[Dataset](OpenTD.Results.Dataset.Dataset.md).[GetDataAtRecord](OpenTD.Results.Dataset.Dataset.md\#OpenTD\_Results\_Dataset\_Dataset\_GetDataAtRecord\_OpenTD\_Results\_Dataset\_DataSubtype\_System\_Int64\_)\([DataSubtype](OpenTD.Results.Dataset.DataSubtype.md), [long](https://learn.microsoft.com/dotnet/api/system.int64)\)

### GetLoopcoData\(\)

```csharp
public override List<long> GetLoopcoData()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[long](https://learn.microsoft.com/dotnet/api/system.int64)\>

### GetLoopctData\(\)

```csharp
public override List<long> GetLoopctData()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[long](https://learn.microsoft.com/dotnet/api/system.int64)\>

### GetLumpIds\(string\)

```csharp
public override List<long> GetLumpIds(string submodel)
```

#### Parameters

`submodel` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[long](https://learn.microsoft.com/dotnet/api/system.int64)\>

### GetNamedInt\(string\)

```csharp
public override long GetNamedInt(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### GetNamedIntArray\(string\)

```csharp
public override List<long> GetNamedIntArray(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[long](https://learn.microsoft.com/dotnet/api/system.int64)\>

### GetNodeIds\(string\)

```csharp
public override List<long> GetNodeIds(string submodel)
```

#### Parameters

`submodel` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[long](https://learn.microsoft.com/dotnet/api/system.int64)\>

### GetNpcsrec\(long\)

```csharp
public override long GetNpcsrec(long recordNum)
```

#### Parameters

`recordNum` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### GetNsol\(long\)

```csharp
public override long GetNsol(long recordNum)
```

#### Parameters

`recordNum` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### GetPathIds\(string\)

```csharp
public override List<long> GetPathIds(string submodel)
```

#### Parameters

`submodel` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[long](https://learn.microsoft.com/dotnet/api/system.int64)\>

### GetPatmos\(\)

```csharp
public override Dimensional<Pressure> GetPatmos()
```

#### Returns

 Dimensional<Pressure\>

### GetRecordNames\(\)

```csharp
public override List<string> GetRecordNames()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### GetRecordNumbers\(\)

```csharp
public override List<long> GetRecordNumbers()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[long](https://learn.microsoft.com/dotnet/api/system.int64)\>

### GetRegisterDataAtRecord\(long, DataSubtype, UnitsData\)

Gets all register data at a single record. Use GetRegisterNames to get
a list of register names in the same order as the data returned from this
method. Or use GetInternalIndex to find the index of a specific register
in this list. If recordNum is invalid, or if no register data exists at
the record, will return an empty DataArray.

```csharp
public override DataArray GetRegisterDataAtRecord(long recordNum, DataSubtype subtype = null, UnitsData units = null)
```

#### Parameters

`recordNum` [long](https://learn.microsoft.com/dotnet/api/system.int64)

`subtype` [DataSubtype](OpenTD.Results.Dataset.DataSubtype.md)

`units` UnitsData

#### Returns

 [DataArray](OpenTD.Results.Dataset.DataArray.md)

#### See Also

[Dataset](OpenTD.Results.Dataset.Dataset.md).[GetRegisterNames](OpenTD.Results.Dataset.Dataset.md\#OpenTD\_Results\_Dataset\_Dataset\_GetRegisterNames)\(\), 
[Dataset](OpenTD.Results.Dataset.Dataset.md).[GetInternalIndex](OpenTD.Results.Dataset.Dataset.md\#OpenTD\_Results\_Dataset\_Dataset\_GetInternalIndex\_OpenTD\_Results\_Dataset\_DataTypes\_System\_String\_System\_Int64\_)\([DataTypes](OpenTD.Results.Dataset.DataTypes.md), [string](https://learn.microsoft.com/dotnet/api/system.string), [long](https://learn.microsoft.com/dotnet/api/system.int64)\)

### GetRegisterNames\(\)

```csharp
public override List<string> GetRegisterNames()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### GetReliabilityData\(long, DataSubtype, UnitsData\)

```csharp
public override DataArray GetReliabilityData(long reliabilityNumber, DataSubtype subtype = null, UnitsData units = null)
```

#### Parameters

`reliabilityNumber` [long](https://learn.microsoft.com/dotnet/api/system.int64)

`subtype` [DataSubtype](OpenTD.Results.Dataset.DataSubtype.md)

`units` UnitsData

#### Returns

 [DataArray](OpenTD.Results.Dataset.DataArray.md)

### GetSigma\(\)

```csharp
public override Dimensional<StefanBoltzmann> GetSigma()
```

#### Returns

 Dimensional<StefanBoltzmann\>

### GetThermalSubmodels\(\)

```csharp
public override List<string> GetThermalSubmodels()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### GetTieIds\(string\)

```csharp
public override List<long> GetTieIds(string submodel)
```

#### Parameters

`submodel` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[long](https://learn.microsoft.com/dotnet/api/system.int64)\>

### GetTimes\(\)

```csharp
public override DataArray GetTimes()
```

#### Returns

 [DataArray](OpenTD.Results.Dataset.DataArray.md)

### GetUdcaData\(DataItemIdentifierCollection\)

Gets data for a collection of data items representing character UDFAs.

```csharp
public override List<List<string>> GetUdcaData(DataItemIdentifierCollection dataItems)
```

#### Parameters

`dataItems` [DataItemIdentifierCollection](OpenTD.Results.Dataset.DataItemIdentifierCollection.md)

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>\>

A <code>DataArrayCollection</code> for the requested dataItems.

#### Exceptions

 OpenTDException

Thrown if any of items in dataItems
    do not specify character UDFAs

### GetUdcaDataAtRecord\(DataSubtype, long\)

Gets the UDFA of strings represented by a <code>DataSubtype</code> at a given record

```csharp
public override List<string> GetUdcaDataAtRecord(DataSubtype subtype, long recordNum)
```

#### Parameters

`subtype` [DataSubtype](OpenTD.Results.Dataset.DataSubtype.md)

`recordNum` [long](https://learn.microsoft.com/dotnet/api/system.int64)

Record number from which to extract UDFA strings.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

A list of character UDFA values.

#### Exceptions

 OpenTDException

Thrown if the <code>DataSubtype</code>
   represents a noncharacter UDFA.

### GetUdfasAtRecord\(long\)

Gets <code>DataSubtypes</code> UDFA at the given record number.

```csharp
public override List<DataSubtype> GetUdfasAtRecord(long recordNum)
```

#### Parameters

`recordNum` [long](https://learn.microsoft.com/dotnet/api/system.int64)

Record number from which to extract UDFA subtypes.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[DataSubtype](OpenTD.Results.Dataset.DataSubtype.md)\>

A list of <code>DataSubtype</code> objects.

### ReOpen\(\)

```csharp
public override void ReOpen()
```

## See Also

[Dataset](OpenTD.Results.Dataset.Dataset.md)


