# SurfaceLineExportTXT

## Description

Exports values of 2D section to text file. Returns TRUE if the call has succeeded, FALSE otherwise.

## Syntax

- `object.SurfaceLineExportTXT(double dXPos1, double dYPos1, double dXPos2, double dYPos2, int iSampling, BSTR bstrFileName)` as Boolean
- *object*: Virtual Photometric Lab
- *dXPos1*: horizontal coordinate of the first vertex of the line
- *dYPos1*: vertical coordinate of the first vertex of the line
- *dXPos2*: horizontal coordinate of the second vertex of the line
- *dYPos2*: vertical coordinate of the second vertex of the line
- *iSampling*: number of measurements along the line
- *bstrFileName*: path and filename of the text file \(should end by .TXT\).

## VB script example

```VB
' Creates XMPViewer COM server
set XmpViewer = CreateObject("XmpViewer.application")
' Opens XMP file
XMPViewer.OpenFile("C:\Example.xmp")
' Exports values into TXT file
XMPViewer.SurfaceLineExportTXT(-4, -4, 4, 4, 50, "C:\Example.txt")
```

## IronPython example

```ironpython
from System import Type, Activator
#Creates XMPViewer COM server
type = Type.GetTypeFromProgID("XmpViewer.Application")
XmpViewer = Activator.CreateInstance(type)
# Opens XMP file
XmpViewer.OpenFile("C:\\Example.xmp")
# Exports values into TXT file
XmpViewer. SurfaceLineExportTxt(-4, -4, 4, 4, 50, "C:\\Example.txt ")
```
