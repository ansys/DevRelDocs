---
category: result
plugin: mapdl
license: None
---

# result:cms subfile info provider

**Version: 0.0.0**

## Description

Read required information from a subfile.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  data_sources |[`data_sources`](../../core-concepts/dpf-types.md#data-sources) | Data_sources (must contain at least one subfile). |
| <strong>Pin 200</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  cms_subfile_data |[`bool`](../../core-concepts/dpf-types.md#standard-types) | If this pin i set to true, data are return in a field. |
| <strong>Pin 300</strong>|  output_maxdof_on_masternodes |[`bool`](../../core-concepts/dpf-types.md#standard-types) | If this pin is set to true, compute and add field with max degrees of freedom on master nodes |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| int32 |[`int32`](../../core-concepts/dpf-types.md#standard-types) | returns integer values in the order : unit system used, stiffness matrix present key, damping matrix present key, mass matrix present key, number of master nodes, number of virtual nodes |
|  **Pin 1**| field |[`property_field`](../../core-concepts/dpf-types.md#property-field) | returns integer values in the order : number of load vectors (nvects), number of nodes (nnod), number of virtual nodes (nvnodes), number of modes (nvmodes) |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: result

 **Plugin**: mapdl

 **Scripting name**: cms_subfile_info_provider

 **Full name**: result.cms_subfile_info_provider

 **Internal name**: cms_subfile_info_provider

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("cms_subfile_info_provider"); // operator instantiation
op.connect(4, my_data_sources);
op.connect(200, my_cms_subfile_data);
op.connect(300, my_output_maxdof_on_masternodes);
int my_int32 = op.getOutput<int>(0);
ansys::dpf::PropertyField my_field = op.getOutput<ansys::dpf::PropertyField>(1);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.result.cms_subfile_info_provider() # operator instantiation
op.inputs.data_sources.connect(my_data_sources)
op.inputs.cms_subfile_data.connect(my_cms_subfile_data)
op.inputs.output_maxdof_on_masternodes.connect(my_output_maxdof_on_masternodes)
my_int32 = op.outputs.int32()
my_field = op.outputs.field()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.result.cms_subfile_info_provider() # operator instantiation
op.inputs.data_sources.Connect(my_data_sources)
op.inputs.cms_subfile_data.Connect(my_cms_subfile_data)
op.inputs.output_maxdof_on_masternodes.Connect(my_output_maxdof_on_masternodes)
my_int32 = op.outputs.int32.GetData()
my_field = op.outputs.field.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.