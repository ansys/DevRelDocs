# SurfaceLineCalculation2

## Description

Returns an array of 5 VARIANT of the values for the given line in the following order: minimum value, maximum value, average, Range X, Range Y.

## Syntax

*object*.SurfaceLineCalculation\(double dXPos1, double dYPos1, double dXPos2, double dYPos2, double dSampling, double dThresholdLevel\) As Variant

- *object*: Virtual Photometric Lab object

- *dXPos1*: horizontal coordinate of the first vertex of the line

- *dYPos1*: vertical coordinate of the first vertex of the line

- *dXPos2*: horizontal coordinate of the second vertex of the line

- *dYPos2*: vertical coordinate of the second vertex of the line

- *dSampling*: distance between two measurement points on the map \(for example the result returned by XSampleWidth or YSampleHeight\)

- *dThresholdLevel*: Iso level defined to measure the range X and Y

## Remark

For Conoscopic map, the given line is defined by:

- *dXPos1*: theta angle of the first vertex of the line

- *dYPos1*: phi angle of the first vertex of the line

- *dXPos2*: theta angle of the second vertex of the line

- *dYPos2*: phi angle of the second vertex of the line

    **Warning:** All angle values are defined in radian.
