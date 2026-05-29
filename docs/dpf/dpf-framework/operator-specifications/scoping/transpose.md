---
category: scoping
plugin: core
license: None
---

# scoping:transpose

**Version: 0.0.0**

## Description

Transposes the input scoping or scopings container (Elemental/Faces --> Nodal, or Nodal ---> Elemental/Faces), based on the input mesh region.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [mesh_scoping](/docs/dpf/dpf-framework/operator-specifications/scoping/transpose) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`scoping`](/docs/dpf/dpf-framework/core-concepts/dpf-types), [`scopings_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
| <strong>1</strong> | [meshed_region](/docs/dpf/dpf-framework/operator-specifications/scoping/transpose) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`meshed_region`](/docs/dpf/dpf-framework/core-concepts/dpf-types), [`meshes_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
| <strong>2</strong> | [inclusive](/docs/dpf/dpf-framework/operator-specifications/scoping/transpose) |  |[`int32`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
| <strong>3</strong> | [extend_midside_nodes](/docs/dpf/dpf-framework/operator-specifications/scoping/transpose) |  |[`bool`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
| <strong>9</strong> | [requested_location](/docs/dpf/dpf-framework/operator-specifications/scoping/transpose) |  |[`string`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |


<a id="input_0"></a>
### mesh_scoping (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`scoping`](/docs/dpf/dpf-framework/core-concepts/dpf-types), [`scopings_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

Scoping or scopings container (the input type is the output type)

<a id="input_1"></a>
### meshed_region (Pin 1)

- **Required:** Yes
- **Expected type(s):** [`meshed_region`](/docs/dpf/dpf-framework/core-concepts/dpf-types), [`meshes_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types)



<a id="input_2"></a>
### inclusive (Pin 2)

- **Required:** No
- **Expected type(s):** [`int32`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

if inclusive == 1 then all the elements/faces adjacent to the nodes/faces ids in input are added, if inclusive == 0, only the elements/faces which have all their nodes/faces in the scoping are included

<a id="input_3"></a>
### extend_midside_nodes (Pin 3)

- **Required:** No
- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

This pin only affects nodal to elemental transposition. If true, the neighbour corner nodes of every input midside node are also considered in the input scoping. As a result, the output scoping also contains the elements connected to corner nodes that may not be in the input scoping. It is false by default.

<a id="input_9"></a>
### requested_location (Pin 9)

- **Required:** No
- **Expected type(s):** [`string`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

Output scoping location for meshes with nodes, faces and elements. By default, elemental and faces scopings transpose to nodal, and nodal scopings transpose to elemental.


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [mesh_scoping](/docs/dpf/dpf-framework/operator-specifications/scoping/transpose) |[`scoping`](/docs/dpf/dpf-framework/core-concepts/dpf-types), [`scopings_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |


<a id="output_0"></a>
### mesh_scoping (Pin 0)

- **Expected type(s):** [`scoping`](/docs/dpf/dpf-framework/core-concepts/dpf-types), [`scopings_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

Scoping or scopings container (the input type is the output type)


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

 **Scripting name**: transpose

 **Full name**: scoping.transpose

 **Internal name**: transpose_scoping

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("transpose_scoping"); // operator instantiation
op.connect(0, my_mesh_scoping);
op.connect(1, my_meshed_region);
op.connect(2, my_inclusive);
op.connect(3, my_extend_midside_nodes);
op.connect(9, my_requested_location);
ansys::dpf::Scoping my_mesh_scoping = op.getOutput<ansys::dpf::Scoping>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.scoping.transpose() # operator instantiation
op.inputs.mesh_scoping.connect(my_mesh_scoping)
op.inputs.meshed_region.connect(my_meshed_region)
op.inputs.inclusive.connect(my_inclusive)
op.inputs.extend_midside_nodes.connect(my_extend_midside_nodes)
op.inputs.requested_location.connect(my_requested_location)
my_mesh_scoping_as_scoping = op.outputs.mesh_scoping_as_scoping()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.scoping.transpose() # operator instantiation
op.inputs.mesh_scoping.Connect(my_mesh_scoping)
op.inputs.meshed_region.Connect(my_meshed_region)
op.inputs.inclusive.Connect(my_inclusive)
op.inputs.extend_midside_nodes.Connect(my_extend_midside_nodes)
op.inputs.requested_location.Connect(my_requested_location)
my_mesh_scoping = op.outputs.mesh_scoping.GetData()
```
</details>
<br />

## Changelog

- Version 0.0.0: Initial release.