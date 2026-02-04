---
category: result
plugin: core
license: None
---

# result:rom data provider

**Version: 0.0.0**

## Description

Set the required data for the invariant terms computation (reduced matrices, lumped mass matrix, modes ...)

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  rom_type |[`bool`](../../core-concepts/dpf-types.md#standard-types) | If this pin is set to true, customized rom data must be given |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  reduced_stiff_matrix |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | FieldsContainers containing the reduced Stiffness matrix |
| <strong>Pin 2</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  reduced_damping_matrix |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | FieldsContainers containing the reduced Mass matrix |
| <strong>Pin 3</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  reduced_mass_matrix |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | FieldsContainers containing the reduced Damp matrix |
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  data_sources |[`data_sources`](../../core-concepts/dpf-types.md#data-sources) |  |
| <strong>Pin 5</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  reduced_rhs_vector |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | FieldsContainers containing the reduced RHS vector |
| <strong>Pin 6</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  lumped_mass_matrix |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | FieldsContainers containing the lumped Mass matrix |
| <strong>Pin 7</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  mode_shapes |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | FieldsContainers containing the customized mode shapes |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| rom_matrices |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | FieldsContainers containing the reduced matrices |
|  **Pin 1**| mode_shapes |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | FieldsContainers containing the mode shapes, which are CST and NOR for the cms method |
|  **Pin 2**| lumped_mass |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | FieldsContainers containing the lumped mass |
|  **Pin 3**| model_data |[`property_field`](../../core-concepts/dpf-types.md#property-field) | data describing the finite element model |
|  **Pin 4**| center_of_mass |[`property_field`](../../core-concepts/dpf-types.md#property-field) |  |
|  **Pin 5**| inertia_relief |[`field`](../../core-concepts/dpf-types.md#field) | inertia matrix |
|  **Pin 6**| model_size |[`double`](../../core-concepts/dpf-types.md#standard-types) | size of the model |
|  **Pin 7**| field_coordinates_and_euler_angles |[`double`](../../core-concepts/dpf-types.md#standard-types) | coordinates and euler angles of all nodes |
|  **Pin 8**| nod |[`vector<int32>`](../../core-concepts/dpf-types.md#standard-types) | ids of master nodes |
|  **Pin 9**| meshed_region |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) | expanded meshed region. |
|  **Pin 10**| phi_ortho |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Orthonormalized mode shape transformation |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: result

 **Plugin**: core

 **Scripting name**: rom_data_provider

 **Full name**: result.rom_data_provider

 **Internal name**: rom_data_provider

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("rom_data_provider"); // operator instantiation
op.connect(0, my_rom_type);
op.connect(1, my_reduced_stiff_matrix);
op.connect(2, my_reduced_damping_matrix);
op.connect(3, my_reduced_mass_matrix);
op.connect(4, my_data_sources);
op.connect(5, my_reduced_rhs_vector);
op.connect(6, my_lumped_mass_matrix);
op.connect(7, my_mode_shapes);
ansys::dpf::FieldsContainer my_rom_matrices = op.getOutput<ansys::dpf::FieldsContainer>(0);
ansys::dpf::FieldsContainer my_mode_shapes = op.getOutput<ansys::dpf::FieldsContainer>(1);
ansys::dpf::FieldsContainer my_lumped_mass = op.getOutput<ansys::dpf::FieldsContainer>(2);
ansys::dpf::PropertyField my_model_data = op.getOutput<ansys::dpf::PropertyField>(3);
ansys::dpf::PropertyField my_center_of_mass = op.getOutput<ansys::dpf::PropertyField>(4);
ansys::dpf::Field my_inertia_relief = op.getOutput<ansys::dpf::Field>(5);
double my_model_size = op.getOutput<double>(6);
double my_field_coordinates_and_euler_angles = op.getOutput<double>(7);
std::vector<int> my_nod = op.getOutput<std::vector<int>>(8);
ansys::dpf::MeshedRegion my_meshed_region = op.getOutput<ansys::dpf::MeshedRegion>(9);
ansys::dpf::FieldsContainer my_phi_ortho = op.getOutput<ansys::dpf::FieldsContainer>(10);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.result.rom_data_provider() # operator instantiation
op.inputs.rom_type.connect(my_rom_type)
op.inputs.reduced_stiff_matrix.connect(my_reduced_stiff_matrix)
op.inputs.reduced_damping_matrix.connect(my_reduced_damping_matrix)
op.inputs.reduced_mass_matrix.connect(my_reduced_mass_matrix)
op.inputs.data_sources.connect(my_data_sources)
op.inputs.reduced_rhs_vector.connect(my_reduced_rhs_vector)
op.inputs.lumped_mass_matrix.connect(my_lumped_mass_matrix)
op.inputs.mode_shapes.connect(my_mode_shapes)
my_rom_matrices = op.outputs.rom_matrices()
my_mode_shapes = op.outputs.mode_shapes()
my_lumped_mass = op.outputs.lumped_mass()
my_model_data = op.outputs.model_data()
my_center_of_mass = op.outputs.center_of_mass()
my_inertia_relief = op.outputs.inertia_relief()
my_model_size = op.outputs.model_size()
my_field_coordinates_and_euler_angles = op.outputs.field_coordinates_and_euler_angles()
my_nod = op.outputs.nod()
my_meshed_region = op.outputs.meshed_region()
my_phi_ortho = op.outputs.phi_ortho()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.result.rom_data_provider() # operator instantiation
op.inputs.rom_type.Connect(my_rom_type)
op.inputs.reduced_stiff_matrix.Connect(my_reduced_stiff_matrix)
op.inputs.reduced_damping_matrix.Connect(my_reduced_damping_matrix)
op.inputs.reduced_mass_matrix.Connect(my_reduced_mass_matrix)
op.inputs.data_sources.Connect(my_data_sources)
op.inputs.reduced_rhs_vector.Connect(my_reduced_rhs_vector)
op.inputs.lumped_mass_matrix.Connect(my_lumped_mass_matrix)
op.inputs.mode_shapes.Connect(my_mode_shapes)
my_rom_matrices = op.outputs.rom_matrices.GetData()
my_mode_shapes = op.outputs.mode_shapes.GetData()
my_lumped_mass = op.outputs.lumped_mass.GetData()
my_model_data = op.outputs.model_data.GetData()
my_center_of_mass = op.outputs.center_of_mass.GetData()
my_inertia_relief = op.outputs.inertia_relief.GetData()
my_model_size = op.outputs.model_size.GetData()
my_field_coordinates_and_euler_angles = op.outputs.field_coordinates_and_euler_angles.GetData()
my_nod = op.outputs.nod.GetData()
my_meshed_region = op.outputs.meshed_region.GetData()
my_phi_ortho = op.outputs.phi_ortho.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.