# SetSecondaryGraduationNbs 

## Description 

Set the number of graduations of the secondary grid.

Returns -1 if no error has occurred, 0 otherwise.

## Syntax 

*object*.SetSecondaryGraduationNbs\(*iGradNbX*As Long, *iGradNbY*As Long\) As Integer

- *object*: Virtual Photometric Lab or Virtual Human Vision Lab object

- *iGradNbX:*horizontal number of graduations for the secondary grid

- *iGradNbY:*vertical number of graduations for the secondary grid


## Example 

```
Sub main()
Dim Error As Integer
Set VirtualPhotometricLab = CreateObject("XmpViewer.Application")
Error = VirtualPhotometricLab.Show(True)
Error = VirtualPhotometricLab.OpenFile("C:\TailLampVE.xmp")
Error = VirtualPhotometricLab.ShowPrimaryGrid(True)
Error = VirtualPhotometricLab.ShowRuler(True)
Error = VirtualPhotometricLab.SetAutomaticGrid(False)
Error = VirtualPhotometricLab.SetSecondaryGraduationNbs(10, 10) 'Graduation number of the secondary grid is user-defined (XSecondaryGraduationNb=5mm; YSecondaryGraduationNb=10mm)
Error = VirtualPhotometricLab.ShowSecondaryGrid(True)
End Sub

```


