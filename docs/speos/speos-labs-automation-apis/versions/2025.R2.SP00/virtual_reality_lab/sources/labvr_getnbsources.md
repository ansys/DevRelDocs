# GetNbSources 

## Description 

Returns the number of sources.

## Syntax 

*object*.GetNbSources\(\) As Int

- *object*: Virtual Reality Lab object


## Example 

```
Sub GetNbSources()
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
'Evaluate the Number of Sources
Dim SourceNumber
SourceNumber = VirtualRealityLab.GetNbSources()
MsgBox ("Source(s): " & SourceNumber)
End Sub

```


