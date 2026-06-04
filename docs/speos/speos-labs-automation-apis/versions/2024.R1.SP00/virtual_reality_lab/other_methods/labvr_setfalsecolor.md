# SetFalseColor 

## Description 

Sets the type of color to use between the eight color modes of the viewer:

- iTypeOfColor 0 = true color

- iTypeOfColor 1 = Black to white\(color\)

- iTypeOfColor 2 = White to black\(color\)

- iTypeOfColor 3 = White to black\(gray scale\)

- iTypeOfColor 4 = Blue to red\(color\)

- iTypeOfColor 5 = Red to blue\(color\)

- iTypeOfColor 6 = White to black \(gray scale\)

- iTypeOfColor 7 = Black to Color\(Custom\)

- iTypeOfColor 8 = Black to white\(Custom Color\)


Returns 1 if the call has succeeded, 0 otherwise.

## Syntax 

*object*.SetFalseColor\(int *iTypeOfColor*\) As Int

- *object*: Virtual Reality Lab object

- *iTypeOfColor:* Defines the definition of the color to use between the 8 modes available from the viewer


**Note:**

With the last two modes, **Black to Color\(Custom\)** and **Black to White\(Custom Color\)**, the custom color used is the color defined in the map.

## Example 

```
Sub FalseColor()
'Error Management
Dim Error As Integer
'Declare VRLab
Dim VirtualRealityLab As Object
Set VirtualRealityLab = CreateObject("HDRIViewer.Application")
'Show VRLab
Error = VirtualRealityLab.Show(True)
'Open File
Error = VirtualRealityLab.OpenFile("U:\AMT\API VRLab\InteriorCar.speos360")
'
    For i = 0 To 8
     Error =  VirtualRealityLab.SetFalseColor(i);
    Next
MsgBox ("Switch between the available display color modes")
End Sub

```


