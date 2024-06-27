# SurfaceRectangleSampleCRI 

## Description 

Gets individual Color Rendering Index value of a rectangle \(or corona if conoscopic map\).

Returns 1 if the call has succeeded, 0 otherwise.

## Syntax 

*object.SurfaceRectangleSampleCRI\(double dX, double dY, double dWidth, double dHeight, short nSampleNumber, VARIANT\* vdCRI\)*

- *object*: XMPViewer object

- *dX*: x coordinate of the rectangle center.

- *dY*: y coordinate of the rectangle center.

- *dWidth*: width of the rectangle.

- *dHeight*: height of the rectangle.

- *nSampleNumber*: sample number \(from 1 to 15\).

- *vdCRI*\(pointer on result\): VARIANT of type VT\_R8 \(double\).


## Example 

```
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
' Gets first sample CRI for rectangle
Dim RetCRI
Error = Viewer.SurfaceRectangleSampleCRI(1, 2, 10, 10, 1, RetCRI)
End Sub

```


