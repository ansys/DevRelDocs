---
category: serialization
plugin: vtk
license: None
---

# serialization:migrate to vtk

**Version: 0.0.0**

## Description

Take an input data sources or streams and convert as much data as possible to vtk.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong>|  output_filename |[`string`](../../core-concepts/dpf-types.md#standard-types) |  |
| <strong>Pin 3</strong>|  streams_container |[`streams_container`](../../core-concepts/dpf-types.md#streams-container) |  |
| <strong>Pin 4</strong>|  data_sources |[`data_sources`](../../core-concepts/dpf-types.md#data-sources) |  |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| data_sources |[`data_sources`](../../core-concepts/dpf-types.md#data-sources) | Generated output vtk file |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: serialization

 **Plugin**: vtk

 **Scripting name**: migrate_file_to_vtk

 **Full name**: serialization.migrate_file_to_vtk

 **Internal name**: vtk::migrate_file

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("vtk::migrate_file"); // operator instantiation
op.connect(0, my_output_filename);
op.connect(3, my_streams_container);
op.connect(4, my_data_sources);
ansys::dpf::DataSources my_data_sources = op.getOutput<ansys::dpf::DataSources>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.serialization.migrate_file_to_vtk() # operator instantiation
op.inputs.output_filename.connect(my_output_filename)
op.inputs.streams_container.connect(my_streams_container)
op.inputs.data_sources.connect(my_data_sources)
my_data_sources = op.outputs.data_sources()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.serialization.migrate_file_to_vtk() # operator instantiation
op.inputs.output_filename.Connect(my_output_filename)
op.inputs.streams_container.Connect(my_streams_container)
op.inputs.data_sources.Connect(my_data_sources)
my_data_sources = op.outputs.data_sources.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.