# ExportXMPtoIntensity 

## Description 

Exports an intensity XMP map to IES or Eulumdat file. Returns TRUE if the call has succeeded, FALSE otherwise.

## Syntax 

- `object.ExportXMPtoIntensity(BSTR bstrFileName)` as Boolean
- *object*: Virtual Photometric Lab object
- *bstrFileName*: path and filename of the IES or Eulumdat \(filenames should end by .IES or .LDT\).

## VB script example 

```VB
' Creates XMPViewer COM server
set XmpViewer = CreateObject("XmpViewer.application")
' Opens XMP file
XMPViewer.OpenFile("C:\Example.xmp")
' ExportXMPtoIntensity with LDT extension
XMPViewer.ExportXMPtoIntensity(C:\Example.LDT")
' ExportXMPtoIntensity with IES extension
XMPViewer.ExportXMPtoIntensity("C:\Example.IES")
```

## IronPython example

```
from System import Type, Activator
#Creates XMPViewer COM server
type = Type.GetTypeFromProgID("XmpViewer.Application")
XmpViewer = Activator.CreateInstance(type)
# Opens XMP file
XmpViewer.OpenFile("C:\\Example.xmp")
# ExportXMPtoIntensity with LDT extension
XmpViewer.ExportXMPtoIntensity ("C:\\Example.ldt")
# ExportXMPtoIntensity with IES extension
XmpViewer.ExportXMPtoIntensity ("C:\\Example.ies")
```


