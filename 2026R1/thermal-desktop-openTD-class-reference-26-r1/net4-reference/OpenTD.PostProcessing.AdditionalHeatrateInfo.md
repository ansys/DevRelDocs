# <a id="OpenTD_PostProcessing_AdditionalHeatrateInfo"></a> Class AdditionalHeatrateInfo

Namespace: [OpenTD.PostProcessing](OpenTD.PostProcessing.md)  
Assembly: OpenTD.dll  

Information specific to Heatrate (orbit) type Datasets.
Implements the <xref href="OpenTD.PostProcessing.AdditionalDatasetInfo" data-throw-if-not-resolved="false"></xref>

```csharp
[DataContract]
public class AdditionalHeatrateInfo : AdditionalDatasetInfo
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AdditionalDatasetInfo](OpenTD.PostProcessing.AdditionalDatasetInfo.md) ← 
[AdditionalHeatrateInfo](OpenTD.PostProcessing.AdditionalHeatrateInfo.md)

#### Inherited Members

[AdditionalDatasetInfo.Pathname](OpenTD.PostProcessing.AdditionalDatasetInfo.md\#OpenTD\_PostProcessing\_AdditionalDatasetInfo\_Pathname), 
[AdditionalDatasetInfo.\_pathname](OpenTD.PostProcessing.AdditionalDatasetInfo.md\#OpenTD\_PostProcessing\_AdditionalDatasetInfo\_\_pathname), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

### <a id="OpenTD_PostProcessing_AdditionalHeatrateInfo__ctor"></a> AdditionalHeatrateInfo\(\)

```csharp
public AdditionalHeatrateInfo()
```

## Properties

### <a id="OpenTD_PostProcessing_AdditionalHeatrateInfo_Albedo"></a> Albedo

```csharp
[DataMember]
public bool Albedo { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_PostProcessing_AdditionalHeatrateInfo_DiffuseSkyAlbedo"></a> DiffuseSkyAlbedo

```csharp
[DataMember]
public bool DiffuseSkyAlbedo { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_PostProcessing_AdditionalHeatrateInfo_DiffuseSkyIR"></a> DiffuseSkyIR

```csharp
[DataMember]
public bool DiffuseSkyIR { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_PostProcessing_AdditionalHeatrateInfo_DiffuseSkySolar"></a> DiffuseSkySolar

```csharp
[DataMember]
public bool DiffuseSkySolar { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_PostProcessing_AdditionalHeatrateInfo_DivideByArea"></a> DivideByArea

```csharp
[DataMember]
public bool DivideByArea { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_PostProcessing_AdditionalHeatrateInfo_Planetshine"></a> Planetshine

```csharp
[DataMember]
public bool Planetshine { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_PostProcessing_AdditionalHeatrateInfo_Solar"></a> Solar

```csharp
[DataMember]
public bool Solar { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_PostProcessing_AdditionalHeatrateInfo_SourceType"></a> SourceType

```csharp
[DataMember]
public AdditionalHeatrateInfo.SourceTypes SourceType { get; set; }
```

#### Property Value

 [AdditionalHeatrateInfo](OpenTD.PostProcessing.AdditionalHeatrateInfo.md).[SourceTypes](OpenTD.PostProcessing.AdditionalHeatrateInfo.SourceTypes.md)

## See Also

[AdditionalDatasetInfo](OpenTD.PostProcessing.AdditionalDatasetInfo.md), 
[Dataset](OpenTD.PostProcessing.Dataset.md)

