# <a id="OpenTD_Results_Dataset_DerivedDataset"></a> Class DerivedDataset

Namespace: [OpenTD.Results.Dataset](OpenTD.Results.Dataset.md)  
Assembly: OpenTD.Results.dll  

A dataset derived from one or more input datasets. When you request data from a DerivedDataset,
it performs an operation on the input datasets to combine their data. For example, a
ConcatenatedDataset stitches together all of the data from its input datasets.

```csharp
public abstract class DerivedDataset : RecordFocusedDataset, IDataset
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Dataset](OpenTD.Results.Dataset.Dataset.md) ← 
RecordFocusedDataset ← 
[DerivedDataset](OpenTD.Results.Dataset.DerivedDataset.md)

#### Derived

[ConcatenatedDataset](OpenTD.Results.Dataset.ConcatenatedDataset.md), 
[DatasetSlice](OpenTD.Results.Dataset.DatasetSlice.md)

#### Implements

[IDataset](OpenTD.Results.Dataset.IDataset.md)

#### Inherited Members

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

### <a id="OpenTD_Results_Dataset_DerivedDataset__ctor"></a> DerivedDataset\(\)

```csharp
public DerivedDataset()
```

## Properties

### <a id="OpenTD_Results_Dataset_DerivedDataset_InputDatasets"></a> InputDatasets

The list of Datasets this derives its data from.

```csharp
public List<IDataset> InputDatasets { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[IDataset](OpenTD.Results.Dataset.IDataset.md)\>

#### See Also

[Dataset](OpenTD.Results.Dataset.Dataset.md)

### <a id="OpenTD_Results_Dataset_DerivedDataset_Source"></a> Source

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

### <a id="OpenTD_Results_Dataset_DerivedDataset_CheckInputDatasets"></a> CheckInputDatasets\(\)

```csharp
protected virtual void CheckInputDatasets()
```

### <a id="OpenTD_Results_Dataset_DerivedDataset_Close"></a> Close\(\)

```csharp
public override void Close()
```

### <a id="OpenTD_Results_Dataset_DerivedDataset_GetConductorIds_System_String_"></a> GetConductorIds\(string\)

Gets all unique conductor numbers from InputDatasets for a given submodel.

```csharp
public override List<long> GetConductorIds(string submodel)
```

#### Parameters

`submodel` [string](https://learn.microsoft.com/dotnet/api/system.string)

The submodel name.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[long](https://learn.microsoft.com/dotnet/api/system.int64)\>

List&lt;System.Int64&gt;.

### <a id="OpenTD_Results_Dataset_DerivedDataset_GetFluidSubmodels"></a> GetFluidSubmodels\(\)

Gets all unique fluid submodel names from InputDatasets.

```csharp
public override List<string> GetFluidSubmodels()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

List&lt;System.String&gt;.

### <a id="OpenTD_Results_Dataset_DerivedDataset_GetFtieIds_System_String_"></a> GetFtieIds\(string\)

Gets all unique FTie numbers from InputDatasets for a given submodel.

```csharp
public override List<long> GetFtieIds(string submodel)
```

#### Parameters

`submodel` [string](https://learn.microsoft.com/dotnet/api/system.string)

The submodel name.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[long](https://learn.microsoft.com/dotnet/api/system.int64)\>

List&lt;System.Int64&gt;.

### <a id="OpenTD_Results_Dataset_DerivedDataset_GetIfaceIds_System_String_"></a> GetIfaceIds\(string\)

Gets all unique IFace numbers from InputDatasets for a given submodel.

```csharp
public override List<long> GetIfaceIds(string submodel)
```

#### Parameters

`submodel` [string](https://learn.microsoft.com/dotnet/api/system.string)

The submodel name.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[long](https://learn.microsoft.com/dotnet/api/system.int64)\>

List&lt;System.Int64&gt;.

### <a id="OpenTD_Results_Dataset_DerivedDataset_GetLumpIds_System_String_"></a> GetLumpIds\(string\)

Gets all unique lump numbers from InputDatasets for a given submodel.

```csharp
public override List<long> GetLumpIds(string submodel)
```

#### Parameters

`submodel` [string](https://learn.microsoft.com/dotnet/api/system.string)

The submodel name.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[long](https://learn.microsoft.com/dotnet/api/system.int64)\>

List&lt;System.Int64&gt;.

### <a id="OpenTD_Results_Dataset_DerivedDataset_GetNodeIds_System_String_"></a> GetNodeIds\(string\)

Gets all unique node numbers from InputDatasets for a given submodel.

```csharp
public override List<long> GetNodeIds(string submodel)
```

#### Parameters

`submodel` [string](https://learn.microsoft.com/dotnet/api/system.string)

The submodel name.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[long](https://learn.microsoft.com/dotnet/api/system.int64)\>

List&lt;System.Int64&gt;.

### <a id="OpenTD_Results_Dataset_DerivedDataset_GetPathIds_System_String_"></a> GetPathIds\(string\)

Gets all unique path numbers from InputDatasets for a given submodel.

```csharp
public override List<long> GetPathIds(string submodel)
```

#### Parameters

`submodel` [string](https://learn.microsoft.com/dotnet/api/system.string)

The submodel name.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[long](https://learn.microsoft.com/dotnet/api/system.int64)\>

List&lt;System.Int64&gt;.

### <a id="OpenTD_Results_Dataset_DerivedDataset_GetRegisterNames"></a> GetRegisterNames\(\)

Gets all unique register names from InputDatasets.

```csharp
public override List<string> GetRegisterNames()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

List&lt;System.String&gt;.

### <a id="OpenTD_Results_Dataset_DerivedDataset_GetThermalSubmodels"></a> GetThermalSubmodels\(\)

Gets all unique thermal submodel names from InputDatasets.

```csharp
public override List<string> GetThermalSubmodels()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

List&lt;System.String&gt;.

### <a id="OpenTD_Results_Dataset_DerivedDataset_GetTieIds_System_String_"></a> GetTieIds\(string\)

Gets all unique tie numbers from InputDatasets for a given submodel.

```csharp
public override List<long> GetTieIds(string submodel)
```

#### Parameters

`submodel` [string](https://learn.microsoft.com/dotnet/api/system.string)

The submodel name.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[long](https://learn.microsoft.com/dotnet/api/system.int64)\>

List&lt;System.Int64&gt;.

### <a id="OpenTD_Results_Dataset_DerivedDataset_ReOpen"></a> ReOpen\(\)

```csharp
public override void ReOpen()
```

## See Also

[Dataset](OpenTD.Results.Dataset.Dataset.md), 
[ConcatenatedDataset](OpenTD.Results.Dataset.ConcatenatedDataset.md)

