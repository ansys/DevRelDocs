# Namespace ZOSAPI::Analysis::Settings::EncircledEnergy

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_encircled_energy"></a>

![][C#]

**Definition**:


## Classes

* [ZOSAPI::Analysis::Settings::EncircledEnergy::IAS\_DiffractionEncircledEnergy](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_encircled_energy_1_1_i_a_s___diffraction_encircled_energy.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_encircled_energy_1_1_i_a_s___diffraction_encircled_energy)
* [ZOSAPI::Analysis::Settings::EncircledEnergy::IAS\_ExtendedSourceEncircledEnergy](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_encircled_energy_1_1_i_a_s___extended_source_encircled_energy.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_encircled_energy_1_1_i_a_s___extended_source_encircled_energy)
* [ZOSAPI::Analysis::Settings::EncircledEnergy::IAS\_GeometricEncircledEnergy](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_encircled_energy_1_1_i_a_s___geometric_encircled_energy.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_encircled_energy_1_1_i_a_s___geometric_encircled_energy)
* [ZOSAPI::Analysis::Settings::EncircledEnergy::IAS\_GeometricLineEdgeSpread](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_encircled_energy_1_1_i_a_s___geometric_line_edge_spread.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_encircled_energy_1_1_i_a_s___geometric_line_edge_spread)

## Enumeration types

### Enumeration type EncircledEnergyTypes

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_encircled_energy_1a782844576696526dc51e62ff6acecb21"></a>

![][public]

**Definition**:


```csharp
enum EncircledEnergyTypes {
  Encircled = 1,
  X_Only = 2,
  Y_Only = 3,
  Ensquared = 4
}
```


#### Enumerator Encircled

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_encircled_energy_1a782844576696526dc51e62ff6acecb21a46510131c093d632cdc30a193c8a65da"></a>


#### Enumerator X_Only

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_encircled_energy_1a782844576696526dc51e62ff6acecb21a0605d6e70cacceeb5fabe3ecf4d0efca"></a>


#### Enumerator Y_Only

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_encircled_energy_1a782844576696526dc51e62ff6acecb21a500a7f06ba04c1e2887109e303d0bc37"></a>


#### Enumerator Ensquared

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_encircled_energy_1a782844576696526dc51e62ff6acecb21a0b5e91fb01cf07b9fd11d3e4bf25bee2"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.EncircledEnergy.EncircledEnergyTypes"}]}`
-->

### Enumeration type ReferToTypes

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_encircled_energy_1a85d6f7376864673db1fa90a55535bb0b"></a>

![][public]

**Definition**:


```csharp
enum ReferToTypes {
  ChiefRay = 0,
  Centroid = 1,
  Vertex = 2
}
```


#### Enumerator ChiefRay

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_encircled_energy_1a85d6f7376864673db1fa90a55535bb0bab67fb49a78858076df25bdcc64755c34"></a>


#### Enumerator Centroid

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_encircled_energy_1a85d6f7376864673db1fa90a55535bb0ba9b49197cf2fea5efc68ef8a88489e1b6"></a>


#### Enumerator Vertex

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_encircled_energy_1a85d6f7376864673db1fa90a55535bb0bab22b929ba52471a02d18bb3a4e4472e6"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.EncircledEnergy.ReferToTypes"}]}`
-->

### Enumeration type ExtendedSourceTypes

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_encircled_energy_1a0f29e2b2f1fc62eb281095c54518b716"></a>

![][public]

**Definition**:


```csharp
enum ExtendedSourceTypes {
  Encircled = 1,
  X_Only = 2,
  Y_Only = 3,
  Ensquared = 4,
  X_Distrib = 5,
  Y_Distrib = 6
}
```


#### Enumerator Encircled

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_encircled_energy_1a0f29e2b2f1fc62eb281095c54518b716a46510131c093d632cdc30a193c8a65da"></a>


#### Enumerator X_Only

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_encircled_energy_1a0f29e2b2f1fc62eb281095c54518b716a0605d6e70cacceeb5fabe3ecf4d0efca"></a>


#### Enumerator Y_Only

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_encircled_energy_1a0f29e2b2f1fc62eb281095c54518b716a500a7f06ba04c1e2887109e303d0bc37"></a>


#### Enumerator Ensquared

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_encircled_energy_1a0f29e2b2f1fc62eb281095c54518b716a0b5e91fb01cf07b9fd11d3e4bf25bee2"></a>


#### Enumerator X_Distrib

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_encircled_energy_1a0f29e2b2f1fc62eb281095c54518b716a8edd095587464c273f81299e307be47a"></a>


#### Enumerator Y_Distrib

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_encircled_energy_1a0f29e2b2f1fc62eb281095c54518b716ad5dd1bda177415ab5b31a68312e9736e"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.EncircledEnergy.ExtendedSourceTypes"}]}`
-->

### Enumeration type GeometricLineEdgeSpreadTypes

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_encircled_energy_1af3762dd6115572900afd6694d806cbd7"></a>

![][public]

**Definition**:


```csharp
enum GeometricLineEdgeSpreadTypes {
  LineEdge = 1,
  Line = 2,
  Edge = 3
}
```


#### Enumerator LineEdge

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_encircled_energy_1af3762dd6115572900afd6694d806cbd7a50e27db428f9d389cf6bf197e7085464"></a>


#### Enumerator Line

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_encircled_energy_1af3762dd6115572900afd6694d806cbd7a4803e6b9e63dabf04de980788d6a13c4"></a>


#### Enumerator Edge

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_encircled_energy_1af3762dd6115572900afd6694d806cbd7ae4a297a0f76119a442c2595ac040673e"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.EncircledEnergy.GeometricLineEdgeSpreadTypes"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
