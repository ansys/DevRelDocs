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

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [rom_type](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/result/rom_data_provider) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`bool`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |
| <strong>1</strong> | [reduced_stiff_matrix](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/result/rom_data_provider) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`fields_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |
| <strong>2</strong> | [reduced_damping_matrix](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/result/rom_data_provider) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`fields_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |
| <strong>3</strong> | [reduced_mass_matrix](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/result/rom_data_provider) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`fields_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |
| <strong>4</strong> | [data_sources](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/result/rom_data_provider) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`data_sources`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |
| <strong>5</strong> | [reduced_rhs_vector](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/result/rom_data_provider) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`fields_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |
| <strong>6</strong> | [lumped_mass_matrix](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/result/rom_data_provider) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`fields_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |
| <strong>7</strong> | [mode_shapes](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/result/rom_data_provider) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`fields_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |


<a id="input_0"></a>
### rom_type (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)

If this pin is set to true, customized rom data must be given

<a id="input_1"></a>
### reduced_stiff_matrix (Pin 1)

- **Required:** Yes
- **Expected type(s):** [`fields_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)

FieldsContainers containing the reduced Stiffness matrix

<a id="input_2"></a>
### reduced_damping_matrix (Pin 2)

- **Required:** Yes
- **Expected type(s):** [`fields_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)

FieldsContainers containing the reduced Mass matrix

<a id="input_3"></a>
### reduced_mass_matrix (Pin 3)

- **Required:** Yes
- **Expected type(s):** [`fields_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)

FieldsContainers containing the reduced Damp matrix

<a id="input_4"></a>
### data_sources (Pin 4)

- **Required:** Yes
- **Expected type(s):** [`data_sources`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)



<a id="input_5"></a>
### reduced_rhs_vector (Pin 5)

- **Required:** Yes
- **Expected type(s):** [`fields_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)

FieldsContainers containing the reduced RHS vector

<a id="input_6"></a>
### lumped_mass_matrix (Pin 6)

- **Required:** Yes
- **Expected type(s):** [`fields_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)

FieldsContainers containing the lumped Mass matrix

<a id="input_7"></a>
### mode_shapes (Pin 7)

- **Required:** Yes
- **Expected type(s):** [`fields_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)

FieldsContainers containing the customized mode shapes


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [rom_matrices](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/result/rom_data_provider) |[`fields_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |
|  **1**| [mode_shapes](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/result/rom_data_provider) |[`fields_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |
|  **2**| [lumped_mass](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/result/rom_data_provider) |[`fields_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |
|  **3**| [model_data](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/result/rom_data_provider) |[`property_field`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |
|  **4**| [center_of_mass](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/result/rom_data_provider) |[`property_field`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |
|  **5**| [inertia_relief](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/result/rom_data_provider) |[`field`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |
|  **6**| [model_size](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/result/rom_data_provider) |[`double`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |
|  **7**| [field_coordinates_and_euler_angles](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/result/rom_data_provider) |[`double`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |
|  **8**| [nod](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/result/rom_data_provider) |[`vector&lt;int32&gt;`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |
|  **9**| [meshed_region](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/result/rom_data_provider) |[`abstract_meshed_region`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |
|  **10**| [phi_ortho](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/result/rom_data_provider) |[`fields_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |


<a id="output_0"></a>
### rom_matrices (Pin 0)

- **Expected type(s):** [`fields_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)

FieldsContainers containing the reduced matrices

<a id="output_1"></a>
### mode_shapes (Pin 1)

- **Expected type(s):** [`fields_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)

FieldsContainers containing the mode shapes, which are CST and NOR for the cms method

<a id="output_2"></a>
### lumped_mass (Pin 2)

- **Expected type(s):** [`fields_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)

FieldsContainers containing the lumped mass

<a id="output_3"></a>
### model_data (Pin 3)

- **Expected type(s):** [`property_field`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)

data describing the finite element model

<a id="output_4"></a>
### center_of_mass (Pin 4)

- **Expected type(s):** [`property_field`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)



<a id="output_5"></a>
### inertia_relief (Pin 5)

- **Expected type(s):** [`field`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)

inertia matrix

<a id="output_6"></a>
### model_size (Pin 6)

- **Expected type(s):** [`double`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)

size of the model

<a id="output_7"></a>
### field_coordinates_and_euler_angles (Pin 7)

- **Expected type(s):** [`double`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)

coordinates and euler angles of all nodes

<a id="output_8"></a>
### nod (Pin 8)

- **Expected type(s):** [`vector&lt;int32&gt;`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)

ids of master nodes

<a id="output_9"></a>
### meshed_region (Pin 9)

- **Expected type(s):** [`abstract_meshed_region`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)

expanded meshed region.

<a id="output_10"></a>
### phi_ortho (Pin 10)

- **Expected type(s):** [`fields_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)

Orthonormalized mode shape transformation


## Configurations

This operator supports [configuration options](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/operator-configurations) that modify its behavior.


### [mutex](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/operator-configurations)

- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: result

 **Plugin**: core

 **Scripting name**: rom_data_provider

 **Full name**: result.rom_data_provider

 **Internal name**: rom_data_provider

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

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
<br />

## Changelog

- Version 0.0.0: Initial release.