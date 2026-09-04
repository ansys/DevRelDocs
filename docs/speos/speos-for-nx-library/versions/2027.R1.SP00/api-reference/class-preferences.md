# Preferences

## Description

Represents Speos for NX Preferences.

## Member Summary

| Member | Type |
| --- | --- |
| [ResetDefaultValues](#resetdefaultvalues) | public |
| [Load](#load) | public |
| [Save](#save) | public |
| [NumberOfThreads](#numberofthreads) | public |
| [LightBoxMeshingPreviewLimit](#lightboxmeshingpreviewlimit) | public |
| [UseUserInputFolder](#useuserinputfolder) | public |
| [UserInputFolder](#userinputfolder) | public |
| [UseUserOutputFolder](#useuseroutputfolder) | public |
| [UserOutputFolder](#useroutputfolder) | public |
| [UseUserIsolatedFolder](#useuserisolatedfolder) | public |
| [UserIsolatedFolder](#userisolatedfolder) | public |
| [CreateSimulationSubFolder](#createsimulationsubfolder) | public |
| [IncrementSimulationResults](#incrementsimulationresults) | public |
| [InteractiveSimulationAutoUpdate](#interactivesimulationautoupdate) | public |
| [EnableDisplayOutsideSpeos](#enabledisplayoutsidespeos) | public |
| [AutoFeatureUpdateOutsideSpeos](#autofeatureupdateoutsidespeos) | public |
| [DefaultInteractivePreset](#defaultinteractivepreset) | public |
| [DefaultDirectPreset](#defaultdirectpreset) | public |
| [DefaultInversePreset](#defaultinversepreset) | public |
| [DefaultVbbPreset](#defaultvbbpreset) | public |
| [DefaultHOAPreset](#defaulthoapreset) | public |
| [DefaultLidarPreset](#defaultlidarpreset) | public |
| [DefaultXMPViewer](#defaultxmpviewer) | public |
| [DefaultColorimetricStandard](#defaultcolorimetricstandard) | public |
| [DefaultRayFileFormat](#defaultrayfileformat) | public |
| [ReferenceSetMode](#referencesetmode) | public |
| [ReferenceSet](#referenceset) | public |
| [UpdateFeaturesOnLoad](#updatefeaturesonload) | public |
| [DefaultIntensityViewingDirection](#defaultintensityviewingdirection) | public |
| [VRSensorMemoryManagement](#vrsensormemorymanagement) | public |
| [EnableBetaFeatures](#enablebetafeatures) | public |
| [EnableGPUExplore](#enablegpuexplore) | public |

## Public Member Functions

### ResetDefaultValues

`void ResetDefaultValues(self)`

Initializes Speos for NX Preferences to their default values.

---

### Load

`void Load(self)`

Loads Speos for NX Preferences.

---

### Save

`void Save(self)`

Saves Speos for NX Preferences.

## Public Static Attributes

### NumberOfThreads

`int NumberOfThreads`

Gets or sets the simulation number of threads.

**Value type**: Integer.  
**Range**: The value must be superior to 0.  
  
The default value is the number of physical processor of the computer.

---

### LightBoxMeshingPreviewLimit

`int LightBoxMeshingPreviewLimit`

Gets or sets the maximum number of triangles displayed in the lightbox mesh.

If there are more triangles, a bounding box is displayed instead.  
**Value type**: Integer.  
**Range**: The value must be superior to 0.  
  
The default value is 10000000.

---

### UseUserInputFolder

`UserInputFolder UseUserInputFolder`

Gets or sets the property to enable the use of a user input folder.

True: Enables user input folder.  
False: Disables user input folder.  
**Value type**: Boolean.  
  
The default value is False.

---

### UserInputFolder

`bool UserInputFolder`

Gets or sets the path to the user input folder.

**Prerequisite**: The UseUserInputFolder property must be True.  
**Value type**: Boolean.  
  
The default value is empty.

---

### UseUserOutputFolder

`UserOutputFolder UseUserOutputFolder`

Gets or sets the property to enable the use of a user output folder.

True: Enables user output folder.  
False: Disables user output folder.  
**Value type**: Boolean.  
  
The default value is False.

---

### UserOutputFolder

`bool UserOutputFolder`

Gets or sets the path to the user output folder.

**Prerequisite**: The UseUserOutputFolder property must be True.  
**Value type**: Boolean.  
  
The default value is empty.

---

### UseUserIsolatedFolder

`UserIsolatedFolder UseUserIsolatedFolder`

Gets or sets the property to enable the use of a user isolated folder.

True: Enables user isolated folder.  
False: Disables user isolated folder.  
**Value type**: Boolean.  
  
The default value is False.

---

### UserIsolatedFolder

`bool UserIsolatedFolder`

Gets or sets the path to the user isolated folder.

**Prerequisite**: The UseUserIsolatedFolder property must be True.  
**Value type**: Boolean.  
  
The default value is empty.

---

### CreateSimulationSubFolder

`bool CreateSimulationSubFolder`

Gets or sets the property to enable a sub folder for simulation results.

True: Enables simulation sub folder.  
False: Disables simulation sub folder.  
**Value type**: Boolean.  
  
The default value is True.

---

### IncrementSimulationResults

`Results IncrementSimulationResults`

Gets or sets the property to enable the increment of simulation results.

True: Enables increment of simulation results.  
False: Disables increment of simulation results.  
**Value type**: Boolean.  
  
The default value is False.

---

### InteractiveSimulationAutoUpdate

`Update InteractiveSimulationAutoUpdate`

Gets or sets the property to enable the automatic update of interactive simulations.

True: Enables automatic update of interactive simulations.  
False: Disables automatic update of interactive simulations.  
**Value type**: Boolean.  
  
The default value is True.

---

### EnableDisplayOutsideSpeos

`bool EnableDisplayOutsideSpeos`

Gets or sets the property to enable the display of Speos feature outside Speos application.

True: Enables display of Speos feature outside Speos application.  
False: Disables display of Speos feature outside Speos application.  
**Value type**: Boolean.  
  
The default value is True.

---

### AutoFeatureUpdateOutsideSpeos

`bool AutoFeatureUpdateOutsideSpeos`

Gets or sets the property to enable the automatic update of Speos feature outside Speos application.

True: Enables automatic update of Speos feature outside Speos application.  
False: Disables automatic update of Speos feature outside Speos application.  
**Value type**: Boolean.  
  
The default value is True.

---

### DefaultInteractivePreset

`Preset DefaultInteractivePreset`

Gets or sets the default preset to be applied to new interactive simulations.

Preset is identified by an internal GUID**Value type**: String.  
  
The default value is empty.

---

### DefaultDirectPreset

`Preset DefaultDirectPreset`

Gets or sets the default preset to apply to new direct simulations.

Preset is identified by an internal GUID**Value type**: String.  
  
The default value is empty.

---

### DefaultInversePreset

`Preset DefaultInversePreset`

Gets or sets the default preset to be applied to new inverse simulations.

Preset is identified by an internal GUID**Value type**: String.  
  
The default value is empty.

---

### DefaultVbbPreset

`Preset DefaultVbbPreset`

Gets or sets the default preset to be applied to new Virtual BSDF Bench simulations.

Preset is identified by an internal GUID**Value type**: String.  
  
The default value is empty.

---

### DefaultHOAPreset

`Preset DefaultHOAPreset`

Gets or sets the default preset to be applied to new HOA simulations.

Preset is identified by an internal GUID**Value type**: String.  
  
The default value is empty.

---

### DefaultLidarPreset

`Preset DefaultLidarPreset`

Gets or sets the default preset to be applied to new Lidar simulations.

Preset is identified by an internal GUID**Value type**: String.  
  
The default value is empty.

---

### DefaultXMPViewer

`int DefaultXMPViewer`

Gets or sets the default lab to display XMP files.

The values are:  
0 - Virtual Photometric Lab.  
1 - Human Vision Lab.  
**Value type**: Integer.  
  
The default value is 0.

---

### DefaultColorimetricStandard

`int DefaultColorimetricStandard`

Gets or sets the CIE used by default in all simulations.

The values are:  
0 - CIE 1931 Standard.  
1 - CIE 1964 Standard.  
**Value type**: Integer.  
  
The default value is 0.

---

### DefaultRayFileFormat

`RayFileFormat DefaultRayFileFormat`

Gets or sets the default ray file format used in sensors and in direct simulations.

The values are:  
0 - Classic, format without polarization \*.ray.  
1 - Polarization, format with polarization \*.ray.  
2 - TM25, IESNA TM25 format \*.tm25ray with polarization.  
3 - TM25NoPolarization, IESNA TM25 format \*.tm25ray without polarization.  
**Value type**: Integer.  
  
The default value is 0.

---

### ReferenceSetMode

`int ReferenceSetMode`

Gets or sets the content to load and display from a project.

The values are:  
0 - Model, add automatically to Model Reference Set.  
1 - User, add automatically to specified Reference Set.  
**Value type**: Integer.  
  
The default value is 0.

---

### ReferenceSet

`str ReferenceSet`

Gets or sets the Reference Set name.

**Prerequisite**: The ReferenceSetMode property must be 1.  
**Value type**: String.  
  
The default value is empty.

---

### UpdateFeaturesOnLoad

`Load UpdateFeaturesOnLoad`

Gets or sets the property to enable the automatic update of Speos feature when loading the document.

True: Enables automatic update of Speos feature when loading the document.  
False: Disables automatic update of Speos feature when loading the document.  
**Value type**: Boolean.  
  
The default value is False.

---

### DefaultIntensityViewingDirection

`Direction DefaultIntensityViewingDirection`

Gets or sets the default intensity sensor viewing direction.

The values are:  
0 - From Source looking at Sensor, the viewing direction of the observer is the same as the light direction emitted.  
1 - From Sensor looking at Source, the viewing direction of the observer is in the opposite of the light direction.  
**Value type**: Integer.  
  
The default value is 0.

---

### VRSensorMemoryManagement

`bool VRSensorMemoryManagement`

Gets or sets the property to enable the VR memory management to limit memory usage.

True: Enables VR memory management.  
False: Disables VR memory management.  
**Value type**: Boolean.  
  
The default value is False.

---

### EnableBetaFeatures

`Features EnableBetaFeatures`

Gets or sets the property to enable beta features.

True: Enables beta features.  
False: Disables beta features.  
**Value type**: Boolean.  
  
The default value is False.

---

### EnableGPUExplore

`bool EnableGPUExplore`

Gets or sets the property to enable GPU-Explore in simulation preview.

True: Enables GPU-Explore.  
False: Disables GPU-Explore.  
**Value type**: Boolean.  
  
The default value is True.
