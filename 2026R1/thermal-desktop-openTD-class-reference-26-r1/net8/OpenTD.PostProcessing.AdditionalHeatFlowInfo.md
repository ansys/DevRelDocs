# <a id="OpenTD_PostProcessing_AdditionalHeatFlowInfo"></a> Class AdditionalHeatFlowInfo

Namespace: [OpenTD.PostProcessing](OpenTD.PostProcessing.md)  
Assembly: OpenTD.dll  

Information specific to Heat Flow type Datasets.
Implements the <xref href="OpenTD.PostProcessing.AdditionalDatasetInfo" data-throw-if-not-resolved="false"></xref>

```csharp
public class AdditionalHeatFlowInfo : AdditionalDatasetInfo
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AdditionalDatasetInfo](OpenTD.PostProcessing.AdditionalDatasetInfo.md) ← 
[AdditionalHeatFlowInfo](OpenTD.PostProcessing.AdditionalHeatFlowInfo.md)

#### Inherited Members

[AdditionalDatasetInfo.Pathname](OpenTD.PostProcessing.AdditionalDatasetInfo.md\#OpenTD\_PostProcessing\_AdditionalDatasetInfo\_Pathname), 
[AdditionalDatasetInfo.\_pathname](OpenTD.PostProcessing.AdditionalDatasetInfo.md\#OpenTD\_PostProcessing\_AdditionalDatasetInfo\_\_pathname), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="OpenTD_PostProcessing_AdditionalHeatFlowInfo__ctor"></a> AdditionalHeatFlowInfo\(\)

```csharp
public AdditionalHeatFlowInfo()
```

## Properties

### <a id="OpenTD_PostProcessing_AdditionalHeatFlowInfo_DivideByArea"></a> DivideByArea

```csharp
public int DivideByArea { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_PostProcessing_AdditionalHeatFlowInfo_DivideByAreaFile"></a> DivideByAreaFile

```csharp
public string DivideByAreaFile { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_PostProcessing_AdditionalHeatFlowInfo_From"></a> From

```csharp
public List<string> From { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="OpenTD_PostProcessing_AdditionalHeatFlowInfo_Linear"></a> Linear

```csharp
public int Linear { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_PostProcessing_AdditionalHeatFlowInfo_Radiation"></a> Radiation

```csharp
public int Radiation { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_PostProcessing_AdditionalHeatFlowInfo_ReverseSignFrom"></a> ReverseSignFrom

```csharp
public int ReverseSignFrom { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_PostProcessing_AdditionalHeatFlowInfo_ReverseSignTo"></a> ReverseSignTo

```csharp
public int ReverseSignTo { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_PostProcessing_AdditionalHeatFlowInfo_ShowFrom"></a> ShowFrom

```csharp
public int ShowFrom { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_PostProcessing_AdditionalHeatFlowInfo_ShowTo"></a> ShowTo

```csharp
public int ShowTo { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_PostProcessing_AdditionalHeatFlowInfo_Ties"></a> Ties

```csharp
public int Ties { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_PostProcessing_AdditionalHeatFlowInfo_To"></a> To

```csharp
public List<string> To { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

## See Also

[AdditionalDatasetInfo](OpenTD.PostProcessing.AdditionalDatasetInfo.md), 
[Dataset](OpenTD.PostProcessing.Dataset.md)

