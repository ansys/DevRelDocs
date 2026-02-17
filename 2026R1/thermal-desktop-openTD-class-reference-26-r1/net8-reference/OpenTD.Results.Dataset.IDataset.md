# <a id="OpenTD_Results_Dataset_IDataset"></a> Interface IDataset

Namespace: [OpenTD.Results.Dataset](OpenTD.Results.Dataset.md)  
Assembly: OpenTD.Results.dll  

An interface to save files, CSR's, spreadsheets and other objects that store solution data.

```csharp
public interface IDataset
```

## Properties

### <a id="OpenTD_Results_Dataset_IDataset_Source"></a> Source

```csharp
string Source { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_Results_Dataset_IDataset_Units"></a> Units

```csharp
UnitsData Units { get; set; }
```

#### Property Value

 UnitsData

## Methods

### <a id="OpenTD_Results_Dataset_IDataset_Close"></a> Close\(\)

```csharp
void Close()
```

### <a id="OpenTD_Results_Dataset_IDataset_GetAbszro"></a> GetAbszro\(\)

```csharp
Dimensional<Temp> GetAbszro()
```

#### Returns

 Dimensional<Temp\>

### <a id="OpenTD_Results_Dataset_IDataset_GetConductorIds_System_String_"></a> GetConductorIds\(string\)

```csharp
List<long> GetConductorIds(string submodel)
```

#### Parameters

`submodel` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[long](https://learn.microsoft.com/dotnet/api/system.int64)\>

### <a id="OpenTD_Results_Dataset_IDataset_GetConstraintData_System_Int64_OpenTD_Results_Dataset_DataSubtype_OpenTD_UnitsData_"></a> GetConstraintData\(long, DataSubtype, UnitsData\)

```csharp
DataArray GetConstraintData(long constraintNumber, DataSubtype subtype = null, UnitsData units = null)
```

#### Parameters

`constraintNumber` [long](https://learn.microsoft.com/dotnet/api/system.int64)

`subtype` [DataSubtype](OpenTD.Results.Dataset.DataSubtype.md)

`units` UnitsData

#### Returns

 [DataArray](OpenTD.Results.Dataset.DataArray.md)

### <a id="OpenTD_Results_Dataset_IDataset_GetData_OpenTD_Results_Dataset_DataItemIdentifierCollection_"></a> GetData\(DataItemIdentifierCollection\)

```csharp
DataArrayCollection GetData(DataItemIdentifierCollection dataItems)
```

#### Parameters

`dataItems` [DataItemIdentifierCollection](OpenTD.Results.Dataset.DataItemIdentifierCollection.md)

#### Returns

 [DataArrayCollection](OpenTD.Results.Dataset.DataArrayCollection.md)

### <a id="OpenTD_Results_Dataset_IDataset_GetData_OpenTD_Results_Dataset_ItemIdentifierCollection_OpenTD_Results_Dataset_DataSubtype_OpenTD_UnitsData_"></a> GetData\(ItemIdentifierCollection, DataSubtype, UnitsData\)

```csharp
DataArrayCollection GetData(ItemIdentifierCollection itemIds, DataSubtype subtype, UnitsData units = null)
```

#### Parameters

`itemIds` [ItemIdentifierCollection](OpenTD.Results.Dataset.ItemIdentifierCollection.md)

`subtype` [DataSubtype](OpenTD.Results.Dataset.DataSubtype.md)

`units` UnitsData

#### Returns

 [DataArrayCollection](OpenTD.Results.Dataset.DataArrayCollection.md)

### <a id="OpenTD_Results_Dataset_IDataset_GetData_System_String___"></a> GetData\(params string\[\]\)

```csharp
DataArrayCollection GetData(params string[] sindaNames)
```

#### Parameters

`sindaNames` [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

#### Returns

 [DataArrayCollection](OpenTD.Results.Dataset.DataArrayCollection.md)

### <a id="OpenTD_Results_Dataset_IDataset_GetDataAtRecord_OpenTD_Results_Dataset_DataSubtype_System_Int64_"></a> GetDataAtRecord\(DataSubtype, long\)

```csharp
DataArray GetDataAtRecord(DataSubtype subtype, long recordNum)
```

#### Parameters

`subtype` [DataSubtype](OpenTD.Results.Dataset.DataSubtype.md)

`recordNum` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [DataArray](OpenTD.Results.Dataset.DataArray.md)

### <a id="OpenTD_Results_Dataset_IDataset_GetFluidSubmodels"></a> GetFluidSubmodels\(\)

```csharp
List<string> GetFluidSubmodels()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="OpenTD_Results_Dataset_IDataset_GetFtieIds_System_String_"></a> GetFtieIds\(string\)

```csharp
List<long> GetFtieIds(string submodel)
```

#### Parameters

`submodel` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[long](https://learn.microsoft.com/dotnet/api/system.int64)\>

### <a id="OpenTD_Results_Dataset_IDataset_GetIfaceIds_System_String_"></a> GetIfaceIds\(string\)

```csharp
List<long> GetIfaceIds(string submodel)
```

#### Parameters

`submodel` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[long](https://learn.microsoft.com/dotnet/api/system.int64)\>

### <a id="OpenTD_Results_Dataset_IDataset_GetInternalIndex_OpenTD_Results_Dataset_DataTypes_System_String_System_Int64_"></a> GetInternalIndex\(DataTypes, string, long\)

```csharp
long GetInternalIndex(DataTypes dataType, string submodel, long id)
```

#### Parameters

`dataType` [DataTypes](OpenTD.Results.Dataset.DataTypes.md)

`submodel` [string](https://learn.microsoft.com/dotnet/api/system.string)

`id` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="OpenTD_Results_Dataset_IDataset_GetInternalIndex_System_String_"></a> GetInternalIndex\(string\)

```csharp
long GetInternalIndex(string registerName)
```

#### Parameters

`registerName` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="OpenTD_Results_Dataset_IDataset_GetLoopcoData"></a> GetLoopcoData\(\)

```csharp
List<long> GetLoopcoData()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[long](https://learn.microsoft.com/dotnet/api/system.int64)\>

### <a id="OpenTD_Results_Dataset_IDataset_GetLoopctData"></a> GetLoopctData\(\)

```csharp
List<long> GetLoopctData()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[long](https://learn.microsoft.com/dotnet/api/system.int64)\>

### <a id="OpenTD_Results_Dataset_IDataset_GetLumpIds_System_String_"></a> GetLumpIds\(string\)

```csharp
List<long> GetLumpIds(string submodel)
```

#### Parameters

`submodel` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[long](https://learn.microsoft.com/dotnet/api/system.int64)\>

### <a id="OpenTD_Results_Dataset_IDataset_GetNamedInt_OpenTD_Results_Dataset_IntegerNames_"></a> GetNamedInt\(IntegerNames\)

```csharp
long GetNamedInt(IntegerNames name)
```

#### Parameters

`name` [IntegerNames](OpenTD.Results.Dataset.IntegerNames.md)

#### Returns

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="OpenTD_Results_Dataset_IDataset_GetNamedInt_System_String_"></a> GetNamedInt\(string\)

```csharp
long GetNamedInt(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="OpenTD_Results_Dataset_IDataset_GetNamedIntArray_OpenTD_Results_Dataset_ArrayIntegerNames_"></a> GetNamedIntArray\(ArrayIntegerNames\)

```csharp
List<long> GetNamedIntArray(ArrayIntegerNames name)
```

#### Parameters

`name` [ArrayIntegerNames](OpenTD.Results.Dataset.ArrayIntegerNames.md)

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[long](https://learn.microsoft.com/dotnet/api/system.int64)\>

### <a id="OpenTD_Results_Dataset_IDataset_GetNamedIntArray_System_String_"></a> GetNamedIntArray\(string\)

```csharp
List<long> GetNamedIntArray(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[long](https://learn.microsoft.com/dotnet/api/system.int64)\>

### <a id="OpenTD_Results_Dataset_IDataset_GetNodeIds_System_String_"></a> GetNodeIds\(string\)

```csharp
List<long> GetNodeIds(string submodel)
```

#### Parameters

`submodel` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[long](https://learn.microsoft.com/dotnet/api/system.int64)\>

### <a id="OpenTD_Results_Dataset_IDataset_GetNpcsrec_System_Int64_"></a> GetNpcsrec\(long\)

```csharp
long GetNpcsrec(long recordNum)
```

#### Parameters

`recordNum` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="OpenTD_Results_Dataset_IDataset_GetNsol_System_Int64_"></a> GetNsol\(long\)

```csharp
long GetNsol(long recordNum)
```

#### Parameters

`recordNum` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="OpenTD_Results_Dataset_IDataset_GetPathIds_System_String_"></a> GetPathIds\(string\)

```csharp
List<long> GetPathIds(string submodel)
```

#### Parameters

`submodel` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[long](https://learn.microsoft.com/dotnet/api/system.int64)\>

### <a id="OpenTD_Results_Dataset_IDataset_GetPatmos"></a> GetPatmos\(\)

```csharp
Dimensional<Pressure> GetPatmos()
```

#### Returns

 Dimensional<Pressure\>

### <a id="OpenTD_Results_Dataset_IDataset_GetRecordNames"></a> GetRecordNames\(\)

```csharp
List<string> GetRecordNames()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="OpenTD_Results_Dataset_IDataset_GetRecordNumbers"></a> GetRecordNumbers\(\)

```csharp
List<long> GetRecordNumbers()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[long](https://learn.microsoft.com/dotnet/api/system.int64)\>

### <a id="OpenTD_Results_Dataset_IDataset_GetRecordNumbersAsDataArray"></a> GetRecordNumbersAsDataArray\(\)

```csharp
DataArray GetRecordNumbersAsDataArray()
```

#### Returns

 [DataArray](OpenTD.Results.Dataset.DataArray.md)

### <a id="OpenTD_Results_Dataset_IDataset_GetRegisterData_System_String_OpenTD_Results_Dataset_DataSubtype_OpenTD_UnitsData_"></a> GetRegisterData\(string, DataSubtype, UnitsData\)

```csharp
DataArray GetRegisterData(string registerName, DataSubtype subtype = null, UnitsData units = null)
```

#### Parameters

`registerName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`subtype` [DataSubtype](OpenTD.Results.Dataset.DataSubtype.md)

`units` UnitsData

#### Returns

 [DataArray](OpenTD.Results.Dataset.DataArray.md)

### <a id="OpenTD_Results_Dataset_IDataset_GetRegisterDataAtRecord_System_Int64_OpenTD_Results_Dataset_DataSubtype_OpenTD_UnitsData_"></a> GetRegisterDataAtRecord\(long, DataSubtype, UnitsData\)

```csharp
DataArray GetRegisterDataAtRecord(long recordNum, DataSubtype subtype = null, UnitsData units = null)
```

#### Parameters

`recordNum` [long](https://learn.microsoft.com/dotnet/api/system.int64)

`subtype` [DataSubtype](OpenTD.Results.Dataset.DataSubtype.md)

`units` UnitsData

#### Returns

 [DataArray](OpenTD.Results.Dataset.DataArray.md)

### <a id="OpenTD_Results_Dataset_IDataset_GetRegisterNames"></a> GetRegisterNames\(\)

```csharp
List<string> GetRegisterNames()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="OpenTD_Results_Dataset_IDataset_GetReliabilityData_System_Int64_OpenTD_Results_Dataset_DataSubtype_OpenTD_UnitsData_"></a> GetReliabilityData\(long, DataSubtype, UnitsData\)

```csharp
DataArray GetReliabilityData(long reliabilityNumber, DataSubtype subtype = null, UnitsData units = null)
```

#### Parameters

`reliabilityNumber` [long](https://learn.microsoft.com/dotnet/api/system.int64)

`subtype` [DataSubtype](OpenTD.Results.Dataset.DataSubtype.md)

`units` UnitsData

#### Returns

 [DataArray](OpenTD.Results.Dataset.DataArray.md)

### <a id="OpenTD_Results_Dataset_IDataset_GetSigma"></a> GetSigma\(\)

```csharp
Dimensional<StefanBoltzmann> GetSigma()
```

#### Returns

 Dimensional<StefanBoltzmann\>

### <a id="OpenTD_Results_Dataset_IDataset_GetThermalSubmodels"></a> GetThermalSubmodels\(\)

```csharp
List<string> GetThermalSubmodels()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="OpenTD_Results_Dataset_IDataset_GetTieIds_System_String_"></a> GetTieIds\(string\)

```csharp
List<long> GetTieIds(string submodel)
```

#### Parameters

`submodel` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[long](https://learn.microsoft.com/dotnet/api/system.int64)\>

### <a id="OpenTD_Results_Dataset_IDataset_GetTimes"></a> GetTimes\(\)

```csharp
DataArray GetTimes()
```

#### Returns

 [DataArray](OpenTD.Results.Dataset.DataArray.md)

### <a id="OpenTD_Results_Dataset_IDataset_GetTimesOrRecordNumbers"></a> GetTimesOrRecordNumbers\(\)

```csharp
DataArray GetTimesOrRecordNumbers()
```

#### Returns

 [DataArray](OpenTD.Results.Dataset.DataArray.md)

### <a id="OpenTD_Results_Dataset_IDataset_GetUDFAManager"></a> GetUDFAManager\(\)

```csharp
IUDFAManager GetUDFAManager()
```

#### Returns

 IUDFAManager

### <a id="OpenTD_Results_Dataset_IDataset_GetUdcaData_OpenTD_Results_Dataset_DataItemIdentifierCollection_"></a> GetUdcaData\(DataItemIdentifierCollection\)

```csharp
List<List<string>> GetUdcaData(DataItemIdentifierCollection dataItems)
```

#### Parameters

`dataItems` [DataItemIdentifierCollection](OpenTD.Results.Dataset.DataItemIdentifierCollection.md)

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>\>

### <a id="OpenTD_Results_Dataset_IDataset_GetUdcaDataAtRecord_OpenTD_Results_Dataset_DataSubtype_System_Int64_"></a> GetUdcaDataAtRecord\(DataSubtype, long\)

```csharp
List<string> GetUdcaDataAtRecord(DataSubtype subtype, long recordNum)
```

#### Parameters

`subtype` [DataSubtype](OpenTD.Results.Dataset.DataSubtype.md)

`recordNum` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="OpenTD_Results_Dataset_IDataset_GetUdfasAtRecord_System_Int64_"></a> GetUdfasAtRecord\(long\)

```csharp
List<DataSubtype> GetUdfasAtRecord(long recordNum)
```

#### Parameters

`recordNum` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[DataSubtype](OpenTD.Results.Dataset.DataSubtype.md)\>

### <a id="OpenTD_Results_Dataset_IDataset_ReOpen"></a> ReOpen\(\)

```csharp
void ReOpen()
```

