# SetLeftEye 

## Description 

Sets the visualization mode in left eye alone.

Returns 1 if the call has succeeded, 0 otherwise.

## Syntax 

*object*.SetLeftEye\(\) As Int

- *object*: Virtual Reality Lab object


## Example 

```
Sub SetLeftEye()
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
Error = VirtualRealityLab.SetLeftEye()
MsgBox ("Left Eye Set")
End Sub

```


