---
uid: class_speos_n_x__2512_1_1_simulation_settings
title: SimulationSettings
---

# SimulationSettings Class

**Namespace:** `SpeosNX`

**Inherits from:** `object`

Represents the interface for editing custom simulation settings.

## Description

To create a new instance of this class, use `SimulationCommonBuilder::GetSettings`

## Properties

| Name | Type | Description |
|------|------|-------------|
| `thisown` | `object` |  |
| `m_pImpl` | `object` |  |
| `AmbientSampling` | `str` | Gets or sets the ambient sampling. |
| `AntiAliasing` | `str` | Gets or sets the anti-aliasing property. |
| `ColorimetricStandardMode` | `str` | Gets or sets the colorimetric standard type. |
| `DirectMaxImpact` | `str` | Gets or sets the specular approximation angle. |
| `DirectPhotonNumber` | `str` | Gets or sets the specular approximation angle. |
| `Dispersion` | `str` | Gets or sets the property to use dispersion. |
| `DrawImpacts` | `str` | Gets or sets the property to draw impacts. |
| `DrawRays` | `str` | Gets or sets the property to draw rays. |
| `FastTransmissionGathering` | `str` | Gets or sets the fast transmission gathering property. |
| `FinalGathering` | `str` | Gets or sets the final gathering property. |
| `FinalGatheringNeighbors` | `str` | Gets or sets the final gathering neighbors. |
| `GatheringSourceNumber` | `str` | Gets or sets the gathering source number. |
| `GeometricalDistanceTolerance` | `str` | Gets or sets the geometrical distance tolerance. |
| `InteractiveSimulationReport` | `str` | Gets or sets the property to report impact. |
| `IntermediateSaveFrequency` | `str` | Gets or sets the intermediate save frequency. |
| `MaxGatheringError` | `str` | Gets or sets the maximum gathering error. |
| `MaxNeighbors` | `str` | Gets or sets the maximum neighbors. |
| `MaxSearchRadius` | `str` | Gets or sets the maximum search radius. |
| `MaximumImpactNumber` | `str` | Gets or sets the maximum number of surface interaction. |
| `MeshingAngle` | `str` | Gets or sets the meshing angle. |
| `MeshingEdgeAngle` | `str` | Gets or sets the meshing edge angle. |
| `MeshingEdgeSag` | `str` | Gets or sets the meshing edge sag value. |
| `MeshingSagMode` | `str` | Gets or sets the meshing sag mode. |
| `MeshingSagValue` | `str` | Gets or sets the meshing sag value. |
| `MeshingStepMode` | `str` | Gets or sets the meshing step mode. |
| `MeshingStepValue` | `str` | Gets or sets the meshing step fixed value. |
| `MinimumEnergy` | `str` | Gets or sets the maximum number of surface interaction. |
| `MonteCarloAlgorithm` | `str` | Gets or sets the Monte Carlo algorithm property. |
| `NumberStandardPasses` | `str` | Gets or sets the number of standard passes before optimized passes. |
| `OptimizedPropagation` | `str` | Gets or sets optimized propagation type. |
| `PhotonMapMode` | `str` | Gets or sets the photon map mode. |
| `RayTracerPrecisionMode` | `str` | Gets or sets ray tracer precision mode. |
| `RenderingAsOptical` | `str` | Gets or sets the property to use rendering as optical properties. |
| `SaveIntermediateMaps` | `str` | Gets or sets the intermediate save frequency. |
| `SmartEngine` | `str` | Gets or sets the smart engine value. |
| `SpecificFacetEdgesParameters` | `str` | Gets or sets the specific parameters property for facet edges. |
| `SpecularApproxAngle` | `str` | Gets or sets the specular approximation angle. |
| `SpecularMaxImpact` | `str` | Gets or sets the specular maximum impact number. |
| `Splitting` | `str` | Gets or sets the property to use splitting for inverse simulation. |
| `SplittingNumber` | `str` | Gets or sets the splitting number. |
| `Texture` | `str` | Gets or sets the property to use texture mapping. |
| `TextureNormalizationMode` | `str` | Gets or sets texture normalization mode. |
| `Weight` | `str` | Gets or sets the weight property. |

## Methods

### SaveAsPreset

```python
SaveAsPreset(self, name) -> 'bool'
```

Save the simulation settings as preset.

**Parameters:**
- `name`: : name of the preset.


**Returns:** True: Success.
 False: Error.

**Parameters:**

- `name` (name)
