---
category: utility
plugin: core
license: None
---

# utility:forward meshes container

**Version: 0.0.0**

## Description

Returns the input mesh or meshes container into a meshes container.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [meshes](/docs/dpf/dpf-framework/operator-specifications/utility/forward_meshes_container) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`meshes_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types), [`abstract_meshed_region`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
| <strong>1</strong> | [default_label](/docs/dpf/dpf-framework/operator-specifications/utility/forward_meshes_container) |  |[`string`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |


<a id="input_0"></a>
### meshes (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`meshes_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types), [`abstract_meshed_region`](/docs/dpf/dpf-framework/core-concepts/dpf-types)



<a id="input_1"></a>
### default_label (Pin 1)

- **Required:** No
- **Expected type(s):** [`string`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

this default label is used if a new meshes container needs to be created (default is unknown)


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [meshes_container](/docs/dpf/dpf-framework/operator-specifications/utility/forward_meshes_container) |[`meshes_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |


<a id="output_0"></a>
### meshes_container (Pin 0)

- **Expected type(s):** [`meshes_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types)




## Configurations

This operator supports [configuration options](/docs/dpf/dpf-framework/core-concepts/operator-configurations) that modify its behavior.


### [mutex](/docs/dpf/dpf-framework/core-concepts/operator-configurations)

- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/core-concepts/dpf-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: utility

 **Plugin**: core

 **Scripting name**: forward_meshes_container

 **Full name**: utility.forward_meshes_container

 **Internal name**: forward_meshes_container

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("forward_meshes_container"); // operator instantiation
op.connect(0, my_meshes);
op.connect(1, my_default_label);
ansys::dpf::MeshesContainer my_meshes_container = op.getOutput<ansys::dpf::MeshesContainer>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.utility.forward_meshes_container() # operator instantiation
op.inputs.meshes.connect(my_meshes)
op.inputs.default_label.connect(my_default_label)
my_meshes_container = op.outputs.meshes_container()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.utility.forward_meshes_container() # operator instantiation
op.inputs.meshes.Connect(my_meshes)
op.inputs.default_label.Connect(my_default_label)
my_meshes_container = op.outputs.meshes_container.GetData()
```
</details>
<br />

## Changelog

- Version 0.0.0: Initial release.