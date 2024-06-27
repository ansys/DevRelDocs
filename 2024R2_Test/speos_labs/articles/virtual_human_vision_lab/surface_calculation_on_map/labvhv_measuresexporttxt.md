# MeasuresExportTXT 

## Description 

Exports the areas, measures and rules defined in the measures tool to a text file. Returns TRUE if the call has succeeded, FALSE otherwise.

## Syntax 

- `object.MeasuresExportTXT(BSTR bstrFileName)` as Boolean
- *object*: Virtual Human Vision Lab
- *bstrFileName*: path and filename of the text \(.txt\) file

## VB script example 

```VB
' Creates VisionLabViewer COM server
set VisionLabViewer = CreateObject("VisionLabViewer.application")
' Opens XMP file
VisionLabViewer.OpenFile("C:\Example.xmp")
' Exports into TXT file
VisionLabViewer.MeasuresExportTXT("C:\Example.TXT")
```

## IronPython example

```ironpython
from System import Type, Activator
#Creates VisionLabViewer COM server
type = Type.GetTypeFromProgID("VisionLabViewer.Application")
VisionLabViewer = Activator.CreateInstance(type)
# Opens XMP file
VisionLabViewer.OpenFile("C:\\Example.xmp")
# Exports into TXT file
VisionLabViewer.MeasuresExportTXT ("C:\\Example.txt ")
```


