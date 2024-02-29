# <a id="VM_Models_Post_SoundPressureAnalysis_SoundPressureAnalysis"></a> Class SoundPressureAnalysis

Namespace: [VM.Models.Post.SoundPressureAnalysis](VM.Models.Post.SoundPressureAnalysis.md)  
Assembly: VM.Models.Post.dll  

```csharp
public class SoundPressureAnalysis
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[SoundPressureAnalysis](VM.Models.Post.SoundPressureAnalysis.SoundPressureAnalysis.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Post_SoundPressureAnalysis_SoundPressureAnalysis__ctor"></a> SoundPressureAnalysis\(\)

```csharp
public SoundPressureAnalysis()
```

## Methods

### <a id="VM_Models_Post_SoundPressureAnalysis_SoundPressureAnalysis_ExcuteSoundPressureLevel_VM_Models_Post_SoundPressureAnalysis_SoundPressureParameters_"></a> ExcuteSoundPressureLevel\(SoundPressureParameters\)

```csharp
public IDictionary<string, Point2D[]> ExcuteSoundPressureLevel(SoundPressureParameters parameters)
```

#### Parameters

`parameters` [SoundPressureParameters](VM.Models.Post.SoundPressureAnalysis.SoundPressureParameters.md)

#### Returns

 [IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), Point2D\[\]\>

### <a id="VM_Models_Post_SoundPressureAnalysis_SoundPressureAnalysis_ExportResultToFile_VM_Models_Post_SoundPressureAnalysis_SoundPressureParameters_"></a> ExportResultToFile\(SoundPressureParameters\)

```csharp
public void ExportResultToFile(SoundPressureParameters parameters)
```

#### Parameters

`parameters` [SoundPressureParameters](VM.Models.Post.SoundPressureAnalysis.SoundPressureParameters.md)

### <a id="VM_Models_Post_SoundPressureAnalysis_SoundPressureAnalysis_GetKeyValuePairGroups_System_Collections_Generic_IList_System_UInt32____"></a> GetKeyValuePairGroups\(IList<uint\[\]\>\)

```csharp
public static IList<IDictionary<uint, uint>> GetKeyValuePairGroups(IList<uint[]> outerSurfaces)
```

#### Parameters

`outerSurfaces` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)\[\]\>

#### Returns

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary\-2)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32), [uint](https://learn.microsoft.com/dotnet/api/system.uint32)\>\>

### <a id="VM_Models_Post_SoundPressureAnalysis_SoundPressureAnalysis_GetOuterSurfaces_VM_Models_Post_SoundPressureAnalysis_SoundPressureParameters_"></a> GetOuterSurfaces\(SoundPressureParameters\)

```csharp
public IList<uint[]> GetOuterSurfaces(SoundPressureParameters parameters)
```

#### Parameters

`parameters` [SoundPressureParameters](VM.Models.Post.SoundPressureAnalysis.SoundPressureParameters.md)

#### Returns

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)\[\]\>

