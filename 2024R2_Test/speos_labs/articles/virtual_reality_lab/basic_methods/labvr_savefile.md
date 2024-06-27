# SaveFile 

## Description 

Saves an Speos360 file.

Returns 1 if the call has succeeded, 0 otherwise.

## Syntax 

*object*.SaveFile\(BSTR *strFileName*\) As Int

- *object*: Virtual Reality Lab object

- *strFileName*: absolute filename string


## Example 

```
Sub SaveFile()
'Error Management
Dim Error As Integer
'Declare VRLab
Dim VirtualRealityLab As Object
Set VirtualRealityLab = CreateObject("HDRIViewer.Application")
'Open File
Error = VirtualRealityLab.OpenFile("U:\AMT\API VRLab\InteriorCar.speos360")
'Modify File
Error = VirtualRealityLab.SetSourcePowerById(0, 100)
'Save File
Error = VirtualRealityLab.SaveFile("U:\AMT\API VRLab\InteriorCar_Saved.speos360")
End Sub

```


