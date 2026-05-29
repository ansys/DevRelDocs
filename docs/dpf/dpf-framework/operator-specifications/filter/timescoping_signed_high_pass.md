---
category: filter
plugin: core
license: any_dpf_supported_increments
---

# filter:signed high pass (timescoping)

**Version: 0.0.0**

## Description

The high pass filter returns all the values above, or equal, in absolute value to the threshold value in input.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [time_freq_support](/docs/dpf/dpf-framework/operator-specifications/filter/timescoping_signed_high_pass) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`time_freq_support`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
| <strong>1</strong> | [threshold](/docs/dpf/dpf-framework/operator-specifications/filter/timescoping_signed_high_pass) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`double`](/docs/dpf/dpf-framework/core-concepts/dpf-types), [`field`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
| <strong>2</strong> | [both](/docs/dpf/dpf-framework/operator-specifications/filter/timescoping_signed_high_pass) |  |[`bool`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |


<a id="input_0"></a>
### time_freq_support (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`time_freq_support`](/docs/dpf/dpf-framework/core-concepts/dpf-types)



<a id="input_1"></a>
### threshold (Pin 1)

- **Required:** Yes
- **Expected type(s):** [`double`](/docs/dpf/dpf-framework/core-concepts/dpf-types), [`field`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

A threshold scalar or a field containing one value is expected.

<a id="input_2"></a>
### both (Pin 2)

- **Required:** No
- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

The default is false. If set to true, the complement of the filtered fields container is returned on output pin 1.


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [scoping](/docs/dpf/dpf-framework/operator-specifications/filter/timescoping_signed_high_pass) |[`scoping`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |


<a id="output_0"></a>
### scoping (Pin 0)

- **Expected type(s):** [`scoping`](/docs/dpf/dpf-framework/core-concepts/dpf-types)




## Configurations

This operator supports [configuration options](/docs/dpf/dpf-framework/core-concepts/operator-configurations) that modify its behavior.


### [mutex](/docs/dpf/dpf-framework/core-concepts/operator-configurations)

- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/core-concepts/dpf-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: filter

 **Plugin**: core

 **Scripting name**: timescoping_signed_high_pass

 **Full name**: filter.timescoping_signed_high_pass

 **Internal name**: core::timescoping::signed_high_pass

 **License**: any_dpf_supported_increments

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("core::timescoping::signed_high_pass"); // operator instantiation
op.connect(0, my_time_freq_support);
op.connect(1, my_threshold);
op.connect(2, my_both);
ansys::dpf::Scoping my_scoping = op.getOutput<ansys::dpf::Scoping>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.filter.timescoping_signed_high_pass() # operator instantiation
op.inputs.time_freq_support.connect(my_time_freq_support)
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

op = dpf.operators.filter.timescoping_signed_high_pass() # operator instantiation
op.inputs.time_freq_support.Connect(my_time_freq_support)
op.inputs.threshold.Connect(my_threshold)
op.inputs.both.Connect(my_both)
my_scoping = op.outputs.scoping.GetData()
```
</details>
<br />

## Changelog

- Version 0.0.0: Initial release.