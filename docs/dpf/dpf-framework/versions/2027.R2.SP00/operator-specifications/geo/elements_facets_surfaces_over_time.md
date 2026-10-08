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

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>1</strong> | [scoping](#input_1) |  |[`scoping`](../../core-concepts/dpf-types.md#scoping) |
| <strong>2</strong> | [displacement](#input_2) |  |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
| <strong>7</strong> | [mesh](#input_7) |  |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |


<a id="input_1"></a>
### scoping (Pin 1)

- **Required:** No
- **Expected type(s):** [`scoping`](../../core-concepts/dpf-types.md#scoping)



<a id="input_2"></a>
### displacement (Pin 2)

- **Required:** No
- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

Displacement field's container.

<a id="input_7"></a>
### mesh (Pin 7)

- **Required:** No
- **Expected type(s):** [`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region)

Mesh must be defined if the displacement field's container does not contain it, or if there is no displacement.


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [fields_container](#output_0) |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
|  **1**| [mesh](#output_1) |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |


<a id="output_0"></a>
### fields_container (Pin 0)

- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

Surfaces field.

<a id="output_1"></a>
### mesh (Pin 1)

- **Expected type(s):** [`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region)

Mesh made of surface elements only.


## Configurations

This operator supports [configuration options](../../core-concepts/operator-configurations.md) that modify its behavior.


### [mutex](../../core-concepts/operator-configurations.md#mutex)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: geo

 **Plugin**: core

 **Scripting name**: elements_facets_surfaces_over_time

 **Full name**: geo.elements_facets_surfaces_over_time

 **Internal name**: surfaces_provider

 **License**: any_dpf_supported_increments

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

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