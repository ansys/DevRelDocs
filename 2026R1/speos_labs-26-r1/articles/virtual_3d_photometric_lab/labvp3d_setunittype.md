# SetUnitType 

## Description 

Sets the unit type of the map data.

Returns true if it succeeds, false otherwise.

## Syntax 

*object.SetUnitType \(short nUnitType\) As Boolean*

- *object*: XM3Viewer object

- *nUnitType*: must have one of these values:

  - 0 for Radiometric

  - 1 for Photometric


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
  ' Sets the type of the unit with Photometric
  RetVal = Viewer.SetUnitType(1)
End Sub

```

## IronPython example

```ironpython
from System import Type, Activator
type = Type.GetTypeFromProgID("Xm3Viewer.Application")
MyXm3Viewer = Activator.CreateInstance(type)
#Open the file
MyXm3Viewer.OpenFile("C:\\tmp\\XM3Viewer\\2cubes_005_4.xm3")
#Sets the type of the unit with Illuminance/Irradiance
Viewer.SetUnitType(0)

```


