# HorizontalFlip 

## Description 

Flips horizontally the map.

Returns 1 if no error has occurred, 0 otherwise.

## Syntax 

*object*.HorizontalFlip\(\) As Short

- *object*: Virtual Photometric Lab


## VB script example 

```VB
Sub main()
Dim Error As Integer
Set VirtualPhotometricLab1 = CreateObject("XmpViewer.Application")
Error = VirtualPhotometricLab1.Show(True)
Error = VirtualPhotometricLab1.OpenFile("C:\TailLamp.xmp")
Set VirtualPhotometricLab2 = CreateObject("XmpViewer.Application")
Error = VirtualPhotometricLab2.Show(True)
Error = VirtualPhotometricLab2.OpenFile("C:\TailLamp.xmp")
' Flip the map horizontally
Error = VirtualPhotometricLab2.HorizontalFlip
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
# Flip the map horizontally
XMPViewer.HorizontalFlip()

```


