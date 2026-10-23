# BuildBSDF180 

## Description 

Combines two BSDF files, one for the normal direction and one for the opposite direction.

Returns TRUE if the call has succeeded, FALSE otherwise.

## Syntax 

- `object.BuildBSDF180(BSTR bstrNormalFileName, BSTR bstrOppositeFileName)` as Boolean
- *object*: BSDF BRDF Anisotropic Surface Viewer
- *bstrNormalFileName*: path and filename of the BSDF for normal direction
- *bstrOppositeFileName*: path and filename of the BSDF for opposite direction

## VB script example 

```VB
' Create BSDF viewer
set BSDFViewer = CreateObject("SimpleBSDFSurfaceViewer.Application")
' Builds BSDF 180
BSDFViewer.BuildBSDF180("C:\Example1.brdf", "C:\Example2.brdf")
```

## IronPython example

```ironpython
from System import Type, Activator
#Creates BSDF Viewer COM server
type = Type.GetTypeFromProgID("SimpleBSDFSurfaceViewer.Application")
BSDFViewer = Activator.CreateInstance(type)
# Builds BSDF 180
BSDFViewer.BuildBSDF180("C:\\Example1.brdf", "C:\\Example2.brdf")
```


