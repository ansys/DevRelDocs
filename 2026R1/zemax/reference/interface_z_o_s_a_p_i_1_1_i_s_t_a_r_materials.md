# Interface ZOSAPI::ISTARMaterials

<a id="interface_z_o_s_a_p_i_1_1_i_s_t_a_r_materials"></a>

![][C#]
![][public]

**Definition**:

Top-level access to material properties for STAR module.


## Members

* [GetDNDT](interface_z_o_s_a_p_i_1_1_i_s_t_a_r_materials.md#interface_z_o_s_a_p_i_1_1_i_s_t_a_r_materials_1a3e2d6236629f57eee09bf3b6d84ca8df)
* [GetRefractiveIndex](interface_z_o_s_a_p_i_1_1_i_s_t_a_r_materials.md#interface_z_o_s_a_p_i_1_1_i_s_t_a_r_materials_1a1238b9bbb749c1e83b75b4c6e51c95fd)

## Public functions

### Function GetRefractiveIndex

<a id="interface_z_o_s_a_p_i_1_1_i_s_t_a_r_materials_1a1238b9bbb749c1e83b75b4c6e51c95fd"></a>

![][public]


```csharp
double ZOSAPI.ISTARMaterials.GetRefractiveIndex(string MaterialCatalog, string Material, double Wavelength, double EnvironmentPressure, double EnvironmentTemperature, double MaterialPressure, double MaterialTemperature)
```


Get refractive index for a material at a specified wavelength (in microns), temperature (in deg C) and pressure (in atm).

**Returns**:

The index of refraction relative to air.(unitless).


**Parameters**:

* string **MaterialCatalog**
* string **Material**
* double **Wavelength**
* double **EnvironmentPressure**
* double **EnvironmentTemperature**
* double **MaterialPressure**
* double **MaterialTemperature**

**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.ISTARMaterials.GetRefractiveIndex"}]}`
-->

### Function GetDNDT

<a id="interface_z_o_s_a_p_i_1_1_i_s_t_a_r_materials_1a3e2d6236629f57eee09bf3b6d84ca8df"></a>

![][public]


```csharp
double ZOSAPI.ISTARMaterials.GetDNDT(string MaterialCatalog, string Material, double Wavelength, double EnvironmentPressure, double EnvironmentTemperature, double MaterialPressure, double MaterialTemperature, double DeltaT)
```


Get refractive index derivative with respect to temperature for a material at a specified wavelength (in microns), temperature (in deg C) and pressure (in atm).

**Returns**:

The derivative of the index of refraction relative to air with respect to temperature. (units are 1/deg C).


**Parameters**:

* string **MaterialCatalog**
* string **Material**
* double **Wavelength**
* double **EnvironmentPressure**
* double **EnvironmentTemperature**
* double **MaterialPressure**
* double **MaterialTemperature**
* double **DeltaT**

**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.ISTARMaterials.GetDNDT"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
