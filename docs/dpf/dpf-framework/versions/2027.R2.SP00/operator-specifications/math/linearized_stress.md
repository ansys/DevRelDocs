---
category: math
plugin: core
license: any_dpf_supported_increments
---

# math:linearized_stress

**Version: 0.0.0**

## Description

get linearized stress

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [stress_comps](#input_0) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
| <strong>1</strong> | [iComp](#input_1) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`int32`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>2</strong> | [path_coords](#input_2) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`field`](../../core-concepts/dpf-types.md#field) |
| <strong>3</strong> | [rho](#input_3) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`double`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>4</strong> | [kbr](#input_4) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`int32`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>5</strong> | [ksxbzro](#input_5) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`int32`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>6</strong> | [out_type](#input_6) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`int32`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_0"></a>
### stress_comps (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

Stress tensor components evaluated at path points

<a id="input_1"></a>
### iComp (Pin 1)

- **Required:** Yes
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)

Stress component index to linearize

<a id="input_2"></a>
### path_coords (Pin 2)

- **Required:** Yes
- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)

Path point coordinates

<a id="input_3"></a>
### rho (Pin 3)

- **Required:** Yes
- **Expected type(s):** [`double`](../../core-concepts/dpf-types.md#standard-types)

Optional geometric parameter

<a id="input_4"></a>
### kbr (Pin 4)

- **Required:** Yes
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)

Option flag controlling bending/reference behavior

<a id="input_5"></a>
### ksxbzro (Pin 5)

- **Required:** Yes
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)

Option flag controlling coordinate/zero-reference handling

<a id="input_6"></a>
### out_type (Pin 6)

- **Required:** Yes
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)

Requested linearized stress output type.


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [linearized_stress_results](#output_0) |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
|  **1**| [linearized_stress_all_results](#output_1) |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
|  **2**| [linearized_stress_params](#output_2) |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |


<a id="output_0"></a>
### linearized_stress_results (Pin 0)

- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

Selected linearized stress results for the requested output type

<a id="output_1"></a>
### linearized_stress_all_results (Pin 1)

- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

All linearized stress result types computed along the path

<a id="output_2"></a>
### linearized_stress_params (Pin 2)

- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

Linearization parameters and metadata


## Configurations

This operator supports [configuration options](../../core-concepts/operator-configurations.md) that modify its behavior.


### [mutex](../../core-concepts/operator-configurations.md#mutex)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: math

 **Plugin**: core

 **Scripting name**: linearized_stress

 **Full name**: math.linearized_stress

 **Internal name**: mechanical::linearized_stress_op

 **License**: any_dpf_supported_increments

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("mechanical::linearized_stress_op"); // operator instantiation
op.connect(0, my_stress_comps);
op.connect(1, my_iComp);
op.connect(2, my_path_coords);
op.connect(3, my_rho);
op.connect(4, my_kbr);
op.connect(5, my_ksxbzro);
op.connect(6, my_out_type);
ansys::dpf::FieldsContainer my_linearized_stress_results = op.getOutput<ansys::dpf::FieldsContainer>(0);
ansys::dpf::FieldsContainer my_linearized_stress_all_results = op.getOutput<ansys::dpf::FieldsContainer>(1);
ansys::dpf::FieldsContainer my_linearized_stress_params = op.getOutput<ansys::dpf::FieldsContainer>(2);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.math.linearized_stress() # operator instantiation
op.inputs.stress_comps.connect(my_stress_comps)
op.inputs.iComp.connect(my_iComp)
op.inputs.path_coords.connect(my_path_coords)
op.inputs.rho.connect(my_rho)
op.inputs.kbr.connect(my_kbr)
op.inputs.ksxbzro.connect(my_ksxbzro)
op.inputs.out_type.connect(my_out_type)
my_linearized_stress_results = op.outputs.linearized_stress_results()
my_linearized_stress_all_results = op.outputs.linearized_stress_all_results()
my_linearized_stress_params = op.outputs.linearized_stress_params()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.math.linearized_stress() # operator instantiation
op.inputs.stress_comps.Connect(my_stress_comps)
op.inputs.iComp.Connect(my_iComp)
op.inputs.path_coords.Connect(my_path_coords)
op.inputs.rho.Connect(my_rho)
op.inputs.kbr.Connect(my_kbr)
op.inputs.ksxbzro.Connect(my_ksxbzro)
op.inputs.out_type.Connect(my_out_type)
my_linearized_stress_results = op.outputs.linearized_stress_results.GetData()
my_linearized_stress_all_results = op.outputs.linearized_stress_all_results.GetData()
my_linearized_stress_params = op.outputs.linearized_stress_params.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.