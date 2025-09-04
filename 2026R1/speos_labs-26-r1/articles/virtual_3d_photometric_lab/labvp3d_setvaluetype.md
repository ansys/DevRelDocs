# SetValueType 

## Description 

Sets the value type of the map data.

Returns true if it succeeds, false otherwise.

## Syntax 

*object.SetValueType \(short nValueType\) As Boolean*

- *object*: XM3Viewer object

- *nValueType*: must have one of these values:

  - 0 for Illuminance/Irradiance

  - 1 for Reflection

  - 2 for Transmission

  - 3 for Absorption.


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
  ' Sets the type of the value with Illuminance/Irradiance
  RetVal = Viewer.SetValueType(0)
End Sub

```

## IronPython example

```ironpython
from System import Type, Activator
type = Type.GetTypeFromProgID("Xm3Viewer.Application")
MyXm3Viewer = Activator.CreateInstance(type)
#Open the file
MyXm3Viewer.OpenFile("C:\\tmp\\XM3Viewer\\2cubes_005_4.xm3")
#Sets the type of the value with Illuminance/Irradiance
Viewer.SetValueType(0)

```


