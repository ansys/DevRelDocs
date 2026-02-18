---
category: result
plugin: mapdl
license: None
---

# result:cms subfile info provider

**Version: 0.0.0**

## Description

Read required information from a subfile.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>4</strong> | [data_sources](#input_4) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`data_sources`](../../core-concepts/dpf-types.md#data-sources) |
| <strong>200</strong> | [cms_subfile_data](#input_200) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`bool`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>300</strong> | [output_maxdof_on_masternodes](#input_300) |  |[`bool`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_4"></a>
### data_sources (Pin 4)

- **Required:** Yes
- **Expected type(s):** [`data_sources`](../../core-concepts/dpf-types.md#data-sources)

Data_sources (must contain at least one subfile).

<a id="input_200"></a>
### cms_subfile_data (Pin 200)

- **Required:** Yes
- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)

If this pin i set to true, data are return in a field.

<a id="input_300"></a>
### output_maxdof_on_masternodes (Pin 300)

- **Required:** No
- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)

If this pin is set to true, compute and add field with max degrees of freedom on master nodes


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [int32](#output_0) |[`int32`](../../core-concepts/dpf-types.md#standard-types) |
|  **1**| [field](#output_1) |[`property_field`](../../core-concepts/dpf-types.md#property-field) |


<a id="output_0"></a>
### int32 (Pin 0)

- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)

returns integer values in the order : unit system used, stiffness matrix present key, damping matrix present key, mass matrix present key, number of master nodes, number of virtual nodes

<a id="output_1"></a>
### field (Pin 1)

- **Expected type(s):** [`property_field`](../../core-concepts/dpf-types.md#property-field)

returns integer values in the order : number of load vectors (nvects), number of nodes (nnod), number of virtual nodes (nvnodes), number of modes (nvmodes)


## Configurations

This operator supports [configuration options](../../core-concepts/operator-configurations.md) that modify its behavior.


### [mutex](../../core-concepts/operator-configurations.md#mutex)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: result

 **Plugin**: mapdl

 **Scripting name**: cms_subfile_info_provider

 **Full name**: result.cms_subfile_info_provider

 **Internal name**: cms_subfile_info_provider

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("cms_subfile_info_provider"); // operator instantiation
op.connect(4, my_data_sources);
op.connect(200, my_cms_subfile_data);
op.connect(300, my_output_maxdof_on_masternodes);
int my_int32 = op.getOutput<int>(0);
ansys::dpf::PropertyField my_field = op.getOutput<ansys::dpf::PropertyField>(1);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.result.cms_subfile_info_provider() # operator instantiation
op.inputs.data_sources.connect(my_data_sources)
op.inputs.cms_subfile_data.connect(my_cms_subfile_data)
op.inputs.output_maxdof_on_masternodes.connect(my_output_maxdof_on_masternodes)
my_int32 = op.outputs.int32()
my_field = op.outputs.field()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.result.cms_subfile_info_provider() # operator instantiation
op.inputs.data_sources.Connect(my_data_sources)
op.inputs.cms_subfile_data.Connect(my_cms_subfile_data)
op.inputs.output_maxdof_on_masternodes.Connect(my_output_maxdof_on_masternodes)
my_int32 = op.outputs.int32.GetData()
my_field = op.outputs.field.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.