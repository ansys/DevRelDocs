---
category: min_max
plugin: core
license: any_dpf_supported_increments
---

# min_max:incremental over field

**Version: 0.0.0**

## Description


Incremental variant that computes, for each component, the minimum and the maximum of successive input fields across all calls of the operator.

At each call, the per-component minimum and maximum are updated by comparing the current input field with the previously-cached extrema.

When the optional `domain_id` pin is connected, outputs 2 and 3 return, for each component, the domain id of the call that produced the minimum and maximum, respectively.

**When to use:** successive fields arrive one at a time (typically streamed from a solver) and the full history does not fit in memory.
Example: running envelope of nodal stress updated at each iteration of a transient run.
Use `min_max` for the non-incremental variant, or `min_max_fc_inc` when input arrives one fields container at a time.


## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [field](#input_0) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`field`](../../core-concepts/dpf-types.md#field) |
| <strong>17</strong> | [domain_id](#input_17) |  |[`int32`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_0"></a>
### field (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)

Input field for the current increment. Combined with the previously-cached extrema.

<a id="input_17"></a>
### domain_id (Pin 17)

- **Required:** No
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)

Optional identifier for the current call. When set, outputs 2 and 3 track the domain id that produced each per-component minimum and maximum.


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [field_min](#output_0) |[`field`](../../core-concepts/dpf-types.md#field) |
|  **1**| [field_max](#output_1) |[`field`](../../core-concepts/dpf-types.md#field) |
|  **2**| [domain_ids_min](#output_2) |[`scoping`](../../core-concepts/dpf-types.md#scoping) |
|  **3**| [domain_ids_max](#output_3) |[`scoping`](../../core-concepts/dpf-types.md#scoping) |


<a id="output_0"></a>
### field_min (Pin 0)

- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)

Per-component minimum aggregated across all calls of the operator so far.

<a id="output_1"></a>
### field_max (Pin 1)

- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)

Per-component maximum aggregated across all calls of the operator so far.

<a id="output_2"></a>
### domain_ids_min (Pin 2)

- **Expected type(s):** [`scoping`](../../core-concepts/dpf-types.md#scoping)

For each component of the output minimum, the id of the call (as passed on the `domain_id` input pin) that produced the current minimum. Populated only when the `domain_id` input pin is connected.

<a id="output_3"></a>
### domain_ids_max (Pin 3)

- **Expected type(s):** [`scoping`](../../core-concepts/dpf-types.md#scoping)

For each component of the output maximum, the id of the call (as passed on the `domain_id` input pin) that produced the current maximum. Populated only when the `domain_id` input pin is connected.


## Configurations

This operator supports [configuration options](../../core-concepts/operator-configurations.md) that modify its behavior.


### [mutex](../../core-concepts/operator-configurations.md#mutex)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: min_max

 **Plugin**: core

 **Scripting name**: min_max_inc

 **Full name**: min_max.min_max_inc

 **Internal name**: min_max_inc

 **License**: any_dpf_supported_increments

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("min_max_inc"); // operator instantiation
op.connect(0, my_field);
op.connect(17, my_domain_id);
ansys::dpf::Field my_field_min = op.getOutput<ansys::dpf::Field>(0);
ansys::dpf::Field my_field_max = op.getOutput<ansys::dpf::Field>(1);
ansys::dpf::Scoping my_domain_ids_min = op.getOutput<ansys::dpf::Scoping>(2);
ansys::dpf::Scoping my_domain_ids_max = op.getOutput<ansys::dpf::Scoping>(3);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.min_max.min_max_inc() # operator instantiation
op.inputs.field.connect(my_field)
op.inputs.domain_id.connect(my_domain_id)
my_field_min = op.outputs.field_min()
my_field_max = op.outputs.field_max()
my_domain_ids_min = op.outputs.domain_ids_min()
my_domain_ids_max = op.outputs.domain_ids_max()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.min_max.min_max_inc() # operator instantiation
op.inputs.field.Connect(my_field)
op.inputs.domain_id.Connect(my_domain_id)
my_field_min = op.outputs.field_min.GetData()
my_field_max = op.outputs.field_max.GetData()
my_domain_ids_min = op.outputs.domain_ids_min.GetData()
my_domain_ids_max = op.outputs.domain_ids_max.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.