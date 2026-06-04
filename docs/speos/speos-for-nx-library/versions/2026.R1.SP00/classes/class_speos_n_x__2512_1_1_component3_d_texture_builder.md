---
uid: component3_d_texture_builder
title: Component3DTextureBuilder
---

# Component3DTextureBuilder

**Full Name**: `SpeosNX_2512::Component3DTextureBuilder`

**Language**: Python

**Inherits from**: `FeatureBuilder`

## Description

Represents a 3D Texture component Builder.

The 3D Texture component Builder is used to create and edit 3D Texture features.


To create a new instance of this class, use `FeatureCollection::CreateComponent3DTextureBuilder`.

## Properties

#### `thisown`

`public` `static`

*Defined in `SpeosNX_2512.py` at line 12159*

---

## Private Static Attributes

#### `__repr__`

`private` `static`

*Defined in `SpeosNX_2512.py` at line 12163*

---

## Public Static Attributes

#### `AxisSystem` : str

`public` `static`

Gets the axis system.

**Value type**: AxisSystem object.

**Default value**: `=  property(fget=__GetAxisSystem)`

*Defined in `SpeosNX_2512.py` at line 12453*

---

#### `BooleanOperation` : str

`public` `static`

Gets or sets the boolean operation.

The values are:  

 0 - Remove.  

 1 - Add on same material.  

 2 - Add on different material.  

 3 - Add in.  

 4 - Insert.  




**Value type**: Integer.  




The default value is 1.

**Default value**: `=  property(fget=__GetBooleanOperation, fset=__SetBooleanOperation)`

*Defined in `SpeosNX_2512.py` at line 12467*

---

#### `CircularMappingAreaRadius` : str

`public` `static`

Gets or sets the mapping area radius for circular mapping.

**Prerequisite**: The MappingType property must be 1.  




**Value type**: Double (in mm).  

 **Range**: The value must be superior to 0.0.  




The default value is 100.0 mm.

**Default value**: `=  property(fget=__GetCircularMappingAreaRadius, fset=__SetCircularMappingAreaRadius)`

*Defined in `SpeosNX_2512.py` at line 12477*

---

#### `CircularRadialDistance` : str

`public` `static`

Gets or sets the radial distance for circular mapping.

**Prerequisite**: The MappingType property must be 1.  




**Value type**: Double (in mm).  

 **Range**: The value must be superior to 0.0.  




The default value is 1.0 mm.

**Default value**: `=  property(fget=__GetCircularRadialDistance, fset=__SetCircularRadialDistance)`

*Defined in `SpeosNX_2512.py` at line 12487*

---

#### `CircularRingsDistance` : str

`public` `static`

Gets or sets the distance between two rings for circular mapping.

**Prerequisite**: The MappingType property must be 1.  




**Value type**: Double (in mm).  

 **Range**: The value must be superior to 0.0.  




The default value is 1.0 mm.

**Default value**: `=  property(fget=__GetCircularRingsDistance, fset=__SetCircularRingsDistance)`

*Defined in `SpeosNX_2512.py` at line 12497*

---

#### `CircularXAngle` : str

`public` `static`

Gets or sets the angle for circular mapping.

**Prerequisite**: The MappingType property must be 1.  




**Value type**: Double (in degree).  




The default value is 0.0 degree.

**Default value**: `=  property(fget=__GetCircularXAngle, fset=__SetCircularXAngle)`

*Defined in `SpeosNX_2512.py` at line 12506*

---

#### `EndIndex` : str

`public` `static`

Gets or sets the end index.

**Value type**: Integer.  

 **Range**: The value must be superior to the StartIndex property.  




The default value is 2.

**Default value**: `=  property(fget=__GetEndIndex, fset=__SetEndIndex)`

*Defined in `SpeosNX_2512.py` at line 12514*

---

#### `FeatureToPattern` : str

`public` `static`

Gets or sets the pattern geometry.

The FeatureToPattern property takes a feature tag and returns a feature tag.  

 The pattern must be placed on the axis system of the assembly.  




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetFeatureToPattern, fset=__SetFeatureToPattern)`

*Defined in `SpeosNX_2512.py` at line 12524*

---

#### `FilterSurface` : str

`public` `static`

Gets or sets the filter surface.

The FilterSurface property takes a feature tag and returns a feature tag.  




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetFilterSurface, fset=__SetFilterSurface)`

*Defined in `SpeosNX_2512.py` at line 12533*

---

#### `GlobaleScale` : str

`public` `static`

Gets or sets the global scale of the pattern.

**Value type**: Double.  

 **Range**: The value must be superior to 0.0.  




The default value is 1.0.

**Default value**: `=  property(fget=__GetGlobaleScale, fset=__SetGlobaleScale)`

*Defined in `SpeosNX_2512.py` at line 12541*

---

#### `HexagonalCentersDistance` : str

`public` `static`

Gets or sets the hexagon distance between centers for hexagonal mapping.

**Prerequisite**: The MappingType property must be 2.  




**Value type**: Double (in mm).  

 **Range**: The value must be superior to 0.0.  




The default value is 100.0 mm.

**Default value**: `=  property(fget=__GetHexagonalCentersDistance, fset=__SetHexagonalCentersDistance)`

*Defined in `SpeosNX_2512.py` at line 12551*

---

#### `HexagonalCentralPoint` : str

`public` `static`

Gets or sets the central point property for hexagonal mapping.

**Prerequisite**: The MappingType property must be 2.  




True: Enables Central Point.  

 False: Disables Central Point.  




**Value type**: Boolean.  




The default value is False.

**Default value**: `=  property(fget=__GetHexagonalCentralPoint, fset=__SetHexagonalCentralPoint)`

*Defined in `SpeosNX_2512.py` at line 12563*

---

#### `HexagonalEdgeLength` : str

`public` `static`

Gets or sets the hexagon edge length for hexagonal mapping.

**Prerequisite**: The MappingType property must be 2.  




**Value type**: Double (in mm).  

 **Range**: The value must be superior to 0.0.  




The default value is 1.0 mm.

**Default value**: `=  property(fget=__GetHexagonalEdgeLength, fset=__SetHexagonalEdgeLength)`

*Defined in `SpeosNX_2512.py` at line 12573*

---

#### `HexagonalMappingAreaXLength` : str

`public` `static`

Gets or sets the mapping area X length for hexagonal mapping.

**Prerequisite**: The MappingType property must be 2.  




**Value type**: Double (in mm).  

 **Range**: The value must be superior to 0.0.  




The default value is 100.0 mm.

**Default value**: `=  property(fget=__GetHexagonalMappingAreaXLength, fset=__SetHexagonalMappingAreaXLength)`

*Defined in `SpeosNX_2512.py` at line 12583*

---

#### `HexagonalMappingAreaYLength` : str

`public` `static`

Gets or sets the mapping area Y length for hexagonal mapping.

**Prerequisite**: The MappingType property must be 2.  




**Value type**: Double (in mm).  

 **Range**: The value must be superior to 0.0.  




The default value is 100.0 mm.

**Default value**: `=  property(fget=__GetHexagonalMappingAreaYLength, fset=__SetHexagonalMappingAreaYLength)`

*Defined in `SpeosNX_2512.py` at line 12593*

---

#### `HexagonalRegularMapping` : str

`public` `static`

Gets or sets the central point property for hexagonal mapping.

**Prerequisite**: The MappingType property must be 2.  




True: Enables Regular Mapping.  

 False: Disables Regular Mapping.  




**Value type**: Boolean.  




The default value is False.

**Default value**: `=  property(fget=__GetHexagonalRegularMapping, fset=__SetHexagonalRegularMapping)`

*Defined in `SpeosNX_2512.py` at line 12605*

---

#### `HexagonalXAngle` : str

`public` `static`

Gets or sets the X angle for hexagonal mapping.

**Prerequisite**: The MappingType property must be 2.  




**Value type**: Double (in degree).  




The default value is 0.0 degree.

**Default value**: `=  property(fget=__GetHexagonalXAngle, fset=__SetHexagonalXAngle)`

*Defined in `SpeosNX_2512.py` at line 12614*

---

#### `HexagonalXWidth` : str

`public` `static`

Gets or sets the hexagon width for hexagonal mapping.

**Prerequisite**: The MappingType property must be 2.  




**Value type**: Double (in mm).  

 **Range**: The value must be superior to 0.0.  




The default value is 0.7 mm.

**Default value**: `=  property(fget=__GetHexagonalXWidth, fset=__SetHexagonalXWidth)`

*Defined in `SpeosNX_2512.py` at line 12624*

---

#### `HexagonalYAngle` : str

`public` `static`

Gets or sets the Y angle for hexagonal mapping.

**Prerequisite**: The MappingType property must be 2.  




**Value type**: Double (in degree).  




The default value is 0.0 degree.

**Default value**: `=  property(fget=__GetHexagonalYAngle, fset=__SetHexagonalYAngle)`

*Defined in `SpeosNX_2512.py` at line 12633*

---

#### `HexagonalYHeight` : str

`public` `static`

Gets or sets the hexagon height for hexagonal mapping.

**Prerequisite**: The MappingType property must be 2.  




**Value type**: Double (in mm).  

 **Range**: The value must be superior to 0.0.  




The default value is 0.7 mm.

**Default value**: `=  property(fget=__GetHexagonalYHeight, fset=__SetHexagonalYHeight)`

*Defined in `SpeosNX_2512.py` at line 12643*

---

#### `MappingType` : str

`public` `static`

Gets or sets the mapping.

Each type describes a way to create a virtual grid that is going to be projected on a part's surface.  




The values are:  

 0 - Rectangular.  

 1 - Circular.  

 2 - Hexagonal.  

 3 - Variable Pitches.  

 4 - Library.  




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetMappingType, fset=__SetMappingType)`

*Defined in `SpeosNX_2512.py` at line 12659*

---

#### `MaxPointToDisplay` : str

`public` `static`

Gets or sets the max point to display.

**Value type**: Integer.  




The default value is 10000.

**Default value**: `=  property(fget=__GetMaxPointToDisplay, fset=__SetMaxPointToDisplay)`

*Defined in `SpeosNX_2512.py` at line 12666*

---

#### `Orientation` : str

`public` `static`

Gets or sets the pattern orientation.

The values are:  

 0 - Constant, orientates the pattern according to the support of the 3D Texture.  

 1 - Normal, orientates the pattern according to the normal of the surface.  




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetOrientation, fset=__SetOrientation)`

*Defined in `SpeosNX_2512.py` at line 12677*

---

#### `PatternXScale` : str

`public` `static`

Gets or sets the pattern X scale.

The PatternXScale property takes a feature tag and returns a feature tag.  




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetPatternXScale, fset=__SetPatternXScale)`

*Defined in `SpeosNX_2512.py` at line 12686*

---

#### `PatternYScale` : str

`public` `static`

Gets or sets the pattern Y scale.

The PatternYScale property takes a feature tag and returns a feature tag.  




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetPatternYScale, fset=__SetPatternYScale)`

*Defined in `SpeosNX_2512.py` at line 12695*

---

#### `PatternZScale` : str

`public` `static`

Gets or sets the pattern Z scale.

The PatternZScale property takes a feature tag and returns a feature tag.  




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetPatternZScale, fset=__SetPatternZScale)`

*Defined in `SpeosNX_2512.py` at line 12704*

---

#### `RectangularMappingAreaXLength` : str

`public` `static`

Gets or sets the area X Length for rectangular mapping.

**Prerequisite**: The MappingType property must be 0.  




**Value type**: Double (in mm).  

 **Range**: The value must be superior to 0.0.  




The default value is 100.0 mm.

**Default value**: `=  property(fget=__GetRectangularMappingAreaXLength, fset=__SetRectangularMappingAreaXLength)`

*Defined in `SpeosNX_2512.py` at line 12714*

---

#### `RectangularMappingAreaYLength` : str

`public` `static`

Gets or sets the area Y Length for rectangular mapping.

**Prerequisite**: The MappingType property must be 0.  




**Value type**: Double (in mm).  

 **Range**: The value must be superior to 0.0.  




The default value is 100.0 mm.

**Default value**: `=  property(fget=__GetRectangularMappingAreaYLength, fset=__SetRectangularMappingAreaYLength)`

*Defined in `SpeosNX_2512.py` at line 12724*

---

#### `RectangularXAngle` : str

`public` `static`

Gets or sets the X direction angle for rectangular mapping.

**Prerequisite**: The MappingType property must be 0.  




**Value type**: Double (in degree).  




The default value is 0.0 degree.

**Default value**: `=  property(fget=__GetRectangularXAngle, fset=__SetRectangularXAngle)`

*Defined in `SpeosNX_2512.py` at line 12733*

---

#### `RectangularXDistance` : str

`public` `static`

Gets or sets the X distance between patterns for rectangular mapping.

**Prerequisite**: The MappingType property must be 0.  




**Value type**: Double (in mm).  

 **Range**: The value must be superior to 0.0.  




The default value is 1.0 mm.

**Default value**: `=  property(fget=__GetRectangularXDistance, fset=__SetRectangularXDistance)`

*Defined in `SpeosNX_2512.py` at line 12743*

---

#### `RectangularYAngle` : str

`public` `static`

Gets or sets the Y direction angle for rectangular mapping.

**Prerequisite**: The MappingType property must be 0.  




**Value type**: Double (in degree).  




The default value is 0.0 degree.

**Default value**: `=  property(fget=__GetRectangularYAngle, fset=__SetRectangularYAngle)`

*Defined in `SpeosNX_2512.py` at line 12752*

---

#### `RectangularYDistance` : str

`public` `static`

Gets or sets the Y distance between patterns for rectangular mapping.

**Prerequisite**: The MappingType property must be 0.  




**Value type**: Double (in mm).  

 **Range**: The value must be superior to 0.0.  




The default value is 1.0 mm.

**Default value**: `=  property(fget=__GetRectangularYDistance, fset=__SetRectangularYDistance)`

*Defined in `SpeosNX_2512.py` at line 12762*

---

#### `ShiftScaleRatio` : str

`public` `static`

Gets or sets the shift scale ratio.

**Value type**: Double.  




The default value is 1.0.

**Default value**: `=  property(fget=__GetShiftScaleRatio, fset=__SetShiftScaleRatio)`

*Defined in `SpeosNX_2512.py` at line 12769*

---

#### `ShiftSurface` : str

`public` `static`

Gets or sets the shift surface.

The ShiftSurface property takes a feature tag and returns a feature tag.  




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetShiftSurface, fset=__SetShiftSurface)`

*Defined in `SpeosNX_2512.py` at line 12778*

---

#### `StartIndex` : str

`public` `static`

Gets or sets the start index.

**Value type**: Integer.  

 **Range**: The value must be superior to 0 and inferior to the EndIndex property.  




The default value is 1.

**Default value**: `=  property(fget=__GetStartIndex, fset=__SetStartIndex)`

*Defined in `SpeosNX_2512.py` at line 12786*

---

#### `SupportToPattern` : str

`public` `static`

Gets or sets the support geometry on which to apply the pattern.

The SupportToPattern property takes a feature tag and returns a feature tag.  




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetSupportToPattern, fset=__SetSupportToPattern)`

*Defined in `SpeosNX_2512.py` at line 12795*

---

#### `Texture3DMappingFilePath` : str

`public` `static`

Gets or sets the texture 3D Mapping file path.

**Value type**: String.  




The default value is an empty file path (string).

**Default value**: `=  property(fget=__GetTexture3DMappingFilePath, fset=__SetTexture3DMappingFilePath)`

*Defined in `SpeosNX_2512.py` at line 12802*

---

#### `VariablePitchesMappingAreaXLength` : str

`public` `static`

Gets or sets the mapping area X length for variable pitches mapping.

**Prerequisite**: The MappingType property must be 3.  




**Value type**: Double (in mm).  

 **Range**: The value must be superior to 0.0.  




The default value is 100.0 mm.

**Default value**: `=  property(fget=__GetVariablePitchesMappingAreaXLength, fset=__SetVariablePitchesMappingAreaXLength)`

*Defined in `SpeosNX_2512.py` at line 12812*

---

#### `VariablePitchesMappingAreaYLength` : str

`public` `static`

Gets or sets the mapping area Y length for variable pitches mapping.

**Prerequisite**: The MappingType property must be 3.  




**Value type**: Double (in mm).  

 **Range**: The value must be superior to 0.0.  




The default value is 100.0 mm.

**Default value**: `=  property(fget=__GetVariablePitchesMappingAreaYLength, fset=__SetVariablePitchesMappingAreaYLength)`

*Defined in `SpeosNX_2512.py` at line 12822*

---

#### `VariablePitchesXAngle` : str

`public` `static`

Gets or sets the X angle for variable pitches mapping.

**Prerequisite**: The MappingType property must be 3.  




**Value type**: Double (in degree).  




The default value is 0.0 degree.

**Default value**: `=  property(fget=__GetVariablePitchesXAngle, fset=__SetVariablePitchesXAngle)`

*Defined in `SpeosNX_2512.py` at line 12831*

---

#### `VariablePitchesXPitchCurve` : str

`public` `static`

Gets or sets the X pitch curve for variable pitches mapping.

**Prerequisite**: The MappingType property must be 3.  




The VariablePitchesXPitchCurve property takes a feature tag and returns a feature tag.  




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetVariablePitchesXPitchCurve, fset=__SetVariablePitchesXPitchCurve)`

*Defined in `SpeosNX_2512.py` at line 12842*

---

#### `VariablePitchesXPitchRatio` : str

`public` `static`

Gets or sets the X pitch ratio for variable pitches mapping.

**Prerequisite**: The MappingType property must be 3.  




**Value type**: Double.  

 **Range**: The value must be superior to 0.0.  




The default value is 1.0.

**Default value**: `=  property(fget=__GetVariablePitchesXPitchRatio, fset=__SetVariablePitchesXPitchRatio)`

*Defined in `SpeosNX_2512.py` at line 12852*

---

#### `VariablePitchesYAngle` : str

`public` `static`

Gets or sets the Y angle for variable pitches mapping.

**Prerequisite**: The MappingType property must be 3.  




**Value type**: Double (in degree).  




The default value is 0.0 degree.

**Default value**: `=  property(fget=__GetVariablePitchesYAngle, fset=__SetVariablePitchesYAngle)`

*Defined in `SpeosNX_2512.py` at line 12861*

---

#### `VariablePitchesYPitchCurve` : str

`public` `static`

Gets or sets the Y pitch curve for variable pitches mapping.

**Prerequisite**: The MappingType property must be 3.  




The VariablePitchesYPitchCurve property takes a feature tag and returns a feature tag.  




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetVariablePitchesYPitchCurve, fset=__SetVariablePitchesYPitchCurve)`

*Defined in `SpeosNX_2512.py` at line 12872*

---

#### `VariablePitchesYPitchRatio` : str

`public` `static`

Gets or sets the Y pitch ratio for variable pitches mapping.

**Prerequisite**: The MappingType property must be 3.  




**Value type**: Double.  

 **Range**: The value must be superior to 0.0.  




The default value is 1.0.

**Default value**: `=  property(fget=__GetVariablePitchesYPitchRatio, fset=__SetVariablePitchesYPitchRatio)`

*Defined in `SpeosNX_2512.py` at line 12882*

---

#### `XScaleRatio` : str

`public` `static`

Gets or sets the X scale ratio.

**Value type**: Double.  




The default value is 1.0.

**Default value**: `=  property(fget=__GetXScaleRatio, fset=__SetXScaleRatio)`

*Defined in `SpeosNX_2512.py` at line 12889*

---

#### `YScaleRatio` : str

`public` `static`

Gets or sets the Y scale ratio.

**Value type**: Double.  




The default value is 1.0.

**Default value**: `=  property(fget=__GetYScaleRatio, fset=__SetYScaleRatio)`

*Defined in `SpeosNX_2512.py` at line 12896*

---

#### `ZScaleRatio` : str

`public` `static`

Gets or sets the Z scale ratio.

**Value type**: Double.  




The default value is 1.0.

**Default value**: `=  property(fget=__GetZScaleRatio, fset=__SetZScaleRatio)`

*Defined in `SpeosNX_2512.py` at line 12903*

---

## Member Summary

| Member | Type |
|--------|------|
| `AxisSystem` | public |
| `BooleanOperation` | public |
| `CircularMappingAreaRadius` | public |
| `CircularRadialDistance` | public |
| `CircularRingsDistance` | public |
| `CircularXAngle` | public |
| `EndIndex` | public |
| `FeatureToPattern` | public |
| `FilterSurface` | public |
| `GlobaleScale` | public |
| `HexagonalCentersDistance` | public |
| `HexagonalCentralPoint` | public |
| `HexagonalEdgeLength` | public |
| `HexagonalMappingAreaXLength` | public |
| `HexagonalMappingAreaYLength` | public |
| `HexagonalRegularMapping` | public |
| `HexagonalXAngle` | public |
| `HexagonalXWidth` | public |
| `HexagonalYAngle` | public |
| `HexagonalYHeight` | public |
| `MappingType` | public |
| `MaxPointToDisplay` | public |
| `Orientation` | public |
| `PatternXScale` | public |
| `PatternYScale` | public |
| `PatternZScale` | public |
| `RectangularMappingAreaXLength` | public |
| `RectangularMappingAreaYLength` | public |
| `RectangularXAngle` | public |
| `RectangularXDistance` | public |
| `RectangularYAngle` | public |
| `RectangularYDistance` | public |
| `ShiftScaleRatio` | public |
| `ShiftSurface` | public |
| `StartIndex` | public |
| `SupportToPattern` | public |
| `Texture3DMappingFilePath` | public |
| `VariablePitchesMappingAreaXLength` | public |
| `VariablePitchesMappingAreaYLength` | public |
| `VariablePitchesXAngle` | public |
| `VariablePitchesXPitchCurve` | public |
| `VariablePitchesXPitchRatio` | public |
| `VariablePitchesYAngle` | public |
| `VariablePitchesYPitchCurve` | public |
| `VariablePitchesYPitchRatio` | public |
| `XScaleRatio` | public |
| `YScaleRatio` | public |
| `ZScaleRatio` | public |
| `thisown` | public |
