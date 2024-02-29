# <a id="VM_Models_Post_IDFMReader"></a> Interface IDFMReader

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public interface IDFMReader
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_Models_Post_IDFMReader_BuildModels_VM_Models_Post_ResultDocument_System_String_VM_Models_Post_IDFRReader_VM_Identifier_"></a> BuildModels\(ResultDocument, string, IDFRReader, Identifier\)

```csharp
MetaInfo BuildModels(ResultDocument parentDocument, string filepath, IDFRReader dFRInfo, Identifier analysisResultID)
```

#### Parameters

`parentDocument` [ResultDocument](VM.Models.Post.ResultDocument.md)

`filepath` [string](https://learn.microsoft.com/dotnet/api/system.string)

`dFRInfo` [IDFRReader](VM.Models.Post.IDFRReader.md)

`analysisResultID` Identifier

#### Returns

 [MetaInfo](VM.Models.Post.MetaInfo.md)

