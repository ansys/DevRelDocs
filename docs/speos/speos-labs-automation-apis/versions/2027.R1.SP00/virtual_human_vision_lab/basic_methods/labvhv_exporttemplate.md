# ExportTemplate 

## Description 

Exports the current template to a .xml format. Returns TRUE is the call has succeeded, FALSE otherwise.

## Syntax 

- `object.ExportTemplate(BSTR bstrFileName)` as Boolean
- *object*: Virtual Human Vision Lab
- *bstrFileName*: path and filename of the template \(should end by .xml\)

## VB script example 

```VB
' Creates VisionLabViewer COM server
set VisionLabViewer = CreateObject("VisionLabViewer.application")
 ' Opens XMP file
VisionLabViewer.OpenFile("C:\Example.xmp")
' Exports template
VisionLabViewer.ExportTemplate("C:\Example.xml")
```

## IronPython example

```ironpython
from System import Type, Activator
#Creates VisionLabViewer COM server
type = Type.GetTypeFromProgID("VisionLabViewer.Application")
VisionLabViewer = Activator.CreateInstance(type)
# Opens XMP file
VisionLabViewer.OpenFile("C:\\Example.xmp")
# Exports template
VisionLabViewer.ExportTemplate ("C:\\Example.xml")
```


