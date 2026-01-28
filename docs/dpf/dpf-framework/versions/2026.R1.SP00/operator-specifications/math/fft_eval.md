---
category: math
plugin: core
license: any_dpf_supported_increments
---

# math:fft evaluation

**Version: 0.0.0**

## Description

Evaluate the fast fourier transforms at a given set of fields.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  field_t |[`field`](../../core-concepts/dpf-types.md#field) | field of values to evaluate |
| <strong>Pin 1</strong>|  time_scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping) | if specified only the results at these set ids are used |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| field |[`field`](../../core-concepts/dpf-types.md#field) |  |
|  **Pin 2**| offset |[`field`](../../core-concepts/dpf-types.md#field) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: math

 **Plugin**: core

 **Scripting name**: fft_eval

 **Full name**: math.fft_eval

 **Internal name**: fft_eval

 **License**: any_dpf_supported_increments

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("fft_eval"); // operator instantiation
op.connect(0, my_field_t);
op.connect(1, my_time_scoping);
ansys::dpf::Field my_field = op.getOutput<ansys::dpf::Field>(0);
ansys::dpf::Field my_offset = op.getOutput<ansys::dpf::Field>(2);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.math.fft_eval() # operator instantiation
op.inputs.field_t.connect(my_field_t)
op.inputs.time_scoping.connect(my_time_scoping)
my_field = op.outputs.field()
my_offset = op.outputs.offset()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.math.fft_eval() # operator instantiation
op.inputs.field_t.Connect(my_field_t)
op.inputs.time_scoping.Connect(my_time_scoping)
my_field = op.outputs.field.GetData()
my_offset = op.outputs.offset.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.