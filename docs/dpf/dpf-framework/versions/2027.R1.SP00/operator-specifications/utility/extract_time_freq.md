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

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [time_freq_support](#input_0) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`time_freq_support`](../../core-concepts/dpf-types.md#time-freq-support) |
| <strong>1</strong> | [time_scoping](#input_1) |  |[`scoping`](../../core-concepts/dpf-types.md#scoping) |
| <strong>2</strong> | [real_or_complex](#input_2) |  |[`bool`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_0"></a>
### time_freq_support (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`time_freq_support`](../../core-concepts/dpf-types.md#time-freq-support)



<a id="input_1"></a>
### time_scoping (Pin 1)

- **Required:** No
- **Expected type(s):** [`scoping`](../../core-concepts/dpf-types.md#scoping)



<a id="input_2"></a>
### real_or_complex (Pin 2)

- **Required:** No
- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)

False for real only (default). True for complex output.


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [field](#output_0) |[`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container) |


<a id="output_0"></a>
### field (Pin 0)

- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container)




## Configurations

This operator supports [configuration options](../../core-concepts/operator-configurations.md) that modify its behavior.


### [mutex](../../core-concepts/operator-configurations.md#mutex)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: utility

 **Plugin**: core

 **Scripting name**: extract_time_freq

 **Full name**: utility.extract_time_freq

 **Internal name**: extract_time_freq

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

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