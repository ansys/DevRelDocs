---
category: result
plugin: mapdl
license: None
---

# result:prns to field

**Version: 0.0.0**

## Description

Read the presol of nodal field generated file from mapdl.

## Inputs

| Pin number | Name | Expected type(s) |
|-------|-------|------------------|
| <strong>0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [filepath](#input_0) |[`string`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>1</strong>|  [columns_to_read](#input_1) |[`int32`](../../core-concepts/dpf-types.md#standard-types), [`vector<int32>`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_0"></a>
### filepath (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`string`](../../core-concepts/dpf-types.md#standard-types)

filepath

<a id="input_1"></a>
### columns_to_read (Pin 1)

- **Required:** No
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types), [`vector<int32>`](../../core-concepts/dpf-types.md#standard-types)

columns_to_read


## Outputs

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [field](#output_0) |[`field`](../../core-concepts/dpf-types.md#field) |


<a id="output_0"></a>
### field (Pin 0)

- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)




## Configurations


### mutex

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

 **Category**: result

 **Plugin**: mapdl

 **Scripting name**: mapdl.prns_to_field

 **Full name**: result.mapdl.prns_to_field

 **Internal name**: PRNS_Reader

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("PRNS_Reader"); // operator instantiation
op.connect(0, my_filepath);
op.connect(1, my_columns_to_read);
ansys::dpf::Field my_field = op.getOutput<ansys::dpf::Field>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.result.mapdl.prns_to_field() # operator instantiation
op.inputs.filepath.connect(my_filepath)
op.inputs.columns_to_read.connect(my_columns_to_read)
my_field = op.outputs.field()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.result.mapdl.prns_to_field() # operator instantiation
op.inputs.filepath.Connect(my_filepath)
op.inputs.columns_to_read.Connect(my_columns_to_read)
my_field = op.outputs.field.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.