---
category: scoping
plugin: core
license: None
---

# scoping:split on property type

**Version: 0.0.0**

## Description

Splits a given scoping or the mesh scoping (nodal or elemental) on given properties (elshape and/or material, since 2025R1 it supports any scalar property field name contained in the mesh property fields) and returns a scopings container with those split scopings.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>1</strong> | [mesh_scoping](#input_1) |  |[`scoping`](../../core-concepts/dpf-types.md#scoping) |
| <strong>7</strong> | [mesh](#input_7) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |
| <strong>9</strong> | [requested_location](#input_9) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`string`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>12</strong> | [skin_case](#input_12) |  |[`int32`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>13</strong> | [label](#input_13) |  |[`string`](../../core-concepts/dpf-types.md#standard-types), [`vector<string>`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_1"></a>
### mesh_scoping (Pin 1)

- **Required:** No
- **Expected type(s):** [`scoping`](../../core-concepts/dpf-types.md#scoping)

Scoping

<a id="input_7"></a>
### mesh (Pin 7)

- **Required:** Yes
- **Expected type(s):** [`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region)

mesh region

<a id="input_9"></a>
### requested_location (Pin 9)

- **Required:** Yes
- **Expected type(s):** [`string`](../../core-concepts/dpf-types.md#standard-types)

location (default is elemental)

<a id="input_12"></a>
### skin_case (Pin 12)

- **Required:** No
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)

set to 0: to have skin elements in their own group, 1: merge skin and solid elements, 2: merge skin and shell elements (default)

<a id="input_13"></a>
### label (Pin 13)

- **Required:** No
- **Expected type(s):** [`string`](../../core-concepts/dpf-types.md#standard-types), [`vector<string>`](../../core-concepts/dpf-types.md#standard-types)

properties to apply the filtering 'mat' and/or 'elshape' (since 2025R1 it supports any property name contained in the mesh property fields) (default is 'elshape')


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [mesh_scoping](#output_0) |[`scopings_container`](../../core-concepts/dpf-types.md#scopings-container) |


<a id="output_0"></a>
### mesh_scoping (Pin 0)

- **Expected type(s):** [`scopings_container`](../../core-concepts/dpf-types.md#scopings-container)

Scoping


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

 **Scripting name**: split_on_property_type

 **Full name**: scoping.split_on_property_type

 **Internal name**: scoping::by_property

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("scoping::by_property"); // operator instantiation
op.connect(1, my_mesh_scoping);
op.connect(7, my_mesh);
op.connect(9, my_requested_location);
op.connect(12, my_skin_case);
op.connect(13, my_label);
ansys::dpf::ScopingsContainer my_mesh_scoping = op.getOutput<ansys::dpf::ScopingsContainer>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.scoping.split_on_property_type() # operator instantiation
op.inputs.mesh_scoping.connect(my_mesh_scoping)
op.inputs.mesh.connect(my_mesh)
op.inputs.requested_location.connect(my_requested_location)
op.inputs.skin_case.connect(my_skin_case)
op.inputs.label1.connect(my_label1)
op.inputs.label2.connect(my_label2)
my_mesh_scoping = op.outputs.mesh_scoping()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.scoping.split_on_property_type() # operator instantiation
op.inputs.mesh_scoping.Connect(my_mesh_scoping)
op.inputs.mesh.Connect(my_mesh)
op.inputs.requested_location.Connect(my_requested_location)
op.inputs.skin_case.Connect(my_skin_case)
op.inputs.label.Connect(my_label)
my_mesh_scoping = op.outputs.mesh_scoping.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.