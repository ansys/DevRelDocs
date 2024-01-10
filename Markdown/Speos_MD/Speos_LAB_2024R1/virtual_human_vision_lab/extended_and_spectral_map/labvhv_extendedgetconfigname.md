# ExtendedGetConfigName 

## Description 

Gets the name of the configuration number N. The second argument is an output one.

Returns TRUE if the call has succeeded, FALSE otherwise.

## Syntax 

- `object.ExtendedGetConfigName(int iConfig, VARIANT* ovConfigName)` as Boolean
- *object*: Virtual Human Vision Lab
- *iConfig*: index of the configuration in Virtual Lighting Controller \(starting from 0\)
- *ovConfigName*: name of the configuration

## VB script example 

```VB
' Creates VisionLabViewer COM server
set VisionLabViewer = CreateObject("VisionLabViewer.application")
' Opens XMP file
VisionLabViewer.OpenFile("C:\Example.xmp")
' Gets the name of the configuration #3
Dim sConfigName
VisionLabViewer.ExtendedGetConfigName(3, sConfigName) 
' Prints the name of the configuration #3
Dim ConfigName As String
ConfigName = sConfigName(1)
```

## IronPython example

```ironpython
from System import Type, Activator
#Creates VisionLabViewer COM server
type = Type.GetTypeFromProgID("VisionLabViewer.Application")
VisionLabViewer = Activator.CreateInstance(type)
# Opens XMP file
VisionLabViewer.OpenFile("C:\\Example.xmp")
# Gets the name of the configuration number 3
sConfigName = clr.Reference[System.Object]() #Create a default pointer
retval = VisionLabViewer.ExtendedGetConfigName(2, sConfigName)
# Prints the name of the configuration number 3
configName = sConfigName.Value
print configName[0]
```


