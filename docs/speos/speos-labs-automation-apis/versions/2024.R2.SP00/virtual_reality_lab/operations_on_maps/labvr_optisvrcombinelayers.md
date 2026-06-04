# OptisVRCombineLayers 

The Speos360 files to combine must have the same resolution.

## Description 

Retrieves the layers of several maps and combines them in a unique map.

**Note:**

If the first map has N layers and the second map has M layers, the result will be a map with N+M layers.

**Note:**

A layer can be the light contribution coming from a source or of face.

Returns a value different than 0 if no error occurred.

## Syntax 

*object*.OptisVRCombineLayers\(VARIANT\* *pInputListOptisVR*, BSTR *strOutputFileName*\) As Int

- *object*: Virtual Reality Lab object

- *pInputListOptisVR*: tab including the absolute filename strings of all the Speos360 files to combine

- *strOutputFileName*: absolute filename string for the result of the combine operation


## Example 

```
Sub OptisVRCombineLayers()
'Error Management
Dim Error As Integer
'Declare VRLab
Dim VirtualRealityLab As Object
Set VirtualRealityLab = CreateObject("HDRIViewer.Application")
'Definition of the Speos360 files to combine
Dim FileTab
ReDim FileTab(2)
FileTab(0) = "U:\AMT\API VRLab\InteriorCar1.speos360"
FileTab(1) = "U:\AMT\API VRLab\InteriorCar2.speos360"
'Execution of the combine operation
Error = VirtualRealityLab.OptisVRCombineLayers(FileTab, "U:\AMT\API VRLab\InteriorCar_Combined.speos360")
MsgBox ("Files Combined")
End Sub

```


