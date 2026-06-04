# GetSourceNameExt 

## Description 

Returns the name of one of the sources. The second argument is an output one.

Returns TRUE if the call has succeeded, FALSE otherwise.

## Syntax 

- `object.GetSourceNameExt(int iSource, VARIANT* ovSourceName)` as Boolean
- *object*: Virtual Reality Lab
- *iSource*: index of the source on the Virtual Lighting Controller starting from 0
- *ovSourceName*: name of the source

## VB script example 

```VB
' Creates HDRIViewer COM server
set HDRIViewer = CreateObject("HDRIViewer.application")
' Opens observer Speos360 file
HDRIViewer.OpenFile("C:\ObserverView_Stereo.speos360")
' Gets the name of the source #1
retval = HDRIViewer.GetSourceNameExt(1, SourceName)
Dim SourceName As String
' Prints the name of the source #1
SourceName = sSourceName(1)
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
#Gets the name of the source #1
sSourceName = clr.Reference[System.Object]() #Creates a default pointer
retval = HDRIViewer.GetSourceNameExt(1, sSourceName)
# Prints the name of the source number 3
sourceName = sSourceName.Value
print sourceName[0]
```


