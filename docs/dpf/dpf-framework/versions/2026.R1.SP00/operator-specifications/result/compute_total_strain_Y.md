---
category: result
plugin: live post
license: None
---

# result:compute total strain Y

**Version: 0.0.0**

## Description

Computes the strain from a displacement field.
Only SOLID185 (B-Bar, Simplified Enhanced Strain, Enhanced Strain formulations), SOLID186 (Full Integration) & SOLID187 elements are supported.
Layered elements are not supported.
Thermal strains are not supported.
Only one value of material properties are allowed per element for isotropic and orthotropic elasticity. Material nonlinearity is not supported
Only linear analysis are supported without On Demand Expansion.
All coordinates are global coordinates.
Euler Angles need to be included in the database.
 Get the YY normal component (11 component).

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [time_scoping](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/result/compute_total_strain_Y) |  |[`scoping`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types), [`int32`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types), [`vector&lt;int32&gt;`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types), [`double`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types), [`field`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types), [`vector&lt;double&gt;`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |
| <strong>1</strong> | [scoping](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/result/compute_total_strain_Y) |  |[`scoping`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |
| <strong>3</strong> | [streams_container](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/result/compute_total_strain_Y) |  |[`streams_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |
| <strong>4</strong> | [data_sources](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/result/compute_total_strain_Y) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`data_sources`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |
| <strong>5</strong> | [extrapolate](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/result/compute_total_strain_Y) |  |[`int32`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |
| <strong>6</strong> | [nonlinear](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/result/compute_total_strain_Y) |  |[`int32`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |
| <strong>7</strong> | [abstract_meshed_region](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/result/compute_total_strain_Y) |  |[`abstract_meshed_region`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |
| <strong>9</strong> | [requested_location](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/result/compute_total_strain_Y) |  |[`string`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |
| <strong>10</strong> | [displacement](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/result/compute_total_strain_Y) |  |[`fields_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types), [`field`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |


<a id="input_0"></a>
### time_scoping (Pin 0)

- **Required:** No
- **Expected type(s):** [`scoping`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types), [`int32`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types), [`vector&lt;int32&gt;`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types), [`double`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types), [`field`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types), [`vector&lt;double&gt;`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)

time/freq values (use doubles or field), time/freq set ids (use ints or scoping) or time/freq step ids (use scoping with TimeFreq_steps location) required in output. To specify time/freq values at specific load steps, put a Field (and not a list) in input with a scoping located on "TimeFreq_steps". Linear time freq intrapolation is performed if the values are not in the result files and the data at the max time or freq is taken when time/freqs are higher than available time/freqs in result files. To get all data for all time/freq sets, connect an int with value -1.. Will only be used if no displacement input is given (will be applied on displacement operator).

<a id="input_1"></a>
### scoping (Pin 1)

- **Required:** No
- **Expected type(s):** [`scoping`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)

The element scoping on which the result is computed.

<a id="input_3"></a>
### streams_container (Pin 3)

- **Required:** No
- **Expected type(s):** [`streams_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)

Optional if a mesh or a data_sources have been connected. Required if no displacement input have been connected.

<a id="input_4"></a>
### data_sources (Pin 4)

- **Required:** Yes
- **Expected type(s):** [`data_sources`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)

Optional if a mesh or a streams_container have been connected, or if the displacement's field has a mesh support. Required if no displacement input have been connected.

<a id="input_5"></a>
### extrapolate (Pin 5)

- **Required:** No
- **Expected type(s):** [`int32`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)

Whether to extrapolate the data from the integration points to the nodes.

<a id="input_6"></a>
### nonlinear (Pin 6)

- **Required:** No
- **Expected type(s):** [`int32`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)

Whether to use nonlinear geometry or nonlinear material (1 = large strain, 2 = hyperelasticity).

<a id="input_7"></a>
### abstract_meshed_region (Pin 7)

- **Required:** No
- **Expected type(s):** [`abstract_meshed_region`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)

The underlying mesh. Optional if a data_sources or a streams_container have been connected, or if the displacement's field has a mesh support.

<a id="input_9"></a>
### requested_location (Pin 9)

- **Required:** No
- **Expected type(s):** [`string`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)

Average the Elemental Nodal result to the requested location.

<a id="input_10"></a>
### displacement (Pin 10)

- **Required:** No
- **Expected type(s):** [`fields_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types), [`field`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)

Field/or fields container containing only the displacement field (nodal). If none specified, read displacements from result file using the data_sources.


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [fields_container](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/result/compute_total_strain_Y) |[`fields_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |


<a id="output_0"></a>
### fields_container (Pin 0)

- **Expected type(s):** [`fields_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)

The computed result fields container (elemental nodal).


## Configurations

This operator supports [configuration options](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/operator-configurations) that modify its behavior.


### [mutex](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/operator-configurations)

- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

### [run_in_parallel](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/operator-configurations)

- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)
- **Default value:** true

Loops are allowed to run in parallel if the value of this config is set to true.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: result

 **Plugin**: live post

 **Scripting name**: compute_total_strain_Y

 **Full name**: result.compute_total_strain_Y

 **Internal name**: compute_total_strain_Y

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("compute_total_strain_Y"); // operator instantiation
op.connect(0, my_time_scoping);
op.connect(1, my_scoping);
op.connect(3, my_streams_container);
op.connect(4, my_data_sources);
op.connect(5, my_extrapolate);
op.connect(6, my_nonlinear);
op.connect(7, my_abstract_meshed_region);
op.connect(9, my_requested_location);
op.connect(10, my_displacement);
ansys::dpf::FieldsContainer my_fields_container = op.getOutput<ansys::dpf::FieldsContainer>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.result.compute_total_strain_Y() # operator instantiation
op.inputs.time_scoping.connect(my_time_scoping)
op.inputs.scoping.connect(my_scoping)
op.inputs.streams_container.connect(my_streams_container)
op.inputs.data_sources.connect(my_data_sources)
op.inputs.extrapolate.connect(my_extrapolate)
op.inputs.nonlinear.connect(my_nonlinear)
op.inputs.abstract_meshed_region.connect(my_abstract_meshed_region)
op.inputs.requested_location.connect(my_requested_location)
op.inputs.displacement.connect(my_displacement)
my_fields_container = op.outputs.fields_container()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.result.compute_total_strain_Y() # operator instantiation
op.inputs.time_scoping.Connect(my_time_scoping)
op.inputs.scoping.Connect(my_scoping)
op.inputs.streams_container.Connect(my_streams_container)
op.inputs.data_sources.Connect(my_data_sources)
op.inputs.extrapolate.Connect(my_extrapolate)
op.inputs.nonlinear.Connect(my_nonlinear)
op.inputs.abstract_meshed_region.Connect(my_abstract_meshed_region)
op.inputs.requested_location.Connect(my_requested_location)
op.inputs.displacement.Connect(my_displacement)
my_fields_container = op.outputs.fields_container.GetData()
```
</details>
<br />

## Changelog

- Version 0.0.0: Initial release.