# ExportCurrentViewToXMP

## Description 

This function allows you to export the Current view of the opened \*.OptisVR or \*.Speos360 file in XMP format.

## Syntax 

*object*.ExportCurrentViewToXMP\(BSTR strOutputNameFile\) As Bool

- *object*: Virtual Reality Lab object

- *BSTR strOutputFileName*: This variable is composed of the path, the filename and the extension

- Bool return
  - True: success
  - False: fail

## Example 

```
Sub ExportCurrentViewToXMP()
'ReturnValue Management
Dim ReturnValue As Bool
'Declare Virtual Reality Lab
Dim VirtualRealityLab As Object
Set VirtualRealityLab = CreateObject("HDRIViewer.Application")
'Check if the object is created
Dim CheckErrorCreateObject
CheckErrorCreateObject = VirtualRealityLab.GetPID()
if(CheckErrorCreateObject = empty) then
   MsgBox ("Creation of object failed")
else
   'Show Virtual Reality Lab
   ReturnValue = VirtualRealityLab.Show(True)
   'Open File
   ReturnValue = VirtualRealityLab.OpenFile("C:\username\API VRLab\InteriorCar.speos360")
   'Export Speos360 file current view to XMP file
   ReturnValue = VirtualRealityLab.ExportCurrentViewToXMP("C:\username\API VRLab\InteriorCar.xmp")
   MsgBox ("Export complete")
end if
End Sub
         
```


