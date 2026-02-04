# Class DocumentAPIImpl
<a id="VM_API_Pre_FE_DocumentAPIImpl"></a>

Namespace: [VM.API.Pre.FE](VM.API.Pre.FE.md)  
Assembly: VM.API.Pre.FE.dll  

This class implements APIs for document.

```csharp
public static class DocumentAPIImpl
```

#### Inheritance

object ← 
[DocumentAPIImpl](VM.API.Pre.FE.DocumentAPIImpl.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_API_Pre_FE_DocumentAPIImpl_CreateNewMeshDocumentImpl__1_System_String_System_String_VM_Unit_System_Double_System_String_System_String_"></a> CreateNewMeshDocumentImpl<T\>\(string, string, Unit, double, string, string\)

Create <xref href="VM.Managed.DAFUL.FE.MeshDocument" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNullOrEmpty(new string[] { "newMeshFilePath" })]
public static T CreateNewMeshDocumentImpl<T>(string newMeshFilePath, string documentName, Unit unit, double iconSize, string extension, string documentType) where T : MeshDocument
```

#### Parameters

`newMeshFilePath` string

The file path of new mesh.

`documentName` string

The name of document.

`unit` Unit

The unit information.

`iconSize` double

The size of icon.

`extension` string

The extension.

`documentType` string

The document type.

#### Returns

 T

The new SubSystemDocument object that is created by this API.

#### Type Parameters

`T` 

The document type

#### Exceptions

 ArgumentNullException

Will be thrown if 'newMeshFilePath' argument is empty.

