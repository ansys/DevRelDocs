# SurfacePolygonColor

## Description

Returns an array of 3 VARIANT representing the three components of the average color for the given ellipse area and a given polygonal system.

## Syntax

*object*.SurfacePolygonColor\(VARIANT\* vPtX, VARIANT\* vPtY, short iColorSystem\) As Variant

- *object*: Virtual Photometric Lab object

- *vPtX*: array of VARIANT for the horizontal coordinate of each vertex of the polygon

- *vPtY*: array of VARIANT for the vertical coordinate of each vertex of the polygon

- *iColorSystem*: colorimetric system

    0: COLOR\_SYSTEM\_XYZ

    1: COLOR\_SYSTEM\_xyY

    2: COLOR\_SYSTEM\_uvY\_CIE1960

    3: COLOR\_SYSTEM\_uvY\_CIE1976

    4: COLOR\_SYSTEM\_Luv

    5: COLOR\_SYSTEM\_Lab

    6: COLOR\_SYSTEM\_LCh
