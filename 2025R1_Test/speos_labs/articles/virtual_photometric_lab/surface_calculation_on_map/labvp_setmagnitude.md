# SetMagnitude

## Description

Sets the current measure magnitude. Returns TRUE if the call has succeeded, FALSE otherwise.

Caution: the current measure magnitude is reset to the default magnitude of the map during the execution of the OpenFile, AsyncOpenFile, ImportTXT and CreateMap methods.

## Syntax

- `object.SetMagnitude(short iMagnitude)` as Boolean
- *object*: Virtual Photometric Lab
- *iMagnitude*: index of the magnitude

## VB script example

```VB
' Creates XMPViewer COM server
set XmpViewer = CreateObject("XmpViewer.application")
' Opens XMP file
XMPViewer.OpenFile("C:\Example.xmp")
' Sets the magnitude to X color component, XYZ color space
XMPViewer.SetMagnitude(13)
```

## IronPython example

```ironpython
from System import Type, Activator
#Creates XMPViewer COM server
type = Type.GetTypeFromProgID("XmpViewer.Application")
XmpViewer = Activator.CreateInstance(type)
# Opens XMP file
XmpViewer.OpenFile("C:\\Example.xmp")
# Sets the magnitude to X color component, XYZ color space
XMPViewer.SetMagnitude(13)
```
