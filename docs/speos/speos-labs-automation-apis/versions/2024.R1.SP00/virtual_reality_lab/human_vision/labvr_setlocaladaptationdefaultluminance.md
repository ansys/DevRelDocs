# SetLocalAdaptationDefaultLuminance 

## Description 

Resets the default adaptation value for Local Adaptation mode.

Returns 1 if the call succeeded, 0 otherwise.

## Syntax 

*object*.SetLocalAdaptationDefaultLuminance\(\)

- *object* : Virtual Reality Lab object.


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
'Set adaptation luminance to default value
Error = VirtualRealityLab.SetLocalAdaptationDefaultLuminance()
MsgBox ("Adaptation luminance reset to default value")
End Sub

```


