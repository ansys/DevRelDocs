---
category: metadata
plugin: core
license: None
---

# metadata:material support provider

**Version: 0.0.0**

## Description

Reads the material support.

## Supported file types

This operator supports the following keys ([file formats](../../index.md#overview-of-dpf)) for each listed namespace (plugin/solver):

- mapdl: rst, rstp 

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 3</strong>|  streams_container |[`streams_container`](../../core-concepts/dpf-types.md#streams-container) | Streams result file container (optional). |
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  data_sources |[`data_sources`](../../core-concepts/dpf-types.md#data-sources) | if the stream is null, get the file path from the data sources. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| abstract_field_support |`abstract_field_support` |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **num_threads** |[`int32`](../../core-concepts/dpf-types.md#standard-types) | 0 | Number of threads to use to run in parallel |
| **run_in_parallel** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | true | Loops are allowed to run in parallel if the value of this config is set to true. |

## Scripting

 **Category**: metadata

 **Plugin**: core

 **Scripting name**: material_support_provider

 **Full name**: metadata.material_support_provider

 **Internal name**: mat_support_provider

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("mat_support_provider"); // operator instantiation
op.connect(3, my_streams_container);
op.connect(4, my_data_sources);
ansys::dpf::AbstractFieldSupport my_abstract_field_support = op.getOutput<ansys::dpf::AbstractFieldSupport>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.metadata.material_support_provider() # operator instantiation
op.inputs.streams_container.connect(my_streams_container)
op.inputs.data_sources.connect(my_data_sources)
my_abstract_field_support = op.outputs.abstract_field_support()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.metadata.material_support_provider() # operator instantiation
op.inputs.streams_container.Connect(my_streams_container)
op.inputs.data_sources.Connect(my_data_sources)
my_abstract_field_support = op.outputs.abstract_field_support.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.