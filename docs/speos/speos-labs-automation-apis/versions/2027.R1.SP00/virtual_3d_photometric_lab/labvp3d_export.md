# Export 

## Description 

Exports the file in .txt format.

Returns 1 if it succeeds, 0 otherwise.

## Syntax 

*object.Export\(BSTR bstrFileName\) As Short*

- *object*: XM3Viewer object

- *bstrFileName*: filename string including path \(input\)


## Example 

```
Sub TestLab()
  ' Starts the application
  Dim Viewer
  Set Viewer = CreateObject("Xm3Viewer.Application")
  ' Opens the file
  Dim MyVar
  MyVar = Viewer.OpenFile("C:\tmp\XM3Viewer\2cubes_005_4.xm3")
  ' …
  ' Exports the file
  MyVar = Viewer.Export("C:\tmp\XM3Viewer\2cubes_005_4.txt")
End Sub

```


