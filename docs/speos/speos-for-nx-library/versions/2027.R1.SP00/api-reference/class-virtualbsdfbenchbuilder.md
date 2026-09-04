# VirtualBSDFBenchBuilder

## Class Inheritance

```mermaid
%%{init: {"securityLevel": "loose"}}%%
flowchart TD
    Builder["Builder"]
    click Builder "class-builder.md" "Open Builder"
    FeatureBuilder["FeatureBuilder"]
    click FeatureBuilder "class-featurebuilder.md" "Open FeatureBuilder"
    VirtualBSDFBenchBuilder["VirtualBSDFBenchBuilder"]
    click VirtualBSDFBenchBuilder "class-virtualbsdfbenchbuilder.md" "Open VirtualBSDFBenchBuilder"
    FeatureBuilder --> VirtualBSDFBenchBuilder
    Builder --> FeatureBuilder
```

**Classes:**

- [Builder](class-builder.md)
- [FeatureBuilder](class-featurebuilder.md)
- [VirtualBSDFBenchBuilder](class-virtualbsdfbenchbuilder.md)

## Description

Builder class for creating and configuring Virtual BSDF Bench features.

## Member Summary

| Member | Type |
| --- | --- |
| [CVirtualBSDFBenchBuilder](#cvirtualbsdfbenchbuilder) | public |
| [FeatureSimulation](#featuresimulation) | public |
| [Geometries](#geometries) | public |
| [XRatio](#xratio) | public |
| [YRatio](#yratio) | public |
| [UseIdenticalRatios](#useidenticalratios) | public |
| [PresetSettings](#presetsettings) | public |
| [BSDFSensitivity](#bsdfsensitivity) | public |
| [ColorSensitivity](#colorsensitivity) | public |
| [Anisotropic](#anisotropic) | public |
| [BSDF180](#bsdf180) | public |
| [NumberOfRays](#numberofrays) | public |
| [NumberOfRaysMultiplier](#numberofraysmultiplier) | public |
| [WavelengthStart](#wavelengthstart) | public |
| [WavelengthEnd](#wavelengthend) | public |
| [WavelengthSampling](#wavelengthsampling) | public |
| [SourceSamplingMode](#sourcesamplingmode) | public |
| [SourceThetaSampling](#sourcethetasampling) | public |
| [SourcePhiSampling](#sourcephisampling) | public |
| [SourcePhiSymmetry](#sourcephisymmetry) | public |
| [SourceAdaptiveSamplingFile](#sourceadaptivesamplingfile) | public |
| [SensorType](#sensortype) | public |
| [IntegrationAngle](#integrationangle) | public |
| [SensorAutomaticSampling](#sensorautomaticsampling) | public |
| [SensorSamplingMode](#sensorsamplingmode) | public |
| [SensorThetaSampling](#sensorthetasampling) | public |
| [SensorPhiSampling](#sensorphisampling) | public |
| [SensorAdaptiveSamplingFile](#sensoradaptivesamplingfile) | public |
| [StringSpeosFile](#stringspeosfile) | public |
| [StringIsolatedFolder](#stringisolatedfolder) | public |

## Public Member Functions

### CVirtualBSDFBenchBuilder

`explicit CVirtualBSDFBenchBuilder(self, pImpl)`

Constructs a CVirtualBSDFBenchBuilder with the specified implementation.  
@param pImpl Pointer to the internal implementation object.

**Parameters**:

- `SNXVirtualBSDFBenchBuilder pImpl`

## Public Static Attributes

### FeatureSimulation

`FeatureSimulation FeatureSimulation`

---

### Geometries

`list[int] Geometries`

---

### XRatio

`float XRatio`

---

### YRatio

`float YRatio`

---

### UseIdenticalRatios

`bool UseIdenticalRatios`

---

### PresetSettings

`bool PresetSettings`

---

### BSDFSensitivity

`int BSDFSensitivity`

---

### ColorSensitivity

`int ColorSensitivity`

---

### Anisotropic

`bool Anisotropic`

---

### BSDF180

`bool BSDF180`

---

### NumberOfRays

`int NumberOfRays`

---

### NumberOfRaysMultiplier

`int NumberOfRaysMultiplier`

---

### WavelengthStart

`float WavelengthStart`

---

### WavelengthEnd

`float WavelengthEnd`

---

### WavelengthSampling

`int WavelengthSampling`

---

### SourceSamplingMode

`int SourceSamplingMode`

---

### SourceThetaSampling

`int SourceThetaSampling`

---

### SourcePhiSampling

`int SourcePhiSampling`

---

### SourcePhiSymmetry

`int SourcePhiSymmetry`

---

### SourceAdaptiveSamplingFile

`str SourceAdaptiveSamplingFile`

---

### SensorType

`int SensorType`

---

### IntegrationAngle

`float IntegrationAngle`

---

### SensorAutomaticSampling

`bool SensorAutomaticSampling`

---

### SensorSamplingMode

`int SensorSamplingMode`

---

### SensorThetaSampling

`int SensorThetaSampling`

---

### SensorPhiSampling

`int SensorPhiSampling`

---

### SensorAdaptiveSamplingFile

`str SensorAdaptiveSamplingFile`

---

### StringSpeosFile

`str StringSpeosFile`

---

### StringIsolatedFolder

`str StringIsolatedFolder`
