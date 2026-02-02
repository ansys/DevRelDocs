---
category: metadata
plugin: core
license: None
---

# metadata:time freq support get attribute

**Version: 0.0.0**

## Description

Uses the TimeFreqSupport APIs to return a given attribute of the scoping in input.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  time_freq_support |[`time_freq_support`](../../core-concepts/dpf-types.md#time-freq-support) |  |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  property_name |[`string`](../../core-concepts/dpf-types.md#standard-types) | Supported property names are: "time_freqs", "imaginary_freqs", "frequency_tolerance", "set_id", "cummulative_index", "sets_freqs", "step_id_from_harmonic_index". |
| <strong>Pin 2</strong>|  property_identifier |[`int32`](../../core-concepts/dpf-types.md#standard-types), [`scoping`](../../core-concepts/dpf-types.md#scoping) | Additional pin for properties "set_id" and "cummulative_index": the step id, for "sets_freqs": the sets scoping, for "step_id_from_harmonic_index" : the harmonic index. |
| <strong>Pin 3</strong>|  property_identifier_2 |[`int32`](../../core-concepts/dpf-types.md#standard-types) | Additional pin for properties "set_id" and "cummulative_index": the substep id (if none, last substep is considered). |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| property |[`double`](../../core-concepts/dpf-types.md#standard-types), [`field`](../../core-concepts/dpf-types.md#field), [`scoping`](../../core-concepts/dpf-types.md#scoping) | Returns a double for property: "frequency_tolerance", a single-value Scoping for properties for "set_id" and "cummulative_index", an int for "step_id_from_harmonic_index" and a Field otherwise. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: metadata

 **Plugin**: core

 **Scripting name**: time_freq_support_get_attribute

 **Full name**: metadata.time_freq_support_get_attribute

 **Internal name**: timefreqsupport::get_attribute

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("timefreqsupport::get_attribute"); // operator instantiation
op.connect(0, my_time_freq_support);
op.connect(1, my_property_name);
op.connect(2, my_property_identifier);
op.connect(3, my_property_identifier_2);
double my_property = op.getOutput<double>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.metadata.time_freq_support_get_attribute() # operator instantiation
op.inputs.time_freq_support.connect(my_time_freq_support)
op.inputs.property_name.connect(my_property_name)
op.inputs.property_identifier.connect(my_property_identifier)
op.inputs.property_identifier_2.connect(my_property_identifier_2)
my_property_as_double = op.outputs.property_as_double()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.metadata.time_freq_support_get_attribute() # operator instantiation
op.inputs.time_freq_support.Connect(my_time_freq_support)
op.inputs.property_name.Connect(my_property_name)
op.inputs.property_identifier.Connect(my_property_identifier)
op.inputs.property_identifier_2.Connect(my_property_identifier_2)
my_property = op.outputs.property.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.