# SurfaceEllipseExportSpectrum 

## Description 

Exports the spectrum data of a measurement ellipse to a spectrum file. Returns TRUE if the call has succeeded, FALSE otherwise.

## Syntax 

- `object.SurfaceEllipseExportSpectrum(double dXPos, double dYPos, double dWidth, double dHeight, BSTR bstrFileName)` as Boolean
- *object*: Virtual Human Vision Lab
- *dXPos*: horizontal coordinate of the center of the ellipse
- *dYPos*: vertical coordinate of the center of the ellipse
- *dWidth*: horizontal size of the ellipse
- *dHeight*: vertical size of the ellipse
- *bstrFileName*: path and filename of the spectrum \(.spectrum, .spe\) file.

## VB script example 

```VB
' Creates VisionLabViewer COM server
set VisionLabViewer = CreateObject("VisionLabViewer.application")
' Opens XMP file
VisionLabViewer.OpenFile("C:\Example.xmp")
' Exports spectrum into SPE file
VisionLabViewer.SurfaceEllipseExportSpectrum(0, 0, 0.25, 0.25, "C:\Example.spe")
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
VisionLabViewer.SurfaceEllipseExportSpectrum(0, 0, 0.25, 0.25, "C:\\Example.spe")
```


