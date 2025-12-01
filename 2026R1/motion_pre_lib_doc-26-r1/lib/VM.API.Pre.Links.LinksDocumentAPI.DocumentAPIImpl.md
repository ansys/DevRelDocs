# Class LinksDocumentAPI.DocumentAPIImpl
<a id="VM_API_Pre_Links_LinksDocumentAPI_DocumentAPIImpl"></a>

Namespace: [VM.API.Pre.Links](VM.API.Pre.Links.md)  
Assembly: VM.API.Pre.Links.dll  

This class implements APIs for document.

```csharp
public static class LinksDocumentAPI.DocumentAPIImpl
```

#### Inheritance

object ← 
[LinksDocumentAPI.DocumentAPIImpl](VM.API.Pre.Links.LinksDocumentAPI.DocumentAPIImpl.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_API_Pre_Links_LinksDocumentAPI_DocumentAPIImpl_CreateNewLinksDocumentImpl__1_System_String_System_String_VM_Unit_VM_Plane_VM_API_Pre_LengthUnitType_System_String_System_String_"></a> CreateNewLinksDocumentImpl<T\>\(string, string, Unit, Plane, LengthUnitType, string, string\)

Create <xref href="VM.Managed.DAFUL.DocumentAnalysis" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNullOrEmpty(new string[] { "newLinksSubsystemFilePath" })]
public static T CreateNewLinksDocumentImpl<T>(string newLinksSubsystemFilePath, string documentName, Unit unit, Plane workingPlane, LengthUnitType kernelLengthUnit, string extension, string documentType) where T : DocumentAnalysis
```

#### Parameters

`newLinksSubsystemFilePath` string

The file path of new subsystem file path.

`documentName` string

The name of document. The default value is Subsystem_LinksPath.

`unit` Unit

The unit information.

`workingPlane` Plane

The working plane. The default value is XZ.

`kernelLengthUnit` LengthUnitType

The length unit of kernel. The default value is mm.

`extension` string

The extension.

`documentType` string

The document type.

#### Returns

 T

The new <xref href="VM.Managed.DAFUL.DocumentAnalysis" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Type Parameters

`T` 

The document type

#### Exceptions

 ArgumentNullException

Will be thrown if 'newLinksSubsystemFilePath' argument is null.

