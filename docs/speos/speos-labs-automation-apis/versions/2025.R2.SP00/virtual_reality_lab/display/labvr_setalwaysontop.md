# SetAlwaysOnTop 

## Description 

Set the window always on the top of the screen. **True** by default.

Returns 1 if the call has succeeded, 0 otherwise.

## Syntax 

*object*.SetAlwaysOnTop\(short *bAlwaysOnTop*\) As Int

- *object*: Virtual Reality Lab object

- *bAlwaysOnTop:*boolean being **True** to set the window always on the top or **False** else


## Example 

```
Sub SetAlwaysOnTop()
'Error Management
Dim Error As Integer
'Declare VRLab
Dim VirtualRealityLab As Object
Set VirtualRealityLab = CreateObject("HDRIViewer.Application")
'Show VRLab
Error = VirtualRealityLab.Show(True)
'Open File
Error = VirtualRealityLab.OpenFile("U:\AMT\API VRLab\InteriorCar.speos360")
'Set Luminance Max
Error = VirtualRealityLab.SetLuminanceMax(100)
'Set the window always on the back
Error = VirtualRealityLab.SetAlwaysOnTop(False)
MsgBox ("VRLab on the Back")
'Set the window always on the top
Error = VirtualRealityLab.SetAlwaysOnTop(True)
MsgBox ("VRLab on the Top")
End Sub

```


