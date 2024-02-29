# <a id="VM_Models_Post_FrequencyResponse_FrequencyResponseAnalysisParameters"></a> Class FrequencyResponseAnalysisParameters

Namespace: [VM.Models.Post.FrequencyResponse](VM.Models.Post.FrequencyResponse.md)  
Assembly: VM.Models.Post.dll  

```csharp
public class FrequencyResponseAnalysisParameters
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[FrequencyResponseAnalysisParameters](VM.Models.Post.FrequencyResponse.FrequencyResponseAnalysisParameters.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Post_FrequencyResponse_FrequencyResponseAnalysisParameters__ctor"></a> FrequencyResponseAnalysisParameters\(\)

```csharp
public FrequencyResponseAnalysisParameters()
```

## Properties

### <a id="VM_Models_Post_FrequencyResponse_FrequencyResponseAnalysisParameters_Actuators"></a> Actuators

```csharp
public IEnumerable<ActuatorBase> Actuators { get; set; }
```

#### Property Value

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[ActuatorBase](VM.Models.Post.ActuatorBase.md)\>

### <a id="VM_Models_Post_FrequencyResponse_FrequencyResponseAnalysisParameters_DomainSpace"></a> DomainSpace

```csharp
public ScalingType DomainSpace { get; set; }
```

#### Property Value

 [ScalingType](VM.Models.Post.ScalingType.md)

### <a id="VM_Models_Post_FrequencyResponse_FrequencyResponseAnalysisParameters_From"></a> From

```csharp
public double From { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_FrequencyResponse_FrequencyResponseAnalysisParameters_InputChannels"></a> InputChannels

```csharp
public IList<InputChannel> InputChannels { get; set; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[InputChannel](VM.Models.Post.InputChannel.md)\>

### <a id="VM_Models_Post_FrequencyResponse_FrequencyResponseAnalysisParameters_OutputChannel"></a> OutputChannel

```csharp
public OutputChannel OutputChannel { get; set; }
```

#### Property Value

 [OutputChannel](VM.Models.Post.OutputChannel.md)

### <a id="VM_Models_Post_FrequencyResponse_FrequencyResponseAnalysisParameters_RangeType"></a> RangeType

```csharp
public RangeType RangeType { get; set; }
```

#### Property Value

 [RangeType](VM.Models.Post.RangeType.md)

### <a id="VM_Models_Post_FrequencyResponse_FrequencyResponseAnalysisParameters_SamplingTimeSequence"></a> SamplingTimeSequence

```csharp
public uint SamplingTimeSequence { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Models_Post_FrequencyResponse_FrequencyResponseAnalysisParameters_Source"></a> Source

```csharp
public SourceData Source { get; set; }
```

#### Property Value

 [SourceData](VM.Models.Post.SourceData.md)

### <a id="VM_Models_Post_FrequencyResponse_FrequencyResponseAnalysisParameters_Step"></a> Step

```csharp
public int Step { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_FrequencyResponse_FrequencyResponseAnalysisParameters_To"></a> To

```csharp
public double To { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

