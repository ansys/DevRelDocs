---
category: result
plugin: core
license: None
---

# result:material property of element

**Version: 0.0.0**

## Description


Reads a named scalar material property (pin 6) for each element from result files.
The property value is taken from the linear (constant) material data assigned to each element's material.
The output is a scalar field at elemental location.
If a default value is provided via pin 7, all elements receive that value unless the property exists for their material, in which case the material value takes precedence.
If no default value is provided and filter_zero_values (pin 8) is true, elements whose property value is exactly zero are excluded from the output.


## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>1</strong> | [mesh_scoping](#input_1) |  |[`scoping`](../../core-concepts/dpf-types.md#scoping) |
| <strong>3</strong> | [streams_container](#input_3) |  |[`streams_container`](../../core-concepts/dpf-types.md#streams-container) |
| <strong>4</strong> | [data_sources](#input_4) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`data_sources`](../../core-concepts/dpf-types.md#data-sources) |
| <strong>6</strong> | [property_name](#input_6) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`string`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>7</strong> | [default_value](#input_7) |  |[`double`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>8</strong> | [filter_zero_values](#input_8) |  |[`bool`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_1"></a>
### mesh_scoping (Pin 1)

- **Required:** No
- **Expected type(s):** [`scoping`](../../core-concepts/dpf-types.md#scoping)

Element scoping that restricts which elements are processed. If not provided, all elements in the result file are used.

<a id="input_3"></a>
### streams_container (Pin 3)

- **Required:** No
- **Expected type(s):** [`streams_container`](../../core-concepts/dpf-types.md#streams-container)

Streams containing the result file. If provided, data_sources is ignored.

<a id="input_4"></a>
### data_sources (Pin 4)

- **Required:** Yes
- **Expected type(s):** [`data_sources`](../../core-concepts/dpf-types.md#data-sources)

Data sources used to open the result file when streams_container is not provided.

<a id="input_6"></a>
### property_name (Pin 6)

- **Required:** Yes
- **Expected type(s):** [`string`](../../core-concepts/dpf-types.md#standard-types)

Name of the linear scalar material property to extract, for example "EX" for Young's modulus or "DENS" for density.

<a id="input_7"></a>
### default_value (Pin 7)

- **Required:** No
- **Expected type(s):** [`double`](../../core-concepts/dpf-types.md#standard-types)

Scalar value assigned to elements whose material does not define the requested property. If not set, those elements are excluded from the output.

<a id="input_8"></a>
### filter_zero_values (Pin 8)

- **Required:** No
- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)

When true and no default_value is set, elements whose property value is exactly zero are excluded from the output. Defaults to false.


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [material_properties](#output_0) |[`field`](../../core-concepts/dpf-types.md#field) |


<a id="output_0"></a>
### material_properties (Pin 0)

- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)

Scalar field at elemental location containing the requested material property value for each processed element.


## Configurations

This operator supports [configuration options](../../core-concepts/operator-configurations.md) that modify its behavior.


### [mutex](../../core-concepts/operator-configurations.md#mutex)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: result

 **Plugin**: core

 **Scripting name**: material_property_of_element

 **Full name**: result.material_property_of_element

 **Internal name**: MaterialPropertyOfElement

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("MaterialPropertyOfElement"); // operator instantiation
op.connect(1, my_mesh_scoping);
op.connect(3, my_streams_container);
op.connect(4, my_data_sources);
op.connect(6, my_property_name);
op.connect(7, my_default_value);
op.connect(8, my_filter_zero_values);
ansys::dpf::Field my_material_properties = op.getOutput<ansys::dpf::Field>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.result.material_property_of_element() # operator instantiation
op.inputs.mesh_scoping.connect(my_mesh_scoping)
op.inputs.streams_container.connect(my_streams_container)
op.inputs.data_sources.connect(my_data_sources)
op.inputs.property_name.connect(my_property_name)
op.inputs.default_value.connect(my_default_value)
op.inputs.filter_zero_values.connect(my_filter_zero_values)
my_material_properties = op.outputs.material_properties()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.result.material_property_of_element() # operator instantiation
op.inputs.mesh_scoping.Connect(my_mesh_scoping)
op.inputs.streams_container.Connect(my_streams_container)
op.inputs.data_sources.Connect(my_data_sources)
op.inputs.property_name.Connect(my_property_name)
op.inputs.default_value.Connect(my_default_value)
op.inputs.filter_zero_values.Connect(my_filter_zero_values)
my_material_properties = op.outputs.material_properties.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.