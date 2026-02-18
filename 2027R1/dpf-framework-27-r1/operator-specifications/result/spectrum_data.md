---
category: result
plugin: mapdl
license: None
---

# result:spectrum data

**Version: 0.0.0**

## Description

Read spectral data from the result files contained in the streams or data sources.

## Supported file types

This operator supports the following keys ([file formats](../../index.md#overview-of-dpf)) for each listed namespace (plugin/solver):

- mapdl: mode, prs 

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>3</strong> | [streams](#input_3) |  |[`streams_container`](../../core-concepts/dpf-types.md#streams-container) |
| <strong>4</strong> | [data_sources](#input_4) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`data_sources`](../../core-concepts/dpf-types.md#data-sources) |


<a id="input_3"></a>
### streams (Pin 3)

- **Required:** No
- **Expected type(s):** [`streams_container`](../../core-concepts/dpf-types.md#streams-container)

Result file container allowed to be kept open to cache data.

<a id="input_4"></a>
### data_sources (Pin 4)

- **Required:** Yes
- **Expected type(s):** [`data_sources`](../../core-concepts/dpf-types.md#data-sources)

Result file path container, used if no streams are set.


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [participation_factors](#output_0) |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
|  **1**| [mode_coefficients](#output_1) |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
|  **2**| [damping_ratios](#output_2) |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
|  **3**| [global_damping](#output_3) |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
|  **4**| [missing_mass](#output_4) |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
|  **5**| [rigid_response](#output_5) |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |


<a id="output_0"></a>
### participation_factors (Pin 0)

- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

Fields container holding participation factors.

<a id="output_1"></a>
### mode_coefficients (Pin 1)

- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

Fields container holding mode coefficients (PRS File).

<a id="output_2"></a>
### damping_ratios (Pin 2)

- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

Fields container holding damping ratios (PRS File).

<a id="output_3"></a>
### global_damping (Pin 3)

- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

Fields container holding for each spectrum: Global Damping Ratio, Damping Stiffness Coefficient & Damping Mass Coefficient (PRS File).

<a id="output_4"></a>
### missing_mass (Pin 4)

- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

Fields container holding for each spectrum: Missing Mass Mode (0: None, 1: Active), Missing Mass Effect ZPA (PRS File).

<a id="output_5"></a>
### rigid_response (Pin 5)

- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

Fields container holding for each spectrum: Rigid Response Mode (0: None, 1: Gupta, 2: Lindley), Freq Begin (Gupta) / ZPA (Lindley), Freq End (Gupta) (PRS File).


## Configurations

This operator supports [configuration options](../../core-concepts/operator-configurations.md) that modify its behavior.


### [mutex](../../core-concepts/operator-configurations.md#mutex)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

### [num_threads](../../core-concepts/operator-configurations.md#num_threads)

- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** 0

Number of threads to use to run in parallel

### [run_in_parallel](../../core-concepts/operator-configurations.md#run_in_parallel)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** true

Loops are allowed to run in parallel if the value of this config is set to true.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: result

 **Plugin**: mapdl

 **Scripting name**: spectrum_data

 **Full name**: result.spectrum_data

 **Internal name**: spectrum_data

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("spectrum_data"); // operator instantiation
op.connect(3, my_streams);
op.connect(4, my_data_sources);
ansys::dpf::FieldsContainer my_participation_factors = op.getOutput<ansys::dpf::FieldsContainer>(0);
ansys::dpf::FieldsContainer my_mode_coefficients = op.getOutput<ansys::dpf::FieldsContainer>(1);
ansys::dpf::FieldsContainer my_damping_ratios = op.getOutput<ansys::dpf::FieldsContainer>(2);
ansys::dpf::FieldsContainer my_global_damping = op.getOutput<ansys::dpf::FieldsContainer>(3);
ansys::dpf::FieldsContainer my_missing_mass = op.getOutput<ansys::dpf::FieldsContainer>(4);
ansys::dpf::FieldsContainer my_rigid_response = op.getOutput<ansys::dpf::FieldsContainer>(5);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.result.spectrum_data() # operator instantiation
op.inputs.streams.connect(my_streams)
op.inputs.data_sources.connect(my_data_sources)
my_participation_factors = op.outputs.participation_factors()
my_mode_coefficients = op.outputs.mode_coefficients()
my_damping_ratios = op.outputs.damping_ratios()
my_global_damping = op.outputs.global_damping()
my_missing_mass = op.outputs.missing_mass()
my_rigid_response = op.outputs.rigid_response()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.result.spectrum_data() # operator instantiation
op.inputs.streams.Connect(my_streams)
op.inputs.data_sources.Connect(my_data_sources)
my_participation_factors = op.outputs.participation_factors.GetData()
my_mode_coefficients = op.outputs.mode_coefficients.GetData()
my_damping_ratios = op.outputs.damping_ratios.GetData()
my_global_damping = op.outputs.global_damping.GetData()
my_missing_mass = op.outputs.missing_mass.GetData()
my_rigid_response = op.outputs.rigid_response.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.