# ShowRuler 

**Note:**

The **Showruler** API is deactivated for theta/phi maps.

## Description 

Shows the rulers inside the viewer.

Returns a value different from 0 if no error occurred.

## Syntax 

*object*.ShowRuler\(short *bShowRuler*\) As Short

- *object*: Virtual Photometric Lab

- *bShowRuler*: boolean being **True** to show or **False** else


## VB script example 

```VB
Sub main()
Dim Error As Integer
Set VirtualPhotometricLab = CreateObject("XmpViewer.Application")
Error = VirtualPhotometricLab.Show (True)
Error = VirtualPhotometricLab.OpenFile ("C:\TailLamp.xmp")
'Show the rulers
Error = VirtualPhotometricLab.ShowRuler (True)
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


