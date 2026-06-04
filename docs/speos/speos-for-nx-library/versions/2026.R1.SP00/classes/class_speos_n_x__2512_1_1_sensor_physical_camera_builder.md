---
uid: sensor_physical_camera_builder
title: SensorPhysicalCameraBuilder
---

# SensorPhysicalCameraBuilder

**Full Name**: `SpeosNX_2512::SensorPhysicalCameraBuilder`

**Language**: Python

**Inherits from**: `FeatureBuilder`

## Description

Represents a Sensor Physical Camera builder.

The Sensor Physical Camera builder is used to create and edit Sensor Physical Camera features.  




To create a new instance of this class, use `FeatureCollection::CreateSensorPhysicalCameraBuilder`

## Properties

#### `thisown`

`public` `static`

*Defined in `SpeosNX_2512.py` at line 17821*

---

## Private Static Attributes

#### `__repr__`

`private` `static`

*Defined in `SpeosNX_2512.py` at line 17825*

---

## Public Static Attributes

#### `AxisSystem` : str

`public` `static`

Gets the Axis System of the Sensor.

**Value type**: AxisSystem object.

**Default value**: `=  property(fget=__GetAxisSystem)`

*Defined in `SpeosNX_2512.py` at line 17879*

---

#### `LightBoxFilePath` : str

`public` `static`

Gets or sets the property light box file path.

**Value type**: String.  




The default value is an empty file path (string).

**Default value**: `=  property(fget=__GetLightBoxFilePath, fset=__SetLightBoxFilePath)`

*Defined in `SpeosNX_2512.py` at line 17886*

---

#### `LightBoxPassword` : str

`public` `static`

Sets the Light Box file password.

**Value type**: String.  




The default value is an empty string.

**Default value**: `=  property(fset=__SetLightBoxPassword)`

*Defined in `SpeosNX_2512.py` at line 17894*

---

#### `NumberOfSequences` : str

`public` `static`

Gets or sets the number of sequences.

**Value type**: Integer.  

 **Range**: The value must be superior to 0.  




The default value is 10.

**Default value**: `=  property(fget=__GetNumberOfSequences, fset=__SetNumberOfSequences)`

*Defined in `SpeosNX_2512.py` at line 17903*

---

#### `PreviewMode` : str

`public` `static`

Gets or sets the preview mode.

The values are:  

 0 - Meshing.  

 1 - BoundingBox.  




**Value type**: Integer.  




The default value is Meshing (0).

**Default value**: `=  property(fget=__GetPreviewMode, fset=__SetPreviewMode)`

*Defined in `SpeosNX_2512.py` at line 17914*

---

#### `RayTracerType` : str

`public` `static`

Gets or sets the ray tracer type.

The values are:  

 0 - Double.  

 1 - Single.  




**Value type**: Integer.  




The default value is Double.

**Default value**: `=  property(fget=__GetRayTracerType, fset=__SetRayTracerType)`

*Defined in `SpeosNX_2512.py` at line 17925*

---

#### `Sensor` : str

`public` `static`

Gets or sets the irradiance sensor.

The Sensor property takes and returns a Tag from an irradiance.  




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetSensor, fset=__SetSensor)`

*Defined in `SpeosNX_2512.py` at line 17934*

---

#### `SequenceFilePath` : str

`public` `static`

Gets or sets the property sequence file path.

**Prerequisite**: The UseSequenceFile property must be True.  

 **Value type**: String.  




The default value is an empty file path (string).

**Default value**: `=  property(fget=__GetSequenceFilePath, fset=__SetSequenceFilePath)`

*Defined in `SpeosNX_2512.py` at line 17942*

---

#### `UseSequenceFile` : str

`public` `static`

Gets or sets the property to enable the use of a sequence file.

True: Enables Sequence File.   

 False: Disables Sequence File.   




**Value type**: Boolean.

**Default value**: `=  property(fget=__GetUseSequenceFile, fset=__SetUseSequenceFile)`

*Defined in `SpeosNX_2512.py` at line 17950*

---

## Member Summary

| Member | Type |
|--------|------|
| `AxisSystem` | public |
| `LightBoxFilePath` | public |
| `LightBoxPassword` | public |
| `NumberOfSequences` | public |
| `PreviewMode` | public |
| `RayTracerType` | public |
| `Sensor` | public |
| `SequenceFilePath` | public |
| `UseSequenceFile` | public |
| `thisown` | public |
