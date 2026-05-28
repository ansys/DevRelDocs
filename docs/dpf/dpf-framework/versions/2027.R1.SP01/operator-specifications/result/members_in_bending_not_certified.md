---
category: result
plugin: core
license: any_dpf_supported_increments
---

# result:members in bending not certified

**Version: 0.0.0**

## Description

This operator is a non-certified example of buckling resistance verification for the bending members. It is only provided as an example if you want to develop your own compute norm operator. The results computed by this beta operator have not been certified by ANSYS. ANSYS declines all responsibility for the use of this operator. HATS Beam and irregular beams (unequal I-Beam, not-square Channel-Beam, not-square Angle L-beam, unequal hollow rectangular beam) not supported.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [time_scoping](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/result/members_in_bending_not_certified) |  |[`scoping`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types), [`vector&lt;int32&gt;`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types), [`int32`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types) |
| <strong>1</strong> | [field_yield_strength](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/result/members_in_bending_not_certified) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`field`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types) |
| <strong>2</strong> | [class_cross_section](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/result/members_in_bending_not_certified) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`bool`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types) |
| <strong>3</strong> | [streams](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/result/members_in_bending_not_certified) |  |[`streams_container`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types) |
| <strong>4</strong> | [data_sources](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/result/members_in_bending_not_certified) |  |[`data_sources`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types) |
| <strong>6</strong> | [partial_factor](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/result/members_in_bending_not_certified) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`double`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types) |
| <strong>7</strong> | [mesh](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/result/members_in_bending_not_certified) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`abstract_meshed_region`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types) |
| <strong>8</strong> | [bending_moment_y](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/result/members_in_bending_not_certified) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`fields_container`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types) |
| <strong>9</strong> | [bending_moment_z](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/result/members_in_bending_not_certified) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`fields_container`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types) |


<a id="input_0"></a>
### time_scoping (Pin 0)

- **Required:** No
- **Expected type(s):** [`scoping`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types), [`vector&lt;int32&gt;`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types), [`int32`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)



<a id="input_1"></a>
### field_yield_strength (Pin 1)

- **Required:** Yes
- **Expected type(s):** [`field`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)

This pin contains field of beam's Yield Strength defined by the user.

<a id="input_2"></a>
### class_cross_section (Pin 2)

- **Required:** Yes
- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)

Selection for a cross-section. True: Class 1 or 2 cross-sections. False: Class 3 cross section. If the user defines the cross section as class 1 or 2, the section modulus would be plastic section modulus. If it's class 3- cross section,the section modulus would be elastic section modulus

<a id="input_3"></a>
### streams (Pin 3)

- **Required:** No
- **Expected type(s):** [`streams_container`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)

 result file container allowed to be kept open to cache data.

<a id="input_4"></a>
### data_sources (Pin 4)

- **Required:** No
- **Expected type(s):** [`data_sources`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)

result file path container, used if no streams are set.

<a id="input_6"></a>
### partial_factor (Pin 6)

- **Required:** Yes
- **Expected type(s):** [`double`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)

partial safety factor for resistance of members to instability assessed by member checks. Default value: 1.

<a id="input_7"></a>
### mesh (Pin 7)

- **Required:** Yes
- **Expected type(s):** [`abstract_meshed_region`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)

 Mesh containing beam's properties defined by user

<a id="input_8"></a>
### bending_moment_y (Pin 8)

- **Required:** Yes
- **Expected type(s):** [`fields_container`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)

Fields Container of bending moment on axis y defined by user

<a id="input_9"></a>
### bending_moment_z (Pin 9)

- **Required:** Yes
- **Expected type(s):** [`fields_container`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)

Fields Container of bending moment on axis z defined by user


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [buckling_resistance_bending_yy](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/result/members_in_bending_not_certified) |[`fields_container`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types) |
|  **1**| [buckling_resistance_bending_zz](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/result/members_in_bending_not_certified) |[`fields_container`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types) |


<a id="output_0"></a>
### buckling_resistance_bending_yy (Pin 0)

- **Expected type(s):** [`fields_container`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)

Fields Container of buckling resistance factor on axis y-y in case of bending(M). These factors should be less than 1 and positive.

<a id="output_1"></a>
### buckling_resistance_bending_zz (Pin 1)

- **Expected type(s):** [`fields_container`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)

Fields Container of buckling resistance factor on axis z-z in case of bending(M). These factors should be less than 1 and positive.


## Configurations

This operator supports [configuration options](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/operator-configurations) that modify its behavior.


### [mutex](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/operator-configurations)

- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: result

 **Plugin**: core

 **Scripting name**: members_in_bending_not_certified

 **Full name**: result.members_in_bending_not_certified

 **Internal name**: members_in_bending_not_certified

 **License**: any_dpf_supported_increments

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("members_in_bending_not_certified"); // operator instantiation
op.connect(0, my_time_scoping);
op.connect(1, my_field_yield_strength);
op.connect(2, my_class_cross_section);
op.connect(3, my_streams);
op.connect(4, my_data_sources);
op.connect(6, my_partial_factor);
op.connect(7, my_mesh);
op.connect(8, my_bending_moment_y);
op.connect(9, my_bending_moment_z);
ansys::dpf::FieldsContainer my_buckling_resistance_bending_yy = op.getOutput<ansys::dpf::FieldsContainer>(0);
ansys::dpf::FieldsContainer my_buckling_resistance_bending_zz = op.getOutput<ansys::dpf::FieldsContainer>(1);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.result.members_in_bending_not_certified() # operator instantiation
op.inputs.time_scoping.connect(my_time_scoping)
op.inputs.field_yield_strength.connect(my_field_yield_strength)
op.inputs.class_cross_section.connect(my_class_cross_section)
op.inputs.streams.connect(my_streams)
op.inputs.data_sources.connect(my_data_sources)
op.inputs.partial_factor.connect(my_partial_factor)
op.inputs.mesh.connect(my_mesh)
op.inputs.bending_moment_y.connect(my_bending_moment_y)
op.inputs.bending_moment_z.connect(my_bending_moment_z)
my_buckling_resistance_bending_yy = op.outputs.buckling_resistance_bending_yy()
my_buckling_resistance_bending_zz = op.outputs.buckling_resistance_bending_zz()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.result.members_in_bending_not_certified() # operator instantiation
op.inputs.time_scoping.Connect(my_time_scoping)
op.inputs.field_yield_strength.Connect(my_field_yield_strength)
op.inputs.class_cross_section.Connect(my_class_cross_section)
op.inputs.streams.Connect(my_streams)
op.inputs.data_sources.Connect(my_data_sources)
op.inputs.partial_factor.Connect(my_partial_factor)
op.inputs.mesh.Connect(my_mesh)
op.inputs.bending_moment_y.Connect(my_bending_moment_y)
op.inputs.bending_moment_z.Connect(my_bending_moment_z)
my_buckling_resistance_bending_yy = op.outputs.buckling_resistance_bending_yy.GetData()
my_buckling_resistance_bending_zz = op.outputs.buckling_resistance_bending_zz.GetData()
```
</details>
<br />

## Changelog

- Version 0.0.0: Initial release.