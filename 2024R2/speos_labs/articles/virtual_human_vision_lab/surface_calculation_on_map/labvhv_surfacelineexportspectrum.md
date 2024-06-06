# SurfaceLineExportSpectrum 

## Description 

Exports the spectrum data of a measurement line to a spectrum file. Returns TRUE if the call has succeeded, FALSE otherwise.

## Syntax 

- `object.SurfaceLineExportSpectrum(double dXPos1, double dYPos1, double dXPos2, double dYPos2, BSTR bstrFileName)` as Boolean
- *object*: Virtual Human Vision Lab
- *dXPos1*: horizontal coordinate of the first vertex of the line
- *dYPos1*: vertical coordinate of the first vertex of the line
- *dXPos2*: horizontal coordinate of the second vertex of the line
- *dYPos2*: vertical coordinate of the second vertex of the line
- *bstrFileName*: path and filename of the spectrum \(.spectrum, .spe\) file

## VB script example 

```VB
' Creates VisionLabViewer COM server
set VisionLabViewer = CreateObject("VisionLabViewer.application")
' Opens XMP file
VisionLabViewer.OpenFile("C:\Example.xmp")
' Exports spectrum into SPE file
VisionLabViewer.SurfaceLineExportSpectrum(-0.25, 0, 0.25, 0, "C:\Example.spe")
```

## IronPython example

```ironpython
from System import Type, Activator
#Creates VisionLabViewer COM server
type = Type.GetTypeFromProgID("VisionLabViewer.Application")
VisionLabViewer = Activator.CreateInstance(type)
# Opens XMP file
VisionLabViewer.OpenFile("C:\\Example.xmp")
# Exports spectrum
VisionLabViewer.SurfaceLineExportSpectrum (-0.25, 0, 0.25, 0, "C:\\Example.spe")
```


