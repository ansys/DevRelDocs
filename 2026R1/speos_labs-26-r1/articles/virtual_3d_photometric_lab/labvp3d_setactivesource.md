# SetActiveSource 

## Description 

Sets the active source of the xm3 map.

## Syntax 

*object*.SetActiveSource\(int *iSource*\) As Short

- *object*: Virtual 3D Photometric Lab object

- *iSource*: index of the source to activate


You can also set the iSource behavior as follows:

- **-1** to set all sources activated at 100% power ratio \(equivalent to the All layers mode in Virtual Photometric Lab\).

- **-2** to activate all sources depending on their current power ratio \(equivalent to the User defined mode in Virtual Photometric Lab\).


## VB script example

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

## IronPython example

```ironpython
from System import Type, Activator
type = Type.GetTypeFromProgID("Xm3Viewer.Application")
MyXm3Viewer = Activator.CreateInstance(type)
#Open the file
MyFolder = "PathWorkSpeace"
MyFile = "NameOfXm3Map.xm3"
MyXm3Viewer.OpenFile(MyFolder + MyFile)
MyXm3Viewer.Show(1)
NbC = MyXM3Viewer.GetNbConfig()
print "Nb config: " & str(NbC)
NbS = MyXM3Viewer.GetNbSource()
print "Nb source: " & str(NbS)
i = 0
while i < NbC:
	MyXM3Viewer.SetActiveConfig(i)
	i += 1
i = 0
while i < NbS:
	MyXM3Viewer.SetActiveSource(i)
	i += 1
i = 0
while i < 3:
	MyXM3Viewer.SetActiveSurfaceUnit(i)
	MyXM3Viewer.GetActiveSurfaceUnit()
	i += 1

```


