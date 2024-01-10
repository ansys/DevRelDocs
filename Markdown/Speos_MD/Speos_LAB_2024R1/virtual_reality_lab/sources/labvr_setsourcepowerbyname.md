# SetSourcePowerByName 

## Description 

Sets the power of a source using its name.

Returns 1 if the call has succeeded, 0 otherwise.

## Syntax 

*object*.SetSourcePowerByName\(BSTR *strLayerName*, double *dPowerLumen*\) As Int

- *object*: Virtual Reality Lab object

- *strLayerName*: string for the name of the source from the Virtual Lighting Controller

- *dPowerLumen*: power of the source value \(lm\)


## Example 

```
Sub SetSourcePowerByName()
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
MsgBox ("Before Source Power Set")
'Set the Power of the source called "RedGuide" to 100lm
Error = VirtualRealityLab.SetSourcePowerByName("RedGuide", 100)
MsgBox ("After Source Power Set")
End Sub

```


