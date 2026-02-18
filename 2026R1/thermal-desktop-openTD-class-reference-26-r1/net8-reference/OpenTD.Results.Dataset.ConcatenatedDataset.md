# <a id="OpenTD_Results_Dataset_ConcatenatedDataset"></a> Class ConcatenatedDataset

Namespace: [OpenTD.Results.Dataset](OpenTD.Results.Dataset.md)  
Assembly: OpenTD.Results.dll  

A DerivedDataset that joins its InputDatasets together. Use it when you have
multiple Datasets that represent sequential events. You can use the bool ShiftTimes
to determine whether it adds the previous final time to all the times in the next
Dataset. The default is that it does, i.e., it assumes that all of your input Datasets
start at time 0.

```csharp
public class ConcatenatedDataset : DerivedDataset, IDataset
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Dataset](OpenTD.Results.Dataset.Dataset.md) ← 
RecordFocusedDataset ← 
[DerivedDataset](OpenTD.Results.Dataset.DerivedDataset.md) ← 
[ConcatenatedDataset](OpenTD.Results.Dataset.ConcatenatedDataset.md)

#### Implements

[IDataset](OpenTD.Results.Dataset.IDataset.md)

#### Inherited Members

[DerivedDataset.InputDatasets](OpenTD.Results.Dataset.DerivedDataset.md\#OpenTD\_Results\_Dataset\_DerivedDataset\_InputDatasets), 
[DerivedDataset.Source](OpenTD.Results.Dataset.DerivedDataset.md\#OpenTD\_Results\_Dataset\_DerivedDataset\_Source), 
[DerivedDataset.GetThermalSubmodels\(\)](OpenTD.Results.Dataset.DerivedDataset.md\#OpenTD\_Results\_Dataset\_DerivedDataset\_GetThermalSubmodels), 
[DerivedDataset.GetFluidSubmodels\(\)](OpenTD.Results.Dataset.DerivedDataset.md\#OpenTD\_Results\_Dataset\_DerivedDataset\_GetFluidSubmodels), 
[DerivedDataset.GetRegisterNames\(\)](OpenTD.Results.Dataset.DerivedDataset.md\#OpenTD\_Results\_Dataset\_DerivedDataset\_GetRegisterNames), 
[DerivedDataset.GetNodeIds\(string\)](OpenTD.Results.Dataset.DerivedDataset.md\#OpenTD\_Results\_Dataset\_DerivedDataset\_GetNodeIds\_System\_String\_), 
[DerivedDataset.GetLumpIds\(string\)](OpenTD.Results.Dataset.DerivedDataset.md\#OpenTD\_Results\_Dataset\_DerivedDataset\_GetLumpIds\_System\_String\_), 
[DerivedDataset.GetPathIds\(string\)](OpenTD.Results.Dataset.DerivedDataset.md\#OpenTD\_Results\_Dataset\_DerivedDataset\_GetPathIds\_System\_String\_), 
[DerivedDataset.GetTieIds\(string\)](OpenTD.Results.Dataset.DerivedDataset.md\#OpenTD\_Results\_Dataset\_DerivedDataset\_GetTieIds\_System\_String\_), 
[DerivedDataset.GetFtieIds\(string\)](OpenTD.Results.Dataset.DerivedDataset.md\#OpenTD\_Results\_Dataset\_DerivedDataset\_GetFtieIds\_System\_String\_), 
[DerivedDataset.GetIfaceIds\(string\)](OpenTD.Results.Dataset.DerivedDataset.md\#OpenTD\_Results\_Dataset\_DerivedDataset\_GetIfaceIds\_System\_String\_), 
[DerivedDataset.GetConductorIds\(string\)](OpenTD.Results.Dataset.DerivedDataset.md\#OpenTD\_Results\_Dataset\_DerivedDataset\_GetConductorIds\_System\_String\_), 
[DerivedDataset.Close\(\)](OpenTD.Results.Dataset.DerivedDataset.md\#OpenTD\_Results\_Dataset\_DerivedDataset\_Close), 
[DerivedDataset.ReOpen\(\)](OpenTD.Results.Dataset.DerivedDataset.md\#OpenTD\_Results\_Dataset\_DerivedDataset\_ReOpen), 
[DerivedDataset.CheckInputDatasets\(\)](OpenTD.Results.Dataset.DerivedDataset.md\#OpenTD\_Results\_Dataset\_DerivedDataset\_CheckInputDatasets), 
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

### <a id="OpenTD_Results_Dataset_ConcatenatedDataset__ctor"></a> ConcatenatedDataset\(\)

```csharp
public ConcatenatedDataset()
```

## Properties

### <a id="OpenTD_Results_Dataset_ConcatenatedDataset_ShiftTimes"></a> ShiftTimes

Determines whether this ConcatenatedDataset adds the previous final time to all the
times in the next InputDataset. The default is that it does, i.e., it assumes that
all of your input Datasets start at time 0.

```csharp
public bool ShiftTimes { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_Results_Dataset_ConcatenatedDataset_Source"></a> Source

If the InputDatasets have a common source, it will be returned here.

```csharp
public override string Source { get; protected set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Exceptions

 OpenTDException

Cannot set DerivedDataArray.SourceDataset directly. It will be derived from InputArrays.

## Methods

### <a id="OpenTD_Results_Dataset_ConcatenatedDataset_GetAbszro"></a> GetAbszro\(\)

```csharp
public override Dimensional<Temp> GetAbszro()
```

#### Returns

 Dimensional<Temp\>

### <a id="OpenTD_Results_Dataset_ConcatenatedDataset_GetConstraintData_System_Int64_OpenTD_Results_Dataset_DataSubtype_OpenTD_UnitsData_"></a> GetConstraintData\(long, DataSubtype, UnitsData\)

```csharp
public override DataArray GetConstraintData(long constraintNumber, DataSubtype subtype = null, UnitsData units = null)
```

#### Parameters

`constraintNumber` [long](https://learn.microsoft.com/dotnet/api/system.int64)

`subtype` [DataSubtype](OpenTD.Results.Dataset.DataSubtype.md)

`units` UnitsData

#### Returns

 [DataArray](OpenTD.Results.Dataset.DataArray.md)

### <a id="OpenTD_Results_Dataset_ConcatenatedDataset_GetDataAtRecord_OpenTD_Results_Dataset_DataSubtype_System_Int64_"></a> GetDataAtRecord\(DataSubtype, long\)

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

### <a id="OpenTD_Results_Dataset_ConcatenatedDataset_GetInternalIndex_OpenTD_Results_Dataset_DataTypes_System_String_System_Int64_"></a> GetInternalIndex\(DataTypes, string, long\)

The 0-indexed position of the given Sinda entity in arrays
returned by GetDataAtRecord. Returns -1 if entity can't be found
or if the index is not the same across all input datasets.

```csharp
public override long GetInternalIndex(DataTypes dataType, string submodel, long id)
```

#### Parameters

`dataType` [DataTypes](OpenTD.Results.Dataset.DataTypes.md)

`submodel` [string](https://learn.microsoft.com/dotnet/api/system.string)

`id` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="OpenTD_Results_Dataset_ConcatenatedDataset_GetLoopcoData"></a> GetLoopcoData\(\)

```csharp
public override List<long> GetLoopcoData()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[long](https://learn.microsoft.com/dotnet/api/system.int64)\>

### <a id="OpenTD_Results_Dataset_ConcatenatedDataset_GetLoopctData"></a> GetLoopctData\(\)

```csharp
public override List<long> GetLoopctData()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[long](https://learn.microsoft.com/dotnet/api/system.int64)\>

### <a id="OpenTD_Results_Dataset_ConcatenatedDataset_GetNamedInt_System_String_"></a> GetNamedInt\(string\)

```csharp
public override long GetNamedInt(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="OpenTD_Results_Dataset_ConcatenatedDataset_GetNamedIntArray_System_String_"></a> GetNamedIntArray\(string\)

```csharp
public override List<long> GetNamedIntArray(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[long](https://learn.microsoft.com/dotnet/api/system.int64)\>

### <a id="OpenTD_Results_Dataset_ConcatenatedDataset_GetNpcsrec_System_Int64_"></a> GetNpcsrec\(long\)

```csharp
public override long GetNpcsrec(long recordNum)
```

#### Parameters

`recordNum` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="OpenTD_Results_Dataset_ConcatenatedDataset_GetNsol_System_Int64_"></a> GetNsol\(long\)

```csharp
public override long GetNsol(long recordNum)
```

#### Parameters

`recordNum` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="OpenTD_Results_Dataset_ConcatenatedDataset_GetPatmos"></a> GetPatmos\(\)

```csharp
public override Dimensional<Pressure> GetPatmos()
```

#### Returns

 Dimensional<Pressure\>

### <a id="OpenTD_Results_Dataset_ConcatenatedDataset_GetRecordNames"></a> GetRecordNames\(\)

```csharp
public override List<string> GetRecordNames()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="OpenTD_Results_Dataset_ConcatenatedDataset_GetRecordNumbers"></a> GetRecordNumbers\(\)

```csharp
public override List<long> GetRecordNumbers()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[long](https://learn.microsoft.com/dotnet/api/system.int64)\>

### <a id="OpenTD_Results_Dataset_ConcatenatedDataset_GetRegisterDataAtRecord_System_Int64_OpenTD_Results_Dataset_DataSubtype_OpenTD_UnitsData_"></a> GetRegisterDataAtRecord\(long, DataSubtype, UnitsData\)

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

### <a id="OpenTD_Results_Dataset_ConcatenatedDataset_GetReliabilityData_System_Int64_OpenTD_Results_Dataset_DataSubtype_OpenTD_UnitsData_"></a> GetReliabilityData\(long, DataSubtype, UnitsData\)

```csharp
public override DataArray GetReliabilityData(long reliabilityNumber, DataSubtype subtype = null, UnitsData units = null)
```

#### Parameters

`reliabilityNumber` [long](https://learn.microsoft.com/dotnet/api/system.int64)

`subtype` [DataSubtype](OpenTD.Results.Dataset.DataSubtype.md)

`units` UnitsData

#### Returns

 [DataArray](OpenTD.Results.Dataset.DataArray.md)

### <a id="OpenTD_Results_Dataset_ConcatenatedDataset_GetSigma"></a> GetSigma\(\)

```csharp
public override Dimensional<StefanBoltzmann> GetSigma()
```

#### Returns

 Dimensional<StefanBoltzmann\>

### <a id="OpenTD_Results_Dataset_ConcatenatedDataset_GetTimes"></a> GetTimes\(\)

```csharp
public override DataArray GetTimes()
```

#### Returns

 [DataArray](OpenTD.Results.Dataset.DataArray.md)

### <a id="OpenTD_Results_Dataset_ConcatenatedDataset_GetUdcaDataAtRecord_OpenTD_Results_Dataset_DataSubtype_System_Int64_"></a> GetUdcaDataAtRecord\(DataSubtype, long\)

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

### <a id="OpenTD_Results_Dataset_ConcatenatedDataset_GetUdfasAtRecord_System_Int64_"></a> GetUdfasAtRecord\(long\)

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

[DerivedDataset](OpenTD.Results.Dataset.DerivedDataset.md), 
[ConcatenatedDataset](OpenTD.Results.Dataset.ConcatenatedDataset.md).[ShiftTimes](OpenTD.Results.Dataset.ConcatenatedDataset.md\#OpenTD\_Results\_Dataset\_ConcatenatedDataset\_ShiftTimes)

