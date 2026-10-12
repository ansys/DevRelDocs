---
category: utility
plugin: core
license: None
---

# utility:transpose fields container

**Version: 0.0.0**

## Description

Transposes a fields container so that the fields' scoping becomes the container's scoping and a chosen label (default: time) becomes the fields' scoping.

Input layout (example with time label, 2 body labels, 3 nodes):
  FC labels: [time, body]
  Field 0: {time:1, body:1} -> scoping {n1, n2, n3}, data [...]
  Field 1: {time:1, body:2} -> scoping {n4, n5}, data [...]
  Field 2: {time:2, body:1} -> scoping {n1, n2, n3}, data [...]
  Field 3: {time:2, body:2} -> scoping {n4, n5}, data [...]

Output layout (transposed on time):
  FC labels: [Nodal, body]
  Field 0: {Nodal:n1, body:1} -> scoping {t1, t2}, data [gathered from fields 0,2]
  Field 1: {Nodal:n2, body:1} -> scoping {t1, t2}, data [gathered from fields 0,2]
  Field 1: {Nodal:n3, body:1} -> scoping {t1, t2}, data [gathered from fields 0,2]
  Field 2: {Nodal:n4, body:2} -> scoping {t1, t2}, data [gathered from fields 1,3]
  Field 3: {Nodal:n5, body:2} -> scoping {t1, t2}, data [gathered from fields 1,3]
  ...

Each output field gathers one entity's data across all values of the transposed label from the input fields that share the same non-transposed labels. All input fields sharing a labelspace where only the transposed label changes must have the same scoping and location.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [fields_container](#input_0) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
| <strong>1</strong> | [label](#input_1) |  |[`string`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_0"></a>
### fields_container (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

It is assumed that the fields container consists of fields having the same scoping.

<a id="input_1"></a>
### label (Pin 1)

- **Required:** No
- **Expected type(s):** [`string`](../../core-concepts/dpf-types.md#standard-types)

fields container label to use as fields label (default is time)


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [fields_container](#output_0) |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |


<a id="output_0"></a>
### fields_container (Pin 0)

- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)




## Configurations

This operator supports [configuration options](../../core-concepts/operator-configurations.md) that modify its behavior.


### [mutex](../../core-concepts/operator-configurations.md#mutex)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: utility

 **Plugin**: core

 **Scripting name**: None

 **Full name**: None

 **Internal name**: transpose_fields_container

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("transpose_fields_container"); // operator instantiation
op.connect(0, my_fields_container);
op.connect(1, my_label);
ansys::dpf::FieldsContainer my_fields_container = op.getOutput<ansys::dpf::FieldsContainer>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.utility.None() # operator instantiation
op.inputs.fields_container.connect(my_fields_container)
op.inputs.label.connect(my_label)
my_fields_container = op.outputs.fields_container()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.utility.None() # operator instantiation
op.inputs.fields_container.Connect(my_fields_container)
op.inputs.label.Connect(my_label)
my_fields_container = op.outputs.fields_container.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.