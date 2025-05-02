# OpenFile

## Description

Opens a file. Returns 1 if the call has succeeded, 0 otherwise.

## Syntax

*object*.OpenFile\(BSTR bstrFileName\) As Short

- *object*: Eulumdat Viewer, IES Viewer, User Material Editor, Virtual Photometric Lab, Virtual Human Vision Lab or 3D Energy Density Lab object

- *bstrFileName*: filename string including path \(input\)

## VB Script Example

```
Sub TestLab()
   ' Starts the application
   Dim Viewer
   Set Viewer = CreateObject("VMPViewer.Application")
   ' Opens a file
   Dim MyVar
   MyVar = Viewer.OpenFile("C:\my_exemple.vmp")

End Sub
```

## IronPython Example

```
from System import Type, Activator

type = Type.GetTypeFromProgID("XMPViewer.Application")
Viewer = Activator.CreateInstance(type)

# Opens a file
MyFile = ("C:\\my_exemple.vmp")
Viewer.OpenFile(MyFile)
```
