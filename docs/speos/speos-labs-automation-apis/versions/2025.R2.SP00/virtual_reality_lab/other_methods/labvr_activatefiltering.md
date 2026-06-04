# ActivateFiltering

## Description

Activates or deactivates the filtering.

Returns 1 if the call has succeeded, 0 otherwise.

## Syntax

*object*.ActivateFiltering\(bool *bActivated*\)

- *object* : Virtual Reality Lab object

- *bActivated*: Boolean activating/deactivating the filtering mode.

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
'Activate Filtering
Error = VirtualRealityLab.ActivateFiltering(true)
MsgBox ("Filtering activated")
End Sub

```
