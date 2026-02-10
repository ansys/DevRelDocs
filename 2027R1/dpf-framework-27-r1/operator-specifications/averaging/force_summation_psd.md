---
category: averaging
plugin: core
license: any_dpf_supported_increments
---

# averaging:force_summation_psd

**Version: 0.0.0**

## Description

Computes the sum of elemental forces contribution on a set of nodes in Global Coordinate System for a PSD analysis. Equivalent to MAPDL FSUM/NFORCE.  The moment is computed in the unit system of the data source.

## Inputs

| Pin number | Name | Expected type(s) |
|-------|-------|------------------|
| <strong>1</strong>|  [nodal_scoping](#input_1) |[`scoping`](../../core-concepts/dpf-types.md#scoping), [`scopings_container`](../../core-concepts/dpf-types.md#scopings-container) |
| <strong>2</strong>|  [elemental_scoping](#input_2) |[`scoping`](../../core-concepts/dpf-types.md#scoping), [`scopings_container`](../../core-concepts/dpf-types.md#scopings-container) |
| <strong>3</strong>|  [streams](#input_3) |[`streams_container`](../../core-concepts/dpf-types.md#streams-container) |
| <strong>4</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [data_sources](#input_4) |[`data_sources`](../../core-concepts/dpf-types.md#data-sources) |
| <strong>6</strong>|  [spoint](#input_6) |[`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
| <strong>7</strong>|  [abs_rel_key](#input_7) |[`int32`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>8</strong>|  [signif](#input_8) |[`double`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_1"></a>
### nodal_scoping (Pin 1)

- **Required:** No
- **Expected type(s):** [`scoping`](../../core-concepts/dpf-types.md#scoping), [`scopings_container`](../../core-concepts/dpf-types.md#scopings-container)

Nodal scoping or scopings container with a single label. Set of nodes in which elemental contribution forces will be accumulated. Defaults to all nodes.

<a id="input_2"></a>
### elemental_scoping (Pin 2)

- **Required:** No
- **Expected type(s):** [`scoping`](../../core-concepts/dpf-types.md#scoping), [`scopings_container`](../../core-concepts/dpf-types.md#scopings-container)

Elemental scoping or scopings container with a single label. Set of elements contributing to the force calculation. Defaults to all elements.

<a id="input_3"></a>
### streams (Pin 3)

- **Required:** No
- **Expected type(s):** [`streams_container`](../../core-concepts/dpf-types.md#streams-container)

Streams container for RST and PSD files (optional if using data sources). The operator supports both a single RST file and two separate RST files. See data sources pin specifications for details on how to define the streams for both cases.

<a id="input_4"></a>
### data_sources (Pin 4)

- **Required:** Yes
- **Expected type(s):** [`data_sources`](../../core-concepts/dpf-types.md#data-sources)

Data sources containing RST and PSD files (optional if using a streams container). The operator supports both a single RST file (containing both modal and PSD results) and two separate RST files (one for modal and one for PSD analyses).The data source containing modal results must be defined as an upstream data source.If using a single RST file for PSD and modal analysis, the RST file must be in an upstream data source.If using two separate RST files, only the modal RST must be in an upstream data source.

<a id="input_6"></a>
### spoint (Pin 6)

- **Required:** No
- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

Field or fields container of the coordinates of the point used for moment summations. Defaults to (0,0,0). If unitless, it is assumed to be in meters.

<a id="input_7"></a>
### abs_rel_key (Pin 7)

- **Required:** No
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)

Key to select the type of response: 0 for relative response (default) or 1 for absolute response.

<a id="input_8"></a>
### signif (Pin 8)

- **Required:** No
- **Expected type(s):** [`double`](../../core-concepts/dpf-types.md#standard-types)

Significance threshold, defaults to 0.0001. Any mode with a significance level above this value will be included in the combination.The significance level is defined as the modal covariance matrix term, divided by the maximum modal covariance matrix term.


## Outputs

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [force_accumulation](#output_0) |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
|  **1**| [moment_accumulation](#output_1) |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
|  **10**| [forces_on_nodes](#output_10) |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
|  **11**| [moments_on_nodes](#output_11) |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |


<a id="output_0"></a>
### force_accumulation (Pin 0)

- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

Returns the sum of forces for the 1-sigma displacement solution on the scoped nodes/elements.

<a id="output_1"></a>
### moment_accumulation (Pin 1)

- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

Returns the sum of moments for the 1-sigma displacement solution on the scoped nodes/elements.

<a id="output_10"></a>
### forces_on_nodes (Pin 10)

- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

Returns the nodal forces for the 1-sigma displacement solution on the scoped nodes/elements.

<a id="output_11"></a>
### moments_on_nodes (Pin 11)

- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

Returns the nodal moments for the 1-sigma displacement solution on the scoped nodes/elements.


## Configurations


### mutex

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

 **Category**: averaging

 **Plugin**: core

 **Scripting name**: force_summation_psd

 **Full name**: averaging.force_summation_psd

 **Internal name**: force_summation_psd

 **License**: any_dpf_supported_increments

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("force_summation_psd"); // operator instantiation
op.connect(1, my_nodal_scoping);
op.connect(2, my_elemental_scoping);
op.connect(3, my_streams);
op.connect(4, my_data_sources);
op.connect(6, my_spoint);
op.connect(7, my_abs_rel_key);
op.connect(8, my_signif);
ansys::dpf::FieldsContainer my_force_accumulation = op.getOutput<ansys::dpf::FieldsContainer>(0);
ansys::dpf::FieldsContainer my_moment_accumulation = op.getOutput<ansys::dpf::FieldsContainer>(1);
ansys::dpf::FieldsContainer my_forces_on_nodes = op.getOutput<ansys::dpf::FieldsContainer>(10);
ansys::dpf::FieldsContainer my_moments_on_nodes = op.getOutput<ansys::dpf::FieldsContainer>(11);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.averaging.force_summation_psd() # operator instantiation
op.inputs.nodal_scoping.connect(my_nodal_scoping)
op.inputs.elemental_scoping.connect(my_elemental_scoping)
op.inputs.streams.connect(my_streams)
op.inputs.data_sources.connect(my_data_sources)
op.inputs.spoint.connect(my_spoint)
op.inputs.abs_rel_key.connect(my_abs_rel_key)
op.inputs.signif.connect(my_signif)
my_force_accumulation = op.outputs.force_accumulation()
my_moment_accumulation = op.outputs.moment_accumulation()
my_forces_on_nodes = op.outputs.forces_on_nodes()
my_moments_on_nodes = op.outputs.moments_on_nodes()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.averaging.force_summation_psd() # operator instantiation
op.inputs.nodal_scoping.Connect(my_nodal_scoping)
op.inputs.elemental_scoping.Connect(my_elemental_scoping)
op.inputs.streams.Connect(my_streams)
op.inputs.data_sources.Connect(my_data_sources)
op.inputs.spoint.Connect(my_spoint)
op.inputs.abs_rel_key.Connect(my_abs_rel_key)
op.inputs.signif.Connect(my_signif)
my_force_accumulation = op.outputs.force_accumulation.GetData()
my_moment_accumulation = op.outputs.moment_accumulation.GetData()
my_forces_on_nodes = op.outputs.forces_on_nodes.GetData()
my_moments_on_nodes = op.outputs.moments_on_nodes.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.