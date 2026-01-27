---
uid: component_polarization_plate_builder
title: ComponentPolarizationPlateBuilder
---

# ComponentPolarizationPlateBuilder

**Full Name**: `SpeosNX_2512::ComponentPolarizationPlateBuilder`

**Language**: Python

**Inherits from**: `FeatureBuilder`

## Description

Represents a Polarization Plate Component Builder.

The Polarization Plate Component Builder creates or edits Polarization Plate Component features.   




To create a new instance of this class, use `FeatureCollection::CreateComponentPolarizationPlateBuilder`.  




Polarization plate is used to define polarization components like polarizers, wave plates, or any component whose Jones matrix is known.

## Properties

#### `thisown`

`public` `static`

*Defined in `SpeosNX_2512.py` at line 13685*

---

## Private Static Attributes

#### `__repr__`

`private` `static`

*Defined in `SpeosNX_2512.py` at line 13689*

---

## Public Static Attributes

#### `Angle` : str

`public` `static`

Gets or sets the angle value.

**Prerequisite**: The PolarizationType property must be 0, 1, 4 or 5 ; or the DiattenuationType property must be 1 or 2.  




**Value type**: Double (in degrees).  




The default value is 0.0.

**Default value**: `=  property(fget=__GetAngle, fset=__SetAngle)`

*Defined in `SpeosNX_2512.py` at line 13794*

---

#### `AxisSystem` : str

`public` `static`

Gets the Axis System of the Component.

**Value type**: AxisSystem object.

**Default value**: `=  property(fget=__GetAxisSystem)`

*Defined in `SpeosNX_2512.py` at line 13799*

---

#### `DiattenuationType` : str

`public` `static`

Gets or sets the Diattenuation type of the component.

**Prerequisite**: The WavelengthIncidenceDependency property must be True.  




The values are:  

 0 - None.  

 1 - Library.  

 2 - Linear Polarizer.  

 3 - Left Circular Polarizer.  

 4 - Right Circular Polarizer.  




**Value type**: Integer.  




The default value is 2.

**Default value**: `=  property(fget=__GetDiattenuationType, fset=__SetDiattenuationType)`

*Defined in `SpeosNX_2512.py` at line 13815*

---

#### `MaterialFilePath` : str

`public` `static`

Gets or sets the material file path.

**Prerequisite**: The WavelengthIncidenceDependency property must be True.  




**value type**: String.  




The default value is an empty string.

**Default value**: `=  property(fget=__GetMaterialFilePath, fset=__SetMaterialFilePath)`

*Defined in `SpeosNX_2512.py` at line 13824*

---

#### `OptimalWavelength` : str

`public` `static`

Gets or sets the optimal wavelength value.

**Prerequisite**: The WavelengthIncidenceDependency property must be True.  




**Value type**: Double (in nm).  




The default value is 500.0 nm.

**Default value**: `=  property(fget=__GetOptimalWavelength, fset=__SetOptimalWavelength)`

*Defined in `SpeosNX_2512.py` at line 13833*

---

#### `PolarizationType` : str

`public` `static`

Gets or sets the polarization type of the component.

**Prerequisite**: The WavelengthIncidenceDependency property must be False.  




The values are:  

 0 - Library.  

 1 - Linear Polarizer.  

 2 - Left Circular Polarizer.  

 3 - Right Circular Polarizer.  

 4 - Half Wave Plate.  

 5 - Quarter Wave Plate.  




**Value type**: Integer.  




The default value is 1.

**Default value**: `=  property(fget=__GetPolarizationType, fset=__SetPolarizationType)`

*Defined in `SpeosNX_2512.py` at line 13850*

---

#### `PolarizerFilePath` : str

`public` `static`

Gets or sets the polarizer file path.

**Prerequisite**: The PolarizationType property must be 0 or the DiattenuationType property must be 1.  




**value type**: String.  




The default value is an empty string.

**Default value**: `=  property(fget=__GetPolarizerFilePath, fset=__SetPolarizerFilePath)`

*Defined in `SpeosNX_2512.py` at line 13859*

---

#### `RetardanceDivisor` : str

`public` `static`

Gets or sets the retardance deivisor value.

**Prerequisite**: The WavelengthIncidenceDependency property must be True.  




**Value type**: Double.  




The default value is 2.0.

**Default value**: `=  property(fget=__GetRetardanceDivisor, fset=__SetRetardanceDivisor)`

*Defined in `SpeosNX_2512.py` at line 13868*

---

#### `RetardanceMultiplicator` : str

`public` `static`

Gets or sets the retardance multiplicator value.

**Prerequisite**: The WavelengthIncidenceDependency property must be True.  




**Value type**: Integer.  




The default value is 100.

**Default value**: `=  property(fget=__GetRetardanceMultiplicator, fset=__SetRetardanceMultiplicator)`

*Defined in `SpeosNX_2512.py` at line 13877*

---

#### `Thickness` : str

`public` `static`

Gets the Thickness value.

**Prerequisite**: The WavelengthIncidenceDependency property must be True.  




**Value type**: Double.

**Default value**: `=  property(fget=__GetThickness)`

*Defined in `SpeosNX_2512.py` at line 13884*

---

#### `WavelengthIncidenceDependency` : str

`public` `static`

Gets or sets the wavelength and incidence dependency value.

True: Uses Polarization.  

 False: Uses Retarder and Diattenuator.  




**Value type**: Boolean.  




The default value is False.

**Default value**: `=  property(fget=__GetWavelengthIncidenceDependency, fset=__SetWavelengthIncidenceDependency)`

*Defined in `SpeosNX_2512.py` at line 13894*

---

#### `XEnd` : str

`public` `static`

Gets or sets the component X end dimension value.

**Value type**: Double (in mm).  

 **Range**: The value must be superior to XStart  




The default value is 1.0 mm.

**Default value**: `=  property(fget=__GetXEnd, fset=__SetXEnd)`

*Defined in `SpeosNX_2512.py` at line 13902*

---

#### `XMirroredExtent` : str

`public` `static`

Gets or sets the component X dimension mirrored extent value.

True: XStart == -XEnd, you can only change the XEnd value.  

 False: XStart and XEnd can have different value.  




**Value type**: Boolean.  




The default value is False.

**Default value**: `=  property(fget=__GetXMirroredExtent, fset=__SetXMirroredExtent)`

*Defined in `SpeosNX_2512.py` at line 13912*

---

#### `XStart` : str

`public` `static`

Gets or sets the component X start dimension value.

**Value type**: Double (in mm).  

 **Range**: The value must be inferior to XEnd  




The default value is -1.0 mm.

**Default value**: `=  property(fget=__GetXStart, fset=__SetXStart)`

*Defined in `SpeosNX_2512.py` at line 13920*

---

#### `YEnd` : str

`public` `static`

Gets or sets the component Y end dimension value.

**Value type**: Double (in mm).  

 **Range**: The value must be superior to YStart  




The default value is 1.0 mm.

**Default value**: `=  property(fget=__GetYEnd, fset=__SetYEnd)`

*Defined in `SpeosNX_2512.py` at line 13928*

---

#### `YMirroredExtent` : str

`public` `static`

Gets or sets the component Y dimension mirrored extent value.

True: YStart == -YEnd, you can only change the YEnd value.  

 False: YStart and YEnd can have different value.  




**Value type**: Boolean.  




The default value is False.

**Default value**: `=  property(fget=__GetYMirroredExtent, fset=__SetYMirroredExtent)`

*Defined in `SpeosNX_2512.py` at line 13938*

---

#### `YStart` : str

`public` `static`

Gets or sets the component Y start dimension value.

**Value type**: Double (in mm).  

 **Range**: The value must be inferior to YEnd  




The default value is -1.0 mm.

**Default value**: `=  property(fget=__GetYStart, fset=__SetYStart)`

*Defined in `SpeosNX_2512.py` at line 13946*

---

## Member Summary

| Member | Type |
|--------|------|
| `Angle` | public |
| `AxisSystem` | public |
| `DiattenuationType` | public |
| `MaterialFilePath` | public |
| `OptimalWavelength` | public |
| `PolarizationType` | public |
| `PolarizerFilePath` | public |
| `RetardanceDivisor` | public |
| `RetardanceMultiplicator` | public |
| `Thickness` | public |
| `WavelengthIncidenceDependency` | public |
| `XEnd` | public |
| `XMirroredExtent` | public |
| `XStart` | public |
| `YEnd` | public |
| `YMirroredExtent` | public |
| `YStart` | public |
| `thisown` | public |
