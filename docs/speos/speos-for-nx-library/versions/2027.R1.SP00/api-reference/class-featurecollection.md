# FeatureCollection

## Description

Represents the collection of Speos features in a Part.

## Member Summary

| Member | Type | Description |
| --- | --- | --- |
| [FindFromTag](#findfromtag) | public | Finds the feature with the given Tag. |
| [FindFromName](#findfromname) | public | Finds the feature with the given name. |
| [CreateSourceDisplayBuilder](#createsourcedisplaybuilder) | public | Creates a builder for a display source. |
| [CreateSourceAmbientGeneralSkyBuilder](#createsourceambientgeneralskybuilder) | public | Creates a builder for an ambient source with CIE General Sky type. |
| [CreateSourceAmbientNaturalLightBuilder](#createsourceambientnaturallightbuilder) | public | Creates a builder for an ambient source with Natural Light type. |
| [CreateSourceAmbientOvercastSkyBuilder](#createsourceambientovercastskybuilder) | public | Creates a builder for an ambient source with Overcast Sky type. |
| [CreateSourceAmbientUniformBuilder](#createsourceambientuniformbuilder) | public | Creates a builder for an ambient source with Uniform type. |
| [CreateSourceAmbientUS1976Builder](#createsourceambientus1976builder) | public | Creates a builder for an U.S. Standard Atmosphere 1976 source. |
| [CreateSourceLuminaireBuilder](#createsourceluminairebuilder) | public | Creates a builder for a luminaire source. |
| [CreateSourceAmbientEnvironmentBuilder](#createsourceambientenvironmentbuilder) | public | Creates a builder for an ambient environment source. |
| [CreateSourceSurfaceBuilder](#createsourcesurfacebuilder) | public | Creates a builder for a surface source. |
| [CreateSourceRayFileBuilder](#createsourcerayfilebuilder) | public | Creates a builder for a ray file source. |
| [CreateSourceSurfaceThermicBuilder](#createsourcesurfacethermicbuilder) | public | Creates a builder for a thermic surface source. |
| [CreateSourceGroupBuilder](#createsourcegroupbuilder) | public | Creates a builder for a source group. |
| [CreateSourceLightFieldBuilder](#createsourcelightfieldbuilder) | public | Creates a builder for a light field source. |
| [CreateSourceInteractiveBuilder](#createsourceinteractivebuilder) | public | Creates a builder for an interactive source. |
| [CreateSensorLightFieldBuilder](#createsensorlightfieldbuilder) | public | Creates a builder for a light field sensor. |
| [CreateSensorRadianceBuilder](#createsensorradiancebuilder) | public | Creates a builder for a radiance sensor. |
| [CreateSensorIrradianceBuilder](#createsensorirradiancebuilder) | public | Creates a builder for an irradiance sensor. |
| [CreateSensorIntensityBuilder](#createsensorintensitybuilder) | public | Creates a builder for an intensity sensor. |
| [CreateSensor3DEnergyDensityBuilder](#createsensor3denergydensitybuilder) | public | Creates a builder for a 3D energy density sensor. |
| [CreateSensorVRImmersiveBuilder](#createsensorvrimmersivebuilder) | public | Creates a builder for a VR immersive sensor. |
| [CreateSensor3DIrradianceBuilder](#createsensor3dirradiancebuilder) | public | Creates a builder for a 3D irradiance sensor. |
| [CreateSensorObserverBuilder](#createsensorobserverbuilder) | public | Creates a builder for an observer sensor. |
| [CreateSensorCameraBuilder](#createsensorcamerabuilder) | public | Creates a builder for a camera sensor. |
| [CreateSensorHumanEyeBuilder](#createsensorhumaneyebuilder) | public | Creates a builder for a human eye sensor. |
| [CreateSensorPhysicalCameraBuilder](#createsensorphysicalcamerabuilder) | public | Creates a builder for an Physical Camera sensor. |
| [CreateSimulationInteractiveBuilder](#createsimulationinteractivebuilder) | public | Creates a builder for an interactive simulation. |
| [CreateSimulationDirectBuilder](#createsimulationdirectbuilder) | public | Creates a builder for a direct simulation. |
| [CreateSimulationInverseBuilder](#createsimulationinversebuilder) | public | Creates a builder for an inverse simulation. |
| [CreateSimulationLiDARBuilder](#createsimulationlidarbuilder) | public | Creates a builder for a LiDAR simulation. |
| [CreateComponentLightBoxImportBuilder](#createcomponentlightboximportbuilder) | public | Creates a builder for a light box import component. |
| [CreateComponentLightBoxExportBuilder](#createcomponentlightboxexportbuilder) | public | Creates a builder for an export light box component. |
| [CreateComponentAmbientMaterialBuilder](#createcomponentambientmaterialbuilder) | public | Creates a builder for a Ambient Material component. |
| [CreateComponentOpticalDesignExchangeBuilder](#createcomponentopticaldesignexchangebuilder) | public | Creates a builder for a Optical Design Exchange component. |
| [CreateOpticalPropertiesBuilder](#createopticalpropertiesbuilder) | public | Creates a builder for an optical property. |
| [CreateSpeosPatternBuilder](#createspeospatternbuilder) | public | Creates a builder for a Speos pattern. |
| [CreateFolderBuilder](#createfolderbuilder) | public | Creates a builder for a Folder. |
| [CreateComponentPolarizationPlateBuilder](#createcomponentpolarizationplatebuilder) | public | Creates a builder for a Polarization Plate Component. |
| [CreateComponent3DTextureBuilder](#createcomponent3dtexturebuilder) | public | Creates a builder for a 3D Texture Component. |
| [CreateCopyPasteBuilder](#createcopypastebuilder) | public | Creates a builder to copy/paste a feature. |
| [CreateSensorLiDARBuilder](#createsensorlidarbuilder) | public | Creates a builder for a LiDAR sensor. |
| [CreateLightExpertSensorGroupBuilder](#createlightexpertsensorgroupbuilder) | public | Creates a builder for a Light Expert Sensor Group. |
| [CreateExportAsGeometryBuilder](#createexportasgeometrybuilder) | public | Creates a builder for exporting features as geometry. |
| [CreateResultLXPBuilder](#createresultlxpbuilder) | public | Creates a builder for light expert analysis. |
| [CreateVirtualBSDFBenchBuilder](#createvirtualbsdfbenchbuilder) | public | Creates a builder for a Virtual BSDF Bench feature. |
| [SourceFeatures](#sourcefeatures) | public | Returns all sources belonging to the part. |
| [SensorFeatures](#sensorfeatures) | public | Returns all sensors belonging to the part. |
| [OpticalPropertyFeatures](#opticalpropertyfeatures) | public | Returns all optical properties belonging to the part. |
| [SimulationFeatures](#simulationfeatures) | public | Returns all simulations belonging to the part. |

## Public Member Functions

### FindFromTag

`Feature FindFromTag(self, tag)`

Finds the feature with the given Tag.

This function takes as parameter a feature tag.

**Parameters**:

- `int tag`: The feature tag.

---

### FindFromName

`Feature FindFromName(self, name)`

Finds the feature with the given name.

This function only accepts a full feature name (e.g., "Direct Simulation (0)").

**Parameters**:

- `str name`: The feature name.

---

### CreateSourceDisplayBuilder

`SourceDisplayBuilder CreateSourceDisplayBuilder(self, featureToEdit)`

Creates a builder for a display source.

**Parameters**:

- `Feature featureToEdit`: The feature to be edited or None to create a new feature.

---

### CreateSourceAmbientGeneralSkyBuilder

`SourceAmbientGeneralSkyBuilder CreateSourceAmbientGeneralSkyBuilder(self, featureToEdit)`

Creates a builder for an ambient source with CIE General Sky type.

**Parameters**:

- `Feature featureToEdit`: The feature to be edited or None to create a new feature.

---

### CreateSourceAmbientNaturalLightBuilder

`SourceAmbientNaturalLightBuilder CreateSourceAmbientNaturalLightBuilder(self, featureToEdit)`

Creates a builder for an ambient source with Natural Light type.

**Parameters**:

- `Feature featureToEdit`: The feature to be edited or None to create a new feature.

---

### CreateSourceAmbientOvercastSkyBuilder

`SourceAmbientOvercastSkyBuilder CreateSourceAmbientOvercastSkyBuilder(self, featureToEdit)`

Creates a builder for an ambient source with Overcast Sky type.

**Parameters**:

- `Feature featureToEdit`: The feature to be edited or None to create a new feature.

---

### CreateSourceAmbientUniformBuilder

`SourceAmbientUniformBuilder CreateSourceAmbientUniformBuilder(self, featureToEdit)`

Creates a builder for an ambient source with Uniform type.

**Parameters**:

- `Feature featureToEdit`: The feature to be edited or None to create a new feature.

---

### CreateSourceAmbientUS1976Builder

`SourceAmbientUS1976Builder CreateSourceAmbientUS1976Builder(self, featureToEdit)`

Creates a builder for an U.S. Standard Atmosphere 1976 source.

**Parameters**:

- `Feature featureToEdit`: The feature to be edited or None to create a new feature.

---

### CreateSourceLuminaireBuilder

`SourceLuminaireBuilder CreateSourceLuminaireBuilder(self, featureToEdit)`

Creates a builder for a luminaire source.

**Parameters**:

- `Feature featureToEdit`: The feature to be edited or None to create a new feature.

---

### CreateSourceAmbientEnvironmentBuilder

`SourceAmbientEnvironmentBuilder CreateSourceAmbientEnvironmentBuilder(self, featureToEdit)`

Creates a builder for an ambient environment source.

**Parameters**:

- `Feature featureToEdit`: The feature to be edited or None to create a new feature.

---

### CreateSourceSurfaceBuilder

`SourceSurfaceBuilder CreateSourceSurfaceBuilder(self, featureToEdit)`

Creates a builder for a surface source.

**Parameters**:

- `Feature featureToEdit`: The feature to be edited or None to create a new feature.

---

### CreateSourceRayFileBuilder

`SourceRayFileBuilder CreateSourceRayFileBuilder(self, featureToEdit)`

Creates a builder for a ray file source.

**Parameters**:

- `Feature featureToEdit`: The feature to be edited or None to create a new feature.

---

### CreateSourceSurfaceThermicBuilder

`SourceSurfaceThermicBuilder CreateSourceSurfaceThermicBuilder(self, featureToEdit)`

Creates a builder for a thermic surface source.

**Parameters**:

- `Feature featureToEdit`: The feature to be edited or None to create a new feature.

---

### CreateSourceGroupBuilder

`SourceGroupBuilder CreateSourceGroupBuilder(self, featureToEdit)`

Creates a builder for a source group.

**Parameters**:

- `Feature featureToEdit`: The feature to be edited or None to create a new feature.

---

### CreateSourceLightFieldBuilder

`SourceLightFieldBuilder CreateSourceLightFieldBuilder(self, featureToEdit)`

Creates a builder for a light field source.

**Parameters**:

- `Feature featureToEdit`: The feature to be edited or None to create a new feature.

---

### CreateSourceInteractiveBuilder

`SourceInteractiveBuilder CreateSourceInteractiveBuilder(self, featureToEdit)`

Creates a builder for an interactive source.

**Parameters**:

- `Feature featureToEdit`: The feature to be edited or None to create a new feature.

---

### CreateSensorLightFieldBuilder

`SensorLightFieldBuilder CreateSensorLightFieldBuilder(self, featureToEdit)`

Creates a builder for a light field sensor.

**Parameters**:

- `Feature featureToEdit`: The feature to be edited or None to create a new feature.

---

### CreateSensorRadianceBuilder

`SensorRadianceBuilder CreateSensorRadianceBuilder(self, featureToEdit)`

Creates a builder for a radiance sensor.

**Parameters**:

- `Feature featureToEdit`: The feature to be edited or None to create a new feature.

---

### CreateSensorIrradianceBuilder

`SensorIrradianceBuilder CreateSensorIrradianceBuilder(self, featureToEdit)`

Creates a builder for an irradiance sensor.

**Parameters**:

- `Feature featureToEdit`: The feature to be edited or None to create a new feature.

---

### CreateSensorIntensityBuilder

`SensorIntensityBuilder CreateSensorIntensityBuilder(self, featureToEdit)`

Creates a builder for an intensity sensor.

**Parameters**:

- `Feature featureToEdit`: The feature to be edited or None to create a new feature.

---

### CreateSensor3DEnergyDensityBuilder

`Sensor3DEnergyDensityBuilder CreateSensor3DEnergyDensityBuilder(self, featureToEdit)`

Creates a builder for a 3D energy density sensor.

**Parameters**:

- `Feature featureToEdit`: The feature to be edited or None to create a new feature.

---

### CreateSensorVRImmersiveBuilder

`SensorVRImmersiveBuilder CreateSensorVRImmersiveBuilder(self, featureToEdit)`

Creates a builder for a VR immersive sensor.

**Parameters**:

- `Feature featureToEdit`: The feature to be edited or None to create a new feature.

---

### CreateSensor3DIrradianceBuilder

`Sensor3DIrradianceBuilder CreateSensor3DIrradianceBuilder(self, featureToEdit)`

Creates a builder for a 3D irradiance sensor.

**Parameters**:

- `Feature featureToEdit`: The feature to be edited or None to create a new feature.

---

### CreateSensorObserverBuilder

`SensorObserverBuilder CreateSensorObserverBuilder(self, featureToEdit)`

Creates a builder for an observer sensor.

**Parameters**:

- `Feature featureToEdit`: The feature to be edited or None to create a new feature.

---

### CreateSensorCameraBuilder

`SensorCameraBuilder CreateSensorCameraBuilder(self, featureToEdit)`

Creates a builder for a camera sensor.

**Parameters**:

- `Feature featureToEdit`: The feature to be edited or None to create a new feature.

---

### CreateSensorHumanEyeBuilder

`SensorHumanEyeBuilder CreateSensorHumanEyeBuilder(self, featureToEdit)`

Creates a builder for a human eye sensor.

**Parameters**:

- `Feature featureToEdit`: The feature to be edited or None to create a new feature.

---

### CreateSensorPhysicalCameraBuilder

`SensorPhysicalCameraBuilder CreateSensorPhysicalCameraBuilder(self, featureToEdit)`

Creates a builder for an Physical Camera sensor.

**Parameters**:

- `Feature featureToEdit`: The feature to be edited or None to create a new feature.

---

### CreateSimulationInteractiveBuilder

`SimulationInteractiveBuilder CreateSimulationInteractiveBuilder(self, featureToEdit)`

Creates a builder for an interactive simulation.

**Parameters**:

- `Feature featureToEdit`: The feature to be edited or None to create a new feature.

---

### CreateSimulationDirectBuilder

`SimulationDirectBuilder CreateSimulationDirectBuilder(self, featureToEdit)`

Creates a builder for a direct simulation.

**Parameters**:

- `Feature featureToEdit`: The feature to be edited or None to create a new feature.

---

### CreateSimulationInverseBuilder

`SimulationInverseBuilder CreateSimulationInverseBuilder(self, featureToEdit)`

Creates a builder for an inverse simulation.

**Parameters**:

- `Feature featureToEdit`: The feature to be edited or None to create a new feature.

---

### CreateSimulationLiDARBuilder

`SimulationLiDARBuilder CreateSimulationLiDARBuilder(self, featureToEdit)`

Creates a builder for a LiDAR simulation.

**Parameters**:

- `Feature featureToEdit`: The feature to be edited or None to create a new feature.

---

### CreateComponentLightBoxImportBuilder

`ComponentLightBoxImportBuilder CreateComponentLightBoxImportBuilder(self, featureToEdit)`

Creates a builder for a light box import component.

**Parameters**:

- `Feature featureToEdit`: The feature to be edited or None to create a new feature.

---

### CreateComponentLightBoxExportBuilder

`ComponentLightBoxExportBuilder CreateComponentLightBoxExportBuilder(self, featureToEdit)`

Creates a builder for an export light box component.

**Parameters**:

- `Feature featureToEdit`: The feature to be edited or None to create a new feature.

---

### CreateComponentAmbientMaterialBuilder

`ComponentAmbientMaterialBuilder CreateComponentAmbientMaterialBuilder(self, featureToEdit)`

Creates a builder for a Ambient Material component.

**Parameters**:

- `Feature featureToEdit`: The feature to be edited or None to create a new feature.

---

### CreateComponentOpticalDesignExchangeBuilder

`ComponentOpticalDesignExchangeBuilder CreateComponentOpticalDesignExchangeBuilder(self, featureToEdit)`

Creates a builder for a Optical Design Exchange component.

**Parameters**:

- `Feature featureToEdit`: The feature to be edited or None to create a new feature.

---

### CreateOpticalPropertiesBuilder

`OpticalPropertiesBuilder CreateOpticalPropertiesBuilder(self, featureToEdit)`

Creates a builder for an optical property.

**Parameters**:

- `Feature featureToEdit`: The feature to be edited or None to create a new feature.

---

### CreateSpeosPatternBuilder

`SpeosPatternBuilder CreateSpeosPatternBuilder(self, featureToEdit)`

Creates a builder for a Speos pattern.

**Parameters**:

- `Feature featureToEdit`: The feature to be edited or None to create a new feature.

---

### CreateFolderBuilder

`FolderBuilder CreateFolderBuilder(self, featureToEdit)`

Creates a builder for a Folder.

**Parameters**:

- `Feature featureToEdit`: The feature to be edited or None to create a new feature.

---

### CreateComponentPolarizationPlateBuilder

`ComponentPolarizationPlateBuilder CreateComponentPolarizationPlateBuilder(self, featureToEdit)`

Creates a builder for a Polarization Plate Component.

**Parameters**:

- `Feature featureToEdit`: The feature to be edited or None to create a new feature.

---

### CreateComponent3DTextureBuilder

`Component3DTextureBuilder CreateComponent3DTextureBuilder(self, featureToEdit)`

Creates a builder for a 3D Texture Component.

**Parameters**:

- `Feature featureToEdit`: The feature to be edited or None to create a new feature.

---

### CreateCopyPasteBuilder

`CopyPasteBuilder CreateCopyPasteBuilder(self, featureToCopy)`

Creates a builder to copy/paste a feature.

**Parameters**:

- `Feature featureToCopy`: The feature to be copied.

---

### CreateSensorLiDARBuilder

`SensorLiDARBuilder CreateSensorLiDARBuilder(self, featureToEdit)`

Creates a builder for a LiDAR sensor.

**Parameters**:

- `Feature featureToEdit`: The feature to be edited or None to create a new feature.

---

### CreateLightExpertSensorGroupBuilder

`LightExpertSensorGroupBuilder CreateLightExpertSensorGroupBuilder(self, featureToEdit)`

Creates a builder for a Light Expert Sensor Group.

**Parameters**:

- `Feature featureToEdit`: The feature to be edited or None to create a new feature.

---

### CreateExportAsGeometryBuilder

`ExportAsGeometryBuilder CreateExportAsGeometryBuilder(self)`

Creates a builder for exporting features as geometry.

---

### CreateResultLXPBuilder

`ResultLXPBuilder CreateResultLXPBuilder(self, featureToEdit)`

Creates a builder for light expert analysis.

**Parameters**:

- `Feature featureToEdit`: The feature to be edited.

---

### CreateVirtualBSDFBenchBuilder

`VirtualBSDFBenchBuilder CreateVirtualBSDFBenchBuilder(self, featureToEdit)`

Creates a builder for a Virtual BSDF Bench feature.

**Parameters**:

- `Feature featureToEdit`: The feature to be edited or None to create a new feature.

## Public Static Attributes

### SourceFeatures

`list[Feature] SourceFeatures`

Returns all sources belonging to the part.

Returns a list containing all sources, including those for folders, but not the folder itself.  
**Value type**: List of Feature.

---

### SensorFeatures

`list[Feature] SensorFeatures`

Returns all sensors belonging to the part.

Returns a list containing all sensors, including those for folders, but not the folder itself.  
**Value type**: List of Feature.

---

### OpticalPropertyFeatures

`list[Feature] OpticalPropertyFeatures`

Returns all optical properties belonging to the part.

Returns a list containing all properties, including those for folders, but not the folder itself.  
**Value type**: List of Feature.

---

### SimulationFeatures

`list[Feature] SimulationFeatures`

Returns all simulations belonging to the part.

Returns a list containing all simulations, including those for folders, but not the folder itself.  
**Value type**: List of Feature.
