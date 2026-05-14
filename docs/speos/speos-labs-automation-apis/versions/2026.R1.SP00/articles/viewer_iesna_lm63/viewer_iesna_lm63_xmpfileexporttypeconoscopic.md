# XmpFileExportTypeConoscopic 

## Description 

Exports the current IES to a XMP file with the Conoscopic type.

## Syntax 

- `object.XmpFileExportTypeConoscopic(LPCTSTR strFileName, const int iNbx, const int iNby , double dThetaMax, double dAxisTheta0X, double dAxisTheta0Y, double dAxisTheta0Z, double dVectorPhiOX, double dVectorPhiOY, double dVectorPhiOZ)` as Short
- *object*: IES Viewer
- *bstrFileName*: path and filename of the .XMP
- *iNbx*: number sampling in X
- *iNby*: number sampling in Y
- *dThetaMax*: width of the map
- *dAxisTheta0X*: axis theta 0 in X
- *dAxisTheta0Y*: axis theta 0 in Y
- *dAxisTheta0Z*: axis theta 0 in Z
- *dVectorPhiOX*: vector Phi on X
- *dVectorPhiOY*: vector Phi on Y
- *dVectorPhiOZ*: vector Phi on Z

## VB script example 

```VB
' Creates IESViewer COM server
set IESViewer = CreateObject("IESViewer.Application")
' Opens IES file
IESViewer.OpenFile("C:\IESFile.ies")
' Set Export Xmp
IESViewer.XmpFileExportTypeConoscopic("C:\OptisMap.xmp", 100, 100, 90, 0, 0, 1, 1, 0, 0)
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
IESViewer.XmpFileExportTypeConoscopic("C:\\OptisMap.xmp", 100, 100, 90, 0, 0, 1, 1, 0, 0)  
```


