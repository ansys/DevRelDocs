# Caption 

## Description 

Returns the caption title of the viewer/editor.

## Syntax 

*object.Caption\(\) As String*

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
  ' Gets the caption
  RetVal = Viewer.Caption()
End Sub
```

## IronPython example

```ironpython
from System import Type, Activator
type = Type.GetTypeFromProgID("Xm3Viewer.Application")
MyXm3Viewer = Activator.CreateInstance(type)
# Gets the caption
Caption = MyXm3Viewer.Caption()

```


