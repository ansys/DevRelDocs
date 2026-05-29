---
category: utility
plugin: core
license: None
---

# utility:compute time scoping

**Version: 0.0.0**

## Description

Computes the time frequency scoping (made of set IDs) necessary to interpolate on a list of time or frequencies.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [time_freq_values](/docs/dpf/dpf-framework/operator-specifications/utility/compute_time_scoping) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`double`](/docs/dpf/dpf-framework/core-concepts/dpf-types), [`vector&lt;double&gt;`](/docs/dpf/dpf-framework/core-concepts/dpf-types), [`field`](/docs/dpf/dpf-framework/core-concepts/dpf-types), [`time_freq_support`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
| <strong>2</strong> | [step](/docs/dpf/dpf-framework/operator-specifications/utility/compute_time_scoping) |  |[`int32`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
| <strong>4</strong> | [interpolation_type](/docs/dpf/dpf-framework/operator-specifications/utility/compute_time_scoping) |  |[`int32`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
| <strong>8</strong> | [time_freq_support](/docs/dpf/dpf-framework/operator-specifications/utility/compute_time_scoping) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`time_freq_support`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |


<a id="input_0"></a>
### time_freq_values (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`double`](/docs/dpf/dpf-framework/core-concepts/dpf-types), [`vector&lt;double&gt;`](/docs/dpf/dpf-framework/core-concepts/dpf-types), [`field`](/docs/dpf/dpf-framework/core-concepts/dpf-types), [`time_freq_support`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

List of frequencies or times needed. To specify load steps, put a field (and not a list) in input with a scoping located on "TimeFreq_steps".

<a id="input_2"></a>
### step (Pin 2)

- **Required:** No
- **Expected type(s):** [`int32`](/docs/dpf/dpf-framework/core-concepts/dpf-types)



<a id="input_4"></a>
### interpolation_type (Pin 4)

- **Required:** No
- **Expected type(s):** [`int32`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

1:ramped' or 2:stepped', default is ramped

<a id="input_8"></a>
### time_freq_support (Pin 8)

- **Required:** Yes
- **Expected type(s):** [`time_freq_support`](/docs/dpf/dpf-framework/core-concepts/dpf-types)




## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [scoping](/docs/dpf/dpf-framework/operator-specifications/utility/compute_time_scoping) |[`scoping`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
|  **1**| [field](/docs/dpf/dpf-framework/operator-specifications/utility/compute_time_scoping) |[`field`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |


<a id="output_0"></a>
### scoping (Pin 0)

- **Expected type(s):** [`scoping`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

time_scoping

<a id="output_1"></a>
### field (Pin 1)

- **Expected type(s):** [`field`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

time_freq_values


## Configurations

This operator supports [configuration options](/docs/dpf/dpf-framework/core-concepts/operator-configurations) that modify its behavior.


### [mutex](/docs/dpf/dpf-framework/core-concepts/operator-configurations)

- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/core-concepts/dpf-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: utility

 **Plugin**: core

 **Scripting name**: None

 **Full name**: None

 **Internal name**: compute_time_scoping

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("compute_time_scoping"); // operator instantiation
op.connect(0, my_time_freq_values);
op.connect(2, my_step);
op.connect(4, my_interpolation_type);
op.connect(8, my_time_freq_support);
ansys::dpf::Scoping my_scoping = op.getOutput<ansys::dpf::Scoping>(0);
ansys::dpf::Field my_field = op.getOutput<ansys::dpf::Field>(1);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.utility.None() # operator instantiation
op.inputs.time_freq_values.connect(my_time_freq_values)
op.inputs.step.connect(my_step)
op.inputs.interpolation_type.connect(my_interpolation_type)
op.inputs.time_freq_support.connect(my_time_freq_support)
my_scoping = op.outputs.scoping()
my_field = op.outputs.field()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.utility.None() # operator instantiation
op.inputs.time_freq_values.Connect(my_time_freq_values)
op.inputs.step.Connect(my_step)
op.inputs.interpolation_type.Connect(my_interpolation_type)
op.inputs.time_freq_support.Connect(my_time_freq_support)
my_scoping = op.outputs.scoping.GetData()
my_field = op.outputs.field.GetData()
```
</details>
<br />

## Changelog

- Version 0.0.0: Initial release.