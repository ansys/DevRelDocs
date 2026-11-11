# Class DocumentAPIImpl
<a id="VM_API_Pre_DocumentAPIImpl"></a>

Namespace: [VM.API.Pre](VM.API.Pre.md)  
Assembly: VM.API.Pre.dll  

This class implements APIs for document.

```csharp
public static class DocumentAPIImpl
```

#### Inheritance

object ← 
[DocumentAPIImpl](VM.API.Pre.DocumentAPIImpl.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_API_Pre_DocumentAPIImpl_CreateNewPartDocumentImpl__1_System_String_System_String_VM_Unit_System_Double_VM_API_Pre_LengthUnitType_System_String_System_String_"></a> CreateNewPartDocumentImpl<T\>\(string, string, Unit, double, LengthUnitType, string, string\)

Create <xref href="VM.Managed.DAFUL.PartDocument" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNullOrEmpty(new string[] { "newPartFilePath" })]
public static T CreateNewPartDocumentImpl<T>(string newPartFilePath, string documentName, Unit unit, double iconSize, LengthUnitType unused, string extension, string documentType) where T : PartDocument
```

#### Parameters

`newPartFilePath` string

The file path of new part.

`documentName` string

The name of document.

`unit` Unit

The unit information.

`iconSize` double

The size of icon.

`unused` [LengthUnitType](VM.API.Pre.LengthUnitType.md)

The length unit of kernel.

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

Will be thrown if 'newPartFilePath' argument is null.

### <a id="VM_API_Pre_DocumentAPIImpl_CreateNewSubsystemDocumentCore__1_System_String_VM_Managed_DocCreateInfo_System_String_System_String_"></a> CreateNewSubsystemDocumentCore<T\>\(string, DocCreateInfo, string, string\)

Create <xref href="VM.Managed.Document" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNullOrEmpty(new string[] { "newSubsystemFilePath" })]
public static T CreateNewSubsystemDocumentCore<T>(string newSubsystemFilePath, DocCreateInfo info, string extension, string documentType) where T : DocumentAnalysis
```

#### Parameters

`newSubsystemFilePath` string

The file path of new subsystem.

`info` DocCreateInfo

The information of document.

`extension` string

The extension.

`documentType` string

The document type.

#### Returns

 T

The new <xref href="VM.Managed.Document" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Type Parameters

`T` 

The document type

#### Exceptions

 ArgumentNullException

Will be thrown if 'newSubsystemFilePath' argument is null.

### <a id="VM_API_Pre_DocumentAPIImpl_CreateNewSubsystemDocumentImpl__1_System_String_System_String_VM_Vector_VM_Unit_System_Double_System_Boolean_VM_Plane_System_Boolean_VM_API_Pre_LengthUnitType_System_String_System_String_"></a> CreateNewSubsystemDocumentImpl<T\>\(string, string, Vector, Unit, double, bool, Plane, bool, LengthUnitType, string, string\)

Create <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNullOrEmpty(new string[] { "newSubsystemFilePath" })]
public static T CreateNewSubsystemDocumentImpl<T>(string newSubsystemFilePath, string documentName, Vector gravity, Unit unit, double iconSize, bool advancedMode, Plane symmetricPlane, bool useSymmetric, LengthUnitType unused, string extension, string documentType) where T : SubSystemDocument
```

#### Parameters

`newSubsystemFilePath` string

The file path of new subsystem.

`documentName` string

The name of document.

`gravity` Vector

The gravity value.

`unit` Unit

The unit information.

`iconSize` double

The size of icon.

`advancedMode` bool

The flag whether using advanced mode.

`symmetricPlane` Plane

The symetric plane.

`useSymmetric` bool

The flag whether using symmetric.

`unused` [LengthUnitType](VM.API.Pre.LengthUnitType.md)

This parameter is unused.

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

Will be thrown if 'newSubsystemFilePath' argument is null.

### <a id="VM_API_Pre_DocumentAPIImpl_CreateNewSubsystemFromTemplateDocumentImpl__1_System_String_System_String_System_String_System_String_"></a> CreateNewSubsystemFromTemplateDocumentImpl<T\>\(string, string, string, string\)

Create <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNullOrEmpty(new string[] { "newSubsystemFromTemplateFilePath" })]
[ExistFile(new string[] { "existedSubsystemTemplateFilePath" })]
public static T CreateNewSubsystemFromTemplateDocumentImpl<T>(string newSubsystemFromTemplateFilePath, string existedSubsystemTemplateFilePath, string extension, string documentType) where T : SubSystemDocument
```

#### Parameters

`newSubsystemFromTemplateFilePath` string

The file path of new subsystem from template file path.

`existedSubsystemTemplateFilePath` string

The file path of existed subsystem template file path.

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

