---
uid: simulation_settings
title: SimulationSettings
---

# SimulationSettings

**Full Name**: `SpeosNX_2512::SimulationSettings`

**Language**: Python

**Inherits from**: `object`

## Description

Represents the interface for editing custom simulation settings.

To create a new instance of this class, use `SimulationCommonBuilder::GetSettings`

## Properties

#### `thisown`

`public` `static`

*Defined in `SpeosNX_2512.py` at line 10579*

---

#### `m_pImpl`

`public` `static`

**Default value**: `=  property(_SpeosNX_2512.SimulationSettings_m_pImpl_get, _SpeosNX_2512.SimulationSettings_m_pImpl_set)`

*Defined in `SpeosNX_2512.py` at line 10853*

---

## Private Static Attributes

#### `__repr__`

`private` `static`

*Defined in `SpeosNX_2512.py` at line 10583*

---

## Public Static Attributes

#### `AmbientSampling` : str

`public` `static`

Gets or sets the ambient sampling.

**Prerequisite**: The UseMonteCarlo property must be False.  




**Value type**: Integer.  

 **Range**: [1, 1000000].  




The default value is 100.

**Default value**: `=  property(fget=__GetAmbientSampling, fset=__SetAmbientSampling)`

*Defined in `SpeosNX_2512.py` at line 10863*

---

#### `AntiAliasing` : str

`public` `static`

Gets or sets the anti-aliasing property.

**Prerequisite**: The UseMonteCarlo property must be False.  

 True: Uses anti-aliasing.  

 False: Does not use anti-aliasing.  




Reduces artifacts as jagged profiles and fine details but increasing the simulation time.  




**Value type**: Boolean.  




The default value is True.

**Default value**: `=  property(fget=__GetAntiAliasing, fset=__SetAntiAliasing)`

*Defined in `SpeosNX_2512.py` at line 10876*

---

#### `ColorimetricStandardMode` : str

`public` `static`

Gets or sets the colorimetric standard type.

The values are:   

 0 - CIE 1931.  

 1 - CIE 1936.  




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetColorimetricStandardMode, fset=__SetColorimetricStandardMode)`

*Defined in `SpeosNX_2512.py` at line 10887*

---

#### `DirectMaxImpact` : str

`public` `static`

Gets or sets the specular approximation angle.

**Prerequisite**: The PhotonMapMode property must be 1 or 3.  




Represents the max impact of rays in the direct phase.  




**Value type**: Integer.  

 **Range**: The value must be superior to 0.


The default value is 100.

**Default value**: `=  property(fget=__GetDirectMaxImpact, fset=__SetDirectMaxImpact)`

*Defined in `SpeosNX_2512.py` at line 10899*

---

#### `DirectPhotonNumber` : str

`public` `static`

Gets or sets the specular approximation angle.

**Prerequisite**: The PhotonMapMode property must be 1 or 3.  




Represents the number of rays sent in the direct phase.  




**Value type**: Integer.  

 **Range**: (0, 200000].  




The default value is 10000.

**Default value**: `=  property(fget=__GetDirectPhotonNumber, fset=__SetDirectPhotonNumber)`

*Defined in `SpeosNX_2512.py` at line 10911*

---

#### `Dispersion` : str

`public` `static`

Gets or sets the property to use dispersion.

**Prerequisite**: The UseMonteCarlo property must be True.  




True: Activates dispersion.  

 False: Deactivates dispersion.  




**Value type**: Boolean.  




The default value is False.

**Default value**: `=  property(fget=__GetDispersion, fset=__SetDispersion)`

*Defined in `SpeosNX_2512.py` at line 10923*

---

#### `DrawImpacts` : str

`public` `static`

Gets or sets the property to draw impacts.

Displays the impacts in the 3D view.  




True: Draws impacts.  

 False: Does not draw impacts.  




**Value type**: Boolean.  




The default value is False.

**Default value**: `=  property(fget=__GetDrawImpacts, fset=__SetDrawImpacts)`

*Defined in `SpeosNX_2512.py` at line 10935*

---

#### `DrawRays` : str

`public` `static`

Gets or sets the property to draw rays.

Displays the ray trajectories in the 3D view.  




True: Draws rays.  

 False: Does not draw rays.  




**Value type**: Boolean.  




The default value is True.

**Default value**: `=  property(fget=__GetDrawRays, fset=__SetDrawRays)`

*Defined in `SpeosNX_2512.py` at line 10947*

---

#### `FastTransmissionGathering` : str

`public` `static`

Gets or sets the fast transmission gathering property.

**Prerequisite**: The UseMonteCarlo property must be True.  




True: Uses fast transmission gathering.  

 False: Does not use fast transmission gathering.  




**Value type**: Boolean.  




The default value is False.

**Default value**: `=  property(fget=__GetFastTransmissionGathering, fset=__SetFastTransmissionGathering)`

*Defined in `SpeosNX_2512.py` at line 10959*

---

#### `FinalGathering` : str

`public` `static`

Gets or sets the final gathering property.

**Prerequisite**: The PhotonMapMode property must be 1, 2 or 3.  

 True: Uses final gathering.  

 False: Does not use final gathering.  




**Value type**: Boolean.  




The default value is False.

**Default value**: `=  property(fget=__GetFinalGathering, fset=__SetFinalGathering)`

*Defined in `SpeosNX_2512.py` at line 10970*

---

#### `FinalGatheringNeighbors` : str

`public` `static`

Gets or sets the final gathering neighbors.

**Prerequisite**: The UseFinalGathering property must be True.  




Pilots the number of neighbors after the secondary rays. They are used to compute the luminance for each split ray.  




**Value type**: Integer.  

 **Range**: The value must be superior to 0.  




The default value is 10.

**Default value**: `=  property(fget=__GetFinalGatheringNeighbors, fset=__SetFinalGatheringNeighbors)`

*Defined in `SpeosNX_2512.py` at line 10982*

---

#### `GatheringSourceNumber` : str

`public` `static`

Gets or sets the gathering source number.

**Prerequisite**: The UseMonteCarlo property must be True.  




The gathering source number parameter pilots the number of shadow rays to target at each source.  




**Value type**: Integer.  

 **Range**: The value must be superior or equal to 0.  




The default value is 1.

**Default value**: `=  property(fget=__GetGatheringSourceNumber, fset=__SetGatheringSourceNumber)`

*Defined in `SpeosNX_2512.py` at line 10994*

---

#### `GeometricalDistanceTolerance` : str

`public` `static`

Gets or sets the geometrical distance tolerance.

The Geometrical distance tolerance defines the maximum distance to consider two faces as tangent.  




**Value type**: Double (in mm).  

 **Range**: The value must be superior to 0.0.  




The default value is 0.05 mm.

**Default value**: `=  property(fget=__GetGeometricalDistanceTolerance, fset=__SetGeometricalDistanceTolerance)`

*Defined in `SpeosNX_2512.py` at line 11004*

---

#### `InteractiveSimulationReport` : str

`public` `static`

Gets or sets the property to report impact.

Activates the addition of information to the HTML simulation report.  




True: Reports impacts.  

 False: Does not report impacts.  




**Value type**: Boolean.  




The default value is False.

**Default value**: `=  property(fget=__GetInteractiveSimulationReport, fset=__SetInteractiveSimulationReport)`

*Defined in `SpeosNX_2512.py` at line 11016*

---

#### `IntermediateSaveFrequency` : str

`public` `static`

Gets or sets the intermediate save frequency.

**Value type**: Integer (in seconds).  

 **Range**: The value must be superior or equal to 300.  




The default value is 1800 s.

**Default value**: `=  property(fget=__GetIntermediateSaveFrequency, fset=__SetIntermediateSaveFrequency)`

*Defined in `SpeosNX_2512.py` at line 11024*

---

#### `MaxGatheringError` : str

`public` `static`

Gets or sets the maximum gathering error.

**Prerequisite**: The UseMonteCarlo property must be True.  




Defines the level below which a source can be neglected.  




**Value type**: Double.  

 **Range**: [0.0, 100.0].  




The default value is 0.0.

**Default value**: `=  property(fget=__GetMaxGatheringError, fset=__SetMaxGatheringError)`

*Defined in `SpeosNX_2512.py` at line 11036*

---

#### `MaxNeighbors` : str

`public` `static`

Gets or sets the maximum neighbors.

**Prerequisite**: The PhotonMapMode property must be 1, 2 or 3.  




Represents the number of photons from the photon map taken into account to calculate the luminance.  




**Value type**: Integer.  

 **Range**: (0, 10000].  




The default value is 100.

**Default value**: `=  property(fget=__GetMaxNeighbors, fset=__SetMaxNeighbors)`

*Defined in `SpeosNX_2512.py` at line 11048*

---

#### `MaxSearchRadius` : str

`public` `static`

Gets or sets the maximum search radius.

**Prerequisite**: The PhotonMapMode property must be 1, 2 or 3.  




Represents the maximum distance from the luminance calculation's point to search for neighbors contribution.  




**Value type**: Double (in mm).  

 **Range**:The value must be superior to 0.  




The default value is 100000000.0 mm.

**Default value**: `=  property(fget=__GetMaxSearchRadius, fset=__SetMaxSearchRadius)`

*Defined in `SpeosNX_2512.py` at line 11060*

---

#### `MaximumImpactNumber` : str

`public` `static`

Gets or sets the maximum number of surface interaction.

The maximum number of surface interactions value defines the maximum number of ray impacts during propagation.   




**Value type**: Integer.  

 **Range**: The value must be superior to 0  




The default value is 100.

**Default value**: `=  property(fget=__GetMaximumImpactNumber, fset=__SetMaximumImpactNumber)`

*Defined in `SpeosNX_2512.py` at line 11070*

---

#### `MeshingAngle` : str

`public` `static`

Gets or sets the meshing angle.

**Value type**: Double (in degrees).  

 **Range**: (0.0, 90.0).  




The default value is 15.0 degrees.

**Default value**: `=  property(fget=__GetMeshingAngle, fset=__SetMeshingAngle)`

*Defined in `SpeosNX_2512.py` at line 11078*

---

#### `MeshingEdgeAngle` : str

`public` `static`

Gets or sets the meshing edge angle.

**Prerequisite** The SpecificFacetEdgesParameters property must be True.


Defines the maximum angular variation in degrees between successive tangents for all points along a solid edge.


**Value type**: Double (in degrees).  

 **Range**: (0.0, 90.0).  




The default value is 10.0 degrees.

**Default value**: `=  property(fget=__GetMeshingEdgeAngle, fset=__SetMeshingEdgeAngle)`

*Defined in `SpeosNX_2512.py` at line 11090*

---

#### `MeshingEdgeSag` : str

`public` `static`

Gets or sets the meshing edge sag value.

**Prerequisite** The SpecificFacetEdgesParameters property must be True.


Defines the maximum distance between the geometry and the meshing on the edges. The Meshing edge sag value always uses the Fixed mode.  




**Value type**: Double (in mm).  

 **Range**: The value must be superior to 0.  




The default value is 0.1 mm.

**Default value**: `=  property(fget=__GetMeshingEdgeSag, fset=__SetMeshingEdgeSag)`

*Defined in `SpeosNX_2512.py` at line 11102*

---

#### `MeshingSagMode` : str

`public` `static`

Gets or sets the meshing sag mode.

The values are:  

 0 - Proportional, the value adapts and adjusts to the size of each face of the object.   

 1 - Fixed, the value will remain unchanged no matter the size or shape of the object.   




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetMeshingSagMode, fset=__SetMeshingSagMode)`

*Defined in `SpeosNX_2512.py` at line 11113*

---

#### `MeshingSagValue` : str

`public` `static`

Gets or sets the meshing sag value.

**Value type**: Double (in mm).  

 **Range**: The value must be superior to 0.0.  




The default value is 0.5 mm.

**Default value**: `=  property(fget=__GetMeshingSagValue, fset=__SetMeshingSagValue)`

*Defined in `SpeosNX_2512.py` at line 11122*

---

#### `MeshingStepMode` : str

`public` `static`

Gets or sets the meshing step mode.

The values are:  

 0 - Proportional, the value adapts and adjusts to the size of each face of the object.  

 1 - Fixed, the value will remain unchanged no matter the size or shape of the object.  




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetMeshingStepMode, fset=__SetMeshingStepMode)`

*Defined in `SpeosNX_2512.py` at line 11133*

---

#### `MeshingStepValue` : str

`public` `static`

Gets or sets the meshing step fixed value.

**Value type**: Double (in mm).  

 **Range**: The value must be superior to 0.  




The default value is 1.0 mm.

**Default value**: `=  property(fget=__GetMeshingStepValue, fset=__SetMeshingStepValue)`

*Defined in `SpeosNX_2512.py` at line 11142*

---

#### `MinimumEnergy` : str

`public` `static`

Gets or sets the maximum number of surface interaction.

**Prerequisite** The UseWeight property must be True.  




The Minimum energy percentage value defines the minimum energy ratio to continue to propagate a ray with weight.   




**Value type**: Double.  

 **Range**: [0.0, 10000.0]  




The default value is 0.5.

**Default value**: `=  property(fget=__GetMinimumEnergy, fset=__SetMinimumEnergy)`

*Defined in `SpeosNX_2512.py` at line 11155*

---

#### `MonteCarloAlgorithm` : str

`public` `static`

Gets or sets the Monte Carlo algorithm property.

True: Uses Monte Carlo algorithm.  

 False: Uses deterministic algorithm.  




**Value type**: Boolean.  




The default value is True.

**Default value**: `=  property(fget=__GetMonteCarloAlgorithm, fset=__SetMonteCarloAlgorithm)`

*Defined in `SpeosNX_2512.py` at line 11165*

---

#### `NumberStandardPasses` : str

`public` `static`

Gets or sets the number of standard passes before optimized passes.

**Prerequisite**: The OptimizedMode property must be 1 or 2.  




Corresponds to the minimum number of passes without pass optimization.  




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetNumberStandardPasses, fset=__SetNumberStandardPasses)`

*Defined in `SpeosNX_2512.py` at line 11176*

---

#### `OptimizedPropagation` : str

`public` `static`

Gets or sets optimized propagation type.

**Prerequisite**: The UseMonteCarlo property must be True.  




The values are:  

 0 - None, the same number of passes is used for each pixel of the image.  

 1 - Relative, the algorithm adapts the number of passes per pixel to send the optimal number of rays according to the signal each pixel needs.  

 2 - Absolute, same as relative, however the method of calculation is slightly different.  




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetOptimizedPropagation, fset=__SetOptimizedPropagation)`

*Defined in `SpeosNX_2512.py` at line 11190*

---

#### `PhotonMapMode` : str

`public` `static`

Gets or sets the photon map mode.

**Prerequisite**: The UseMonteCarlo property must be False.  




The values are:  

 0 - No photon map.  

 1 - Build photon map.  

 2 - Load photon map.  

 3 - Build and save photon map.  




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetPhotonMapMode, fset=__SetPhotonMapMode)`

*Defined in `SpeosNX_2512.py` at line 11205*

---

#### `RayTracerPrecisionMode` : str

`public` `static`

Gets or sets ray tracer precision mode.

The values are:  

 0 - Automatic.  

 1 - Double.  

 2 - Single.  




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetRayTracerPrecisionMode, fset=__SetRayTracerPrecisionMode)`

*Defined in `SpeosNX_2512.py` at line 11217*

---

#### `RenderingAsOptical` : str

`public` `static`

Gets or sets the property to use rendering as optical properties.

True: Uses rendering as optical properties.  

 False: Does not use rendering as optical properties.  




**Value type**: Boolean.  




The default value is False.

**Default value**: `=  property(fget=__GetRenderingAsOptical, fset=__SetRenderingAsOptical)`

*Defined in `SpeosNX_2512.py` at line 11227*

---

#### `SaveIntermediateMaps` : str

`public` `static`

Gets or sets the intermediate save frequency.

**Value type**: Integer.  

 **Range**: The value must be superior or equal to 300.  




The default value is 1800.

**Default value**: `=  property(fget=__GetSaveIntermediateMaps, fset=__SetSaveIntermediateMaps)`

*Defined in `SpeosNX_2512.py` at line 11235*

---

#### `SmartEngine` : str

`public` `static`

Gets or sets the smart engine value.

**Prerequisite**: The RayTracerPrecisionMode property must be 1.  




The Smart Engine value defines a balance between the speed and the memory. The higher the value, the more subdivided the scene becomes.  




**Value type**: Integer.  

 **Range**: [1, 15].  




The default value is 11.

**Default value**: `=  property(fget=__GetSmartEngine, fset=__SetSmartEngine)`

*Defined in `SpeosNX_2512.py` at line 11247*

---

#### `SpecificFacetEdgesParameters` : str

`public` `static`

Gets or sets the specific parameters property for facet edges.

Allows to control the precision of the meshing on the edges of the faces.  




True: Enables specific parameters for facet edges.  

 False: Disables specific parameters for facet edges.  




**Value type**: Boolean.  




The default value is False.

**Default value**: `=  property(fget=__GetSpecificFacetEdgesParameters, fset=__SetSpecificFacetEdgesParameters)`

*Defined in `SpeosNX_2512.py` at line 11259*

---

#### `SpecularApproxAngle` : str

`public` `static`

Gets or sets the specular approximation angle.

**Prerequisite**: The UseMonteCarlo property must be False.  




Reduces artifacts as jagged profiles and fine details but increasing the simulation time.  




**Value type**: Double (in degrees).  

 **Range**: The value must be superior or equal to 0.0.


The default value is 0.0 degrees.

**Default value**: `=  property(fget=__GetSpecularApproxAngle, fset=__SetSpecularApproxAngle)`

*Defined in `SpeosNX_2512.py` at line 11271*

---

#### `SpecularMaxImpact` : str

`public` `static`

Gets or sets the specular maximum impact number.

**Prerequisite**: The UseMonteCarlo property must be False.  




**Value type**: Integer.  

 **Range**: [0, 15].  




The default value is 10.

**Default value**: `=  property(fget=__GetSpecularMaxImpact, fset=__SetSpecularMaxImpact)`

*Defined in `SpeosNX_2512.py` at line 11281*

---

#### `Splitting` : str

`public` `static`

Gets or sets the property to use splitting for inverse simulation.

**Prerequisite**: The UseMonteCarlo property must be True.  




If you do so, the path of each reverse propagated ray is split in more paths at the first impact after leaving the observer point.  




True: Activates splitting.  

 False: Deactivates splitting.  




**Value type**: Boolean.  




The default value is False.

**Default value**: `=  property(fget=__GetSplitting, fset=__SetSplitting)`

*Defined in `SpeosNX_2512.py` at line 11295*

---

#### `SplittingNumber` : str

`public` `static`

Gets or sets the splitting number.

**Prerequisite**: The UseFinalGathering property must be True.  




**Value type**: Integer.  

 **Range**: The value must be superior to 0.  




The default value is 15.

**Default value**: `=  property(fget=__GetSplittingNumber, fset=__SetSplittingNumber)`

*Defined in `SpeosNX_2512.py` at line 11305*

---

#### `Texture` : str

`public` `static`

Gets or sets the property to use texture mapping.

True: Uses texture as optical properties.  

 False: Does not use texture as optical properties.  




**Value type**: Boolean.  




The default value is True.

**Default value**: `=  property(fget=__GetTexture, fset=__SetTexture)`

*Defined in `SpeosNX_2512.py` at line 11315*

---

#### `TextureNormalizationMode` : str

`public` `static`

Gets or sets texture normalization mode.

**Prerequisite**: The UseTexture property must be True.  




The values are:   

 0 - None. The simulation results uses both the Image Texture and the Texture Mapping Optical Properties.  

 1 - Color from BRDF. The simulation result uses the BRDF information of the Texture Mapping Optical Properties.  

 2 - Color from texture. The simulation result uses the color and the color lightness of the Image Texture.  




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetTextureNormalizationMode, fset=__SetTextureNormalizationMode)`

*Defined in `SpeosNX_2512.py` at line 11329*

---

#### `Weight` : str

`public` `static`

Gets or sets the weight property.

True: Uses weight.  

 False: Does not use weight.  




**Value type**: Boolean.  




The default value is True.

**Default value**: `=  property(fget=__GetWeight, fset=__SetWeight)`

*Defined in `SpeosNX_2512.py` at line 11339*

---

## Public Methods

#### `SaveAsPreset(self, name)`

`public`

Save the simulation settings as preset.

**Parameters**:
- `name`: 
: name of the preset. 





**Returns**: True: Success.  

 False: Error.

*Defined in `SpeosNX_2512.py` at line 10844*

---

## Member Summary

| Member | Type |
|--------|------|
| `AmbientSampling` | public |
| `AntiAliasing` | public |
| `ColorimetricStandardMode` | public |
| `DirectMaxImpact` | public |
| `DirectPhotonNumber` | public |
| `Dispersion` | public |
| `DrawImpacts` | public |
| `DrawRays` | public |
| `FastTransmissionGathering` | public |
| `FinalGathering` | public |
| `FinalGatheringNeighbors` | public |
| `GatheringSourceNumber` | public |
| `GeometricalDistanceTolerance` | public |
| `InteractiveSimulationReport` | public |
| `IntermediateSaveFrequency` | public |
| `MaxGatheringError` | public |
| `MaxNeighbors` | public |
| `MaxSearchRadius` | public |
| `MaximumImpactNumber` | public |
| `MeshingAngle` | public |
| `MeshingEdgeAngle` | public |
| `MeshingEdgeSag` | public |
| `MeshingSagMode` | public |
| `MeshingSagValue` | public |
| `MeshingStepMode` | public |
| `MeshingStepValue` | public |
| `MinimumEnergy` | public |
| `MonteCarloAlgorithm` | public |
| `NumberStandardPasses` | public |
| `OptimizedPropagation` | public |
| `PhotonMapMode` | public |
| `RayTracerPrecisionMode` | public |
| `RenderingAsOptical` | public |
| `SaveAsPreset` | public |
| `SaveIntermediateMaps` | public |
| `SmartEngine` | public |
| `SpecificFacetEdgesParameters` | public |
| `SpecularApproxAngle` | public |
| `SpecularMaxImpact` | public |
| `Splitting` | public |
| `SplittingNumber` | public |
| `Texture` | public |
| `TextureNormalizationMode` | public |
| `Weight` | public |
| `m_pImpl` | public |
| `thisown` | public |
