# SurfaceEllipseCalculation

## Description

Returns an array of 16 VARIANT of the values for the given ellipse area in the following order:

1. Minimum value

2. Minimum value X coordinate

3. Minimum value Y coordinate

4. Maximum value

5. Maximum value X coordinate

6. Maximum value Y coordinate

7. Flux \(in case of Irradiance or Intensity map\) or Integral \(in case of Radiance map\)

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

*object*.SurfaceEllipseCalculation\(double dXPos, double dYPos, double dWidth, double dHeight\) As Variant

- *object*: Virtual Photometric Lab object

- *dXPos*: horizontal coordinate of the center of the ellipse

- *dYPos*: vertical coordinate of the center of the ellipse

- *dWidth*: horizontal size of the ellipse

- *dHeight*: vertical size of the ellipse

## Remark

This function is not available for conoscopic map.
