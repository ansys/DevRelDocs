# SetSourceName 

## Description 

Renames one of the sources. Returns TRUE if the call has succeeded, FALSE otherwise.

## Syntax 

- `object.SetSourceName(int iSource, BSTR bstrSourceName)` as Boolean
- *object*: Virtual Reality Lab
- *iSource*: index of the source in Virtual Lighting Controller \(starting from 0\)
- *bstrSourceName*: the new name of the source

## VB script example 

```VB
' Creates HDRIViewer COM server
set HDRIViewer = CreateObject("HDRIViewer.application")
' Opens observer Speos360 file
HDRIViewer.OpenFile("C:\ObserverView_Stereo.speos360")
' Sets the name of the source number 2
HDRIViewer.SetSourceName(2, "New name of layer #2")
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
#Sets the name of the third source
result = HDRIViewer.SetSourceName(2, “New name of layer #2”)
```


