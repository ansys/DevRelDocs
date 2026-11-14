---
category: scoping
plugin: core
license: None
---

# scoping:intersect scopings

**Version: 0.0.0**

## Description

Intersect 2 scopings and return the intersection and the difference between the intersection and the first scoping. If scopingB is a scopings container, each scoping of scopingA (a scoping or a scopings container) is intersected with each scoping of scopingB, and only the intersection can be computed.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [scopingA](#input_0) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`scoping`](../../core-concepts/dpf-types.md#scoping), [`scopings_container`](../../core-concepts/dpf-types.md#scopings-container) |
| <strong>1</strong> | [scopingB](#input_1) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`scoping`](../../core-concepts/dpf-types.md#scoping), [`scopings_container`](../../core-concepts/dpf-types.md#scopings-container) |
| <strong>2</strong> | [output_selection](#input_2) |  |[`int32`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_0"></a>
### scopingA (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`scoping`](../../core-concepts/dpf-types.md#scoping), [`scopings_container`](../../core-concepts/dpf-types.md#scopings-container)

A scopings container is only supported when scopingB is a scopings container.

<a id="input_1"></a>
### scopingB (Pin 1)

- **Required:** Yes
- **Expected type(s):** [`scoping`](../../core-concepts/dpf-types.md#scoping), [`scopings_container`](../../core-concepts/dpf-types.md#scopings-container)

A scopings container is supported only when output_selection is 1 (intersection only).

<a id="input_2"></a>
### output_selection (Pin 2)

- **Required:** No
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)

Selects the outputs to compute: 0 for both the intersection and the difference, 1 for the intersection only, 2 for the difference only. Outputs that are not computed are returned as empty scopings. Default is 0. Must be 1 if scopingB is a scopings container.


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [intersection](#output_0) |[`scoping`](../../core-concepts/dpf-types.md#scoping), [`scopings_container`](../../core-concepts/dpf-types.md#scopings-container) |
|  **1**| [scopingA_min_intersection](#output_1) |[`scoping`](../../core-concepts/dpf-types.md#scoping) |
|  **2**| [scopingB_indices_without_intersection](#output_2) |[`scoping`](../../core-concepts/dpf-types.md#scoping) |


<a id="output_0"></a>
### intersection (Pin 0)

- **Expected type(s):** [`scoping`](../../core-concepts/dpf-types.md#scoping), [`scopings_container`](../../core-concepts/dpf-types.md#scopings-container)

If scopingB is a scopings container: scopings container with one scoping per non-empty intersection, ordered as scopingA then scopingB, whose label space is the one of the scopingB scoping completed with the one of the scopingA scoping (the labels of scopingA and scopingB must be different).

<a id="output_1"></a>
### scopingA_min_intersection (Pin 1)

- **Expected type(s):** [`scoping`](../../core-concepts/dpf-types.md#scoping)

Empty scoping if scopingB is a scopings container.

<a id="output_2"></a>
### scopingB_indices_without_intersection (Pin 2)

- **Expected type(s):** [`scoping`](../../core-concepts/dpf-types.md#scoping)

Only if scopingB is a scopings container: indices (starting at 0) of the scopings of scopingB intersecting no scoping of scopingA.


## Configurations

This operator supports [configuration options](../../core-concepts/operator-configurations.md) that modify its behavior.


### [mutex](../../core-concepts/operator-configurations.md#mutex)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: scoping

 **Plugin**: core

 **Scripting name**: intersect

 **Full name**: scoping.intersect

 **Internal name**: scoping::intersect

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("scoping::intersect"); // operator instantiation
op.connect(0, my_scopingA);
op.connect(1, my_scopingB);
op.connect(2, my_output_selection);
ansys::dpf::Scoping my_intersection = op.getOutput<ansys::dpf::Scoping>(0);
ansys::dpf::Scoping my_scopingA_min_intersection = op.getOutput<ansys::dpf::Scoping>(1);
ansys::dpf::Scoping my_scopingB_indices_without_intersection = op.getOutput<ansys::dpf::Scoping>(2);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.scoping.intersect() # operator instantiation
op.inputs.scopingA.connect(my_scopingA)
op.inputs.scopingB.connect(my_scopingB)
op.inputs.output_selection.connect(my_output_selection)
my_intersection_as_scoping = op.outputs.intersection_as_scoping()
my_scopingA_min_intersection = op.outputs.scopingA_min_intersection()
my_scopingB_indices_without_intersection = op.outputs.scopingB_indices_without_intersection()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.scoping.intersect() # operator instantiation
op.inputs.scopingA.Connect(my_scopingA)
op.inputs.scopingB.Connect(my_scopingB)
op.inputs.output_selection.Connect(my_output_selection)
my_intersection = op.outputs.intersection.GetData()
my_scopingA_min_intersection = op.outputs.scopingA_min_intersection.GetData()
my_scopingB_indices_without_intersection = op.outputs.scopingB_indices_without_intersection.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.