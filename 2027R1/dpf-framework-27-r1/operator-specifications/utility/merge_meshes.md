---
category: utility
plugin: core
license: None
---

# utility:merge meshes

**Version: 0.0.0**

## Description

Take a set of meshes and assemble them in a unique one

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>-201</strong> | [naive_merge_elements](#input_-201) |  |[`bool`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>-200</strong> | [should_merge_named_selections](#input_-200) |  |[`bool`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>0</strong> | [meshes](#input_0) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|`vector<shared_ptr<abstract_meshed_region>>`, [`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region), [`meshes_container`](../../core-concepts/dpf-types.md#meshes-container) |
| <strong>101</strong> | [merge_method](#input_101) |  |[`int32`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>102</strong> | [box_size](#input_102) |  |[`double`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>103</strong> | [remove_duplicate_elements](#input_103) |  |[`int32`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_-201"></a>
### naive_merge_elements (Pin -201)

- **Required:** No
- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)

If true, merge the elemental Property Fields of the input meshes assuming that there is no repetition in their scoping ids. Default is false.

<a id="input_-200"></a>
### should_merge_named_selections (Pin -200)

- **Required:** No
- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)

For certain types of files (such as RST), scoping from names selection does not need to be merged.If this pin is true, the merge occurs. If this pin is false, the merge does not occur. Default is true.

<a id="input_0"></a>
### meshes (Pin 0)

- **Required:** Yes
- **Expected type(s):** `vector<shared_ptr<abstract_meshed_region>>`, [`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region), [`meshes_container`](../../core-concepts/dpf-types.md#meshes-container)

A vector of meshed region to merge or meshed region from pin 0 to ...

<a id="input_101"></a>
### merge_method (Pin 101)

- **Required:** No
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)

0: merge by distance, 1: merge by node id (default)

<a id="input_102"></a>
### box_size (Pin 102)

- **Required:** No
- **Expected type(s):** [`double`](../../core-concepts/dpf-types.md#standard-types)

Box size used when merging by distance. Default value is 1e-12.

<a id="input_103"></a>
### remove_duplicate_elements (Pin 103)

- **Required:** No
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)

0: keep duplicate elements (default), 1: remove duplicate elements


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [merges_mesh](#output_0) |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |


<a id="output_0"></a>
### merges_mesh (Pin 0)

- **Expected type(s):** [`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region)




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

 **Scripting name**: merge_meshes

 **Full name**: utility.merge_meshes

 **Internal name**: merge::mesh

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("merge::mesh"); // operator instantiation
op.connect(-201, my_naive_merge_elements);
op.connect(-200, my_should_merge_named_selections);
op.connect(0, my_meshes);
op.connect(101, my_merge_method);
op.connect(102, my_box_size);
op.connect(103, my_remove_duplicate_elements);
ansys::dpf::MeshedRegion my_merges_mesh = op.getOutput<ansys::dpf::MeshedRegion>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.utility.merge_meshes() # operator instantiation
op.inputs.naive_merge_elements.connect(my_naive_merge_elements)
op.inputs.should_merge_named_selections.connect(my_should_merge_named_selections)
op.inputs.meshes1.connect(my_meshes1)
op.inputs.meshes2.connect(my_meshes2)
op.inputs.merge_method.connect(my_merge_method)
op.inputs.box_size.connect(my_box_size)
op.inputs.remove_duplicate_elements.connect(my_remove_duplicate_elements)
my_merges_mesh = op.outputs.merges_mesh()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.utility.merge_meshes() # operator instantiation
op.inputs.naive_merge_elements.Connect(my_naive_merge_elements)
op.inputs.should_merge_named_selections.Connect(my_should_merge_named_selections)
op.inputs.meshes.Connect(my_meshes)
op.inputs.merge_method.Connect(my_merge_method)
op.inputs.box_size.Connect(my_box_size)
op.inputs.remove_duplicate_elements.Connect(my_remove_duplicate_elements)
my_merges_mesh = op.outputs.merges_mesh.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.