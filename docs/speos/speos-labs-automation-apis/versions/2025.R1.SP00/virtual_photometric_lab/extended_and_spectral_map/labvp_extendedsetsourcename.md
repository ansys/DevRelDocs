# ExtendedSetSourceName 

## Description 

Renames one of the sources. Returns TRUE if the call has succeeded, FALSE otherwise.

## Syntax 

- `object.ExtendedSetSourceName`\(int iSource, BSTR bstrSourceName\) as Boolean
- *object*: Virtual Photometric Lab object
- *iSource*: index of the source in Virtual Lighting Controller \(starting from 0\)
- *bstrSourceName*: the new name of the source

## VB script example 

```VB
' Creates XMPViewer COM server
set XmpViewer = CreateObject("XmpViewer.application")
' Opens XMP file
XMPViewer.OpenFile("C:\Example.xmp")
' Renames source #1
XMPViewer.ExtendedSetSourceName(1, "Source number one")
```

## IronPython example

```ironpython
from System import Type, Activator
#Creates XMPViewer COM server
type = Type.GetTypeFromProgID("XmpViewer.Application")
XmpViewer = Activator.CreateInstance(type)
# Opens XMP file
XmpViewer.OpenFile("C:\\Example.xmp")
# Renames the second source
XmpViewer. ExtendedSetSourceName(1, " Source number two")
         
```


