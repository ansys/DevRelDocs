# ExportXMPIso 

## Description 

Saves the 2D ISO image display of the map in a file. Returns a value different from 0 if no error has occurred.

## Syntax 

*object*.ExportXMPIso\(BSTR bstrFileName, int iMaxSize, int iFormat, int bLegend, int bContour, int iNbLevel\) As Short

- *object*: Virtual Photometric Lab object

- *bstrFileName*: file name to save the image

- *iMaxSize*: maximal horizontal or vertical number of pixels

- *iFormat*: image format \(0: BMP, 3: JPG, 4: PNG\)

- *bLegend*: A value different than 0 for including the legend

- *bContour*: A value different than 0 for including the contour

- *iNbLevel*: number of ISO levels



