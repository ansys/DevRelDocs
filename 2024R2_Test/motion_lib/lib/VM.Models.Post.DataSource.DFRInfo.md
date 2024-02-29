# <a id="VM_Models_Post_DataSource_DFRInfo"></a> Class DFRInfo

Namespace: [VM.Models.Post.DataSource](VM.Models.Post.DataSource.md)  
Assembly: VM.Models.Post.DataSource.dll  

```csharp
public sealed class DFRInfo : IDFRReader
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DFRInfo](VM.Models.Post.DataSource.DFRInfo.md)

#### Implements

IDFRReader

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Post_DataSource_DFRInfo__ctor"></a> DFRInfo\(\)

```csharp
public DFRInfo()
```

## Properties

### <a id="VM_Models_Post_DataSource_DFRInfo_DFGType"></a> DFGType

```csharp
public DFRInfo.SomeInfo<int> DFGType { get; set; }
```

#### Property Value

 [DFRInfo](VM.Models.Post.DataSource.DFRInfo.md).[SomeInfo](VM.Models.Post.DataSource.DFRInfo.SomeInfo\-1.md)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

### <a id="VM_Models_Post_DataSource_DFRInfo_DFMType"></a> DFMType

```csharp
public DFRInfo.SomeInfo<int> DFMType { get; set; }
```

#### Property Value

 [DFRInfo](VM.Models.Post.DataSource.DFRInfo.md).[SomeInfo](VM.Models.Post.DataSource.DFRInfo.SomeInfo\-1.md)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

### <a id="VM_Models_Post_DataSource_DFRInfo_MajorVersion"></a> MajorVersion

```csharp
public DFRInfo.SomeInfo<int> MajorVersion { get; set; }
```

#### Property Value

 [DFRInfo](VM.Models.Post.DataSource.DFRInfo.md).[SomeInfo](VM.Models.Post.DataSource.DFRInfo.SomeInfo\-1.md)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

### <a id="VM_Models_Post_DataSource_DFRInfo_MinorVersion"></a> MinorVersion

```csharp
public DFRInfo.SomeInfo<int> MinorVersion { get; set; }
```

#### Property Value

 [DFRInfo](VM.Models.Post.DataSource.DFRInfo.md).[SomeInfo](VM.Models.Post.DataSource.DFRInfo.SomeInfo\-1.md)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

### <a id="VM_Models_Post_DataSource_DFRInfo_Primary"></a> Primary

```csharp
public DFRInfo.SomeInfo<AnalysisResultType> Primary { get; set; }
```

#### Property Value

 [DFRInfo](VM.Models.Post.DataSource.DFRInfo.md).[SomeInfo](VM.Models.Post.DataSource.DFRInfo.SomeInfo\-1.md)<AnalysisResultType\>

### <a id="VM_Models_Post_DataSource_DFRInfo_RESType"></a> RESType

```csharp
public DFRInfo.SomeInfo<int> RESType { get; set; }
```

#### Property Value

 [DFRInfo](VM.Models.Post.DataSource.DFRInfo.md).[SomeInfo](VM.Models.Post.DataSource.DFRInfo.SomeInfo\-1.md)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

### <a id="VM_Models_Post_DataSource_DFRInfo_Secondary"></a> Secondary

```csharp
public DFRInfo.SomeInfo<AnalysisResultType[]> Secondary { get; set; }
```

#### Property Value

 [DFRInfo](VM.Models.Post.DataSource.DFRInfo.md).[SomeInfo](VM.Models.Post.DataSource.DFRInfo.SomeInfo\-1.md)<AnalysisResultType\[\]\>

## Methods

### <a id="VM_Models_Post_DataSource_DFRInfo_Contains_VM_Models_AnalysisResultType_"></a> Contains\(AnalysisResultType\)

```csharp
public bool Contains(AnalysisResultType analysisResultType)
```

#### Parameters

`analysisResultType` AnalysisResultType

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_DataSource_DFRInfo_CreateModeContributionAnalysisResult_VM_Models_Post_ResultDocument_System_Double___System_Int32___VM_Models_Post_MetaInfo_VM_Models_Post_MetaInfo_"></a> CreateModeContributionAnalysisResult\(ResultDocument, double\[\], int\[\], MetaInfo, MetaInfo\)

```csharp
public AnalysisResult CreateModeContributionAnalysisResult(ResultDocument parentDocument, double[] times, int[] stateIDs, MetaInfo primaryMetaInfo, MetaInfo secondaryMetaInfo)
```

#### Parameters

`parentDocument` ResultDocument

`times` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`stateIDs` [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

`primaryMetaInfo` MetaInfo

`secondaryMetaInfo` MetaInfo

#### Returns

 AnalysisResult

### <a id="VM_Models_Post_DataSource_DFRInfo_CreatePrimaryAnalysisResult_VM_Models_Post_ResultDocument_System_Double___System_Int32___VM_Models_Post_MetaInfo_"></a> CreatePrimaryAnalysisResult\(ResultDocument, double\[\], int\[\], MetaInfo\)

```csharp
public AnalysisResult CreatePrimaryAnalysisResult(ResultDocument parentDocument, double[] times, int[] stateIDs, MetaInfo primaryMetaInfo)
```

#### Parameters

`parentDocument` ResultDocument

`times` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`stateIDs` [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

`primaryMetaInfo` MetaInfo

#### Returns

 AnalysisResult

### <a id="VM_Models_Post_DataSource_DFRInfo_CreateSecondaryAnalysisResult_VM_Models_Post_ResultDocument_VM_Models_Post_AnalysisResult_VM_Models_AnalysisResultType_System_Double___System_Int32___VM_Models_Post_MetaInfo_"></a> CreateSecondaryAnalysisResult\(ResultDocument, AnalysisResult, AnalysisResultType, double\[\], int\[\], MetaInfo\)

```csharp
public AnalysisResult CreateSecondaryAnalysisResult(ResultDocument parentDocument, AnalysisResult primaryAnalysisResult, AnalysisResultType analysisResultType, double[] times, int[] stateIDs, MetaInfo secondaryMetaInfo)
```

#### Parameters

`parentDocument` ResultDocument

`primaryAnalysisResult` AnalysisResult

`analysisResultType` AnalysisResultType

`times` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`stateIDs` [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

`secondaryMetaInfo` MetaInfo

#### Returns

 AnalysisResult

### <a id="VM_Models_Post_DataSource_DFRInfo_ValidateVersion"></a> ValidateVersion\(\)

```csharp
public bool ValidateVersion()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

