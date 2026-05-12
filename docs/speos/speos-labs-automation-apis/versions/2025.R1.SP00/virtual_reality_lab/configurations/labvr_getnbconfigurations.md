# GetNbConfigurations 

## Description 

Returns the number of configurations defined in the Virtual Lighting Controller.

## Syntax 

*object*.GetNbConfigurations\(\) As Int

- *object*: Virtual Reality Lab object


## Example 

```
Sub GetNbConfigurations()
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
'Evaluate the Number of Configurations
Dim ConfigurationNumber
ConfigurationNumber = VirtualRealityLab.GetNbConfigurations()
MsgBox ("Configuration(s): " & ConfigurationNumber)
End Sub

```


