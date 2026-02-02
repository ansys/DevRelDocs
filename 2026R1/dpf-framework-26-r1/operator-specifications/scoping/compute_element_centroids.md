---
category: scoping
plugin: core
license: None
---

# scoping:compute element centroids

**Version: 0.0.0**

## Description

Computes the element centroids of the mesh. It also outputs the element measure.

## Inputs

| Pin number | Name | Expected type(s) |
|-------|-------|------------------|
| <strong>1</strong>|  [element_scoping](#input_1) |[`scoping`](../../core-concepts/dpf-types.md#scoping) |
| <strong>7</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [mesh](#input_7) |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |


<a id="input_1"></a>
### element_scoping (Pin 1)

- **Required:** No
- **Expected type(s):** [`scoping`](../../core-concepts/dpf-types.md#scoping)

If provided, only the centroids of the elements in the scoping are computed.

<a id="input_7"></a>
### mesh (Pin 7)

- **Required:** Yes
- **Expected type(s):** [`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region)

Mesh to compute centroids


## Outputs

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [centroids](#output_0) |[`field`](../../core-concepts/dpf-types.md#field) |
|  **1**| [measure](#output_1) |[`field`](../../core-concepts/dpf-types.md#field) |


<a id="output_0"></a>
### centroids (Pin 0)

- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)

element centroids.

<a id="output_1"></a>
### measure (Pin 1)

- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)

element measure (length, surface or volume depending on the dimension of the element).


## Configurations


### mutex

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

### run_in_parallel

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** true

Loops are allowed to run in parallel if the value of this config is set to true.



## Scripting

 **Category**: scoping

 **Plugin**: core

 **Scripting name**: compute_element_centroids

 **Full name**: scoping.compute_element_centroids

 **Internal name**: compute_element_centroids

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("compute_element_centroids"); // operator instantiation
op.connect(1, my_element_scoping);
op.connect(7, my_mesh);
ansys::dpf::Field my_centroids = op.getOutput<ansys::dpf::Field>(0);
ansys::dpf::Field my_measure = op.getOutput<ansys::dpf::Field>(1);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.scoping.compute_element_centroids() # operator instantiation
op.inputs.element_scoping.connect(my_element_scoping)
op.inputs.mesh.connect(my_mesh)
my_centroids = op.outputs.centroids()
my_measure = op.outputs.measure()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.scoping.compute_element_centroids() # operator instantiation
op.inputs.element_scoping.Connect(my_element_scoping)
op.inputs.mesh.Connect(my_mesh)
my_centroids = op.outputs.centroids.GetData()
my_measure = op.outputs.measure.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.