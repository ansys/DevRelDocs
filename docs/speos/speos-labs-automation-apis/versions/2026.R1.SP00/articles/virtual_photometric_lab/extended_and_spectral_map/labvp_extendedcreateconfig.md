# ExtendedCreateConfig 

## Description 

Creates a new configuration. The name of the new configuration has to be specified in the creation method. The name of the new configuration must be unique and not empty.

Returns TRUE if the call has succeeded, FALSE otherwise.

## Syntax 

- `object.ExtendedCreateConfig(BSTR bstrConfigName)` as Boolean
- *object*: Virtual Photometric Lab
- *bstrConfigName*: name of the configuration

## VB script example 

```VB
' Creates XMPViewer COM server
set XmpViewer = CreateObject("XmpViewer.application")  
' Opens XMP file  
XMPViewer.OpenFile("C:\Example.xmp")  
' Creates a new configuration  
XMPViewer.ExtendedCreateConfig("My Configuration")
```

## IronPython example

```ironpython
from System import Type, Activator
#Creates XmpViewer COM server
type = Type.GetTypeFromProgID("XmpViewer.Application")
XmpViewer = Activator.CreateInstance(type)
# Opens XMP file
XmpViewer.OpenFile("C:\\Example.xmp")
# Creates a new configuration
XmpViewer.ExtendedCreateConfig("My Configuration")
```


