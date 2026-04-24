# UnitType 

## Description 

Gives the unit type of the map data.

Returns:

- -1 if Unknown

- 0 if Radiometric

- 1 if Photometric


## Syntax 

*object.UnitType As Short*

- *object*: XM3Viewer object


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
  ' Gets the type of the unit
  RetVal = Viewer.UnitType()
End Sub

```

## IronPython example

```ironpython
from System import Type, Activator
type = Type.GetTypeFromProgID("Xm3Viewer.Application")
MyXm3Viewer = Activator.CreateInstance(type)
#Open the file
MyXm3Viewer.OpenFile("C:\\tmp\\XM3Viewer\\2cubes_005_4.xm3")
#Gets the type of the unit
unitType = MyXm3Viewer.UnitType()
    if unitType == -1: 
        print "Unit type: Unknown"
    elif unitType == 0: 
        print "Unit type: Radiometric"
    elif unitType == 1:  
        print "Unit type: Photometric"

```


