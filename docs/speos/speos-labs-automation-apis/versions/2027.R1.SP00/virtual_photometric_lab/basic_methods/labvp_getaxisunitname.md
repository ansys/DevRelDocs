# GetAxisUnitName

## Description

Returns the storage axis unit of grid \(degree, radian, metre, millimetre, etc.\).

## Syntax

- `object.GetAxisUnitName()` as String
- *object*: Virtual Photometric Lab
- *returned value*:
  - meter
  - centimeter
  - millimeter
  - micrometer
  - nanometer
  - feet
  - inch
  - degree
  - radian
  - milliradian
  - arc minute
  - arc second

## VB script example

```VB
' Creates XMPViewer COM server
set XmpViewer = CreateObject("XmpViewer.application")
' Opens XMP file
XMPViewer.OpenFile("C:\Example.xmp")
' Gets Axis Unit Name
result = XMPViewer.GetAxisUnitName()
```

## IronPython example

```ironpython
from System import Type, Activator
#Creates XMPViewer COM server
type = Type.GetTypeFromProgID("XmpViewer.Application")
XmpViewer = Activator.CreateInstance(type)
# Opens XMP file
XmpViewer.OpenFile("C:\\Example.xmp")
# Gets axis unit name
Retval = XmpViewer.GetAxisUnitName()
```
