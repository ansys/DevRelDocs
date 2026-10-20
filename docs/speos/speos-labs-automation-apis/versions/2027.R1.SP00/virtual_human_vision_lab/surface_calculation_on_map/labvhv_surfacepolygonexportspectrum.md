# SurfacePolygonExportSpectrum 

## Description 

Exports the spectrum data of a measurement polygon to a spectrum file. Returns TRUE if the call has succeeded, FALSE otherwise.

## Syntax 

- `object.SurfacePolygonExportSpectrum(VARIANT* vPtX, VARIANT* vPtY, BSTR bstrFileName)` as Boolean
- *object*: Virtual Human Vision Lab
- *vPtX*: array of VARIANT for the horizontal coordinate of each vertex of the polygon
- *vPtY*: array of VARIANT for the vertical coordinate of each vertex of the polygon
- *bstrFileName*: path and filename of the spectrum \(.spectrum, .spe\) file

## VB script example 

```VB
' Creates VisionLabViewer COM server
set VisionLabViewer = CreateObject("VisionLabViewer.application")
' Opens XMP file
VisionLabViewer.OpenFile("C:\Example.xmp")
' Exports spectrum into SPE file
vPtx = array(-0.3, 0.3, 0.3, -0.3)
vPty = array(-0.3, -0.3, 0.3, 0.3)
VisionLabViewer.SurfacePolygonExportSpectrum(vPtx, vPty, "C:\Example.spe")
```


