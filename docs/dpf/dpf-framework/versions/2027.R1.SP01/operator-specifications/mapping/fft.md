---
category: mapping
plugin: core
license: None
---

# mapping:fft

**Version: 0.0.0**

## Description

Computes the Fast Fourier Transform on each component of input Field or each field of input Fields Container (you can use transpose_fields_container to have relevant scoping). Fields are assumed with the same scoping, number of components and representing equally spaced data, ideally resampled to have a 2^n points (prepare_sampling_fft with time_freq_interpolation can help creating these fields). If Complex label is present, Complex to Complex FFT performed otherwise Real to Complex is performed (only half of the coefficient will be returned).

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [field](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/mapping/fft) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`field`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types), [`fields_container`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types) |
| <strong>3</strong> | [scale_forward_transform](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/mapping/fft) |  |[`double`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types) |
| <strong>4</strong> | [inplace](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/mapping/fft) |  |[`bool`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types) |
| <strong>5</strong> | [force_fft_points](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/mapping/fft) |  |[`int32`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types) |
| <strong>6</strong> | [cutoff_frequency](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/mapping/fft) |  |[`double`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types) |
| <strong>7</strong> | [scale_right_amplitude](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/mapping/fft) |  |[`bool`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types) |


<a id="input_0"></a>
### field (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`field`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types), [`fields_container`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)

Field or Fields Container.

<a id="input_3"></a>
### scale_forward_transform (Pin 3)

- **Required:** No
- **Expected type(s):** [`double`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)

Scale for Forward Transform, default is 2/field_num_elementary_data.

<a id="input_4"></a>
### inplace (Pin 4)

- **Required:** No
- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)

True if inplace, default is false.

<a id="input_5"></a>
### force_fft_points (Pin 5)

- **Required:** No
- **Expected type(s):** [`int32`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)

Explicitely define number of fft points to either rescope or perform zero padding.

<a id="input_6"></a>
### cutoff_frequency (Pin 6)

- **Required:** No
- **Expected type(s):** [`double`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)

Restrict output frequency up to this cutoff frequency

<a id="input_7"></a>
### scale_right_amplitude (Pin 7)

- **Required:** No
- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)

If set to true (default is false), 2/field_num_entities scaling will be applied, to have right amplitude values.


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [fields_container](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/mapping/fft) |[`fields_container`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types) |


<a id="output_0"></a>
### fields_container (Pin 0)

- **Expected type(s):** [`fields_container`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)

Output Complex Fields Container with labels matching input Fields Container. No supports binded, but prepare_sampling_fft provides it.


## Configurations

This operator supports [configuration options](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/operator-configurations) that modify its behavior.


### [mutex](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/operator-configurations)

- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: mapping

 **Plugin**: core

 **Scripting name**: fft

 **Full name**: mapping.fft

 **Internal name**: fft

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("fft"); // operator instantiation
op.connect(0, my_field);
op.connect(3, my_scale_forward_transform);
op.connect(4, my_inplace);
op.connect(5, my_force_fft_points);
op.connect(6, my_cutoff_frequency);
op.connect(7, my_scale_right_amplitude);
ansys::dpf::FieldsContainer my_fields_container = op.getOutput<ansys::dpf::FieldsContainer>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.mapping.fft() # operator instantiation
op.inputs.field.connect(my_field)
op.inputs.scale_forward_transform.connect(my_scale_forward_transform)
op.inputs.inplace.connect(my_inplace)
op.inputs.force_fft_points.connect(my_force_fft_points)
op.inputs.cutoff_frequency.connect(my_cutoff_frequency)
op.inputs.scale_right_amplitude.connect(my_scale_right_amplitude)
my_fields_container = op.outputs.fields_container()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.mapping.fft() # operator instantiation
op.inputs.field.Connect(my_field)
op.inputs.scale_forward_transform.Connect(my_scale_forward_transform)
op.inputs.inplace.Connect(my_inplace)
op.inputs.force_fft_points.Connect(my_force_fft_points)
op.inputs.cutoff_frequency.Connect(my_cutoff_frequency)
op.inputs.scale_right_amplitude.Connect(my_scale_right_amplitude)
my_fields_container = op.outputs.fields_container.GetData()
```
</details>
<br />

## Changelog

- Version 0.0.0: Initial release.