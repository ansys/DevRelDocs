---
category: logic
plugin: core
license: any_dpf_supported_increments
---

# logic:enrich materials

**Version: 0.0.0**

## Description

Takes a MaterialContainer and a stream and enriches the MaterialContainer using stream data.

## Inputs

| Pin number | Name | Expected type(s) |
|-------|-------|------------------|
| <strong>0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [MaterialContainer](#input_0) | |
| <strong>1</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [streams](#input_1) |[`streams_container`](../../core-concepts/dpf-types.md#streams-container), [`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
| <strong>2</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [streams_mapping](#input_2) |[`property_fields_container`](../../core-concepts/dpf-types.md#property-fields-container) |


<a id="input_0"></a>
### MaterialContainer (Pin 0)

- **Required:** Yes
- **Expected type(s):** 



<a id="input_1"></a>
### streams (Pin 1)

- **Required:** Yes
- **Expected type(s):** [`streams_container`](../../core-concepts/dpf-types.md#streams-container), [`fields_container`](../../core-concepts/dpf-types.md#fields-container)



<a id="input_2"></a>
### streams_mapping (Pin 2)

- **Required:** Yes
- **Expected type(s):** [`property_fields_container`](../../core-concepts/dpf-types.md#property-fields-container)




## Outputs

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [MaterialContainer](#output_0) |[`bool`](../../core-concepts/dpf-types.md#standard-types) |


<a id="output_0"></a>
### MaterialContainer (Pin 0)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)




## Configurations


### mutex

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

 **Category**: logic

 **Plugin**: core

 **Scripting name**: enrich_materials

 **Full name**: logic.enrich_materials

 **Internal name**: enrich_materials

 **License**: any_dpf_supported_increments

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("enrich_materials"); // operator instantiation
op.connect(0, my_MaterialContainer);
op.connect(1, my_streams);
op.connect(2, my_streams_mapping);
bool my_MaterialContainer = op.getOutput<bool>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.logic.enrich_materials() # operator instantiation
op.inputs.MaterialContainer.connect(my_MaterialContainer)
op.inputs.streams.connect(my_streams)
op.inputs.streams_mapping.connect(my_streams_mapping)
my_MaterialContainer = op.outputs.MaterialContainer()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.logic.enrich_materials() # operator instantiation
op.inputs.MaterialContainer.Connect(my_MaterialContainer)
op.inputs.streams.Connect(my_streams)
op.inputs.streams_mapping.Connect(my_streams_mapping)
my_MaterialContainer = op.outputs.MaterialContainer.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.