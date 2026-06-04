# CreateImmersiveView 

## Description 

Allows you to create an Speos360 Immersive View from a set of .xmp files. Returns 1 if the call has succeeded, 0 otherwise.

## Syntax 

*object*.CreateImmersiveView\(VARIANT\* *pInputListXMPmap*, VARIANT\* *pInputListRotation*, BSTR *strOutputFileName*, \[optional\] double *dLuminanceMax*\) As Int

- *object*: Virtual Reality Lab object

- *pInputListXMPmap*: tab including the absolute filename strings of the .xmp files to create the Immersive View.

  - Index 0: Right

  - Index 1: Left

  - Index 2: Bottom

  - Index 3: Top

  - Index 4: Front

  - Index 5: Back

- *pInputListRotation*: tab including the rotation angle values \(Int\) of the .xmp files to create the Immersive View, 0, 90, 180 or 270.

  - Index 0: Right

  - Index 1: Left

  - Index 2: Bottom

  - Index 3: Top

  - Index 4: Front

  - Index 5: Back

- *strOutputFileName*: absolute filename string for the result of the Immersive View Speos360 file.

- \[optional\] *dLuminanceMax*: maximum luminance value in Cd/m². If the parameter is not filled, the default value is used to create the Immersive View.


## Example 

```
Sub main()
 Dim MyFolder As String
MyFolder = "PathWorkSpeace"
 Set HDRIViewer = CreateObject("HDRIViewer.Application")
 ReDim XmpMap(5)
XmpMap(0) = MyFolder & "NameOfXmpMap0.xmp"
XmpMap(1) = MyFolder & "NameOfXmpMap1.xmp"
XmpMap(2) = MyFolder & "NameOfXmpMap2.xmp"
XmpMap(3) = MyFolder & "NameOfXmpMap3.xmp"
XmpMap(4) = MyFolder & "NameOfXmpMap4.xmp"
XmpMap(5) = MyFolder & "NameOfXmpMap5.xmp"
 ReDim Rotation(5)
Rotation(0) = ValueOfRotation°
Rotation(1) = ValueOfRotation°
Rotation(2) = ValueOfRotation°
Rotation(3) = ValueOfRotation°
Rotation(4) = ValueOfRotation°
Rotation(5) = ValueOfRotation°
 retval = HDRIViewer.CreateImmersiveView(XmpMap, Rotation, MyFolder & "NameOfOutSpeos360.speos360") 'or \(with the last optional parameter\) retval = HDRIViewer.CreateImmersiveView(XmpMap, Rotation, MyFolder & "NameOfOutSpeos360.speos360", 160)
 retval = HDRIViewer.Show(1)
 End Sub

```


