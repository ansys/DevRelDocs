---
category: result
plugin: live post
license: None
---

# result:compute total strain 2

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
 Get the 2nd principal component.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong>|  time_scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping), [`int32`](../../core-concepts/dpf-types.md#standard-types), [`vector<int32>`](../../core-concepts/dpf-types.md#standard-types), [`double`](../../core-concepts/dpf-types.md#standard-types), [`field`](../../core-concepts/dpf-types.md#field), [`vector<double>`](../../core-concepts/dpf-types.md#standard-types) | time/freq values (use doubles or field), time/freq set ids (use ints or scoping) or time/freq step ids (use scoping with TimeFreq_steps location) required in output. To specify time/freq values at specific load steps, put a Field (and not a list) in input with a scoping located on "TimeFreq_steps". Linear time freq intrapolation is performed if the values are not in the result files and the data at the max time or freq is taken when time/freqs are higher than available time/freqs in result files. To get all data for all time/freq sets, connect an int with value -1.. Will only be used if no displacement input is given (will be applied on displacement operator). |
| <strong>Pin 1</strong>|  scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping) | The element scoping on which the result is computed. |
| <strong>Pin 3</strong>|  streams_container |[`streams_container`](../../core-concepts/dpf-types.md#streams-container) | Optional if a mesh or a data_sources have been connected. Required if no displacement input have been connected. |
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  data_sources |[`data_sources`](../../core-concepts/dpf-types.md#data-sources) | Optional if a mesh or a streams_container have been connected, or if the displacement's field has a mesh support. Required if no displacement input have been connected. |
| <strong>Pin 5</strong>|  extrapolate |[`int32`](../../core-concepts/dpf-types.md#standard-types) | Whether to extrapolate the data from the integration points to the nodes. |
| <strong>Pin 6</strong>|  nonlinear |[`int32`](../../core-concepts/dpf-types.md#standard-types) | Whether to use nonlinear geometry or nonlinear material (1 = large strain, 2 = hyperelasticity). |
| <strong>Pin 7</strong>|  abstract_meshed_region |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) | The underlying mesh. Optional if a data_sources or a streams_container have been connected, or if the displacement's field has a mesh support. |
| <strong>Pin 9</strong>|  requested_location |[`string`](../../core-concepts/dpf-types.md#standard-types) | Average the Elemental Nodal result to the requested location. |
| <strong>Pin 10</strong>|  displacement |[`fields_container`](../../core-concepts/dpf-types.md#fields-container), [`field`](../../core-concepts/dpf-types.md#field) | Field/or fields container containing only the displacement field (nodal). If none specified, read displacements from result file using the data_sources. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | The computed result fields container (elemental nodal). |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **run_in_parallel** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | true | Loops are allowed to run in parallel if the value of this config is set to true. |

## Scripting

 **Category**: result

 **Plugin**: live post

 **Scripting name**: compute_total_strain_2

 **Full name**: result.compute_total_strain_2

 **Internal name**: compute_total_strain_2

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("compute_total_strain_2"); // operator instantiation
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

op = dpf.operators.result.compute_total_strain_2() # operator instantiation
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

op = dpf.operators.result.compute_total_strain_2() # operator instantiation
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
<br>

## Changelog

- Version 0.0.0: Initial release.