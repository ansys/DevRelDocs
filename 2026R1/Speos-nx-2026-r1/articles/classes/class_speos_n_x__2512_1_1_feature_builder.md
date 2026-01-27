---
uid: feature_builder
title: FeatureBuilder
---

# FeatureBuilder

**Full Name**: `SpeosNX_2512::FeatureBuilder`

**Language**: Python

**Inherits from**: `Builder`

**Derived classes**: `Component3DTextureBuilder`, `ComponentAmbientMaterialBuilder`, `ComponentLightBoxExportBuilder`, `ComponentLightBoxImportBuilder`, `ComponentOpticalDesignExchangeBuilder`, `ComponentOpticalDesignExchangeResultBuilder`, `ComponentPolarizationPlateBuilder`, `FolderBuilder`, `LightExpertSensorGroupBuilder`, `OpticalPropertiesBuilder`, `ResultLXPBuilder`, `Sensor3DEnergyDensityBuilder`, `Sensor3DIrradianceBuilder`, `SensorCameraBuilder`, `SensorCommonBuilder`, `SensorHumanEyeBuilder`, `SensorLiDARBuilder`, `SensorLightFieldBuilder`, `SensorObserverBuilder`, `SensorPhysicalCameraBuilder`, `SensorVRImmersiveBuilder`, `SimulationCommonBuilder`, `SimulationLiDARBuilder`, `SourceAmbientCommonBuilder`, `SourceAmbientEnvironmentBuilder`, `SourceDisplayBuilder`, `SourceGroupBuilder`, `SourceInteractiveBuilder`, `SourceLightFieldBuilder`, `SourceLuminaireBuilder`, `SourceRayFileBuilder`, `SourceSurfaceBuilder`, `SourceSurfaceThermicBuilder`, `SpeosPatternBuilder`

## Description

A base class for all feature Builders.

A Builder is an object that is used to create and edit Features.


This is an abstract class that provides the basic functionality common to all builders. See the Builder subclasses for details of application-specific builders.


This is an abstract class, and cannot be instantiated.

## Properties

#### `thisown`

`public` `static`

*Defined in `SpeosNX_2512.py` at line 11836*

---

## Private Static Attributes

#### `__repr__`

`private` `static`

*Defined in `SpeosNX_2512.py` at line 11840*

---

## Public Static Attributes

#### `Feature` : str

`public` `static`

Returns the feature being edited, or the created feature if the builder is being used in creation mode.

Returns the feature currently being edited by this builder.  

 If a new feature is being created, and the builder has not yet been commited, returns Null. 

**Returns**: The feature being edited, or the created one or Null.

**Default value**: `=  property(fget=__GetFeature)`

*Defined in `SpeosNX_2512.py` at line 11870*

---

#### `FullName` : str

`public` `static`

Gets the full name of the feature being edited.

**Value type**: String.  




The default value is the current feature full name.

**Default value**: `=  property(fget=__GetFullName)`

*Defined in `SpeosNX_2512.py` at line 11877*

---

#### `Name` : str

`public` `static`

Gets or sets the name of the feature being edited.

**Value type**: String.  




The default value is the current feature name.

**Default value**: `=  property(fget=__GetName, fset=__SetName)`

*Defined in `SpeosNX_2512.py` at line 11884*

---

#### `NameWithContext` : str

`public` `static`

Gets the name with context of the feature being edited.

**Value type**: String.

**Default value**: `=  property(fget=__GetNameWithContext)`

*Defined in `SpeosNX_2512.py` at line 11889*

---

#### `Status` : str

`public` `static`

Returns the status of the feature being edited.

Returns a value corresponding to the status of the feature being edited.  




**Value type**: Integer.

**Default value**: `=  property(fget=__GetStatus)`

*Defined in `SpeosNX_2512.py` at line 11896*

---

## Public Methods

#### `ShowResult(self)`

`public`

Updates the feature to reflect the result of an edit to the feature for all builders that support showing results.

*Defined in `SpeosNX_2512.py` at line 11843*

---

## Member Summary

| Member | Type |
|--------|------|
| `Feature` | public |
| `FullName` | public |
| `Name` | public |
| `NameWithContext` | public |
| `ShowResult` | public |
| `Status` | public |
| `thisown` | public |
