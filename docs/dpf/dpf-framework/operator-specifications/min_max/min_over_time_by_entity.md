---
category: min_max
plugin: core
license: None
---

# min_max:min over time

**Version: 0.0.0**

## Description

Evaluates minimum over time/frequency.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [fields_container](/docs/dpf/dpf-framework/operator-specifications/min_max/min_over_time_by_entity) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`fields_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
| <strong>3</strong> | [abs_value](/docs/dpf/dpf-framework/operator-specifications/min_max/min_over_time_by_entity) |  |[`bool`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
| <strong>4</strong> | [compute_amplitude](/docs/dpf/dpf-framework/operator-specifications/min_max/min_over_time_by_entity) |  |[`bool`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |


<a id="input_0"></a>
### fields_container (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`fields_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types)



<a id="input_3"></a>
### abs_value (Pin 3)

- **Required:** No
- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

Should use absolute value.

<a id="input_4"></a>
### compute_amplitude (Pin 4)

- **Required:** No
- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

Do calculate amplitude.


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [fields_container](/docs/dpf/dpf-framework/operator-specifications/min_max/min_over_time_by_entity) |[`fields_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |


<a id="output_0"></a>
### fields_container (Pin 0)

- **Expected type(s):** [`fields_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types)




## Configurations

This operator supports [configuration options](/docs/dpf/dpf-framework/core-concepts/operator-configurations) that modify its behavior.


### [incremental](/docs/dpf/dpf-framework/core-concepts/operator-configurations)

- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/core-concepts/dpf-types)
- **Default value:** true

This operator can be run several times with different inputs so that the output will take all the inputs of the different runs into account. It can be used to save memory. For example, a large time scoping can be split in smaller ranges of time to compute the result range by range.

### [mutex](/docs/dpf/dpf-framework/core-concepts/operator-configurations)

- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/core-concepts/dpf-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: min_max

 **Plugin**: core

 **Scripting name**: None

 **Full name**: None

 **Internal name**: min_over_time_by_entity

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("min_over_time_by_entity"); // operator instantiation
op.connect(0, my_fields_container);
op.connect(3, my_abs_value);
op.connect(4, my_compute_amplitude);
ansys::dpf::FieldsContainer my_fields_container = op.getOutput<ansys::dpf::FieldsContainer>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.min_max.None() # operator instantiation
op.inputs.fields_container.connect(my_fields_container)
op.inputs.abs_value.connect(my_abs_value)
op.inputs.compute_amplitude.connect(my_compute_amplitude)
my_fields_container = op.outputs.fields_container()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.min_max.None() # operator instantiation
op.inputs.fields_container.Connect(my_fields_container)
op.inputs.abs_value.Connect(my_abs_value)
op.inputs.compute_amplitude.Connect(my_compute_amplitude)
my_fields_container = op.outputs.fields_container.GetData()
```
</details>
<br />

## Changelog

- Version 0.0.0: Initial release.