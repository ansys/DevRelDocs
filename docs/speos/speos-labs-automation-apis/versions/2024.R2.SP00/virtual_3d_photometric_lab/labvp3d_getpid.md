# GetPID 

## Description 

Returns the process ID of the current instance of the Viewer/Editor.

## Syntax 

*object.GetPID\(\) As Long*

*object*: XM3Viewer object

## VB script example

```VB
Sub TestLab()
  ' Starts the application
  Dim Viewer
  Set Viewer = CreateObject("Xm3Viewer.Application")
  Dim RetVal
  ' Gets the PID
  RetVal = Viewer.GetPID()
End Sub

```

## IronPython example

```ironpython
from System import Type, Activator
type = Type.GetTypeFromProgID("Xm3Viewer.Application")
MyXm3Viewer = Activator.CreateInstance(type)
# Gets the PID
MyXm3Viewer.GetPID()

```


