#  Class GeometryAPI

Namespace: [VM.API.Pre](VM.API.Pre.md)  
Assembly: VM.API.Pre.dll  

This class implements APIs for Geometry.

```csharp
public static class GeometryAPI
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[GeometryAPI](VM.API.Pre.GeometryAPI.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_API_Pre_GeometryAPI_ExportCAD_VM_Models_Pre_IDocument_System_String_System_Collections_Generic_IEnumerable_VM_API_Pre_Obj__System_String_"></a> ExportCAD\(IDocument, string, IEnumerable<Obj\>, string\)

Export the geometry.

```csharp
[NotNull(new string[] { "document", "objectList" })]
[NotNullOrEmpty(new string[] { "filePath" })]
public static void ExportCAD(this IDocument document, string filePath, IEnumerable<Obj> objectList, string value)
```

#### Parameters

`document` IDocument

The document to export the geometry.

`filePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path of the geometry.

`objectList` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Obj](VM.API.Pre.Obj.md)\>

The result type of the geometry.

`value` [string](https://learn.microsoft.com/dotnet/api/system.string)

The unit type of the geometry.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document', 'filePath' argument is null.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the type of 'document' is not <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref> and <xref href="VM.Managed.DAFUL.PartDocument" data-throw-if-not-resolved="false"></xref>.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the exetension of 'filePath' is not 'sab', '.sat', 'CATPart', 'CATProduct', 'x_t', 'x_b', 'stp', 'step'.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the type of 'objectList' is not <xref href="VM.Managed.DAFUL.SolidBody" data-throw-if-not-resolved="false"></xref> and <xref href="VM.Managed.CAD.Body" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_GeometryAPI_ImportCAD_VM_Models_Pre_IDocument_System_String_VM_API_Pre_ResultType_VM_Managed_Document3D_CadImportUnitType_System_Boolean_VM_Managed_Document3D_CadImportColorType_System_Nullable_System_Drawing_Color__"></a> ImportCAD\(IDocument, string, ResultType, CadImportUnitType, bool, CadImportColorType, Color?\)

Import the geometry.

```csharp
[NotNull(new string[] { "document" })]
[ExistFile(new string[] { "filePath" })]
public static void ImportCAD(this IDocument document, string filePath, ResultType resultType = ResultType.Default, Document3D.CadImportUnitType unitType = CadImportUnitType.Auto, bool useHealing = true, Document3D.CadImportColorType colorType = CadImportColorType.Default, Color? color = null)
```

#### Parameters

`document` IDocument

The document to import the geometry.

`filePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path of the geometry.

`resultType` [ResultType](VM.API.Pre.ResultType.md)

The result type of the geometry.

`unitType` Document3D.CadImportUnitType

The unit type of the geometry.

`useHealing` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The flag of use healing of geometry.

`colorType` Document3D.CadImportColorType

The color type of the geometry.

`color` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)?

The color of the geometry.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' is null.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the type of 'document' is not <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref> and <xref href="VM.Managed.DAFUL.PartDocument" data-throw-if-not-resolved="false"></xref>.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the exetension of 'filePath' is not 'sab', '.sat', 'CATPart', 'CATProduct', 'x_t', 'x_b', 'stp', 'step'.

### <a id="VM_API_Pre_GeometryAPI_ReplaceCAD_VM_Models_Pre_IDocument_System_String_VM_API_Pre_ResultType_VM_Managed_Document3D_CadImportUnitType_System_Boolean_VM_Managed_Document3D_CadImportColorType_System_Nullable_System_Drawing_Color__System_Boolean_System_String___"></a> ReplaceCAD\(IDocument, string, ResultType, CadImportUnitType, bool, CadImportColorType, Color?, bool, string\[\]\)

Replace the geometry.

```csharp
[NotNull(new string[] { "document" })]
[ExistFile(new string[] { "filePath" })]
public static void ReplaceCAD(this IDocument document, string filePath, ResultType resultType = ResultType.Default, Document3D.CadImportUnitType unitType = CadImportUnitType.Auto, bool useHealing = true, Document3D.CadImportColorType colorType = CadImportColorType.Default, Color? color = null, bool replaceAllGeometries = true, string[] attributes = null)
```

#### Parameters

`document` IDocument

The document to replace the geometry.

`filePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path of the geometry.

`resultType` [ResultType](VM.API.Pre.ResultType.md)

The result type of the geometry.

`unitType` Document3D.CadImportUnitType

The unit type of the geometry.

`useHealing` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The flag of use healing of geometry.

`colorType` Document3D.CadImportColorType

The color type of the geometry.

`color` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)?

The color of the geometry.

`replaceAllGeometries` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The flag of replace all geometries of geometry.

`attributes` [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

The attributes of geometry.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' is null.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the type of 'document' is not <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref> and <xref href="VM.Managed.DAFUL.PartDocument" data-throw-if-not-resolved="false"></xref>.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the exetension of 'filePath' is not 'sab', '.sat', 'CATPart', 'CATProduct', 'x_t', 'x_b', 'stp', 'step'.

