#  Class FaceDrawHelper

Namespace: [VM.Managed.CAD](VM.Managed.CAD.md)  
Assembly: VMAppCore.dll  

This class is to represent the draw face.

```csharp
public class FaceDrawHelper
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[FaceDrawHelper](VM.Managed.CAD.FaceDrawHelper.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_Managed_CAD_FaceDrawHelper_DrawNurbs_VM_DSDL_API_GEOMETRY__SURFACENURBS_INFO__VM_CAD_Kernel_Render_Canvas_"></a> DrawNurbs\(\_SURFACENURBS\_INFO\*, Canvas\)

```csharp
public static void DrawNurbs(_SURFACENURBS_INFO* info, Canvas canvas)
```

#### Parameters

`info` [\_SURFACENURBS\_INFO](VM.DSDL.API.GEOMETRY.\_SURFACENURBS\_INFO.md)\*

`canvas` Canvas

### <a id="VM_Managed_CAD_FaceDrawHelper_DrawNurbsBoundaryUsingPointQueryFunction_VM_DSDL_API_GEOMETRY__CURVENURBS_INFO__VM_CAD_Kernel_Render_Canvas_VM_Managed_CAD_Face_System_UInt32_"></a> DrawNurbsBoundaryUsingPointQueryFunction\(\_CURVENURBS\_INFO\*, Canvas, Face, uint\)

```csharp
public static void DrawNurbsBoundaryUsingPointQueryFunction(_CURVENURBS_INFO* info, Canvas canvas, Face face, uint nIndex)
```

#### Parameters

`info` [\_CURVENURBS\_INFO](VM.DSDL.API.GEOMETRY.\_CURVENURBS\_INFO.md)\*

`canvas` Canvas

`face` [Face](VM.Managed.CAD.Face.md)

`nIndex` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Managed_CAD_FaceDrawHelper_DrawNurbsUsingPointQueryFunction_VM_DSDL_API_GEOMETRY__SURFACENURBS_INFO__VM_CAD_Kernel_Render_Canvas_VM_Managed_CAD_Face_"></a> DrawNurbsUsingPointQueryFunction\(\_SURFACENURBS\_INFO\*, Canvas, Face\)

```csharp
public static void DrawNurbsUsingPointQueryFunction(_SURFACENURBS_INFO* info, Canvas canvas, Face face)
```

#### Parameters

`info` [\_SURFACENURBS\_INFO](VM.DSDL.API.GEOMETRY.\_SURFACENURBS\_INFO.md)\*

`canvas` Canvas

`face` [Face](VM.Managed.CAD.Face.md)

### <a id="VM_Managed_CAD_FaceDrawHelper_GetNurbsNormalDirection_VM_DSDL_API_GEOMETRY__SURFACENURBS_INFO__VM_Managed_VectorBase__VM_Managed_VectorBase__"></a> GetNurbsNormalDirection\(\_SURFACENURBS\_INFO\*, ref VectorBase, ref VectorBase\)

```csharp
public static void GetNurbsNormalDirection(_SURFACENURBS_INFO* info, ref VectorBase start, ref VectorBase normal)
```

#### Parameters

`info` [\_SURFACENURBS\_INFO](VM.DSDL.API.GEOMETRY.\_SURFACENURBS\_INFO.md)\*

`start` [VectorBase](VM.Managed.VectorBase.md)

`normal` [VectorBase](VM.Managed.VectorBase.md)

### <a id="VM_Managed_CAD_FaceDrawHelper_SetNurbsDrawUtil_VM_INurbsDrawUtil__"></a> SetNurbsDrawUtil\(INurbsDrawUtil\*\)

Set nurbs surface information.

```csharp
public static void SetNurbsDrawUtil(INurbsDrawUtil* pNurbsDrawUtil)
```

#### Parameters

`pNurbsDrawUtil` [INurbsDrawUtil](VM.INurbsDrawUtil.md)\*

The nurbs surface information.

