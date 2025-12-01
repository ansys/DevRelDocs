---
category: mapping
plugin: core
license: None
---

# mapping:prepare mapping workflow

**Version: 0.0.0**

## Description

Generates a workflow that can map results from a support to another one.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  input_support |[`field`](../../core-concepts/dpf-types.md#field), [`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |  |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  output_support |[`field`](../../core-concepts/dpf-types.md#field), [`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |  |
| <strong>Pin 2</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  filter_radius |[`double`](../../core-concepts/dpf-types.md#standard-types) | Radius size for the RBF filter |
| <strong>Pin 3</strong>|  influence_box |[`double`](../../core-concepts/dpf-types.md#standard-types) |  |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| mapping_workflow |[`workflow`](../../core-concepts/dpf-types.md#workflow) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: mapping

 **Plugin**: core

 **Scripting name**: prepare_mapping_workflow

 **Full name**: mapping.prepare_mapping_workflow

 **Internal name**: prepare_mapping_workflow

 **License**: None

## Examples

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