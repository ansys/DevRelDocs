# <a id="VM_Models_Post_AnalysisResultExtension"></a> Class AnalysisResultExtension

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public static class AnalysisResultExtension
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AnalysisResultExtension](VM.Models.Post.AnalysisResultExtension.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_Models_Post_AnalysisResultExtension_GetStateIDArrayByInterval_System_UInt32_System_UInt32_System_UInt32_"></a> GetStateIDArrayByInterval\(uint, uint, uint\)

```csharp
public static IEnumerable<int> GetStateIDArrayByInterval(uint skipBy, uint from, uint to)
```

#### Parameters

`skipBy` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

`from` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

`to` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

### <a id="VM_Models_Post_AnalysisResultExtension_GetStateIDArrayByMultiRanges_System_String_System_Int32_System_Int32_"></a> GetStateIDArrayByMultiRanges\(string, int, int\)

```csharp
public static IEnumerable<int> GetStateIDArrayByMultiRanges(string expression, int min, int max)
```

#### Parameters

`expression` [string](https://learn.microsoft.com/dotnet/api/system.string)

`min` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`max` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

### <a id="VM_Models_Post_AnalysisResultExtension_GetStateIDArrayByNumberOfFrames_System_UInt32_System_UInt32_System_UInt32_"></a> GetStateIDArrayByNumberOfFrames\(uint, uint, uint\)

```csharp
public static IEnumerable<int> GetStateIDArrayByNumberOfFrames(uint nframes, uint from, uint to)
```

#### Parameters

`nframes` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

`from` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

`to` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

### <a id="VM_Models_Post_AnalysisResultExtension_GetStateIDs_System_UInt32_System_UInt32_"></a> GetStateIDs\(uint, uint\)

```csharp
public static IEnumerable<int> GetStateIDs(uint frames, uint totalFrames)
```

#### Parameters

`frames` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

`totalFrames` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

### <a id="VM_Models_Post_AnalysisResultExtension_GetStateIDs_VM_Models_Post_AnalysisResult_System_Nullable_System_Int32__"></a> GetStateIDs\(AnalysisResult, int?\)

```csharp
public static IEnumerable<int> GetStateIDs(this AnalysisResult analysisResult, int? totalFrames = null)
```

#### Parameters

`analysisResult` [AnalysisResult](VM.Models.Post.AnalysisResult.md)

`totalFrames` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

