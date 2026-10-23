# SurfaceEllipseColor

## Description

Returns an array of 3 VARIANT representing the three components of the average color for the given ellipse area and a given color system.

## Syntax

*object*.SurfaceEllipseColor\(double dXPos, double dYPos, double dWidth, double dHeight, short iColorSystem\) As Variant

- *object*: Virtual Photometric Lab object

- *dXPos*: horizontal coordinate of the center of the ellipse

- *dYPos*: vertical coordinate of the center of the ellipse

- *dWidth*: horizontal size of the ellipse

- *dHeight*: vertical size of the ellipse

- *iColorSystem*: colorimetric system

    0: COLOR\_SYSTEM\_XYZ

    1: COLOR\_SYSTEM\_xyY

    2: COLOR\_SYSTEM\_uvY\_CIE1960

    3: COLOR\_SYSTEM\_uvY\_CIE1976

    4: COLOR\_SYSTEM\_Luv

    5: COLOR\_SYSTEM\_Lab

    6: COLOR\_SYSTEM\_LCh
