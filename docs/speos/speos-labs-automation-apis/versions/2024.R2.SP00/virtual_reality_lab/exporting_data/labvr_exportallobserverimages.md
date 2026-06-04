# ExportAllObserverImages 

## Description 

This function allows you to export all the sight views as pictures, in native resolution \(not the displayed one\) with the current VLC, color scale and human vision settings. The current file must be an observer Speos360 and the HMI has to be displayed with the Show method. Returns TRUE if the call has succeeded, FALSE otherwise.

## Syntax 

*object*.ExportAllObserverImages\(BSTR bstrDirectoryPath, int iFormat\) as Boolean

- *object*: Virtual Reality Lab object

- *BSTR DirectoryPath*: path of the directory where the result is stored

- *iFormat*: image format \(0: JPG, 1: PNG, 2: EXR, 3: HDR\)
- Bool return
  - True: success
  - False: fail

## Example 

```
'Create HDRIViewer COM server
set HDRIViewer = CreateObject("HDRIViewer.application")' Displays the HMI
HDRIViewer.Show(True)
'Opens observer OptisVR file
HDRIViewer.OpenFile("C:\ObserverView_Stereo.OptisVR")
'Exports image JPG
HDRIViewer.ExportAllObserverImages("C:\", 0)
'Exports image EXR
HDRIViewer.ExportAllObserverImages("C:\", 2)
'Sets right eye
HDRIViewer.SetRightEye()
'Exports image PNG
HDRIViewer.ExportAllObserverImages("C:\", 1)
'Exports image HDR
HDRIViewer.ExportAllObserverImages("C:\", 3)
```


