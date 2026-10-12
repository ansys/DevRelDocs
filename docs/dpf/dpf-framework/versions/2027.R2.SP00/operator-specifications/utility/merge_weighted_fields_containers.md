---
category: utility
plugin: core
license: None
---

# utility:merge weighted fields containers

**Version: 0.0.0**

## Description

Assembles a set of fields containers into a unique one, applying a weight on the sum of the fields.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>-3</strong> | [sum_merge](#input_-3) |  |[`bool`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>-2</strong> | [merged_fields_support](#input_-2) |  |`abstract_field_support` |
| <strong>-1</strong> | [merged_fields_containers_support](#input_-1) |  |`abstract_field_support`, `umap<string,shared_ptr<abstract_field_support>>` |
| <strong>0</strong> | [fields_containers](#input_0) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|`vector<shared_ptr<fields_container>>`, [`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
| <strong>1000</strong> | [weights](#input_1000) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|`vector<shared_ptr<class dataProcessing::DpfTypeCollection<class dataProcessing::CPropertyField>>>`, `class dataProcessing::DpfTypeCollection<class dataProcessing::CPropertyField>` |


<a id="input_-3"></a>
### sum_merge (Pin -3)

- **Required:** No
- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)

Default is false. If true, redundant quantities are summed instead of being ignored.

<a id="input_-2"></a>
### merged_fields_support (Pin -2)

- **Required:** No
- **Expected type(s):** `abstract_field_support`

Already merged field support.

<a id="input_-1"></a>
### merged_fields_containers_support (Pin -1)

- **Required:** No
- **Expected type(s):** `abstract_field_support`, `umap<string,shared_ptr<abstract_field_support>>`

Already merged fields containers support.

<a id="input_0"></a>
### fields_containers (Pin 0)

- **Required:** Yes
- **Expected type(s):** `vector<shared_ptr<fields_container>>`, [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

A vector of fields containers to merge or fields containers from pin 0 to ...

<a id="input_1000"></a>
### weights (Pin 1000)

- **Required:** Yes
- **Expected type(s):** `vector<shared_ptr<class dataProcessing::DpfTypeCollection<class dataProcessing::CPropertyField>>>`, `class dataProcessing::DpfTypeCollection<class dataProcessing::CPropertyField>`

Weights to apply to each field from pin 1000 to ...


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [merged_fields_container](#output_0) |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |


<a id="output_0"></a>
### merged_fields_container (Pin 0)

- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)




## Configurations

This operator supports [configuration options](../../core-concepts/operator-configurations.md) that modify its behavior.


### [mutex](../../core-concepts/operator-configurations.md#mutex)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

### [read_inputs_in_parallel](../../core-concepts/operator-configurations.md#read_inputs_in_parallel)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the operator's inputs will be evaluated in parallel.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: utility

 **Plugin**: core

 **Scripting name**: merge_weighted_fields_containers

 **Full name**: utility.merge_weighted_fields_containers

 **Internal name**: merge::weighted_fields_container

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("merge::weighted_fields_container"); // operator instantiation
op.connect(-3, my_sum_merge);
op.connect(-2, my_merged_fields_support);
op.connect(-1, my_merged_fields_containers_support);
op.connect(0, my_fields_containers);
op.connect(1000, my_weights);
ansys::dpf::FieldsContainer my_merged_fields_container = op.getOutput<ansys::dpf::FieldsContainer>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.utility.merge_weighted_fields_containers() # operator instantiation
op.inputs.sum_merge.connect(my_sum_merge)
op.inputs.merged_fields_support.connect(my_merged_fields_support)
op.inputs.merged_fields_containers_support.connect(my_merged_fields_containers_support)
op.inputs.fields_containers1.connect(my_fields_containers1)
op.inputs.fields_containers2.connect(my_fields_containers2)
op.inputs.weights1.connect(my_weights1)
op.inputs.weights2.connect(my_weights2)
my_merged_fields_container = op.outputs.merged_fields_container()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.utility.merge_weighted_fields_containers() # operator instantiation
op.inputs.sum_merge.Connect(my_sum_merge)
op.inputs.merged_fields_support.Connect(my_merged_fields_support)
op.inputs.merged_fields_containers_support.Connect(my_merged_fields_containers_support)
op.inputs.fields_containers.Connect(my_fields_containers)
op.inputs.weights.Connect(my_weights)
my_merged_fields_container = op.outputs.merged_fields_container.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.