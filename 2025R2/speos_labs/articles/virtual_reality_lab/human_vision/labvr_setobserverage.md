# SetObserverAge 

## Description 

Changes the observer age used for Dynamic Temporal Adaptation and Glare effect.

Returns 1 if the call has succeeded, 0 otherwise.

## Syntax 

*object*.SetObserverAge \(int *iAge*\)

- *object*: Virtual Reality Lab object.

- *iAge*: age in years.


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
'Active glare effect
Error = VirtualRealityLab.ActivateGlare(true)
MsgBox ("Glare activated")
'Change observer age to 51
Error = VirtualRealityLab.SetObserverAge(51)
MsgBox ("Observer age changed to 51")
End Sub

```


