---
category: serialization
plugin: core
license: None
---

# serialization:hdf5dpf custom read

**Version: 0.0.0**

## Description

Extract a custom result from an hdf5dpf file. This operator is deprecated, please use the 'custom' operator instead.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong>|  time_scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping) |  |
| <strong>Pin 1</strong>|  mesh_scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping) |  |
| <strong>Pin 3</strong>|  streams |[`streams_container`](../../core-concepts/dpf-types.md#streams-container) | Hdf5df file stream. |
| <strong>Pin 4</strong>|  data_sources |[`data_sources`](../../core-concepts/dpf-types.md#data-sources) | Hdf5df file data source. |
| <strong>Pin 24</strong>|  meta_data |[`abstract_data_tree`](../../core-concepts/dpf-types.md#data-tree) | meta_data that may be used to evaluate results or extract workflows. |
| <strong>Pin 60</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  result_name | | Name of the result that must be extracted from the hdf5dpf file |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| field_or_fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container), [`field`](../../core-concepts/dpf-types.md#field) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: serialization

 **Plugin**: core

 **Scripting name**: hdf5dpf_custom_read

 **Full name**: serialization.hdf5dpf_custom_read

 **Internal name**: hdf5::h5dpf::custom

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("hdf5::h5dpf::custom"); // operator instantiation
op.connect(0, my_time_scoping);
op.connect(1, my_mesh_scoping);
op.connect(3, my_streams);
op.connect(4, my_data_sources);
op.connect(24, my_meta_data);
op.connect(60, my_result_name);
ansys::dpf::FieldsContainer my_field_or_fields_container = op.getOutput<ansys::dpf::FieldsContainer>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.serialization.hdf5dpf_custom_read() # operator instantiation
op.inputs.time_scoping.connect(my_time_scoping)
op.inputs.mesh_scoping.connect(my_mesh_scoping)
op.inputs.streams.connect(my_streams)
op.inputs.data_sources.connect(my_data_sources)
op.inputs.meta_data.connect(my_meta_data)
op.inputs.result_name.connect(my_result_name)
my_field_or_fields_container_as_fields_container = op.outputs.field_or_fields_container_as_fields_container()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.serialization.hdf5dpf_custom_read() # operator instantiation
op.inputs.time_scoping.Connect(my_time_scoping)
op.inputs.mesh_scoping.Connect(my_mesh_scoping)
op.inputs.streams.Connect(my_streams)
op.inputs.data_sources.Connect(my_data_sources)
op.inputs.meta_data.Connect(my_meta_data)
op.inputs.result_name.Connect(my_result_name)
my_field_or_fields_container = op.outputs.field_or_fields_container.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.