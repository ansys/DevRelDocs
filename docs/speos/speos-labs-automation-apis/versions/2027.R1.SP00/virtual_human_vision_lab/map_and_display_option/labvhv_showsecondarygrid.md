# ShowSecondaryGrid 

## Description 

Shows the secondary grid inside the viewer.

Returns 1 if no error has occurred, 0 otherwise.

## Syntax 

*object*.ShowSecondaryGrid\(short bShowSecondaryGrid\) As Short

- *object*: Virtual Human Vision Lab object

- *bShowSecondaryGrid*: boolean being **True** to show or False else


## Example 

```
Sub main()
Dim Error As Integer
Set VirtualHumanVisionLab = CreateObject("VisionLabViewer.Application")
Error = VirtualHumanVisionLab.Show(True)
Error = VirtualHumanVisionLab.OpenFile("C:\TailLampVE.xmp")
'Show the secondary grid
Error = VirtualHumanVisionLab.ShowSecondaryGrid(True)
End Sub

```


