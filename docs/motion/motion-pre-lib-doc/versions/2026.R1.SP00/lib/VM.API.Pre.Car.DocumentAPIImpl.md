# Class DocumentAPIImpl
<a id="VM_API_Pre_Car_DocumentAPIImpl"></a>

Namespace: [VM.API.Pre.Car](VM.API.Pre.Car.md)  
Assembly: VM.API.Pre.Car.dll  

This class implements APIs for document.

```csharp
public static class DocumentAPIImpl
```

#### Inheritance

object ← 
[DocumentAPIImpl](VM.API.Pre.Car.DocumentAPIImpl.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_API_Pre_Car_DocumentAPIImpl_CreateNewPropertyDocumentImpl__1_System_String_System_String_VM_Unit_VM_API_Pre_LengthUnitType_System_String_System_String_"></a> CreateNewPropertyDocumentImpl<T\>\(string, string, Unit, LengthUnitType, string, string\)

Create <xref href="VM.Managed.PropertyDocumentBase" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNullOrEmpty(new string[] { "newPropertyFilePath" })]
public static T CreateNewPropertyDocumentImpl<T>(string newPropertyFilePath, string documentName, Unit unit, LengthUnitType kernelLengthUnit, string extension, string documentType) where T : PropertyDocumentBase
```

#### Parameters

`newPropertyFilePath` string

The file path of new property document.

`documentName` string

The name of document.

`unit` Unit

The unit information.

`kernelLengthUnit` LengthUnitType

The length unit of kernel.

`extension` string

The extension.

`documentType` string

The document type.

#### Returns

 T

The new <xref href="VM.Managed.PropertyDocumentBase" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Type Parameters

`T` 

The document type

#### Exceptions

 ArgumentNullException

Will be thrown if 'newPropertyFilePath' argument is null.

### <a id="VM_API_Pre_Car_DocumentAPIImpl_CreateNewSubsystemFromTemplateDocumentImpl__1_System_String_System_String_VM_Managed_DAFUL_Car_MinorRole_System_String_System_String_"></a> CreateNewSubsystemFromTemplateDocumentImpl<T\>\(string, string, MinorRole, string, string\)

Create <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNullOrEmpty(new string[] { "newSubsystemFromTemplateFilePath" })]
[ExistFile(new string[] { "existedSubsystemTemplateFilePath" })]
public static T CreateNewSubsystemFromTemplateDocumentImpl<T>(string newSubsystemFromTemplateFilePath, string existedSubsystemTemplateFilePath, MinorRole minorRole, string extension, string documentType) where T : SubSystemDocument
```

#### Parameters

`newSubsystemFromTemplateFilePath` string

The file path of new subsystem from template file path.

`existedSubsystemTemplateFilePath` string

The file path of existed subsystem template file path.

`minorRole` MinorRole

The minor role type.

`extension` string

The extension.

`documentType` string

The document type.

#### Returns

 T

The new <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Type Parameters

`T` 

The document type

#### Exceptions

 ArgumentNullException

Will be thrown if 'newSubsystemFromTemplateFilePath' argument is null.

 FileNotFoundException

Will be thrown if 'existedSubsystemTemplateFilePath' does not exist.

