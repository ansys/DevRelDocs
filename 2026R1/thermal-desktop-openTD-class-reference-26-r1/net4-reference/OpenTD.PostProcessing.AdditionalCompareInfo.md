# <a id="OpenTD_PostProcessing_AdditionalCompareInfo"></a> Class AdditionalCompareInfo

Namespace: [OpenTD.PostProcessing](OpenTD.PostProcessing.md)  
Assembly: OpenTD.dll  

Information specific to Compare type Datasets.
Implements the <xref href="OpenTD.PostProcessing.AdditionalDatasetInfo" data-throw-if-not-resolved="false"></xref>

```csharp
[DataContract]
public class AdditionalCompareInfo : AdditionalDatasetInfo
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AdditionalDatasetInfo](OpenTD.PostProcessing.AdditionalDatasetInfo.md) ← 
[AdditionalCompareInfo](OpenTD.PostProcessing.AdditionalCompareInfo.md)

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

### <a id="OpenTD_PostProcessing_AdditionalCompareInfo__ctor"></a> AdditionalCompareInfo\(\)

```csharp
public AdditionalCompareInfo()
```

## Properties

### <a id="OpenTD_PostProcessing_AdditionalCompareInfo_DataSetNames"></a> DataSetNames

```csharp
[DataMember]
public List<string> DataSetNames { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="OpenTD_PostProcessing_AdditionalCompareInfo_Format"></a> Format

```csharp
[DataMember]
public string Format { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_PostProcessing_AdditionalCompareInfo_Type"></a> Type

```csharp
[DataMember]
public int Type { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_PostProcessing_AdditionalCompareInfo_Type2"></a> Type2

```csharp
[DataMember]
public int Type2 { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## See Also

[AdditionalDatasetInfo](OpenTD.PostProcessing.AdditionalDatasetInfo.md), 
[Dataset](OpenTD.PostProcessing.Dataset.md)

