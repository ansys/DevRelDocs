# SurfaceRectangleExportSpectrum

## Description

Exports the spectrum data of a measurement rectangle to a spectrum file. Returns TRUE if the call has succeeded, FALSE otherwise.

## Syntax

- `object.SurfaceRectangleExportSpectrum(double dXPos, double dYPos, double dWidth, double dHeight, BSTR bstrFileName)` as Boolean
- *object*: Virtual Photometric Lab
- *dXPos*: horizontal coordinate of the center of the rectangle \(Theta start for conoscopic map\)
- *dYPos*: vertical coordinate of the center of the rectangle \(Theta end for conoscopic map\)
- *dWidth*: horizontal size of the rectangle \(Phi start for conoscopic map\)
- *dHeight*: vertical size of the rectangle \(Phi end for conoscopic map\)
- *bstrFileName*: path and filename of the spectrum \(.spectrum, .spe\) file.

## VB script example

```VB
' Creates XMPViewer COM server
set XmpViewer = CreateObject("XmpViewer.application")
' Opens XMP file
XMPViewer.OpenFile("C:\Example.xmp")
' Exports spectrum into SPE file
XMPViewer.SurfaceRectangleExportSpectrum(0, 0, 0.5, 0.5, "C:\Example.spe")
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
XMPViewer.SurfaceRectangleExportSpectrum ( 0, 0, 0.5, 0.5, "C:\\Example.spe")
```
