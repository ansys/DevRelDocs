# GetNbSource 

## Description 

Returns the number of sources of the xm3 map.

## Syntax 

*object*.GetNbSource\(\) As Short

- *object*: Virtual 3D Photometric Lab object


## Example 

```
Sub main()
 Dim test As Integer
Dim NbC As Integer
Dim NbS As Integer
Dim MyXM3Viewer As Object
Dim retval
 Dim MyFolder As String
MyFolder = "PathWorkSpeace"
 Dim MyFile As String
MyFile = "NameOfXm3Map.xm3"
 Set MyXM3Viewer = CreateObject("Xm3Viewer.Application")
 retval = MyXM3Viewer.OpenFile(MyFolder & MyFile)
 retval = MyXM3Viewer.Show(1)
 NbC = MyXM3Viewer.GetNbConfig()
ftextfile.writeline "Nb config : " & NbC
 NbS = MyXM3Viewer.GetNbSource()
ftextfile.writeline "Nb Nb Source : " & NbS
 For i = 0 To NbC - 1
test = MyXM3Viewer.SetActiveConfig(i)
Next i
 For i = -2 To NbS - 1
test = MyXM3Viewer.SetActiveSource(i)
Next i
 For i = 0 To 3
test = MyXM3Viewer.SetActiveSurfaceUnit(i)
test = MyXM3Viewer.GetActiveSurfaceUnit()
ftextfile.writeline "Unit: " & test
Next i
 End Sub

```


