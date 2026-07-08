# SetSightDirection 

## Description 

Change the sight direction on immersive and observer views.

Returns 1 in all the cases \(no error management\).

**Note:**

If the theta and phi angles specified match to an impossible position, the closest position is reached instead.

## Syntax 

*object*.SetSightDirection\(*theta*As Double, *phi*As Double\) As Long

- *object*: Virtual Reality Lab object

- *theta :*angle driving the horizontal orientation \(rad\)

- *phi:*angle driving the vertical orientation \(rad\)


**Note:**

Theta and phi angles definitions are inverted when the method is used with immersive sensors.

**Note:**

The interval of definition of the theta and phi angles is \]-inf;inf\[.

## Example 

```
Sub main()
' Error Management
Dim Error As Integer
' Declare VRLab
Dim VirtualRealityLab As Object
Set VirtualRealityLab = CreateObject("HDRIViewer.Application")
' Show VRLab
Error = VirtualRealityLab.Show(True)
' Open File
Error = VirtualRealityLab.OpenFile("U:\AMT\API VRLab\InteriorCar.speos360")
' Set Luminance Max
Error = VirtualRealityLab.SetLuminanceMax(100)
' Initialize the initial sight direction
Dim Theta, Phi As Double
Theta = 0
Phi = 0
' Make the sight direction sweeping horizontally from 0 to 360deg
While Theta < 360 * 3.14 / 180
    Error = VirtualRealityLab.SetSightDirection(Theta, Phi)
    Theta = Theta + 1 * 3.14 / 180 ' Angular step of 1deg
Wend
End Sub

```


