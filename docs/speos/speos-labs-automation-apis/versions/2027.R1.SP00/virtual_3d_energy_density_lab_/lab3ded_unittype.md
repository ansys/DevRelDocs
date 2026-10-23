# UnitType

## Description

Gets the unit type of the map data.

## Syntax

*object*.UnitType\(\) As Short

- *object*: 3D Energy Density Lab object

- Returned value:
  - -1 if Unknown
  - 0 if Radiometric
  - 1 if Photometric

## VB Script Example

```
Sub TestLab()
    ' Starts the application
    Dim Viewer
    Set Viewer = CreateObject("VMPViewer.Application")
    ' Opens the file
    Dim MyVar
    MyVar = Viewer.OpenFile("C:\test_file.vmp")
    Dim RetVal
    ' Gets the type of the unit
    RetVal = Viewer.UnitType()
End Sub
```

## IronPython Example

```
from System import Type, Activator

type = Type.GetTypeFromProgID("VMPViewer.Application")
Viewer = Activator.CreateInstance(type)

# Open the file
Viewer.OpenFile("C:\\test_file.vmp")

# Gets the type of the unit
unitType = Viewer.UnitType()

if unitType == -1:
    print "Unit type: Unknown"
elif unitType == 0:
    print "Unit type: Radiometric"
elif unitType == 1:
    print "Unit type: Photometric"
```
