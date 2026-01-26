---
uid: class_speos_n_x__2512_1_1_preferences
title: Preferences
---

# Preferences Class

**Namespace:** `SpeosNX`

**Inherits from:** `object`

Represents Speos for NX Preferences.

## Description

To obtain an instance of this class, refer to `Session::Preferences()`.

## Properties

| Name | Type | Description |
|------|------|-------------|
| `thisown` | `object` |  |
| `AutoFeatureUpdateOutsideSpeos` | `str` | Gets or sets the property to enable the automatic update of Speos feature outside Speos application. |
| `CreateSimulationSubFolder` | `str` | Gets or sets the property to enable a sub folder for simulation results. |
| `DefaultColorimetricStandard` | `str` | Gets or sets the CIE used by default in all simulations. |
| `DefaultDirectPreset` | `str` | Gets or sets the default preset to apply to new direct simulations. |
| `DefaultHOAPreset` | `str` | Gets or sets the default preset to be applied to new HOA simulations. |
| `DefaultIntensityViewingDirection` | `str` | Gets or sets the default intensity sensor viewing direction. |
| `DefaultInteractivePreset` | `str` | Gets or sets the default preset to be applied to new interactive simulations. |
| `DefaultInversePreset` | `str` | Gets or sets the default preset to be applied to new inverse simulations. |
| `DefaultLidarPreset` | `str` | Gets or sets the default preset to be applied to new Lidar simulations. |
| `DefaultRayFileFormat` | `str` | Gets or sets the default ray file format used in sensors and in direct simulations. |
| `DefaultVbbPreset` | `str` | Gets or sets the default preset to be applied to new Virtual BSDF Bench simulations. |
| `DefaultXMPViewer` | `str` | Gets or sets the default lab to display XMP files. |
| `EnableBetaFeatures` | `str` | Gets or sets the property to enable beta features. |
| `EnableDisplayOutsideSpeos` | `str` | Gets or sets the property to enable the display of Speos feature outside Speos application. |
| `EnableGPUExplore` | `str` | Gets or sets the property to enable GPU-Explore in simulation preview. |
| `IncrementSimulationResults` | `str` | Gets or sets the property to enable the increment of simulation results. |
| `InteractiveSimulationAutoUpdate` | `str` | Gets or sets the property to enable the automatic update of interactive simulations. |
| `LightBoxMeshingPreviewLimit` | `str` | Gets or sets the maximum number of triangles displayed in the lightbox mesh. |
| `NumberOfThreads` | `str` | Gets or sets the simulation number of threads. |
| `ReferenceSet` | `str` | Gets or sets the Reference Set name. |
| `ReferenceSetMode` | `str` | Gets or sets the content to load and display from a project. |
| `UpdateFeaturesOnLoad` | `str` | Gets or sets the property to enable the automatic update of Speos feature when loading the document. |
| `UseUserInputFolder` | `str` | Gets or sets the property to enable the use of a user input folder. |
| `UseUserIsolatedFolder` | `str` | Gets or sets the property to enable the use of a user isolated folder. |
| `UseUserOutputFolder` | `str` | Gets or sets the property to enable the use of a user output folder. |
| `UserInputFolder` | `str` | Gets or sets the path to the user input folder. |
| `UserIsolatedFolder` | `str` | Gets or sets the path to the user isolated folder. |
| `UserOutputFolder` | `str` | Gets or sets the path to the user output folder. |
| `VRSensorMemoryManagement` | `str` | Gets or sets the property to enable the VR memory management to limit memory usage. |

## Methods

### ResetDefaultValues

```python
ResetDefaultValues(self) -> 'None'
```

Initializes Speos for NX Preferences to their default values.



### Load

```python
Load(self) -> 'None'
```

Loads Speos for NX Preferences.



### Save

```python
Save(self) -> 'None'
```

Saves Speos for NX Preferences.


