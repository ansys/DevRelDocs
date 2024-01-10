# SetSourcePowerById 

## Description 

Sets the power of a source using its index.

Returns 1 if the call has succeeded, 0 otherwise.

## Syntax 

*object*.SetSourcePowerById\(int *uiIDSource*, double *dPowerLumen*\) As Int

- *object*: Virtual Reality Lab object

- *uiIDSource*: index of the source on the Virtual Lighting Controller starting from 0

- *dPowerLumen*: power of the source value \(lm\)


## Example 

```
Sub SetSourcePowerById()
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
'Set the Power of the first Source to 100lm
Error = VirtualRealityLab.SetSourcePowerById(0, 100)
MsgBox ("After Source Power Set")
End Sub

```


