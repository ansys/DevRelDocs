---
category: result
plugin: mapdl
license: None
---

# result:mapdl material properties

## Description

Read the values of the properties of a material for a given materials property field (property field that contains materials information for each element of a mesh).It returns a fields container containing a field for each material property, with only one value per material. The following keys can be used: Young's modulus (keys: EX, EY, EZ), Poisson's ratio (keys: NUXY, NUYZ, NUXZ), Shear Modulus (keys: GXY, GYZ, GXZ), Coefficient of Thermal Expansion (keys: ALPX, ALPY, ALPZ), Volumic Mass (key: DENS), second Lame's coefficient (key: MU), Damping coefficient (key: DAMP), thermal Conductivity (keys: KXX, KYY, KZZ), Resistivity (keys: RSVX, RSVY, RSVZ), Specific heat in constant volume (key: C), Film coefficient (key: HF), Viscosity (key: VISC), Emissivity (key: EMIS). 


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  properties_name |[`string`](../../getting-started/using-data-containers.md#string), [`vector<string>`](../../getting-started/using-data-containers.md#vector<string>) |  |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  materials |[`property_field`](../../getting-started/using-data-containers.md#property-field) | Property field that contains a material id per element. |
| <strong>Pin 3</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  streams_container |[`streams_container`](../../getting-started/using-data-containers.md#streams-container) |  |
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  data_sources |[`data_sources`](../../getting-started/using-data-containers.md#data-sources) |  |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| properties_value |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: result

 **Plugin**: mapdl

 **Scripting name**: mapdl_material_properties

 **Full name**: result.mapdl_material_properties

 **Internal name**: mapdl_material_properties

 **License**: None
