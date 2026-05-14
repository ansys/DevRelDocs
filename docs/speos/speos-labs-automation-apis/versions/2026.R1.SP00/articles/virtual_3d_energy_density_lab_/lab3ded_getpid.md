# GetPID

## Description

Returns the process ID of the current instance of the Viewer/Editor.

## Syntax

*object*.GetPID\(\) As Long

- *object*: 3D Energy Density Lab object

## VB Script Example

```
Sub TestLab()
    ' Starts the application
    Dim Viewer
    Set Viewer = CreateObject("VMPViewer.Application")
    Dim RetVal
    ' Gets the PID
    RetVal = Viewer.GetPID()
End Sub
```

## IronPython Example

```
from System import Type, Activator

type = Type.GetTypeFromProgID("VMPViewer.Application")
Viewer = Activator.CreateInstance(type)

# Gets the PID
Viewer.GetPID
```
