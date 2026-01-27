---
uid: preferences
title: Preferences
---

# Preferences

**Full Name**: `SpeosNX_2512::Preferences`

**Language**: Python

**Inherits from**: `object`

## Description

Represents Speos for NX Preferences.

To obtain an instance of this class, refer to `Session::Preferences()`.

## Properties

#### `thisown`

`public` `static`

*Defined in `SpeosNX_2512.py` at line 8923*

---

## Private Static Attributes

#### `__repr__`

`private` `static`

*Defined in `SpeosNX_2512.py` at line 8927*

---

## Public Static Attributes

#### `AutoFeatureUpdateOutsideSpeos` : str

`public` `static`

Gets or sets the property to enable the automatic update of Speos feature outside Speos application.

True: Enables automatic update of Speos feature outside Speos application.  

 False: Disables automatic update of Speos feature outside Speos application.  




**Value type**: Boolean.  




The default value is True.

**Default value**: `=  property(fget=__GetAutoFeatureUpdateOutsideSpeos, fset=__SetAutoFeatureUpdateOutsideSpeos)`

*Defined in `SpeosNX_2512.py` at line 9123*

---

#### `CreateSimulationSubFolder` : str

`public` `static`

Gets or sets the property to enable a sub folder for simulation results.

True: Enables simulation sub folder.  

 False: Disables simulation sub folder.  




**Value type**: Boolean.  




The default value is True.

**Default value**: `=  property(fget=__GetCreateSimulationSubFolder, fset=__SetCreateSimulationSubFolder)`

*Defined in `SpeosNX_2512.py` at line 9133*

---

#### `DefaultColorimetricStandard` : str

`public` `static`

Gets or sets the CIE used by default in all simulations.

The values are:  

 0 - CIE 1931 Standard.  

 1 - CIE 1964 Standard.  




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetDefaultColorimetricStandard, fset=__SetDefaultColorimetricStandard)`

*Defined in `SpeosNX_2512.py` at line 9144*

---

#### `DefaultDirectPreset` : str

`public` `static`

Gets or sets the default preset to apply to new direct simulations.

Preset is identified by an internal GUID **Value type**: String.  




The default value is empty.

**Default value**: `=  property(fget=__GetDefaultDirectPreset, fset=__SetDefaultDirectPreset)`

*Defined in `SpeosNX_2512.py` at line 9152*

---

#### `DefaultHOAPreset` : str

`public` `static`

Gets or sets the default preset to be applied to new HOA simulations.

Preset is identified by an internal GUID **Value type**: String.  




The default value is empty.

**Default value**: `=  property(fget=__GetDefaultHOAPreset, fset=__SetDefaultHOAPreset)`

*Defined in `SpeosNX_2512.py` at line 9160*

---

#### `DefaultIntensityViewingDirection` : str

`public` `static`

Gets or sets the default intensity sensor viewing direction.

The values are:  

 0 - From Source looking at Sensor, the viewing direction of the observer is the same as the light direction emitted.  

 1 - From Sensor looking at Source, the viewing direction of the observer is in the opposite of the light direction.  




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetDefaultIntensityViewingDirection, fset=__SetDefaultIntensityViewingDirection)`

*Defined in `SpeosNX_2512.py` at line 9171*

---

#### `DefaultInteractivePreset` : str

`public` `static`

Gets or sets the default preset to be applied to new interactive simulations.

Preset is identified by an internal GUID **Value type**: String.  




The default value is empty.

**Default value**: `=  property(fget=__GetDefaultInteractivePreset, fset=__SetDefaultInteractivePreset)`

*Defined in `SpeosNX_2512.py` at line 9179*

---

#### `DefaultInversePreset` : str

`public` `static`

Gets or sets the default preset to be applied to new inverse simulations.

Preset is identified by an internal GUID **Value type**: String.  




The default value is empty.

**Default value**: `=  property(fget=__GetDefaultInversePreset, fset=__SetDefaultInversePreset)`

*Defined in `SpeosNX_2512.py` at line 9187*

---

#### `DefaultLidarPreset` : str

`public` `static`

Gets or sets the default preset to be applied to new Lidar simulations.

Preset is identified by an internal GUID **Value type**: String.  




The default value is empty.

**Default value**: `=  property(fget=__GetDefaultLidarPreset, fset=__SetDefaultLidarPreset)`

*Defined in `SpeosNX_2512.py` at line 9195*

---

#### `DefaultRayFileFormat` : str

`public` `static`

Gets or sets the default ray file format used in sensors and in direct simulations.

The values are:  

 0 - Classic, format without polarization *.ray.  

 1 - Polarization, format with polarization *.ray.  

 2 - TM25, IESNA TM25 format *.tm25ray with polarization.  

 3 - TM25NoPolarization, IESNA TM25 format *.tm25ray without polarization.  




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetDefaultRayFileFormat, fset=__SetDefaultRayFileFormat)`

*Defined in `SpeosNX_2512.py` at line 9208*

---

#### `DefaultVbbPreset` : str

`public` `static`

Gets or sets the default preset to be applied to new Virtual BSDF Bench simulations.

Preset is identified by an internal GUID **Value type**: String.  




The default value is empty.

**Default value**: `=  property(fget=__GetDefaultVbbPreset, fset=__SetDefaultVbbPreset)`

*Defined in `SpeosNX_2512.py` at line 9216*

---

#### `DefaultXMPViewer` : str

`public` `static`

Gets or sets the default lab to display XMP files.

The values are:  

 0 - Virtual Photometric Lab.  

 1 - Human Vision Lab.  




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetDefaultXMPViewer, fset=__SetDefaultXMPViewer)`

*Defined in `SpeosNX_2512.py` at line 9227*

---

#### `EnableBetaFeatures` : str

`public` `static`

Gets or sets the property to enable beta features.

True: Enables beta features.  

 False: Disables beta features.  




**Value type**: Boolean.  




The default value is False.

**Default value**: `=  property(fget=__GetEnableBetaFeatures, fset=__SetEnableBetaFeatures)`

*Defined in `SpeosNX_2512.py` at line 9237*

---

#### `EnableDisplayOutsideSpeos` : str

`public` `static`

Gets or sets the property to enable the display of Speos feature outside Speos application.

True: Enables display of Speos feature outside Speos application.  

 False: Disables display of Speos feature outside Speos application.  




**Value type**: Boolean.  




The default value is True.

**Default value**: `=  property(fget=__GetEnableDisplayOutsideSpeos, fset=__SetEnableDisplayOutsideSpeos)`

*Defined in `SpeosNX_2512.py` at line 9247*

---

#### `EnableGPUExplore` : str

`public` `static`

Gets or sets the property to enable GPU-Explore in simulation preview.

True: Enables GPU-Explore.  

 False: Disables GPU-Explore.  




**Value type**: Boolean.  




The default value is True.

**Default value**: `=  property(fget=__GetEnableGPUExplore, fset=__SetEnableGPUExplore)`

*Defined in `SpeosNX_2512.py` at line 9257*

---

#### `IncrementSimulationResults` : str

`public` `static`

Gets or sets the property to enable the increment of simulation results.

True: Enables increment of simulation results.  

 False: Disables increment of simulation results.  




**Value type**: Boolean.  




The default value is False.

**Default value**: `=  property(fget=__GetIncrementSimulationResults, fset=__SetIncrementSimulationResults)`

*Defined in `SpeosNX_2512.py` at line 9267*

---

#### `InteractiveSimulationAutoUpdate` : str

`public` `static`

Gets or sets the property to enable the automatic update of interactive simulations.

True: Enables automatic update of interactive simulations.  

 False: Disables automatic update of interactive simulations.  




**Value type**: Boolean.  




The default value is True.

**Default value**: `=  property(fget=__GetInteractiveSimulationAutoUpdate, fset=__SetInteractiveSimulationAutoUpdate)`

*Defined in `SpeosNX_2512.py` at line 9277*

---

#### `LightBoxMeshingPreviewLimit` : str

`public` `static`

Gets or sets the maximum number of triangles displayed in the lightbox mesh.

If there are more triangles, a bounding box is displayed instead.


**Value type**: Integer.  

 **Range**: The value must be superior to 0.  




The default value is 10000000.

**Default value**: `=  property(fget=__GetLightBoxMeshingPreviewLimit, fset=__SetLightBoxMeshingPreviewLimit)`

*Defined in `SpeosNX_2512.py` at line 9287*

---

#### `NumberOfThreads` : str

`public` `static`

Gets or sets the simulation number of threads.

**Value type**: Integer.  

 **Range**: The value must be superior to 0.  




The default value is the number of physical processor of the computer.

**Default value**: `=  property(fget=__GetNumberOfThreads, fset=__SetNumberOfThreads)`

*Defined in `SpeosNX_2512.py` at line 9296*

---

#### `ReferenceSet` : str

`public` `static`

Gets or sets the Reference Set name.

**Prerequisite**: The ReferenceSetMode property must be 1.  




**Value type**: String.  




The default value is empty.

**Default value**: `=  property(fget=__GetReferenceSet, fset=__SetReferenceSet)`

*Defined in `SpeosNX_2512.py` at line 9305*

---

#### `ReferenceSetMode` : str

`public` `static`

Gets or sets the content to load and display from a project.

The values are:  

 0 - Model, add automatically to Model Reference Set.  

 1 - User, add automatically to specified Reference Set.  




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetReferenceSetMode, fset=__SetReferenceSetMode)`

*Defined in `SpeosNX_2512.py` at line 9316*

---

#### `UpdateFeaturesOnLoad` : str

`public` `static`

Gets or sets the property to enable the automatic update of Speos feature when loading the document.

True: Enables automatic update of Speos feature when loading the document.  

 False: Disables automatic update of Speos feature when loading the document.  




**Value type**: Boolean.  




The default value is False.

**Default value**: `=  property(fget=__GetUpdateFeaturesOnLoad, fset=__SetUpdateFeaturesOnLoad)`

*Defined in `SpeosNX_2512.py` at line 9326*

---

#### `UseUserInputFolder` : str

`public` `static`

Gets or sets the property to enable the use of a user input folder.

True: Enables user input folder.  

 False: Disables user input folder.  




**Value type**: Boolean.  




The default value is False.

**Default value**: `=  property(fget=__GetUseUserInputFolder, fset=__SetUseUserInputFolder)`

*Defined in `SpeosNX_2512.py` at line 9336*

---

#### `UseUserIsolatedFolder` : str

`public` `static`

Gets or sets the property to enable the use of a user isolated folder.

True: Enables user isolated folder.  

 False: Disables user isolated folder.  




**Value type**: Boolean.  




The default value is False.

**Default value**: `=  property(fget=__GetUseUserIsolatedFolder, fset=__SetUseUserIsolatedFolder)`

*Defined in `SpeosNX_2512.py` at line 9346*

---

#### `UseUserOutputFolder` : str

`public` `static`

Gets or sets the property to enable the use of a user output folder.

True: Enables user output folder.  

 False: Disables user output folder.  




**Value type**: Boolean.  




The default value is False.

**Default value**: `=  property(fget=__GetUseUserOutputFolder, fset=__SetUseUserOutputFolder)`

*Defined in `SpeosNX_2512.py` at line 9356*

---

#### `UserInputFolder` : str

`public` `static`

Gets or sets the path to the user input folder.

**Prerequisite**: The UseUserInputFolder property must be True.  




**Value type**: Boolean.  




The default value is empty.

**Default value**: `=  property(fget=__GetUserInputFolder, fset=__SetUserInputFolder)`

*Defined in `SpeosNX_2512.py` at line 9365*

---

#### `UserIsolatedFolder` : str

`public` `static`

Gets or sets the path to the user isolated folder.

**Prerequisite**: The UseUserIsolatedFolder property must be True.  




**Value type**: Boolean.  




The default value is empty.

**Default value**: `=  property(fget=__GetUserIsolatedFolder, fset=__SetUserIsolatedFolder)`

*Defined in `SpeosNX_2512.py` at line 9374*

---

#### `UserOutputFolder` : str

`public` `static`

Gets or sets the path to the user output folder.

**Prerequisite**: The UseUserOutputFolder property must be True.  




**Value type**: Boolean.  




The default value is empty.

**Default value**: `=  property(fget=__GetUserOutputFolder, fset=__SetUserOutputFolder)`

*Defined in `SpeosNX_2512.py` at line 9383*

---

#### `VRSensorMemoryManagement` : str

`public` `static`

Gets or sets the property to enable the VR memory management to limit memory usage.

True: Enables VR memory management.  

 False: Disables VR memory management.  




**Value type**: Boolean.  




The default value is False.

**Default value**: `=  property(fget=__GetVRSensorMemoryManagement, fset=__SetVRSensorMemoryManagement)`

*Defined in `SpeosNX_2512.py` at line 9393*

---

## Public Methods

#### `ResetDefaultValues(self)`

`public`

Initializes Speos for NX Preferences to their default values.

*Defined in `SpeosNX_2512.py` at line 8929*

---

#### `Load(self)`

`public`

Loads Speos for NX Preferences.

*Defined in `SpeosNX_2512.py` at line 8933*

---

#### `Save(self)`

`public`

Saves Speos for NX Preferences.

*Defined in `SpeosNX_2512.py` at line 8937*

---

## Member Summary

| Member | Type |
|--------|------|
| `AutoFeatureUpdateOutsideSpeos` | public |
| `CreateSimulationSubFolder` | public |
| `DefaultColorimetricStandard` | public |
| `DefaultDirectPreset` | public |
| `DefaultHOAPreset` | public |
| `DefaultIntensityViewingDirection` | public |
| `DefaultInteractivePreset` | public |
| `DefaultInversePreset` | public |
| `DefaultLidarPreset` | public |
| `DefaultRayFileFormat` | public |
| `DefaultVbbPreset` | public |
| `DefaultXMPViewer` | public |
| `EnableBetaFeatures` | public |
| `EnableDisplayOutsideSpeos` | public |
| `EnableGPUExplore` | public |
| `IncrementSimulationResults` | public |
| `InteractiveSimulationAutoUpdate` | public |
| `LightBoxMeshingPreviewLimit` | public |
| `Load` | public |
| `NumberOfThreads` | public |
| `ReferenceSet` | public |
| `ReferenceSetMode` | public |
| `ResetDefaultValues` | public |
| `Save` | public |
| `UpdateFeaturesOnLoad` | public |
| `UseUserInputFolder` | public |
| `UseUserIsolatedFolder` | public |
| `UseUserOutputFolder` | public |
| `UserInputFolder` | public |
| `UserIsolatedFolder` | public |
| `UserOutputFolder` | public |
| `VRSensorMemoryManagement` | public |
| `thisown` | public |
