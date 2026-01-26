---
category: invariant
plugin: mapdl
license: None
---

# invariant:convertnum bcs to nod

**Version: 0.0.0**

## Description

Converts a fields container from BCS to NOD ordering.

## Inputs

| Pin number | Name | Expected type(s) |
|-------|-------|------------------|
| <strong>2</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [fields_container](#input_2) |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
| <strong>4</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [data_sources](#input_4) |[`data_sources`](../../core-concepts/dpf-types.md#data-sources) |


<a id="input_2"></a>
### fields_container (Pin 2)

- **Required:** Yes
- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

fields_container

<a id="input_4"></a>
### data_sources (Pin 4)

- **Required:** Yes
- **Expected type(s):** [`data_sources`](../../core-concepts/dpf-types.md#data-sources)

Data_sources (must contain the full file).


## Outputs

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [fields_container](#output_0) |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |


<a id="output_0"></a>
### fields_container (Pin 0)

- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)




## Configurations


### mutex

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

 **Category**: invariant

 **Plugin**: mapdl

 **Scripting name**: convertnum_bcs_to_nod

 **Full name**: invariant.convertnum_bcs_to_nod

 **Internal name**: convertnum_bcs_to_nod

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("convertnum_bcs_to_nod"); // operator instantiation
op.connect(2, my_fields_container);
op.connect(4, my_data_sources);
ansys::dpf::FieldsContainer my_fields_container = op.getOutput<ansys::dpf::FieldsContainer>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.invariant.convertnum_bcs_to_nod() # operator instantiation
op.inputs.fields_container.connect(my_fields_container)
op.inputs.data_sources.connect(my_data_sources)
my_fields_container = op.outputs.fields_container()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.invariant.convertnum_bcs_to_nod() # operator instantiation
op.inputs.fields_container.Connect(my_fields_container)
op.inputs.data_sources.Connect(my_data_sources)
my_fields_container = op.outputs.fields_container.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.