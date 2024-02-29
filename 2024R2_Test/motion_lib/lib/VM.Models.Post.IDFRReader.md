# <a id="VM_Models_Post_IDFRReader"></a> Interface IDFRReader

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public interface IDFRReader
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Models_Post_IDFRReader_DFGType"></a> DFGType

```csharp
int DFGType { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_IDFRReader_DFMType"></a> DFMType

```csharp
int DFMType { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_IDFRReader_MajorVersion"></a> MajorVersion

```csharp
int MajorVersion { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_IDFRReader_MinorVersion"></a> MinorVersion

```csharp
int MinorVersion { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_IDFRReader_Primary"></a> Primary

```csharp
AnalysisResultType Primary { get; }
```

#### Property Value

 AnalysisResultType

### <a id="VM_Models_Post_IDFRReader_RESType"></a> RESType

```csharp
int RESType { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_IDFRReader_Secondary"></a> Secondary

```csharp
AnalysisResultType[] Secondary { get; }
```

#### Property Value

 AnalysisResultType\[\]

## Methods

### <a id="VM_Models_Post_IDFRReader_Contains_VM_Models_AnalysisResultType_"></a> Contains\(AnalysisResultType\)

```csharp
bool Contains(AnalysisResultType analysisResultType)
```

#### Parameters

`analysisResultType` AnalysisResultType

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_IDFRReader_CreateModeContributionAnalysisResult_VM_Models_Post_ResultDocument_System_Double___System_Int32___VM_Models_Post_MetaInfo_VM_Models_Post_MetaInfo_"></a> CreateModeContributionAnalysisResult\(ResultDocument, double\[\], int\[\], MetaInfo, MetaInfo\)

```csharp
AnalysisResult CreateModeContributionAnalysisResult(ResultDocument parentDocument, double[] times, int[] stateIDs, MetaInfo primaryMetaInfo, MetaInfo secondaryMetaInfo)
```

#### Parameters

`parentDocument` [ResultDocument](VM.Models.Post.ResultDocument.md)

`times` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`stateIDs` [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

`primaryMetaInfo` [MetaInfo](VM.Models.Post.MetaInfo.md)

`secondaryMetaInfo` [MetaInfo](VM.Models.Post.MetaInfo.md)

#### Returns

 [AnalysisResult](VM.Models.Post.AnalysisResult.md)

### <a id="VM_Models_Post_IDFRReader_CreatePrimaryAnalysisResult_VM_Models_Post_ResultDocument_System_Double___System_Int32___VM_Models_Post_MetaInfo_"></a> CreatePrimaryAnalysisResult\(ResultDocument, double\[\], int\[\], MetaInfo\)

```csharp
AnalysisResult CreatePrimaryAnalysisResult(ResultDocument parentDocument, double[] times, int[] stateIDs, MetaInfo primaryMetaInfo)
```

#### Parameters

`parentDocument` [ResultDocument](VM.Models.Post.ResultDocument.md)

`times` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`stateIDs` [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

`primaryMetaInfo` [MetaInfo](VM.Models.Post.MetaInfo.md)

#### Returns

 [AnalysisResult](VM.Models.Post.AnalysisResult.md)

### <a id="VM_Models_Post_IDFRReader_CreateSecondaryAnalysisResult_VM_Models_Post_ResultDocument_VM_Models_Post_AnalysisResult_VM_Models_AnalysisResultType_System_Double___System_Int32___VM_Models_Post_MetaInfo_"></a> CreateSecondaryAnalysisResult\(ResultDocument, AnalysisResult, AnalysisResultType, double\[\], int\[\], MetaInfo\)

```csharp
AnalysisResult CreateSecondaryAnalysisResult(ResultDocument parentDocument, AnalysisResult primaryAnalysisResult, AnalysisResultType analysisResultType, double[] times, int[] stateIDs, MetaInfo secondaryMetaInfo)
```

#### Parameters

`parentDocument` [ResultDocument](VM.Models.Post.ResultDocument.md)

`primaryAnalysisResult` [AnalysisResult](VM.Models.Post.AnalysisResult.md)

`analysisResultType` AnalysisResultType

`times` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`stateIDs` [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

`secondaryMetaInfo` [MetaInfo](VM.Models.Post.MetaInfo.md)

#### Returns

 [AnalysisResult](VM.Models.Post.AnalysisResult.md)

### <a id="VM_Models_Post_IDFRReader_ValidateVersion"></a> ValidateVersion\(\)

```csharp
bool ValidateVersion()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

