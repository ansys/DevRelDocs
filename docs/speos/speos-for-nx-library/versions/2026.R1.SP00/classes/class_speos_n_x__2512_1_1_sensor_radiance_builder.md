---
uid: sensor_radiance_builder
title: SensorRadianceBuilder
---

# SensorRadianceBuilder

**Full Name**: `SpeosNX_2512::SensorRadianceBuilder`

**Language**: Python

**Inherits from**: `SensorCommonBuilder`

## Description

Represents a Radiance Sensor Builder.

The Radiance Sensor Builder is used to create and edit Radiance Sensor features.


To create a new instance of this class, use `FeatureCollection::CreateSensorRadianceBuilder`

## Properties

#### `thisown`

`public` `static`

*Defined in `SpeosNX_2512.py` at line 22300*

---

## Private Static Attributes

#### `__repr__`

`private` `static`

*Defined in `SpeosNX_2512.py` at line 22304*

---

## Public Static Attributes

#### `AutomaticFraming` : str

`public` `static`

Gets or sets the property to enable automatic framing.

**Prerequisite**: The DefinitionType must be 2 or the ObserverType must be 0.  




Automatic Framing reframes the camera on the radiance sensor.  




True : Enable Automatic Framing.  

 False : Disable Automatic Framing.  




**Value type**: Boolean.  




The default value is False.

**Default value**: `=  property(fget=__GetAutomaticFraming, fset=__SetAutomaticFraming)`

*Defined in `SpeosNX_2512.py` at line 22427*

---

#### `CameraName` : str

`public` `static`

Gets or sets the camera by its name.

**Prerequisite**: The DefinitionType property must be 1.  




**Value type**: String.  




The default value is an empty string.

**Default value**: `=  property(fget=__GetCameraName, fset=__SetCameraName)`

*Defined in `SpeosNX_2512.py` at line 22436*

---

#### `Definition` : str

`public` `static`

Gets or sets the definition type.

The values are:  

 0 - Frame.  

 1 - Camera.  

 2 - Observer.  




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetDefinition, fset=__SetDefinition)`

*Defined in `SpeosNX_2512.py` at line 22448*

---

#### `Focal` : str

`public` `static`

Gets or sets the focal.

**Prerequisite**: The DefinitionType property must be 2 or the ObserverType must be 0.  




Focal defines the distance between the sensor plane and the Observer point.  




**Value type**: Double (in mm).  

 **Range**: The value must be superior to 0.  




The default value is 250.0 mm.

**Default value**: `=  property(fget=__GetFocal, fset=__SetFocal)`

*Defined in `SpeosNX_2512.py` at line 22460*

---

#### `FrameObserverPoint` : str

`public` `static`

Gets or sets the frame observer point.

**Prerequisite**: The ObserverType must be 1.  




The property frame observer point takes a feature tag and returns a feature tag.  

 Defines the location of the frame.  




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetFrameObserverPoint, fset=__SetFrameObserverPoint)`

*Defined in `SpeosNX_2512.py` at line 22472*

---

#### `HVRatio` : str

`public` `static`

Gets or sets the H/V ratio.

**Prerequisite**: The DefinitionType property must be 1.  




H/V Ratio modifies the X Start and X End values according to the Y Start and Y End values.  




**Value type**: Double.  




The default value is 1.33.

**Default value**: `=  property(fget=__GetHVRatio, fset=__SetHVRatio)`

*Defined in `SpeosNX_2512.py` at line 22483*

---

#### `IntegrationAngle` : str

`public` `static`

Gets or sets the integration angle.

**Value type**: Double (in degrees).  

 **Range**: (0.0, 90.0)  




The default value is 5.0 degrees.

**Default value**: `=  property(fget=__GetIntegrationAngle, fset=__SetIntegrationAngle)`

*Defined in `SpeosNX_2512.py` at line 22491*

---

#### `Observer` : str

`public` `static`

Gets or sets the observer type.

**Prerequisite**: The DefinitionType property must be 0.  




The values are:  

 0 : Focal.  

 1 : Observer.  




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetObserver, fset=__SetObserver)`

*Defined in `SpeosNX_2512.py` at line 22504*

---

#### `ObserverFrontDirection` : str

`public` `static`

Gets or sets the observer front direction.

**Prerequisite**: The DefinitionType must be 2.  




The property observer front direction takes a feature tag and returns a feature tag.  




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetObserverFrontDirection, fset=__SetObserverFrontDirection)`

*Defined in `SpeosNX_2512.py` at line 22515*

---

#### `ObserverFrontDirectionReversed` : str

`public` `static`

Gets or sets the reverse direction of observer front direction.

**Prerequisite**: The DefinitionType must be 2.  




True: Reverses the observer front direction.  

 False: Does not reverse the Observer Front Direction.  




**Value type**: Boolean.  




The default value is False.

**Default value**: `=  property(fget=__GetObserverFrontDirectionReversed, fset=__SetObserverFrontDirectionReversed)`

*Defined in `SpeosNX_2512.py` at line 22527*

---

#### `ObserverHorizontalFOV` : str

`public` `static`

Gets or sets the observer horizontal field of view.

**Prerequisite**: The DefinitionType must be 2.  




**Value type**: Double (in degrees).  

 **Range**: (0, 180)  




The default value is 2.0 degrees.

**Default value**: `=  property(fget=__GetObserverHorizontalFOV, fset=__SetObserverHorizontalFOV)`

*Defined in `SpeosNX_2512.py` at line 22537*

---

#### `ObserverHorizontalResolution` : str

`public` `static`

Gets or sets the observer horizontal resolution.

**Prerequisite**: The DefinitionType must be 2.  




**Value type**: Integer.

**Default value**: `=  property(fget=__GetObserverHorizontalResolution)`

*Defined in `SpeosNX_2512.py` at line 22544*

---

#### `ObserverHorizontalSampling` : str

`public` `static`

Gets or sets the observer horizontal sampling.

**Prerequisite**: The DefinitionType must be 2.  




**Value type**: Integer.  

 **Range**: The value must be superior to 0.  




The default value is 100.

**Default value**: `=  property(fget=__GetObserverHorizontalSampling, fset=__SetObserverHorizontalSampling)`

*Defined in `SpeosNX_2512.py` at line 22554*

---

#### `ObserverPoint` : str

`public` `static`

Gets or sets the observer point.

**Prerequisite**: The DefinitionType must be 2.  




The property observer point takes a feature tag and returns a feature tag.  

 Defines the location of the observer.  




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetObserverPoint, fset=__SetObserverPoint)`

*Defined in `SpeosNX_2512.py` at line 22566*

---

#### `ObserverTopDirection` : str

`public` `static`

Gets or sets the observer top direction.

**Prerequisite**: The DefinitionType must be 2.  




The property observer top direction takes a feature tag and returns a feature tag.  




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetObserverTopDirection, fset=__SetObserverTopDirection)`

*Defined in `SpeosNX_2512.py` at line 22577*

---

#### `ObserverTopDirectionReversed` : str

`public` `static`

Gets or sets the reverse direction of observer top direction.

**Prerequisite**: The DefinitionType must be 2.  




True: Reverses the Observer top Direction.  

 False: Does not reverse the observer top direction.  




**Value type**: Boolean.  




The default value is False.

**Default value**: `=  property(fget=__GetObserverTopDirectionReversed, fset=__SetObserverTopDirectionReversed)`

*Defined in `SpeosNX_2512.py` at line 22589*

---

#### `ObserverVerticalFOV` : str

`public` `static`

Gets or sets the observer vertical field of view.

**Prerequisite**: The DefinitionType must be 2.  




**Value type**: Double.  

 **Range**: (0, 180)  




The default value is 2.0 degrees.

**Default value**: `=  property(fget=__GetObserverVerticalFOV, fset=__SetObserverVerticalFOV)`

*Defined in `SpeosNX_2512.py` at line 22599*

---

#### `ObserverVerticalResolution` : str

`public` `static`

Gets or sets the observer vertical resolution.

**Prerequisite**: The DefinitionType must be 2.  




**Value type**: Integer.

**Default value**: `=  property(fget=__GetObserverVerticalResolution)`

*Defined in `SpeosNX_2512.py` at line 22606*

---

#### `ObserverVerticalSampling` : str

`public` `static`

Gets or sets the observer vertical sampling.

**Prerequisite**: The DefinitionType must be 2.  




**Value type**: Integer.  

 **Range**: The value must be superior to 0.  




The default value is 100.

**Default value**: `=  property(fget=__GetObserverVerticalSampling, fset=__SetObserverVerticalSampling)`

*Defined in `SpeosNX_2512.py` at line 22616*

---

## Member Summary

| Member | Type |
|--------|------|
| `AutomaticFraming` | public |
| `CameraName` | public |
| `Definition` | public |
| `Focal` | public |
| `FrameObserverPoint` | public |
| `HVRatio` | public |
| `IntegrationAngle` | public |
| `Observer` | public |
| `ObserverFrontDirection` | public |
| `ObserverFrontDirectionReversed` | public |
| `ObserverHorizontalFOV` | public |
| `ObserverHorizontalResolution` | public |
| `ObserverHorizontalSampling` | public |
| `ObserverPoint` | public |
| `ObserverTopDirection` | public |
| `ObserverTopDirectionReversed` | public |
| `ObserverVerticalFOV` | public |
| `ObserverVerticalResolution` | public |
| `ObserverVerticalSampling` | public |
| `thisown` | public |
