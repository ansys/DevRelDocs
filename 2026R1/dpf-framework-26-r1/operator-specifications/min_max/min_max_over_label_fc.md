---
category: min_max
plugin: core
license: None
---

# min_max:over label

**Version: 0.0.0**

## Description

Create two fields (0 min 1 max) by looping over the fields container in input and taking the min/max value by component through all the fields having the same id for the label set in input (in pin 1). If no label is specified or if the specified label doesn't exist, the operation is done over all the fields. The fields out are located on the label set in input, so their scoping are the labels ids.For each min max value, the label id for one other fields container labels is kept and returned in a scoping in pin 2 (min) and 3 (max).The field's scoping ids of the value kept in min max are also returned in the scopings in pin 4 (min) and 5 (max).

## Inputs

| Pin number | Name | Expected type(s) |
|-------|-------|------------------|
| <strong>0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [fields_container](#input_0) |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
| <strong>1</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [label](#input_1) |[`string`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_0"></a>
### fields_container (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)



<a id="input_1"></a>
### label (Pin 1)

- **Required:** Yes
- **Expected type(s):** [`string`](../../core-concepts/dpf-types.md#standard-types)

label name from the fields container


## Outputs

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [field_min](#output_0) |[`field`](../../core-concepts/dpf-types.md#field) |
|  **1**| [field_max](#output_1) |[`field`](../../core-concepts/dpf-types.md#field) |
|  **2**| [domain_ids_min](#output_2) |[`scoping`](../../core-concepts/dpf-types.md#scoping) |
|  **3**| [domain_ids_max](#output_3) |[`scoping`](../../core-concepts/dpf-types.md#scoping) |
|  **4**| [scoping_ids_min](#output_4) |[`scoping`](../../core-concepts/dpf-types.md#scoping) |
|  **5**| [scoping_ids_max](#output_5) |[`scoping`](../../core-concepts/dpf-types.md#scoping) |


<a id="output_0"></a>
### field_min (Pin 0)

- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)



<a id="output_1"></a>
### field_max (Pin 1)

- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)



<a id="output_2"></a>
### domain_ids_min (Pin 2)

- **Expected type(s):** [`scoping`](../../core-concepts/dpf-types.md#scoping)



<a id="output_3"></a>
### domain_ids_max (Pin 3)

- **Expected type(s):** [`scoping`](../../core-concepts/dpf-types.md#scoping)



<a id="output_4"></a>
### scoping_ids_min (Pin 4)

- **Expected type(s):** [`scoping`](../../core-concepts/dpf-types.md#scoping)



<a id="output_5"></a>
### scoping_ids_max (Pin 5)

- **Expected type(s):** [`scoping`](../../core-concepts/dpf-types.md#scoping)




## Configurations


### mutex

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

 **Category**: min_max

 **Plugin**: core

 **Scripting name**: None

 **Full name**: None

 **Internal name**: min_max_over_label_fc

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("min_max_over_label_fc"); // operator instantiation
op.connect(0, my_fields_container);
op.connect(1, my_label);
ansys::dpf::Field my_field_min = op.getOutput<ansys::dpf::Field>(0);
ansys::dpf::Field my_field_max = op.getOutput<ansys::dpf::Field>(1);
ansys::dpf::Scoping my_domain_ids_min = op.getOutput<ansys::dpf::Scoping>(2);
ansys::dpf::Scoping my_domain_ids_max = op.getOutput<ansys::dpf::Scoping>(3);
ansys::dpf::Scoping my_scoping_ids_min = op.getOutput<ansys::dpf::Scoping>(4);
ansys::dpf::Scoping my_scoping_ids_max = op.getOutput<ansys::dpf::Scoping>(5);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.min_max.None() # operator instantiation
op.inputs.fields_container.connect(my_fields_container)
op.inputs.label.connect(my_label)
my_field_min = op.outputs.field_min()
my_field_max = op.outputs.field_max()
my_domain_ids_min = op.outputs.domain_ids_min()
my_domain_ids_max = op.outputs.domain_ids_max()
my_scoping_ids_min = op.outputs.scoping_ids_min()
my_scoping_ids_max = op.outputs.scoping_ids_max()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.min_max.None() # operator instantiation
op.inputs.fields_container.Connect(my_fields_container)
op.inputs.label.Connect(my_label)
my_field_min = op.outputs.field_min.GetData()
my_field_max = op.outputs.field_max.GetData()
my_domain_ids_min = op.outputs.domain_ids_min.GetData()
my_domain_ids_max = op.outputs.domain_ids_max.GetData()
my_scoping_ids_min = op.outputs.scoping_ids_min.GetData()
my_scoping_ids_max = op.outputs.scoping_ids_max.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.