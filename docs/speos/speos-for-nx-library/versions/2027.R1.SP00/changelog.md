# Changelog

## Release 2027 R1

**New features:**

- Simulations
  - Virtual BSDF Bench

**Improvements:**

- Add the possibility to reference Speos features from a sub component

**Some APIs have been renamed:**

- CComponentPolarizationPlateBuilder
  - Renamed DiattenuationType to DiattenuatorType
  - Renamed Angle to DiattenuatorAngle
  - Renamed MaterialFilePath to RetarderMaterialFilePath
  - Renamed OptimalWavelength to RetarderOptimalWavelength
- COpticalPropertiesBuilder
  - Renamed SOPParametersFilePath to SOPPluginParametersFilePath
  - Renamed Angle to MeshingAngle
  - Renamed SagMode to MeshingSagMode
  - Renamed SagValue to MeshingSagValue
  - Renamed StepMode to MeshingStepMode
  - Renamed StepValue to MeshingStepValue
  - Renamed SpecificParametersFacetEdges to UseMeshingSpecificParametersFacetEdges
- CSensor3DEnergyDensityBuilder
  - Renamed SensorFilter to Layers
- CSensor3DIrradianceBuilder
  - Renamed Layer to LayerType
- CSensorCameraBuilder
  - Renamed Layer to LayerType
- CSensorCommonBuilder
  - Renamed SensorFilter to Layers
- CSensorIntensityBuilder
  - Renamed PolarXStart to PolarHStart
  - Renamed PolarXEnd to PolarHEnd
  - Renamed PolarXSampling to PolarHSampling
  - Renamed PolarXResolution to PolarHResolution
  - Renamed PolarYStart to PolarVStart
  - Renamed PolarYEnd to PolarVEnd
  - Renamed PolarYSampling to PolarVSampling
  - Renamed PolarYResolution to PolarVResolution
- CSensorObserverBuilder
  - Added a new API: UseAutomaticFraming
  - Renamed AutoFramingHorizontal to AutomaticFramingHorizontal
  - Renamed AutoFramingVertical to AutomaticFramingVertical
- CSensorPhysicalCameraBuilder
  - Renamed RayTracerType to RayTracerPrecisionType
- CSensorRadianceBuilder
  - Renamed Observer to ObserverType
  - Renamed AutomaticFraming to UseAutomaticFraming
- CSensorVRImmersiveBuilder
  - Renamed Layer to LayerType
  - Renamed ActivateAutomaticFraming to UseAutomaticFraming
  - Renamed FramingFace to AutomaticFramingFace
- CSimulationDirectBuilder
  - Renamed RaysNumber to NumberOfRays
  - Renamed RayNumberMultiplier to NumberOfRaysMultiplier
- CSimulationInverseBuilder
  - Renamed GetSourcesFacesFilteringReferences to GetSourceFaceFilteringReferences
  - Renamed PassNumber to NumberOfPasses
- CSourceSurfaceBuilder
  - Renamed SourceSurfaceEmissiveFaces to EmissiveFaces
- CSourceSurfaceThermicBuilder
  - Renamed EmittanceFilePath to TemperatureFieldFilePath
- CSensorFilter renamed to CSensorLayers
  - Renamed LayerType to Type
  - Renamed one of the FindGroup to FindGroupFromName
  - Renamed one of the RemoveGroup to RemoveGroupFromName
- CSensorFilterGroup renamed to CSensorLayersGroup
- CSimulationSettings
  - Renamed MaximumImpactNumber to DirectMaximumImpact
  - Renamed MinimumEnergy to MinimumEnergyPercentage
  - Renamed IntermediateSaveFrequency to AutomaticSaveFrequency
  - Renamed MaxGatheringError to MaximumGatheringError
  - Renamed SpecularMaxImpact to SpecularMaximumImpact
  - Renamed MaxNeighbors to MaximumNeighbors
  - Renamed FinalGathering to UseFinalGathering
- CFeatureSimulation
  - Renamed RegenerationSpeosHPC to UpdateSpeosHPC
- FolderBuilder
  - Renamed one of the Remove to RemoveFeatures

## Release 2026 R1 Beta

**New features:**

- Components
  - Optical Design Exchange

## Release 2025 R2 Beta

**New features:**

- Copy-Paste
- Speos Preferences
- Light Expert Analysis
- Components
  - Polarization Plate
  - 3D Texture
  - Ambient Material
- Sources
  - Interactive
- Sensors
  - Light Expert Sensor Group
- Simulations
  - Results
  - Measures

## Release 2025 R1.1 Beta

**New features:**

- Sensors
  - LiDAR
- Simulations
  - LiDAR

## Release 2025 R1 Beta

**New features:**

- Sensors
  - Camera
  - Human Eye
- Components
  - Light Box Export
  - Light Box Import
- Sources
  - Thermic
  - Group

## Release 2024 R2 Beta

First version of the Speos for NX library for Python which includes the following Speos for NX features.

**New features:**

- Session
- Optical Property
- Sensors
  - Intensity
  - Irradiance
  - Observer
  - Radiance
  - Immersive
  - 3D Energy Density
  - 3D Irradiance
- Simulations
  - Direct
  - Interactive
  - Inverse
- Sources
  - Ambient
    - Environment
    - Natural Light
    - General Sky
    - Overcast Sky
    - Uniform
    - US 1976
  - Display
  - Luminaire
  - Ray File
  - Surface
