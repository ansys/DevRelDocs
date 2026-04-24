# SurfacePolygonSampleCRI 

## Description 

Gets the individual Color Rendering Index value of a polygon.

Fails with a conoscopic map.

Returns 1 if the call has succeeded, 0 otherwise.

## Syntax 

*object.SurfacePolygonSampleCRI\(VARIANT\* vPtX, VARIANT\* vPtY, short nSampleNumber, VARIANT\* vdCRI\)*

- *object*: XMPViewer object

- *vPtX*: array of x coordinates of the polygon.

- *vPtY*: array of y coordinates of the polygon.

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
' Gets first sample CRI for polygon
PointsX = array(-9,  11, 11, -9)
PointsY = array(-8,  -8, 12, 12)
Dim RetCRI
Error = Viewer.SurfacePolygonSampleCRI(PointsX, PointsY, 1, RetCRI)
End Sub

```


