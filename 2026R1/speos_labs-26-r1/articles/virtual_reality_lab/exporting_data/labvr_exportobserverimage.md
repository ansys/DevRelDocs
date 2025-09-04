# ExportObserverImage 

## Description 

Exports the current view as a picture, in native resolution \(not the displayed one\) with the current VLC, color scale and human vision settings. The current file must be an observer Speos360 and the HMI has to be displayed with the Show method. Returns TRUE if the call has succeeded, FALSE otherwise.

## Syntax 

- `object.ExportObserverImage(BSTR bstrFileName)` as Boolean
- *object*: Virtual Reality Lab
- *bstrFileName*: path and filename of the .JPG, .PNG, .EXR or .HDR files

## VB script example 

```VB
' Creates HDRIViewer COM server
set HDRIViewer = CreateObject("HDRIViewer.application")
' Displays the HMI
HDRIViewer.Show(True)
' Opens observer Speos360 file
HDRIViewer.OpenFile("C:\ObserverView_Stereo.speos360")
' Exports image JPG
HDRIViewer.ExportObserverImage("C:\ObserverView_Stereo.JPG")
' Exports image PNG
HDRIViewer.ExportObserverImage("C:\ObserverView_Stereo.PNG")
' Exports image EXR
HDRIViewer.ExportObserverImage("C:\ObserverView_Stereo.EXR")
' Exports image HDR
HDRIViewer.ExportObserverImage("C:\ObserverView_Stereo.HDR")
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
#Displays the HMI
HDRIViewer.Show(True)     
#Exports image JPG
HDRIViewer.ExportObserverImage("C:\\ObserverView_Stereo.JPG")
#Exports image PNG
HDRIViewer.ExportObserverImage("C:\\ObserverView_Stereo.PNG")
#Exports image EXR
HDRIViewer.ExportObserverImage("C:\\ObserverView_Stereo.EXR")
#Exports image HDR
HDRIViewer.ExportObserverImage("C:\\ObserverView_Stereo.HDR")
         
```


