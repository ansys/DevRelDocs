---
category: utility
plugin: core
license: None
---

# utility:merge materials

**Version: 0.0.0**

## Description

Assembles a set of materials into a unique one.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [materials](#input_0) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|`vector<shared_ptr<materials>>`, `materials` |


<a id="input_0"></a>
### materials (Pin 0)

- **Required:** Yes
- **Expected type(s):** `vector<shared_ptr<materials>>`, `materials`

A vector of materials to merge or materials from pin 0 to ...


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [merged_materials](#output_0) |`materials` |


<a id="output_0"></a>
### merged_materials (Pin 0)

- **Expected type(s):** `materials`




## Configurations

This operator supports [configuration options](../../core-concepts/operator-configurations.md) that modify its behavior.


### [mutex](../../core-concepts/operator-configurations.md#mutex)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: utility

 **Plugin**: core

 **Scripting name**: merge_materials

 **Full name**: utility.merge_materials

 **Internal name**: merge::materials

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("merge::materials"); // operator instantiation
op.connect(0, my_materials);
ansys::dpf::Materials my_merged_materials = op.getOutput<ansys::dpf::Materials>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.utility.merge_materials() # operator instantiation
op.inputs.materials1.connect(my_materials1)
op.inputs.materials2.connect(my_materials2)
my_merged_materials = op.outputs.merged_materials()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.utility.merge_materials() # operator instantiation
op.inputs.materials.Connect(my_materials)
my_merged_materials = op.outputs.merged_materials.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.