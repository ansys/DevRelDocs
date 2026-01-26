---
uid: class_speos_n_x__2512_1_1_feature_collection
title: FeatureCollection
---

# FeatureCollection Class

**Namespace:** `SpeosNX`

**Inherits from:** `object`

Represents the collection of Speos features in a Part.

## Description

There is only one instance of FeatureCollection for each Part.
 To obtain an instance of this class, refer to Part.

## Properties

| Name | Type | Description |
|------|------|-------------|
| `thisown` | `object` |  |
| `OpticalPropertyFeatures` | `str` | Returns all optical properties belonging to the part. |
| `SensorFeatures` | `str` | Returns all sensors belonging to the part. |
| `SimulationFeatures` | `str` | Returns all simulations belonging to the part. |
| `SourceFeatures` | `str` | Returns all sources belonging to the part. |

## Methods

### FindFromTag

```python
FindFromTag(self, tag) -> '`Feature`'
```

Finds the feature with the given Tag.

This function takes as parameter a feature tag. 
**Parameters:**
- `Tag`: : Integer.


**Returns:** The feature with the given Tag.

**Parameters:**

- `tag` (tag)

### FindFromName

```python
FindFromName(self, name) -> '`Feature`'
```

Finds the feature with the given name.

This function only accepts a full feature name (e.g., "Direct Simulation (0)").
 
**Parameters:**
- `name`: : String.


**Returns:** The feature with the given name.

**Parameters:**

- `name` (name)

### CreateSourceDisplayBuilder

```python
CreateSourceDisplayBuilder(self, featureToEdit) -> '`SourceDisplayBuilder`'
```

Creates a builder for a display source.

**Parameters:**
- `featureToEdit`: the feature to be edited or None to create a new feature.


**Returns:** SourceDisplayBuilder object.

**Parameters:**

- `featureToEdit` (featureToEdit)

### CreateSourceAmbientGeneralSkyBuilder

```python
CreateSourceAmbientGeneralSkyBuilder(self, featureToEdit) -> '`SourceAmbientGeneralSkyBuilder`'
```

Creates a builder for an ambient source with CIE General Sky type.

**Parameters:**
- `featureToEdit`: the feature to be edited or None to create a new feature.


**Returns:** SourceAmbientGeneralSkyBuilder object.

**Parameters:**

- `featureToEdit` (featureToEdit)

### CreateSourceAmbientNaturalLightBuilder

```python
CreateSourceAmbientNaturalLightBuilder(self, featureToEdit) -> '`SourceAmbientNaturalLightBuilder`'
```

Creates a builder for an ambient source with Natural Light type.

**Parameters:**
- `featureToEdit`: the feature to be edited or None to create a new feature.


**Returns:** SourceAmbientNaturalLightBuilder object.

**Parameters:**

- `featureToEdit` (featureToEdit)

### CreateSourceAmbientOvercastSkyBuilder

```python
CreateSourceAmbientOvercastSkyBuilder(self, featureToEdit) -> '`SourceAmbientOvercastSkyBuilder`'
```

Creates a builder for an ambient source with Overcast Sky type.

**Parameters:**
- `featureToEdit`: the feature to be edited or None to create a new feature.


**Returns:** SourceAmbientOvercastSkyBuilder object.

**Parameters:**

- `featureToEdit` (featureToEdit)

### CreateSourceAmbientUniformBuilder

```python
CreateSourceAmbientUniformBuilder(self, featureToEdit) -> '`SourceAmbientUniformBuilder`'
```

Creates a builder for an ambient source with Uniform type.

**Parameters:**
- `featureToEdit`: the feature to be edited or None to create a new feature.


**Returns:** SourceAmbientUniformBuilder object.

**Parameters:**

- `featureToEdit` (featureToEdit)

### CreateSourceAmbientUS1976Builder

```python
CreateSourceAmbientUS1976Builder(self, featureToEdit) -> '`SourceAmbientUS1976Builder`'
```

Creates a builder for an U.S.

Standard Atmosphere 1976 source. 
**Parameters:**
- `featureToEdit`: the feature to be edited or None to create a new feature.


**Returns:** SourceAmbientUS1976SkyBuilder object.

**Parameters:**

- `featureToEdit` (featureToEdit)

### CreateSourceLuminaireBuilder

```python
CreateSourceLuminaireBuilder(self, featureToEdit) -> '`SourceLuminaireBuilder`'
```

Creates a builder for a luminaire source.

**Parameters:**
- `featureToEdit`: the feature to be edited or None to create a new feature.


**Returns:** SourceLuminaireBuilder object.

**Parameters:**

- `featureToEdit` (featureToEdit)

### CreateSourceAmbientEnvironmentBuilder

```python
CreateSourceAmbientEnvironmentBuilder(self, featureToEdit) -> '`SourceAmbientEnvironmentBuilder`'
```

Creates a builder for an ambient environment source.

**Parameters:**
- `featureToEdit`: the feature to be edited or None to create a new feature.


**Returns:** SourceAmbientEnvironmentBuilder object.

**Parameters:**

- `featureToEdit` (featureToEdit)

### CreateSourceSurfaceBuilder

```python
CreateSourceSurfaceBuilder(self, featureToEdit) -> '`SourceSurfaceBuilder`'
```

Creates a builder for a surface source.

**Parameters:**
- `featureToEdit`: the feature to be edited or None to create a new feature.


**Returns:** SourceSurfaceBuilder object.

**Parameters:**

- `featureToEdit` (featureToEdit)

### CreateSourceRayFileBuilder

```python
CreateSourceRayFileBuilder(self, featureToEdit) -> '`SourceRayFileBuilder`'
```

Creates a builder for a ray file source.

**Parameters:**
- `featureToEdit`: the feature to be edited or None to create a new feature.


**Returns:** SourceRayFileBuilder object.

**Parameters:**

- `featureToEdit` (featureToEdit)

### CreateSourceSurfaceThermicBuilder

```python
CreateSourceSurfaceThermicBuilder(self, featureToEdit) -> '`SourceSurfaceThermicBuilder`'
```

Creates a builder for a thermic surface source.

**Parameters:**
- `featureToEdit`: the feature to be edited or None to create a new feature.


**Returns:** SourceSurfaceThermicBuilder object.

**Parameters:**

- `featureToEdit` (featureToEdit)

### CreateSourceGroupBuilder

```python
CreateSourceGroupBuilder(self, featureToEdit) -> '`SourceGroupBuilder`'
```

Creates a builder for a source group.

**Parameters:**
- `featureToEdit`: the feature to be edited or None to create a new feature.


**Returns:** SourceGroup object.

**Parameters:**

- `featureToEdit` (featureToEdit)

### CreateSourceLightFieldBuilder

```python
CreateSourceLightFieldBuilder(self, featureToEdit) -> '`SourceLightFieldBuilder`'
```

Creates a builder for a light field source.

**Parameters:**
- `featureToEdit`: the feature to be edited or None to create a new feature.


**Returns:** SourceLightFieldBuilder object.

**Parameters:**

- `featureToEdit` (featureToEdit)

### CreateSourceInteractiveBuilder

```python
CreateSourceInteractiveBuilder(self, featureToEdit) -> '`SourceInteractiveBuilder`'
```

Creates a builder for an interactive source.

**Parameters:**
- `featureToEdit`: the feature to be edited or None to create a new feature.


**Returns:** SourceInteractiveBuilder object.

**Parameters:**

- `featureToEdit` (featureToEdit)

### CreateSensorLightFieldBuilder

```python
CreateSensorLightFieldBuilder(self, featureToEdit) -> '`SensorLightFieldBuilder`'
```

Creates a builder for a light field sensor.

**Parameters:**
- `featureToEdit`: the feature to be edited or None to create a new feature.


**Returns:** SensorLightFieldBuilder object.

**Parameters:**

- `featureToEdit` (featureToEdit)

### CreateSensorRadianceBuilder

```python
CreateSensorRadianceBuilder(self, featureToEdit) -> '`SensorRadianceBuilder`'
```

Creates a builder for a radiance sensor.

**Parameters:**
- `featureToEdit`: the feature to be edited or None to create a new feature.


**Returns:** SensorRadianceBuilder object.

**Parameters:**

- `featureToEdit` (featureToEdit)

### CreateSensorIrradianceBuilder

```python
CreateSensorIrradianceBuilder(self, featureToEdit) -> '`SensorIrradianceBuilder`'
```

Creates a builder for an irradiance sensor.

**Parameters:**
- `featureToEdit`: the feature to be edited or None to create a new feature.


**Returns:** SensorIrradianceBuilder object.

**Parameters:**

- `featureToEdit` (featureToEdit)

### CreateSensorIntensityBuilder

```python
CreateSensorIntensityBuilder(self, featureToEdit) -> '`SensorIntensityBuilder`'
```

Creates a builder for an intensity sensor.

**Parameters:**
- `featureToEdit`: the feature to be edited or None to create a new feature.


**Returns:** SensorIntensityBuilder object.

**Parameters:**

- `featureToEdit` (featureToEdit)

### CreateSensor3DEnergyDensityBuilder

```python
CreateSensor3DEnergyDensityBuilder(self, featureToEdit) -> '`Sensor3DEnergyDensityBuilder`'
```

Creates a builder for a 3D energy density sensor.

**Parameters:**
- `featureToEdit`: the feature to be edited or None to create a new feature.


**Returns:** Sensor3DEnergyDensityBuilder object.

**Parameters:**

- `featureToEdit` (featureToEdit)

### CreateSensorVRImmersiveBuilder

```python
CreateSensorVRImmersiveBuilder(self, featureToEdit) -> '`SensorVRImmersiveBuilder`'
```

Creates a builder for a VR immersive sensor.

**Parameters:**
- `featureToEdit`: the feature to be edited or None to create a new feature.


**Returns:** SensorVRImmersiveBuilder object.

**Parameters:**

- `featureToEdit` (featureToEdit)

### CreateSensor3DIrradianceBuilder

```python
CreateSensor3DIrradianceBuilder(self, featureToEdit) -> '`Sensor3DIrradianceBuilder`'
```

Creates a builder for a 3D irradiance sensor.

**Parameters:**
- `featureToEdit`: the feature to be edited or None to create a new feature.


**Returns:** Sensor3DIrradianceBuilder object.

**Parameters:**

- `featureToEdit` (featureToEdit)

### CreateSensorObserverBuilder

```python
CreateSensorObserverBuilder(self, featureToEdit) -> '`SensorObserverBuilder`'
```

Creates a builder for an observer sensor.

**Parameters:**
- `featureToEdit`: the feature to be edited or None to create a new feature.


**Returns:** SensorObserverBuilder object.

**Parameters:**

- `featureToEdit` (featureToEdit)

### CreateSensorCameraBuilder

```python
CreateSensorCameraBuilder(self, featureToEdit) -> '`SensorCameraBuilder`'
```

Creates a builder for a camera sensor.

**Parameters:**
- `featureToEdit`: the feature to be edited or None to create a new feature.


**Returns:** SensorCamera object.

**Parameters:**

- `featureToEdit` (featureToEdit)

### CreateSensorHumanEyeBuilder

```python
CreateSensorHumanEyeBuilder(self, featureToEdit) -> '`SensorHumanEyeBuilder`'
```

Creates a builder for a human eye sensor.

**Parameters:**
- `featureToEdit`: the feature to be edited or None to create a new feature.


**Returns:** SensorHumanEye object.

**Parameters:**

- `featureToEdit` (featureToEdit)

### CreateSensorPhysicalCameraBuilder

```python
CreateSensorPhysicalCameraBuilder(self, featureToEdit) -> '`SensorPhysicalCameraBuilder`'
```

Creates a builder for an Physical Camera sensor.

**Parameters:**
- `featureToEdit`: the feature to be edited or None to create a new feature.


**Returns:** SensorPhysicalCameraBuilder object.

**Parameters:**

- `featureToEdit` (featureToEdit)

### CreateSimulationInteractiveBuilder

```python
CreateSimulationInteractiveBuilder(self, featureToEdit) -> '`SimulationInteractiveBuilder`'
```

Creates a builder for an interactive simulation.

**Parameters:**
- `featureToEdit`: the feature to be edited or None to create a new feature.


**Returns:** SimulationInteractiveBuilder object.

**Parameters:**

- `featureToEdit` (featureToEdit)

### CreateSimulationDirectBuilder

```python
CreateSimulationDirectBuilder(self, featureToEdit) -> '`SimulationDirectBuilder`'
```

Creates a builder for a direct simulation.

**Parameters:**
- `featureToEdit`: the feature to be edited or None to create a new feature.


**Returns:** SimulationDirectBuilder object.

**Parameters:**

- `featureToEdit` (featureToEdit)

### CreateSimulationInverseBuilder

```python
CreateSimulationInverseBuilder(self, featureToEdit) -> '`SimulationInverseBuilder`'
```

Creates a builder for an inverse simulation.

**Parameters:**
- `featureToEdit`: the feature to be edited or None to create a new feature.


**Returns:** SimulationInverseBuilder object.

**Parameters:**

- `featureToEdit` (featureToEdit)

### CreateSimulationLiDARBuilder

```python
CreateSimulationLiDARBuilder(self, featureToEdit) -> '`SimulationLiDARBuilder`'
```

Creates a builder for a LiDAR simulation.

**Parameters:**
- `featureToEdit`: the feature to be edited or None to create a new feature.


**Returns:** SimulationLiDARBuilder object.

**Parameters:**

- `featureToEdit` (featureToEdit)

### CreateComponentLightBoxImportBuilder

```python
CreateComponentLightBoxImportBuilder(self, featureToEdit) -> '`ComponentLightBoxImportBuilder`'
```

Creates a builder for a light box import component.

**Parameters:**
- `featureToEdit`: the feature to be edited or None to create a new feature.


**Returns:** CComponentLightBoxImpportBuilder object.

**Parameters:**

- `featureToEdit` (featureToEdit)

### CreateComponentLightBoxExportBuilder

```python
CreateComponentLightBoxExportBuilder(self, featureToEdit) -> '`ComponentLightBoxExportBuilder`'
```

Creates a builder for an export light box component.

**Parameters:**
- `featureToEdit`: the feature to be edited or None to create a new feature.


**Returns:** CComponentLightBoxExportBuilder object.

**Parameters:**

- `featureToEdit` (featureToEdit)

### CreateComponentAmbientMaterialBuilder

```python
CreateComponentAmbientMaterialBuilder(self, featureToEdit) -> '`ComponentAmbientMaterialBuilder`'
```

Creates a builder for a Ambient Material component.

**Parameters:**
- `featureToEdit`: the feature to be edited or None to create a new feature.


**Returns:** CComponentAmbientMaterialBuilder object.

**Parameters:**

- `featureToEdit` (featureToEdit)

### CreateComponentOpticalDesignExchangeBuilder

```python
CreateComponentOpticalDesignExchangeBuilder(self, featureToEdit) -> '`ComponentOpticalDesignExchangeBuilder`'
```

Creates a builder for a Optical Design Exchange component.

**Parameters:**
- `featureToEdit`: the feature to be edited or None to create a new feature.


**Returns:** CComponentOpticalDesignExchangeBuilder object.

**Parameters:**

- `featureToEdit` (featureToEdit)

### CreateOpticalPropertiesBuilder

```python
CreateOpticalPropertiesBuilder(self, featureToEdit) -> '`OpticalPropertiesBuilder`'
```

Creates a builder for an optical property.

**Parameters:**
- `featureToEdit`: the feature to be edited or None to create a new feature.


**Returns:** OpticalPropertiesBuilder object.

**Parameters:**

- `featureToEdit` (featureToEdit)

### CreateSpeosPatternBuilder

```python
CreateSpeosPatternBuilder(self, featureToEdit) -> '`SpeosPatternBuilder`'
```

Creates a builder for a Speos pattern.

**Parameters:**
- `featureToEdit`: the feature to be edited or None to create a new feature.


**Returns:** SpeosPatternBuilder object.

**Parameters:**

- `featureToEdit` (featureToEdit)

### CreateFolderBuilder

```python
CreateFolderBuilder(self, featureToEdit) -> '`FolderBuilder`'
```

Creates a builder for a Folder.

**Parameters:**
- `featureToEdit`: the feature to be edited or None to create a new feature.


**Returns:** FolderBuilder object.

**Parameters:**

- `featureToEdit` (featureToEdit)

### CreateComponentPolarizationPlateBuilder

```python
CreateComponentPolarizationPlateBuilder(self, featureToEdit) -> '`ComponentPolarizationPlateBuilder`'
```

Creates a builder for a Polarization Plate Component.

**Parameters:**
- `featureToEdit`: the feature to be edited or None to create a new feature.


**Returns:** ComponentPolarizationPlateBuilder object.

**Parameters:**

- `featureToEdit` (featureToEdit)

### CreateComponent3DTextureBuilder

```python
CreateComponent3DTextureBuilder(self, featureToEdit) -> '`Component3DTextureBuilder`'
```

Creates a builder for a 3D Texture Component.

**Parameters:**
- `featureToEdit`: the feature to be edited or None to create a new feature.


**Returns:** Component3DTextureBuilder object.

**Parameters:**

- `featureToEdit` (featureToEdit)

### CreateCopyPasteBuilder

```python
CreateCopyPasteBuilder(self, featureToCopy) -> '`CopyPasteBuilder`'
```

Creates a builder to copy/paste a feature.

**Parameters:**
- `featureToCopy`: the feature to be copied.


**Returns:** CopyPasteBuilder object.

**Parameters:**

- `featureToCopy` (featureToCopy)

### CreateSensorLiDARBuilder

```python
CreateSensorLiDARBuilder(self, featureToEdit) -> '`SensorLiDARBuilder`'
```

Creates a builder for a LiDAR sensor.

**Parameters:**
- `featureToEdit`: the feature to be edited or None to create a new feature.


**Returns:** SensorLiDARBuilder object.

**Parameters:**

- `featureToEdit` (featureToEdit)

### CreateLightExpertSensorGroupBuilder

```python
CreateLightExpertSensorGroupBuilder(self, featureToEdit) -> '`LightExpertSensorGroupBuilder`'
```

Creates a builder for a Light Expert Sensor Group.

**Parameters:**
- `featureToEdit`: the feature to be edited or None to create a new feature.


**Returns:** LightExpertSensorGroupBuilder object.

**Parameters:**

- `featureToEdit` (featureToEdit)

### CreateExportAsGeometryBuilder

```python
CreateExportAsGeometryBuilder(self) -> '`ExportAsGeometryBuilder`'
```

Creates a builder for exporting features as geometry.

**Returns:** ExportAsGeometryBuilder object.

### CreateResultLXPBuilder

```python
CreateResultLXPBuilder(self, featureToEdit) -> '`ResultLXPBuilder`'
```

Creates a builder for light expert analysis.

**Returns:** ResultLXPBuilder object.

**Parameters:**

- `featureToEdit` (featureToEdit)
