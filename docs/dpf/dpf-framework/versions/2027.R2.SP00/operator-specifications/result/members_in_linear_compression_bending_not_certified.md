---
category: result
plugin: core
license: any_dpf_supported_increments
---

# result:members in linear compression bending not certified

**Version: 0.0.0**

## Description

This operator is a non-certified example of buckling resistance verification for the compression and bending members for Class I, 2 and 3 cross-sections. It is only provided as an example if you want to develop your own compute norm operator. This norm is linear summation of the utilization ratios of compression members and bending members. The results computed by this beta operator have not been certified by ANSYS. ANSYS declines all responsibility for the use of this operator.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [time_scoping](#input_0) |  |[`scoping`](../../core-concepts/dpf-types.md#scoping), [`vector<int32>`](../../core-concepts/dpf-types.md#standard-types), [`int32`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>1</strong> | [field_yield_strength](#input_1) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`field`](../../core-concepts/dpf-types.md#field) |
| <strong>2</strong> | [field_end_condition](#input_2) |  |[`data_sources`](../../core-concepts/dpf-types.md#data-sources), [`field`](../../core-concepts/dpf-types.md#field) |
| <strong>3</strong> | [streams](#input_3) |  |[`streams_container`](../../core-concepts/dpf-types.md#streams-container) |
| <strong>4</strong> | [data_sources](#input_4) |  |[`data_sources`](../../core-concepts/dpf-types.md#data-sources) |
| <strong>5</strong> | [manufacture](#input_5) |  |[`bool`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>6</strong> | [partial_factor](#input_6) |  |[`double`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>7</strong> | [mesh](#input_7) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |
| <strong>8</strong> | [bending_moment_y](#input_8) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
| <strong>9</strong> | [bending_moment_z](#input_9) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
| <strong>10</strong> | [axial_force](#input_10) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
| <strong>11</strong> | [class_cross_section](#input_11) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`bool`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>12</strong> | [fabrication_type](#input_12) |  |[`bool`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_0"></a>
### time_scoping (Pin 0)

- **Required:** No
- **Expected type(s):** [`scoping`](../../core-concepts/dpf-types.md#scoping), [`vector<int32>`](../../core-concepts/dpf-types.md#standard-types), [`int32`](../../core-concepts/dpf-types.md#standard-types)



<a id="input_1"></a>
### field_yield_strength (Pin 1)

- **Required:** Yes
- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)

This pin contains field of beam's Yield Strength defined by the user.

<a id="input_2"></a>
### field_end_condition (Pin 2)

- **Required:** No
- **Expected type(s):** [`data_sources`](../../core-concepts/dpf-types.md#data-sources), [`field`](../../core-concepts/dpf-types.md#field)

This pin contains file csv or field of beam's end condition defined by the user. If no input at this pin found, it would take end conditions value of all beams as 1

<a id="input_3"></a>
### streams (Pin 3)

- **Required:** No
- **Expected type(s):** [`streams_container`](../../core-concepts/dpf-types.md#streams-container)

 result file container allowed to be kept open to cache data.

<a id="input_4"></a>
### data_sources (Pin 4)

- **Required:** No
- **Expected type(s):** [`data_sources`](../../core-concepts/dpf-types.md#data-sources)

result file path container, used if no streams are set.

<a id="input_5"></a>
### manufacture (Pin 5)

- **Required:** No
- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)

Manufacturing processus:hot finished if TRUE or cold formed if FALSE. Default value : hot finished.

<a id="input_6"></a>
### partial_factor (Pin 6)

- **Required:** No
- **Expected type(s):** [`double`](../../core-concepts/dpf-types.md#standard-types)

partial factor for resistance of members to instability assessed by member checks. Default value: 1.0

<a id="input_7"></a>
### mesh (Pin 7)

- **Required:** Yes
- **Expected type(s):** [`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region)

 Mesh containing beam's properties defined by user

<a id="input_8"></a>
### bending_moment_y (Pin 8)

- **Required:** Yes
- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

Fields Container of bending moment on axis y defined by user

<a id="input_9"></a>
### bending_moment_z (Pin 9)

- **Required:** Yes
- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

Fields Container of bending moment on axis z defined by user

<a id="input_10"></a>
### axial_force (Pin 10)

- **Required:** Yes
- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

Fields Container of axial force defined by user

<a id="input_11"></a>
### class_cross_section (Pin 11)

- **Required:** Yes
- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)

Selection for a cross-section. True: Class 1 or 2 cross-sections. False: Class 3 cross section. If the user defines the cross section as class 1 or 2, the section modulus would be plastic section modulus. If it's class 3- cross section,the section modulus would be elastic section modulus

<a id="input_12"></a>
### fabrication_type (Pin 12)

- **Required:** No
- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)

Selection of fabrication's type if there are beams I in the structure. TRUE: Rolled Section, False: Welded Section. Default: Rolled Section.


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [buckling_resistance_linear_summation_utilization_ratios](#output_0) |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |


<a id="output_0"></a>
### buckling_resistance_linear_summation_utilization_ratios (Pin 0)

- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

Linear summation of the utilization ratios in all members submitted under a combination of both bending and compression. These factors should be less than 1 and positive.


## Configurations

This operator supports [configuration options](../../core-concepts/operator-configurations.md) that modify its behavior.


### [mutex](../../core-concepts/operator-configurations.md#mutex)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: result

 **Plugin**: core

 **Scripting name**: members_in_linear_compression_bending_not_certified

 **Full name**: result.members_in_linear_compression_bending_not_certified

 **Internal name**: members_in_linear_compression_bending_not_certified

 **License**: any_dpf_supported_increments

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("members_in_linear_compression_bending_not_certified"); // operator instantiation
op.connect(0, my_time_scoping);
op.connect(1, my_field_yield_strength);
op.connect(2, my_field_end_condition);
op.connect(3, my_streams);
op.connect(4, my_data_sources);
op.connect(5, my_manufacture);
op.connect(6, my_partial_factor);
op.connect(7, my_mesh);
op.connect(8, my_bending_moment_y);
op.connect(9, my_bending_moment_z);
op.connect(10, my_axial_force);
op.connect(11, my_class_cross_section);
op.connect(12, my_fabrication_type);
ansys::dpf::FieldsContainer my_buckling_resistance_linear_summation_utilization_ratios = op.getOutput<ansys::dpf::FieldsContainer>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.result.members_in_linear_compression_bending_not_certified() # operator instantiation
op.inputs.time_scoping.connect(my_time_scoping)
op.inputs.field_yield_strength.connect(my_field_yield_strength)
op.inputs.field_end_condition.connect(my_field_end_condition)
op.inputs.streams.connect(my_streams)
op.inputs.data_sources.connect(my_data_sources)
op.inputs.manufacture.connect(my_manufacture)
op.inputs.partial_factor.connect(my_partial_factor)
op.inputs.mesh.connect(my_mesh)
op.inputs.bending_moment_y.connect(my_bending_moment_y)
op.inputs.bending_moment_z.connect(my_bending_moment_z)
op.inputs.axial_force.connect(my_axial_force)
op.inputs.class_cross_section.connect(my_class_cross_section)
op.inputs.fabrication_type.connect(my_fabrication_type)
my_buckling_resistance_linear_summation_utilization_ratios = op.outputs.buckling_resistance_linear_summation_utilization_ratios()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.result.members_in_linear_compression_bending_not_certified() # operator instantiation
op.inputs.time_scoping.Connect(my_time_scoping)
op.inputs.field_yield_strength.Connect(my_field_yield_strength)
op.inputs.field_end_condition.Connect(my_field_end_condition)
op.inputs.streams.Connect(my_streams)
op.inputs.data_sources.Connect(my_data_sources)
op.inputs.manufacture.Connect(my_manufacture)
op.inputs.partial_factor.Connect(my_partial_factor)
op.inputs.mesh.Connect(my_mesh)
op.inputs.bending_moment_y.Connect(my_bending_moment_y)
op.inputs.bending_moment_z.Connect(my_bending_moment_z)
op.inputs.axial_force.Connect(my_axial_force)
op.inputs.class_cross_section.Connect(my_class_cross_section)
op.inputs.fabrication_type.Connect(my_fabrication_type)
my_buckling_resistance_linear_summation_utilization_ratios = op.outputs.buckling_resistance_linear_summation_utilization_ratios.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.