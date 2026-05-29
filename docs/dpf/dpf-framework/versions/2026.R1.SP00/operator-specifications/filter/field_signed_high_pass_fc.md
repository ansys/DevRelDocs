---
category: filter
plugin: core
license: any_dpf_supported_increments
---

# filter:signed high pass (fields container)

**Version: 0.0.0**

## Description

The high pass filter returns all the values above, or equal, in absolute value to the threshold value in input.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [fields_container](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/filter/field_signed_high_pass_fc) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`fields_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |
| <strong>1</strong> | [threshold](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/filter/field_signed_high_pass_fc) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`double`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types), [`field`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |
| <strong>2</strong> | [both](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/filter/field_signed_high_pass_fc) |  |[`bool`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |


<a id="input_0"></a>
### fields_container (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`fields_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)

field or fields container with only one field is expected

<a id="input_1"></a>
### threshold (Pin 1)

- **Required:** Yes
- **Expected type(s):** [`double`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types), [`field`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)

A threshold scalar or a field containing one value is expected.

<a id="input_2"></a>
### both (Pin 2)

- **Required:** No
- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)

The default is false. If set to true, the complement of the filtered fields container is returned on output pin 1.


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [fields_container](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/filter/field_signed_high_pass_fc) |[`fields_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |


<a id="output_0"></a>
### fields_container (Pin 0)

- **Expected type(s):** [`fields_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)




## Configurations

This operator supports [configuration options](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/operator-configurations) that modify its behavior.


### [mutex](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/operator-configurations)

- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: filter

 **Plugin**: core

 **Scripting name**: field_signed_high_pass_fc

 **Full name**: filter.field_signed_high_pass_fc

 **Internal name**: core::field::signed_high_pass_fc

 **License**: any_dpf_supported_increments

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("core::field::signed_high_pass_fc"); // operator instantiation
op.connect(0, my_fields_container);
op.connect(1, my_threshold);
op.connect(2, my_both);
ansys::dpf::FieldsContainer my_fields_container = op.getOutput<ansys::dpf::FieldsContainer>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.filter.field_signed_high_pass_fc() # operator instantiation
op.inputs.fields_container.connect(my_fields_container)
op.inputs.threshold.connect(my_threshold)
op.inputs.both.connect(my_both)
my_fields_container = op.outputs.fields_container()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.filter.field_signed_high_pass_fc() # operator instantiation
op.inputs.fields_container.Connect(my_fields_container)
op.inputs.threshold.Connect(my_threshold)
op.inputs.both.Connect(my_both)
my_fields_container = op.outputs.fields_container.GetData()
```
</details>
<br />

## Changelog

- Version 0.0.0: Initial release.