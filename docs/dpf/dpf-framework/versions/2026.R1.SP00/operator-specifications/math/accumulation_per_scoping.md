---
category: math
plugin: core
license: any_dpf_supported_increments
---

# math:accumulation per scoping

**Version: 0.0.0**

## Description

This operator calculates the sum and the percentage of total sum of the input fields container for each scoping of the scopings container.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |
| <strong>Pin 1</strong>|  mesh_scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping) | Master scoping. All scopings in the Scopings Container will be intersected with this scoping. |
| <strong>Pin 3</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  streams_container |[`streams_container`](../../core-concepts/dpf-types.md#streams-container) |  |
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  data_sources |[`data_sources`](../../core-concepts/dpf-types.md#data-sources) |  |
| <strong>Pin 5</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  scopings_container |[`scopings_container`](../../core-concepts/dpf-types.md#scopings-container) | The intersection between the of the first will be used. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| accumulation_per_scoping |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |
|  **Pin 1**| accumulation_per_scoping_percentage |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: math

 **Plugin**: core

 **Scripting name**: accumulation_per_scoping

 **Full name**: math.accumulation_per_scoping

 **Internal name**: accumulation_per_scoping

 **License**: any_dpf_supported_increments

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("accumulation_per_scoping"); // operator instantiation
op.connect(0, my_fields_container);
op.connect(1, my_mesh_scoping);
op.connect(3, my_streams_container);
op.connect(4, my_data_sources);
op.connect(5, my_scopings_container);
ansys::dpf::FieldsContainer my_accumulation_per_scoping = op.getOutput<ansys::dpf::FieldsContainer>(0);
ansys::dpf::FieldsContainer my_accumulation_per_scoping_percentage = op.getOutput<ansys::dpf::FieldsContainer>(1);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.math.accumulation_per_scoping() # operator instantiation
op.inputs.fields_container.connect(my_fields_container)
op.inputs.mesh_scoping.connect(my_mesh_scoping)
op.inputs.streams_container.connect(my_streams_container)
op.inputs.data_sources.connect(my_data_sources)
op.inputs.scopings_container.connect(my_scopings_container)
my_accumulation_per_scoping = op.outputs.accumulation_per_scoping()
my_accumulation_per_scoping_percentage = op.outputs.accumulation_per_scoping_percentage()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.math.accumulation_per_scoping() # operator instantiation
op.inputs.fields_container.Connect(my_fields_container)
op.inputs.mesh_scoping.Connect(my_mesh_scoping)
op.inputs.streams_container.Connect(my_streams_container)
op.inputs.data_sources.Connect(my_data_sources)
op.inputs.scopings_container.Connect(my_scopings_container)
my_accumulation_per_scoping = op.outputs.accumulation_per_scoping.GetData()
my_accumulation_per_scoping_percentage = op.outputs.accumulation_per_scoping_percentage.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.