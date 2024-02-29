# <a id="VM_Models_Post_IDriveTrainReader"></a> Interface IDriveTrainReader

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public interface IDriveTrainReader
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_Models_Post_IDriveTrainReader_ReadAssemblyManagerInfo_VM_Models_Post_ResultDocument_VM_Identifier_VM_Models_Post_IDriveTrain___System_String_"></a> ReadAssemblyManagerInfo\(ResultDocument, Identifier, IDriveTrain\[\], string\)

```csharp
bool ReadAssemblyManagerInfo(ResultDocument parentDocument, Identifier analysisResultID, IDriveTrain[] assmblyManagers, string filePath)
```

#### Parameters

`parentDocument` [ResultDocument](VM.Models.Post.ResultDocument.md)

`analysisResultID` Identifier

`assmblyManagers` [IDriveTrain](VM.Models.Post.IDriveTrain.md)\[\]

`filePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_IDriveTrainReader_ReadColormapInfo_VM_Models_Post_IGearSet___System_String_"></a> ReadColormapInfo\(IGearSet\[\], string\)

```csharp
bool ReadColormapInfo(IGearSet[] gearSets, string dfmPath)
```

#### Parameters

`gearSets` [IGearSet](VM.Models.Post.IGearSet.md)\[\]

`dfmPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_IDriveTrainReader_ReadResultInfo_VM_Models_Post_ResultDocument_VM_Identifier_VM_Models_Post_IDriveTrain___System_String_"></a> ReadResultInfo\(ResultDocument, Identifier, IDriveTrain\[\], string\)

```csharp
bool ReadResultInfo(ResultDocument parentDocument, Identifier analysisResultID, IDriveTrain[] driveTrainInfos, string dfmPath)
```

#### Parameters

`parentDocument` [ResultDocument](VM.Models.Post.ResultDocument.md)

`analysisResultID` Identifier

`driveTrainInfos` [IDriveTrain](VM.Models.Post.IDriveTrain.md)\[\]

`dfmPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

