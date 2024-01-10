# Show 

## Description 

Shows or hides the GUI.

Always returns -1.

## Syntax 

*object.Show\(short nShow\) As Short*

- *object*: XM3Viewer object

- *nShow*: must have one of these values:

  - 0 for hidding

  - 1 for showing


## VB script example

```VB
Sub TestLab()
  ' Starts the application
  Dim Viewer
  Set Viewer = CreateObject("Xm3Viewer.Application")
  ' Shows the GUI
  Viewer.Show(1)
End Sub

```

## IronPython example

```ironpython
from System import Type, Activator
type = Type.GetTypeFromProgID("Xm3Viewer.Application")
MyXm3Viewer = Activator.CreateInstance(type)
#Show the GUI
MyXm3Viewer.Show(1)

```


