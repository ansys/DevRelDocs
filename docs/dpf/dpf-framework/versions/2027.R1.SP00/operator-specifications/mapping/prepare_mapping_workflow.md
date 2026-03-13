---
category: mapping
plugin: core
license: None
---

# mapping:prepare mapping workflow

**Version: 0.0.0**

## Description

Generates a workflow that can map field results from a source support to a target support using RBF (Radial Basis Function) interpolation. The workflow exposes 'source', 'optional_target_support', and 'target' pins that can be used to perform mapping operations.

**Filter radius**: Uses an automatic value if not specified and the source support provides access to a mesh region. If no mesh is accessible from the source support, the filter radius must be provided explicitly via pin 2.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [input_support](#input_0) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`field`](../../core-concepts/dpf-types.md#field), [`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |
| <strong>1</strong> | [output_support](#input_1) |  |[`field`](../../core-concepts/dpf-types.md#field), [`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |
| <strong>2</strong> | [filter_radius](#input_2) |  |[`double`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>3</strong> | [influence_box](#input_3) |  |[`double`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_0"></a>
### input_support (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field), [`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region)

Source support from which to map results. Can be a mesh region or a field containing 3D coordinates (vector field with 3 components). If a field is provided, its coordinate data is used directly for RBF construction. If the field has an associated mesh support, it will be used for automatic filter radius calculation.

<a id="input_1"></a>
### output_support (Pin 1)

- **Required:** No
- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field), [`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region)

Target support to which results will be mapped. Can be a mesh region or a field containing 3D target coordinates (vector field with 3 components). If a field is provided, its coordinate data is used directly as target locations. If a mesh region is provided, its coordinates are extracted and a mesh support is attached to the output. The output workflow always exposes an 'optional_target_support' input pin. When this pin is provided, it acts as the default for that exposed pin, so the workflow can execute without further input; when omitted, 'optional_target_support' must be connected before the workflow is executed.

<a id="input_2"></a>
### filter_radius (Pin 2)

- **Required:** No
- **Expected type(s):** [`double`](../../core-concepts/dpf-types.md#standard-types)

Radius size for the RBF filter. If not provided and the source support (pin 0) is or carries a mesh region, automatically calculated from the source mesh tetrahedra as the average tetrahedron volume divided by 2. If no mesh is accessible from pin 0, this pin must be supplied explicitly.

<a id="input_3"></a>
### influence_box (Pin 3)

- **Required:** No
- **Expected type(s):** [`double`](../../core-concepts/dpf-types.md#standard-types)

Size of the influence box for RBF interpolation. Defines the spatial extent for neighbor search. If not provided, defaults to 4 times the filter radius.


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [mapping_workflow](#output_0) |[`workflow`](../../core-concepts/dpf-types.md#workflow) |


<a id="output_0"></a>
### mapping_workflow (Pin 0)

- **Expected type(s):** [`workflow`](../../core-concepts/dpf-types.md#workflow)

Workflow configured for mapping operations. Exposes input pins 'source' (field to map), 'optional_target_support' (target coordinates), and output pin 'target' (mapped result).


## Configurations

This operator supports [configuration options](../../core-concepts/operator-configurations.md) that modify its behavior.


### [mutex](../../core-concepts/operator-configurations.md#mutex)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: mapping

 **Plugin**: core

 **Scripting name**: prepare_mapping_workflow

 **Full name**: mapping.prepare_mapping_workflow

 **Internal name**: prepare_mapping_workflow

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("prepare_mapping_workflow"); // operator instantiation
op.connect(0, my_input_support);
op.connect(1, my_output_support);
op.connect(2, my_filter_radius);
op.connect(3, my_influence_box);
ansys::dpf::Workflow my_mapping_workflow = op.getOutput<ansys::dpf::Workflow>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.mapping.prepare_mapping_workflow() # operator instantiation
op.inputs.input_support.connect(my_input_support)
op.inputs.output_support.connect(my_output_support)
op.inputs.filter_radius.connect(my_filter_radius)
op.inputs.influence_box.connect(my_influence_box)
my_mapping_workflow = op.outputs.mapping_workflow()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.mapping.prepare_mapping_workflow() # operator instantiation
op.inputs.input_support.Connect(my_input_support)
op.inputs.output_support.Connect(my_output_support)
op.inputs.filter_radius.Connect(my_filter_radius)
op.inputs.influence_box.Connect(my_influence_box)
my_mapping_workflow = op.outputs.mapping_workflow.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.