# SetSourceRatioById 

## Description 

Sets the power of a source by defining a ratio and using its index.

Returns 1 if the call has succeeded, 0 otherwise.

## Syntax 

*object*.SetSourceRatioById\(int *uiIDSource*, double *dRatio*\) As Int

- *object*: Virtual Reality Lab object

- *uiIDSource*: index of the source on the Virtual Lighting Controller starting from 0

- *dRatio*: ratio defining the power of the source \(%\)


## Example 

```
Sub SetSourceRatioById()
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
MsgBox ("Before Source Ratio Set")
'Set the Power of the first Source to half its initial power
Error = VirtualRealityLab.SetSourceRatioById(0, 50)
MsgBox ("After Source Ratio Set")
End Sub

```


