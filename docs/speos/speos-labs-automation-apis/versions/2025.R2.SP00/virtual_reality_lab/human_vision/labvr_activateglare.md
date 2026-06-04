# ActivateGlare 

## Description 

Activates the Vos \(1984\) glare effect.

Returns 1 if the call has succeeded, 0 otherwise.

## Syntax 

*object*. ActivateGlare \(bool *bActivated*\)

- *object* : Virtual Reality Lab object.

- *bActivated*: true to active glare else false.


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
End Sub

```


