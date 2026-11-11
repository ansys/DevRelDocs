# ValueType

## Description

Returns an array of 10 VARIANT of the values for the given volume in the following order:
1. Minimum value
2. Minimum value X coordinate
3. Minimum value Y coordinate
4. Minimum value Z coordinate
5. Maximum value
6. Maximum value X coordinate
7. Maximum value Y coordinate
8. Maximum value Z coordinate
9. Average value
10. Energy

## Syntax

*object*.VolumePaveCalculation(pMatrix, dWidth As Double, dHeight As Double, dDepth As Double) As Variant

- *object*: 3D energy density Lab object

- *pMatrix*: matrix that corresponds to the position (X, Y, Z) and the orthonormal coordinate système defined by 3 vectors v1(X1, Y1, Z1), v2(X2, Y2, Z2) and v3(X3, Y3, Z3).

  Matrix needs to be formatted as: (X1, Y1, Z1, 0, X2, Y2, Z2, 0, X3, Y3, Z3, 0, X, Y, Z, 1)

- *dWidth*: width of the measurement volume along v1

- *dHeight*: height of the measurement volume along v2

- *dDepth*: depth of the measurement volume along v3

## VB Script Example

```
Sub main()
    ' Starts the application
    Dim Viewer
    Set Viewer = CreateObject("VMPViewer.Application")

    ' Opens a file
    Dim MyVar
    MyVar = Viewer.OpenFile("C:\my_exemple.vmp")

    ' Create matrix that corresponds to position (X, Y, Z) and the coordinate système defined by 3 vectors v1(X1, Y1, Z1), v2(X2, Y2, Z2) and v3(X3, Y3, Z3)
    vMatrix = Array(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
    
    ' Volume calculation    
    RetVolume = VMPViewer.VolumePaveCalculation(vMatrix, 1, 1, 1)
    AverageValue = RetVolume(10)
    
    ' Plan calculation    
    RetPlan = VMPViewer.PlanCalculation(vMatrix, 1, 1)
    AverageValue = RetPlan(10)
    
End Sub
```
