# <a id="VM_Models_Post_VectorDisplayService"></a> Class VectorDisplayService

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public static class VectorDisplayService
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[VectorDisplayService](VM.Models.Post.VectorDisplayService.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_Models_Post_VectorDisplayService_CreateVectorDisplay_VM_Models_Post_ResultDocument_VM_Identifier_System_String_VM_Models_Post_IVectorDisplayable_System_String_"></a> CreateVectorDisplay\(ResultDocument, Identifier, string, IVectorDisplayable, string\)

```csharp
public static VectorDisplayBase CreateVectorDisplay(ResultDocument parentDocument, Identifier analysisResultID, string fullName, IVectorDisplayable target, string characteristic)
```

#### Parameters

`parentDocument` [ResultDocument](VM.Models.Post.ResultDocument.md)

`analysisResultID` Identifier

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`target` [IVectorDisplayable](VM.Models.Post.IVectorDisplayable.md)

`characteristic` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [VectorDisplayBase](VM.Models.Post.VectorDisplayBase.md)

### <a id="VM_Models_Post_VectorDisplayService_ExportVectorDisplayToFile_VM_Models_Post_SourceData_System_String_System_Int32___System_Boolean_System_Boolean_System_Boolean_VM_Models_Post_VectorDisplayBase___"></a> ExportVectorDisplayToFile\(SourceData, string, int\[\], bool, bool, bool, VectorDisplayBase\[\]\)

```csharp
public static void ExportVectorDisplayToFile(SourceData sourceData, string filepath, int[] stateids, bool isIncludePosition, bool includeVector, bool includeMagnitude, VectorDisplayBase[] vectorDisplays)
```

#### Parameters

`sourceData` [SourceData](VM.Models.Post.SourceData.md)

`filepath` [string](https://learn.microsoft.com/dotnet/api/system.string)

`stateids` [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

`isIncludePosition` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`includeVector` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`includeMagnitude` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`vectorDisplays` [VectorDisplayBase](VM.Models.Post.VectorDisplayBase.md)\[\]

### <a id="VM_Models_Post_VectorDisplayService_GetVectorDisplayCategoryName_VM_Models_Post_VectorDisplayType_"></a> GetVectorDisplayCategoryName\(VectorDisplayType\)

```csharp
public static string GetVectorDisplayCategoryName(VectorDisplayType type)
```

#### Parameters

`type` [VectorDisplayType](VM.Models.Post.VectorDisplayType.md)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_VectorDisplayService_GetVectorDisplayCharacteristic_VM_Models_Post_IVectorDisplayable_"></a> GetVectorDisplayCharacteristic\(IVectorDisplayable\)

```csharp
public static IEnumerable<VectorDisplayCharacteristic> GetVectorDisplayCharacteristic(IVectorDisplayable entity)
```

#### Parameters

`entity` [IVectorDisplayable](VM.Models.Post.IVectorDisplayable.md)

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[VectorDisplayCharacteristic](VM.Models.Post.VectorDisplayCharacteristic.md)\>

### <a id="VM_Models_Post_VectorDisplayService_ReadVectorDisplayInfos_VM_Models_Post_SourceData_System_Collections_Generic_IEnumerable_VM_Models_Post_IVectorDisplay__"></a> ReadVectorDisplayInfos\(SourceData, IEnumerable<IVectorDisplay\>\)

```csharp
public static VectorDisplayInfos ReadVectorDisplayInfos(SourceData sourceData, IEnumerable<IVectorDisplay> vectorDisplays)
```

#### Parameters

`sourceData` [SourceData](VM.Models.Post.SourceData.md)

`vectorDisplays` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IVectorDisplay](VM.Models.Post.IVectorDisplay.md)\>

#### Returns

 [VectorDisplayInfos](VM.Models.Post.VectorDisplayInfos.md)

