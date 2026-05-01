---
category: mesh
plugin: core
license: None
---

# mesh:mesh get attribute

**Version: 0.0.0**

## Description

Uses the MeshedRegion APIs to return a given attribute of the mesh in input.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [abstract_meshed_region](#input_0) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |
| <strong>1</strong> | [property_name](#input_1) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`string`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>2</strong> | [property_identifier](#input_2) |  |[`int32`](../../core-concepts/dpf-types.md#standard-types), [`string`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_0"></a>
### abstract_meshed_region (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region)



<a id="input_1"></a>
### property_name (Pin 1)

- **Required:** Yes
- **Expected type(s):** [`string`](../../core-concepts/dpf-types.md#standard-types)

Supported property names are: "connectivity", "reverse_connectivity", "mat", "faces_nodes_connectivity", "elements_faces_connectivity" (or any mesh's property field), "coordinates", "named_selection", "num_named_selections", "named_selection_names", "named_selection_locations", "node_scoping", "element_scoping", "face_scoping"...

<a id="input_2"></a>
### property_identifier (Pin 2)

- **Required:** No
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types), [`string`](../../core-concepts/dpf-types.md#standard-types)

Can be used to get a property at a given index, example: a named selection's number or by name, example: a named selection's name.


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [property](#output_0) |[`scoping`](../../core-concepts/dpf-types.md#scoping), [`field`](../../core-concepts/dpf-types.md#field), [`property_field`](../../core-concepts/dpf-types.md#property-field), [`int32`](../../core-concepts/dpf-types.md#standard-types), [`string_field`](../../core-concepts/dpf-types.md#string-field) |


<a id="output_0"></a>
### property (Pin 0)

- **Expected type(s):** [`scoping`](../../core-concepts/dpf-types.md#scoping), [`field`](../../core-concepts/dpf-types.md#field), [`property_field`](../../core-concepts/dpf-types.md#property-field), [`int32`](../../core-concepts/dpf-types.md#standard-types), [`string_field`](../../core-concepts/dpf-types.md#string-field)

Returns a property field for properties: "connectivity", "reverse_connectivity", "mat", "faces_nodes_connectivity", "elements_faces_connectivity" (or any mesh's property field), a field for property: "coordinates", a scoping for properties:"named_selection", "node_scoping", "element_scoping", "face_scoping", a string field for properties: "named_selection_names", "named_selection_locations" and an int for property: "num_named_selections".


## Configurations

This operator supports [configuration options](../../core-concepts/operator-configurations.md) that modify its behavior.


### [mutex](../../core-concepts/operator-configurations.md#mutex)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: mesh

 **Plugin**: core

 **Scripting name**: mesh_get_attribute

 **Full name**: mesh.mesh_get_attribute

 **Internal name**: mesh::get_attribute

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("mesh::get_attribute"); // operator instantiation
op.connect(0, my_abstract_meshed_region);
op.connect(1, my_property_name);
op.connect(2, my_property_identifier);
ansys::dpf::Scoping my_property = op.getOutput<ansys::dpf::Scoping>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.mesh.mesh_get_attribute() # operator instantiation
op.inputs.abstract_meshed_region.connect(my_abstract_meshed_region)
op.inputs.property_name.connect(my_property_name)
op.inputs.property_identifier.connect(my_property_identifier)
my_property_as_scoping = op.outputs.property_as_scoping()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.mesh.mesh_get_attribute() # operator instantiation
op.inputs.abstract_meshed_region.Connect(my_abstract_meshed_region)
op.inputs.property_name.Connect(my_property_name)
op.inputs.property_identifier.Connect(my_property_identifier)
my_property = op.outputs.property.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.