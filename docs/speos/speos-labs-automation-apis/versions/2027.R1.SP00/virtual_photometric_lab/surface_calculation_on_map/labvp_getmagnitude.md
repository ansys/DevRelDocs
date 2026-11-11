# GetMagnitude

## Description

Gets the current measure magnitude.

## Syntax

- `object.GetMagnitude()` as Short
- *object*: Virtual Photometric Lab
- *returned value*:
  - 0: Default magnitude of the map
  - 1: x color component, xyY color space
  - 2: y color component, xyY color space
  - 3: u color component, uvY color space
  - 4: v color component, uvY color space
  - 5: u' color component, u'v'Y color space
  - 6: v' color component, u'v'Y color space
  - 7: u\* color component, L\*u\*v\* color space
  - 8: v\* color component, L\*u\*v\* color space
  - 9: a\* color component, L\*a\*b\* color space
  - 10: b\* color component, L\*a\*b\* color space
  - 11: C\* color component, L\*C\*h color space
  - 12: h color component, L\*C\*h color space
  - 13: X color component, XYZ color space
  - 14: Y color component, XYZ color space
  - 15: Z color component, XYZ color space
  - 16: L\* color component, L\*u\*v\* color space
  - 17: Dimension
  - 18: Glare

## VB script example

```VB
' Creates XMPViewer COM server
set XmpViewer = CreateObject("XmpViewer.application")
' Opens XMP file
XMPViewer.OpenFile("C:\Example.xmp")
' Gets the current magnitude
result = XMPViewer.GetMagnitude()
```

## IronPython example

```ironpython
from System import Type, Activator
#Creates XMPViewer COM server
type = Type.GetTypeFromProgID("XmpViewer.Application")
XmpViewer = Activator.CreateInstance(type)
# Opens XMP file
XmpViewer.OpenFile("C:\\Example.xmp")
# Gets the current magnitude
Retval = XMPViewer.GetMagnitude()
```
