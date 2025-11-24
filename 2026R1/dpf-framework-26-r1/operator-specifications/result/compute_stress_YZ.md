---
category: result
plugin: live post
license: None
---

# result:compute stress YZ

**Version: 0.0.0**

## Description

Computes the stress from an elastic strain field. compute_total_strain limitations are applicable for stress computation Get the YZ shear component (12 component).

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 1</strong>|  scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping) | The element scoping on which the result is computed. |
| <strong>Pin 3</strong>|  streams_container |[`streams_container`](../../core-concepts/dpf-types.md#streams-container) | Needed to get mesh and material ids. Optional if a data_sources have been connected. |
| <strong>Pin 4</strong>|  data_sources |[`data_sources`](../../core-concepts/dpf-types.md#data-sources) | Needed to get mesh and material ids. Optional if a streams_container have been connected. |
| <strong>Pin 9</strong>|  requested_location |[`string`](../../core-concepts/dpf-types.md#standard-types) | Average the Elemental Nodal result to the requested location. |
| <strong>Pin 10</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  strain |[`fields_container`](../../core-concepts/dpf-types.md#fields-container), [`field`](../../core-concepts/dpf-types.md#field) | Field/or fields container containing only the elastic strain field (element nodal). |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | The computed result fields container (elemental nodal). |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **run_in_parallel** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | true | Loops are allowed to run in parallel if the value of this config is set to true. |

## Scripting

 **Category**: result

 **Plugin**: live post

 **Scripting name**: compute_stress_YZ

 **Full name**: result.compute_stress_YZ

 **Internal name**: compute_stress_YZ

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("compute_stress_YZ"); // operator instantiation
op.connect(1, my_scoping);
op.connect(3, my_streams_container);
op.connect(4, my_data_sources);
op.connect(9, my_requested_location);
op.connect(10, my_strain);
ansys::dpf::FieldsContainer my_fields_container = op.getOutput<ansys::dpf::FieldsContainer>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.result.compute_stress_YZ() # operator instantiation
op.inputs.scoping.connect(my_scoping)
op.inputs.streams_container.connect(my_streams_container)
op.inputs.data_sources.connect(my_data_sources)
op.inputs.requested_location.connect(my_requested_location)
op.inputs.strain.connect(my_strain)
my_fields_container = op.outputs.fields_container()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.result.compute_stress_YZ() # operator instantiation
op.inputs.scoping.Connect(my_scoping)
op.inputs.streams_container.Connect(my_streams_container)
op.inputs.data_sources.Connect(my_data_sources)
op.inputs.requested_location.Connect(my_requested_location)
op.inputs.strain.Connect(my_strain)
my_fields_container = op.outputs.fields_container.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.