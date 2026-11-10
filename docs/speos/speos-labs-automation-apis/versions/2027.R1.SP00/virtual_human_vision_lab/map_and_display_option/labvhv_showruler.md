# ShowRuler 

## Description 

Shows the rulers inside the viewer.

Returns 1 if no error has occurred, 0 otherwise.

## Syntax 

*object*.ShowRuler\(short *bShowRuler*\) As Short

- *object*: Virtual Human Vision Lab object

- *bShowRuler*: boolean being **True** to show or False else


## Example 

```
Sub main()
Dim Error As Integer
Set VirtualHumanVisionLab = CreateObject("VisionLabViewer.Application")
Error = VirtualHumanVisionLab.Show(True)
Error = VirtualHumanVisionLab.OpenFile("C:\TailLampVE.xmp")
'Show the rulers
Error = VirtualHumanVisionLab.ShowRuler(True)
End Sub

```


