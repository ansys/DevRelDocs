# SurfacePolygonGeneralCRI

## Description

Returns the general color rendering index for the given polygon area

## Syntax

*object*.SurfacePolygonGeneralCRI\(VARIANT\* vPtX, VARIANT\* vPtY, VARIANT\* vdCRI\) As Short

- *object*: Virtual Photometric Lab object

- *vPtX*: array of VARIANT for the horizontal coordinate of each vertex of the polygon

- *vPtY*: vertical coordinate of the center of the ellipse

- *vdCRI*: array of VARIANT for the vertical coordinate of each vertex of the polygon

***Example***

```Dim VirtualPhotometricLab As Object
Dim vPtx As Variant, vPty As Variant, vdCRI as Variant
Set VirtualPhotometricLab = CreateObject("XmpViewer.Application")
vPtx1 = Array(3.2, 29.8, 32.7, 3.6)
vPty1 = Array(3.7, -1.5, 19.7, 24.6)
retval = VirtualPhotometricLab.OpenFile(MyPath)
PolygonRetval = VirtualPhotometricLab.SurfacePolygonGeneralCRI(vPtx1, vPty1, vdCRI)
```
