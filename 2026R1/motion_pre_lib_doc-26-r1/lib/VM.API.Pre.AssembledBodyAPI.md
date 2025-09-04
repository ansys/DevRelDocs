#  Class AssembledBodyAPI

Namespace: [VM.API.Pre](VM.API.Pre.md)  
Assembly: VM.API.Pre.dll  

This class implements APIs for <xref href="VM.Managed.DAFUL.AssembledBody" data-throw-if-not-resolved="false"></xref> class.

```csharp
public static class AssembledBodyAPI
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AssembledBodyAPI](VM.API.Pre.AssembledBodyAPI.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_API_Pre_AssembledBodyAPI_CreateAssembledBody_VM_Managed_DAFUL_SubSystemDocument_System_String_VM_TMatrix_System_String_"></a> CreateAssembledBody\(SubSystemDocument, string, TMatrix, string\)

Create <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document", "transform" })]
[ExistFile(new string[] { "partFilePath" })]
public static Obj CreateAssembledBody(this SubSystemDocument document, string partFilePath, TMatrix transform, string bodyName = "")
```

#### Parameters

`document` SubSystemDocument

The document to create the assembled body.

`partFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path of imported part document

`transform` TMatrix

The transformation matrix for a assembled body.

`bodyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the body. If empty, default name starts with 'ABD_' will be generated and used.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

The new <xref href="VM.Managed.DAFUL.AssembledBody" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' or 'transform' or 'partFilePath' arguments are empty.

 [FileNotFoundException](https://learn.microsoft.com/dotnet/api/system.io.filenotfoundexception)

Will be thrown if 'partFilePath' does not exist.

### <a id="VM_API_Pre_AssembledBodyAPI_CreateAssembledBody_VM_Managed_DAFUL_SubSystemDocument_System_String_"></a> CreateAssembledBody\(SubSystemDocument, string\)

Create <xref href="VM.Managed.DAFUL.AssembledBody" data-throw-if-not-resolved="false"></xref>.

```csharp
public static Obj CreateAssembledBody(this SubSystemDocument doc, string partFilePath)
```

#### Parameters

`doc` SubSystemDocument

The document to create the assembled body.

`partFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path of imported part document

#### Returns

 [Obj](VM.API.Pre.Obj.md)

The new <xref href="VM.Managed.DAFUL.AssembledBody" data-throw-if-not-resolved="false"></xref> object that is created by this API.

