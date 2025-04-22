# MeasuresExportTXT

## Description

Exports the areas, measures and rules defined in the measures tool to a text file. Returns TRUE if the call has succeeded, FALSE otherwise.

## Syntax

- `object.MeasuresExportTXT(BSTR bstrFileName)` as Boolean
- *object*: Virtual Photometric Lab
- *bstrFileName*: path and filename of the text \(.txt\) file

## VB script example

```VB
' Creates XMPViewer COM server
set XmpViewer = CreateObject("XmpViewer.application")
' Opens XMP file
XMPViewer.OpenFile("C:\Example.xmp")
' Exports into TXT file
XMPViewer.MeasuresExportTXT("C:\Example.TXT")
```

## IronPython example

```ironpython
from System import Type, Activator
#Creates XMPViewer COM server
type = Type.GetTypeFromProgID("XmpViewer.Application")
XmpViewer = Activator.CreateInstance(type)
# Opens XMP file
XmpViewer.OpenFile("C:\\Example.xmp")
# Exports into TXT file
XmpViewer. MeasuresExportTXT ("C:\\Example.txt ")
```
