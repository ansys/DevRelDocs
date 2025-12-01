---
category: geo
plugin: core
license: any_dpf_supported_increments
---

# geo:elements facets surfaces over time

**Version: 0.0.0**

## Description

Calculates for a mesh, the surface of each element's facet over time for each specified time step. The output is a new mesh made with only surface elements.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 1</strong>|  scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping) |  |
| <strong>Pin 2</strong>|  displacement |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Displacement field's container. |
| <strong>Pin 7</strong>|  mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) | Mesh must be defined if the displacement field's container does not contain it, or if there is no displacement. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Surfaces field. |
|  **Pin 1**| mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) | Mesh made of surface elements only. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: geo

 **Plugin**: core

 **Scripting name**: elements_facets_surfaces_over_time

 **Full name**: geo.elements_facets_surfaces_over_time

 **Internal name**: surfaces_provider

 **License**: any_dpf_supported_increments

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("surfaces_provider"); // operator instantiation
op.connect(1, my_scoping);
op.connect(2, my_displacement);
op.connect(7, my_mesh);
ansys::dpf::FieldsContainer my_fields_container = op.getOutput<ansys::dpf::FieldsContainer>(0);
ansys::dpf::MeshedRegion my_mesh = op.getOutput<ansys::dpf::MeshedRegion>(1);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.geo.elements_facets_surfaces_over_time() # operator instantiation
op.inputs.scoping.connect(my_scoping)
op.inputs.displacement.connect(my_displacement)
op.inputs.mesh.connect(my_mesh)
my_fields_container = op.outputs.fields_container()
my_mesh = op.outputs.mesh()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.geo.elements_facets_surfaces_over_time() # operator instantiation
op.inputs.scoping.Connect(my_scoping)
op.inputs.displacement.Connect(my_displacement)
op.inputs.mesh.Connect(my_mesh)
my_fields_container = op.outputs.fields_container.GetData()
my_mesh = op.outputs.mesh.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.