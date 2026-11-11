# GetSampleCRI 

## Description 

Gets the individual Color Rendering Index value of a point.

Returns 1 if the call has succeeded, 0 otherwise.

## Syntax 

*object.GetSampleCRI\(double dX, double dY, short nSampleNumber, VARIANT\* vdCRI\)*

- *object*: XMPViewer object

- *dX*: x coordinate of the point.

- *dY*: y coordinate of the point.

- *nSampleNumber*: sample number \(from 1 to 15\).

- *vdCRI*\(pointer on result\): VARIANT of type VT\_R8 \(double\).


## VB script example 

```VB
Sub CRISample ()
'Error Management
Dim Error As Integer
'Declares XMPViewer
Dim Viewer As Object
Set Viewer = CreateObject("XmpViewer.Application ")
'Shows XMPViewer
Viewer.Show(1)
'Opens File
Error = Viewer.OpenFile("C:\temp\Spectral.xmp ")
' Gets first sample CRI for point (1, 2)
Dim RetCRI
Error = Viewer.GetSampleCRI(1, 2, 1, RetCRI)
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
XMPViewer.Show(1)
# Show the secondary grid
XMPViewer. ShowSecondaryGrid(True)

```


