# <a id="VM_Models_Post_SoundPressureLevel_SoundPressureLevelAnalysisParameters"></a> Class SoundPressureLevelAnalysisParameters

Namespace: [VM.Models.Post.SoundPressureLevel](VM.Models.Post.SoundPressureLevel.md)  
Assembly: VM.Models.Post.SoundPressureLevel.dll  

```csharp
public class SoundPressureLevelAnalysisParameters
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[SoundPressureLevelAnalysisParameters](VM.Models.Post.SoundPressureLevel.SoundPressureLevelAnalysisParameters.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Post_SoundPressureLevel_SoundPressureLevelAnalysisParameters__ctor"></a> SoundPressureLevelAnalysisParameters\(\)

```csharp
public SoundPressureLevelAnalysisParameters()
```

## Fields

### <a id="VM_Models_Post_SoundPressureLevel_SoundPressureLevelAnalysisParameters_FilteredIndexesGroups"></a> FilteredIndexesGroups

```csharp
public IList<IList<bool[]>> FilteredIndexesGroups
```

#### Field Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean)\[\]\>\>

## Properties

### <a id="VM_Models_Post_SoundPressureLevel_SoundPressureLevelAnalysisParameters_AirDensity"></a> AirDensity

```csharp
public double AirDensity { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_SoundPressureLevel_SoundPressureLevelAnalysisParameters_CoarseningRate"></a> CoarseningRate

```csharp
public double CoarseningRate { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_SoundPressureLevel_SoundPressureLevelAnalysisParameters_FinishAnlaysis"></a> FinishAnlaysis

```csharp
public Action FinishAnlaysis { get; set; }
```

#### Property Value

 [Action](https://learn.microsoft.com/dotnet/api/system.action)

### <a id="VM_Models_Post_SoundPressureLevel_SoundPressureLevelAnalysisParameters_Frequency"></a> Frequency

```csharp
public double Frequency { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_SoundPressureLevel_SoundPressureLevelAnalysisParameters_From"></a> From

```csharp
public int From { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_SoundPressureLevel_SoundPressureLevelAnalysisParameters_GetAcceleration"></a> GetAcceleration

```csharp
public Action<IList<int>, IList<IDictionary<uint, uint>>, IList<IList<double[]>>, bool> GetAcceleration { get; set; }
```

#### Property Value

 [Action](https://learn.microsoft.com/dotnet/api/system.action\-4)<[IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>, [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary\-2)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32), [uint](https://learn.microsoft.com/dotnet/api/system.uint32)\>\>, [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>\>, [bool](https://learn.microsoft.com/dotnet/api/system.boolean)\>

### <a id="VM_Models_Post_SoundPressureLevel_SoundPressureLevelAnalysisParameters_KeyValuePairGroups"></a> KeyValuePairGroups

```csharp
public IList<IDictionary<uint, uint>> KeyValuePairGroups { get; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary\-2)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32), [uint](https://learn.microsoft.com/dotnet/api/system.uint32)\>\>

### <a id="VM_Models_Post_SoundPressureLevel_SoundPressureLevelAnalysisParameters_MaxAreaFactor"></a> MaxAreaFactor

```csharp
public double MaxAreaFactor { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_SoundPressureLevel_SoundPressureLevelAnalysisParameters_MaxAspectRatio"></a> MaxAspectRatio

```csharp
public double MaxAspectRatio { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_SoundPressureLevel_SoundPressureLevelAnalysisParameters_MicroPhones"></a> MicroPhones

```csharp
public IList<double[]> MicroPhones { get; set; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

### <a id="VM_Models_Post_SoundPressureLevel_SoundPressureLevelAnalysisParameters_ModalFlags"></a> ModalFlags

```csharp
public IList<bool> ModalFlags { get; set; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean)\>

### <a id="VM_Models_Post_SoundPressureLevel_SoundPressureLevelAnalysisParameters_OriginalNodeGroups"></a> OriginalNodeGroups

```csharp
public IList<double[]> OriginalNodeGroups { get; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

### <a id="VM_Models_Post_SoundPressureLevel_SoundPressureLevelAnalysisParameters_OuterSurfaces"></a> OuterSurfaces

```csharp
public IList<uint[]> OuterSurfaces { get; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)\[\]\>

### <a id="VM_Models_Post_SoundPressureLevel_SoundPressureLevelAnalysisParameters_ParpareAnlaysis"></a> ParpareAnlaysis

```csharp
public Action ParpareAnlaysis { get; set; }
```

#### Property Value

 [Action](https://learn.microsoft.com/dotnet/api/system.action)

### <a id="VM_Models_Post_SoundPressureLevel_SoundPressureLevelAnalysisParameters_SoundVelocity"></a> SoundVelocity

```csharp
public double SoundVelocity { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_SoundPressureLevel_SoundPressureLevelAnalysisParameters_Time"></a> Time

```csharp
public IList<double> Time { get; set; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### <a id="VM_Models_Post_SoundPressureLevel_SoundPressureLevelAnalysisParameters_To"></a> To

```csharp
public int To { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_SoundPressureLevel_SoundPressureLevelAnalysisParameters_Units"></a> Units

```csharp
public IDictionary<string, double> Units { get; set; }
```

#### Property Value

 [IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [double](https://learn.microsoft.com/dotnet/api/system.double)\>

