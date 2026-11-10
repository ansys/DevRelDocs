# SurfacePolylineExportSpectrum

## Description

Exports the spectrum data of a measurement polyline to a spectrum file. Returns TRUE if the call has succeeded, FALSE otherwise.

## Syntax

- `object.SurfacePolylineExportSpectrum(VARIANT* vPtX, VARIANT* vPtY, BSTR bstrFileName)` as Boolean
- *object*: Virtual Photometric Lab
- *vPtX*: array of VARIANT for the horizontal coordinate of each vertex of the polyline
- *vPtY*: array of VARIANT for the vertical coordinate of each vertex of the polyline
- *bstrFileName*: path and filename of the spectrum \(.spectrum, .spe\) file

## VB script example

```VB
' Creates XMPViewer COM server
set XmpViewer = CreateObject("XmpViewer.application")
' Opens XMP file
XMPViewer.OpenFile("C:\Example.xmp")
' Exports spectrum into SPE file
vPtx = array(-0.3, 0.3, 0.3, -0.3)
vPty = array(-0.3, -0.3, 0.3, 0.3)
XMPViewer.SurfacePolylineExportSpectrum(vPtx, vPty, "C:\Example.spe")
```
