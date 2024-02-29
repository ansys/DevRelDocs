# <a id="VM_Models_Post_ModeContributionAnalysis_ModeContributionAnalysisParameters"></a> Class ModeContributionAnalysisParameters

Namespace: [VM.Models.Post.ModeContributionAnalysis](VM.Models.Post.ModeContributionAnalysis.md)  
Assembly: VM.Models.Post.dll  

```csharp
public class ModeContributionAnalysisParameters : IModeContributionParameter
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ModeContributionAnalysisParameters](VM.Models.Post.ModeContributionAnalysis.ModeContributionAnalysisParameters.md)

#### Implements

[IModeContributionParameter](VM.Models.Post.IModeContributionParameter.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Post_ModeContributionAnalysis_ModeContributionAnalysisParameters__ctor"></a> ModeContributionAnalysisParameters\(\)

```csharp
public ModeContributionAnalysisParameters()
```

## Properties

### <a id="VM_Models_Post_ModeContributionAnalysis_ModeContributionAnalysisParameters_Body"></a> Body

```csharp
public IBodyBase Body { get; set; }
```

#### Property Value

 [IBodyBase](VM.Models.Post.IBodyBase.md)

### <a id="VM_Models_Post_ModeContributionAnalysis_ModeContributionAnalysisParameters_BodyName"></a> BodyName

```csharp
[SerializationProperty]
public string BodyName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_ModeContributionAnalysis_ModeContributionAnalysisParameters_Characteristic"></a> Characteristic

```csharp
[SerializationProperty]
public CharacteristicType Characteristic { get; set; }
```

#### Property Value

 CharacteristicType

### <a id="VM_Models_Post_ModeContributionAnalysis_ModeContributionAnalysisParameters_Component"></a> Component

```csharp
[SerializationProperty]
public ComponentType Component { get; set; }
```

#### Property Value

 ComponentType

### <a id="VM_Models_Post_ModeContributionAnalysis_ModeContributionAnalysisParameters_ModeContributionAnalysisType"></a> ModeContributionAnalysisType

```csharp
[SerializationProperty]
public ModeContributionAnalysisType ModeContributionAnalysisType { get; set; }
```

#### Property Value

 [ModeContributionAnalysisType](VM.Models.Post.ModeContributionAnalysisType.md)

### <a id="VM_Models_Post_ModeContributionAnalysis_ModeContributionAnalysisParameters_ModeContributionResultType"></a> ModeContributionResultType

```csharp
[SerializationProperty]
public ModeContributionResultType ModeContributionResultType { get; set; }
```

#### Property Value

 [ModeContributionResultType](VM.Models.Post.ModeContributionResultType.md)

### <a id="VM_Models_Post_ModeContributionAnalysis_ModeContributionAnalysisParameters_NodeID"></a> NodeID

```csharp
[SerializationProperty]
public int NodeID { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_ModeContributionAnalysis_ModeContributionAnalysisParameters_SamplingTime"></a> SamplingTime

```csharp
[SerializationProperty]
public double SamplingTime { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_ModeContributionAnalysis_ModeContributionAnalysisParameters_Source"></a> Source

```csharp
public SourceData Source { get; set; }
```

#### Property Value

 [SourceData](VM.Models.Post.SourceData.md)

### <a id="VM_Models_Post_ModeContributionAnalysis_ModeContributionAnalysisParameters_Step"></a> Step

```csharp
[SerializationProperty]
public int Step { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_ModeContributionAnalysis_ModeContributionAnalysisParameters_TargetEigenvalueAnalysisInfo"></a> TargetEigenvalueAnalysisInfo

```csharp
public EigenvalueAnalysisInfo TargetEigenvalueAnalysisInfo { get; }
```

#### Property Value

 [EigenvalueAnalysisInfo](VM.Models.Post.EigenvalueAnalysisInfo.md)

### <a id="VM_Models_Post_ModeContributionAnalysis_ModeContributionAnalysisParameters_XValue"></a> XValue

```csharp
[SerializationProperty]
public double XValue { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_ModeContributionAnalysis_ModeContributionAnalysisParameters_YValue"></a> YValue

```csharp
[SerializationProperty]
public double YValue { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

