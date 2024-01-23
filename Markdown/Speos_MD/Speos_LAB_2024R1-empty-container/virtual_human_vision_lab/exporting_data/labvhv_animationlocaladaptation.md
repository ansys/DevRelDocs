# AnimationLocalAdaptation 

## Description 

Allows exporting images of all XMP maps present in a folder to create a **.mov** file. This method allows no discontinuity between images with local adaptation, compared with ExportXMPIMage method, where local adaptation uses the maximum of each map, creating discontinuities. Options \(glare, depth of field, visual acuity\) taken into account during the export and especially the adaptation luminance.

Returns 1 if the call succeeded, 0 otherwise.

## Syntax 

*object*.AnimationLocalAdaptation\(BSTR strFolderPath, int iFormat\) As Short

- *object*: Virtual Human Vision Lab object

- *strFolderPath*: Path to the folder containing XMP maps.

- *iFormat*: Image format \(0: BMP, 3: JPG, 4: PNG\)


## Remark 

Glare value is not reported from a XMP map to another meaning that a highly luminous source located in one map won't dazzle on the others.


