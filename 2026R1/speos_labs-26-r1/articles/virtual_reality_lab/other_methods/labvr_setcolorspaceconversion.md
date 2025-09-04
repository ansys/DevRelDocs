# SetColorSpaceConversion

## Description

Sets the conversion mode to use between three modes:

- 0 = Gamut Clipping

- 1 = Maintain lightness and hue

- 2 = Maintain hue

Returns 1 if the call has succeeded, 0 otherwise.

## Syntax

*object*.SetColorSpaceConversion\(int *iPosition*\) As Int

- *object*: Virtual Reality Lab object

- *iPosition:*defines which mode to use between the three conversion modes.

## Example

```
Sub SetColorSpaceConversion
'Error Management
Dim Error As Integer
'Declare VRLab
Dim VirtualRealityLab As Object
Set VirtualRealityLab = CreateObject("HDRIViewer.Application")
'Show VRLab
Error = VirtualRealityLab.Show(True)
'Open File
Error = VirtualRealityLab.OpenFile("U:\AMT\API VRLab\InteriorCar.speos360")
'
    For i = 0 To 2
        Error = VirtualRealityLab.SetColorSpaceConversion(i)
        MsgBox ("Color conversion mode = " & i)
    Next
MsgBox ("Switch between the available color conversion mode")
End Sub
```
