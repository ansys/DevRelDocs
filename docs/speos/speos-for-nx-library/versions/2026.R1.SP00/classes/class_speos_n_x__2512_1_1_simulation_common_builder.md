---
uid: simulation_common_builder
title: SimulationCommonBuilder
---

# SimulationCommonBuilder

**Full Name**: `SpeosNX_2512::SimulationCommonBuilder`

**Language**: Python

**Inherits from**: `FeatureBuilder`

**Derived classes**: `SimulationDirectBuilder`, `SimulationInteractiveBuilder`, `SimulationInverseBuilder`

## Description

A base class for all Simulation Builders.

A Builder is an object that is used to create and edit Features.


This is an abstract class that provides the basic functionality common to all builders. See the Builder subclasses for details of application-specific builders.


This is an abstract class, and cannot be instantiated.

## Properties

#### `thisown`

`public` `static`

*Defined in `SpeosNX_2512.py` at line 18282*

---

## Private Static Attributes

#### `__repr__`

`private` `static`

*Defined in `SpeosNX_2512.py` at line 18286*

---

## Public Static Attributes

#### `AllPreset` : str

`public` `static`

Gets all Preset.

**Value type**: List of Preset object.

**Default value**: `=  property(fget=__GetAllPreset)`

*Defined in `SpeosNX_2512.py` at line 18387*

---

#### `AmbientMaterial` : str

`public` `static`

Gets or sets the ambient material.

The AmbientMaterial property takes a feature and returns a feature.  




**Value type**: Feature object.  




The default value is None.

**Default value**: `=  property(fget=__GetAmbientMaterial, fset=__SetAmbientMaterial)`

*Defined in `SpeosNX_2512.py` at line 18396*

---

#### `EstimatedRam` : str

`public` `static`

Gets the estimated RAM usage.

**Value type**: String.

**Default value**: `=  property(fget=__GetEstimatedRam)`

*Defined in `SpeosNX_2512.py` at line 18401*

---

#### `FeatureSimulation` : str

`public` `static`

Gets the simulation feature object.

Gets the simulation feature in order to launch simulations.  




**Value type**: FeatureSimulation object.

**Default value**: `=  property(fget=__GetFeatureSimulation)`

*Defined in `SpeosNX_2512.py` at line 18408*

---

#### `Geometries` : str

`public` `static`

Gets or sets geometries tag.

The Geometries property returns a list of feature tag. 

**Returns**: List of integer.

**Default value**: `=  property(fget=__GetGeometries, fset=__SetGeometries)`

*Defined in `SpeosNX_2512.py` at line 18414*

---

#### `LightExpert` : str

`public` `static`

Gets or sets the property to enable Light Expert.

True: Enables Light Expert.  

 False: Disables Light Expert.  




**Value type**: Boolean.  




The default value is False.

**Default value**: `=  property(fget=__GetLightExpert, fset=__SetLightExpert)`

*Defined in `SpeosNX_2512.py` at line 18424*

---

#### `Preset` : str

`public` `static`

Gets or sets the Preset object.

A preset is a predefined set of the general simulation settings.  




**Value type**: Preset object.  




The default value is None.

**Default value**: `=  property(fget=__GetPreset, fset=__SetPreset)`

*Defined in `SpeosNX_2512.py` at line 18433*

---

#### `Sensors` : str

`public` `static`

Gets or sets sensor features.

Gets or sets the current sensor features that are in the simulation.  




**Value type**: List of Feature object.

**Default value**: `=  property(fget=__GetSensors, fset=__SetSensors)`

*Defined in `SpeosNX_2512.py` at line 18440*

---

#### `Settings` : str

`public` `static`

Gets or sets the simulation settings.

**Value type**: SimulationSettings object.

**Default value**: `=  property(fget=__GetSettings, fset=__SetSettings)`

*Defined in `SpeosNX_2512.py` at line 18445*

---

#### `Sources` : str

`public` `static`

Gets or sets source features.

Gets or sets the current source features that are in the simulation.  




**Value type**: List of Feature object.

**Default value**: `=  property(fget=__GetSources, fset=__SetSources)`

*Defined in `SpeosNX_2512.py` at line 18452*

---

#### `StandardDeviation` : str

`public` `static`

Gets or sets the standard deviation.

**Prerequisite**: Only available with the inverse simulation with Monte Carlo algorithm and Optimized Propagation sets to Relative or Absolute.  




**Value type**: Double.  

 **Range**: ]0, 1[  




The default value is 0.05.

**Default value**: `=  property(fget=__GetStandardDeviation, fset=__SetStandardDeviation)`

*Defined in `SpeosNX_2512.py` at line 18462*

---

#### `UseAmbientMaterial` : str

`public` `static`

Gets or sets the property to enable ambient material.

True: Enables Ambient Material.  

 False: Disables Ambient Material.  




**Value type**: Boolean.  




The default value is False.

**Default value**: `=  property(fget=__GetUseAmbientMaterial, fset=__SetUseAmbientMaterial)`

*Defined in `SpeosNX_2512.py` at line 18472*

---

#### `UsePresetSettings` : str

`public` `static`

Gets or sets the property to enable preset settings.

True: Enable Preset Settings  

 False: Disable Preset Settings  




**Value type**: Boolean.  




The default value is False.

**Default value**: `=  property(fget=__GetUsePresetSettings, fset=__SetUsePresetSettings)`

*Defined in `SpeosNX_2512.py` at line 18482*

---

## Public Methods

#### `RemoveSources(self, sources)`

`public`

Deletes sources from the simulation.

**Parameters**:
- `sources`: 
: List of Feature object 





**Returns**: void.

*Defined in `SpeosNX_2512.py` at line 18298*

---

#### `RemoveGeometries(self, tags)`

`public`

Deletes geometries from the simulation.

The DeleteGeometries function takes a list of feature tag as parameter. 

**Parameters**:
- `tags`: 
: List of integer. 





**Returns**: void.

*Defined in `SpeosNX_2512.py` at line 18312*

---

#### `RemoveSensors(self, sensors)`

`public`

Deletes sensors from the simulation.

**Parameters**:
- `sensors`: 
: List of Feature object. 





**Returns**: void.

*Defined in `SpeosNX_2512.py` at line 18328*

---

## Member Summary

| Member | Type |
|--------|------|
| `AllPreset` | public |
| `AmbientMaterial` | public |
| `EstimatedRam` | public |
| `FeatureSimulation` | public |
| `Geometries` | public |
| `LightExpert` | public |
| `Preset` | public |
| `RemoveGeometries` | public |
| `RemoveSensors` | public |
| `RemoveSources` | public |
| `Sensors` | public |
| `Settings` | public |
| `Sources` | public |
| `StandardDeviation` | public |
| `UseAmbientMaterial` | public |
| `UsePresetSettings` | public |
| `thisown` | public |
