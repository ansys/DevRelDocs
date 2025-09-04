# Caption

## Description

Returns the caption title of the viewer/editor.

## Syntax

*object*.Caption\(\) As String

- *object*: 3D Energy Density Lab object

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
    ' Gets the caption
    RetVal = Viewer.Caption()
End Sub
```

## IronPython Example

```
from System import Type, Activator

type = Type.GetTypeFromProgID("VMPViewer.Application")
Viewer = Activator.CreateInstance(type)

# Gets the caption
Caption = Viewer.Caption
```
