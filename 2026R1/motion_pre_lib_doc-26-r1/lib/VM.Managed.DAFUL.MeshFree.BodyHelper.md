# Class BodyHelper
<a id="VM_Managed_DAFUL_MeshFree_BodyHelper"></a>

Namespace: [VM.Managed.DAFUL.MeshFree](VM.Managed.DAFUL.MeshFree.md)  
Assembly: VMDMeshFree.dll  

This class is to represent the meshfree body helper.

```csharp
public static class BodyHelper
```

#### Inheritance

object ← 
[BodyHelper](VM.Managed.DAFUL.MeshFree.BodyHelper.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_Managed_DAFUL_MeshFree_BodyHelper_CreateGINFFileV3_2_VM_Managed_CAD_Body_System_String_System_String_VM_Managed_AttributeFacetRefinementBase_VM_Unit_ConvertFactor_System_UInt32_System_String_VM_Managed_DAFUL_MeshFree_GeometryType_VM_Managed_DAFUL_MeshFree_OutputType_VM_Managed_MeshFreeMeshType__"></a> CreateGINFFileV3\_2\(Body, string, string, AttributeFacetRefinementBase, ConvertFactor, uint, string, GeometryType, OutputType, ref MeshFreeMeshType\)

Creates the GINF file V3_2.

```csharp
public static bool CreateGINFFileV3_2(this Body body, string strMesherPath, string strMeshFreePrePath, AttributeFacetRefinementBase attrGeomOutputProp, Unit.ConvertFactor factor, uint nLevel, string strGINFPath, GeometryType geomType, OutputType outputType, ref MeshFreeMeshType resMeshType)
```

#### Parameters

`body` Body

The body.

`strMesherPath` string

The STR mesher path.

`strMeshFreePrePath` string

The STR mesh free pre path.

`attrGeomOutputProp` AttributeFacetRefinementBase

The attr geom output prop.

`factor` Unit.ConvertFactor

The factor.

`nLevel` uint

The n level.

`strGINFPath` string

The STR GINF path.

`geomType` [GeometryType](VM.Managed.DAFUL.MeshFree.GeometryType.md)

Type of the geom.

`outputType` [OutputType](VM.Managed.DAFUL.MeshFree.OutputType.md)

Type of the output.

`resMeshType` MeshFreeMeshType

Type of the res mesh.

#### Returns

 bool

### <a id="VM_Managed_DAFUL_MeshFree_BodyHelper_CreateGINFFileV3_2_VM_Managed_CAD_Body_System_String_System_String_VM_Managed_AttributeFacetRefinementBase_VM_Unit_ConvertFactor_System_UInt32_System_Boolean_VM_Managed_VectorBase_System_String_VM_Managed_DAFUL_MeshFree_GeometryType_VM_Managed_DAFUL_MeshFree_OutputType_VM_Managed_MeshFreeMeshType__VM_Managed_VectorBase____System_UInt32____VM_Managed_VectorBase____System_UInt32____"></a> CreateGINFFileV3\_2\(Body, string, string, AttributeFacetRefinementBase, ConvertFactor, uint, bool, VectorBase, string, GeometryType, OutputType, ref MeshFreeMeshType, ref VectorBase\[\], ref uint\[\], ref VectorBase\[\], ref uint\[\]\)

Creates the GINF file V3_2.

```csharp
public static bool CreateGINFFileV3_2(this Body body, string strMesherPath, string strMeshFreePrePath, AttributeFacetRefinementBase attrGeomOutputProp, Unit.ConvertFactor factor, uint nLevel, bool bUserDefinedDistanceFlag, VectorBase vecUserDefinedDistance, string strGINFPath, GeometryType geomType, OutputType outputType, ref MeshFreeMeshType resMeshType, ref VectorBase[] aryPosTria, ref uint[] aryConTria, ref VectorBase[] aryPosTetra, ref uint[] aryConTetra)
```

#### Parameters

`body` Body

The body.

`strMesherPath` string

The STR mesher path.

`strMeshFreePrePath` string

The STR mesh free pre path.

`attrGeomOutputProp` AttributeFacetRefinementBase

The attr geom output prop.

`factor` Unit.ConvertFactor

The factor.

`nLevel` uint

The n level.

`bUserDefinedDistanceFlag` bool

The user defined distance flag.

`vecUserDefinedDistance` VectorBase

The user defined distance value.

`strGINFPath` string

The STR GINF path.

`geomType` [GeometryType](VM.Managed.DAFUL.MeshFree.GeometryType.md)

Type of the geom.

`outputType` [OutputType](VM.Managed.DAFUL.MeshFree.OutputType.md)

Type of the output.

`resMeshType` MeshFreeMeshType

Type of the res mesh.

`aryPosTria` VectorBase\[\]

The ary pos tria.

`aryConTria` uint\[\]

The ary con tria.

`aryPosTetra` VectorBase\[\]

The ary pos tetra.

`aryConTetra` uint\[\]

The ary con tetra.

#### Returns

 bool

### <a id="VM_Managed_DAFUL_MeshFree_BodyHelper_CreateGINFFileV3_2_VM_Managed_IAttributeContainer_"></a> CreateGINFFileV3\_2\(IAttributeContainer\)

Generate GINF File for Solid Body

```csharp
public static bool CreateGINFFileV3_2(this IAttributeContainer container)
```

#### Parameters

`container` IAttributeContainer

#### Returns

 bool

Whether it's successful.

### <a id="VM_Managed_DAFUL_MeshFree_BodyHelper_CreateGINFFileV3_2_VM_Managed_IAttributeContainer_System_String_"></a> CreateGINFFileV3\_2\(IAttributeContainer, string\)

Creates the GINF file V3_2.

```csharp
public static bool CreateGINFFileV3_2(this IAttributeContainer container, string strGINFPath)
```

#### Parameters

`container` IAttributeContainer

The container.

`strGINFPath` string

The STR GINF path.

#### Returns

 bool

### <a id="VM_Managed_DAFUL_MeshFree_BodyHelper_CreateGINFFileV3_2_VM_Managed_IAttributeContainer_System_String_VM_Managed_VectorBase___System_UInt32___VM_Managed_VectorBase___System_UInt32___"></a> CreateGINFFileV3\_2\(IAttributeContainer, string, VectorBase\[\], uint\[\], VectorBase\[\], uint\[\]\)

Creates the GINF file V3_2.

```csharp
public static bool CreateGINFFileV3_2(this IAttributeContainer container, string strGINFPath, VectorBase[] aryPosTria, uint[] aryConTria, VectorBase[] aryPosTetra, uint[] aryConTetra)
```

#### Parameters

`container` IAttributeContainer

The container.

`strGINFPath` string

The STR GINF path.

`aryPosTria` VectorBase\[\]

The predefined tria postion.

`aryConTria` uint\[\]

The predefined tria connection.

`aryPosTetra` VectorBase\[\]

The predefined tetra postion.

`aryConTetra` uint\[\]

The predefined tetra connection.

#### Returns

 bool

### <a id="VM_Managed_DAFUL_MeshFree_BodyHelper_GenerateMeshInfo_VM_Managed_IAttributeContainer_VM_Managed_MeshFreeMeshType__VM_Managed_VectorBase____System_UInt32____VM_Managed_VectorBase____System_UInt32____System_Boolean_"></a> GenerateMeshInfo\(IAttributeContainer, ref MeshFreeMeshType, ref VectorBase\[\], ref uint\[\], ref VectorBase\[\], ref uint\[\], bool\)

Generates the mesh info.

```csharp
public static void GenerateMeshInfo(this IAttributeContainer container, ref MeshFreeMeshType resMeshType, ref VectorBase[] aryPosTria, ref uint[] aryConTria, ref VectorBase[] aryPosTetra, ref uint[] aryConTetra, bool bUseDSDL)
```

#### Parameters

`container` IAttributeContainer

The container.

`resMeshType` MeshFreeMeshType

Type of the res mesh.

`aryPosTria` VectorBase\[\]

The ary pos tria.

`aryConTria` uint\[\]

The ary con tria.

`aryPosTetra` VectorBase\[\]

The ary pos tetra.

`aryConTetra` uint\[\]

The ary con tetra.

`bUseDSDL` bool

if set to <code>true</code> [b use DSDL].

### <a id="VM_Managed_DAFUL_MeshFree_BodyHelper_GetDefaultGINFPath_System_String_VM_Managed_ObjectBase_"></a> GetDefaultGINFPath\(string, ObjectBase\)

Get default GINF name.

```csharp
public static string GetDefaultGINFPath(string strBaseDir, ObjectBase objBody)
```

#### Parameters

`strBaseDir` string

The base directory.

`objBody` ObjectBase

The body.

#### Returns

 string

Default GINF name.

### <a id="VM_Managed_DAFUL_MeshFree_BodyHelper_GetMeshFreeDefaultMaxFacetSize_VM_Managed_IAttributeContainer_"></a> GetMeshFreeDefaultMaxFacetSize\(IAttributeContainer\)

Get a default maximum facet size for MeshFree

```csharp
public static double GetMeshFreeDefaultMaxFacetSize(this IAttributeContainer container)
```

#### Parameters

`container` IAttributeContainer

#### Returns

 double

A default maximum facet size

### <a id="VM_Managed_DAFUL_MeshFree_BodyHelper_UpdateMeshFreeNodePropertyAndMaxFacetSize_VM_Managed_IAttributeContainer_"></a> UpdateMeshFreeNodePropertyAndMaxFacetSize\(IAttributeContainer\)

Updates the size of the mesh free node property and maximum facet.

```csharp
public static bool UpdateMeshFreeNodePropertyAndMaxFacetSize(this IAttributeContainer container)
```

#### Parameters

`container` IAttributeContainer

The container.

#### Returns

 bool

#### Exceptions

 Exception

The meshfree property is null.

