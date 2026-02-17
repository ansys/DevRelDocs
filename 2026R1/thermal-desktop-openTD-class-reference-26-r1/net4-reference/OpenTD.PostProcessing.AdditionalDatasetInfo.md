# <a id="OpenTD_PostProcessing_AdditionalDatasetInfo"></a> Class AdditionalDatasetInfo

Namespace: [OpenTD.PostProcessing](OpenTD.PostProcessing.md)  
Assembly: OpenTD.dll  

Abstract class for data specific to each type of Dataset.

```csharp
[DataContract]
public abstract class AdditionalDatasetInfo
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AdditionalDatasetInfo](OpenTD.PostProcessing.AdditionalDatasetInfo.md)

#### Derived

[AdditionalCompareInfo](OpenTD.PostProcessing.AdditionalCompareInfo.md), 
[AdditionalHeatFlowInfo](OpenTD.PostProcessing.AdditionalHeatFlowInfo.md), 
[AdditionalHeatFlowMapInfo](OpenTD.PostProcessing.AdditionalHeatFlowMapInfo.md), 
[AdditionalHeatrateInfo](OpenTD.PostProcessing.AdditionalHeatrateInfo.md), 
[AdditionalRadkInfo](OpenTD.PostProcessing.AdditionalRadkInfo.md), 
[AdditionalSindaInfo](OpenTD.PostProcessing.AdditionalSindaInfo.md), 
[AdditionalTextInfo](OpenTD.PostProcessing.AdditionalTextInfo.md), 
[AdditionalTextTransientInfo](OpenTD.PostProcessing.AdditionalTextTransientInfo.md)

#### Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

### <a id="OpenTD_PostProcessing_AdditionalDatasetInfo__ctor"></a> AdditionalDatasetInfo\(\)

```csharp
public AdditionalDatasetInfo()
```

## Properties

### <a id="OpenTD_PostProcessing_AdditionalDatasetInfo_Pathname"></a> Pathname

```csharp
public string Pathname { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_PostProcessing_AdditionalDatasetInfo__pathname"></a> \_pathname

Do not use.

```csharp
[DataMember]
public string _pathname { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## See Also

[Dataset](OpenTD.PostProcessing.Dataset.md)

