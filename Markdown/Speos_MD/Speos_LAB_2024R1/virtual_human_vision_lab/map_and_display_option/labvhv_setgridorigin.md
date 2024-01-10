# SetGridOrigin 

## Description 

Set the position of the grid origin.

Returns -1 if no error has occurred, 0 otherwise.

## Syntax 

*object*.SetGridOrigin\(*dOriginX*As Double, *dOriginY*As Double\) As Integer

- *object*: Virtual Photometric Lab or Virtual Human Vision Lab object

- *dOriginX:*horizontal position of the grid origin

- *dOriginY:*vertical position of the grid origin


## Example 

```
Sub main()
Dim Error As Integer
Set VirtualPhotometricLab = CreateObject("XmpViewer.Application")
Error = VirtualPhotometricLab.Show(True)
Error = VirtualPhotometricLab.OpenFile("C:\TailLampVE.xmp")
Error = VirtualPhotometricLab.ShowPrimaryGrid(True)
Error = VirtualPhotometricLab.ShowRuler(True)
Error = VirtualPhotometricLab.SetGridOrigin(2, 3) 'Origin is user-defined (XOrigin=2mm; YOrigin=3mm)
Error = VirtualPhotometricLab.SetAutomaticGrid(False)
End Sub

```


