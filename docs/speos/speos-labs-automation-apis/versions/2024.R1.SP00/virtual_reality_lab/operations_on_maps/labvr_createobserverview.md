# CreateObserverView 

## Description 

Creates an observer Speos360 file from a set of XMP files. Returns TRUE if the call has succeeded, FALSE otherwise.

## Syntax 

- `object.CreateObserverView(VARIANT* pInputListXMP, VARIANT* pInputListHorizontalAngle, VARIANT* pInputListVerticalAngle, BSTR bstrOutputFileName)` as Boolean
- *object*: Virtual Reality Lab
- *pInputListXMP*: array of the XMP absolute filename strings
- *pInputListHorizontalAngle*: array of VARIANT for the horizontal angle of each XMP file
- *pInputListVerticalAngle*: array of VARIANT for the vertical angle of each XMP file
- *bstrOutputFileName*: path and filename of the template \(should end by .speos360\)

## VB script example 

```VB
' Creates HDRIViewer COM server
set HDRIViewer = CreateObject("HDRIViewer.application
Dim XmpFiles
ReDim XmpFiles(2)
XmpFiles(0) = "C:\ObserverView_Stereo_Right_270.xmp"
XmpFiles(1) = "C:\ObserverView_Stereo_Right_274.xmp"
XmpFiles(2) = "C:\ObserverView_Stereo_Right_278.xmp"
vOffsetHorizontalAngles = array(0, 4, 8)
vOffsetVerticalAngles = array(0, 0, 0)
' Creates Observer View result
HDRIViewer.CreateObserverView(XmpFiles, vOffsetHorizontalAngles, vOffsetVerticalAngles, "C:\Example.speos360")
```


