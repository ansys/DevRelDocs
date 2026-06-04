# SurfaceRectangleColor

## Description

Returns an array of 3 VARIANT representing the three components of the average color for the given ellipse area and a given rectangle system.

## Syntax

*object*.SurfaceRectangleColor\(double dXPos, double dYPos, double dWidth, double dHeight, short iColorSystem\) As Variant

- *object*: Virtual Photometric Lab object

- *dXPos*: horizontal coordinate of the center of the rectangle

- *dYPos*: vertical coordinate of the center of the rectangle

- *dWidth*: horizontal size of the rectangle

- *dHeight*: vertical size of the rectangle

- *iColorSystem*: colorimetric system

    0: COLOR\_SYSTEM\_XYZ

    1: COLOR\_SYSTEM\_xyY

    2: COLOR\_SYSTEM\_uvY\_CIE1960

    3: COLOR\_SYSTEM\_uvY\_CIE1976

    4: COLOR\_SYSTEM\_Luv

    5: COLOR\_SYSTEM\_Lab

    6: COLOR\_SYSTEM\_LCh

## Remark

For Conoscopic map, the given area is a corona defined by:

- *dXPos*: Minimum value of the theta angle

- *dYPos*: Maximum value of the theta angle

- *dWidth*: Minimum value of the phi angle

- *dHeight*: Maximum value of the phi angle

    **Warning:** All angle values are defined in radian.
