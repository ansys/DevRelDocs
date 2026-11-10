# XmpFileExportTypeSAEBByExtent 

## Description 

Exports the current IES to a XMP file with the SAEB type. Minimum and maximum parameters are used to size the exported map.

## Syntax 

- `object.XmpFileExportTypeSAEBByExtent(LPCTSTR strFileName, const int iNbx, const int iNby , double dXmin, double dXmax, double dYmin, double dYmax)` as Short
- *object*: IES Viewer
- *bstrFileName*: path and filename of the .XMP
- *iNbx*: number sampling in X
- *iNby*: number sampling in Y
- *dXmin*: minimum position of the map in X
- *dXmax*: maximum position of the map in X
- *dYmin*: minimum position of the map in Y
- *dYmax*: maximum position of the map in Y

## VB script example 

```VB
' Creates IESViewer COM server
set IESViewer = CreateObject("IESViewer.Application")
' Opens IES file
IESViewer.OpenFile("C:\IESFile.ies")
' Set Export Xmp
IESViewer.XmpFileExportTypeSAEBByExtent("C:\OptisMap.xmp", 100, 100, -90, 90, -90, 90))
```

## IronPython example

```ironpython
from System import Type, Activator#Creates IESNA LM-63 Viewer COM server
#Creates IESNA LM-63 Viewer COM server
type = Type.GetTypeFromProgID("IESViewer.Application")
IESViewer = Activator.CreateInstance(type)
#Opens IES file
IESViewer.OpenFile("C:\\IESFile.ies")
#Exports to XMP
IESViewer.XmpFileExportTypeSAEBByExtent("C:\\OptisMap.xmp", 100, 100, -90, 90, -90, 90)
```


