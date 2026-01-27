---
uid: feature_collection
title: FeatureCollection
---

# FeatureCollection

**Full Name**: `SpeosNX_2512::FeatureCollection`

**Language**: Python

**Inherits from**: `object`

## Description

Represents the collection of Speos features in a Part.

There is only one instance of FeatureCollection for each Part.  

 To obtain an instance of this class, refer to Part.

## Properties

#### `thisown`

`public` `static`

*Defined in `SpeosNX_2512.py` at line 9669*

---

## Private Static Attributes

#### `__repr__`

`private` `static`

*Defined in `SpeosNX_2512.py` at line 9673*

---

## Public Static Attributes

#### `OpticalPropertyFeatures` : str

`public` `static`

Returns all optical properties belonging to the part.

Returns a list containing all properties, including those for folders, but not the folder itself. **Value type**: List of Feature.

**Default value**: `=  property(fget=__GetOpticalPropertyFeatures)`

*Defined in `SpeosNX_2512.py` at line 10053*

---

#### `SensorFeatures` : str

`public` `static`

Returns all sensors belonging to the part.

Returns a list containing all sensors, including those for folders, but not the folder itself. **Value type**: List of Feature.

**Default value**: `=  property(fget=__GetSensorFeatures)`

*Defined in `SpeosNX_2512.py` at line 10058*

---

#### `SimulationFeatures` : str

`public` `static`

Returns all simulations belonging to the part.

Returns a list containing all simulations, including those for folders, but not the folder itself. **Value type**: List of Feature.

**Default value**: `=  property(fget=__GetSimulationFeatures)`

*Defined in `SpeosNX_2512.py` at line 10063*

---

#### `SourceFeatures` : str

`public` `static`

Returns all sources belonging to the part.

Returns a list containing all sources, including those for folders, but not the folder itself. **Value type**: List of Feature.

**Default value**: `=  property(fget=__GetSourceFeatures)`

*Defined in `SpeosNX_2512.py` at line 10068*

---

## Public Methods

#### `FindFromTag(self, tag)`

`public`

Finds the feature with the given Tag.

This function takes as parameter a feature tag. 

**Parameters**:
- `Tag`: 
: Integer. 





**Returns**: The feature with the given Tag.

*Defined in `SpeosNX_2512.py` at line 9676*

---

#### `FindFromName(self, name)`

`public`

Finds the feature with the given name.

This function only accepts a full feature name (e.g., "Direct Simulation (0)").  

 

**Parameters**:
- `name`: 
: String. 





**Returns**: The feature with the given name.

*Defined in `SpeosNX_2512.py` at line 9686*

---

#### `CreateSourceDisplayBuilder(self, featureToEdit)`

`public`

Creates a builder for a display source.

**Parameters**:
- `featureToEdit`: 
the feature to be edited or None to create a new feature. 





**Returns**: SourceDisplayBuilder object.

*Defined in `SpeosNX_2512.py` at line 9708*

---

#### `CreateSourceAmbientGeneralSkyBuilder(self, featureToEdit)`

`public`

Creates a builder for an ambient source with CIE General Sky type.

**Parameters**:
- `featureToEdit`: 
the feature to be edited or None to create a new feature. 





**Returns**: SourceAmbientGeneralSkyBuilder object.

*Defined in `SpeosNX_2512.py` at line 9716*

---

#### `CreateSourceAmbientNaturalLightBuilder(self, featureToEdit)`

`public`

Creates a builder for an ambient source with Natural Light type.

**Parameters**:
- `featureToEdit`: 
the feature to be edited or None to create a new feature. 





**Returns**: SourceAmbientNaturalLightBuilder object.

*Defined in `SpeosNX_2512.py` at line 9724*

---

#### `CreateSourceAmbientOvercastSkyBuilder(self, featureToEdit)`

`public`

Creates a builder for an ambient source with Overcast Sky type.

**Parameters**:
- `featureToEdit`: 
the feature to be edited or None to create a new feature. 





**Returns**: SourceAmbientOvercastSkyBuilder object.

*Defined in `SpeosNX_2512.py` at line 9732*

---

#### `CreateSourceAmbientUniformBuilder(self, featureToEdit)`

`public`

Creates a builder for an ambient source with Uniform type.

**Parameters**:
- `featureToEdit`: 
the feature to be edited or None to create a new feature. 





**Returns**: SourceAmbientUniformBuilder object.

*Defined in `SpeosNX_2512.py` at line 9740*

---

#### `CreateSourceAmbientUS1976Builder(self, featureToEdit)`

`public`

Creates a builder for an U.S.

Standard Atmosphere 1976 source. 

**Parameters**:
- `featureToEdit`: 
the feature to be edited or None to create a new feature. 





**Returns**: SourceAmbientUS1976SkyBuilder object.

*Defined in `SpeosNX_2512.py` at line 9748*

---

#### `CreateSourceLuminaireBuilder(self, featureToEdit)`

`public`

Creates a builder for a luminaire source.

**Parameters**:
- `featureToEdit`: 
the feature to be edited or None to create a new feature. 





**Returns**: SourceLuminaireBuilder object.

*Defined in `SpeosNX_2512.py` at line 9756*

---

#### `CreateSourceAmbientEnvironmentBuilder(self, featureToEdit)`

`public`

Creates a builder for an ambient environment source.

**Parameters**:
- `featureToEdit`: 
the feature to be edited or None to create a new feature. 





**Returns**: SourceAmbientEnvironmentBuilder object.

*Defined in `SpeosNX_2512.py` at line 9764*

---

#### `CreateSourceSurfaceBuilder(self, featureToEdit)`

`public`

Creates a builder for a surface source.

**Parameters**:
- `featureToEdit`: 
the feature to be edited or None to create a new feature. 





**Returns**: SourceSurfaceBuilder object.

*Defined in `SpeosNX_2512.py` at line 9772*

---

#### `CreateSourceRayFileBuilder(self, featureToEdit)`

`public`

Creates a builder for a ray file source.

**Parameters**:
- `featureToEdit`: 
the feature to be edited or None to create a new feature. 





**Returns**: SourceRayFileBuilder object.

*Defined in `SpeosNX_2512.py` at line 9780*

---

#### `CreateSourceSurfaceThermicBuilder(self, featureToEdit)`

`public`

Creates a builder for a thermic surface source.

**Parameters**:
- `featureToEdit`: 
the feature to be edited or None to create a new feature. 





**Returns**: SourceSurfaceThermicBuilder object.

*Defined in `SpeosNX_2512.py` at line 9788*

---

#### `CreateSourceGroupBuilder(self, featureToEdit)`

`public`

Creates a builder for a source group.

**Parameters**:
- `featureToEdit`: 
the feature to be edited or None to create a new feature. 





**Returns**: SourceGroup object.

*Defined in `SpeosNX_2512.py` at line 9796*

---

#### `CreateSourceLightFieldBuilder(self, featureToEdit)`

`public`

Creates a builder for a light field source.

**Parameters**:
- `featureToEdit`: 
the feature to be edited or None to create a new feature. 





**Returns**: SourceLightFieldBuilder object.

*Defined in `SpeosNX_2512.py` at line 9804*

---

#### `CreateSourceInteractiveBuilder(self, featureToEdit)`

`public`

Creates a builder for an interactive source.

**Parameters**:
- `featureToEdit`: 
the feature to be edited or None to create a new feature. 





**Returns**: SourceInteractiveBuilder object.

*Defined in `SpeosNX_2512.py` at line 9812*

---

#### `CreateSensorLightFieldBuilder(self, featureToEdit)`

`public`

Creates a builder for a light field sensor.

**Parameters**:
- `featureToEdit`: 
the feature to be edited or None to create a new feature. 





**Returns**: SensorLightFieldBuilder object.

*Defined in `SpeosNX_2512.py` at line 9820*

---

#### `CreateSensorRadianceBuilder(self, featureToEdit)`

`public`

Creates a builder for a radiance sensor.

**Parameters**:
- `featureToEdit`: 
the feature to be edited or None to create a new feature. 





**Returns**: SensorRadianceBuilder object.

*Defined in `SpeosNX_2512.py` at line 9828*

---

#### `CreateSensorIrradianceBuilder(self, featureToEdit)`

`public`

Creates a builder for an irradiance sensor.

**Parameters**:
- `featureToEdit`: 
the feature to be edited or None to create a new feature. 





**Returns**: SensorIrradianceBuilder object.

*Defined in `SpeosNX_2512.py` at line 9836*

---

#### `CreateSensorIntensityBuilder(self, featureToEdit)`

`public`

Creates a builder for an intensity sensor.

**Parameters**:
- `featureToEdit`: 
the feature to be edited or None to create a new feature. 





**Returns**: SensorIntensityBuilder object.

*Defined in `SpeosNX_2512.py` at line 9844*

---

#### `CreateSensor3DEnergyDensityBuilder(self, featureToEdit)`

`public`

Creates a builder for a 3D energy density sensor.

**Parameters**:
- `featureToEdit`: 
the feature to be edited or None to create a new feature. 





**Returns**: Sensor3DEnergyDensityBuilder object.

*Defined in `SpeosNX_2512.py` at line 9852*

---

#### `CreateSensorVRImmersiveBuilder(self, featureToEdit)`

`public`

Creates a builder for a VR immersive sensor.

**Parameters**:
- `featureToEdit`: 
the feature to be edited or None to create a new feature. 





**Returns**: SensorVRImmersiveBuilder object.

*Defined in `SpeosNX_2512.py` at line 9860*

---

#### `CreateSensor3DIrradianceBuilder(self, featureToEdit)`

`public`

Creates a builder for a 3D irradiance sensor.

**Parameters**:
- `featureToEdit`: 
the feature to be edited or None to create a new feature. 





**Returns**: Sensor3DIrradianceBuilder object.

*Defined in `SpeosNX_2512.py` at line 9868*

---

#### `CreateSensorObserverBuilder(self, featureToEdit)`

`public`

Creates a builder for an observer sensor.

**Parameters**:
- `featureToEdit`: 
the feature to be edited or None to create a new feature. 





**Returns**: SensorObserverBuilder object.

*Defined in `SpeosNX_2512.py` at line 9876*

---

#### `CreateSensorCameraBuilder(self, featureToEdit)`

`public`

Creates a builder for a camera sensor.

**Parameters**:
- `featureToEdit`: 
the feature to be edited or None to create a new feature. 





**Returns**: SensorCamera object.

*Defined in `SpeosNX_2512.py` at line 9884*

---

#### `CreateSensorHumanEyeBuilder(self, featureToEdit)`

`public`

Creates a builder for a human eye sensor.

**Parameters**:
- `featureToEdit`: 
the feature to be edited or None to create a new feature. 





**Returns**: SensorHumanEye object.

*Defined in `SpeosNX_2512.py` at line 9892*

---

#### `CreateSensorPhysicalCameraBuilder(self, featureToEdit)`

`public`

Creates a builder for an Physical Camera sensor.

**Parameters**:
- `featureToEdit`: 
the feature to be edited or None to create a new feature. 





**Returns**: SensorPhysicalCameraBuilder object.

*Defined in `SpeosNX_2512.py` at line 9900*

---

#### `CreateSimulationInteractiveBuilder(self, featureToEdit)`

`public`

Creates a builder for an interactive simulation.

**Parameters**:
- `featureToEdit`: 
the feature to be edited or None to create a new feature. 





**Returns**: SimulationInteractiveBuilder object.

*Defined in `SpeosNX_2512.py` at line 9908*

---

#### `CreateSimulationDirectBuilder(self, featureToEdit)`

`public`

Creates a builder for a direct simulation.

**Parameters**:
- `featureToEdit`: 
the feature to be edited or None to create a new feature. 





**Returns**: SimulationDirectBuilder object.

*Defined in `SpeosNX_2512.py` at line 9916*

---

#### `CreateSimulationInverseBuilder(self, featureToEdit)`

`public`

Creates a builder for an inverse simulation.

**Parameters**:
- `featureToEdit`: 
the feature to be edited or None to create a new feature. 





**Returns**: SimulationInverseBuilder object.

*Defined in `SpeosNX_2512.py` at line 9924*

---

#### `CreateSimulationLiDARBuilder(self, featureToEdit)`

`public`

Creates a builder for a LiDAR simulation.

**Parameters**:
- `featureToEdit`: 
the feature to be edited or None to create a new feature. 





**Returns**: SimulationLiDARBuilder object.

*Defined in `SpeosNX_2512.py` at line 9932*

---

#### `CreateComponentLightBoxImportBuilder(self, featureToEdit)`

`public`

Creates a builder for a light box import component.

**Parameters**:
- `featureToEdit`: 
the feature to be edited or None to create a new feature. 





**Returns**: CComponentLightBoxImpportBuilder object.

*Defined in `SpeosNX_2512.py` at line 9940*

---

#### `CreateComponentLightBoxExportBuilder(self, featureToEdit)`

`public`

Creates a builder for an export light box component.

**Parameters**:
- `featureToEdit`: 
the feature to be edited or None to create a new feature. 





**Returns**: CComponentLightBoxExportBuilder object.

*Defined in `SpeosNX_2512.py` at line 9948*

---

#### `CreateComponentAmbientMaterialBuilder(self, featureToEdit)`

`public`

Creates a builder for a Ambient Material component.

**Parameters**:
- `featureToEdit`: 
the feature to be edited or None to create a new feature. 





**Returns**: CComponentAmbientMaterialBuilder object.

*Defined in `SpeosNX_2512.py` at line 9956*

---

#### `CreateComponentOpticalDesignExchangeBuilder(self, featureToEdit)`

`public`

Creates a builder for a Optical Design Exchange component.

**Parameters**:
- `featureToEdit`: 
the feature to be edited or None to create a new feature. 





**Returns**: CComponentOpticalDesignExchangeBuilder object.

*Defined in `SpeosNX_2512.py` at line 9964*

---

#### `CreateOpticalPropertiesBuilder(self, featureToEdit)`

`public`

Creates a builder for an optical property.

**Parameters**:
- `featureToEdit`: 
the feature to be edited or None to create a new feature. 





**Returns**: OpticalPropertiesBuilder object.

*Defined in `SpeosNX_2512.py` at line 9972*

---

#### `CreateSpeosPatternBuilder(self, featureToEdit)`

`public`

Creates a builder for a Speos pattern.

**Parameters**:
- `featureToEdit`: 
the feature to be edited or None to create a new feature. 





**Returns**: SpeosPatternBuilder object.

*Defined in `SpeosNX_2512.py` at line 9980*

---

#### `CreateFolderBuilder(self, featureToEdit)`

`public`

Creates a builder for a Folder.

**Parameters**:
- `featureToEdit`: 
the feature to be edited or None to create a new feature. 





**Returns**: FolderBuilder object.

*Defined in `SpeosNX_2512.py` at line 9988*

---

#### `CreateComponentPolarizationPlateBuilder(self, featureToEdit)`

`public`

Creates a builder for a Polarization Plate Component.

**Parameters**:
- `featureToEdit`: 
the feature to be edited or None to create a new feature. 





**Returns**: ComponentPolarizationPlateBuilder object.

*Defined in `SpeosNX_2512.py` at line 9996*

---

#### `CreateComponent3DTextureBuilder(self, featureToEdit)`

`public`

Creates a builder for a 3D Texture Component.

**Parameters**:
- `featureToEdit`: 
the feature to be edited or None to create a new feature. 





**Returns**: Component3DTextureBuilder object.

*Defined in `SpeosNX_2512.py` at line 10004*

---

#### `CreateCopyPasteBuilder(self, featureToCopy)`

`public`

Creates a builder to copy/paste a feature.

**Parameters**:
- `featureToCopy`: 
the feature to be copied. 





**Returns**: CopyPasteBuilder object.

*Defined in `SpeosNX_2512.py` at line 10012*

---

#### `CreateSensorLiDARBuilder(self, featureToEdit)`

`public`

Creates a builder for a LiDAR sensor.

**Parameters**:
- `featureToEdit`: 
the feature to be edited or None to create a new feature. 





**Returns**: SensorLiDARBuilder object.

*Defined in `SpeosNX_2512.py` at line 10020*

---

#### `CreateLightExpertSensorGroupBuilder(self, featureToEdit)`

`public`

Creates a builder for a Light Expert Sensor Group.

**Parameters**:
- `featureToEdit`: 
the feature to be edited or None to create a new feature. 





**Returns**: LightExpertSensorGroupBuilder object.

*Defined in `SpeosNX_2512.py` at line 10028*

---

#### `CreateExportAsGeometryBuilder(self)`

`public`

Creates a builder for exporting features as geometry.

**Returns**: ExportAsGeometryBuilder object.

*Defined in `SpeosNX_2512.py` at line 10036*

---

#### `CreateResultLXPBuilder(self, featureToEdit)`

`public`

Creates a builder for light expert analysis.

**Returns**: ResultLXPBuilder object.

*Defined in `SpeosNX_2512.py` at line 10043*

---

## Member Summary

| Member | Type |
|--------|------|
| `CreateComponent3DTextureBuilder` | public |
| `CreateComponentAmbientMaterialBuilder` | public |
| `CreateComponentLightBoxExportBuilder` | public |
| `CreateComponentLightBoxImportBuilder` | public |
| `CreateComponentOpticalDesignExchangeBuilder` | public |
| `CreateComponentPolarizationPlateBuilder` | public |
| `CreateCopyPasteBuilder` | public |
| `CreateExportAsGeometryBuilder` | public |
| `CreateFolderBuilder` | public |
| `CreateLightExpertSensorGroupBuilder` | public |
| `CreateOpticalPropertiesBuilder` | public |
| `CreateResultLXPBuilder` | public |
| `CreateSensor3DEnergyDensityBuilder` | public |
| `CreateSensor3DIrradianceBuilder` | public |
| `CreateSensorCameraBuilder` | public |
| `CreateSensorHumanEyeBuilder` | public |
| `CreateSensorIntensityBuilder` | public |
| `CreateSensorIrradianceBuilder` | public |
| `CreateSensorLiDARBuilder` | public |
| `CreateSensorLightFieldBuilder` | public |
| `CreateSensorObserverBuilder` | public |
| `CreateSensorPhysicalCameraBuilder` | public |
| `CreateSensorRadianceBuilder` | public |
| `CreateSensorVRImmersiveBuilder` | public |
| `CreateSimulationDirectBuilder` | public |
| `CreateSimulationInteractiveBuilder` | public |
| `CreateSimulationInverseBuilder` | public |
| `CreateSimulationLiDARBuilder` | public |
| `CreateSourceAmbientEnvironmentBuilder` | public |
| `CreateSourceAmbientGeneralSkyBuilder` | public |
| `CreateSourceAmbientNaturalLightBuilder` | public |
| `CreateSourceAmbientOvercastSkyBuilder` | public |
| `CreateSourceAmbientUS1976Builder` | public |
| `CreateSourceAmbientUniformBuilder` | public |
| `CreateSourceDisplayBuilder` | public |
| `CreateSourceGroupBuilder` | public |
| `CreateSourceInteractiveBuilder` | public |
| `CreateSourceLightFieldBuilder` | public |
| `CreateSourceLuminaireBuilder` | public |
| `CreateSourceRayFileBuilder` | public |
| `CreateSourceSurfaceBuilder` | public |
| `CreateSourceSurfaceThermicBuilder` | public |
| `CreateSpeosPatternBuilder` | public |
| `FindFromName` | public |
| `FindFromTag` | public |
| `OpticalPropertyFeatures` | public |
| `SensorFeatures` | public |
| `SimulationFeatures` | public |
| `SourceFeatures` | public |
| `thisown` | public |
