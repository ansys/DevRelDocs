---
category: result
plugin: mapdl
license: None
---

# result:rigid transformation provider

**Version: 0.0.0**

## Description

Extracts rigid body transformation from dsub file.

## Inputs

| Pin number | Name | Expected type(s) |
|-------|-------|------------------|
| <strong>3</strong>|  [streams](#input_3) |`stream` |
| <strong>4</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [data_sources](#input_4) |[`data_sources`](../../core-concepts/dpf-types.md#data-sources) |


<a id="input_3"></a>
### streams (Pin 3)

- **Required:** No
- **Expected type(s):** `stream`

streams (result file container) (optional)

<a id="input_4"></a>
### data_sources (Pin 4)

- **Required:** Yes
- **Expected type(s):** [`data_sources`](../../core-concepts/dpf-types.md#data-sources)

data source of dsub file.


## Outputs

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [fields_container](#output_0) |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |


<a id="output_0"></a>
### fields_container (Pin 0)

- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)




## Configurations


### mutex

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

 **Category**: result

 **Plugin**: mapdl

 **Scripting name**: rigid_transformation_provider

 **Full name**: result.rigid_transformation_provider

 **Internal name**: mapdl::dsub::rigid_transformation_provider

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("mapdl::dsub::rigid_transformation_provider"); // operator instantiation
op.connect(3, my_streams);
op.connect(4, my_data_sources);
ansys::dpf::FieldsContainer my_fields_container = op.getOutput<ansys::dpf::FieldsContainer>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.result.rigid_transformation_provider() # operator instantiation
op.inputs.streams.connect(my_streams)
op.inputs.data_sources.connect(my_data_sources)
my_fields_container = op.outputs.fields_container()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.result.rigid_transformation_provider() # operator instantiation
op.inputs.streams.Connect(my_streams)
op.inputs.data_sources.Connect(my_data_sources)
my_fields_container = op.outputs.fields_container.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.