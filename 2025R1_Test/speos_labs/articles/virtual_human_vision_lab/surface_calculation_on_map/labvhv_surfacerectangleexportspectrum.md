# SurfaceRectangleExportSpectrum 

## Description 

Exports the spectrum data of a measurement rectangle to a spectrum file. Returns TRUE if the call has succeeded, FALSE otherwise.

## Syntax 

- `object.SurfaceRectangleExportSpectrum(double dXPos, double dYPos, double dWidth, double dHeight, BSTR bstrFileName)` as Boolean
- *object*: Virtual Human Vision Lab
- *dXPos*: horizontal coordinate of the center of the rectangle
- *dYPos*: vertical coordinate of the center of the rectangle
- *dWidth*: horizontal size of the rectangle
- *dHeight*: vertical size of the rectangle
- *bstrFileName*: path and filename of the spectrum \(.spectrum, .spe\) file.

## VB script example 

```VB
' Creates VisionLabViewer COM server
set VisionLabViewer = CreateObject("VisionLabViewer.application")
' Opens XMP file
VisionLabViewer.OpenFile("C:\Example.xmp")
' Exports spectrum into SPE file
VisionLabViewer.SurfaceRectangleExportSpectrum(0, 0, 0.5, 0.5, "C:\Example.spe")
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
VisionLabViewer.SurfaceRectangleExportSpectrum ( 0, 0, 0.5, 0.5, "C:\\Example.spe")
```


