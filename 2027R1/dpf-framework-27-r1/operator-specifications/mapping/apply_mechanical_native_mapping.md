---
category: mapping
plugin: N/A
license: any_dpf_supported_increments
---

# mapping:apply mechanical native mapping

**Version: 0.0.0**

## Description

Maps source data from source mesh to target mesh (computes interpolation).This operator needs to be used with the prepare mechanical native mapping associated one.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [source_mesh](#input_0) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |
| <strong>1</strong> | [source_mesh_id](#input_1) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`int32`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>2</strong> | [target_mesh](#input_2) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |
| <strong>3</strong> | [target_mesh_id](#input_3) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`int32`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>4</strong> | [mapping_manager_data](#input_4) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>| |
| <strong>5</strong> | [source_data](#input_5) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
| <strong>6</strong> | [target_scoping](#input_6) |  |[`scoping`](../../core-concepts/dpf-types.md#scoping) |
| <strong>9</strong> | [threads_user_requested](#input_9) |  |[`int32`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_0"></a>
### source_mesh (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region)

Source mesh

<a id="input_1"></a>
### source_mesh_id (Pin 1)

- **Required:** Yes
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)

Source mesh id

<a id="input_2"></a>
### target_mesh (Pin 2)

- **Required:** Yes
- **Expected type(s):** [`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region)

Target mesh

<a id="input_3"></a>
### target_mesh_id (Pin 3)

- **Required:** Yes
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)

Target mesh id

<a id="input_4"></a>
### mapping_manager_data (Pin 4)

- **Required:** Yes
- **Expected type(s):** 



<a id="input_5"></a>
### source_data (Pin 5)

- **Required:** Yes
- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

Source data

<a id="input_6"></a>
### target_scoping (Pin 6)

- **Required:** No
- **Expected type(s):** [`scoping`](../../core-concepts/dpf-types.md#scoping)

Target scoping the result will be scoped on

<a id="input_9"></a>
### threads_user_requested (Pin 9)

- **Required:** No
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)

Number of threads to be used to parallelize apply operations. Default: 1 (run in series).


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [mapped_data](#output_0) |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
|  **1**| [apply_output](#output_1) | |


<a id="output_0"></a>
### mapped_data (Pin 0)

- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

Mapped data

<a id="output_1"></a>
### apply_output (Pin 1)

- **Expected type(s):** 

A Map containing the outputs of the interpolation as a key value pair


## Configurations

This operator supports [configuration options](../../core-concepts/operator-configurations.md) that modify its behavior.


### [mutex](../../core-concepts/operator-configurations.md#mutex)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: mapping

 **Plugin**: N/A

 **Scripting name**: apply_mechanical_native_mapping

 **Full name**: mapping.apply_mechanical_native_mapping

 **Internal name**: mechanical_native_mapping::apply

 **License**: any_dpf_supported_increments

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("mechanical_native_mapping::apply"); // operator instantiation
op.connect(0, my_source_mesh);
op.connect(1, my_source_mesh_id);
op.connect(2, my_target_mesh);
op.connect(3, my_target_mesh_id);
op.connect(4, my_mapping_manager_data);
op.connect(5, my_source_data);
op.connect(6, my_target_scoping);
op.connect(9, my_threads_user_requested);
ansys::dpf::FieldsContainer my_mapped_data = op.getOutput<ansys::dpf::FieldsContainer>(0);
 my_apply_output = op.getOutput<>(1);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.mapping.apply_mechanical_native_mapping() # operator instantiation
op.inputs.source_mesh.connect(my_source_mesh)
op.inputs.source_mesh_id.connect(my_source_mesh_id)
op.inputs.target_mesh.connect(my_target_mesh)
op.inputs.target_mesh_id.connect(my_target_mesh_id)
op.inputs.mapping_manager_data.connect(my_mapping_manager_data)
op.inputs.source_data.connect(my_source_data)
op.inputs.target_scoping.connect(my_target_scoping)
op.inputs.threads_user_requested.connect(my_threads_user_requested)
my_mapped_data = op.outputs.mapped_data()
my_apply_output = op.outputs.apply_output()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.mapping.apply_mechanical_native_mapping() # operator instantiation
op.inputs.source_mesh.Connect(my_source_mesh)
op.inputs.source_mesh_id.Connect(my_source_mesh_id)
op.inputs.target_mesh.Connect(my_target_mesh)
op.inputs.target_mesh_id.Connect(my_target_mesh_id)
op.inputs.mapping_manager_data.Connect(my_mapping_manager_data)
op.inputs.source_data.Connect(my_source_data)
op.inputs.target_scoping.Connect(my_target_scoping)
op.inputs.threads_user_requested.Connect(my_threads_user_requested)
my_mapped_data = op.outputs.mapped_data.GetData()
my_apply_output = op.outputs.apply_output.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.