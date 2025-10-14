# Speos RPC Changelog 2025 R2 SP1

## Simulation

### Virtual BSDF bench

- Added [virtual_bsdf_bench_simulation_template](../api-reference.md#simulationtemplate) as new field of the **SimulationTemplate** object
- Added [SimulationTemplate.VirtualBSDFBench](../api-reference.md#simulationtemplatevirtualbsdfbench) as new object of the **SimulationTemplate** object, coming with the following created objects:
  - [SimulationTemplate.VirtualBSDFBench.AllCharacteristics](../api-reference.md#simulationtemplatevirtualbsdfbenchallcharacteristics)
  - [SimulationTemplate.VirtualBSDFBench.AllCharacteristics.Iridescence](../api-reference.md#simulationtemplatevirtualbsdfbenchallcharacteristicsiridescence)
  - [SimulationTemplate.VirtualBSDFBench.AllCharacteristics.NoIridescence](../api-reference.md#simulationtemplatevirtualbsdfbenchallcharacteristicsnoiridescence)
  - [SimulationTemplate.VirtualBSDFBench.AllCharacteristics.NoIridescence.Anisotropic](../api-reference.md#simulationtemplatevirtualbsdfbenchallcharacteristicsnoiridescenceanisotropic)
  - [SimulationTemplate.VirtualBSDFBench.AllCharacteristics.NoIridescence.Isotropic](../api-reference.md#simulationtemplatevirtualbsdfbenchallcharacteristicsnoiridescenceisotropic)
  - [SimulationTemplate.VirtualBSDFBench.RoughnessOnly](../api-reference.md#simulationtemplatevirtualbsdfbenchroughnessonly)
  - [SimulationTemplate.VirtualBSDFBench.Sensor](../api-reference.md#simulationtemplatevirtualbsdfbenchsensor)
  - [SimulationTemplate.VirtualBSDFBench.Sensor.SensorSamplingAutomatic](../api-reference.md#simulationtemplatevirtualbsdfbenchsensorsensorsamplingautomatic)
  - [SimulationTemplate.VirtualBSDFBench.Sensor.SensorSamplingUniform](../api-reference.md#simulationtemplatevirtualbsdfbenchsensorsensorsamplinguniform)
  - [SimulationTemplate.VirtualBSDFBench.SourceSamplingAdaptive](../api-reference.md#simulationtemplatevirtualbsdfbenchsourcesamplingadaptive)
  - [SimulationTemplate.VirtualBSDFBench.SourceSamplingUniformAnisotropic](../api-reference.md#simulationtemplatevirtualbsdfbenchsourcesamplinguniformanisotropic)
  - [SimulationTemplate.VirtualBSDFBench.SourceSamplingUniformIsotropic](../api-reference.md#simulationtemplatevirtualbsdfbenchsourcesamplinguniformisotropic)
  - [SimulationTemplate.VirtualBSDFBench.SourceSamplingUniformAnisotropic.PhiSymmetry](../api-reference.md#simulationtemplatevirtualbsdfbenchsourcesamplinguniformisotropicphisymmetry)
- Added [vbb_properties](../api-reference.md#scenesimulationinstance) as new field of the **Scene.SimulationInstance** object
- Added [Scene.SimulationInstance.VirtualBSDFBenchProperties](../api-reference.md#scenesimulationinstancevirtualbsdfbenchproperties) as new object of the **Scene.SimulationInstance** object
- Added [virtualbsdfbench_simulation_properties](../api-reference.md#job) as new field of the **Job** object
- Added [Job.VirtualBSDFBenchSimulationProperties](../api-reference.md#jobvirtualbsdfbenchsimulationproperties) as new oject of the **Job** object

## Texture

### Material

- Added [Texture] as new object, coming with the [Texture.TextureNormalization](../api-reference.md#texturetexturenormalization) object
- Added [texture](../api-reference.md#soptemplate) as new field of the **SOPTemplate** object
- Added [SOPTemplate.Texture](../api-reference.md#soptemplatetexture) as new object of the **SOPTemplate** object, coming with the following created objects:
  - [SOPTemplate.Texture.Image](../api-reference.md#soptemplatetextureimage)
  - [SOPTemplate.Texture.NormalMap](../api-reference.md#soptemplatetexturenormalmap)
  - [SOPTemplate.Texture.NormalMap.FromImage](../api-reference.md#soptemplatetexturenormalmapfromimage)
  - [SOPTemplate.Texture.NormalMap.FromNormalMap](../api-reference.md#soptemplatetexturenormalmapfromnormalmap)
- Deprecated [sop_guids](../api-reference.md#scenematerialinstance) field from the **Scene.MaterialInstance** object
- Added [sop_guid](../api-reference.md#scenematerialinstance) as new field of the **Scene.MaterialInstance** object
- Added [texture](../api-reference.md#scenematerialinstance) as new field of the **Scene.MaterialInstance** object
- Added [SceneMaterialInstance.Texture](../api-reference.md#scenematerialinstancetexture) as new object of the **Scene.MaterialInstance** object, coming with the following created objects:
  - [Scene.MaterialInstance.Texture.Layer](../api-reference.md#scenematerialinstancetexturelayer)
  - [Scene.MaterialInstance.Texture.Layer.TextureMappingInfo](../api-reference.md#scenematerialinstancetexturelayertexturemappinginfo)
  - [Scene.MaterialInstance.Texture.MappingOperator](../api-reference.md#scenematerialinstancetexturemappingoperator)
  - [Scene.MaterialInstance.Texture.MappingOperator.Planar](../api-reference.md#scenematerialinstancetexturemappingoperatorplanar)
  - [Scene.MaterialInstance.Texture.MappingOperator.Spherical](../api-reference.md#scenematerialinstancetexturemappingoperatorspherical)
- Added [texture](../api-reference.md#directmcsimulationtemplate) as new field of the **DirectMCSimulationTemplate** object
- Added [texture](../api-reference.md#inversemcsimulationtemplate) as new field of the **InverseMCSimulationTemplate** object
- Added [texture](../api-reference.md#simulationtemplateinteractive) as new field of the **SimulationTemplate.Interactive** object

### Face

- Added [vertices_data](../api-reference.md#chunk) as new field of the **Chunk** object
- Added [Chunk.VerticesData](../api-reference.md#chunkverticesdata) as new object of the **Chunk** object
- Added [vertices_data](../api-reference.md#face) as new field of the **Face** object
- Added [facets_data](../api-reference.md#chunk) as new field of the **Chunk** object
- Added [Chunk.FacetsData](../api-reference.md#chunkfacetsdata) as new object of the **Chunk** object
- Added [facets_data](../api-reference.md#face) as new field of the **Face** object
- Added [Face.MeshData](../api-reference.md#facemeshdata) as new object of the **Face** object
- Removed [texture_coordinates_channels](../api-reference.md#chunk) field from the **Chunk** object
- Removed [Chunk.TextureCoordinatesChannels](../api-reference.md#chunk) object from the **Chunk** object
- Removed [texture_coordinates_channels](../api-reference.md#face) field from the **Face** object
- Removed [Face.TextureCoordinates](../api-reference.md#face) object from the **Face** object
