# <a id="VM_Models_Post_SoundPressureLevel_SoundPressureLevel"></a> Class SoundPressureLevel

Namespace: [VM.Models.Post.SoundPressureLevel](VM.Models.Post.SoundPressureLevel.md)  
Assembly: VM.Models.Post.SoundPressureLevel.dll  

```csharp
public class SoundPressureLevel
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[SoundPressureLevel](VM.Models.Post.SoundPressureLevel.SoundPressureLevel.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Post_SoundPressureLevel_SoundPressureLevel__ctor"></a> SoundPressureLevel\(\)

```csharp
public SoundPressureLevel()
```

## Methods

### <a id="VM_Models_Post_SoundPressureLevel_SoundPressureLevel_GetCoarsenedOuterSurfaces_VM_Models_Post_SoundPressureLevel_CoarseningParameters_"></a> GetCoarsenedOuterSurfaces\(CoarseningParameters\)

```csharp
public static IList<uint[]> GetCoarsenedOuterSurfaces(CoarseningParameters parameters)
```

#### Parameters

`parameters` [CoarseningParameters](VM.Models.Post.SoundPressureLevel.CoarseningParameters.md)

#### Returns

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)\[\]\>

### <a id="VM_Models_Post_SoundPressureLevel_SoundPressureLevel_RunSoundPressureLevel_VM_Models_Post_SoundPressureLevel_SoundPressureLevelAnalysisParameters_"></a> RunSoundPressureLevel\(SoundPressureLevelAnalysisParameters\)

```csharp
public static IList<Tuple<double[], double[]>> RunSoundPressureLevel(SoundPressureLevelAnalysisParameters soundPressureLevelParameters)
```

#### Parameters

`soundPressureLevelParameters` [SoundPressureLevelAnalysisParameters](VM.Models.Post.SoundPressureLevel.SoundPressureLevelAnalysisParameters.md)

#### Returns

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[Tuple](https://learn.microsoft.com/dotnet/api/system.tuple\-2)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\], [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>\>

