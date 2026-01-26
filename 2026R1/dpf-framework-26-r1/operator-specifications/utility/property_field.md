---
category: utility
plugin: core
license: None
---

# utility:incremental property field

**Version: 0.0.0**

## Description

Incrementaly merge the input.

## Inputs

| Pin number | Name | Expected type(s) |
|-------|-------|------------------|
| <strong>0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [input](#input_0) |[`property_field`](../../core-concepts/dpf-types.md#property-field) |


<a id="input_0"></a>
### input (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`property_field`](../../core-concepts/dpf-types.md#property-field)




## Outputs

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [incremented_result](#output_0) | |


<a id="output_0"></a>
### incremented_result (Pin 0)

- **Expected type(s):** 




## Configurations


### mutex

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

 **Category**: utility

 **Plugin**: core

 **Scripting name**: property_field

 **Full name**: utility.property_field

 **Internal name**: incremental::merge::property_field

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("incremental::merge::property_field"); // operator instantiation
op.connect(0, my_input);
 my_incremented_result = op.getOutput<>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.utility.property_field() # operator instantiation
op.inputs.input.connect(my_input)
my_incremented_result = op.outputs.incremented_result()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.utility.property_field() # operator instantiation
op.inputs.input.Connect(my_input)
my_incremented_result = op.outputs.incremented_result.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.