# OpenFile 

## Description 

Opens a Speos360 file.

Returns 1 if the call has succeeded, 0 otherwise.

## Syntax 

*object*.OpenFile\(BSTR *strFileName*\) As Int

- *object*: Virtual Reality Lab object

- *strFileName*: absolute filename string


## Example 

```
Sub OpenFile()
'Error Management
Dim Error As Integer
'Declare VRLab
Dim VirtualRealityLab As Object
Set VirtualRealityLab = CreateObject("HDRIViewer.Application")
'Show VRLab
Error = VirtualRealityLab.Show(True)
'Open File
Error = VirtualRealityLab.OpenFile("U:\AMT\API VRLab\InteriorCar.speos360")
MsgBox ("File opened")
End Sub

```


