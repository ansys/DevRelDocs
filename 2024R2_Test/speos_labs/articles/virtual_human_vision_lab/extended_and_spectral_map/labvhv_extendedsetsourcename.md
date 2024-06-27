# ExtendedSetSourceName 

## Description 

Renames one of the sources. Returns TRUE if the call has succeeded, FALSE otherwise.

## Syntax 

- `object.ExtendedSetSourceName(int iSource, BSTR bstrSourceName)` as Boolean
- *object*: Virtual Human Vision Lab
- *iSource*: index of the source in Virtual Lighting Controller \(starting from 0\)
- *bstrFileName*: the new name of the source

## VB script example 

```VB
' Creates VisionLabViewer COM server
set VisionLabViewer = CreateObject("VisionLabViewer.application")
' Opens XMP file
VisionLabViewer.OpenFile("C:\Example.xmp")
' Renames source #1
VisionLabViewer.ExtendedSetSourceName(1, "Source number one")
```

## IronPython example

```ironpython
from System import Type, Activator
#Creates VisionLabViewer COM server
type = Type.GetTypeFromProgID("VisionLabViewer.Application")
VisionLabViewer = Activator.CreateInstance(type)
# Opens XMP file
VisionLabViewer.OpenFile("C:\\Example.xmp")
# Renames the second source
VisionLabViewer. ExtendedSetSourceName(1, " Source number two")
```


