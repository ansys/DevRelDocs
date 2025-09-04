# ExtendedCreateConfig 

## Description 

Creates a new configuration. The name of the new configuration has to be specified in the creation method. The name of the new configuration must be unique and not empty.

Returns TRUE if the call has succeeded, FALSE otherwise.

## Syntax 

- `object.ExtendedCreateConfig(BSTR bstrConfigName)` as Boolean
- *object*: Virtual Human Vision Lab
- *bstrConfigName*: name of the configuration

## VB script example 

```VB
' Creates VisionLabViewer COM server
set VisionLabViewer = CreateObject("VisionLabViewer.application")  
' Opens XMP file  
VisionLabViewer.OpenFile("C:\Example.xmp")  
' Creates a new configuration  
VisionLabViewer.ExtendedCreateConfig("My Configuration")
```

## IronPython example

```ironpython
from System import Type, Activator
#Creates VisionLabViewer COM server
type = Type.GetTypeFromProgID("VisionLabViewer.Application")
VisionLabViewer = Activator.CreateInstance(type)
# Opens XMP file
VisionLabViewer.OpenFile("C:\\Example.xmp")
# Creates a new configuration
VisionLabViewer.ExtendedCreateConfig("My Configuration")
```


