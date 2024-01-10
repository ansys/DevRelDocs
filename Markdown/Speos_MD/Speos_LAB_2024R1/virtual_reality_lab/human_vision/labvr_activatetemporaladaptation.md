# ActivateTemporalAdaptation 

## Description 

Activates the temporal adaption mode for Dynamic Adaptation mode.

Returns 1 if the call has succeeded, 0 otherwise.

## Syntax 

*object*.ActivateTemporalAdaptation \(bool *bActivated*\)

- *object* : Virtual Reality Lab object.

- *bActivated*: boolean activating/deactivating the temporal adaption mode

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
'Set mode Dynamic Adaptation
Error = VirtualRealityLab.SetAdaptationType(1)
MsgBox ("Human vision mode changed to Dynamic Adaptation")
'Activate temporal adaptation mode
Error = VirtualRealityLab.ActivateTemporalAdaptation(true)
MsgBox ("Temporal Adaptation mode activated")
End Sub

```


