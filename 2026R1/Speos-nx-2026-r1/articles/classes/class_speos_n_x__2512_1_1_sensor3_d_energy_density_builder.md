# Sensor3DEnergyDensityBuilder

**Full Name**: `SpeosNX_2512::Sensor3DEnergyDensityBuilder`

**Language**: Python

**Inherits from**: `FeatureBuilder`

## Description

Represents the builder for a 3D energy density sensor.

The 3D energy density sensor builder is used to create and edit 3D energy density sensor features.


To create a new instance of this class, use `FeatureCollection::CreateSensor3DEnergyDensityBuilder`

## Properties

#### `thisown`

`public` `static`

*Defined in `SpeosNX_2512.py` at line 14666*

---

## Private Static Attributes

#### `__repr__`

`private` `static`

*Defined in `SpeosNX_2512.py` at line 14670*

---

## Public Static Attributes

#### `AxisSystem` : str

`public` `static`

Gets the axis system.

**Value type**: AxisSystem object.

**Default value**: `=  property(fget=__GetAxisSystem)`

*Defined in `SpeosNX_2512.py` at line 14723*

---

#### `SensorFilter` : str

`public` `static`

Gets the sensor filter.

**Value type**: SensorFilter object.

**Default value**: `=  property(fget=__GetSensorFilter)`

*Defined in `SpeosNX_2512.py` at line 14728*

---

#### `Type` : str

`public` `static`

Gets or sets the sensor type.

The values are:  

 0 - Photometric. The sensor considers the visible spectrum.  

 1 - Radiometric. The sensor considers the entire spectrum.  




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetType, fset=__SetType)`

*Defined in `SpeosNX_2512.py` at line 14739*

---

#### `XSampling` : str

`public` `static`

Gets or sets the X sampling.

**Value type**: Integer.  

 **Range** The value must be superior to 0.  




The default value is 100.

**Default value**: `=  property(fget=__GetXSampling, fset=__SetXSampling)`

*Defined in `SpeosNX_2512.py` at line 14747*

---

#### `XSize` : str

`public` `static`

Gets or sets the X size.

**Value type**: Double (in mm).  

 **Range** The value must be superior to 0.0.  




The default value is 50.0 mm.

**Default value**: `=  property(fget=__GetXSize, fset=__SetXSize)`

*Defined in `SpeosNX_2512.py` at line 14755*

---

#### `YSampling` : str

`public` `static`

Gets or sets the Y sampling.

**Value type**: Integer.  

 **Range** The value must be superior to 0.  




The default value is 100.

**Default value**: `=  property(fget=__GetYSampling, fset=__SetYSampling)`

*Defined in `SpeosNX_2512.py` at line 14763*

---

#### `YSize` : str

`public` `static`

Gets or sets the Y size.

**Value type**: Double (in mm).  

 **Range** The value must be superior to 0.0.  




The default value is 50.0 mm.

**Default value**: `=  property(fget=__GetYSize, fset=__SetYSize)`

*Defined in `SpeosNX_2512.py` at line 14771*

---

#### `ZSampling` : str

`public` `static`

Gets or sets the Z sampling.

**Value type**: Integer.  

 **Range** The value must be superior to 0.  




The default value is 100.

**Default value**: `=  property(fget=__GetZSampling, fset=__SetZSampling)`

*Defined in `SpeosNX_2512.py` at line 14779*

---

#### `ZSize` : str

`public` `static`

Gets or sets the Z size.

**Value type**: Double (in mm).  

 **Range** The value must be superior to 0.0.  




The default value is 50.0 mm.

**Default value**: `=  property(fget=__GetZSize, fset=__SetZSize)`

*Defined in `SpeosNX_2512.py` at line 14787*

---

## Member Summary

| Member | Type |
|--------|------|
| `AxisSystem` | public |
| `SensorFilter` | public |
| `Type` | public |
| `XSampling` | public |
| `XSize` | public |
| `YSampling` | public |
| `YSize` | public |
| `ZSampling` | public |
| `ZSize` | public |
| `thisown` | public |
