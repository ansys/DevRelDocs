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

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>1</strong> | [element_scoping](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/scoping/compute_element_centroids) |  |[`scoping`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |
| <strong>7</strong> | [mesh](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/scoping/compute_element_centroids) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`abstract_meshed_region`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |


<a id="input_1"></a>
### element_scoping (Pin 1)

- **Required:** No
- **Expected type(s):** [`scoping`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)

If provided, only the centroids of the elements in the scoping are computed.

<a id="input_7"></a>
### mesh (Pin 7)

- **Required:** Yes
- **Expected type(s):** [`abstract_meshed_region`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)

Mesh to compute centroids


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [centroids](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/scoping/compute_element_centroids) |[`field`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |
|  **1**| [measure](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/scoping/compute_element_centroids) |[`field`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |


<a id="output_0"></a>
### centroids (Pin 0)

- **Expected type(s):** [`field`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)

element centroids.

<a id="output_1"></a>
### measure (Pin 1)

- **Expected type(s):** [`field`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)

element measure (length, surface or volume depending on the dimension of the element).


## Configurations

This operator supports [configuration options](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/operator-configurations) that modify its behavior.


### [mutex](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/operator-configurations)

- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

### [run_in_parallel](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/operator-configurations)

- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)
- **Default value:** true

Loops are allowed to run in parallel if the value of this config is set to true.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: scoping

 **Plugin**: core

 **Scripting name**: compute_element_centroids

 **Full name**: scoping.compute_element_centroids

 **Internal name**: compute_element_centroids

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

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
<br />

## Changelog

- Version 0.0.0: Initial release.