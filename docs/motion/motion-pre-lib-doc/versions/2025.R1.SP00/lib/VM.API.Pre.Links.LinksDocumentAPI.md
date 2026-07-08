#  Class LinksDocumentAPI

Namespace: [VM.API.Pre.Links](VM.API.Pre.Links.md)  
Assembly: VM.API.Pre.Links.dll  

This class implements APIs for document.

```csharp
public static class LinksDocumentAPI
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[LinksDocumentAPI](VM.API.Pre.Links.LinksDocumentAPI.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_API_Pre_Links_LinksDocumentAPI_CreateNewPathMeshDocument_System_String_System_String_VM_Unit_VM_Plane_VM_API_Pre_LengthUnitType_"></a> CreateNewPathMeshDocument\(string, string, Unit, Plane, LengthUnitType\)

Create <xref href="VM.Managed.DAFUL.Chained.MeshDocumentChainedPath" data-throw-if-not-resolved="false"></xref>.

```csharp
public static MeshDocumentChainedPath CreateNewPathMeshDocument(string newLinkPathFilePath, string documentName = "MeshChainPath", Unit unit = null, Plane workingPlane = Plane.XZ, LengthUnitType kernelLengthUnit = LengthUnitType.MM)
```

#### Parameters

`newLinkPathFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path of new path mesh.

`documentName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of document. The default value is MeshChainPath.

`unit` Unit

The unit information.

`workingPlane` Plane

The working plane. The default value is XZ.

`kernelLengthUnit` LengthUnitType

The length unit of kernel. The default value is mm.

#### Returns

 MeshDocumentChainedPath

The new <xref href="VM.Managed.DAFUL.Chained.MeshDocumentChainedPath" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'newLinkPathFilePath' argument is null.

### <a id="VM_API_Pre_Links_LinksDocumentAPI_CreateNewPathPartDocument_System_String_System_String_VM_Unit_VM_Plane_VM_API_Pre_LengthUnitType_"></a> CreateNewPathPartDocument\(string, string, Unit, Plane, LengthUnitType\)

Create <xref href="VM.Managed.DAFUL.Chained.PartDocumentChainedPath" data-throw-if-not-resolved="false"></xref>.

```csharp
public static PartDocumentChainedPath CreateNewPathPartDocument(string newLinkPathFilePath, string documentName = "PartChainPath", Unit unit = null, Plane workingPlane = Plane.XZ, LengthUnitType kernelLengthUnit = LengthUnitType.MM)
```

#### Parameters

`newLinkPathFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path of new path part.

`documentName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of document. The default value is PartChainPath.

`unit` Unit

The unit information.

`workingPlane` Plane

The working plane. The default value is XZ.

`kernelLengthUnit` LengthUnitType

The length unit of kernel. The default value is mm.

#### Returns

 PartDocumentChainedPath

The new <xref href="VM.Managed.DAFUL.Chained.PartDocumentChainedPath" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'newLinkPathFilePath' argument is null.

### <a id="VM_API_Pre_Links_LinksDocumentAPI_CreateNewPathSubsystemDocument_System_String_System_String_VM_Unit_VM_Plane_VM_API_Pre_LengthUnitType_"></a> CreateNewPathSubsystemDocument\(string, string, Unit, Plane, LengthUnitType\)

Create <xref href="VM.Managed.DAFUL.Chained.DocumentChainedPath" data-throw-if-not-resolved="false"></xref>.

```csharp
public static DocumentChainedPath CreateNewPathSubsystemDocument(string newLinkPathFilePath, string documentName = "SubsystemChainPath", Unit unit = null, Plane workingPlane = Plane.XZ, LengthUnitType kernelLengthUnit = LengthUnitType.MM)
```

#### Parameters

`newLinkPathFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path of new path subsystem.

`documentName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of document. The default value is SubsystemChainPath.

`unit` Unit

The unit information.

`workingPlane` Plane

The working plane. The default value is XZ.

`kernelLengthUnit` LengthUnitType

The length unit of kernel. The default value is mm.

#### Returns

 DocumentChainedPath

The new <xref href="VM.Managed.DAFUL.Chained.DocumentChainedPath" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'newLinkPathFilePath' argument is null.

### <a id="VM_API_Pre_Links_LinksDocumentAPI_CreateNewSegmentMeshDocument_System_String_System_String_VM_Unit_VM_Plane_VM_API_Pre_LengthUnitType_"></a> CreateNewSegmentMeshDocument\(string, string, Unit, Plane, LengthUnitType\)

Create <xref href="VM.Managed.DAFUL.Chained.MeshDocumentChainedSegment" data-throw-if-not-resolved="false"></xref>.

```csharp
public static MeshDocumentChainedSegment CreateNewSegmentMeshDocument(string newLinkSegmentFilePath, string documentName = "MeshChainSegment", Unit unit = null, Plane workingPlane = Plane.XZ, LengthUnitType kernelLengthUnit = LengthUnitType.MM)
```

#### Parameters

`newLinkSegmentFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path of new segment mesh.

`documentName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of document. The default value is MeshChainSegment.

`unit` Unit

The unit information.

`workingPlane` Plane

The working plane. The default value is XZ.

`kernelLengthUnit` LengthUnitType

The length unit of kernel. The default value is mm.

#### Returns

 MeshDocumentChainedSegment

The new <xref href="VM.Managed.DAFUL.Chained.MeshDocumentChainedSegment" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'newLinkSegmentFilePath' argument is null.

### <a id="VM_API_Pre_Links_LinksDocumentAPI_CreateNewSegmentPartDocument_System_String_System_String_VM_Unit_VM_Plane_VM_API_Pre_LengthUnitType_"></a> CreateNewSegmentPartDocument\(string, string, Unit, Plane, LengthUnitType\)

Create <xref href="VM.Managed.DAFUL.Chained.PartDocumentChainedSegment" data-throw-if-not-resolved="false"></xref>.

```csharp
public static PartDocumentChainedSegment CreateNewSegmentPartDocument(string newLinkSegmentFilePath, string documentName = "PartChainSegment", Unit unit = null, Plane workingPlane = Plane.XZ, LengthUnitType kernelLengthUnit = LengthUnitType.MM)
```

#### Parameters

`newLinkSegmentFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path of new segment part.

`documentName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of document. The default value is PartChainSegment.

`unit` Unit

The unit information.

`workingPlane` Plane

The working plane. The default value is XZ.

`kernelLengthUnit` LengthUnitType

The length unit of kernel. The default value is mm.

#### Returns

 PartDocumentChainedSegment

The new <xref href="VM.Managed.DAFUL.Chained.PartDocumentChainedSegment" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'newLinkSegmentFilePath' argument is null.

### <a id="VM_API_Pre_Links_LinksDocumentAPI_CreateNewSegmentSubsystemDocument_System_String_System_String_VM_Unit_VM_Plane_VM_API_Pre_LengthUnitType_"></a> CreateNewSegmentSubsystemDocument\(string, string, Unit, Plane, LengthUnitType\)

Create <xref href="VM.Managed.DAFUL.Chained.DocumentChainedSegment" data-throw-if-not-resolved="false"></xref>.

```csharp
public static DocumentChainedSegment CreateNewSegmentSubsystemDocument(string newLinkSegmentFilePath, string documentName = "SubsystemChainSegment", Unit unit = null, Plane workingPlane = Plane.XZ, LengthUnitType kernelLengthUnit = LengthUnitType.MM)
```

#### Parameters

`newLinkSegmentFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path of new segment subsystem.

`documentName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of document. The default value is SubsystemChainSegment.

`unit` Unit

The unit information.

`workingPlane` Plane

The working plane. The default value is XZ.

`kernelLengthUnit` LengthUnitType

The length unit of kernel. The default value is mm.

#### Returns

 DocumentChainedSegment

The new <xref href="VM.Managed.DAFUL.Chained.DocumentChainedSegment" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'newLinkSegmentFilePath' argument is null.

