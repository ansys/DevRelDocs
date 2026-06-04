# ExportXMPtoResizedImage 

## Description 

Exports the current view of an XMP map as an image \(based on the current display settings and size specifications\).

Returns TRUE if the call has succeeded, FALSE otherwise.

## Syntax 

- `object.ExportXMPtoResizedImage(BSTR bstrFileName, double ratio)` as Boolean
- *object*: Virtual Human Vision Lab
- *bstrFileName*: path and filename of the BMP, PNG, TIFF or JPG. Should end by **.BMP**, **.PNG**, **.TIFF** or **.JPG**.
- *ratio*: ratio \(multiplication factor\) applied to the exported image. Should be greater than 0 and comprised between 0.001 and 100.

## VB script example 

```VB
' Creates VisionLabViewer COM server
set VisionLabViewer = CreateObject("VisionLabViewer.application")
' Opens XMP file
VisionLabViewer.OpenFile("C:\Example.xmp")
' Exports the XMP map
VisionLabViewer.ExportXMPtoResizedImage("C:\Example.png", 10)
```

## IronPython example

```ironpython
from System import Type, Activator
#Creates VisionLabViewer COM server
type = Type.GetTypeFromProgID("VisionLabViewer.Application")
VisionLabViewer = Activator.CreateInstance(type)
# Opens XMP file
VisionLabViewer.OpenFile("C:\\Example.xmp")
# Exports XMP map
retval = VisionLabViewer.ExportXMPtoResizedImage("C:\\Example.png", 10)
```


