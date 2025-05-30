#  Class MeshDocumentAPI

Namespace: [VM.API.Pre.FE](VM.API.Pre.FE.md)  
Assembly: VM.API.Pre.FE.dll  

This class implements APIs for <xref href="VM.Managed.DAFUL.FE.MeshDocument" data-throw-if-not-resolved="false"></xref> class.

```csharp
public static class MeshDocumentAPI
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[MeshDocumentAPI](VM.API.Pre.FE.MeshDocumentAPI.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_API_Pre_FE_MeshDocumentAPI_CreateNewMeshDocument_System_String_System_String_VM_Unit_System_Double_"></a> CreateNewMeshDocument\(string, string, Unit, double\)

Create <xref href="VM.Managed.DAFUL.FE.MeshDocument" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNullOrEmpty(new string[] { "newMeshFilePath" })]
public static MeshDocument CreateNewMeshDocument(string newMeshFilePath, string documentName = "Mesh", Unit unit = null, double iconSize = 1)
```

#### Parameters

`newMeshFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path of new mesh.

`documentName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of document.

`unit` Unit

The unit information.

`iconSize` [double](https://learn.microsoft.com/dotnet/api/system.double)

The size of icon.

#### Returns

 MeshDocument

The new SubSystemDocument object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'newMeshFilePath' argument is empty.

### <a id="VM_API_Pre_FE_MeshDocumentAPI_ImportMesh_VM_Managed_DAFUL_FE_MeshDocument_System_String_System_String_System_Nullable_System_Drawing_Color__System_Boolean_System_Boolean_"></a> ImportMesh\(MeshDocument, string, string, Color?, bool, bool\)

Import external mesh file such as bdf/dat into the <xref href="VM.Managed.DAFUL.FE.MeshDocument" data-throw-if-not-resolved="false"></xref>

```csharp
[NotNull(new string[] { "doc" })]
[ExistFile(new string[] { "feDataFilePath" })]
public static Obj ImportMesh(this MeshDocument doc, string feDataFilePath, string modalDataFileName = "", Color? meshColor = null, bool degenerateElement = false, bool importOnlyRBEIncludingStaticCorrectionMode = false)
```

#### Parameters

`doc` MeshDocument

The <xref href="VM.Managed.DAFUL.FE.MeshDocument" data-throw-if-not-resolved="false"></xref> to import external mesh file.

`feDataFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The path to the external mesh file.

`modalDataFileName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The path to the modal data file.

`meshColor` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)?

The <xref href="System.Drawing.Color" data-throw-if-not-resolved="false"></xref> of the new mesh,

`degenerateElement` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The flag for degenerate element.

`importOnlyRBEIncludingStaticCorrectionMode` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The flag for import only rbe including static correction mode.

#### Returns

 Obj

The new <xref href="VM.Managed.DAFUL.FE.Mesh" data-throw-if-not-resolved="false"></xref> object.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown when doc or feDataFilePath is null,

 [FileNotFoundException](https://learn.microsoft.com/dotnet/api/system.io.filenotfoundexception)

Will be thrown if feDataFilePath file is not exist.

### <a id="VM_API_Pre_FE_MeshDocumentAPI_ModifyModal_VM_Managed_DAFUL_FE_MeshDocument_System_String_VM_Unit_System_Boolean_"></a> ModifyModal\(MeshDocument, string, Unit, bool\)

Create <xref href="VM.Managed.DAFUL.FE.MeshDocument" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "doc" })]
[ExistFile(new string[] { "strModalFile" })]
public static void ModifyModal(this MeshDocument doc, string strModalFile, Unit unit, bool bOnlyDelete)
```

#### Parameters

`doc` MeshDocument

The <xref href="VM.Managed.DAFUL.FE.MeshDocument" data-throw-if-not-resolved="false"></xref> to modify modal.

`strModalFile` [string](https://learn.microsoft.com/dotnet/api/system.string)

The path to the external modal file.

`unit` Unit

The unit information.

`bOnlyDelete` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The flag of deleting old modal data.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown when doc is null,

 [FileNotFoundException](https://learn.microsoft.com/dotnet/api/system.io.filenotfoundexception)

Will be thrown if strModalFile file is not exist.

