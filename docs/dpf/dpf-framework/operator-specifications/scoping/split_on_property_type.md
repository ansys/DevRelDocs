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
| <strong>1</strong> | [mesh_scoping](/docs/dpf/dpf-framework/operator-specifications/scoping/split_on_property_type) |  |[`scoping`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
| <strong>7</strong> | [mesh](/docs/dpf/dpf-framework/operator-specifications/scoping/split_on_property_type) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`abstract_meshed_region`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
| <strong>9</strong> | [requested_location](/docs/dpf/dpf-framework/operator-specifications/scoping/split_on_property_type) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`string`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
| <strong>12</strong> | [skin_case](/docs/dpf/dpf-framework/operator-specifications/scoping/split_on_property_type) |  |[`int32`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
| <strong>13</strong> | [label](/docs/dpf/dpf-framework/operator-specifications/scoping/split_on_property_type) |  |[`string`](/docs/dpf/dpf-framework/core-concepts/dpf-types), [`vector&lt;string&gt;`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |


<a id="input_1"></a>
### mesh_scoping (Pin 1)

- **Required:** No
- **Expected type(s):** [`scoping`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

Scoping

<a id="input_7"></a>
### mesh (Pin 7)

- **Required:** Yes
- **Expected type(s):** [`abstract_meshed_region`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

mesh region

<a id="input_9"></a>
### requested_location (Pin 9)

- **Required:** Yes
- **Expected type(s):** [`string`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

location (default is elemental)

<a id="input_12"></a>
### skin_case (Pin 12)

- **Required:** No
- **Expected type(s):** [`int32`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

set to 0: to have skin elements in their own group, 1: merge skin and solid elements, 2: merge skin and shell elements (default)

<a id="input_13"></a>
### label (Pin 13)

- **Required:** No
- **Expected type(s):** [`string`](/docs/dpf/dpf-framework/core-concepts/dpf-types), [`vector&lt;string&gt;`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

properties to apply the filtering 'mat' and/or 'elshape' (since 2025R1 it supports any property name contained in the mesh property fields) (default is 'elshape')


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [mesh_scoping](/docs/dpf/dpf-framework/operator-specifications/scoping/split_on_property_type) |[`scopings_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |


<a id="output_0"></a>
### mesh_scoping (Pin 0)

- **Expected type(s):** [`scopings_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

Scoping


## Configurations

This operator supports [configuration options](/docs/dpf/dpf-framework/core-concepts/operator-configurations) that modify its behavior.


### [mutex](/docs/dpf/dpf-framework/core-concepts/operator-configurations)

- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/core-concepts/dpf-types)
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
<br />

## Changelog

- Version 0.0.0: Initial release.