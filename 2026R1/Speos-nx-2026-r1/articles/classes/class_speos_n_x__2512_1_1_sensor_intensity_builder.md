---
uid: sensor_intensity_builder
title: SensorIntensityBuilder
---

# SensorIntensityBuilder

**Full Name**: `SpeosNX_2512::SensorIntensityBuilder`

**Language**: Python

**Inherits from**: `SensorCommonBuilder`

## Description

Represents an Intensity Sensor Builder.

The Intensity Sensor Builder is used to create and edit Intensity Sensor features.


To create a new instance of this class, use `FeatureCollection::CreateSensorIntensityBuilder`

## Properties

#### `thisown`

`public` `static`

*Defined in `SpeosNX_2512.py` at line 21839*

---

## Private Static Attributes

#### `__repr__`

`private` `static`

*Defined in `SpeosNX_2512.py` at line 21843*

---

## Public Static Attributes

#### `AdaptiveSampling` : str

`public` `static`

Gets or sets the property to enable adaptive sampling.

**Prerequisite**: The FormatType property must be 1, 2, 3 or 4.  




True: Activates adaptive Sampling.  

 False: Deactivates adaptive Sampling.  




**Value type**: Boolean.  




The default value is False.

**Default value**: `=  property(fget=__GetAdaptiveSampling, fset=__SetAdaptiveSampling)`

*Defined in `SpeosNX_2512.py` at line 21970*

---

#### `CellDiameter` : str

`public` `static`

Gets or sets the cell diameter.

**Prerequisite**: The EnableNearField property must be True.  




**Value type**: Double.  

 **Range**The value must be superior to 0.0.  




The default value is 174.9773 mm.

**Default value**: `=  property(fget=__GetCellDiameter, fset=__SetCellDiameter)`

*Defined in `SpeosNX_2512.py` at line 21980*

---

#### `CellDistance` : str

`public` `static`

Gets or sets the cell distance.

**Prerequisite**: The EnableNearField property must be True.  




**Value type**: Double.  




The default value is 1000.0 mm.

**Default value**: `=  property(fget=__GetCellDistance, fset=__SetCellDistance)`

*Defined in `SpeosNX_2512.py` at line 21989*

---

#### `ConoscopicResolution` : str

`public` `static`

Gets or sets the Conoscopic resolution.

**Prerequisite**: The OrientationType property must be 2.  




**Value type**: Double.

**Default value**: `=  property(fget=__GetConoscopicResolution, fset=__SetConoscopicResolution)`

*Defined in `SpeosNX_2512.py` at line 21996*

---

#### `ConoscopicSampling` : str

`public` `static`

Gets or sets the Conoscopic sampling.

**Prerequisite**: The OrientationType property must be 2.  




**Value type**: Integer.  

 **Range**: The value must be superior to 0.  




The default value is 90.

**Default value**: `=  property(fget=__GetConoscopicSampling, fset=__SetConoscopicSampling)`

*Defined in `SpeosNX_2512.py` at line 22006*

---

#### `ConoscopicThetaMax` : str

`public` `static`

Gets or sets the Conoscopic theta maximum value.

**Prerequisite**: The OrientationType property must be 2.  




**Value type**: Double.  




The default value is 90.0.

**Default value**: `=  property(fget=__GetConoscopicThetaMax, fset=__SetConoscopicThetaMax)`

*Defined in `SpeosNX_2512.py` at line 22015*

---

#### `Format` : str

`public` `static`

Gets or sets the format type.

These formats correspond to light distribution standards and will generate different file formats as an output.  




The values are:  

 0 - XMP  

 1 - IESNA Type A.  

 2 - IESNA Type B.  

 3 - IESNA Type C.  

 4 - Eulumdat.  




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetFormat, fset=__SetFormat)`

*Defined in `SpeosNX_2512.py` at line 22031*

---

#### `IntegrationAngle` : str

`public` `static`

Gets or sets the integration angle.

**Prerequisite**: The OrientationType property must be 1, 2, 3 or 4.  




This parameter appears only for IESNA and Eulumdat formats.  




**Value type**: Double (in degrees).  

 **Range**: (0.0, 90.0)  




The default value is 5.0 degrees.

**Default value**: `=  property(fget=__GetIntegrationAngle, fset=__SetIntegrationAngle)`

*Defined in `SpeosNX_2512.py` at line 22043*

---

#### `IntensityResultViewingDirection` : str

`public` `static`

Gets or sets the intensity result viewing direction.

**Prerequisite**: The OrientationType property must be 0 or 1.  




The values are:  

 0 - From source looking at sensor, The viewing direction of the observer is the same as the light direction emitted.  

 1 - From sensor looking at source, The viewing direction of the observer is in the opposite of the light direction.  




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetIntensityResultViewingDirection, fset=__SetIntensityResultViewingDirection)`

*Defined in `SpeosNX_2512.py` at line 22056*

---

#### `NearField` : str

`public` `static`

Gets or sets the property to enable near-field.

True: Enables Near Field.  

 False: Disables Near Field.  




**Value type**: Boolean.

**Default value**: `=  property(fget=__GetNearField, fset=__SetNearField)`

*Defined in `SpeosNX_2512.py` at line 22064*

---

#### `Orientation` : str

`public` `static`

Gets or sets the orientation type.

**Prerequisite**: The FormatType property must be 0.  




The values are:  

 0 - X as Parallel, Y as Meridian, for a polar parameterization with the poles along the X axis.  

 1 - X as Meridian, Y as Parallel, for a polar parameterization with the poles along the Y axis.  

 2 - Conoscopic, for a polar parameterization with the poles along the Z axis.  




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetOrientation, fset=__SetOrientation)`

*Defined in `SpeosNX_2512.py` at line 22078*

---

#### `PolarFilePath` : str

`public` `static`

Gets or sets the polar file path.

**Prerequisite**: The EnableAdaptiveSampling property must be True.  




**Value type**: String.  




The default value is an empty string.

**Default value**: `=  property(fget=__GetPolarFilePath, fset=__SetPolarFilePath)`

*Defined in `SpeosNX_2512.py` at line 22087*

---

#### `PolarXEnd` : str

`public` `static`

Gets the polar X end.

**Prerequisite**: The FormatType property must be 1, 2, 3 or 4.  




**Value type**: Double.

**Default value**: `=  property(fget=__GetPolarXEnd)`

*Defined in `SpeosNX_2512.py` at line 22094*

---

#### `PolarXResolution` : str

`public` `static`

Gets or sets the polar X resolution.

**Prerequisite**: The FormatType property must be 1, 2, 3 or 4.  




**Value type**: Double.

**Default value**: `=  property(fget=__GetPolarXResolution, fset=__SetPolarXResolution)`

*Defined in `SpeosNX_2512.py` at line 22101*

---

#### `PolarXSampling` : str

`public` `static`

Gets or sets the polar X sampling.

**Prerequisite**: The FormatType property must be 1, 2, 3 or 4.  




**Value type**: Integer.  

 **Range**: The value must be superior to 0.  




The default value are:   

 37 for IESNA Type A and IESNA Type B.  

 36 for IESNA Type C and Eulumdat.

**Default value**: `=  property(fget=__GetPolarXSampling, fset=__SetPolarXSampling)`

*Defined in `SpeosNX_2512.py` at line 22113*

---

#### `PolarXStart` : str

`public` `static`

Gets the polar X start.

**Prerequisite**: The FormatType property must be 1, 2, 3 or 4.  




**Value type**: Double.

**Default value**: `=  property(fget=__GetPolarXStart)`

*Defined in `SpeosNX_2512.py` at line 22120*

---

#### `PolarYEnd` : str

`public` `static`

Gets the polar Y end.

**Prerequisite**: The FormatType property must be 1, 2, 3 or 4.  




**Value type**: Double.

**Default value**: `=  property(fget=__GetPolarYEnd)`

*Defined in `SpeosNX_2512.py` at line 22127*

---

#### `PolarYResolution` : str

`public` `static`

Gets or sets the polar Y resolution.

**Prerequisite**: The FormatType property must be 1, 2, 3 or 4.  




**Value type**: Double.

**Default value**: `=  property(fget=__GetPolarYResolution, fset=__SetPolarYResolution)`

*Defined in `SpeosNX_2512.py` at line 22134*

---

#### `PolarYSampling` : str

`public` `static`

Gets or sets the polar Y sampling.

**Prerequisite**: The FormatType property must be 1, 2, 3 or 4.  




**Value type**: Integer.  

 **Range**: The value must be superior to 0.  




The default value are:   

 37 for IESNA Type A and IESNA Type B.  

 19 for IESNA Type C and Eulumdat.

**Default value**: `=  property(fget=__GetPolarYSampling, fset=__SetPolarYSampling)`

*Defined in `SpeosNX_2512.py` at line 22146*

---

#### `PolarYStart` : str

`public` `static`

Gets the polar Y start.

**Prerequisite**: The FormatType property must be 1, 2, 3 or 4.  




**Value type**: Double.

**Default value**: `=  property(fget=__GetPolarYStart)`

*Defined in `SpeosNX_2512.py` at line 22153*

---

#### `Radius` : str

`public` `static`

Gets or sets the radius.

**Value type**: Double (in mm).  

 **Range**: The parameter must be superior to 0.0.  




The default value is 1000.0 mm.

**Default value**: `=  property(fget=__GetRadius, fset=__SetRadius)`

*Defined in `SpeosNX_2512.py` at line 22162*

---

## Member Summary

| Member | Type |
|--------|------|
| `AdaptiveSampling` | public |
| `CellDiameter` | public |
| `CellDistance` | public |
| `ConoscopicResolution` | public |
| `ConoscopicSampling` | public |
| `ConoscopicThetaMax` | public |
| `Format` | public |
| `IntegrationAngle` | public |
| `IntensityResultViewingDirection` | public |
| `NearField` | public |
| `Orientation` | public |
| `PolarFilePath` | public |
| `PolarXEnd` | public |
| `PolarXResolution` | public |
| `PolarXSampling` | public |
| `PolarXStart` | public |
| `PolarYEnd` | public |
| `PolarYResolution` | public |
| `PolarYSampling` | public |
| `PolarYStart` | public |
| `Radius` | public |
| `thisown` | public |
