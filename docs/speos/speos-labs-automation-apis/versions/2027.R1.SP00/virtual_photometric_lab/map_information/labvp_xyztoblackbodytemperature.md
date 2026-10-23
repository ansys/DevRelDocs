# XYZToBlackbodyTemperature 

## Description 

Gets the blackbody temperature corresponding to the XYZ colorimetric coordinates.

Returns 1 if no error has occurred, -1 if the input data are not valid and 0 if it is impossible to calculate a temperature with the given input data.

## Syntax 

*object*.XYZToBlackbodyTemperature\(VARIANT\* vXYZ, VARIANT\* vTemperature\) As Short

*object*: Virtual Photometric Lab object

- vXYZ: an array of 3 VARIANT of the XYZ colorimetric values

- vTemparature: the output data, the blackbody temperature, as a double ; If vTemperature is -1.0 so the calculation failed


## Example 

Dim ColorXYZ, Temperature

ColorXYZ= XMPViewer.SurfaceRectangleColor\(0, 0, 200, 200, 0\)

MyVar= XMPViewer.XYZToBlackbodyTemperature\(ColorXYZ, Temperature\)

**Note:**

The last parameter of SurfaceRectangleColor\(\) must be 0 if you want to use ColorXYZ result to calculate a color temperature.


