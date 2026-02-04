---
uid: simulation_li_d_a_r_builder
title: SimulationLiDARBuilder
---

# SimulationLiDARBuilder

**Full Name**: `SpeosNX_2512::SimulationLiDARBuilder`

**Language**: Python

**Inherits from**: `FeatureBuilder`

## Description

Represents an LiDAR Simulation Builder.

The LiDAR Simulation Builder is used to create and edit LiDAR Simulation features.


To create a new instance of this class, use `FeatureCollection::CreateSimulationLiDARBuilder`

## Properties

#### `thisown`

`public` `static`

*Defined in `SpeosNX_2512.py` at line 18494*

---

## Private Static Attributes

#### `__repr__`

`private` `static`

*Defined in `SpeosNX_2512.py` at line 18498*

---

## Public Static Attributes

#### `AllPreset` : str

`public` `static`

Gets all Preset.

**Value type**: List of Preset object.

**Default value**: `=  property(fget=__GetAllPreset)`

*Defined in `SpeosNX_2512.py` at line 18660*

---

#### `AmbientMaterial` : str

`public` `static`

Gets or sets the ambient material.

The AmbientMaterial property takes a feature and returns a feature.  




**Value type**: Feature object.  




The default value is None.

**Default value**: `=  property(fget=__GetAmbientMaterial, fset=__SetAmbientMaterial)`

*Defined in `SpeosNX_2512.py` at line 18669*

---

#### `Duration` : str

`public` `static`

Gets or sets the duration.

**Prerequisite**: The StopOnDuration property must be True.  




Time necessary to reach for the simulation to end.   




**Value type**: Double (in second).  

 **Range**: The value must be superior to 0.0.  




The default value is 1800.0 s.

**Default value**: `=  property(fget=__GetDuration, fset=__SetDuration)`

*Defined in `SpeosNX_2512.py` at line 18681*

---

#### `FamilySelection` : str

`public` `static`

Gets or sets the family selection list.

**Prerequisite**: The UseFamilyTables property must be True.  




Selects the configurations to run with the simulation.


**Value type**: List of string.  




The default value is an empty list.

**Default value**: `=  property(fget=__GetFamilySelection, fset=__SetFamilySelection)`

*Defined in `SpeosNX_2512.py` at line 18692*

---

#### `FeatureSimulation` : str

`public` `static`

Gets the simulation feature object.

Gets the simulation feature in order to launch simulations.  




**Value type**: FeatureSimulation object.

**Default value**: `=  property(fget=__GetFeatureSimulation)`

*Defined in `SpeosNX_2512.py` at line 18699*

---

#### `FieldsOfView` : str

`public` `static`

Gets or sets the property to enable the field of view.

True: Enables the visualization of the source, sensor and lidar fields of view to be displayed in the 3D view after simulation.  

 False: Disables the visualization of the source, sensor and lidar fields of view to be displayed in the 3D view after simulation.  




**Value type**: Boolean.  




The default value is True.

**Default value**: `=  property(fget=__GetFieldsOfView, fset=__SetFieldsOfView)`

*Defined in `SpeosNX_2512.py` at line 18709*

---

#### `Geometries` : str

`public` `static`

Gets or sets geometries tag.

The Geometries property returns a list of feature tag. 

**Returns**: List of integer.

**Default value**: `=  property(fget=__GetGeometries, fset=__SetGeometries)`

*Defined in `SpeosNX_2512.py` at line 18715*

---

#### `MapOfDepth` : str

`public` `static`

Gets or sets the property to enable the map of depth.

True: Enables the map of depth to be generated after simulation.  

 False: Disables the map of depth to be generated after simulation.  




**Value type**: Boolean.  




The default value is True.

**Default value**: `=  property(fget=__GetMapOfDepth, fset=__SetMapOfDepth)`

*Defined in `SpeosNX_2512.py` at line 18725*

---

#### `Preset` : str

`public` `static`

Gets or sets the Preset object.

A preset is a predefined set of the general simulation settings.  




**Value type**: Preset object.  




The default value is None.

**Default value**: `=  property(fget=__GetPreset, fset=__SetPreset)`

*Defined in `SpeosNX_2512.py` at line 18734*

---

#### `RawTimeOfFlight` : str

`public` `static`

Gets or sets the property to enable the raw time of flight.

True: Enables the raw time of flight.  

 False: Disables the raw time of flight.  




**Value type**: Boolean.  




The default value is True.

**Default value**: `=  property(fget=__GetRawTimeOfFlight, fset=__SetRawTimeOfFlight)`

*Defined in `SpeosNX_2512.py` at line 18744*

---

#### `RayNumberMultiplier` : str

`public` `static`

Gets or sets the ray number multiplier.

**Prerequisite**: The StopOnRaysNumber property must be True.  




The values are:  

 0 - Rays.  

 1 - Kilo-Rays.  

 2 - Mega-Rays.  

 3 - Giga-Rays.


**Value type**: Integer.  




The default value is 1.

**Default value**: `=  property(fget=__GetRayNumberMultiplier, fset=__SetRayNumberMultiplier)`

*Defined in `SpeosNX_2512.py` at line 18759*

---

#### `RaysNumber` : str

`public` `static`

Gets or sets the number of rays.

**Prerequisite**: The StopOnRaysNumber property must be True.  




Number of rays necessary to reach for the simulation to end.  




**Value type**: Integer.  

 **Range**: The value must be superior to 0.  




The default value is 200.

**Default value**: `=  property(fget=__GetRaysNumber, fset=__SetRaysNumber)`

*Defined in `SpeosNX_2512.py` at line 18771*

---

#### `SensorPixelGridSampling` : str

`public` `static`

Gets or sets the pixel grid sampling of the sensor.

**Value type**: Integer.  

 **Range**: The value must be superior to 0.  




The default value is 5.

**Default value**: `=  property(fget=__GetSensorPixelGridSampling, fset=__SetSensorPixelGridSampling)`

*Defined in `SpeosNX_2512.py` at line 18780*

---

#### `Sensors` : str

`public` `static`

Gets or sets sensor features.

Gets or sets the current sensor features that are in the simulation.  




**Value type**: List of Feature object.

**Default value**: `=  property(fget=__GetSensors, fset=__SetSensors)`

*Defined in `SpeosNX_2512.py` at line 18787*

---

#### `Settings` : str

`public` `static`

Gets or sets the simulation settings.

**Value type**: SimulationSettings object.

**Default value**: `=  property(fget=__GetSettings, fset=__SetSettings)`

*Defined in `SpeosNX_2512.py` at line 18792*

---

#### `SourceGridSampling` : str

`public` `static`

Gets or sets the grid sampling of the source.

**Value type**: Integer.  

 **Range**: The value must be superior to 0.  




The default value is 100000.

**Default value**: `=  property(fget=__GetSourceGridSampling, fset=__SetSourceGridSampling)`

*Defined in `SpeosNX_2512.py` at line 18801*

---

#### `StopOnDuration` : str

`public` `static`

Gets or sets the property to stop on duration.

True: Enables stop on Duration property  

 False: Disables stop on Duration property  




**Value type**: Boolean.  




The default value is False.

**Default value**: `=  property(fget=__GetStopOnDuration, fset=__SetStopOnDuration)`

*Defined in `SpeosNX_2512.py` at line 18811*

---

#### `StopOnRaysNumber` : str

`public` `static`

Gets or sets the property to enable stop on rays number.

True: Enables stop on RaysNumber property.  

 False: Disables stop on RaysNumber property.  




**Value type**: Boolean.  




The default value is True.

**Default value**: `=  property(fget=__GetStopOnRaysNumber, fset=__SetStopOnRaysNumber)`

*Defined in `SpeosNX_2512.py` at line 18821*

---

#### `Timeline` : str

`public` `static`

Gets or sets the property to enable the timeline.

True: Enables the Timeline.  

 False: Disables the Timeline.  




**Value type**: Boolean.  




The default value is False.

**Default value**: `=  property(fget=__GetTimeline, fset=__SetTimeline)`

*Defined in `SpeosNX_2512.py` at line 18831*

---

#### `TimelineEnd` : str

`public` `static`

Gets or sets the timeline end.

**Prerequisite**: The Timeline property must be True.  




**Value type**: Double (in second).  

 **Range**: The value must be superior to the timeline start.  




The default value is 500.0 s.

**Default value**: `=  property(fget=__GetTimelineEnd, fset=__SetTimelineEnd)`

*Defined in `SpeosNX_2512.py` at line 18841*

---

#### `TimelineStart` : str

`public` `static`

Gets or sets the timeline start.

**Prerequisite**: The Timeline property must be True.  




**Value type**: Double (in second).  

 **Range**: The value must be superior to 0.0.  




The default value is 0.0 s.

**Default value**: `=  property(fget=__GetTimelineStart, fset=__SetTimelineStart)`

*Defined in `SpeosNX_2512.py` at line 18851*

---

#### `UseAmbientMaterial` : str

`public` `static`

Gets or sets the property to enable ambient material.

True: Enables Ambient Material.  

 False: Disables Ambient Material.  




**Value type**: Boolean.  




The default value is False.

**Default value**: `=  property(fget=__GetUseAmbientMaterial, fset=__SetUseAmbientMaterial)`

*Defined in `SpeosNX_2512.py` at line 18861*

---

#### `UsePartFamilies` : str

`public` `static`

Gets or sets the property to use family tables.

True: Enables multi-configuration to run in the simulation.  

 False: Disables multi-configuration to run in the simulation.  




**Value type**: Boolean.  




The default value is False.

**Default value**: `=  property(fget=__GetUsePartFamilies, fset=__SetUsePartFamilies)`

*Defined in `SpeosNX_2512.py` at line 18871*

---

#### `UsePresetSettings` : str

`public` `static`

Gets or sets the property to enable preset settings.

True: Enables Preset Settings  

 False: Disables Preset Settings  




**Value type**: Boolean.  




The default value is False.

**Default value**: `=  property(fget=__GetUsePresetSettings, fset=__SetUsePresetSettings)`

*Defined in `SpeosNX_2512.py` at line 18881*

---

## Public Methods

#### `RemoveGeometries(self, tags)`

`public`

Deletes geometries from the simulation.

The DeleteGeometries function takes a list of feature tag as parameter. 

**Parameters**:
- `tags`: 
: List of integer. 





**Returns**: void.

*Defined in `SpeosNX_2512.py` at line 18507*

---

#### `RemoveSensors(self, sensors)`

`public`

Deletes sensors from the simulation.

**Parameters**:
- `sensors`: 
: List of Feature object. 





**Returns**: void.

*Defined in `SpeosNX_2512.py` at line 18523*

---

## Member Summary

| Member | Type |
|--------|------|
| `AllPreset` | public |
| `AmbientMaterial` | public |
| `Duration` | public |
| `FamilySelection` | public |
| `FeatureSimulation` | public |
| `FieldsOfView` | public |
| `Geometries` | public |
| `MapOfDepth` | public |
| `Preset` | public |
| `RawTimeOfFlight` | public |
| `RayNumberMultiplier` | public |
| `RaysNumber` | public |
| `RemoveGeometries` | public |
| `RemoveSensors` | public |
| `SensorPixelGridSampling` | public |
| `Sensors` | public |
| `Settings` | public |
| `SourceGridSampling` | public |
| `StopOnDuration` | public |
| `StopOnRaysNumber` | public |
| `Timeline` | public |
| `TimelineEnd` | public |
| `TimelineStart` | public |
| `UseAmbientMaterial` | public |
| `UsePartFamilies` | public |
| `UsePresetSettings` | public |
| `thisown` | public |
