# SetPrimaryGridSteps 

## Description 

Set the steps of the primary grid.

Returns -1 if no error has occurred, 0 otherwise.

## Syntax 

*object*.SetPrimaryGridSteps\(*dStepX*As Double, *dStepY*As Double\) As Integer

- *object*: Virtual Photometric Lab or Virtual Human Vision Lab object

- *dStepX:*horizontal step of the primary grid

- *dStepY:*vertical step of the primary grid


## VB script example 

```
Sub main()
Dim Error As Integer
Set VirtualPhotometricLab = CreateObject("XmpViewer.Application")
Error = VirtualPhotometricLab.Show(True)
Error = VirtualPhotometricLab.OpenFile("C:\TailLampVE.xmp")
Error = VirtualPhotometricLab.ShowPrimaryGrid(True)
Error = VirtualPhotometricLab.ShowRuler(True)
Error = VirtualPhotometricLab.SetPrimaryGridSteps(5, 10) 'Grid steps of the primary grid are user-defined (XPrimaryStep=5mm; YPrimaryStep=10mm)
Error = VirtualPhotometricLab.SetAutomaticGrid(False)
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


