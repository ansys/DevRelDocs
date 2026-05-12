# ShowPrimaryGrid 

## Description 

Shows the primary grid inside the viewer.

Returns -1 if no error has occurred, 0 otherwise.

## Syntax 

*object*.ShowPrimaryGrid\(short *bShowPrimaryGrid*\) As Short

- *object*: Virtual Photometric Lab

- *bShowPrimaryGrid*: boolean being **True** to show or **False** else


## VB script example 

```VB
Sub main()
Dim Error As Integer
Set VirtualPhotometricLab = CreateObject("XmpViewer.Application")
Error = VirtualPhotometricLab.Show(True)
Error = VirtualPhotometricLab.OpenFile("C:\TailLamp.xmp")
'Show the primary grid
Error = VirtualPhotometricLab.ShowPrimaryGrid(True)
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


