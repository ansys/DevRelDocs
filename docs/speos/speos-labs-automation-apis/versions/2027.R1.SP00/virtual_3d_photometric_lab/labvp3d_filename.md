# FileName 

## Description 

Gets the file name.

## Syntax 

*object.FileName\(\) As String*

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
  ' Gets the file name
  RetVal = Viewer.FileName()
End Sub

```

## IronPython example

```ironpython
from System import Type, Activator
type = Type.GetTypeFromProgID("Xm3Viewer.Application")
MyXm3Viewer = Activator.CreateInstance(type)
#Open the file
MyXm3Viewer.OpenFile("C:\\tmp\\XM3Viewer\\2cubes_005_4.xm3")
#Gets the file name
filename = MyXm3Viewer.Filename()

```


