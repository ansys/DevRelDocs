# ExportXMP 

## Description 

Saves the map data in a xmp file.

## Syntax 

*object*.ExportXMP\(LPSTR strFileName, short bIncludeSpectralData, short bMergeActiveSources, short bExportFilteredData, short bExtendedMapConversion, \[optional\] short bToConoscopicLuminance, \[optional\] double dSurface\) As Short

- *object*: Virtual Photometric Lab object

- *strFileName*: filename to save the xmp file

- *bIncludeSpectralData*: 1 to include spectral data, 0 otherwise

- *bMergeActiveSources*: 1 to merge active sources, 0 otherwise

- *bExportFilteredData*: 1 to export filtered data, 0 otherwise

- *bExtendedMapConversion*: 1 to convert to extended ma, 0 otherwise

- *bToConoscopicLuminance*: optional, 1 to export conoscopic intensity map as luminance map, 0 otherwise

- *dSurface*: surface used to convert intensity values in luminance \(m2\).



