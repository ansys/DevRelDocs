# SurfaceRectangleCalculation

## Description

Returns an array of 16 VARIANT of the values for the given rectangle area in the following order:

1. Minimum value

2. Minimum value X coordinate

3. Minimum value Y coordinate

4. Maximum value

5. Maximum value X coordinate

6. Maximum value Y coordinate

7. Flux

8. Average

9. Contrast

10. Sigma

11. Barycenter X coordinate

12. Barycenter Y coordinate

13. Sigma X coordinate

14. Sigma Y coordinate

15. RMS Contrast

16. Eye Irradiance

## Syntax

*object*.SurfaceRectangleCalculation\(double dXPos, double dYPos, double dWidth, double dHeight\) As Variant

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
