# SourceLightFieldBuilder

**Full Name**: `SpeosNX_2512::SourceLightFieldBuilder`

**Language**: Python

**Inherits from**: `FeatureBuilder`

## Description

Represents a light field source builder.

The light field source builder creates or edits light field source features.   




To create a new instance of this class, use `FeatureCollection::CreateSourceLightFieldBuilder`.

## Properties

#### `thisown`

`public` `static`

*Defined in `SpeosNX_2512.py` at line 19961*

---

## Private Static Attributes

#### `__repr__`

`private` `static`

*Defined in `SpeosNX_2512.py` at line 19965*

---

## Public Static Attributes

#### `AxisSystem` : str

`public` `static`

Gets the Axis System of the source.

**Prerequisite**: The CustomAxisSystem property must be True.  




**Value type**: AxisSystem object.

**Default value**: `=  property(fget=__GetAxisSystem)`

*Defined in `SpeosNX_2512.py` at line 20012*

---

#### `CustomAxisSystem` : str

`public` `static`

Gets or sets the custom axis system property.

True: Enables custom axis system.  

 False: Disables custom axis system.  




**Value type**: Boolean.   




The default value is False.

**Default value**: `=  property(fget=__GetCustomAxisSystem, fset=__SetCustomAxisSystem)`

*Defined in `SpeosNX_2512.py` at line 20022*

---

#### `LightFieldFilePath` : str

`public` `static`

Gets or sets the light field file path.

**Value type**: String.  




The default value is an empty string.

**Default value**: `=  property(fget=__GetLightFieldFilePath, fset=__SetLightFieldFilePath)`

*Defined in `SpeosNX_2512.py` at line 20029*

---

#### `NumberOfRays` : str

`public` `static`

Gets or sets the number of rays.

**Value type**: Integer.  

 **Range**: The value must be superior or equal to 0.  




The default value is 100.

**Default value**: `=  property(fget=__GetNumberOfRays, fset=__SetNumberOfRays)`

*Defined in `SpeosNX_2512.py` at line 20037*

---

#### `PreviewMode` : str

`public` `static`

Gets or sets the preview mode.

The values are:  

 0 - Meshing.  

 1 - BoundingBox.  




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetPreviewMode, fset=__SetPreviewMode)`

*Defined in `SpeosNX_2512.py` at line 20048*

---

#### `RayLength` : str

`public` `static`

Gets or sets the ray length.

**Value type**: Double (in mm).  

 **Range**: The value must be superior to 0.0.  




The default value is 75.0 mm.

**Default value**: `=  property(fget=__GetRayLength, fset=__SetRayLength)`

*Defined in `SpeosNX_2512.py` at line 20056*

---

#### `SpectrumFilePath` : str

`public` `static`

Gets or sets the spectrum file path.

**Prerequisite**: The Light Field file must contain radiometric or photometric data.  




**Value type**: String.  




The default value is an empty string.

**Default value**: `=  property(fget=__GetSpectrumFilePath, fset=__SetSpectrumFilePath)`

*Defined in `SpeosNX_2512.py` at line 20065*

---

## Member Summary

| Member | Type |
|--------|------|
| `AxisSystem` | public |
| `CustomAxisSystem` | public |
| `LightFieldFilePath` | public |
| `NumberOfRays` | public |
| `PreviewMode` | public |
| `RayLength` | public |
| `SpectrumFilePath` | public |
| `thisown` | public |
