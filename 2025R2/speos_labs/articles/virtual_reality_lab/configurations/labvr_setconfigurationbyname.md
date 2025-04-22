# SetConfigurationByName 

## Description 

Activates a specific configuration using its name.

Returns 1 if the call has succeeded, 0 otherwise.

## Syntax 

*object*.SetConfigurationByName\(BSTR *strConfigurationName*\) As Int

- *object*: Virtual Reality Lab object

- *strConfigurationName*: string for the name of the configuration from the Virtual Lighting Controller


## Example 

```
Sub SetConfigurationByName()
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
'Activate the Configuration named "Day"
Error = VirtualRealityLab.SetConfigurationByName("Day")
MsgBox ("Day Configuration Set")
'Activate the Configuration named "Night"
Error = VirtualRealityLab.SetConfigurationByName("Night")
MsgBox ("Night Configuration Set")
End Sub

```


