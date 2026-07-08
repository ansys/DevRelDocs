# GetHorizontalFlip 

## Description 

Gives the horizontal flip status of a map.

Returns TRUE if the map is horizontally flipped, FALSE otherwise.

## Syntax 

*object.GetHorizontalFlip*

- *object*: XMPViewer object


## VB script example 

```VB
Sub HorizontalFlip ()
'Error Management
Dim Error As Integer
'Declares XMPViewer
Dim Viewer As Object
Set Viewer = CreateObject("XmpViewer.Application ")
'Shows XMPViewer
Viewer.Show(1)
'Opens File
Error = Viewer.OpenFile("C:\temp\Spectral.xmp ")
' Gets horizontal flip status
Dim RetVal
RetVal = Viewer.GetHorizontalFlip
End Sub

```

## IronPython example

```ironpython
from System import Type, Activator
type = Type.GetTypeFromProgID("XMPViewer.Application")
XMPViewer = Activator.CreateInstance(type)
# Opens a file
MyFile = ("C:\\tmp\\XMPViewer\\Exemple.xmp")
XMPViewer.OpenFile(MyFile)
# Gets horizontal flip status
retval = XMPViewer.GetHorizontalFlip()

```


