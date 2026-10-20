# GetIntensityType

## Description

Returns the intensity type of the map \(Optis, SAE type A, SAE type B, Conoscopic\).

## Syntax

- `object.GetIntensityType()` as Short
- *object*: Virtual Photometric Lab object
- *returned value*:
  - -1: Unknown
  - 0: OptisIntensityOptis

        **Note:** The OPTIS Intensity XMP map type is in end of life as of version 2023 R2, and no longer available in the user interface

  - 1: OptisIntensitySAETypeA
  - 2: OptisIntensitySAETypeB
  - 3: OptisIntensityConoscopic

## VB script example

```VB
' Creates XMPViewer COM server
set XmpViewer = CreateObject("XmpViewer.application")
' Opens XMP file
XMPViewer.OpenFile("C:\Example.xmp")
' Gets Intensity Type
result = XMPViewer.GetIntensityType()
```

## IronPython example

```ironpython
from System import Type, Activator
#Creates XMPViewer COM server
type = Type.GetTypeFromProgID("XmpViewer.Application")
XmpViewer = Activator.CreateInstance(type)
# Opens XMP file
XmpViewer.OpenFile("C:\\Example.xmp")
# Gets intensity type
Retval = XmpViewer.GetIntensityType()
```
