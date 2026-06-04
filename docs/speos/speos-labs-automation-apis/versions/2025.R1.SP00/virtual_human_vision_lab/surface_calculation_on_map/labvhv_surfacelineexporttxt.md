# SurfaceLineExportTXT 

## Description 

Exports values of 2D section to text file. Returns TRUE if the call has succeeded, FALSE otherwise.

## Syntax 

- `object.SurfaceLineExportTXT(double dXPos1, double dYPos1, double dXPos2, double dYPos2, int iSampling, BSTR bstrFileName)` as Boolean
- *object*: Virtual Human Vision Lab
- *dXPos1*: horizontal coordinate of the first vertex of the line
- *dYPos1*: vertical coordinate of the first vertex of the line
- *dXPos2*: horizontal coordinate of the second vertex of the line
- *dYPos2*: vertical coordinate of the second vertex of the line
- *iSampling*: number of measurements along the line
- *bstrFileName*: path and filename of the text file \(should end by .txt\).

## VB script example 

```VB
' Creates VisionLabViewer COM server
set VisionLabViewer = CreateObject("VisionLabViewer.application")
' Opens XMP file
VisionLabViewer.OpenFile("C:\Example.xmp")
' Exports values into TXT file
VisionLabViewer.SurfaceLineExportTXT(-4, -4, 4, 4, 50, "C:\Example.txt")
```

## IronPython example

```ironpython
from System import Type, Activator
#Creates VisionLabViewer COM server
type = Type.GetTypeFromProgID("VisionLabViewer.Application")
VisionLabViewer = Activator.CreateInstance(type)
# Opens XMP file
VisionLabViewer.OpenFile("C:\\Example.xmp")
# Exports values into TXT file
VisionLabViewer. SurfaceLineExportTxt(-4, -4, 4, 4, 50, "C:\\Example.txt ")
```


