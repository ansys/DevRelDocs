# SimulationSettings

## Description

Represents the interface for editing custom simulation settings.

## Member Summary

| Member | Type |
| --- | --- |
| [MeshingSagMode](#meshingsagmode) | public |
| [MeshingSagValue](#meshingsagvalue) | public |
| [MeshingStepMode](#meshingstepmode) | public |
| [MeshingStepValue](#meshingstepvalue) | public |
| [MeshingAngle](#meshingangle) | public |
| [SpecificFacetEdgesParameters](#specificfacetedgesparameters) | public |
| [MeshingEdgeSag](#meshingedgesag) | public |
| [MeshingEdgeAngle](#meshingedgeangle) | public |
| [RayTracerPrecisionMode](#raytracerprecisionmode) | public |
| [SmartEngine](#smartengine) | public |
| [GeometricalDistanceTolerance](#geometricaldistancetolerance) | public |
| [DirectMaximumImpact](#directmaximumimpact) | public |
| [Weight](#weight) | public |
| [MinimumEnergyPercentage](#minimumenergypercentage) | public |
| [ColorimetricStandardMode](#colorimetricstandardmode) | public |
| [DrawRays](#drawrays) | public |
| [DrawImpacts](#drawimpacts) | public |
| [InteractiveSimulationReport](#interactivesimulationreport) | public |
| [MonteCarloAlgorithm](#montecarloalgorithm) | public |
| [OptimizedPropagation](#optimizedpropagation) | public |
| [NumberStandardPasses](#numberstandardpasses) | public |
| [AutomaticSaveFrequency](#automaticsavefrequency) | public |
| [GatheringSourceNumber](#gatheringsourcenumber) | public |
| [Dispersion](#dispersion) | public |
| [Splitting](#splitting) | public |
| [MaximumGatheringError](#maximumgatheringerror) | public |
| [FastTransmissionGathering](#fasttransmissiongathering) | public |
| [SaveIntermediateMaps](#saveintermediatemaps) | public |
| [PhotonMapMode](#photonmapmode) | public |
| [AmbientSampling](#ambientsampling) | public |
| [SpecularMaximumImpact](#specularmaximumimpact) | public |
| [AntiAliasing](#antialiasing) | public |
| [SpecularApproximationAngle](#specularapproximationangle) | public |
| [DirectPhotonNumber](#directphotonnumber) | public |
| [DirectMaxImpact](#directmaximpact) | public |
| [MaximumNeighbors](#maximumneighbors) | public |
| [MaxSearchRadius](#maxsearchradius) | public |
| [UseFinalGathering](#usefinalgathering) | public |
| [FinalGatheringNeighbors](#finalgatheringneighbors) | public |
| [SplittingNumber](#splittingnumber) | public |
| [Texture](#texture) | public |
| [TextureNormalizationMode](#texturenormalizationmode) | public |
| [RenderingAsOptical](#renderingasoptical) | public |
| [SaveAsPreset](#saveaspreset) | public |

## Public Static Attributes

### MeshingSagMode

`int MeshingSagMode`

Gets or sets the meshing sag mode.

The values are:  
0 - Proportional, the value adapts and adjusts to the size of each face of the object.  
1 - Fixed, the value will remain unchanged no matter the size or shape of the object.  
**Value type**: Integer.  
  
The default value is 0.

---

### MeshingSagValue

`Value MeshingSagValue`

Gets or sets the meshing sag value.

**Value type**: Double (in mm).  
**Range**: The value must be superior to 0.0.  
  
The default value is 0.5 mm.

---

### MeshingStepMode

`int MeshingStepMode`

Gets or sets the meshing step mode.

The values are:  
0 - Proportional, the value adapts and adjusts to the size of each face of the object.  
1 - Fixed, the value will remain unchanged no matter the size or shape of the object.  
**Value type**: Integer.  
  
The default value is 0.

---

### MeshingStepValue

`Value MeshingStepValue`

Gets or sets the meshing step fixed value.

**Value type**: Double (in mm).  
**Range**: The value must be superior to 0.  
  
The default value is 1.0 mm.

---

### MeshingAngle

`float MeshingAngle`

Gets or sets the meshing angle.

**Value type**: Double (in degrees).  
**Range**: (0.0, 90.0).  
  
The default value is 15.0 degrees.

---

### SpecificFacetEdgesParameters

`bool SpecificFacetEdgesParameters`

Gets or sets the specific parameters property for facet edges.

Allows to control the precision of the meshing on the edges of the faces.  
  
True: Enables specific parameters for facet edges.  
False: Disables specific parameters for facet edges.  
**Value type**: Boolean.  
  
The default value is False.

---

### MeshingEdgeSag

`float MeshingEdgeSag`

Gets or sets the meshing edge sag value.

**Prerequisite** The SpecificFacetEdgesParameters property must be True.  
  
Defines the maximum distance between the geometry and the meshing on the edges. The Meshing edge sag value always uses the Fixed mode.  
**Value type**: Double (in mm).  
**Range**: The value must be superior to 0.  
  
The default value is 0.1 mm.

---

### MeshingEdgeAngle

`float MeshingEdgeAngle`

Gets or sets the meshing edge angle.

**Prerequisite** The SpecificFacetEdgesParameters property must be True.  
  
Defines the maximum angular variation in degrees between successive tangents for all points along a solid edge.  
**Value type**: Double (in degrees).  
**Range**: (0.0, 90.0).  
  
The default value is 10.0 degrees.

---

### RayTracerPrecisionMode

`int RayTracerPrecisionMode`

Gets or sets ray tracer precision mode.

The values are:  
0 - Automatic.  
1 - Double.  
2 - Single.  
**Value type**: Integer.  
  
The default value is 0.

---

### SmartEngine

`int SmartEngine`

Gets or sets the smart engine value.

**Prerequisite**: The RayTracerPrecisionMode property must be 1.  
  
The Smart Engine value defines a balance between the speed and the memory. The higher the value, the more subdivided the scene becomes.  
**Value type**: Integer.  
**Range**: [1, 15].  
  
The default value is 11.

---

### GeometricalDistanceTolerance

`float GeometricalDistanceTolerance`

Gets or sets the geometrical distance tolerance.

The Geometrical distance tolerance defines the maximum distance to consider two faces as tangent.  
**Value type**: Double (in mm).  
**Range**: The value must be superior to 0.0.  
  
The default value is 0.05 mm.

---

### DirectMaximumImpact

`int DirectMaximumImpact`

Gets or sets the maximum number of surface interaction.

The maximum number of surface interactions value defines the maximum number of ray impacts during propagation.  
**Value type**: Integer.  
**Range**: The value must be superior to 0  
  
The default value is 100.

---

### Weight

`bool Weight`

Gets or sets the weight property.

True: Uses weight.  
False: Does not use weight.  
**Value type**: Boolean.  
  
The default value is True.

---

### MinimumEnergyPercentage

`float MinimumEnergyPercentage`

Gets or sets the minimum energy percentage.

**Prerequisite** The UseWeight property must be True.  
  
The Minimum energy percentage value defines the minimum energy ratio to continue to propagate a ray with weight.  
**Value type**: Double.  
**Range**: [0.0, 10000.0]  
  
The default value is 0.5.

---

### ColorimetricStandardMode

`int ColorimetricStandardMode`

Gets or sets the colorimetric standard type.

The values are:  
0 - CIE 1931.  
1 - CIE 1936.  
**Value type**: Integer.  
  
The default value is 0.

---

### DrawRays

`bool DrawRays`

Gets or sets the property to draw rays.

Displays the ray trajectories in the 3D view.  
  
True: Draws rays.  
False: Does not draw rays.  
**Value type**: Boolean.  
  
The default value is True.

---

### DrawImpacts

`bool DrawImpacts`

Gets or sets the property to draw impacts.

Displays the impacts in the 3D view.  
  
True: Draws impacts.  
False: Does not draw impacts.  
**Value type**: Boolean.  
  
The default value is False.

---

### InteractiveSimulationReport

`bool InteractiveSimulationReport`

Gets or sets the property to report impact.

Activates the addition of information to the HTML simulation report.  
  
True: Reports impacts.  
False: Does not report impacts.  
**Value type**: Boolean.  
  
The default value is False.

---

### MonteCarloAlgorithm

`bool MonteCarloAlgorithm`

Gets or sets the Monte Carlo algorithm property.

True: Uses Monte Carlo algorithm.  
False: Uses deterministic algorithm.  
**Value type**: Boolean.  
  
The default value is True.

---

### OptimizedPropagation

`int OptimizedPropagation`

Gets or sets optimized propagation type.

**Prerequisite**: The UseMonteCarlo property must be True.  
  
The values are:  
0 - None, the same number of passes is used for each pixel of the image.  
1 - Relative, the algorithm adapts the number of passes per pixel to send the optimal number of rays according to the signal each pixel needs.  
2 - Absolute, same as relative, however the method of calculation is slightly different.  
**Value type**: Integer.  
  
The default value is 0.

---

### NumberStandardPasses

`int NumberStandardPasses`

Gets or sets the number of standard passes before optimized passes.

**Prerequisite**: The OptimizedMode property must be 1 or 2.  
  
Corresponds to the minimum number of passes without pass optimization.  
**Value type**: Integer.  
  
The default value is 0.

---

### AutomaticSaveFrequency

`int AutomaticSaveFrequency`

Gets or sets the intermediate save frequency.

**Value type**: Integer (in seconds).  
**Range**: The value must be superior or equal to 300.  
  
The default value is 1800 s.

---

### GatheringSourceNumber

`int GatheringSourceNumber`

Gets or sets the gathering source number.

**Prerequisite**: The UseMonteCarlo property must be True.  
  
The gathering source number parameter pilots the number of shadow rays to target at each source.  
**Value type**: Integer.  
**Range**: The value must be superior or equal to 0.  
  
The default value is 1.

---

### Dispersion

`bool Dispersion`

Gets or sets the property to use dispersion.

**Prerequisite**: The UseMonteCarlo property must be True.  
  
True: Activates dispersion.  
False: Deactivates dispersion.  
**Value type**: Boolean.  
  
The default value is False.

---

### Splitting

`bool Splitting`

Gets or sets the property to use splitting for inverse simulation.

**Prerequisite**: The UseMonteCarlo property must be True.  
  
If you do so, the path of each reverse propagated ray is split in more paths at the first impact after leaving the observer point.  
  
True: Activates splitting.  
False: Deactivates splitting.  
**Value type**: Boolean.  
  
The default value is False.

---

### MaximumGatheringError

`float MaximumGatheringError`

Gets or sets the maximum gathering error.

**Prerequisite**: The UseMonteCarlo property must be True.  
  
Defines the level below which a source can be neglected.  
**Value type**: Double.  
**Range**: [0.0, 100.0].  
  
The default value is 0.0.

---

### FastTransmissionGathering

`bool FastTransmissionGathering`

Gets or sets the fast transmission gathering property.

**Prerequisite**: The UseMonteCarlo property must be True.  
  
True: Uses fast transmission gathering.  
False: Does not use fast transmission gathering.  
**Value type**: Boolean.  
  
The default value is False.

---

### SaveIntermediateMaps

`int SaveIntermediateMaps`

Gets or sets the intermediate save frequency.

**Value type**: Integer.  
**Range**: The value must be superior or equal to 300.  
  
The default value is 1800.

---

### PhotonMapMode

`int PhotonMapMode`

Gets or sets the photon map mode.

**Prerequisite**: The UseMonteCarlo property must be False.  
  
The values are:  
0 - No photon map.  
1 - Build photon map.  
2 - Load photon map.  
3 - Build and save photon map.  
**Value type**: Integer.  
  
The default value is 0.

---

### AmbientSampling

`Sampling AmbientSampling`

Gets or sets the ambient sampling.

**Prerequisite**: The UseMonteCarlo property must be False.  
**Value type**: Integer.  
**Range**: [1, 1000000].  
  
The default value is 100.

---

### SpecularMaximumImpact

`int SpecularMaximumImpact`

Gets or sets the specular maximum impact number.

**Prerequisite**: The UseMonteCarlo property must be False.  
**Value type**: Integer.  
**Range**: [0, 15].  
  
The default value is 10.

---

### AntiAliasing

`bool AntiAliasing`

Gets or sets the anti-aliasing property.

**Prerequisite**: The UseMonteCarlo property must be False.  
True: Uses anti-aliasing.  
False: Does not use anti-aliasing.  
  
Reduces artifacts as jagged profiles and fine details but increasing the simulation time.  
**Value type**: Boolean.  
  
The default value is True.

---

### SpecularApproximationAngle

`float SpecularApproximationAngle`

Gets or sets the specular approximation angle.

**Prerequisite**: The UseMonteCarlo property must be False.  
  
Reduces artifacts as jagged profiles and fine details but increasing the simulation time.  
**Value type**: Double (in degrees).  
**Range**: The value must be superior or equal to 0.0.  
  
The default value is 0.0 degrees.

---

### DirectPhotonNumber

`int DirectPhotonNumber`

Gets or sets the specular approximation angle.

**Prerequisite**: The PhotonMapMode property must be 1 or 3.  
  
Represents the number of rays sent in the direct phase.  
**Value type**: Integer.  
**Range**: (0, 200000].  
  
The default value is 10000.

---

### DirectMaxImpact

`int DirectMaxImpact`

Gets or sets the specular approximation angle.

**Prerequisite**: The PhotonMapMode property must be 1 or 3.  
  
Represents the max impact of rays in the direct phase.  
**Value type**: Integer.  
**Range**: The value must be superior to 0.  
  
The default value is 100.

---

### MaximumNeighbors

`int MaximumNeighbors`

Gets or sets the maximum neighbors.

**Prerequisite**: The PhotonMapMode property must be 1, 2 or 3.  
  
Represents the number of photons from the photon map taken into account to calculate the luminance.  
**Value type**: Integer.  
**Range**: (0, 10000].  
  
The default value is 100.

---

### MaxSearchRadius

`Radius MaxSearchRadius`

Gets or sets the maximum search radius.

**Prerequisite**: The PhotonMapMode property must be 1, 2 or 3.  
  
Represents the maximum distance from the luminance calculation's point to search for neighbors contribution.  
**Value type**: Double (in mm).  
**Range**:The value must be superior to 0.  
  
The default value is 100000000.0 mm.

---

### UseFinalGathering

`bool UseFinalGathering`

Gets or sets the final gathering property.

**Prerequisite**: The PhotonMapMode property must be 1, 2 or 3.  
True: Uses final gathering.  
False: Does not use final gathering.  
**Value type**: Boolean.  
  
The default value is False.

---

### FinalGatheringNeighbors

`int FinalGatheringNeighbors`

Gets or sets the final gathering neighbors.

**Prerequisite**: The UseFinalGathering property must be True.  
  
Pilots the number of neighbors after the secondary rays. They are used to compute the luminance for each split ray.  
**Value type**: Integer.  
**Range**: The value must be superior to 0.  
  
The default value is 10.

---

### SplittingNumber

`int SplittingNumber`

Gets or sets the splitting number.

**Prerequisite**: The UseFinalGathering property must be True.  
**Value type**: Integer.  
**Range**: The value must be superior to 0.  
  
The default value is 15.

---

### Texture

`bool Texture`

Gets or sets the property to use texture mapping.

True: Uses texture as optical properties.  
False: Does not use texture as optical properties.  
**Value type**: Boolean.  
  
The default value is True.

---

### TextureNormalizationMode

`int TextureNormalizationMode`

Gets or sets texture normalization mode.

**Prerequisite**: The UseTexture property must be True.  
  
The values are:  
0 - None. The simulation results uses both the Image Texture and the Texture Mapping Optical Properties.  
1 - Color from BRDF. The simulation result uses the BRDF information of the Texture Mapping Optical Properties.  
2 - Color from texture. The simulation result uses the color and the color lightness of the Image Texture.  
**Value type**: Integer.  
  
The default value is 0.

---

### RenderingAsOptical

`bool RenderingAsOptical`

Gets or sets the property to use rendering as optical properties.

True: Uses rendering as optical properties.  
False: Does not use rendering as optical properties.  
**Value type**: Boolean.  
  
The default value is False.

## Public Member Functions

### SaveAsPreset

`bool SaveAsPreset(self, name)`

Save the simulation settings as preset.

**Parameters**:

- `str name`: name of the preset.
