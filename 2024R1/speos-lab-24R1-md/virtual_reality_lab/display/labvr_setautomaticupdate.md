# SetAutomaticUpdate 

## Description 

Activates \(**True**\) or deactivates \(**False**\) the automatic update of the visualization. **True** by default.

When activated, the update is carried out after any method and the **Update** method has no use. When deactivated, the update is carried out each time that the **Update** method is used.

This method allows you to execute a group of instructions at one time. Irrelevant changes in the visualization can be avoided this way.

Returns a value different from 0 if no error occurred.

## Syntax 

*object*.SetAutomaticUpdate\(bool *bAutomaticUpdate*\) As Int

- *object*: Virtual Reality Lab object

- *bAutomaticUpdate*: boolean being **True** to activate or **False** to deactivate


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


