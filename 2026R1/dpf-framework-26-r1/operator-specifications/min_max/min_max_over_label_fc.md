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

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  label |[`string`](../../core-concepts/dpf-types.md#standard-types) | label name from the fields container |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| field_min |[`field`](../../core-concepts/dpf-types.md#field) |  |
|  **Pin 1**| field_max |[`field`](../../core-concepts/dpf-types.md#field) |  |
|  **Pin 2**| domain_ids_min |[`scoping`](../../core-concepts/dpf-types.md#scoping) |  |
|  **Pin 3**| domain_ids_max |[`scoping`](../../core-concepts/dpf-types.md#scoping) |  |
|  **Pin 4**| scoping_ids_min |[`scoping`](../../core-concepts/dpf-types.md#scoping) |  |
|  **Pin 5**| scoping_ids_max |[`scoping`](../../core-concepts/dpf-types.md#scoping) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

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