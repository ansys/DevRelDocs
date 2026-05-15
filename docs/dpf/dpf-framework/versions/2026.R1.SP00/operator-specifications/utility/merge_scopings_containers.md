---
category: utility
plugin: core
license: None
---

# utility:merge scopings containers

**Version: 0.0.0**

## Description

Assembles a set of scopings containers into a unique one.

## Inputs

| Pin number | Name | Expected type(s) |
|-------|-------|------------------|
| <strong>0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [scopings_containers](#input_0) |`vector<shared_ptr<scopings_container>>`, [`scopings_container`](../../core-concepts/dpf-types.md#scopings-container) |


<a id="input_0"></a>
### scopings_containers (Pin 0)

- **Required:** Yes
- **Expected type(s):** `vector<shared_ptr<scopings_container>>`, [`scopings_container`](../../core-concepts/dpf-types.md#scopings-container)

A vector of scopings containers to merge or scopings containers from pin 0 to ...


## Outputs

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [merged_scopings_container](#output_0) |[`scopings_container`](../../core-concepts/dpf-types.md#scopings-container) |


<a id="output_0"></a>
### merged_scopings_container (Pin 0)

- **Expected type(s):** [`scopings_container`](../../core-concepts/dpf-types.md#scopings-container)




## Configurations


### mutex

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

 **Category**: utility

 **Plugin**: core

 **Scripting name**: merge_scopings_containers

 **Full name**: utility.merge_scopings_containers

 **Internal name**: merge::scopings_container

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("merge::scopings_container"); // operator instantiation
op.connect(0, my_scopings_containers);
ansys::dpf::ScopingsContainer my_merged_scopings_container = op.getOutput<ansys::dpf::ScopingsContainer>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.utility.merge_scopings_containers() # operator instantiation
op.inputs.scopings_containers1.connect(my_scopings_containers1)
op.inputs.scopings_containers2.connect(my_scopings_containers2)
my_merged_scopings_container = op.outputs.merged_scopings_container()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.utility.merge_scopings_containers() # operator instantiation
op.inputs.scopings_containers.Connect(my_scopings_containers)
my_merged_scopings_container = op.outputs.merged_scopings_container.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.