# Show 

## Description 

Displays or hides the window for an instance of Virtual Reality Lab.

Returns 1 if the call has succeeded, 0 otherwise.

## Syntax 

*object*.Show\(bool *bDraw*\) As Int

- *object*: Virtual Reality Lab object

- *bDraw*: boolean being **True** to display or **False** to hide


## Example 

```
Sub Show()
'Error Management
Dim Error As Integer
'Declare VRLab
Dim VirtualRealityLab As Object
Set VirtualRealityLab = CreateObject("HDRIViewer.Application")
'Open File
Error = VirtualRealityLab.OpenFile("U:\AMT\API VRLab\InteriorCar.speos360")
'Set Luminance Max
Error = VirtualRealityLab.SetLuminanceMax(100)
'Show VRLab
Error = VirtualRealityLab.Show(True)
MsgBox ("VRLab shown")
End Sub

```


