# SetAutomaticGrid 

## Description 

Set the mode of definition for the grid. The grid can be defined automatically \(**True**\) or user-defined \(**False**\)

Returns -1 if no error has occurred, 0 otherwise.

## Syntax 

*object*.SetAutomaticGrid\(bAutomaticGrid As Integer\) As Integer

- *object*: Virtual Photometric Lab or Virtual Human Vision Lab object

- *bAutomaticGrid*: boolean being **True** \(automatic mode\) or **False** \(user-defined mode\)


## VB script example 

```VB
Sub main()
Dim Error As Integer
Set VirtualPhotometricLab = CreateObject("XmpViewer.Application")
Error = VirtualPhotometricLab.Show(True)
Error = VirtualPhotometricLab.OpenFile("C:\TailLampVE.xmp")
Error = VirtualPhotometricLab.ShowPrimaryGrid(True)
Error = VirtualPhotometricLab.ShowRuler(True)
Error = VirtualPhotometricLab.SetPrimaryGridSteps(5, 10)
Error = VirtualPhotometricLab.SetAutomaticGrid(False) 'Activate the user-defined grid
End Sub

```

## IronPython example

```ironpython
from System import Type, Activator
type = Type.GetTypeFromProgID("XMPViewer.Application")
XMPViewer = Activator.CreateInstance(type)
# Opens a file
MyFile = ("C:\\tmp\\XMPViewer\\Exemple.xmp")
XMPViewer.OpenFile(MyFile)
XMPViewer.Show(1)
XMPViewer.ShowPrimaryGrid(True)
XMPViewer.ShowRuler(True)
XMPViewer.SetPrimaryGridSteps(5, 10)
XMPViewer.SetAutomaticGrid(False)

```


