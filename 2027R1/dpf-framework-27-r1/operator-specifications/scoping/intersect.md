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

| Pin number | Name | Expected type(s) |
|-------|-------|------------------|
| <strong>0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [scopingA](#input_0) |[`scoping`](../../core-concepts/dpf-types.md#scoping) |
| <strong>1</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [scopingB](#input_1) |[`scoping`](../../core-concepts/dpf-types.md#scoping) |


<a id="input_0"></a>
### scopingA (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`scoping`](../../core-concepts/dpf-types.md#scoping)



<a id="input_1"></a>
### scopingB (Pin 1)

- **Required:** Yes
- **Expected type(s):** [`scoping`](../../core-concepts/dpf-types.md#scoping)




## Outputs

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


### mutex

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

 **Category**: scoping

 **Plugin**: core

 **Scripting name**: intersect

 **Full name**: scoping.intersect

 **Internal name**: scoping::intersect

 **License**: None

## Examples

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