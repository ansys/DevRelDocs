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

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 1</strong>|  element_scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping) | If provided, only the centroids of the elements in the scoping are computed. |
| <strong>Pin 7</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) | Mesh to compute centroids |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| centroids |[`field`](../../core-concepts/dpf-types.md#field) | element centroids. |
|  **Pin 1**| measure |[`field`](../../core-concepts/dpf-types.md#field) | element measure (length, surface or volume depending on the dimension of the element). |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **run_in_parallel** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | true | Loops are allowed to run in parallel if the value of this config is set to true. |

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