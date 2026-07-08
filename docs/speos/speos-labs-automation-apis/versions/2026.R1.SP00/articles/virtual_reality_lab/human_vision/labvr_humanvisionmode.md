# HumanVisionMode 

## Description 

Activates or deactivates the Human Vision mode and defines its main parameters.

Returns 1 if the call has succeeded, 0 otherwise.

## Syntax 

*object.*HumanVisionMode\(bool *bActive*, bool *bGlare*, int *iAge*\) As Int

- *object*: Virtual Reality Lab object

- *bActive*: boolean activating/deactivating the Human Vision Mode

  - **True**: activate

  - **False**: deactivate

- *bGlare*: boolean activating/deactivating the Glare Effect

  - **True**: activate

  - **False**: deactivate

- *iAge*: integer for the age of the observer


## Example 

```
Sub HumanVisionMode()
'Error Management
Dim Error As Integer
'Declare VRLab
Dim VirtualRealityLab As Object
Set VirtualRealityLab = CreateObject("HDRIViewer.Application")
'Show VRLab
Error = VirtualRealityLab.Show(True)
'Open File
Error = VirtualRealityLab.OpenFile("U:\AMT\API VRLab\InteriorCar.speos360")
'Deactivate Human Vision & Glare Effect for a 25-year observer
Error = VirtualRealityLab.HumanVisionMode(False, False, 25)
'Set Luminance Max
Error = VirtualRealityLab.SetLuminanceMax(100)
MsgBox ("Human Vision deactivated")
'Activate Human Vision & Glare Effect for a 25-year observer
Error = VirtualRealityLab.HumanVisionMode(True, True, 25)
'Set Local Adaptation
Error = VirtualRealityLab.SetLuminanceMax(100)
MsgBox ("Human Vision activated")
End Sub

```


