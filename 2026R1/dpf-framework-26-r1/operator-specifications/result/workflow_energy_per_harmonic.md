---
category: result
plugin: mapdl
license: any_dpf_supported_increments
---

# result:workflow energy per harmonic

**Version: 0.0.0**

## Description

Calculates the cumulated energy per harmonic in a multistage multiharmonic model.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong>|  time_scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping) |  |
| <strong>Pin 1</strong>|  mesh_scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping) | Master scoping. All harmonics will be intersected with this scoping. |
| <strong>Pin 2</strong>|  energy_type |[`int32`](../../core-concepts/dpf-types.md#standard-types) | Type of energy to be processed: (0: Strain + Kinetic energy (default), 1: Strain energy, 2: Kinetic energy) |
| <strong>Pin 3</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  stream |`stream` |  |
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  data_sources |[`data_sources`](../../core-concepts/dpf-types.md#data-sources) |  |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| harmonic_energy |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |
|  **Pin 1**| harmonic_energy_percentage |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: result

 **Plugin**: mapdl

 **Scripting name**: workflow_energy_per_harmonic

 **Full name**: result.workflow_energy_per_harmonic

 **Internal name**: workflow_energy_per_harmonic

 **License**: any_dpf_supported_increments

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("workflow_energy_per_harmonic"); // operator instantiation
op.connect(0, my_time_scoping);
op.connect(1, my_mesh_scoping);
op.connect(2, my_energy_type);
op.connect(3, my_stream);
op.connect(4, my_data_sources);
ansys::dpf::FieldsContainer my_harmonic_energy = op.getOutput<ansys::dpf::FieldsContainer>(0);
ansys::dpf::FieldsContainer my_harmonic_energy_percentage = op.getOutput<ansys::dpf::FieldsContainer>(1);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.result.workflow_energy_per_harmonic() # operator instantiation
op.inputs.time_scoping.connect(my_time_scoping)
op.inputs.mesh_scoping.connect(my_mesh_scoping)
op.inputs.energy_type.connect(my_energy_type)
op.inputs.stream.connect(my_stream)
op.inputs.data_sources.connect(my_data_sources)
my_harmonic_energy = op.outputs.harmonic_energy()
my_harmonic_energy_percentage = op.outputs.harmonic_energy_percentage()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.result.workflow_energy_per_harmonic() # operator instantiation
op.inputs.time_scoping.Connect(my_time_scoping)
op.inputs.mesh_scoping.Connect(my_mesh_scoping)
op.inputs.energy_type.Connect(my_energy_type)
op.inputs.stream.Connect(my_stream)
op.inputs.data_sources.Connect(my_data_sources)
my_harmonic_energy = op.outputs.harmonic_energy.GetData()
my_harmonic_energy_percentage = op.outputs.harmonic_energy_percentage.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.