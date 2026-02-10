---
category: utility
plugin: core
license: None
---

# utility:operator changelog

**Version: 0.0.0**

## Description

Return a GenericDataContainer used to instantiate the Changelog of an operator based on its name.

## Inputs

| Pin number | Name | Expected type(s) |
|-------|-------|------------------|
| <strong>0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [operator_name](#input_0) |[`string`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_0"></a>
### operator_name (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`string`](../../core-concepts/dpf-types.md#standard-types)

Operator internal name.


## Outputs

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [changelog_gdc](#output_0) |[`generic_data_container`](../../core-concepts/dpf-types.md#generic-data-container) |


<a id="output_0"></a>
### changelog_gdc (Pin 0)

- **Expected type(s):** [`generic_data_container`](../../core-concepts/dpf-types.md#generic-data-container)

GenericDataContainer used to instantiate a Changelog.


## Configurations


### mutex

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

 **Category**: utility

 **Plugin**: core

 **Scripting name**: operator_changelog

 **Full name**: utility.operator_changelog

 **Internal name**: operator_changelog

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("operator_changelog"); // operator instantiation
op.connect(0, my_operator_name);
ansys::dpf::GenericDataContainer my_changelog_gdc = op.getOutput<ansys::dpf::GenericDataContainer>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.utility.operator_changelog() # operator instantiation
op.inputs.operator_name.connect(my_operator_name)
my_changelog_gdc = op.outputs.changelog_gdc()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.utility.operator_changelog() # operator instantiation
op.inputs.operator_name.Connect(my_operator_name)
my_changelog_gdc = op.outputs.changelog_gdc.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.