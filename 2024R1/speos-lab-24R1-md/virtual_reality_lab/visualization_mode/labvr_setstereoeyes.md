# SetStereoEyes 

## Description 

Sets the visualization mode in stereo.

Returns 1 if the call has succeeded, 0 otherwise.

## Syntax 

*object*.SetStereoEyes\(\) As Int

- *object*: Virtual Reality Lab object


## Example 

```
Sub SetStereoEyes()
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
'Change Vizualisation Mode
Error = VirtualRealityLab.SetStereoEyes()
MsgBox ("Stereo Eyes Set")
End Sub

```


