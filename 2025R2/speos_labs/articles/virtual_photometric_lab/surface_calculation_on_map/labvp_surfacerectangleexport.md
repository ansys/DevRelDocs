# SurfaceRectangleExport

## Description

Exports a XMP map or a text file of the selected rectangular surface. Returns a value different from 0 if no error occurred.

## Syntax

*object*.SurfaceRectangleExport \(double dXPos, double dYPos, double dWidth, double dHeight, string bstrFileName, integer iFormat\) As Short

- *object*: Virtual Photometric Lab object

- *dXPos*: horizontal coordinate of the center of the rectangle

- *dYPos*: vertical coordinate of the center of the rectangle

- *dWidth*: horizontal size of the rectangle

- *dHeight*: vertical size of the rectangle

- *bstrFileName*: path and filename of the output file. Should end by **.xmp** for XMP map or **.txt** for a text file.

- *iFormat*: format of the output file, 0 for text file, 1 for XMP map.
