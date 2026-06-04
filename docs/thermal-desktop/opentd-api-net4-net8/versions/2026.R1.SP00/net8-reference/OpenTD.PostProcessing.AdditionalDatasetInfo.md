# Class AdditionalDatasetInfo

Namespace: [OpenTD.PostProcessing](OpenTD.PostProcessing.md)  
Assembly: OpenTD.dll  

Abstract class for data specific to each type of Dataset.

```csharp
[Union(0, typeof(AdditionalCompareInfo))]
[Union(1, typeof(AdditionalHeatFlowInfo))]
[Union(2, typeof(AdditionalHeatFlowMapInfo))]
[Union(3, typeof(AdditionalHeatrateInfo))]
[Union(4, typeof(AdditionalRadkInfo))]
[Union(5, typeof(AdditionalSindaInfo))]
[Union(6, typeof(AdditionalTextInfo))]
[Union(7, typeof(AdditionalTextTransientInfo))]
public abstract class AdditionalDatasetInfo
```

## Inheritance

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

## Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### AdditionalDatasetInfo\(\)

```csharp
public AdditionalDatasetInfo()
```

## Properties

### Pathname

```csharp
[IgnoreMember]
public string Pathname { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### \_pathname

Do not use.

```csharp
public string _pathname { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## See Also

[Dataset](OpenTD.PostProcessing.Dataset.md)


