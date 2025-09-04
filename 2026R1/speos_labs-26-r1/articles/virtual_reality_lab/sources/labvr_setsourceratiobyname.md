# SetSourceRatioByName 

## Description 

Sets the power of a source by defining a ratio and using its name.

Returns 1 if the call has succeeded, 0 otherwise.

## Syntax 

*object*.SetSourceRatioByName\(BSTR *strLayerName*, double *dRatio*\) As Int

- *object*: Virtual Reality Lab object

- *strLayerName*: string for the name of the source from the Virtual Lighting Controller

- *dRatio*: ratio defining the power of the source \(%\)


## Example 

```
Sub SetSourceRatioByName()
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
'Set the Power of the Source "RedGuide" to half its initial power
Error = VirtualRealityLab.SetSourceRatioByName("RedGuide", 50)
MsgBox ("After Source Ratio Set")
End Sub

```


