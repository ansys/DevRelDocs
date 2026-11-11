# Class TextTransientFile

Namespace: [OpenTD.Results.Dataset](OpenTD.Results.Dataset.md)  
Assembly: OpenTD.Results.dll  

Represents a TD text transient file, a text-file containing results or
test data in a format specified in the TD manual.
Implements the <xref href="OpenTD.Results.Dataset.SimpleDataset" data-throw-if-not-resolved="false"></xref>
Implements the <xref href="OpenTD.Results.Dataset.ISimpleDataset" data-throw-if-not-resolved="false"></xref>
Implements the <xref href="OpenTD.Results.Dataset.IDataset" data-throw-if-not-resolved="false"></xref>

```csharp
public class TextTransientFile : SimpleDataset, ISimpleDataset, IDataset
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Dataset](OpenTD.Results.Dataset.Dataset.md) ← 
[SimpleDataset](OpenTD.Results.Dataset.SimpleDataset.md) ← 
[TextTransientFile](OpenTD.Results.Dataset.TextTransientFile.md)

## Implements

[ISimpleDataset](OpenTD.Results.Dataset.ISimpleDataset.md), 
[IDataset](OpenTD.Results.Dataset.IDataset.md)

## Inherited Members

[SimpleDataset.GetAllData\(bool\)](OpenTD.Results.Dataset.SimpleDataset.md\#OpenTD\_Results\_Dataset\_SimpleDataset\_GetAllData\_System\_Boolean\_), 
[SimpleDataset.GetData\(DataItemIdentifierCollection\)](OpenTD.Results.Dataset.SimpleDataset.md\#OpenTD\_Results\_Dataset\_SimpleDataset\_GetData\_OpenTD\_Results\_Dataset\_DataItemIdentifierCollection\_), 
[SimpleDataset.GetUdcaData\(DataItemIdentifierCollection\)](OpenTD.Results.Dataset.SimpleDataset.md\#OpenTD\_Results\_Dataset\_SimpleDataset\_GetUdcaData\_OpenTD\_Results\_Dataset\_DataItemIdentifierCollection\_), 
[SimpleDataset.Close\(\)](OpenTD.Results.Dataset.SimpleDataset.md\#OpenTD\_Results\_Dataset\_SimpleDataset\_Close), 
[SimpleDataset.ReOpen\(\)](OpenTD.Results.Dataset.SimpleDataset.md\#OpenTD\_Results\_Dataset\_SimpleDataset\_ReOpen), 
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
[Dataset.UnitsChangedSinceLastRead\(\)](OpenTD.Results.Dataset.Dataset.md\#OpenTD\_Results\_Dataset\_Dataset\_UnitsChangedSinceLastRead), 
[Dataset.Source](OpenTD.Results.Dataset.Dataset.md\#OpenTD\_Results\_Dataset\_Dataset\_Source), 
[Dataset.Close\(\)](OpenTD.Results.Dataset.Dataset.md\#OpenTD\_Results\_Dataset\_Dataset\_Close), 
[Dataset.ReOpen\(\)](OpenTD.Results.Dataset.Dataset.md\#OpenTD\_Results\_Dataset\_Dataset\_ReOpen), 
[Dataset.UDFAManager](OpenTD.Results.Dataset.Dataset.md\#OpenTD\_Results\_Dataset\_Dataset\_UDFAManager), 
[Dataset.GetUDFAManager\(\)](OpenTD.Results.Dataset.Dataset.md\#OpenTD\_Results\_Dataset\_Dataset\_GetUDFAManager), 
[Dataset.AutoNamer](OpenTD.Results.Dataset.Dataset.md\#OpenTD\_Results\_Dataset\_Dataset\_AutoNamer), 
[Dataset.Name](OpenTD.Results.Dataset.Dataset.md\#OpenTD\_Results\_Dataset\_Dataset\_Name), 
[Dataset.InternalSuggestedName](OpenTD.Results.Dataset.Dataset.md\#OpenTD\_Results\_Dataset\_Dataset\_InternalSuggestedName), 
[Dataset.GetSelfSuggestedName\(\)](OpenTD.Results.Dataset.Dataset.md\#OpenTD\_Results\_Dataset\_Dataset\_GetSelfSuggestedName), 
[Dataset.ToString\(\)](OpenTD.Results.Dataset.Dataset.md\#OpenTD\_Results\_Dataset\_Dataset\_ToString), 
[Dataset.AutoCommenter](OpenTD.Results.Dataset.Dataset.md\#OpenTD\_Results\_Dataset\_Dataset\_AutoCommenter), 
[Dataset.Comment](OpenTD.Results.Dataset.Dataset.md\#OpenTD\_Results\_Dataset\_Dataset\_Comment), 
[Dataset.InternalSuggestedComment](OpenTD.Results.Dataset.Dataset.md\#OpenTD\_Results\_Dataset\_Dataset\_InternalSuggestedComment), 
[Dataset.GetSelfSuggestedComment\(\)](OpenTD.Results.Dataset.Dataset.md\#OpenTD\_Results\_Dataset\_Dataset\_GetSelfSuggestedComment), 
[Dataset.Relay<T\_collection, T\_item\>\(T\_collection\)](OpenTD.Results.Dataset.Dataset.md\#OpenTD\_Results\_Dataset\_Dataset\_Relay\_\_2\_\_\_0\_), 
[Dataset.Relay<T\_item\>\(List<T\_item\>\)](OpenTD.Results.Dataset.Dataset.md\#OpenTD\_Results\_Dataset\_Dataset\_Relay\_\_1\_System\_Collections\_Generic\_List\_\_\_0\_\_), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### TextTransientFile\(string, DataSubtype, UnitsData\)

```csharp
public TextTransientFile(string pathname, DataSubtype dataSubtype = null, UnitsData units = null)
```

#### Parameters

`pathname` [string](https://learn.microsoft.com/dotnet/api/system.string)

`dataSubtype` [DataSubtype](OpenTD.Results.Dataset.DataSubtype.md)

`units` UnitsData

## Properties

### DataType

```csharp
public DataTypes DataType { get; }
```

#### Property Value

 [DataTypes](OpenTD.Results.Dataset.DataTypes.md)

### DataTypeFamily

```csharp
public DataTypeFamilies DataTypeFamily { get; }
```

#### Property Value

 [DataTypeFamilies](OpenTD.Results.Dataset.DataTypeFamilies.md)

### Label

```csharp
public string Label { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### Pathname

```csharp
public string Pathname { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### Subtype

```csharp
public DataSubtype Subtype { get; }
```

#### Property Value

 [DataSubtype](OpenTD.Results.Dataset.DataSubtype.md)

## Methods

### GetAbszro\(\)

```csharp
public override Dimensional<Temp> GetAbszro()
```

#### Returns

 Dimensional<Temp\>

### GetAllData\(bool\)

```csharp
public override DataArrayCollection GetAllData(bool includeXDataAsFirstArray = true)
```

#### Parameters

`includeXDataAsFirstArray` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [DataArrayCollection](OpenTD.Results.Dataset.DataArrayCollection.md)

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

### GetData\(string, long\)

```csharp
public DataArray GetData(string submodel, long id)
```

#### Parameters

`submodel` [string](https://learn.microsoft.com/dotnet/api/system.string)

`id` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [DataArray](OpenTD.Results.Dataset.DataArray.md)

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

Text Transient files don't have record numbers, so this
returns a list of sequential integers starting at 0.

```csharp
public override List<long> GetRecordNumbers()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[long](https://learn.microsoft.com/dotnet/api/system.int64)\>

### GetRegisterData\(string, DataSubtype, UnitsData\)

Gets all data for a register across all records. If data
doesn't exist at a record, NaN will be returned instead.

```csharp
public override DataArray GetRegisterData(string registerName, DataSubtype subtype = null, UnitsData units = null)
```

#### Parameters

`registerName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`subtype` [DataSubtype](OpenTD.Results.Dataset.DataSubtype.md)

`units` UnitsData

#### Returns

 [DataArray](OpenTD.Results.Dataset.DataArray.md)

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

### GetSelfSuggestedName\(\)

```csharp
protected override string GetSelfSuggestedName()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

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

## See Also

[SimpleDataset](OpenTD.Results.Dataset.SimpleDataset.md), 
[ISimpleDataset](OpenTD.Results.Dataset.ISimpleDataset.md), 
[IDataset](OpenTD.Results.Dataset.IDataset.md)


