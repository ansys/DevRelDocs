# SetMagnitude 

## Description 

Sets the current measure magnitude. Returns TRUE if the call has succeeded, FALSE otherwise.

Caution: the current measure magnitude is reset to the default magnitude of the map during the execution of the OpenFile and AsyncOpenFile methods.

## Syntax 

- `object.SetMagnitude(short iMagnitude)` as Boolean
- *object*: Virtual Human Vision Lab
- *iMagnitude*: index of the magnitude

## VB script example 

```VB
' Creates VisionLabViewer COM server
set VisionLabViewer = CreateObject("VisionLabViewer.application")
' Opens XMP file
VisionLabViewer.OpenFile("C:\Example.xmp")
' Sets the magnitude to X color component, XYZ color space
VisionLabViewer.SetMagnitude(13)
```

## IronPython example

```ironpython
from System import Type, Activator
#Creates VisionLabViewer COM server
type = Type.GetTypeFromProgID("VisionLabViewer.Application")
VisionLabViewer = Activator.CreateInstance(type)
# Opens XMP file
VisionLabViewer.OpenFile("C:\\Example.xmp")
# Sets the magnitude to X color component, XYZ color space
VisionLabViewer.SetMagnitude(13)
```


