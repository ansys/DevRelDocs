# <a id="VM_Models_Post_ResultDocumentExtension"></a> Class ResultDocumentExtension

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public static class ResultDocumentExtension
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ResultDocumentExtension](VM.Models.Post.ResultDocumentExtension.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_Models_Post_ResultDocumentExtension_CreateCurve_VM_Models_Post_ResultDocument_System_String_System_Collections_Generic_IEnumerable_System_String__"></a> CreateCurve\(ResultDocument, string, IEnumerable<string\>\)

```csharp
public static IDictionary<string, Point2D[]> CreateCurve(this ResultDocument document, string entity, IEnumerable<string> path)
```

#### Parameters

`document` [ResultDocument](VM.Models.Post.ResultDocument.md)

`entity` [string](https://learn.microsoft.com/dotnet/api/system.string)

`path` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

#### Returns

 [IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), Point2D\[\]\>

### <a id="VM_Models_Post_ResultDocumentExtension_CreateCurve_VM_Models_Post_ResultDocument_VM_Models_PlotDataType_System_Collections_Generic_IEnumerable_System_String__System_Object_System_Object_System_String_"></a> CreateCurve\(ResultDocument, PlotDataType, IEnumerable<string\>, object, object, string\)

```csharp
public static IDictionary<string, Point2D[]> CreateCurve(this ResultDocument document, PlotDataType resultFileType, IEnumerable<string> path, object target, object csys, string entityName)
```

#### Parameters

`document` [ResultDocument](VM.Models.Post.ResultDocument.md)

`resultFileType` PlotDataType

`path` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

`target` [object](https://learn.microsoft.com/dotnet/api/system.object)

`csys` [object](https://learn.microsoft.com/dotnet/api/system.object)

`entityName` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), Point2D\[\]\>

### <a id="VM_Models_Post_ResultDocumentExtension_CreateCurve_VM_Models_Post_ResultDocument_VM_Models_PlotDataType_System_String_System_Collections_Generic_IEnumerable_System_String__System_Object_"></a> CreateCurve\(ResultDocument, PlotDataType, string, IEnumerable<string\>, object\)

```csharp
public static IDictionary<string, Point2D[]> CreateCurve(this ResultDocument document, PlotDataType resultFileType, string fullName, IEnumerable<string> path, object csys)
```

#### Parameters

`document` [ResultDocument](VM.Models.Post.ResultDocument.md)

`resultFileType` PlotDataType

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`path` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

`csys` [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

 [IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), Point2D\[\]\>

### <a id="VM_Models_Post_ResultDocumentExtension_CreateCurve_VM_Models_Post_ResultDocument_VM_Models_PlotDataType_System_Collections_Generic_IEnumerable_System_String__VM_Models_Post_HitItemInfo_System_Object_"></a> CreateCurve\(ResultDocument, PlotDataType, IEnumerable<string\>, HitItemInfo, object\)

```csharp
public static IDictionary<string, Point2D[]> CreateCurve(this ResultDocument document, PlotDataType resultFileType, IEnumerable<string> path, HitItemInfo hitItemInfo, object csys)
```

#### Parameters

`document` [ResultDocument](VM.Models.Post.ResultDocument.md)

`resultFileType` PlotDataType

`path` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

`hitItemInfo` [HitItemInfo](VM.Models.Post.HitItemInfo.md)

`csys` [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

 [IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), Point2D\[\]\>

### <a id="VM_Models_Post_ResultDocumentExtension_GetCurves_VM_Models_Post_ResultDocument_VM_Models_OutputReader_PlotParameters_"></a> GetCurves\(ResultDocument, PlotParameters\)

```csharp
public static IDictionary<string, Point2D[]> GetCurves(this ResultDocument document, PlotParameters parameters)
```

#### Parameters

`document` [ResultDocument](VM.Models.Post.ResultDocument.md)

`parameters` PlotParameters

#### Returns

 [IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), Point2D\[\]\>

