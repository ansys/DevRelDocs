---
category: filter
plugin: core
license: any_dpf_supported_increments
---

# filter:abc weightings

**Version: 0.0.0**

## Description

Computes ABC-weightings for the amplitude spectrum in dB units.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [fields_container](#input_0) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
| <strong>1</strong> | [weighting_type](#input_1) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`int32`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>2</strong> | [shape_by_tf_scoping](#input_2) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`bool`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_0"></a>
### fields_container (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

data to be weighted in dB units equipped with cumulative ids in the scoping.

<a id="input_1"></a>
### weighting_type (Pin 1)

- **Required:** Yes
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)

if this pin is set to 0, the A-weighting is computed, 1 the B-weigting is computed and 2 the C-weightings is computed.

<a id="input_2"></a>
### shape_by_tf_scoping (Pin 2)

- **Required:** Yes
- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)

if this pin is set to true, each field of the input fields container is defined by time freq scoping and not by ids. Default is false


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [weightings](#output_0) |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |


<a id="output_0"></a>
### weightings (Pin 0)

- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

weighted data in dB units.


## Configurations

This operator supports [configuration options](../../core-concepts/operator-configurations.md) that modify its behavior.


### [inplace](../../core-concepts/operator-configurations.md#inplace)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

The output is written over the input to save memory if this config is set to true.

### [mutex](../../core-concepts/operator-configurations.md#mutex)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: filter

 **Plugin**: core

 **Scripting name**: abc_weightings

 **Full name**: filter.abc_weightings

 **Internal name**: abc_weightings

 **License**: any_dpf_supported_increments

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("abc_weightings"); // operator instantiation
op.connect(0, my_fields_container);
op.connect(1, my_weighting_type);
op.connect(2, my_shape_by_tf_scoping);
ansys::dpf::FieldsContainer my_weightings = op.getOutput<ansys::dpf::FieldsContainer>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.filter.abc_weightings() # operator instantiation
op.inputs.fields_container.connect(my_fields_container)
op.inputs.weighting_type.connect(my_weighting_type)
op.inputs.shape_by_tf_scoping.connect(my_shape_by_tf_scoping)
my_weightings = op.outputs.weightings()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.filter.abc_weightings() # operator instantiation
op.inputs.fields_container.Connect(my_fields_container)
op.inputs.weighting_type.Connect(my_weighting_type)
op.inputs.shape_by_tf_scoping.Connect(my_shape_by_tf_scoping)
my_weightings = op.outputs.weightings.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.