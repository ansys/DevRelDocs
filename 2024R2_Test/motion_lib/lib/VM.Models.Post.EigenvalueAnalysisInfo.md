# <a id="VM_Models_Post_EigenvalueAnalysisInfo"></a> Class EigenvalueAnalysisInfo

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public sealed class EigenvalueAnalysisInfo
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[EigenvalueAnalysisInfo](VM.Models.Post.EigenvalueAnalysisInfo.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Post_EigenvalueAnalysisInfo__ctor_System_String_System_Double_"></a> EigenvalueAnalysisInfo\(string, double\)

```csharp
public EigenvalueAnalysisInfo(string filePath, double samplingTime)
```

#### Parameters

`filePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

`samplingTime` [double](https://learn.microsoft.com/dotnet/api/system.double)

## Properties

### <a id="VM_Models_Post_EigenvalueAnalysisInfo_FilePath"></a> FilePath

```csharp
public string FilePath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_EigenvalueAnalysisInfo_FrequenciesInfo"></a> FrequenciesInfo

```csharp
public FrequenciesInfo FrequenciesInfo { get; }
```

#### Property Value

 [FrequenciesInfo](VM.Models.Post.FrequenciesInfo.md)

### <a id="VM_Models_Post_EigenvalueAnalysisInfo_SamplingTime"></a> SamplingTime

```csharp
public double SamplingTime { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_EigenvalueAnalysisInfo_StateId"></a> StateId

```csharp
public uint StateId { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

## Methods

### <a id="VM_Models_Post_EigenvalueAnalysisInfo_SetFrequenciesInfo_VM_Models_Post_FrequenciesInfo_System_Double___"></a> SetFrequenciesInfo\(FrequenciesInfo, double\[\]\)

```csharp
public void SetFrequenciesInfo(FrequenciesInfo frequenciesInfo, double[] times)
```

#### Parameters

`frequenciesInfo` [FrequenciesInfo](VM.Models.Post.FrequenciesInfo.md)

`times` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

