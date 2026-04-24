# ActivateVisionModeEvaluationTypeAverage 

## Description 

Changes the mesopic vision mode evaluation type from maximum luminance of the map to average luminance of the map.

This define how the photopic, mesopic or scotopic vision mode is estimated.

Returns 1 if the call has succeeded, 0 otherwise.

## Syntax 

*object*.ActivateVisionModeEvaluationTypeAverage\(bool bActivated\)

- *object* : Virtual Reality Lab object.

- *bActivated*: boolean activating/deactivating the average evaluation

  - **True**: activate

  - **False**: deactivate.


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
'Change vision mode evaluation to average
Error = VirtualRealityLab.ActivateVisionModeEvaluationTypeAverage(true)
MsgBox ("Vision mode average evaluation activated")
End Sub

```


