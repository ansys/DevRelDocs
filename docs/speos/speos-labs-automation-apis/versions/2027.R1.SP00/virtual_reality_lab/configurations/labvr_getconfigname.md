# GetConfigName 

## Description 

Gets the name of the configuration number N. The second argument is an output one.

Returns TRUE if the call has succeeded, FALSE otherwise.

## Syntax 

- `object.GetConfigName(int iConfig, VARIANT* ovConfigName)` as Boolean
- *object*: Virtual Reality Lab
- *iConfig*: index of the configuration in Virtual Lighting Controller \(starting from 0\)
- *ovConfigName*: configuration name

## VB script example 

```VB
' Creates HDRIViewer COM server
set HDRIViewer = CreateObject("HDRIViewer.application")
' Opens Speos360 file
HDRIViewer.OpenFile("C:\Example.speos360")
' Gets the name of the configuration 3
Dim sConfigName
HDRIViewer.GetConfigName(3, sConfigName)
' Prints the name of the configuration 3
Dim ConfigName as String
ConfigName = sConfigName(1)
```

## IronPython example

```ironpython
from System import Type, Activator
#Creates HDRIViewer COM server
type = Type.GetTypeFromProgID("HDRIViewer.application")
HDRIViewer = Activator.CreateInstance(type)
#Opens observer Speos360 file
strSpeos360File = "C:\\ObserverView_Stereo.speos360"
HDRIViewer.OpenFile(strSpeos360File)
# Gets the name of the configuration number 3
sConfigName = clr.Reference[System.Object]() #Creates a default pointer
retval = HDRIViewer.GetConfigName(2, sConfigName)
# Prints the name of the configuration number 3
configName = sConfigName.Value
print configName[0]
```


