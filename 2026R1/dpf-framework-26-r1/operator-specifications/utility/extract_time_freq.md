---
category: utility
plugin: core
license: None
---

# utility:extract time freq

**Version: 0.0.0**

## Description

Extract timefreqs with sets scoping from a time freq support

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  time_freq_support |[`time_freq_support`](../../core-concepts/dpf-types.md#time-freq-support) |  |
| <strong>Pin 1</strong>|  time_scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping) |  |
| <strong>Pin 2</strong>|  real_or_complex |[`bool`](../../core-concepts/dpf-types.md#standard-types) | False for real only (default). True for complex output. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| field |[`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: utility

 **Plugin**: core

 **Scripting name**: extract_time_freq

 **Full name**: utility.extract_time_freq

 **Internal name**: extract_time_freq

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("extract_time_freq"); // operator instantiation
op.connect(0, my_time_freq_support);
op.connect(1, my_time_scoping);
op.connect(2, my_real_or_complex);
ansys::dpf::Field my_field = op.getOutput<ansys::dpf::Field>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.utility.extract_time_freq() # operator instantiation
op.inputs.time_freq_support.connect(my_time_freq_support)
op.inputs.time_scoping.connect(my_time_scoping)
op.inputs.real_or_complex.connect(my_real_or_complex)
my_field_as_field = op.outputs.field_as_field()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.utility.extract_time_freq() # operator instantiation
op.inputs.time_freq_support.Connect(my_time_freq_support)
op.inputs.time_scoping.Connect(my_time_scoping)
op.inputs.real_or_complex.Connect(my_real_or_complex)
my_field = op.outputs.field.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.