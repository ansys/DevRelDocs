# ActivateHumanVision 

## Description 

Activates or deactivates the Human Vision mode.

Returns 1 if the call succeeded, 0 otherwise.

## Syntax 

*object*.ActivateHumanVision\(bool *bActivated*\)

- *object* : Virtual Reality Lab object

- *bActivated*: Boolean activating/deactivating the Human Vision mode.


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
'Deactivate Human Vision
Error = VirtualRealityLab.ActivateHumanVision(false)
MsgBox ("Human Vision deactivated")
End Sub

```


