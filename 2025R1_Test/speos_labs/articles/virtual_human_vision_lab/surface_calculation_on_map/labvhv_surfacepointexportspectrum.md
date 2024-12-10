# SurfacePointExportSpectrum 

## Description 

Exports the spectrum data of a measurement point to a spectrum file. Returns TRUE if the call has succeeded, FALSE otherwise.

## Syntax 

- `object.SurfacePointExportSpectrum(double dXPos, double dYPos, BSTR bstrFileName)` as Boolean
- *object*: Virtual Human Vision Lab
- *dXPos*: horizontal coordinate of the point
- *dYPos*: vertical coordinate of the point
- *bstrFileName*: path and filename of the spectrum \(.spectrum, .spe\) file

## VB script example 

```VB
' Creates VisionLabViewer COM server
set VisionLabViewer = CreateObject("VisionLabViewer.application")
' Opens XMP file
VisionLabViewer.OpenFile("C:\Example.xmp")
' Exports spectrum into SPE file
VisionLabViewer.SurfacePointExportSpectrum(0, 0, "C:\Example.spe")
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
VisionLabViewer.SurfacePointExportSpectrum (0, 0, "C:\\Example.spe")
```


