---
category: scoping
plugin: core
license: None
---

# scoping:rescope (fields container)

**Version: 0.0.0**

## Description

Rescopes a field on the given scoping. If an ID does not exist in the original field, the default value (in 2) is used when defined.

## Inputs

| Pin number | Name | Expected type(s) |
|-------|-------|------------------|
| <strong>0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [fields_container](#input_0) |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
| <strong>1</strong>|  [mesh_scoping](#input_1) |[`scoping`](../../core-concepts/dpf-types.md#scoping), [`vector<int32>`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>2</strong>|  [default_value](#input_2) |[`double`](../../core-concepts/dpf-types.md#standard-types), [`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_0"></a>
### fields_container (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)



<a id="input_1"></a>
### mesh_scoping (Pin 1)

- **Required:** No
- **Expected type(s):** [`scoping`](../../core-concepts/dpf-types.md#scoping), [`vector<int32>`](../../core-concepts/dpf-types.md#standard-types)



<a id="input_2"></a>
### default_value (Pin 2)

- **Required:** No
- **Expected type(s):** [`double`](../../core-concepts/dpf-types.md#standard-types), [`vector<double>`](../../core-concepts/dpf-types.md#standard-types)

If pin 2 is used, the IDs not found in the field are added with this default value.


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

### num_threads

- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** 0

Number of threads to use to run in parallel

### run_in_parallel

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** true

Loops are allowed to run in parallel if the value of this config is set to true.



## Scripting

 **Category**: scoping

 **Plugin**: core

 **Scripting name**: rescope_fc

 **Full name**: scoping.rescope_fc

 **Internal name**: Rescope_fc

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("Rescope_fc"); // operator instantiation
op.connect(0, my_fields_container);
op.connect(1, my_mesh_scoping);
op.connect(2, my_default_value);
ansys::dpf::FieldsContainer my_fields_container = op.getOutput<ansys::dpf::FieldsContainer>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.scoping.rescope_fc() # operator instantiation
op.inputs.fields_container.connect(my_fields_container)
op.inputs.mesh_scoping.connect(my_mesh_scoping)
op.inputs.default_value.connect(my_default_value)
my_fields_container = op.outputs.fields_container()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.scoping.rescope_fc() # operator instantiation
op.inputs.fields_container.Connect(my_fields_container)
op.inputs.mesh_scoping.Connect(my_mesh_scoping)
op.inputs.default_value.Connect(my_default_value)
my_fields_container = op.outputs.fields_container.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.