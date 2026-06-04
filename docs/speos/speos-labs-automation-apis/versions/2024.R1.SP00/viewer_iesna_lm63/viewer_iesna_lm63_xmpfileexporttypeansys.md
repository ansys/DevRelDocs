# XmpFileExportTypeAnsys 

## Description 

Exports the current IES to a XMP file with the Optis intensity type using the size parameters.

**Note:** The OPTIS Intensity XMP map type is in end of life as of version 2023 R2, and no longer available in the user interface

## Syntax 

- `object.XmpFileExportTypeAnsys(LPCTSTR strFileName, const int iNbx, const int iNby , double dWidth, double dHeight, double dAxisTheta0X, double dAxisTheta0Y, double dAxisTheta0Z,double dVectorPhiOX, double dVectorPhiOY, double dVectorPhiOZ)` as Short
- *object*: IES Viewer
- *bstrFileName*: path and filename of the .XMP
- *iNbx*: number sampling in X
- *iNby*: number sampling in Y
- *dWidth*: Width of the map
- *dHeight*: Height of the map
- *dAxisTheta0X*: Axis theta 0 in X
- *dAxisTheta0Y*: Axis theta 0 in Y
- *idAxisTheta0Z*: Axis theta 0 in Z
- *dVectorPhiOX*: Vector Phi 0 in X
- *dVectorPhiOY*: Vector Phi 0 in Y
- *dVectorPhiOZ*: Vector Phi 0 in Z

## VB script example 

```VB
' Creates IESViewer COM server
set IESViewer = CreateObject("IESViewer.Application")
' Opens IES file
IESViewer.OpenFile("C:\IESFile.ies")
' Set Export Xmp
IESViewer.XmpFileExportTypeAnsys("C:\OptisMap.xmp", 100, 100, 180, 180, 0, 0, 1, 1, 0, 0))
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
IESViewer.XmpFileExportTypeAnsys("C:\\OptisMap.xmp", 100, 100, 90, 90, 0, 0, 1, 1, 0, 0)  
```


