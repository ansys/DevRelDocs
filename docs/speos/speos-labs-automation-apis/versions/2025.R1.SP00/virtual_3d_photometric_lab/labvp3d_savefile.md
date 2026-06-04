# SaveFile 

## Description 

Saves the file.

Returns 1 if it succeeds, 0 otherwise.

## Syntax 

*object.SaveFile\(BSTR bstrFileName\) As Short*

- *object*: XM3Viewer object

- *bstrFileName*: filename string including path \(input\)


## VB script example

```VB
Sub TestLab()
  ' Starts the application
  Dim Viewer
  Set Viewer = CreateObject("Xm3Viewer.Application")
  ' Opens the file
  Dim MyVar
  MyVar = Viewer.OpenFile("C:\tmp\XM3Viewer\2cubes_005_4.xm3")
  ' …
  ' Saves the file
  MyVar = Viewer.SaveFile("C:\tmp\XM3Viewer\2cubes_005_4.xm3")
End Sub

```

## IronPython example

```ironpython
from System import Type, Activator
type = Type.GetTypeFromProgID("Xm3Viewer.Application")
MyXm3Viewer = Activator.CreateInstance(type)
#Open the file
MyXm3Viewer.OpenFile("C:\\tmp\\XM3Viewer\\2cubes_005_4.xm3")
#...
#Save the file
MyXm3Viewer.SaveFile("C:\\tmp\\XM3Viewer\\2cubes_005_4.xm3")

```


