# SetLuminanceMax

## Description

Set Luminance Max or Adaptive Luminance when Human Vision mode is activated.

Returns 1 if the call has succeeded, 0 otherwise.

## Syntax

*object.*SetLuminanceMax\(double *dValue*\) As Int

- *object*: Virtual Reality Lab object

- *dValue*: Luminance Max value \(cd/m²\) or Adaptive Luminance value \(cd/m²\) when Human Vision mode is activated

## Example

```
Sub SetLuminanceMax()
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
Error = VirtualRealityLab.SetLuminanceMax(500)
MsgBox ("First Luminance Set")
'Set Luminance Max
Error = VirtualRealityLab.SetLuminanceMax(100)
MsgBox ("Second Luminance Set")
End Sub

```
