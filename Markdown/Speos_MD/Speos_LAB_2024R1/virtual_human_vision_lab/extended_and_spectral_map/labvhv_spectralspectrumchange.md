# SpectralSpectrumChange 

## Description 

Allows you to apply a spectrum to a source on spectral map.

Returns 0 if:

- the map is not a spectral map.

- the index of the source does not exist.

- the path does not exist or no path defined or wrong path.


## Syntax 

*object*.SpectralSpectrumChange\(int *iSource*, BSTR *bstrFileName*\)

- *object*: Virtual Photometric Lab or Virtual Human Vision Lab object

- *iSource*: index of the source to activate

- *bstrFileName*: filename string including path

    When bstrFileName does not exist, the spectrum is deactivated on the layer.


## Example 

```
Sub main()
 Dim MyFolder As String
MyFolder = "PathWorkSpeace"
 Dim XmpViewer As Object
Set XmpViewer = CreateObject("XmpViewer.Application")
 Dim MyFile As String
MyFile = "NameOfXmpMap.xmp"
 retval = XmpViewer.OpenFile(MyFolder & MyFile)
 retval = XmpViewer.Show(1)
 Dim NbLayer As Integer
NbLayer = XmpViewer.ExtendedGetNbSource()
 Dim MySpectrumFile As String
MySpectrumFile = "NameOfSpectrumFile.spectrum"
 For i = 0 To NbLayer - 1
retval = XmpViewer.SpectralSpectrumChange(i, MyFolder & MySpectrumFile)
Next i
 For i = 0 To NbLayer - 1
retval = XmpViewer.SpectralSpectrumChange(i)
Next i
 End Sub

```


