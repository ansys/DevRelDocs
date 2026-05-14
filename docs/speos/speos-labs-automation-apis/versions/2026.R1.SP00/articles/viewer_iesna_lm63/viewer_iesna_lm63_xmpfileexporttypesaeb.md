# XmpFileExportTypeSAEB 

## Description 

Exports the current IES to a XMP file with the SAEB type using size parameters.

## Syntax 

- `object.XmpFileExportTypeSAEB(LPCTSTR strFileName, const int iNbx, const int iNby , double dWidth, double dHeight)` as Short
- *object*: IES Viewer
- *bstrFileName*: path and filename of the .XMP
- *iNbx*: number sampling in X
- *iNby*: number sampling in Y
- *dWidth*: width of the map
- *dHeight*: height of the map

## VB script example 

```VB
' Creates IESViewer COM server
set IESViewer = CreateObject("IESViewer.Application")
' Opens IES file
IESViewer.OpenFile("C:\IESFile.ies")
' Set Export Xmp
IESViewer.XmpFileExportTypeSAEB("C:\OptisMap.xmp", 100, 100, 180, 180))
```

## IronPython example

```ironpython
from System import Type, Activator
#Creates IESNA LM-63 Viewer COM server
type = Type.GetTypeFromProgID("IESViewer.Application")
IESViewer = Activator.CreateInstance(type)
# Opens IES file
IESViewer.OpenFile("C:\\IESFile.ies")
# Exports to XMP
IESViewer.XmpFileExportTypeSAEB("C:\\OptisMap.xmp", 100, 100, 180, 180)
```


