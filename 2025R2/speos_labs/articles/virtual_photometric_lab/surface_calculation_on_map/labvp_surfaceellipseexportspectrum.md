# SurfaceEllipseExportSpectrum

## Description

Exports the spectrum data of a measurement ellipse to a spectrum file. Returns TRUE if the call has succeeded, FALSE otherwise.

## Syntax

- `object.SurfaceEllipseExportSpectrum(double dXPos, double dYPos, double dWidth, double dHeight, BSTR bstrFileName)` as Boolean
- *object*: Virtual Photometric Lab
- *dXPos*: horizontal coordinate of the center of the ellipse
- *dYPos*: vertical coordinate of the center of the ellipse
- *dWidth*: horizontal size of the ellipse
- *dHeight*: vertical size of the ellipse
- *bstrFileName*: path and filename of the spectrum \(.spectrum, .spe\) file.

## VB script example

```VB
' Creates XMPViewer COM server
set XmpViewer = CreateObject("XmpViewer.application")
' Opens XMP file
XMPViewer.OpenFile("C:\Example.xmp")
' Exports spectrum into SPE file
XMPViewer.SurfaceEllipseExportSpectrum(0, 0, 0.25, 0.25, "C:\Example.spe")
```

## IronPython example

```ironpython
from System import Type, Activator
#Creates XMPViewer COM server
type = Type.GetTypeFromProgID("XmpViewer.Application")
XmpViewer = Activator.CreateInstance(type)
# Opens XMP file
XmpViewer.OpenFile("C:\\Example.xmp")
# Exports spectrum
XMPViewer.SurfaceEllipseExportSpectrum(0, 0, 0.25, 0.25, "C:\\Example.spe")
```
