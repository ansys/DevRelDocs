---
category: averaging
plugin: core
license: any_dpf_supported_increments
---

# averaging:elemental fraction (fields container)

**Version: 0.0.0**

## Description

Transforms Elemental Nodal fields into Elemental fields. Each elemental value is the fraction between the elemental difference and the entity average. The result is computed on a given element's scoping.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [fields_container](#input_0) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
| <strong>1</strong> | [mesh](#input_1) |  |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |
| <strong>3</strong> | [scoping](#input_3) |  |[`scoping`](../../core-concepts/dpf-types.md#scoping) |
| <strong>6</strong> | [denominator](#input_6) |  |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
| <strong>10</strong> | [collapse_shell_layers](#input_10) |  |[`bool`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_0"></a>
### fields_container (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)



<a id="input_1"></a>
### mesh (Pin 1)

- **Required:** No
- **Expected type(s):** [`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region)

The mesh region in this pin is used to perform the averaging. It is used if there is no fields support.

<a id="input_3"></a>
### scoping (Pin 3)

- **Required:** No
- **Expected type(s):** [`scoping`](../../core-concepts/dpf-types.md#scoping)

Average only on these elements. If it is a scoping container, the label must correspond to the one of the fields containers.

<a id="input_6"></a>
### denominator (Pin 6)

- **Required:** No
- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

If a fields container is set in this pin, it is used as the denominator of the fraction instead of entity_average_fc.

<a id="input_10"></a>
### collapse_shell_layers (Pin 10)

- **Required:** No
- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)

If true, the data across different shell layers is averaged as well (default is false).


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [fields_container](#output_0) |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |


<a id="output_0"></a>
### fields_container (Pin 0)

- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)




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

 **Category**: averaging

 **Plugin**: core

 **Scripting name**: elemental_fraction_fc

 **Full name**: averaging.elemental_fraction_fc

 **Internal name**: elemental_fraction_fc

 **License**: any_dpf_supported_increments

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("elemental_fraction_fc"); // operator instantiation
op.connect(0, my_fields_container);
op.connect(1, my_mesh);
op.connect(3, my_scoping);
op.connect(6, my_denominator);
op.connect(10, my_collapse_shell_layers);
ansys::dpf::FieldsContainer my_fields_container = op.getOutput<ansys::dpf::FieldsContainer>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.averaging.elemental_fraction_fc() # operator instantiation
op.inputs.fields_container.connect(my_fields_container)
op.inputs.mesh.connect(my_mesh)
op.inputs.scoping.connect(my_scoping)
op.inputs.denominator.connect(my_denominator)
op.inputs.collapse_shell_layers.connect(my_collapse_shell_layers)
my_fields_container = op.outputs.fields_container()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.averaging.elemental_fraction_fc() # operator instantiation
op.inputs.fields_container.Connect(my_fields_container)
op.inputs.mesh.Connect(my_mesh)
op.inputs.scoping.Connect(my_scoping)
op.inputs.denominator.Connect(my_denominator)
op.inputs.collapse_shell_layers.Connect(my_collapse_shell_layers)
my_fields_container = op.outputs.fields_container.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.