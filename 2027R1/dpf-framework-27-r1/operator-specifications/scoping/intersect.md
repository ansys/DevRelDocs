---
category: scoping
plugin: core
license: None
---

# scoping:intersect scopings

**Version: 0.0.0**

## Description

Intersect 2 scopings and return the intersection and the difference between the intersection and the first scoping.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [scopingA](#input_0) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`scoping`](../../core-concepts/dpf-types.md#scoping) |
| <strong>1</strong> | [scopingB](#input_1) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`scoping`](../../core-concepts/dpf-types.md#scoping) |


<a id="input_0"></a>
### scopingA (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`scoping`](../../core-concepts/dpf-types.md#scoping)



<a id="input_1"></a>
### scopingB (Pin 1)

- **Required:** Yes
- **Expected type(s):** [`scoping`](../../core-concepts/dpf-types.md#scoping)




## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [intersection](#output_0) |[`scoping`](../../core-concepts/dpf-types.md#scoping) |
|  **1**| [scopingA_min_intersection](#output_1) |[`scoping`](../../core-concepts/dpf-types.md#scoping) |


<a id="output_0"></a>
### intersection (Pin 0)

- **Expected type(s):** [`scoping`](../../core-concepts/dpf-types.md#scoping)



<a id="output_1"></a>
### scopingA_min_intersection (Pin 1)

- **Expected type(s):** [`scoping`](../../core-concepts/dpf-types.md#scoping)




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
ansys::dpf::Scoping my_intersection = op.getOutput<ansys::dpf::Scoping>(0);
ansys::dpf::Scoping my_scopingA_min_intersection = op.getOutput<ansys::dpf::Scoping>(1);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.scoping.intersect() # operator instantiation
op.inputs.scopingA.connect(my_scopingA)
op.inputs.scopingB.connect(my_scopingB)
my_intersection = op.outputs.intersection()
my_scopingA_min_intersection = op.outputs.scopingA_min_intersection()
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
my_intersection = op.outputs.intersection.GetData()
my_scopingA_min_intersection = op.outputs.scopingA_min_intersection.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.