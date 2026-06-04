# SetAdaptationType 

## Description 

Sets the human vision mode \(local or dynamic\).

Returns 1 if the call succeeded, 0 otherwise.

## Syntax 

*object*.SetAdaptationType\(int *nAdaptationType*\)

- *object* : Virtual Reality Lab object.

- *nAdaptationType*: 0 for Local Adaptation, 1 for Dynamic Adaptation.


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
'Change mode to Dynamic Adaptation
Error = VirtualRealityLab.SetAdaptationType(1)
MsgBox ("Human vision mode changed to Dynamic Adaptation")
End Sub

```


