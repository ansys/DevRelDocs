---
category: logic
plugin: core
license: None
---

# logic:same anys?

**Version: 0.0.0**

## Description

Takes two Any objects and compares them.Supported types: Field, FieldsContainer, Mesh, MeshesContainer, PropertyField, PropertyFieldsContainer, Scoping, ScopingsContainer, StringField, standard types (double, int, string, vector of int, doubles, string). Note: all inputs related to fields, mesh, and so on are passed to each property check.

## Inputs

| Pin number | Name | Expected type(s) |
|-------|-------|------------------|
| <strong>0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [anyA](#input_0) |[`any`](../../core-concepts/dpf-types.md#any) |
| <strong>1</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [anyB](#input_1) |[`any`](../../core-concepts/dpf-types.md#any) |
| <strong>2</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [double_value](#input_2) |[`double`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>3</strong>|  [double_tolerance](#input_3) |[`double`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>4</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [compare_auxiliary](#input_4) |[`bool`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_0"></a>
### anyA (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`any`](../../core-concepts/dpf-types.md#any)



<a id="input_1"></a>
### anyB (Pin 1)

- **Required:** Yes
- **Expected type(s):** [`any`](../../core-concepts/dpf-types.md#any)



<a id="input_2"></a>
### double_value (Pin 2)

- **Required:** Yes
- **Expected type(s):** [`double`](../../core-concepts/dpf-types.md#standard-types)

Double positive small value. Smallest value considered during the comparison step. All the absolute values in the field less than this value are considered null, (default value: 1.0e-14).

<a id="input_3"></a>
### double_tolerance (Pin 3)

- **Required:** No
- **Expected type(s):** [`double`](../../core-concepts/dpf-types.md#standard-types)

Double relative tolerance. Maximum tolerance gap between two compared values. Values within relative tolerance are considered identical. Formula is (v1-v2)/v2 < relativeTol. Default is 0.001.

<a id="input_4"></a>
### compare_auxiliary (Pin 4)

- **Required:** Yes
- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)

For meshes and meshescontainer: compare auxiliary data (i.e property fields, scopings...). Default value is 'false'.


## Outputs

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [included](#output_0) |[`bool`](../../core-concepts/dpf-types.md#standard-types) |
|  **1**| [message](#output_1) |[`string`](../../core-concepts/dpf-types.md#standard-types) |


<a id="output_0"></a>
### included (Pin 0)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)

bool (true if belongs...)

<a id="output_1"></a>
### message (Pin 1)

- **Expected type(s):** [`string`](../../core-concepts/dpf-types.md#standard-types)




## Configurations


### mutex

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

 **Category**: logic

 **Plugin**: core

 **Scripting name**: identical_anys

 **Full name**: logic.identical_anys

 **Internal name**: compare::any

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("compare::any"); // operator instantiation
op.connect(0, my_anyA);
op.connect(1, my_anyB);
op.connect(2, my_double_value);
op.connect(3, my_double_tolerance);
op.connect(4, my_compare_auxiliary);
bool my_included = op.getOutput<bool>(0);
std::string my_message = op.getOutput<std::string>(1);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.logic.identical_anys() # operator instantiation
op.inputs.anyA.connect(my_anyA)
op.inputs.anyB.connect(my_anyB)
op.inputs.double_value.connect(my_double_value)
op.inputs.double_tolerance.connect(my_double_tolerance)
op.inputs.compare_auxiliary.connect(my_compare_auxiliary)
my_included = op.outputs.included()
my_message = op.outputs.message()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.logic.identical_anys() # operator instantiation
op.inputs.anyA.Connect(my_anyA)
op.inputs.anyB.Connect(my_anyB)
op.inputs.double_value.Connect(my_double_value)
op.inputs.double_tolerance.Connect(my_double_tolerance)
op.inputs.compare_auxiliary.Connect(my_compare_auxiliary)
my_included = op.outputs.included.GetData()
my_message = op.outputs.message.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.