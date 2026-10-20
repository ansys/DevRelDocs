# ValueType 

## Description 

Gives the value type of the map data.

Returns:

- -1 if Unknown

- 0 if Illuminance/Irradiance

- 1 if Reflection

- 2 if Transmission

- 3 if Absorption


## Syntax 

*object.ValueType As Short*

- object: XM3Viewer object


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
  ' Gets the type of the value
  RetVal = Viewer.ValueType()
End Sub

```

## IronPython example

```ironpython
from System import Type, Activator
type = Type.GetTypeFromProgID("Xm3Viewer.Application")
MyXm3Viewer = Activator.CreateInstance(type)
#Open the file
MyXm3Viewer.OpenFile("C:\\tmp\\XM3Viewer\\2cubes_005_4.xm3")
#Gets the type of the value
valueType = MyXm3Viewer.ValueType()    
    if valueType == -1: 
        print "Value type: Unknown"
    elif valueType == 0: 
        print "Value type: Illuminance/Irradiance"
    elif valueType == 1: 
        print "Value type: Reflection"
    elif valueType == 2:
        print "Value type: Transmission"
    elif valueType == 3: 
        print "Value type: Absorption"

```


