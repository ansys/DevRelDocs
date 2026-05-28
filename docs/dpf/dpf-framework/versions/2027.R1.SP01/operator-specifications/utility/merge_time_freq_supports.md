---
category: utility
plugin: core
license: None
---

# utility:merge time freq supports

**Version: 0.0.0**

## Description

Assembles a set of time/frequency supports into a unique one.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [time_freq_supports](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/utility/merge_time_freq_supports) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|`vector<shared_ptr&lt;time_freq_support&gt;>`, [`time_freq_support`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types) |


<a id="input_0"></a>
### time_freq_supports (Pin 0)

- **Required:** Yes
- **Expected type(s):** `vector<shared_ptr&lt;time_freq_support&gt;>`, [`time_freq_support`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)

A vector of time/frequency supports to merge or time/frequency supports from pin 0 to ...


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [merged_support](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/utility/merge_time_freq_supports) |[`time_freq_support`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types) |


<a id="output_0"></a>
### merged_support (Pin 0)

- **Expected type(s):** [`time_freq_support`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)




## Configurations

This operator supports [configuration options](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/operator-configurations) that modify its behavior.


### [mutex](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/operator-configurations)

- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: utility

 **Plugin**: core

 **Scripting name**: merge_time_freq_supports

 **Full name**: utility.merge_time_freq_supports

 **Internal name**: merge::time_freq_support

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("merge::time_freq_support"); // operator instantiation
op.connect(0, my_time_freq_supports);
ansys::dpf::TimeFreqSupport my_merged_support = op.getOutput<ansys::dpf::TimeFreqSupport>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.utility.merge_time_freq_supports() # operator instantiation
op.inputs.time_freq_supports1.connect(my_time_freq_supports1)
op.inputs.time_freq_supports2.connect(my_time_freq_supports2)
my_merged_support = op.outputs.merged_support()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.utility.merge_time_freq_supports() # operator instantiation
op.inputs.time_freq_supports.Connect(my_time_freq_supports)
my_merged_support = op.outputs.merged_support.GetData()
```
</details>
<br />

## Changelog

- Version 0.0.0: Initial release.