# SurfaceLineCalculation

## Description

Returns an array of 3 VARIANT of the values for the given line in the following order: minimum value, maximum value, average.

## Syntax

*object*.SurfaceLineCalculation\(double dXPos1, double dYPos1, double dXPos2, double dYPos2, double dSampling\) As Variant

- *object*: Virtual Photometric Lab object

- *dXPos1*: horizontal coordinate of the first vertex of the line

- *dYPos1*: vertical coordinate of the first vertex of the line

- *dXPos2*: horizontal coordinate of the second vertex of the line

- *dYPos2*: vertical coordinate of the second vertex of the line

- *dSampling*: number of measurements on the map

## Remark

For Conoscopic map, the given line is defined by:

- *dXPos1*: theta angle of the first vertex of the line

- *dYPos1*: phi angle of the first vertex of the line

- *dXPos2*: theta angle of the second vertex of the line

- *dYPos2*: phi angle of the second vertex of the line

    **Warning:** All angle values are defined in radian.
