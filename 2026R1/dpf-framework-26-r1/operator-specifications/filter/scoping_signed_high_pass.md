---
category: filter
plugin: core
license: any_dpf_supported_increments
---

# filter:signed high pass (scoping)

**Version: 0.0.0**

## Description

The high pass filter returns all the values above, or equal, in absolute value to the threshold value in input.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  field |[`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container) | field or fields container with only one field is expected |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  threshold |[`double`](../../core-concepts/dpf-types.md#standard-types), [`field`](../../core-concepts/dpf-types.md#field) | A threshold scalar or a field containing one value is expected. |
| <strong>Pin 2</strong>|  both |[`bool`](../../core-concepts/dpf-types.md#standard-types) | The default is false. If set to true, the complement of the filtered fields container is returned on output pin 1. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: filter

 **Plugin**: core

 **Scripting name**: scoping_signed_high_pass

 **Full name**: filter.scoping_signed_high_pass

 **Internal name**: core::scoping::signed_high_pass

 **License**: any_dpf_supported_increments

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("core::scoping::signed_high_pass"); // operator instantiation
op.connect(0, my_field);
op.connect(1, my_threshold);
op.connect(2, my_both);
ansys::dpf::Scoping my_scoping = op.getOutput<ansys::dpf::Scoping>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.filter.scoping_signed_high_pass() # operator instantiation
op.inputs.field.connect(my_field)
op.inputs.threshold.connect(my_threshold)
op.inputs.both.connect(my_both)
my_scoping = op.outputs.scoping()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.filter.scoping_signed_high_pass() # operator instantiation
op.inputs.field.Connect(my_field)
op.inputs.threshold.Connect(my_threshold)
op.inputs.both.Connect(my_both)
my_scoping = op.outputs.scoping.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.