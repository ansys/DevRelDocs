# ShowSecondaryGrid 

## Description 

Shows the secondary grid inside the viewer.

Returns 1 if no error has occurred, 0 otherwise.

## Syntax 

*object*.ShowSecondaryGrid\(short *bShowSecondaryGrid*\) As Short

- *object*: Virtual Photometric Lab

- *bShowSecondaryGrid*: boolean being **True** to show or **False** else


## VB script example 

```VB
Sub main()
Dim Error As Integer
Set VirtualPhotometricLab = CreateObject("XmpViewer.Application")
Error = VirtualPhotometricLab.Show(True)
Error = VirtualPhotometricLab.OpenFile("C:\TailLamp.xmp")
'Show the secondary grid
Error = VirtualPhotometricLab.ShowSecondaryGrid(True)
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
# Show the secondary grid
XMPViewer. ShowSecondaryGrid(True)

```


