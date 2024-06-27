# ExportXMPtoResizedImage 

## Description 

Exports the current view of an XMP map as an image \(based on the current display settings and size specifications\).

Returns TRUE if the call has succeeded, FALSE otherwise.

**Note:** For high ratio values, the function can return FALSE.

## Syntax 

- `object.ExportXMPtoResizedImage(BSTR bstrFileName, double ratio)` as Boolean
- *object*: Virtual Photometric Lab
- *bstrFileName*: path and filename of the BMP, PNG, TIFF or JPG. Should end by **.BMP**, **.PNG**, **.TIFF** or **.JPG**.
- *ratio*: ratio \(multiplication factor\) applied to the exported image. Should be greater than 0 and comprised between 0.001 and 100.

## VB script example 

```VB
' Creates XMPViewer COM server
set XmpViewer = CreateObject("XmpViewer.application")  
' Opens XMP file  
XMPViewer.OpenFile("C:\Example.xmp")  
' Exports the XMP map  
XMPViewer.ExportXMPtoResizedImage("C:\Example.png", 10)
```

## IronPython example

```ironpython
from System import Type, Activator
#Creates XMPViewer COM server
type = Type.GetTypeFromProgID("XmpViewer.Application")
XmpViewer = Activator.CreateInstance(type)
# Opens XMP file
XmpViewer.OpenFile("C:\\Example.xmp")
# Exports XMP map
retval = XmpViewer.ExportXMPtoResizedImage("C:\\Example.png", 10)
```


