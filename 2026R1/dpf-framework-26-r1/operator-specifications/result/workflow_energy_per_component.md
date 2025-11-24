---
category: result
plugin: mapdl
license: any_dpf_supported_increments
---

# result:workflow energy per component

**Version: 0.0.0**

## Description

Calculates the cumulated energy per component (Named Selection). For cyclic and multistage models, the expansion will be automatically done.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong>|  time_scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping) |  |
| <strong>Pin 1</strong>|  mesh_scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping), [`scopings_container`](../../core-concepts/dpf-types.md#scopings-container) | When the input is a scoping, it is treated as the master scoping. All named selections will intersect with it. When the input is a scopings container, named selections will not be needed. |
| <strong>Pin 2</strong>|  energy_type |[`int32`](../../core-concepts/dpf-types.md#standard-types) | Type of energy to be processed: (0: Strain + Kinetic energy (default), 1: Strain energy, 2: Kinetic energy, 3: All energy types) |
| <strong>Pin 3</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  streams_container |[`streams_container`](../../core-concepts/dpf-types.md#streams-container) |  |
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  data_sources |[`data_sources`](../../core-concepts/dpf-types.md#data-sources) |  |
| <strong>Pin 5</strong>|  named_selection |[`string`](../../core-concepts/dpf-types.md#standard-types) | Named Selections. Intersection of all  Named Selections with the master scoping will be done. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| component_energy |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |
|  **Pin 1**| component_energy_percentage |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |
|  **Pin 2**| component_total_energy |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |
|  **Pin 3**| component_total_energy_percentage |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |
|  **Pin 4**| component_strain_energy |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |
|  **Pin 5**| component_strain_energy_percentage |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |
|  **Pin 6**| component_kinetic_energy |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |
|  **Pin 7**| component_kinetic_energy_percentage |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: result

 **Plugin**: mapdl

 **Scripting name**: workflow_energy_per_component

 **Full name**: result.workflow_energy_per_component

 **Internal name**: workflow_energy_per_component

 **License**: any_dpf_supported_increments

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("workflow_energy_per_component"); // operator instantiation
op.connect(0, my_time_scoping);
op.connect(1, my_mesh_scoping);
op.connect(2, my_energy_type);
op.connect(3, my_streams_container);
op.connect(4, my_data_sources);
op.connect(5, my_named_selection);
ansys::dpf::FieldsContainer my_component_energy = op.getOutput<ansys::dpf::FieldsContainer>(0);
ansys::dpf::FieldsContainer my_component_energy_percentage = op.getOutput<ansys::dpf::FieldsContainer>(1);
ansys::dpf::FieldsContainer my_component_total_energy = op.getOutput<ansys::dpf::FieldsContainer>(2);
ansys::dpf::FieldsContainer my_component_total_energy_percentage = op.getOutput<ansys::dpf::FieldsContainer>(3);
ansys::dpf::FieldsContainer my_component_strain_energy = op.getOutput<ansys::dpf::FieldsContainer>(4);
ansys::dpf::FieldsContainer my_component_strain_energy_percentage = op.getOutput<ansys::dpf::FieldsContainer>(5);
ansys::dpf::FieldsContainer my_component_kinetic_energy = op.getOutput<ansys::dpf::FieldsContainer>(6);
ansys::dpf::FieldsContainer my_component_kinetic_energy_percentage = op.getOutput<ansys::dpf::FieldsContainer>(7);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.result.workflow_energy_per_component() # operator instantiation
op.inputs.time_scoping.connect(my_time_scoping)
op.inputs.mesh_scoping.connect(my_mesh_scoping)
op.inputs.energy_type.connect(my_energy_type)
op.inputs.streams_container.connect(my_streams_container)
op.inputs.data_sources.connect(my_data_sources)
op.inputs.named_selection1.connect(my_named_selection1)
op.inputs.named_selection2.connect(my_named_selection2)
my_component_energy = op.outputs.component_energy()
my_component_energy_percentage = op.outputs.component_energy_percentage()
my_component_total_energy = op.outputs.component_total_energy()
my_component_total_energy_percentage = op.outputs.component_total_energy_percentage()
my_component_strain_energy = op.outputs.component_strain_energy()
my_component_strain_energy_percentage = op.outputs.component_strain_energy_percentage()
my_component_kinetic_energy = op.outputs.component_kinetic_energy()
my_component_kinetic_energy_percentage = op.outputs.component_kinetic_energy_percentage()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.result.workflow_energy_per_component() # operator instantiation
op.inputs.time_scoping.Connect(my_time_scoping)
op.inputs.mesh_scoping.Connect(my_mesh_scoping)
op.inputs.energy_type.Connect(my_energy_type)
op.inputs.streams_container.Connect(my_streams_container)
op.inputs.data_sources.Connect(my_data_sources)
op.inputs.named_selection.Connect(my_named_selection)
my_component_energy = op.outputs.component_energy.GetData()
my_component_energy_percentage = op.outputs.component_energy_percentage.GetData()
my_component_total_energy = op.outputs.component_total_energy.GetData()
my_component_total_energy_percentage = op.outputs.component_total_energy_percentage.GetData()
my_component_strain_energy = op.outputs.component_strain_energy.GetData()
my_component_strain_energy_percentage = op.outputs.component_strain_energy_percentage.GetData()
my_component_kinetic_energy = op.outputs.component_kinetic_energy.GetData()
my_component_kinetic_energy_percentage = op.outputs.component_kinetic_energy_percentage.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.