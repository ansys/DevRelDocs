---
category: mapping
plugin: N/A
license: any_dpf_supported_increments
---

# mapping:system coupling mapping

**Version: 0.0.0**

## Description

Apply System Coupling to map data from an input mesh to a target mesh.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  source_mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) | Mesh where the source data is defined.interpolations only support meshed_region. |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  target_mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) | Mesh where the target data is defined. interpolations only support meshed_region. |
| <strong>Pin 2</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  is_conservative |[`bool`](../../core-concepts/dpf-types.md#standard-types) | Boolean that indicates if the mapped variable is conservative (e.g. force) or not (e.g. pressure). |
| <strong>Pin 3</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  location |[`string`](../../core-concepts/dpf-types.md#standard-types) | Mesh support of the mapped variable. Supported options: Nodal and Elemental. |
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  dimensionality |[`int32`](../../core-concepts/dpf-types.md#standard-types) | Dimensionality of the mapped variable. Supported options: 1 and 3 (scalars or vectors). |
| <strong>Pin 5</strong>|  target_scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping), [`scopings_container`](../../core-concepts/dpf-types.md#scopings-container) | Scoping that restricts the interpolation to a given set of nodes/elements in the target mesh.  |
| <strong>Pin 6</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  source_data |[`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container) | data to be mapped. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| target_data |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | data mapped on the target mesh |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **permissive** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | true | If permissive is set to false, the validity of the source and target meshes is checked before performing mapping, raising an error if they are invalid. If permissive is set to true, no check is done. Default is true. |

## Scripting

 **Category**: mapping

 **Plugin**: N/A

 **Scripting name**: None

 **Full name**: None

 **Internal name**: sc_mapping

 **License**: any_dpf_supported_increments

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("sc_mapping"); // operator instantiation
op.connect(0, my_source_mesh);
op.connect(1, my_target_mesh);
op.connect(2, my_is_conservative);
op.connect(3, my_location);
op.connect(4, my_dimensionality);
op.connect(5, my_target_scoping);
op.connect(6, my_source_data);
ansys::dpf::FieldsContainer my_target_data = op.getOutput<ansys::dpf::FieldsContainer>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.mapping.None() # operator instantiation
op.inputs.source_mesh.connect(my_source_mesh)
op.inputs.target_mesh.connect(my_target_mesh)
op.inputs.is_conservative.connect(my_is_conservative)
op.inputs.location.connect(my_location)
op.inputs.dimensionality.connect(my_dimensionality)
op.inputs.target_scoping.connect(my_target_scoping)
op.inputs.source_data.connect(my_source_data)
my_target_data = op.outputs.target_data()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.mapping.None() # operator instantiation
op.inputs.source_mesh.Connect(my_source_mesh)
op.inputs.target_mesh.Connect(my_target_mesh)
op.inputs.is_conservative.Connect(my_is_conservative)
op.inputs.location.Connect(my_location)
op.inputs.dimensionality.Connect(my_dimensionality)
op.inputs.target_scoping.Connect(my_target_scoping)
op.inputs.source_data.Connect(my_source_data)
my_target_data = op.outputs.target_data.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.