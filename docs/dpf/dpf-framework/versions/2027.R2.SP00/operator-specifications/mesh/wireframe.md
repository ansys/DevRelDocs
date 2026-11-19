---
category: mesh
plugin: core
license: None
---

# mesh:wireframe

**Version: 0.0.0**

## Description


Extracts a wireframe mesh containing sharp edges from an input mesh.
An edge between adjacent surface facets is included when its
[dihedral angle](https://en.wikipedia.org/wiki/Dihedral_angle) is greater than the threshold in radians.
Shell-element border edges and beam-element edges are also included, regardless of the threshold.
When element_restriction is provided, it limits the surface facets considered for dihedral and shell-border
extraction. Beam elements are included regardless of this scoping.


## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [mesh](#input_0) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |
| <strong>1</strong> | [threshold](#input_1) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`double`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>2</strong> | [element_restriction](#input_2) |  |[`scoping`](../../core-concepts/dpf-types.md#scoping) |


<a id="input_0"></a>
### mesh (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region)

Input mesh from which surface, shell-border, and beam edges are extracted.

<a id="input_1"></a>
### threshold (Pin 1)

- **Required:** Yes
- **Expected type(s):** [`double`](../../core-concepts/dpf-types.md#standard-types)

Dihedral-angle threshold in radians. A surface edge is included when the angle between adjacent surface normals is greater than this value. Shell-border and beam edges are included regardless of this threshold.

<a id="input_2"></a>
### element_restriction (Pin 2)

- **Required:** No
- **Expected type(s):** [`scoping`](../../core-concepts/dpf-types.md#scoping)

Optional elemental scoping that limits surface facets used for dihedral and shell-border edge extraction. If omitted, all eligible surface facets are considered. Beam elements are included regardless of this scoping.


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [wireframe](#output_0) |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |


<a id="output_0"></a>
### wireframe (Pin 0)

- **Expected type(s):** [`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region)

New wireframe mesh containing line elements for extracted edges and only nodes used by those edges. It can be empty when no edges are selected. Node coordinates and original node identifiers are retained.


## Configurations

This operator supports [configuration options](../../core-concepts/operator-configurations.md) that modify its behavior.


### [mutex](../../core-concepts/operator-configurations.md#mutex)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: mesh

 **Plugin**: core

 **Scripting name**: wireframe

 **Full name**: mesh.wireframe

 **Internal name**: wireframe

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("wireframe"); // operator instantiation
op.connect(0, my_mesh);
op.connect(1, my_threshold);
op.connect(2, my_element_restriction);
ansys::dpf::MeshedRegion my_wireframe = op.getOutput<ansys::dpf::MeshedRegion>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.mesh.wireframe() # operator instantiation
op.inputs.mesh.connect(my_mesh)
op.inputs.threshold.connect(my_threshold)
op.inputs.element_restriction.connect(my_element_restriction)
my_wireframe = op.outputs.wireframe()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.mesh.wireframe() # operator instantiation
op.inputs.mesh.Connect(my_mesh)
op.inputs.threshold.Connect(my_threshold)
op.inputs.element_restriction.Connect(my_element_restriction)
my_wireframe = op.outputs.wireframe.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.