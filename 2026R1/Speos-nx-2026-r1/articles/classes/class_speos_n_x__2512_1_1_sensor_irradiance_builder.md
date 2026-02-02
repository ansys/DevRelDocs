# SensorIrradianceBuilder

**Full Name**: `SpeosNX_2512::SensorIrradianceBuilder`

**Language**: Python

**Inherits from**: `SensorCommonBuilder`

## Description

Represents an Irradiance Sensor Builder.

The Irradiance Sensor Builder is used to create and edit Irradiance Sensor features.


To create a new instance of this class, use `FeatureCollection::CreateSensorIrradianceBuilder`

## Properties

#### `thisown`

`public` `static`

*Defined in `SpeosNX_2512.py` at line 22174*

---

## Private Static Attributes

#### `__repr__`

`private` `static`

*Defined in `SpeosNX_2512.py` at line 22178*

---

## Public Static Attributes

#### `IntegrationDirection` : str

`public` `static`

Gets or sets the integration direction.

**Prerequisite**: The IntegrationType property must be 0, 2 or 4.  




The integration direction property takes a feature tag and returns a feature tag.  




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetIntegrationDirection, fset=__SetIntegrationDirection)`

*Defined in `SpeosNX_2512.py` at line 22226*

---

#### `IntegrationDirectionReversed` : str

`public` `static`

Gets or sets the reverse direction of integration.

**Prerequisite**: The IntegrationType property must be 0, 2 or 4.  




True: Reverses the IntegrationDirection property  

 False: Does not reverse the IntegrationDirection property  




**Value type**: Boolean.  




The default value is False.

**Default value**: `=  property(fget=__GetIntegrationDirectionReversed, fset=__SetIntegrationDirectionReversed)`

*Defined in `SpeosNX_2512.py` at line 22238*

---

#### `IntegrationType` : str

`public` `static`

Gets or sets the integration type.

The values are:  

 0 - Planar.  

 1 - Radial.  

 2 - Hemishperical.  

 3 - Cylindrical.  

 4 - Semi-cylindrical.


**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetIntegrationType, fset=__SetIntegrationType)`

*Defined in `SpeosNX_2512.py` at line 22252*

---

#### `OutputFaces` : str

`public` `static`

Gets or sets the output faces.

The output faces property takes a list of feature tag and returns a list of feature tag.  




**Value type**: List of integer.  




The default value is an empty list.

**Default value**: `=  property(fget=__GetOutputFaces, fset=__SetOutputFaces)`

*Defined in `SpeosNX_2512.py` at line 22261*

---

#### `RayFileFormat` : str

`public` `static`

Gets or sets the ray file format.

**Prerequisite**: The EnableRayFile property must be True.  




Defines the type of ray file.  




The values are:  

 0 - Speos without Polarization.  

 1 - Speos with Polarization.  

 2 - IES TM-25 without Polarization.  

 3 - IES TM-25 with Polarization.  




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetRayFileFormat, fset=__SetRayFileFormat)`

*Defined in `SpeosNX_2512.py` at line 22278*

---

#### `UseRayFile` : str

`public` `static`

Gets or sets the property to enable ray file.

True: Enables Ray file.  

 False: Disables Ray file.  




**Value type**: Boolean.  




The default value is False.

**Default value**: `=  property(fget=__GetUseRayFile, fset=__SetUseRayFile)`

*Defined in `SpeosNX_2512.py` at line 22288*

---

## Member Summary

| Member | Type |
|--------|------|
| `IntegrationDirection` | public |
| `IntegrationDirectionReversed` | public |
| `IntegrationType` | public |
| `OutputFaces` | public |
| `RayFileFormat` | public |
| `UseRayFile` | public |
| `thisown` | public |
