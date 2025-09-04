# SetConfigName 

## Description 

Sets the name of a configuration. The new name of the configuration must be unique.

Returns TRUE if the call has succeeded, FALSE otherwise.

## Syntax 

- `object.GetConfigName(int iConfig, VARIANT* ovConfigName)` as Boolean
- *object*: Virtual Reality Lab
- *iConfig*: index of the configuration in Virtual Lighting Controller \(starting from 0\)
- *bstrConfigName*: new configuration name

## VB script example 

```VB
' Creates HDRIViewer COM server
set HDRIViewer = CreateObject("HDRIViewer.application")  
' Opens Speos360 file  
HDRIViewer.OpenFile("C:\Example.speos360")  
' Sets the name of the configuration 3  
HDRIViewer.SetConfigName(3, "My Configuration")
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
# Sets the name of the configuration number 3
retval = HDRIViewer.SetConfigName(2, “My Configuration”)
```


