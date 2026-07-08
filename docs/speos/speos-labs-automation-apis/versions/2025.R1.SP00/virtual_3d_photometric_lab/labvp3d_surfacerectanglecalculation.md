# SurfaceRectangleCalculation 

## Description 

Computes the measures for a rectangle area projected on the 3D surface.

Returns an array of 13 VARIANT in the following order:

- Minimum value

- Minimum x coordinate

- Minimum y coordinate

- Minimum z coordinate

- Maximum value

- Maximum x coordinate

- Maximum y coordinate

- Maximum z coordinate

- Flux

- Average

- Contrast

- Sigma

- RMS contrast.


## Syntax 

*object.SurfaceRectangleCalculation\(double dXPos, double dYPos, double dZPos, double dXDir, double dYDir, double dZDir, double dPhi, double dWidth, double dHeight, long lSampling\) As Variant*

- *object*: XM3Viewer object

- *dXPos*: X coordinate of the center of the measurement tool.

- *dYPos*: Y coordinate of the center of the measurement tool.

- *dZPos*: Z coordinate of the center of the measurement tool.

- *dXDir*: X coordinate of the projection vector.

- *dYDir*: Y coordinate of the projection vector.

- *dZDir*: Z coordinate of the projection vector.

- *dPhi*: rotation angle around the projection vector.

- *dWidth*: width of the rectangle.

- *dHeight*: height of the rectangle.

- *lSampling*: number of points for the measurement.


## VB script example

```VB
Sub TestLab()
  ' Starts the application
  Dim Viewer
  Set Viewer = CreateObject("Xm3Viewer.Application")
  ' Opens the file
  Dim MyVar
  MyVar = Viewer.OpenFile("C:\tmp\XM3Viewer\2cubes_005_4.xm3")
  Dim RetVal
  ' Computes the measures
  RetVal = Viewer.SurfaceRectangleCalculation(13,13,11,0,0,-1,0,1,1,10000)
End Sub

```

## IronPython example

```ironpython
from System import Type, Activator
type = Type.GetTypeFromProgID("Xm3Viewer.Application")
MyXm3Viewer = Activator.CreateInstance(type)
#Open the file
MyXm3Viewer.OpenFile("C:\\tmp\\XM3Viewer\\2cubes_005_4.xm3")
#Computes the measurements
rectangleCalculation = MyXm3Viewer.SurfaceRectangleCalculation(5, 0, 0, -1, 0, 0, 0, 5, 5, 1000)
result = ""
i = 0
print "Surface Rectangle Calculation"
for c in rectangleCalculation:
    if i == 0:
        print "Minimum value: " + str(c)
    elif i == 1:
        print "Minimum x coordinate: " + str(c)
    elif i == 2:
        print "Minimum y coordinate: " + str(c)
    elif i == 3:
        print "Minimum z coordinate: " + str(c)
    elif i == 4:
        print "Maximum value: " + str(c)
    elif i == 5:
        print "Maximum x coordinate: " + str(c)
    elif i == 6:
        print "Maximum y coordinate: " + str(c)
    elif i == 7:
        print "Maximum z coordinate: " + str(c)
    elif i == 8:
        print "Flux value: " + str(c)
    elif i == 9:
        print "Average value: " + str(c)
    elif i == 10:
        print "Contrast value: " + str(c)
    elif i == 11:
        print "Sigma value: " + str(c)
    elif i == 12:
        print "RMS contrast value: " + str(c)
    i += 1

```


