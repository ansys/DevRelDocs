---
category: mesh
plugin: core
license: any_dpf_supported_increments
---

# mesh:change cs (meshes)

**Version: 0.0.0**

## Description

Applies a transformation (rotation and displacement) matrix on a mesh or meshes container.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [meshes](#input_0) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`meshed_region`](../../core-concepts/dpf-types.md#meshed-region), [`meshes_container`](../../core-concepts/dpf-types.md#meshes-container) |
| <strong>1</strong> | [coordinate_system](#input_1) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`field`](../../core-concepts/dpf-types.md#field) |


<a id="input_0"></a>
### meshes (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`meshed_region`](../../core-concepts/dpf-types.md#meshed-region), [`meshes_container`](../../core-concepts/dpf-types.md#meshes-container)



<a id="input_1"></a>
### coordinate_system (Pin 1)

- **Required:** Yes
- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)

3-3 rotation matrix + 3 translations (X, Y, Z)


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [meshed_region](#output_0) |[`meshed_region`](../../core-concepts/dpf-types.md#meshed-region), [`meshes_container`](../../core-concepts/dpf-types.md#meshes-container) |


<a id="output_0"></a>
### meshed_region (Pin 0)

- **Expected type(s):** [`meshed_region`](../../core-concepts/dpf-types.md#meshed-region), [`meshes_container`](../../core-concepts/dpf-types.md#meshes-container)




## Configurations

This operator supports [configuration options](../../core-concepts/operator-configurations.md) that modify its behavior.


### [mutex](../../core-concepts/operator-configurations.md#mutex)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

### [num_threads](../../core-concepts/operator-configurations.md#num_threads)

- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** 0

Number of threads to use to run in parallel

### [run_in_parallel](../../core-concepts/operator-configurations.md#run_in_parallel)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** true

Loops are allowed to run in parallel if the value of this config is set to true.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: mesh

 **Plugin**: core

 **Scripting name**: change_cs

 **Full name**: mesh.change_cs

 **Internal name**: mesh::change_cs

 **License**: any_dpf_supported_increments

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("mesh::change_cs"); // operator instantiation
op.connect(0, my_meshes);
op.connect(1, my_coordinate_system);
ansys::dpf::MeshedRegion my_meshed_region = op.getOutput<ansys::dpf::MeshedRegion>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.mesh.change_cs() # operator instantiation
op.inputs.meshes.connect(my_meshes)
op.inputs.coordinate_system.connect(my_coordinate_system)
my_meshed_region_as_meshed_region = op.outputs.meshed_region_as_meshed_region()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.mesh.change_cs() # operator instantiation
op.inputs.meshes.Connect(my_meshes)
op.inputs.coordinate_system.Connect(my_coordinate_system)
my_meshed_region = op.outputs.meshed_region.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.