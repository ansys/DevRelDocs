# SetAlwaysOnTop 

## Description 

Sets the window always on the top of the screen. **True** by default.

Returns a value different than 0 if no error occurred.

## Syntax 

*object*.SetAlwaysOnTop\(short *bAlwaysOnTop*\) As Short

- *object*: Virtual Human Vision Lab object

- *bAlwaysOnTop*: boolean being **True** to set the window always on the top or **False** else


## Example 

```
Sub main()
Dim Error As Integer
Set VirtualHumanVisionLab = CreateObject("VisionLabViewer.Application")
Error = VirtualHumanVisionLab.Show(True)
Error = VirtualHumanVisionLab.OpenFile("C:\TailLampVE.xmp")
'Show the secondary grid
Error = VirtualHumanVisionLab.SetAlwaysOnTop(True)
End Sub

```


