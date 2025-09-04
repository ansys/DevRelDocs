# ExtendedSetConfigName 

## Description 

Sets the name of the configuration number N. The new name of the configuration must be unique and not empty. The second argument is an output one.

Returns TRUE if the call has succeeded, FALSE otherwise.

## Syntax 

- `object.ExtendedSetConfigName(int iConfig, BSTR bstrConfigName)` as Boolean
- *object*: Virtual Photometric Lab
- *iConfig*: index of the configuration in Virtual Lighting Controller \(starting from 0\)
- *bstrConfigName*: name of the configuration

## VB script example 

```VB
' Creates XMPViewer COM server
set XmpViewer = CreateObject("XmpViewer.application")  
' Opens XMP file  
XMPViewer.OpenFile("C:\Example.xmp")  
' Sets the name of the configuration #3  
XMPViewer.ExtendedSetConfigName(3, "My Configuration")
```

## IronPython example

```ironpython
from System import Type, Activator
#Creates XmpViewer COM server
type = Type.GetTypeFromProgID("XmpViewer.Application")
XmpViewer = Activator.CreateInstance(type)
# Opens XMP file
XmpViewer.OpenFile("C:\\Example.xmp")
# Sets the name of the configuration number 3
retval = XmpViewer.ExtendedSetConfigName(2, “My Configuration”)
```


