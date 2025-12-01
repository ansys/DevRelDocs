---
category: utility
plugin: core
license: None
---

# utility:bind support (fields container)

**Version: 0.0.0**

## Description

Ties a support to a fields container.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Fields container to which the support will be attached |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  support |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region), `abstract_field_support`, [`time_freq_support`](../../core-concepts/dpf-types.md#time-freq-support) | Meshed region, support, or time frequency support to attach to the fields container |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Fields container with the attached support |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: utility

 **Plugin**: core

 **Scripting name**: bind_support_fc

 **Full name**: utility.bind_support_fc

 **Internal name**: BindSupportFC

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("BindSupportFC"); // operator instantiation
op.connect(0, my_fields_container);
op.connect(1, my_support);
ansys::dpf::FieldsContainer my_fields_container = op.getOutput<ansys::dpf::FieldsContainer>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.utility.bind_support_fc() # operator instantiation
op.inputs.fields_container.connect(my_fields_container)
op.inputs.support.connect(my_support)
my_fields_container = op.outputs.fields_container()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.utility.bind_support_fc() # operator instantiation
op.inputs.fields_container.Connect(my_fields_container)
op.inputs.support.Connect(my_support)
my_fields_container = op.outputs.fields_container.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.