# ExtendedGetSourceName 

## Description 

Gets the name of the source number N. The second argument is an output one.

Returns TRUE if the call has succeeded, FALSE otherwise.

## Syntax 

- `object.ExtendedGetSourceName(int iSource, VARIANT* ovSourceName)` as Boolean
- *object*: Virtual Human Vision Lab
- *iSource*: index of the source in Virtual Lighting Controller \(starting from 0\)
- *ovSourceName*: name of the source

## VB script example 

```VB
' Creates VisionLabViewer COM server
set VisionLabViewer = CreateObject("VisionLabViewer.application")  
' Opens XMP file  
VisionLabViewer.OpenFile("C:\Example.xmp")  
' Gets the name of the source #3  
Dim sSourceName  
VisionLabViewer.ExtendedGetSourceName(3, sSourceName)
' Prints the name of the source #3
Dim SourceName As String
SourceName = sSourceName(1)
```

## IronPython example

```ironpython
from System import Type, Activator
#Creates VisionLabViewer COM server
type = Type.GetTypeFromProgID("VisionLabViewer.Application")
VisionLabViewer = Activator.CreateInstance(type)
# Opens XMP file
VisionLabViewer.OpenFile("C:\\Example.xmp")
# Gets the name of the source number 3
sSourceName = clr.Reference[System.Object]() #Creates a default pointer
retval = VisionLabViewer.ExtendedGetSourceName(2, sSourceName)
# Prints the name of the source number 3
sourceName = sSourceName.Value
print sourceName[0]
```


