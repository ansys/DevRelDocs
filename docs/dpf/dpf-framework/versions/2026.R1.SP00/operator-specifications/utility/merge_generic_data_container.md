---
category: utility
plugin: core
license: None
---

# utility:merge generic data container

**Version: 0.0.0**

## Description

Merges a list of generic data container. For each data entry, the merge operation is forwarded to the correct merge Operator. Primitive types cannot be merged, first instance found will be maintained in the result.

## Inputs

| Pin number | Name | Expected type(s) |
|-------|-------|------------------|
| <strong>0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [generic_data_container](#input_0) |[`generic_data_container`](../../core-concepts/dpf-types.md#generic-data-container), `vector<shared_ptr<generic_data_container>>` |


<a id="input_0"></a>
### generic_data_container (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`generic_data_container`](../../core-concepts/dpf-types.md#generic-data-container), `vector<shared_ptr<generic_data_container>>`

Either a vector of generic data containers (sharing the same data types) or generic data containers from pin 0 to ... to merge. Supported types rely on existing type specific merge operators.


## Outputs

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [generic_data_container](#output_0) |[`generic_data_container`](../../core-concepts/dpf-types.md#generic-data-container) |


<a id="output_0"></a>
### generic_data_container (Pin 0)

- **Expected type(s):** [`generic_data_container`](../../core-concepts/dpf-types.md#generic-data-container)




## Configurations


### mutex

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

 **Category**: utility

 **Plugin**: core

 **Scripting name**: merge_generic_data_container

 **Full name**: utility.merge_generic_data_container

 **Internal name**: merge::generic_data_container

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("merge::generic_data_container"); // operator instantiation
op.connect(0, my_generic_data_container);
ansys::dpf::GenericDataContainer my_generic_data_container = op.getOutput<ansys::dpf::GenericDataContainer>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.utility.merge_generic_data_container() # operator instantiation
op.inputs.generic_data_container1.connect(my_generic_data_container1)
op.inputs.generic_data_container2.connect(my_generic_data_container2)
my_generic_data_container = op.outputs.generic_data_container()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.utility.merge_generic_data_container() # operator instantiation
op.inputs.generic_data_container.Connect(my_generic_data_container)
my_generic_data_container = op.outputs.generic_data_container.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.