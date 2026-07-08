# Class FaceDrawHelper
<a id="VM_Managed_CAD_FaceDrawHelper"></a>

Namespace: [VM.Managed.CAD](VM.Managed.CAD.md)  
Assembly: VMAppCore.dll  

This class is to represent the draw face.

```csharp
public class FaceDrawHelper
```

#### Inheritance

object ← 
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

`info` \_SURFACENURBS\_INFO\*

`canvas` [Canvas](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VM.CAD.Kernel/Render/Canvas.cs)

### <a id="VM_Managed_CAD_FaceDrawHelper_DrawNurbsBoundaryUsingPointQueryFunction_VM_DSDL_API_GEOMETRY__CURVENURBS_INFO__VM_CAD_Kernel_Render_Canvas_VM_Managed_CAD_Face_System_UInt32_"></a> DrawNurbsBoundaryUsingPointQueryFunction\(\_CURVENURBS\_INFO\*, Canvas, Face, uint\)

```csharp
public static void DrawNurbsBoundaryUsingPointQueryFunction(_CURVENURBS_INFO* info, Canvas canvas, Face face, uint nIndex)
```

#### Parameters

`info` \_CURVENURBS\_INFO\*

`canvas` [Canvas](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VM.CAD.Kernel/Render/Canvas.cs)

`face` [Face](VM.Managed.CAD.Face.md)

`nIndex` uint

### <a id="VM_Managed_CAD_FaceDrawHelper_DrawNurbsUsingPointQueryFunction_VM_DSDL_API_GEOMETRY__SURFACENURBS_INFO__VM_CAD_Kernel_Render_Canvas_VM_Managed_CAD_Face_"></a> DrawNurbsUsingPointQueryFunction\(\_SURFACENURBS\_INFO\*, Canvas, Face\)

```csharp
public static void DrawNurbsUsingPointQueryFunction(_SURFACENURBS_INFO* info, Canvas canvas, Face face)
```

#### Parameters

`info` \_SURFACENURBS\_INFO\*

`canvas` [Canvas](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VM.CAD.Kernel/Render/Canvas.cs)

`face` [Face](VM.Managed.CAD.Face.md)

### <a id="VM_Managed_CAD_FaceDrawHelper_GetNurbsNormalDirection_VM_DSDL_API_GEOMETRY__SURFACENURBS_INFO__VM_Managed_VectorBase__VM_Managed_VectorBase__"></a> GetNurbsNormalDirection\(\_SURFACENURBS\_INFO\*, ref VectorBase, ref VectorBase\)

```csharp
public static void GetNurbsNormalDirection(_SURFACENURBS_INFO* info, ref VectorBase start, ref VectorBase normal)
```

#### Parameters

`info` \_SURFACENURBS\_INFO\*

`start` [VectorBase](VM.Managed.VectorBase.md)

`normal` [VectorBase](VM.Managed.VectorBase.md)

### <a id="VM_Managed_CAD_FaceDrawHelper_SetNurbsDrawUtil_VM_INurbsDrawUtil__"></a> SetNurbsDrawUtil\(INurbsDrawUtil\*\)

Set nurbs surface information.

```csharp
public static void SetNurbsDrawUtil(INurbsDrawUtil* pNurbsDrawUtil)
```

#### Parameters

`pNurbsDrawUtil` INurbsDrawUtil\*

The nurbs surface information.

