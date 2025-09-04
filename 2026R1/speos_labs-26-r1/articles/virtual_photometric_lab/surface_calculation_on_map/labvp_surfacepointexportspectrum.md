# SurfacePointExportSpectrum

## Description

Exports the spectrum data of a measurement point to a spectrum file. Returns TRUE if the call has succeeded, FALSE otherwise.

## Syntax

- `object.SurfacePointExportSpectrum(double dXPos, double dYPos, BSTR bstrFileName)` as Boolean
- *object*: Virtual Photometric Lab
- *dXPos*: horizontal coordinate of the point
- *dYPos*: vertical coordinate of the point
- *bstrFileName*: path and filename of the spectrum \(.spectrum, .spe\) file

## VB script example

```VB
' Creates XMPViewer COM server
set XmpViewer = CreateObject("XmpViewer.application")
' Opens XMP file
XMPViewer.OpenFile("C:\Example.xmp")
' Exports spectrum into SPE file
XMPViewer.SurfacePointExportSpectrum(0, 0, "C:\Example.spe")
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
XMPViewer.SurfacePointExportSpectrum (0, 0, "C:\\Example.spe")
```
