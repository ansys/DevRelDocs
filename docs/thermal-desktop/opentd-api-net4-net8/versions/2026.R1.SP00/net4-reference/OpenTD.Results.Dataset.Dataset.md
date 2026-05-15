# Class Dataset

Namespace: [OpenTD.Results.Dataset](OpenTD.Results.Dataset.md)  
Assembly: OpenTD.Results.dll  

An abstract class representing a set of solution results from a Sinda run.
Returns data as DataArrays.

```csharp
public abstract class Dataset : IDataset
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Dataset](OpenTD.Results.Dataset.Dataset.md)

#### Derived

[SimpleDataset](OpenTD.Results.Dataset.SimpleDataset.md)

## Implements

[IDataset](OpenTD.Results.Dataset.IDataset.md)

## Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

### Dataset\(\)

```csharp
public Dataset()
```

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

### Name

```csharp
public string Name { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### Source

The name of the source of the data.

```csharp
public virtual string Source { get; protected set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### UDFAManager

```csharp
protected IUDFAManager UDFAManager { get; set; }
```

#### Property Value

 IUDFAManager

### Units

The unit system of the dataset.

```csharp
public UnitsData Units { get; set; }
```

#### Property Value

 UnitsData

## Methods

### Close\(\)

```csharp
public abstract void Close()
```

### GetAbszro\(\)

```csharp
public abstract Dimensional<Temp> GetAbszro()
```

#### Returns

 Dimensional<Temp\>

### GetConductorIds\(string\)

```csharp
public abstract List<long> GetConductorIds(string submodel)
```

#### Parameters

`submodel` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[long](https://learn.microsoft.com/dotnet/api/system.int64)\>

### GetConstraintData\(long, DataSubtype, UnitsData\)

```csharp
public abstract DataArray GetConstraintData(long constraintNumber, DataSubtype subtype = null, UnitsData units = null)
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
public abstract DataArrayCollection GetData(DataItemIdentifierCollection dataItems)
```

#### Parameters

`dataItems` [DataItemIdentifierCollection](OpenTD.Results.Dataset.DataItemIdentifierCollection.md)

#### Returns

 [DataArrayCollection](OpenTD.Results.Dataset.DataArrayCollection.md)

A <code>DataArrayCollection</code> for the requested dataItems.

### GetData\(params string\[\]\)

```csharp
public virtual DataArrayCollection GetData(params string[] sindaNames)
```

#### Parameters

`sindaNames` [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

#### Returns

 [DataArrayCollection](OpenTD.Results.Dataset.DataArrayCollection.md)

### GetData\(ItemIdentifierCollection, DataSubtype, UnitsData\)

```csharp
public virtual DataArrayCollection GetData(ItemIdentifierCollection itemIds, DataSubtype subtype, UnitsData units = null)
```

#### Parameters

`itemIds` [ItemIdentifierCollection](OpenTD.Results.Dataset.ItemIdentifierCollection.md)

`subtype` [DataSubtype](OpenTD.Results.Dataset.DataSubtype.md)

`units` UnitsData

#### Returns

 [DataArrayCollection](OpenTD.Results.Dataset.DataArrayCollection.md)

### GetDataAtRecord\(DataSubtype, long\)

Gets all data for a given subtype at a single record. If recordNum is invalid,
or if no data of the given subtype exists at the record, will return an empty
DataArray.

```csharp
public abstract DataArray GetDataAtRecord(DataSubtype subtype, long recordNum)
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
public abstract List<string> GetFluidSubmodels()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### GetFtieIds\(string\)

```csharp
public abstract List<long> GetFtieIds(string submodel)
```

#### Parameters

`submodel` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[long](https://learn.microsoft.com/dotnet/api/system.int64)\>

### GetIfaceIds\(string\)

```csharp
public abstract List<long> GetIfaceIds(string submodel)
```

#### Parameters

`submodel` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[long](https://learn.microsoft.com/dotnet/api/system.int64)\>

### GetInternalIndex\(DataTypes, string, long\)

The 0-indexed position of the given Sinda entity in arrays
returned by GetDataAtRecord. Returns -1 if entity can't be found.

```csharp
public abstract long GetInternalIndex(DataTypes dataType, string submodel, long id)
```

#### Parameters

`dataType` [DataTypes](OpenTD.Results.Dataset.DataTypes.md)

`submodel` [string](https://learn.microsoft.com/dotnet/api/system.string)

`id` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### See Also

[Dataset](OpenTD.Results.Dataset.Dataset.md).[GetDataAtRecord](OpenTD.Results.Dataset.Dataset.md\#OpenTD\_Results\_Dataset\_Dataset\_GetDataAtRecord\_OpenTD\_Results\_Dataset\_DataSubtype\_System\_Int64\_)\([DataSubtype](OpenTD.Results.Dataset.DataSubtype.md), [long](https://learn.microsoft.com/dotnet/api/system.int64)\)

### GetInternalIndex\(string\)

The 0-indexed position of the given register in arrays returned by
GetRegisterDataAtRecord. Returns -1 if registerName can't be found.

```csharp
public virtual long GetInternalIndex(string registerName)
```

#### Parameters

`registerName` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### See Also

[Dataset](OpenTD.Results.Dataset.Dataset.md).[GetRegisterDataAtRecord](OpenTD.Results.Dataset.Dataset.md\#OpenTD\_Results\_Dataset\_Dataset\_GetRegisterDataAtRecord\_System\_Int64\_OpenTD\_Results\_Dataset\_DataSubtype\_OpenTD\_UnitsData\_)\([long](https://learn.microsoft.com/dotnet/api/system.int64), [DataSubtype](OpenTD.Results.Dataset.DataSubtype.md), UnitsData\)

### GetLoopcoData\(\)

```csharp
public abstract List<long> GetLoopcoData()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[long](https://learn.microsoft.com/dotnet/api/system.int64)\>

### GetLoopctData\(\)

```csharp
public abstract List<long> GetLoopctData()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[long](https://learn.microsoft.com/dotnet/api/system.int64)\>

### GetLumpIds\(string\)

```csharp
public abstract List<long> GetLumpIds(string submodel)
```

#### Parameters

`submodel` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[long](https://learn.microsoft.com/dotnet/api/system.int64)\>

### GetNamedInt\(IntegerNames\)

```csharp
public long GetNamedInt(IntegerNames name)
```

#### Parameters

`name` [IntegerNames](OpenTD.Results.Dataset.IntegerNames.md)

#### Returns

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### GetNamedInt\(string\)

```csharp
public abstract long GetNamedInt(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### GetNamedIntArray\(ArrayIntegerNames\)

```csharp
public List<long> GetNamedIntArray(ArrayIntegerNames name)
```

#### Parameters

`name` [ArrayIntegerNames](OpenTD.Results.Dataset.ArrayIntegerNames.md)

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[long](https://learn.microsoft.com/dotnet/api/system.int64)\>

### GetNamedIntArray\(string\)

```csharp
public abstract List<long> GetNamedIntArray(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[long](https://learn.microsoft.com/dotnet/api/system.int64)\>

### GetNodeIds\(string\)

```csharp
public abstract List<long> GetNodeIds(string submodel)
```

#### Parameters

`submodel` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[long](https://learn.microsoft.com/dotnet/api/system.int64)\>

### GetNpcsrec\(long\)

```csharp
public abstract long GetNpcsrec(long recordNum)
```

#### Parameters

`recordNum` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### GetNsol\(long\)

```csharp
public abstract long GetNsol(long recordNum)
```

#### Parameters

`recordNum` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### GetPathIds\(string\)

```csharp
public abstract List<long> GetPathIds(string submodel)
```

#### Parameters

`submodel` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[long](https://learn.microsoft.com/dotnet/api/system.int64)\>

### GetPatmos\(\)

```csharp
public abstract Dimensional<Pressure> GetPatmos()
```

#### Returns

 Dimensional<Pressure\>

### GetRecordNames\(\)

```csharp
public abstract List<string> GetRecordNames()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### GetRecordNumbers\(\)

```csharp
public abstract List<long> GetRecordNumbers()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[long](https://learn.microsoft.com/dotnet/api/system.int64)\>

### GetRecordNumbersAsDataArray\(\)

```csharp
public DataArray GetRecordNumbersAsDataArray()
```

#### Returns

 [DataArray](OpenTD.Results.Dataset.DataArray.md)

### GetRegisterData\(string, DataSubtype, UnitsData\)

Gets all data for a register across all records. If data
doesn't exist at a record, NaN will be returned instead.

```csharp
public abstract DataArray GetRegisterData(string registerName, DataSubtype subtype = null, UnitsData units = null)
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
public abstract DataArray GetRegisterDataAtRecord(long recordNum, DataSubtype subtype = null, UnitsData units = null)
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
public abstract List<string> GetRegisterNames()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### GetReliabilityData\(long, DataSubtype, UnitsData\)

```csharp
public abstract DataArray GetReliabilityData(long reliabilityNumber, DataSubtype subtype = null, UnitsData units = null)
```

#### Parameters

`reliabilityNumber` [long](https://learn.microsoft.com/dotnet/api/system.int64)

`subtype` [DataSubtype](OpenTD.Results.Dataset.DataSubtype.md)

`units` UnitsData

#### Returns

 [DataArray](OpenTD.Results.Dataset.DataArray.md)

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

### GetSigma\(\)

```csharp
public abstract Dimensional<StefanBoltzmann> GetSigma()
```

#### Returns

 Dimensional<StefanBoltzmann\>

### GetThermalSubmodels\(\)

```csharp
public abstract List<string> GetThermalSubmodels()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### GetTieIds\(string\)

```csharp
public abstract List<long> GetTieIds(string submodel)
```

#### Parameters

`submodel` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[long](https://learn.microsoft.com/dotnet/api/system.int64)\>

### GetTimes\(\)

```csharp
public abstract DataArray GetTimes()
```

#### Returns

 [DataArray](OpenTD.Results.Dataset.DataArray.md)

### GetTimesOrRecordNumbers\(\)

```csharp
public DataArray GetTimesOrRecordNumbers()
```

#### Returns

 [DataArray](OpenTD.Results.Dataset.DataArray.md)

### GetUDFAManager\(\)

```csharp
public IUDFAManager GetUDFAManager()
```

#### Returns

 IUDFAManager

### GetUdcaData\(DataItemIdentifierCollection\)

Gets data for a collection of data items representing character UDFAs.

```csharp
public abstract List<List<string>> GetUdcaData(DataItemIdentifierCollection dataItems)
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
public abstract List<string> GetUdcaDataAtRecord(DataSubtype subtype, long recordNum)
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
public abstract List<DataSubtype> GetUdfasAtRecord(long recordNum)
```

#### Parameters

`recordNum` [long](https://learn.microsoft.com/dotnet/api/system.int64)

Record number from which to extract UDFA subtypes.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[DataSubtype](OpenTD.Results.Dataset.DataSubtype.md)\>

A list of <code>DataSubtype</code> objects.

### ReOpen\(\)

```csharp
public abstract void ReOpen()
```

### Relay<T\_collection, T\_item\>\(T\_collection\)

```csharp
protected List<T_item> Relay<T_collection, T_item>(T_collection x) where T_collection : IEnumerable
```

#### Parameters

`x` T\_collection

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<T\_item\>

#### Type Parameters

`T_collection` 

`T_item` 

### Relay<T\_item\>\(List<T\_item\>\)

```csharp
protected List<T_item> Relay<T_item>(List<T_item> x)
```

#### Parameters

`x` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<T\_item\>

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<T\_item\>

#### Type Parameters

`T_item` 

### ToString\(\)

Returns a string that represents the current object.

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

A string that represents the current object.

### UnitsChangedSinceLastRead\(\)

```csharp
protected bool UnitsChangedSinceLastRead()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## See Also

IAutoName, 
[SaveXFile](OpenTD.Results.Dataset.SaveXFile.md), 
[SaveFile](OpenTD.Results.Dataset.SaveFile.md), 
[CSR](OpenTD.Results.Dataset.CSR.md), 
[DataArray](OpenTD.Results.Dataset.DataArray.md)


