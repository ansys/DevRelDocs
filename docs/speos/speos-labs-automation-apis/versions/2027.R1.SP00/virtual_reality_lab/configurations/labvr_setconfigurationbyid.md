# SetConfigurationById 

## Description 

Activates a specific configuration using its index.

Returns 1 if the call has succeeded, 0 otherwise.

## Syntax 

*object*.SetConfigurationById\(int *uiIDConfiguration*\) As Int

- *object*: Virtual Reality Lab object

- *uiIDConfiguration*: Index of the configuration on the Virtual Lighting Controller starting from 0


## Example 

```
Sub SetConfigurationById()
'Error Management
Dim Error As Integer
'Declare VRLab
Dim VirtualRealityLab As Object
Set VirtualRealityLab = CreateObject("HDRIViewer.Application")
'Show VRLab
Error = VirtualRealityLab.Show(True)
'Open File
Error = VirtualRealityLab.OpenFile("U:\AMT\API VRLab\InteriorCar.speos360")
'Set Luminance Max
Error = VirtualRealityLab.SetLuminanceMax(100)
'Activate the first Configuration
Error = VirtualRealityLab.SetConfigurationById(0)
MsgBox ("First Configuration Set")
'Activate the second Configuration
Error = VirtualRealityLab.SetConfigurationById(1)
MsgBox ("Second Configuration Set")
End Sub

```


