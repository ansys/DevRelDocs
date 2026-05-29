---
category: math
plugin: core
license: any_dpf_supported_increments
---

# math:expansion psd

**Version: 0.0.0**

## Description

Computes the PSD response for one-sigma solution.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [mode_shapes](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/math/expansion_psd) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`fields_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |
| <strong>1</strong> | [static_shapes](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/math/expansion_psd) |  |[`fields_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |
| <strong>2</strong> | [rel_rel_covar_matrix](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/math/expansion_psd) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`fields_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |
| <strong>3</strong> | [stat_stat_covar_matrix](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/math/expansion_psd) |  |[`fields_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |
| <strong>4</strong> | [rel_stat_covar_matrix](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/math/expansion_psd) |  |[`fields_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |


<a id="input_0"></a>
### mode_shapes (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`fields_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)

Fields container containing the mode shapes from modal analysis file: mode shapes for dynamic and pseudo-static displacements

<a id="input_1"></a>
### static_shapes (Pin 1)

- **Required:** No
- **Expected type(s):** [`fields_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)

Fields container containing the static shapes (base excitations) from spectral analysis file

<a id="input_2"></a>
### rel_rel_covar_matrix (Pin 2)

- **Required:** Yes
- **Expected type(s):** [`fields_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)

Fields container containing covariance matrices from a psd file: covariance matrix terms for displacement/velocity/acceleration mode-mode shapes 

<a id="input_3"></a>
### stat_stat_covar_matrix (Pin 3)

- **Required:** No
- **Expected type(s):** [`fields_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)

Fields container containing covariance matrices from a psd file: covariance matrix terms for displacement/velocity/acceleration static-static shapes 

<a id="input_4"></a>
### rel_stat_covar_matrix (Pin 4)

- **Required:** No
- **Expected type(s):** [`fields_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)

Fields container containing covariance matrices from a psd file: covariance matrix terms for displacement/velocity/acceleration mode-static shapes 


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [psd](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/math/expansion_psd) |[`fields_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |


<a id="output_0"></a>
### psd (Pin 0)

- **Expected type(s):** [`fields_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)

PSD solution per label


## Configurations

This operator supports [configuration options](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/operator-configurations) that modify its behavior.


### [mutex](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/operator-configurations)

- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

### [num_threads](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/operator-configurations)

- **Expected type(s):** [`int32`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)
- **Default value:** 0

Number of threads to use to run in parallel

### [run_in_parallel](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/operator-configurations)

- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)
- **Default value:** true

Loops are allowed to run in parallel if the value of this config is set to true.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: math

 **Plugin**: core

 **Scripting name**: expansion_psd

 **Full name**: math.expansion_psd

 **Internal name**: expansion::psd

 **License**: any_dpf_supported_increments

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("expansion::psd"); // operator instantiation
op.connect(0, my_mode_shapes);
op.connect(1, my_static_shapes);
op.connect(2, my_rel_rel_covar_matrix);
op.connect(3, my_stat_stat_covar_matrix);
op.connect(4, my_rel_stat_covar_matrix);
ansys::dpf::FieldsContainer my_psd = op.getOutput<ansys::dpf::FieldsContainer>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.math.expansion_psd() # operator instantiation
op.inputs.mode_shapes.connect(my_mode_shapes)
op.inputs.static_shapes.connect(my_static_shapes)
op.inputs.rel_rel_covar_matrix.connect(my_rel_rel_covar_matrix)
op.inputs.stat_stat_covar_matrix.connect(my_stat_stat_covar_matrix)
op.inputs.rel_stat_covar_matrix.connect(my_rel_stat_covar_matrix)
my_psd = op.outputs.psd()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.math.expansion_psd() # operator instantiation
op.inputs.mode_shapes.Connect(my_mode_shapes)
op.inputs.static_shapes.Connect(my_static_shapes)
op.inputs.rel_rel_covar_matrix.Connect(my_rel_rel_covar_matrix)
op.inputs.stat_stat_covar_matrix.Connect(my_stat_stat_covar_matrix)
op.inputs.rel_stat_covar_matrix.Connect(my_rel_stat_covar_matrix)
my_psd = op.outputs.psd.GetData()
```
</details>
<br />

## Changelog

- Version 0.0.0: Initial release.