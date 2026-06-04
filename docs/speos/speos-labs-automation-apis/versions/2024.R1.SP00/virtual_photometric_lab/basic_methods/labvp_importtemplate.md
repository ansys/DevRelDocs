# ImportTemplate 

## Description 

Imports a template and applies it to the current map. Returns TRUE if the call has succeeded, FALSE otherwise.

## Syntax 

object.ImportTemplate\(BSTR bstrFileName, short bDisplayOptions, short bMeasures, short bAreasToMap\) as Boolean

- *object*: Virtual Photometric Lab / Virtual Human Vision Lab object

- *bstrFileName*: template filename \(.xml\)

- *bDisplayOptions*: 1 to apply display options, 0 otherwise

- *bMeasures*: 1 to apply measures, 0 otherwise

- *bAreasToMap*: 1 to adjust areas to map, 0 otherwise


## VB script example 

```VB
Sub TestLab()
' Starts the application
Dim Viewer
Set Viewer = CreateObject("XMPViewer.Application")
' Opens a file
Dim MyVar
MyVar = Viewer.OpenFile("C:\tmp\XMPViewer\Exemple.xmp")
' Imports a template
Dim RetVal
RetVal = Viewer.ImportTemplate("C:\tmp\XMPViewer\Exemple.xml", 1, 1, 0)
End Sub

```

## IronPython example

```ironpython
from System import Type, Activator
type = Type.GetTypeFromProgID("XMPViewer.Application")
XMPViewer = Activator.CreateInstance(type)
# Opens a file
MyFile = ("C:\\tmp\\XMPViewer\\Exemple.xmp")
XMPViewer.OpenFile(MyFile)
# Imports a template
MyTemplateFile = ("C:\\tmp\\XMPViewer\\Exemple.xml")
XMPViewer.ImportTemplate(MyTemplateFile, 1, 1, 0)

```


