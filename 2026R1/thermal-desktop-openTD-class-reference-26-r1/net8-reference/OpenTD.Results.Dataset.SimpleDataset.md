# <a id="OpenTD_Results_Dataset_SimpleDataset"></a> Class SimpleDataset

Namespace: [OpenTD.Results.Dataset](OpenTD.Results.Dataset.md)  
Assembly: OpenTD.Results.dll  

Base class for simple datasets for which it might make sense to get all
of the data at once using a single method.
Implements the <xref href="OpenTD.Results.Dataset.Dataset" data-throw-if-not-resolved="false"></xref>
Implements the <xref href="OpenTD.Results.Dataset.ISimpleDataset" data-throw-if-not-resolved="false"></xref>
Implements the <xref href="OpenTD.Results.Dataset.IDataset" data-throw-if-not-resolved="false"></xref>

```csharp
public abstract class SimpleDataset : Dataset, ISimpleDataset, IDataset
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Dataset](OpenTD.Results.Dataset.Dataset.md) ← 
[SimpleDataset](OpenTD.Results.Dataset.SimpleDataset.md)

#### Derived

[SpreadsheetDataFile](OpenTD.Results.Dataset.SpreadsheetDataFile.md), 
[TextTransientFile](OpenTD.Results.Dataset.TextTransientFile.md)

#### Implements

[ISimpleDataset](OpenTD.Results.Dataset.ISimpleDataset.md), 
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

## Methods

### <a id="OpenTD_Results_Dataset_SimpleDataset_Close"></a> Close\(\)

```csharp
public override void Close()
```

### <a id="OpenTD_Results_Dataset_SimpleDataset_GetAllData_System_Boolean_"></a> GetAllData\(bool\)

```csharp
public abstract DataArrayCollection GetAllData(bool includeXDataAsFirstArray = true)
```

#### Parameters

`includeXDataAsFirstArray` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [DataArrayCollection](OpenTD.Results.Dataset.DataArrayCollection.md)

### <a id="OpenTD_Results_Dataset_SimpleDataset_GetData_OpenTD_Results_Dataset_DataItemIdentifierCollection_"></a> GetData\(DataItemIdentifierCollection\)

Gets data for a collection of data items (e.g., "MAIN.T10", "FLOW.TL40", etc.).

```csharp
public override DataArrayCollection GetData(DataItemIdentifierCollection dataItems)
```

#### Parameters

`dataItems` [DataItemIdentifierCollection](OpenTD.Results.Dataset.DataItemIdentifierCollection.md)

#### Returns

 [DataArrayCollection](OpenTD.Results.Dataset.DataArrayCollection.md)

A <code>DataArrayCollection</code> for the requested dataItems.

### <a id="OpenTD_Results_Dataset_SimpleDataset_GetUdcaData_OpenTD_Results_Dataset_DataItemIdentifierCollection_"></a> GetUdcaData\(DataItemIdentifierCollection\)

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

### <a id="OpenTD_Results_Dataset_SimpleDataset_ReOpen"></a> ReOpen\(\)

```csharp
public override void ReOpen()
```

## See Also

[Dataset](OpenTD.Results.Dataset.Dataset.md), 
[ISimpleDataset](OpenTD.Results.Dataset.ISimpleDataset.md), 
[IDataset](OpenTD.Results.Dataset.IDataset.md)

