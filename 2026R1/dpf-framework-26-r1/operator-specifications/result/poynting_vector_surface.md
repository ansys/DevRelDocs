---
category: result
plugin: core
license: any_dpf_supported_increments
---

# result:poynting vector surface

**Version: 0.0.0**

## Description

Compute the Poynting Vector surface integral

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields_containerA |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields_containerB |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |
| <strong>Pin 2</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields_containerC |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |
| <strong>Pin 3</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields_containerD |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |
| <strong>Pin 4</strong>|  abstract_meshed_region |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) | the mesh region in this pin have to be boundary or skin mesh |
| <strong>Pin 5</strong>|  int32 |[`int32`](../../core-concepts/dpf-types.md#standard-types) | load step number, if it's specified, the Poynting Vector is computed only on the substeps of this step |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: result

 **Plugin**: core

 **Scripting name**: poynting_vector_surface

 **Full name**: result.poynting_vector_surface

 **Internal name**: PoyntingVectorSurface

 **License**: any_dpf_supported_increments

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("PoyntingVectorSurface"); // operator instantiation
op.connect(0, my_fields_containerA);
op.connect(1, my_fields_containerB);
op.connect(2, my_fields_containerC);
op.connect(3, my_fields_containerD);
op.connect(4, my_abstract_meshed_region);
op.connect(5, my_int32);
ansys::dpf::FieldsContainer my_fields_container = op.getOutput<ansys::dpf::FieldsContainer>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.result.poynting_vector_surface() # operator instantiation
op.inputs.fields_containerA.connect(my_fields_containerA)
op.inputs.fields_containerB.connect(my_fields_containerB)
op.inputs.fields_containerC.connect(my_fields_containerC)
op.inputs.fields_containerD.connect(my_fields_containerD)
op.inputs.abstract_meshed_region.connect(my_abstract_meshed_region)
op.inputs.int32.connect(my_int32)
my_fields_container = op.outputs.fields_container()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.result.poynting_vector_surface() # operator instantiation
op.inputs.fields_containerA.Connect(my_fields_containerA)
op.inputs.fields_containerB.Connect(my_fields_containerB)
op.inputs.fields_containerC.Connect(my_fields_containerC)
op.inputs.fields_containerD.Connect(my_fields_containerD)
op.inputs.abstract_meshed_region.Connect(my_abstract_meshed_region)
op.inputs.int32.Connect(my_int32)
my_fields_container = op.outputs.fields_container.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.