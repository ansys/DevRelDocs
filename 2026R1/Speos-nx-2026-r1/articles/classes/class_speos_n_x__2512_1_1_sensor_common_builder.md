# SensorCommonBuilder

**Full Name**: `SpeosNX_2512::SensorCommonBuilder`

**Language**: Python

**Inherits from**: `FeatureBuilder`

**Derived classes**: `SensorIntensityBuilder`, `SensorIrradianceBuilder`, `SensorRadianceBuilder`

## Description

A base class for all Sensor Builders.

A Builder is an object that is used to create and edit Features.


This is an abstract class that provides the basic functionality common to all builders. See the Builder subclasses for details of application-specific builders.


This is an abstract class, and cannot be instantiated.

## Properties

#### `thisown`

`public` `static`

*Defined in `SpeosNX_2512.py` at line 15611*

---

## Private Static Attributes

#### `__repr__`

`private` `static`

*Defined in `SpeosNX_2512.py` at line 15615*

---

## Public Static Attributes

#### `AxisSystem` : str

`public` `static`

Gets the Axis System of the Sensor.

**Value type**: AxisSystem object.

**Default value**: `=  property(fget=__GetAxisSystem)`

*Defined in `SpeosNX_2512.py` at line 15783*

---

#### `DimensionFromFile` : str

`public` `static`

Gets or sets the property to enable the use of dimensions that come from File.

True: Uses the following values from the XMP template: type, X and Y size, Wavelength values.  

 False: Does not use the dimension from file.  




**Value type**: Boolean.  




The default value is False.

**Default value**: `=  property(fget=__GetDimensionFromFile, fset=__SetDimensionFromFile)`

*Defined in `SpeosNX_2512.py` at line 15793*

---

#### `DisplayPropertiesFromFile` : str

`public` `static`

Gets or sets the property to enable the use of display properties that come from File.

True: Uses all the grid related values from the .xml file.  

 False: Does not use the Display properties from file.  




**Value type**: Boolean.  




The default value is False.

**Default value**: `=  property(fget=__GetDisplayPropertiesFromFile, fset=__SetDisplayPropertiesFromFile)`

*Defined in `SpeosNX_2512.py` at line 15803*

---

#### `GridOriginX` : str

`public` `static`

Gets or sets the grid X origin.

**Value type**: Double.  




The default value is 0.0.

**Default value**: `=  property(fget=__GetGridOriginX, fset=__SetGridOriginX)`

*Defined in `SpeosNX_2512.py` at line 15810*

---

#### `GridOriginY` : str

`public` `static`

Gets or sets the grid Y origin.

**Value type**: Double.  




The default value is 0.0.

**Default value**: `=  property(fget=__GetGridOriginY, fset=__SetGridOriginY)`

*Defined in `SpeosNX_2512.py` at line 15817*

---

#### `GridStepX` : str

`public` `static`

Gets or sets the grid X step.

**Value type**: Double.  

 **Range**: The value must be superior to 0.  




The default value is 10.0.

**Default value**: `=  property(fget=__GetGridStepX, fset=__SetGridStepX)`

*Defined in `SpeosNX_2512.py` at line 15825*

---

#### `GridStepY` : str

`public` `static`

Gets or sets the grid Y step.

**Value type**: Double.  

 **Range**: The value must be superior to 0.  




The default value is 10.0.

**Default value**: `=  property(fget=__GetGridStepY, fset=__SetGridStepY)`

*Defined in `SpeosNX_2512.py` at line 15833*

---

#### `SensorFilter` : str

`public` `static`

Gets the sensor filter.

**Value type**: SensorFilter object.

**Default value**: `=  property(fget=__GetSensorFilter)`

*Defined in `SpeosNX_2512.py` at line 15838*

---

#### `ShowGrid` : str

`public` `static`

Gets or sets the property to enable grid preview.

True: Displays a grid on the sensor.  

 False: Does not display a grid on the sensor.  




**Value type**: Boolean.  




The default value is True.

**Default value**: `=  property(fget=__GetShowGrid, fset=__SetShowGrid)`

*Defined in `SpeosNX_2512.py` at line 15848*

---

#### `TemplateFilePath` : str

`public` `static`

Gets or sets the template file's path.

**Value type**: String.  




The default value is an empty string.

**Default value**: `=  property(fget=__GetTemplateFilePath, fset=__SetTemplateFilePath)`

*Defined in `SpeosNX_2512.py` at line 15855*

---

#### `TemplateType` : str

`public` `static`

Gets or sets the template type.

The values are:  

 0 - None  

 1 - Measure  

 2 - Template   




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetTemplateType)`

*Defined in `SpeosNX_2512.py` at line 15867*

---

#### `Type` : str

`public` `static`

Gets or sets the type of the sensor.

The values are:  

 0 - Photometric, results in cd.  

 1 - Colorimetric, color results in cd or W/sr.  

 2 - Radiometric, results in W/sr.  

 3 - Spectral, results in cd or W/sr.  




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetType, fset=__SetType)`

*Defined in `SpeosNX_2512.py` at line 15880*

---

#### `UseTemplateFile` : str

`public` `static`

Gets or sets the property to enable the use of template file.

True: Enables Template File.   

 False: Disables Template File.   




**Value type**: Boolean.

**Default value**: `=  property(fget=__GetUseTemplateFile, fset=__SetUseTemplateFile)`

*Defined in `SpeosNX_2512.py` at line 15888*

---

#### `WavelengthEnd` : str

`public` `static`

Gets or sets the wavelength ending border.

**Prerequisite**: The Type property must be 1 or 3.  




The sensor does not take account wavelengths beyond the borders that you define.  




**Value type**: Double (in nm).  




The default value is 700.0 nm.

**Default value**: `=  property(fget=__GetWavelengthEnd, fset=__SetWavelengthEnd)`

*Defined in `SpeosNX_2512.py` at line 15899*

---

#### `WavelengthResolution` : str

`public` `static`

Gets or sets the Wavelength resolution.

**Prerequisite**: The Type property must be 1 or 3.  




**Value type**: Double.

**Default value**: `=  property(fget=__GetWavelengthResolution, fset=__SetWavelengthResolution)`

*Defined in `SpeosNX_2512.py` at line 15906*

---

#### `WavelengthSampling` : str

`public` `static`

Gets or sets the wavelength sampling.

**Prerequisite**: The Type property must be 1 or 3.  




**Value type**: Integer.  

 **Range**: The value must be superior to 0.  




The default value is 13.

**Default value**: `=  property(fget=__GetWavelengthSampling, fset=__SetWavelengthSampling)`

*Defined in `SpeosNX_2512.py` at line 15916*

---

#### `WavelengthStart` : str

`public` `static`

Gets or sets the wavelength starting border.

**Prerequisite**: The Type property must be 1 or 3.  




The sensor does not take account wavelengths beyond the borders that you define.  




**Value type**: Double (in nm).  




The default value is 400.0 nm.

**Default value**: `=  property(fget=__GetWavelengthStart, fset=__SetWavelengthStart)`

*Defined in `SpeosNX_2512.py` at line 15927*

---

#### `XEnd` : str

`public` `static`

Gets or sets the Sensor X end dimension value.

**Value type**: Double (in mm).  




The default value is 50.0 mm.

**Default value**: `=  property(fget=__GetXEnd, fset=__SetXEnd)`

*Defined in `SpeosNX_2512.py` at line 15934*

---

#### `XMirroredExtent` : str

`public` `static`

Gets the Sensor X dimension mirrored extent value.

True: XStart == -XEnd, you can only change the XEnd value.  

 False: XStart and XEnd can have different value.  




**Value type**: Boolean.  




The default value is False.

**Default value**: `=  property(fget=__GetXMirroredExtent, fset=__SetXMirroredExtent)`

*Defined in `SpeosNX_2512.py` at line 15944*

---

#### `XResolution` : str

`public` `static`

Gets or sets the Sensor X dimension resolution value.

**Value type**: Double.

**Default value**: `=  property(fget=__GetXResolution, fset=__SetXResolution)`

*Defined in `SpeosNX_2512.py` at line 15949*

---

#### `XSampling` : str

`public` `static`

Gets or sets the Sensor X dimension sampling value.

**Value type**: Integer.  




The default value is 100.

**Default value**: `=  property(fget=__GetXSampling, fset=__SetXSampling)`

*Defined in `SpeosNX_2512.py` at line 15956*

---

#### `XStart` : str

`public` `static`

Gets or sets the Sensor X start dimension value.

**Value type**: Double (in mm).  




The default value is -50.0 mm.

**Default value**: `=  property(fget=__GetXStart, fset=__SetXStart)`

*Defined in `SpeosNX_2512.py` at line 15963*

---

#### `YEnd` : str

`public` `static`

Gets or sets the Sensor Y end dimension value.

**Value type**: Double (in mm).  




The default value is 50.0 mm.

**Default value**: `=  property(fget=__GetYEnd, fset=__SetYEnd)`

*Defined in `SpeosNX_2512.py` at line 15970*

---

#### `YMirroredExtent` : str

`public` `static`

Gets the Sensor Y dimension mirrored extent value.

True: YStart == -YEnd, you can only change the YEnd value.  

 False: YStart and YEnd can have different value.  




**Value type**: Boolean.  




The default value is False.

**Default value**: `=  property(fget=__GetYMirroredExtent, fset=__SetYMirroredExtent)`

*Defined in `SpeosNX_2512.py` at line 15980*

---

#### `YResolution` : str

`public` `static`

Gets or sets the Sensor Y dimension resolution value.

**Value type**: Double.

**Default value**: `=  property(fget=__GetYResolution, fset=__SetYResolution)`

*Defined in `SpeosNX_2512.py` at line 15985*

---

#### `YSampling` : str

`public` `static`

Gets or sets the Sensor Y dimension sampling value.

**Value type**: Integer.  




The default value is 100.

**Default value**: `=  property(fget=__GetYSampling, fset=__SetYSampling)`

*Defined in `SpeosNX_2512.py` at line 15992*

---

#### `YStart` : str

`public` `static`

Gets or sets the Sensor Y start dimension value.

**Value type**: Double (in mm).  




The default value is -50.0 mm.

**Default value**: `=  property(fget=__GetYStart, fset=__SetYStart)`

*Defined in `SpeosNX_2512.py` at line 15999*

---

## Public Methods

#### `IsTemplateFileValid(self)`

`public`

Checks whether the template file is valid.

**Returns**: True: The template file is valid.  

 False: The template file is not valid.

*Defined in `SpeosNX_2512.py` at line 15729*

---

## Member Summary

| Member | Type |
|--------|------|
| `AxisSystem` | public |
| `DimensionFromFile` | public |
| `DisplayPropertiesFromFile` | public |
| `GridOriginX` | public |
| `GridOriginY` | public |
| `GridStepX` | public |
| `GridStepY` | public |
| `IsTemplateFileValid` | public |
| `SensorFilter` | public |
| `ShowGrid` | public |
| `TemplateFilePath` | public |
| `TemplateType` | public |
| `Type` | public |
| `UseTemplateFile` | public |
| `WavelengthEnd` | public |
| `WavelengthResolution` | public |
| `WavelengthSampling` | public |
| `WavelengthStart` | public |
| `XEnd` | public |
| `XMirroredExtent` | public |
| `XResolution` | public |
| `XSampling` | public |
| `XStart` | public |
| `YEnd` | public |
| `YMirroredExtent` | public |
| `YResolution` | public |
| `YSampling` | public |
| `YStart` | public |
| `thisown` | public |
