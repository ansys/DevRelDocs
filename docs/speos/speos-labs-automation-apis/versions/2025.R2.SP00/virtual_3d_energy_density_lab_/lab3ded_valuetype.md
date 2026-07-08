# ValueType

## Description

Gets the value type of the map data.

## Syntax

*object*.ValueType\(\) As Short

- *object*: 3D Energy Density Lab object

- Returned value:
  - -1 if Unknown
  - 0 if Illuminance/Irradiance
  - 1 if Reflection
  - 2 if Transmission
  - 3 if Absorption

## VB Script Example

```
Sub TestLab()
    ' Starts the application
    Dim Viewer
    Set Viewer = CreateObject("VMPViewer.Application")
    
    ' Opens the file
    Dim MyVar
    MyVar = Viewer.OpenFile("C:\tmp\VMPViewer\2cubes_005_4.xm3")
        
    ' Gets the type of the value
    Dim RetVal
    RetVal = Viewer.ValueType()
End Sub
```

## IronPython Example

```
from System import Type, Activator

type = Type.GetTypeFromProgID("VMPViewer.Application")
MyVMPViewer = Activator.CreateInstance(type)

# Open the file
MyVMPViewer.OpenFile("C:\\tmp\\VMPViewer\\2cubes_005_4.xm3")
# Gets the type of the value
valueType = MyVMPViewer.ValueType()

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
