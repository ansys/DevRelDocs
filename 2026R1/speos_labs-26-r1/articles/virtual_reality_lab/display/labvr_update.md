# Update 

## Description 

Updates the visualization.

Returns 1 if the call has succeeded, 0 otherwise.

## Syntax 

*object*.Update\(\) As Int

- *object*: Virtual Reality Lab object


## Example 

```
Sub SetAutomaticUpdate_And_Update()
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
MsgBox ("Before Update")
'Deactivate Automatic Update
Error = VirtualRealityLab.SetAutomaticUpdate(False)
'Group of instructions to execute (setting the power of some sources)
Error = VirtualRealityLab.SetSourcePowerById(0, 100)
Error = VirtualRealityLab.SetSourcePowerById(1, 120)
Error = VirtualRealityLab.SetSourcePowerById(2, 150)
' Update the visualization
Error = VirtualRealityLab.Update()
MsgBox ("After Update")
End Sub

```


