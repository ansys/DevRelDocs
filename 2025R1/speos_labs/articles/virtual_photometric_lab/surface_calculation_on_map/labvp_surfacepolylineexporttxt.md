# SurfacePolylineExportTXT

## Description

Exports values of 2D polyline to a text file format. Returns TRUE if the call has succeeded, FALSE otherwise.

## Syntax

- `object.SurfacePolylineExportTXT(VARIANT* vPtX, VARIANT* vPtY, int iSampling, BSTR bstrFileName)` as Boolean
- *object*: Virtual Photometric Lab
- *vPtX*: array of VARIANT for the horizontal coordinate of each vertex of the polyline
- *vPtY*: array of VARIANT for the vertical coordinate of each vertex of the polyline
- *iSampling*: number of measurements along the polyline
- *bstrFileName*: path and filename of the text \(.txt\) file.

## VB script example

```VB
' Creates XMPViewer COM server
set XmpViewer = CreateObject("XmpViewer.application")
' Opens XMP file
XMPViewer.OpenFile("C:\Example.xmp")
' Exports values into TXT file
vPtx = array(-4, -4, 4, 4)
vPty = array(-4, 4, -4, 4)
XMPViewer.SurfacePolylineExportTXT(vPtx, vPty, 50, "C:\Example.txt")
```
