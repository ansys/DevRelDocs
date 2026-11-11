# SurfacePolygonCalculation

## Description

Returns an array of 10 VARIANT of the values for the given polygonal area in the following order: minimum value, x then y coordinates of the minimum value, maximum value, x then y coordinates of the maximum value, flux, average, contrast, sigma.

## Syntax

*object*.SurfacePolygonCalculation\(VARIANT\* vPtX, VARIANT\* vPtY\) As Variant

- *object*: Virtual Photometric Lab object

- *vPtX*: array of VARIANT for the horizontal coordinate of each vertex of the polygon

- *vPtY*: array of VARIANT for the vertical coordinate of each vertex of the polygon

## Remark

This function is not available for conoscopic map.

***Example***

```Dim VirtualPhotometricLab As Object
Dim vPtx As Variant, vPty As Variant
Set VirtualPhotometricLab = CreateObject("XmpViewer.Application")
vPtx1 = Array(3.2, 29.8, 32.7, 3.6)
vPty1 = Array(3.7, -1.5, 19.7, 24.6)
retval = VirtualPhotometricLab.OpenFile(MyPath)
PolygonRetval = VirtualPhotometricLab.SurfacePolygonCalculation(vPtx1, vPty1)
```
