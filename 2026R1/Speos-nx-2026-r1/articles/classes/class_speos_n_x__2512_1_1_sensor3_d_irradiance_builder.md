# Sensor3DIrradianceBuilder

**Full Name**: `SpeosNX_2512::Sensor3DIrradianceBuilder`

**Language**: Python

**Inherits from**: `FeatureBuilder`

## Description

Represents the builder for a 3D irradiance sensor.

The 3D irradiance sensor builder is used to create and edit 3D irradiance sensor features.


To create a new instance of this class, use `FeatureCollection::CreateSensor3DIrradianceBuilder`

## Properties

#### `thisown`

`public` `static`

*Defined in `SpeosNX_2512.py` at line 14801*

---

## Private Static Attributes

#### `__repr__`

`private` `static`

*Defined in `SpeosNX_2512.py` at line 14805*

---

## Public Static Attributes

#### `Absorption` : str

`public` `static`

Gets or sets the absorption property.

**Prerequisite**: The property MeasureType must be 0 or 2, and IntegrationType must be 0.  




**Value type**: Boolean.  




The default value is True.

**Default value**: `=  property(fget=__GetAbsorption, fset=__SetAbsorption)`

*Defined in `SpeosNX_2512.py` at line 14892*

---

#### `IntegrationType` : str

`public` `static`

Gets or sets the integration type.

The values are:  

 0 - Planar. Integration that is made orthogonally with the sensor plan.  

 1 - Radial. Follows specific street lighting illumination regulations.  




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetIntegrationType, fset=__SetIntegrationType)`

*Defined in `SpeosNX_2512.py` at line 14903*

---

#### `Layer` : str

`public` `static`

Gets or sets the layer mode.

The values are:  

 0 - None.  

 1 - Source.  




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetLayer, fset=__SetLayer)`

*Defined in `SpeosNX_2512.py` at line 14914*

---

#### `MeasureType` : str

`public` `static`

Gets or sets the measure type.

The values are:  

 0 - Photometric to compute the luminous intensity and generate an extended map for Virtual 3D Photometric Lab.  

 1 - Colorimetric to compute the radiant intensity and generate an extended map for Virtual 3D Photometric Lab.  

 2 - Radiometric to compute the color results without any spectral layer separation and generate a spectral map for Virtual 3D Photometric Lab.  




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetMeasureType, fset=__SetMeasureType)`

*Defined in `SpeosNX_2512.py` at line 14926*

---

#### `RayFileFormat` : str

`public` `static`

Gets or sets the ray file format.

**Prerequisite**: The UseRayFile property must be True.  




Defines the type of ray file. The simulation creates the ray file.  




The values are:  

 0 - Speos without Polarization.  

 1 - Speos with Polarization.  

 2 - IES TM-25 without Polarization.  

 3 - IES TM-25 with Polarization.  




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetRayFileFormat, fset=__SetRayFileFormat)`

*Defined in `SpeosNX_2512.py` at line 14943*

---

#### `Reflection` : str

`public` `static`

Gets or sets the reflection property.

**Prerequisite**: The property MeasureType must be 0 or 2, and IntegrationType must be 0.  




**Value type**: Boolean.  




The default value is True.

**Default value**: `=  property(fget=__GetReflection, fset=__SetReflection)`

*Defined in `SpeosNX_2512.py` at line 14952*

---

#### `Selections` : str

`public` `static`

Gets or sets the selected faces or bodies.

The Selections property takes and returns a list of feature tags.  




**Value type**: List of integer.  




The default value is an empty list.

**Default value**: `=  property(fget=__GetSelections, fset=__SetSelections)`

*Defined in `SpeosNX_2512.py` at line 14961*

---

#### `TemplateFilePath` : str

`public` `static`

Gets or sets the XM3 template file.

**Prerequisite**: The property TemplateFile must be True.  




**Value type**: String.  




The default value is an empty string.

**Default value**: `=  property(fget=__GetTemplateFilePath, fset=__SetTemplateFilePath)`

*Defined in `SpeosNX_2512.py` at line 14970*

---

#### `Transmission` : str

`public` `static`

Gets or sets the transmission property.

**Prerequisite**: The property MeasureType must be 0 or 2, and IntegrationType must be 0.  




**Value type**: Boolean.  




The default value is True.

**Default value**: `=  property(fget=__GetTransmission, fset=__SetTransmission)`

*Defined in `SpeosNX_2512.py` at line 14979*

---

#### `UseRayFile` : str

`public` `static`

Gets or sets the property to enable or disable use of ray file.

True: Uses ray file.  

 False: Does not use ray file.  




**Value type**: Boolean.  




The default value is False.

**Default value**: `=  property(fget=__GetUseRayFile, fset=__SetUseRayFile)`

*Defined in `SpeosNX_2512.py` at line 14989*

---

#### `UseTemplateFile` : str

`public` `static`

Gets or sets the property to enable or disable use of XM3 template file.

True: Uses XM3 template file.  

 False: Does not use XM3 template file.  




**Value type**: Boolean.  




The default value is False.

**Default value**: `=  property(fget=__GetUseTemplateFile, fset=__SetUseTemplateFile)`

*Defined in `SpeosNX_2512.py` at line 14999*

---

#### `WavelengthEnd` : str

`public` `static`

Gets or sets the higher value of the wavelength range to be considered by the sensor.

**Prerequisite**: The property MeasureType must be 1.  




The sensor does not take into account wavelengths beyond the borders that you define.  




**Value type**: Double (in nm).  




The default value is 700.0 nm.

**Default value**: `=  property(fget=__GetWavelengthEnd, fset=__SetWavelengthEnd)`

*Defined in `SpeosNX_2512.py` at line 15010*

---

#### `WavelengthStart` : str

`public` `static`

Gets or sets the lower value of the wavelength range to be considered by the sensor.

**Prerequisite**: The property MeasureType must be 1.  




The sensor does not take into account wavelengths beyond the borders that you define.  




**Value type**: Double (in nm).  




The default value is 400.0 nm.

**Default value**: `=  property(fget=__GetWavelengthStart, fset=__SetWavelengthStart)`

*Defined in `SpeosNX_2512.py` at line 15021*

---

## Member Summary

| Member | Type |
|--------|------|
| `Absorption` | public |
| `IntegrationType` | public |
| `Layer` | public |
| `MeasureType` | public |
| `RayFileFormat` | public |
| `Reflection` | public |
| `Selections` | public |
| `TemplateFilePath` | public |
| `Transmission` | public |
| `UseRayFile` | public |
| `UseTemplateFile` | public |
| `WavelengthEnd` | public |
| `WavelengthStart` | public |
| `thisown` | public |
