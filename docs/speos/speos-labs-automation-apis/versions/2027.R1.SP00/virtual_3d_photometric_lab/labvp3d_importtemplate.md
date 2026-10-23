# ImportTemplate 

## Description 

Imports a template and applies it to the current map. Returns TRUE if the call has succeeded, FALSE otherwise.

## Syntax 

object.ImportTemplate\(BSTR bstrFileName\) as Boolean

- *object*: Virtual 3D Photometric Lab object

- *bstrFileName*: template filename \(.xml\)


## VB script example

```VB
Sub Test_Xm3Viewer()  Path = "C:\Users\jbartel\Documents\2018.1\Developpement\Labs\PBI_19720\Data\"  Dim MyViewer Set MyViewer = CreateObject("Xm3Viewer.Application")  Dim RetVal RetVal = MyViewer.Show(True)  'Open Test File RetVal = MyViewer.OpenFile(Path + "Old_Format_NoShape.xm3")  'Template importation Dim RetImport RetImport = MyViewer.ImportTemplate(Path + "Old_Format_NoShape.xml")  MsgBox ("Fin du test.") End Sub

```

## IronPython example

```ironpython
from System import Type, Activator
type = Type.GetTypeFromProgID("Xm3Viewer.Application")
MyXm3Viewer = Activator.CreateInstance(type)
MyXm3Viewer.Show(1)
#Open test file
MyXm3Viewer.OpenFile(Path + "Old_Format_NoShape.xm3")
#Template import
MyXm3Viewer.ImportTemplate(Path + "Old_Format_NoShape.xml")

```


