# ShowPrimaryGrid 

## Description 

Shows the primary grid inside the viewer.

Returns 1 if no error has occurred, 0 otherwise.

## Syntax 

*object*.ShowPrimaryGrid\(short *bShowPrimaryGrid*\) As Short

- *object*: Virtual Human Vision Lab object

- *bShowPrimaryGrid*: boolean being **True** to show or False else


## Example 

```
Sub main()
Dim Error As Integer
Set VirtualHumanVisionLab = CreateObject("VisionLabViewer.Application")
Error = VirtualHumanVisionLab.Show(True)
Error = VirtualHumanVisionLab.OpenFile("C:\TailLampVE.xmp")
'Show the primary grid
Error = VirtualHumanVisionLab.ShowPrimaryGrid(True)
End Sub

```


