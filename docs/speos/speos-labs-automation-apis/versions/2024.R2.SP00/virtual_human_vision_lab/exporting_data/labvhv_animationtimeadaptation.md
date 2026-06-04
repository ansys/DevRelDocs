# AnimationTimeAdaptation 

## Description 

Allows exporting images of all XMP maps present in a folder, taking into account dynamic adaptation for each XMP map. Options \(glare, depth of field, visual acuity\) taken into account during the export are the ones defined for the folder's first XMP map.

Returns 1 if the call succeeded, 0 otherwise.

## Syntax 

*object*.AnimationTimeAdaptation\(BSTR strFolderPath, double dTime, int iFormat\) As Short

- *object*: Virtual Human Vision Lab object

- *strFolderPath*: Path to the folder containing XMP maps.

- *dTime*: Time between each XMP map.

- *iFormat*: Image format \(0: BMP, 3: JPG, 4: PNG\)



