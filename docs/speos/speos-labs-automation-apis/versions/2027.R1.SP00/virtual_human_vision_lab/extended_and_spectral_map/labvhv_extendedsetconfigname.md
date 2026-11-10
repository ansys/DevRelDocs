# ExtendedSetConfigName 

## Description 

Sets the name of the configuration number N. The new name of the configuration must be unique and not empty. The second argument is an output one.

Returns TRUE if the call has succeeded, FALSE otherwise.

## Syntax 

- `object.ExtendedSetConfigName(int iConfig, BSTR bstrConfigName)` as Boolean
- *object*: Virtual Human Vision Lab
- *iConfig*: index of the configuration in Virtual Lighting Controller \(starting from 0\)
- *bstrConfigName*: name of the configuration

## VB script example 

```VB
' Creates VisionLabViewer COM server
set VisionLabViewer = CreateObject("VisionLabViewer.application")
' Opens XMP file
VisionLabViewer.OpenFile("C:\Example.xmp")
' Sets the name of the configuration #3
VisionLabViewer.ExtendedSetConfigName(3, "My Configuration")
```

## IronPython example

```ironpython
from System import Type, Activator
#Creates VisionLabViewer COM server
type = Type.GetTypeFromProgID("VisionLabViewer.Application")
VisionLabViewer = Activator.CreateInstance(type)
# Opens XMP file
VisionLabViewer.OpenFile("C:\\Example.xmp")
# Sets the name of the configuration number 3
retval = VisionLabViewer.ExtendedSetConfigName(2, “My Configuration”)
```


