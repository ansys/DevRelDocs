# Class FaceDrawHelper

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

### DrawNurbs\(\_SURFACENURBS\_INFO\*, Canvas\)

```csharp
public static void DrawNurbs(_SURFACENURBS_INFO* info, Canvas canvas)
```

#### Parameters

`info` [\_SURFACENURBS\_INFO](VM.DSDL.API.GEOMETRY.\_SURFACENURBS\_INFO.md)\*

`canvas` Canvas

### DrawNurbsBoundaryUsingPointQueryFunction\(\_CURVENURBS\_INFO\*, Canvas, Face, uint\)

```csharp
public static void DrawNurbsBoundaryUsingPointQueryFunction(_CURVENURBS_INFO* info, Canvas canvas, Face face, uint nIndex)
```

#### Parameters

`info` [\_CURVENURBS\_INFO](VM.DSDL.API.GEOMETRY.\_CURVENURBS\_INFO.md)\*

`canvas` Canvas

`face` [Face](VM.Managed.CAD.Face.md)

`nIndex` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### DrawNurbsUsingPointQueryFunction\(\_SURFACENURBS\_INFO\*, Canvas, Face\)

```csharp
public static void DrawNurbsUsingPointQueryFunction(_SURFACENURBS_INFO* info, Canvas canvas, Face face)
```

#### Parameters

`info` [\_SURFACENURBS\_INFO](VM.DSDL.API.GEOMETRY.\_SURFACENURBS\_INFO.md)\*

`canvas` Canvas

`face` [Face](VM.Managed.CAD.Face.md)

### GetNurbsNormalDirection\(\_SURFACENURBS\_INFO\*, ref VectorBase, ref VectorBase\)

```csharp
public static void GetNurbsNormalDirection(_SURFACENURBS_INFO* info, ref VectorBase start, ref VectorBase normal)
```

#### Parameters

`info` [\_SURFACENURBS\_INFO](VM.DSDL.API.GEOMETRY.\_SURFACENURBS\_INFO.md)\*

`start` [VectorBase](VM.Managed.VectorBase.md)

`normal` [VectorBase](VM.Managed.VectorBase.md)

### SetNurbsDrawUtil\(INurbsDrawUtil\*\)

Set nurbs surface information.

```csharp
public static void SetNurbsDrawUtil(INurbsDrawUtil* pNurbsDrawUtil)
```

#### Parameters

`pNurbsDrawUtil` [INurbsDrawUtil](VM.INurbsDrawUtil.md)\*

The nurbs surface information.


