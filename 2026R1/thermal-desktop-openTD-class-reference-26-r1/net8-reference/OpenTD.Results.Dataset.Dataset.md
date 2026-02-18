# <a id="OpenTD_Results_Dataset_Dataset"></a> Class Dataset

Namespace: [OpenTD.Results.Dataset](OpenTD.Results.Dataset.md)  
Assembly: OpenTD.Results.dll  

An abstract class representing a set of solution results from a Sinda run.
Returns data as DataArrays.

```csharp
public abstract class Dataset : IDataset
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Dataset](OpenTD.Results.Dataset.Dataset.md)

#### Derived

[SimpleDataset](OpenTD.Results.Dataset.SimpleDataset.md)

#### Implements

[IDataset](OpenTD.Results.Dataset.IDataset.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="OpenTD_Results_Dataset_Dataset__ctor"></a> Dataset\(\)

```csharp
public Dataset()
```

## Properties

### <a id="OpenTD_Results_Dataset_Dataset_AutoCommenter"></a> AutoCommenter

```csharp
protected AutoCommenter AutoCommenter { get; set; }
```

#### Property Value

 AutoCommenter

### <a id="OpenTD_Results_Dataset_Dataset_AutoNamer"></a> AutoNamer

```csharp
protected AutoNamer AutoNamer { get; set; }
```

#### Property Value

 AutoNamer

### <a id="OpenTD_Results_Dataset_Dataset_Comment"></a> Comment

```csharp
public string Comment { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_Results_Dataset_Dataset_InternalSuggestedComment"></a> InternalSuggestedComment

```csharp
public string InternalSuggestedComment { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_Results_Dataset_Dataset_InternalSuggestedName"></a> InternalSuggestedName

```csharp
public string InternalSuggestedName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_Results_Dataset_Dataset_Name"></a> Name

```csharp
public string Name { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_Results_Dataset_Dataset_Source"></a> Source

The name of the source of the data.

```csharp
public virtual string Source { get; protected set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_Results_Dataset_Dataset_UDFAManager"></a> UDFAManager

```csharp
protected IUDFAManager UDFAManager { get; set; }
```

#### Property Value

 IUDFAManager

### <a id="OpenTD_Results_Dataset_Dataset_Units"></a> Units

The unit system of the dataset.

```csharp
public UnitsData Units { get; set; }
```

#### Property Value

 UnitsData

## Methods

### <a id="OpenTD_Results_Dataset_Dataset_Close"></a> Close\(\)

```csharp
public abstract void Close()
```

### <a id="OpenTD_Results_Dataset_Dataset_GetAbszro"></a> GetAbszro\(\)

```csharp
public abstract Dimensional<Temp> GetAbszro()
```

#### Returns

 Dimensional<Temp\>

### <a id="OpenTD_Results_Dataset_Dataset_GetConductorIds_System_String_"></a> GetConductorIds\(string\)

```csharp
public abstract List<long> GetConductorIds(string submodel)
```

#### Parameters

`submodel` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[long](https://learn.microsoft.com/dotnet/api/system.int64)\>

### <a id="OpenTD_Results_Dataset_Dataset_GetConstraintData_System_Int64_OpenTD_Results_Dataset_DataSubtype_OpenTD_UnitsData_"></a> GetConstraintData\(long, DataSubtype, UnitsData\)

```csharp
public abstract DataArray GetConstraintData(long constraintNumber, DataSubtype subtype = null, UnitsData units = null)
```

#### Parameters

`constraintNumber` [long](https://learn.microsoft.com/dotnet/api/system.int64)

`subtype` [DataSubtype](OpenTD.Results.Dataset.DataSubtype.md)

`units` UnitsData

#### Returns

 [DataArray](OpenTD.Results.Dataset.DataArray.md)

### <a id="OpenTD_Results_Dataset_Dataset_GetData_OpenTD_Results_Dataset_DataItemIdentifierCollection_"></a> GetData\(DataItemIdentifierCollection\)

Gets data for a collection of data items (e.g., "MAIN.T10", "FLOW.TL40", etc.).

```csharp
public abstract DataArrayCollection GetData(DataItemIdentifierCollection dataItems)
```

#### Parameters

`dataItems` [DataItemIdentifierCollection](OpenTD.Results.Dataset.DataItemIdentifierCollection.md)

#### Returns

 [DataArrayCollection](OpenTD.Results.Dataset.DataArrayCollection.md)

A <code>DataArrayCollection</code> for the requested dataItems.

### <a id="OpenTD_Results_Dataset_Dataset_GetData_System_String___"></a> GetData\(params string\[\]\)

```csharp
public virtual DataArrayCollection GetData(params string[] sindaNames)
```

#### Parameters

`sindaNames` [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

#### Returns

 [DataArrayCollection](OpenTD.Results.Dataset.DataArrayCollection.md)

### <a id="OpenTD_Results_Dataset_Dataset_GetData_OpenTD_Results_Dataset_ItemIdentifierCollection_OpenTD_Results_Dataset_DataSubtype_OpenTD_UnitsData_"></a> GetData\(ItemIdentifierCollection, DataSubtype, UnitsData\)

```csharp
public virtual DataArrayCollection GetData(ItemIdentifierCollection itemIds, DataSubtype subtype, UnitsData units = null)
```

#### Parameters

`itemIds` [ItemIdentifierCollection](OpenTD.Results.Dataset.ItemIdentifierCollection.md)

`subtype` [DataSubtype](OpenTD.Results.Dataset.DataSubtype.md)

`units` UnitsData

#### Returns

 [DataArrayCollection](OpenTD.Results.Dataset.DataArrayCollection.md)

### <a id="OpenTD_Results_Dataset_Dataset_GetDataAtRecord_OpenTD_Results_Dataset_DataSubtype_System_Int64_"></a> GetDataAtRecord\(DataSubtype, long\)

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

### <a id="OpenTD_Results_Dataset_Dataset_GetFluidSubmodels"></a> GetFluidSubmodels\(\)

```csharp
public abstract List<string> GetFluidSubmodels()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="OpenTD_Results_Dataset_Dataset_GetFtieIds_System_String_"></a> GetFtieIds\(string\)

```csharp
public abstract List<long> GetFtieIds(string submodel)
```

#### Parameters

`submodel` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[long](https://learn.microsoft.com/dotnet/api/system.int64)\>

### <a id="OpenTD_Results_Dataset_Dataset_GetIfaceIds_System_String_"></a> GetIfaceIds\(string\)

```csharp
public abstract List<long> GetIfaceIds(string submodel)
```

#### Parameters

`submodel` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[long](https://learn.microsoft.com/dotnet/api/system.int64)\>

### <a id="OpenTD_Results_Dataset_Dataset_GetInternalIndex_OpenTD_Results_Dataset_DataTypes_System_String_System_Int64_"></a> GetInternalIndex\(DataTypes, string, long\)

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

### <a id="OpenTD_Results_Dataset_Dataset_GetInternalIndex_System_String_"></a> GetInternalIndex\(string\)

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

### <a id="OpenTD_Results_Dataset_Dataset_GetLoopcoData"></a> GetLoopcoData\(\)

```csharp
public abstract List<long> GetLoopcoData()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[long](https://learn.microsoft.com/dotnet/api/system.int64)\>

### <a id="OpenTD_Results_Dataset_Dataset_GetLoopctData"></a> GetLoopctData\(\)

```csharp
public abstract List<long> GetLoopctData()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[long](https://learn.microsoft.com/dotnet/api/system.int64)\>

### <a id="OpenTD_Results_Dataset_Dataset_GetLumpIds_System_String_"></a> GetLumpIds\(string\)

```csharp
public abstract List<long> GetLumpIds(string submodel)
```

#### Parameters

`submodel` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[long](https://learn.microsoft.com/dotnet/api/system.int64)\>

### <a id="OpenTD_Results_Dataset_Dataset_GetNamedInt_OpenTD_Results_Dataset_IntegerNames_"></a> GetNamedInt\(IntegerNames\)

```csharp
public long GetNamedInt(IntegerNames name)
```

#### Parameters

`name` [IntegerNames](OpenTD.Results.Dataset.IntegerNames.md)

#### Returns

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="OpenTD_Results_Dataset_Dataset_GetNamedInt_System_String_"></a> GetNamedInt\(string\)

```csharp
public abstract long GetNamedInt(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="OpenTD_Results_Dataset_Dataset_GetNamedIntArray_OpenTD_Results_Dataset_ArrayIntegerNames_"></a> GetNamedIntArray\(ArrayIntegerNames\)

```csharp
public List<long> GetNamedIntArray(ArrayIntegerNames name)
```

#### Parameters

`name` [ArrayIntegerNames](OpenTD.Results.Dataset.ArrayIntegerNames.md)

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[long](https://learn.microsoft.com/dotnet/api/system.int64)\>

### <a id="OpenTD_Results_Dataset_Dataset_GetNamedIntArray_System_String_"></a> GetNamedIntArray\(string\)

```csharp
public abstract List<long> GetNamedIntArray(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[long](https://learn.microsoft.com/dotnet/api/system.int64)\>

### <a id="OpenTD_Results_Dataset_Dataset_GetNodeIds_System_String_"></a> GetNodeIds\(string\)

```csharp
public abstract List<long> GetNodeIds(string submodel)
```

#### Parameters

`submodel` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[long](https://learn.microsoft.com/dotnet/api/system.int64)\>

### <a id="OpenTD_Results_Dataset_Dataset_GetNpcsrec_System_Int64_"></a> GetNpcsrec\(long\)

```csharp
public abstract long GetNpcsrec(long recordNum)
```

#### Parameters

`recordNum` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="OpenTD_Results_Dataset_Dataset_GetNsol_System_Int64_"></a> GetNsol\(long\)

```csharp
public abstract long GetNsol(long recordNum)
```

#### Parameters

`recordNum` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="OpenTD_Results_Dataset_Dataset_GetPathIds_System_String_"></a> GetPathIds\(string\)

```csharp
public abstract List<long> GetPathIds(string submodel)
```

#### Parameters

`submodel` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[long](https://learn.microsoft.com/dotnet/api/system.int64)\>

### <a id="OpenTD_Results_Dataset_Dataset_GetPatmos"></a> GetPatmos\(\)

```csharp
public abstract Dimensional<Pressure> GetPatmos()
```

#### Returns

 Dimensional<Pressure\>

### <a id="OpenTD_Results_Dataset_Dataset_GetRecordNames"></a> GetRecordNames\(\)

```csharp
public abstract List<string> GetRecordNames()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="OpenTD_Results_Dataset_Dataset_GetRecordNumbers"></a> GetRecordNumbers\(\)

```csharp
public abstract List<long> GetRecordNumbers()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[long](https://learn.microsoft.com/dotnet/api/system.int64)\>

### <a id="OpenTD_Results_Dataset_Dataset_GetRecordNumbersAsDataArray"></a> GetRecordNumbersAsDataArray\(\)

```csharp
public DataArray GetRecordNumbersAsDataArray()
```

#### Returns

 [DataArray](OpenTD.Results.Dataset.DataArray.md)

### <a id="OpenTD_Results_Dataset_Dataset_GetRegisterData_System_String_OpenTD_Results_Dataset_DataSubtype_OpenTD_UnitsData_"></a> GetRegisterData\(string, DataSubtype, UnitsData\)

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

### <a id="OpenTD_Results_Dataset_Dataset_GetRegisterDataAtRecord_System_Int64_OpenTD_Results_Dataset_DataSubtype_OpenTD_UnitsData_"></a> GetRegisterDataAtRecord\(long, DataSubtype, UnitsData\)

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

### <a id="OpenTD_Results_Dataset_Dataset_GetRegisterNames"></a> GetRegisterNames\(\)

```csharp
public abstract List<string> GetRegisterNames()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="OpenTD_Results_Dataset_Dataset_GetReliabilityData_System_Int64_OpenTD_Results_Dataset_DataSubtype_OpenTD_UnitsData_"></a> GetReliabilityData\(long, DataSubtype, UnitsData\)

```csharp
public abstract DataArray GetReliabilityData(long reliabilityNumber, DataSubtype subtype = null, UnitsData units = null)
```

#### Parameters

`reliabilityNumber` [long](https://learn.microsoft.com/dotnet/api/system.int64)

`subtype` [DataSubtype](OpenTD.Results.Dataset.DataSubtype.md)

`units` UnitsData

#### Returns

 [DataArray](OpenTD.Results.Dataset.DataArray.md)

### <a id="OpenTD_Results_Dataset_Dataset_GetSelfSuggestedComment"></a> GetSelfSuggestedComment\(\)

```csharp
protected virtual string GetSelfSuggestedComment()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_Results_Dataset_Dataset_GetSelfSuggestedName"></a> GetSelfSuggestedName\(\)

```csharp
protected virtual string GetSelfSuggestedName()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_Results_Dataset_Dataset_GetSigma"></a> GetSigma\(\)

```csharp
public abstract Dimensional<StefanBoltzmann> GetSigma()
```

#### Returns

 Dimensional<StefanBoltzmann\>

### <a id="OpenTD_Results_Dataset_Dataset_GetThermalSubmodels"></a> GetThermalSubmodels\(\)

```csharp
public abstract List<string> GetThermalSubmodels()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="OpenTD_Results_Dataset_Dataset_GetTieIds_System_String_"></a> GetTieIds\(string\)

```csharp
public abstract List<long> GetTieIds(string submodel)
```

#### Parameters

`submodel` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[long](https://learn.microsoft.com/dotnet/api/system.int64)\>

### <a id="OpenTD_Results_Dataset_Dataset_GetTimes"></a> GetTimes\(\)

```csharp
public abstract DataArray GetTimes()
```

#### Returns

 [DataArray](OpenTD.Results.Dataset.DataArray.md)

### <a id="OpenTD_Results_Dataset_Dataset_GetTimesOrRecordNumbers"></a> GetTimesOrRecordNumbers\(\)

```csharp
public DataArray GetTimesOrRecordNumbers()
```

#### Returns

 [DataArray](OpenTD.Results.Dataset.DataArray.md)

### <a id="OpenTD_Results_Dataset_Dataset_GetUDFAManager"></a> GetUDFAManager\(\)

```csharp
public IUDFAManager GetUDFAManager()
```

#### Returns

 IUDFAManager

### <a id="OpenTD_Results_Dataset_Dataset_GetUdcaData_OpenTD_Results_Dataset_DataItemIdentifierCollection_"></a> GetUdcaData\(DataItemIdentifierCollection\)

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

### <a id="OpenTD_Results_Dataset_Dataset_GetUdcaDataAtRecord_OpenTD_Results_Dataset_DataSubtype_System_Int64_"></a> GetUdcaDataAtRecord\(DataSubtype, long\)

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

### <a id="OpenTD_Results_Dataset_Dataset_GetUdfasAtRecord_System_Int64_"></a> GetUdfasAtRecord\(long\)

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

### <a id="OpenTD_Results_Dataset_Dataset_ReOpen"></a> ReOpen\(\)

```csharp
public abstract void ReOpen()
```

### <a id="OpenTD_Results_Dataset_Dataset_Relay__2___0_"></a> Relay<T\_collection, T\_item\>\(T\_collection\)

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

### <a id="OpenTD_Results_Dataset_Dataset_Relay__1_System_Collections_Generic_List___0__"></a> Relay<T\_item\>\(List<T\_item\>\)

```csharp
protected List<T_item> Relay<T_item>(List<T_item> x)
```

#### Parameters

`x` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<T\_item\>

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<T\_item\>

#### Type Parameters

`T_item` 

### <a id="OpenTD_Results_Dataset_Dataset_ToString"></a> ToString\(\)

Returns a string that represents the current object.

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

A string that represents the current object.

### <a id="OpenTD_Results_Dataset_Dataset_UnitsChangedSinceLastRead"></a> UnitsChangedSinceLastRead\(\)

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

