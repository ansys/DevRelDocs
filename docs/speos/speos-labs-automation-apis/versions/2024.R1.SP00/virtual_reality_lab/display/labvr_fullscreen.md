# FullScreen 

## Description 

Activates or deactivates the full screen mode.

Returns 1 if the call has succeeded, 0 otherwise.

## Syntax 

*object*.FullScreen\(bool *bState*\) As Int

- *object*: Virtual Reality Lab object

- *bState:* Boolean activating/deactivating the full screen mode.


## Example 

```
Sub FullScreen()
'Error Management
Dim Error As Integer
'Declare VRLab
Dim VirtualRealityLab As Object
Set VirtualRealityLab = CreateObject("HDRIViewer.Application")
'Open File
Error = VirtualRealityLab.OpenFile("U:\AMT\API VRLab\InteriorCar.speos360")
'Set Luminance Max
Error = VirtualRealityLab.SetLuminanceMax(100)
'FullScreenVRLab
Error = VirtualRealityLab.FullScreen(True)
MsgBox ("VRLab FullScreen")
End Sub

```


