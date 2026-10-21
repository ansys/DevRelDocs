# ExportXMPtoHDRI 

## Description 

Exports a XMP map as HDRI file. Returns a value different from 0 if no error has occurred.

## Syntax 

*object*.ExportXMPtoHDRI\(string bstrFileName, integer iFormat\) As Short

- *object*: Virtual Photometric Lab or Virtual Human Vision Lab object

- *bstrFileName*: path and filename of the HDRI. Should end by **.hdr** for RGBE files, **.exr** for OpenEXR files.

- *iFormat*: format of the output file, 0 for OpenEXR, 1 for RGBE.



