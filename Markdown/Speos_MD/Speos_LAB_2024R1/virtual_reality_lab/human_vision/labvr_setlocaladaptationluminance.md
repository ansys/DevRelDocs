# SetLocalAdaptationLuminance 

## Description 

Sets the adaptation luminance for Local Adaptation without Automatic mode activated.

Returns 1 if the call succeeded, 0 otherwise.

## Syntax 

*object*.SetLocalAdaptationLuminance\(double *dLuminanceAdaptation*\)

- *object* : Virtual Reality Lab object.

- *dLuminanceAdaptation*: adaptation value in Cd/m².


## Example 

```
Sub HumanVision()
'Error Management
Dim Error As Integer
'Declare VRLab
Dim VirtualRealityLab As Object
Set VirtualRealityLab = CreateObject("HDRIViewer.Application")
'Show VRLab
Error = VirtualRealityLab.Show(True)
'Open File
Error = VirtualRealityLab.OpenFile("U:\AMT\API VRLab\InteriorCar.speos360")
'Activate Human Vision
Error = VirtualRealityLab.ActivateHumanVision(true)
MsgBox ("Human Vision activated")
'Set mode Local Adaptation
Error = VirtualRealityLab.SetAdaptationType(0)
MsgBox ("Human vision mode changed to Local Adaptation")
'Set adaptation luminance to 100 Cd/m²
Error = VirtualRealityLab.SetLocalAdaptationLuminance(100.0)
MsgBox ("Adaptation luminance changed to 100.0 Cd/m²")
End Sub

```


