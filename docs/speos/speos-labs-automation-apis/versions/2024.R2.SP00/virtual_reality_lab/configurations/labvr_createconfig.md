# CreateConfig 

## Description 

Creates a new configuration. The name of the new configuration must be unique and not empty. Returns TRUE if the call has succeeded, FALSE otherwise.

## Syntax 

- `object.CreateConfig(BSTR bstrConfigName)` as Boolean
- *object*: Virtual Reality Lab
- *bstrConfigName*: name of the new configuration

## VB script example 

```VB
' Creates HDRIViewer COM server
set HDRIViewer = CreateObject("HDRIViewer.application")  
' Opens Speos360 file  
HDRIViewer.OpenFile("C:\Example.speos360")  
' Creates a new configuration  
HDRIViewer.CreateConfig("My Configuration")
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
# Creates a new configuration
XmpViewer.HDRIViewer ("My Configuration")
```


