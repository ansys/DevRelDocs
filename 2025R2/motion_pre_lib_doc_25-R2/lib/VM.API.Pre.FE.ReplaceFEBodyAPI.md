#  Class ReplaceFEBodyAPI

Namespace: [VM.API.Pre.FE](VM.API.Pre.FE.md)  
Assembly: VM.API.Pre.FE.dll  

This class implements APIs to replace FE body.

```csharp
public static class ReplaceFEBodyAPI
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ReplaceFEBodyAPI](VM.API.Pre.FE.ReplaceFEBodyAPI.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_API_Pre_FE_ReplaceFEBodyAPI_ReplaceFEBody_VM_Managed_DAFUL_SubSystemDocument_VM_API_Pre_Obj_System_String_System_Boolean_System_Boolean_"></a> ReplaceFEBody\(SubSystemDocument, Obj, string, bool, bool\)

Replace FE body.

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "nodalBody" })]
[MatchTypeObj(new object[] { "nodalBody", typeof(NodalBody) })]
[ExistFile(new string[] { "newFilePath" })]
public static void ReplaceFEBody(this SubSystemDocument document, Obj nodalBody, string newFilePath, bool allowMulti = false, bool hideRemoveMessage = true)
```

#### Parameters

`document` SubSystemDocument

The document to replace FE body.

`nodalBody` Obj

The nodal body.

`newFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The new mesh file path.

`allowMulti` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The multi allow flag. The default value is false.

`hideRemoveMessage` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The remove message show/hide flag. The default value is hide.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' or 'newFilePath' argument is empty.

 [ArgumentOutOfRangeException](https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception)

Will be thrown if 'thickness' value equal to or less than 0.

 [FileNotFoundException](https://learn.microsoft.com/dotnet/api/system.io.filenotfoundexception)

Will be thrown if newFilePath file is not exist.

