# SurfaceRectangleSigma

## Description

Return value: returns an array of 2 VARIANT representing of the sigma x and y values for the given rectangle area.

## Syntax

*object*.SurfaceRectangleBarycentre\(double dXPos, double dYPos, double dWidth, double dHeight\) As Variant

- *object*: Virtual Photometric Lab object

- *dXPos*: horizontal coordinate of the center of the rectangle

- *dYPos*: vertical coordinate of the center of the rectangle

- *dWidth*: horizontal size of the rectangle

- *dHeight*: vertical size of the rectangle

## Remark

For Conoscopic map, the given area is a corona defined by:

- *dXPos*: Minimum value of the theta angle

- *dYPos*: Maximum value of the theta angle

- *dWidth*: Minimum value of the phi angle

- *dHeight*: Maximum value of the phi angle

    **Warning:** All angle values are defined in radian.
