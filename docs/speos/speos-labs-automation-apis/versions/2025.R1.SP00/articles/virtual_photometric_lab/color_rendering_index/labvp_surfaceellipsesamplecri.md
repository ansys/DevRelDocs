# SurfaceEllipseSampleCRI 

## Description 

Gets the individual Color Rendering Index value of an ellipse.

Fails with a conoscopic map.

Returns 1 if the call has succeeded, 0 otherwise.

## Syntax 

*object.SurfaceEllipseSampleCRI \(double dX, double dY, double dWidth, double dHeight, short nSampleNumber, VARIANT\* vdCRI\)*

*object*: XMPViewer object

*dX*: x coordinate of the ellipse center.

*dY*: y coordinate of the ellipse center.

*dWidth*: width of the ellipse.

*dHeight*: height of the ellipse.

*nSampleNumber*: sample number \(from 1 to 15\).

*vdCRI*\(pointer on result\): VARIANT of type VT\_R8 \(double\).

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
' Gets first sample CRI for ellipse
Dim RetCRI
Error = Viewer.SurfaceEllipseSampleCRI(1, 2, 10, 10, 1, RetCRI)
End Sub

```


