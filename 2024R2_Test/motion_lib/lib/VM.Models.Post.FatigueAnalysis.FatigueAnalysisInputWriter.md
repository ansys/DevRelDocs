# <a id="VM_Models_Post_FatigueAnalysis_FatigueAnalysisInputWriter"></a> Class FatigueAnalysisInputWriter

Namespace: [VM.Models.Post.FatigueAnalysis](VM.Models.Post.FatigueAnalysis.md)  
Assembly: VM.Models.Post.dll  

```csharp
public class FatigueAnalysisInputWriter
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[FatigueAnalysisInputWriter](VM.Models.Post.FatigueAnalysis.FatigueAnalysisInputWriter.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Post_FatigueAnalysis_FatigueAnalysisInputWriter__ctor"></a> FatigueAnalysisInputWriter\(\)

```csharp
public FatigueAnalysisInputWriter()
```

## Methods

### <a id="VM_Models_Post_FatigueAnalysis_FatigueAnalysisInputWriter_WriteAnalysisInputFiles_VM_Models_Post_ResultInfo_VM_Models_Post_MetaInfo_VM_Models_Post_ModeShapeInfo_System_String_System_Int32_System_Collections_Generic_IList_VM_Models_Post_IDataState__VM_Models_Post_FatigueAnalysis_FatigueAnalysisParameters_"></a> WriteAnalysisInputFiles\(ResultInfo, MetaInfo, ModeShapeInfo, string, int, IList<IDataState\>, FatigueAnalysisParameters\)

```csharp
public void WriteAnalysisInputFiles(ResultInfo resultInfo, MetaInfo metaInfo, ModeShapeInfo modeShapeInfo, string caseName, int materialCount, IList<IDataState> datastates, FatigueAnalysisParameters fatigueAnalysisParameters)
```

#### Parameters

`resultInfo` [ResultInfo](VM.Models.Post.ResultInfo.md)

`metaInfo` [MetaInfo](VM.Models.Post.MetaInfo.md)

`modeShapeInfo` [ModeShapeInfo](VM.Models.Post.ModeShapeInfo.md)

`caseName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`materialCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`datastates` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[IDataState](VM.Models.Post.IDataState.md)\>

`fatigueAnalysisParameters` [FatigueAnalysisParameters](VM.Models.Post.FatigueAnalysis.FatigueAnalysisParameters.md)

