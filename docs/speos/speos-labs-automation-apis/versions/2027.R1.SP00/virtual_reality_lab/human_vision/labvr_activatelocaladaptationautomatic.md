# ActivateLocalAdaptationAutomatic 

## Description 

Activates the automatic mode for Local Adaptation.

Returns 1 if the call has succeeded, 0 otherwise.

## Syntax 

*object*. ActivateLocalAdaptationAutomatic\(bool *bActivated*\)

- *object* : Virtual Reality Lab object.

- *bActivated*: boolean activating/deactivating the automatic mode for Local Adaptation.

  - **True**: activate

  - **False**: deactivate


## Example 

```
Sub HumanVision()
'Error Management Dim Error As Integer
'Declare VRLab Dim VirtualRealityLab As Object Set VirtualRealityLab = CreateObject("HDRIViewer.Application")
'Show VRLab Error = VirtualRealityLab.Show(True)
'Open File Error = VirtualRealityLab.OpenFile("U:\AMT\API VRLab\InteriorCar.speos360")
'Activate Human Vision Error = VirtualRealityLab.ActivateHumanVision(true) MsgBox ("Human Vision activated")
'Set mode Local Adaptation Error = VirtualRealityLab.SetAdaptationType(0) MsgBox ("Human vision mode changed to Local Adaptation")
'Set automatic adaptation
Error = VirtualRealityLab.ActivateLocalAdaptationAutomatic(true)
MsgBox ("Automatic mode for Local Adaptation enabled")
End Sub

```


