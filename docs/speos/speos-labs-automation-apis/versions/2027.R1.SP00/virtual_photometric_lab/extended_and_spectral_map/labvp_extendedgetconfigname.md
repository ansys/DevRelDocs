# ExtendedGetConfigName 

## Description 

Gets the name of the configuration number N. The second argument is an output one.

Returns TRUE if the call has succeeded, FALSE otherwise.

## Syntax 

- `object.ExtendedGetConfigName(int iConfig, VARIANT* ovConfigName)` as Boolean
- *object*: Virtual Photometric Lab
- *iConfig*: index of the configuration in Virtual Lighting Controller \(starting from 0\)
- *ovConfigName*: name of the configuration

## VB script example 

```VB
' Creates XMPViewer COM server
set XmpViewer = CreateObject("XmpViewer.application")  
' Opens XMP file  
XMPViewer.OpenFile("C:\Example.xmp")  
' Gets the name of the configuration #3  
Dim sConfigName  
XMPViewer.ExtendedGetConfigName(3, sConfigName)
' Prints the name of the configuration #3
Dim ConfigName As String
ConfigName = sConfigName(1)
```

## IronPython example

```ironpython
from System import Type, Activator
#Creates XMPViewer COM server
type = Type.GetTypeFromProgID("XmpViewer.Application")
XmpViewer = Activator.CreateInstance(type)
# Opens XMP file
XmpViewer.OpenFile("C:\\Example.xmp")
# Gets the name of the configuration number 3
sConfigName = clr.Reference[System.Object]() #Creates a default pointer
retval = XmpViewer.ExtendedGetConfigName(2, sConfigName)
# Prints the name of the configuration number 3
configName = sConfigName.Value
print configName[0]
```


