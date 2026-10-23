# ExportTemplate

## Description

Exports a template into a .xml format. Returns TRUE is the call has succeeded, FALSE otherwise.

## Syntax

- `object.ExportTemplate(BSTR bstrFileName)` as Boolean
- *object*: Virtual Photometric Lab
- *bstrFileName*: path and filename of the template \(should end by .XML\)

## VB script example

```VB
' Creates XMPViewer COM server
set XmpViewer = CreateObject("XmpViewer.application")
' Opens XMP file
XMPViewer.OpenFile("C:\Example.xmp")
' Exports template
XMPViewer.ExportTemplate("C:\Example.xml")
```

## IronPython example

```ironpython
from System import Type, Activator
#Creates XMPViewer COM server
type = Type.GetTypeFromProgID("XmpViewer.Application")
XmpViewer = Activator.CreateInstance(type)
# Opens XMP file
XmpViewer.OpenFile("C:\\Example.xmp")
# Exports template
XmpViewer.ExportTemplate ("C:\\Example.xml")
```
