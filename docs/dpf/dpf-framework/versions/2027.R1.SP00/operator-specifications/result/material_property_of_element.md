---
category: result
plugin: core
license: None
---

# result:material property of element

**Version: 0.0.0**

## Description


Reads a material property for each element from result files.
The operator first retrieves each element's material ID from the mesh property "mat",
then maps the requested property name to the corresponding material value.
The output is a scalar field at elemental location.


## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>1</strong> | [mesh_scoping](#input_1) |  |[`scoping`](../../core-concepts/dpf-types.md#scoping) |
| <strong>3</strong> | [streams](#input_3) |  |[`streams_container`](../../core-concepts/dpf-types.md#streams-container) |
| <strong>4</strong> | [data_sources](#input_4) |  |[`data_sources`](../../core-concepts/dpf-types.md#data-sources) |
| <strong>6</strong> | [property_name](#input_6) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`string`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_1"></a>
### mesh_scoping (Pin 1)

- **Required:** No
- **Expected type(s):** [`scoping`](../../core-concepts/dpf-types.md#scoping)

Element scoping that restricts which elements are processed. If not provided, all elements in the result file are used.

<a id="input_3"></a>
### streams (Pin 3)

- **Required:** No
- **Expected type(s):** [`streams_container`](../../core-concepts/dpf-types.md#streams-container)

result file container allowed to be kept open to cache data

<a id="input_4"></a>
### data_sources (Pin 4)

- **Required:** No
- **Expected type(s):** [`data_sources`](../../core-concepts/dpf-types.md#data-sources)

result file path container, used if no streams are set

<a id="input_6"></a>
### property_name (Pin 6)

- **Required:** Yes
- **Expected type(s):** [`string`](../../core-concepts/dpf-types.md#standard-types)

Name of the linear scalar material property to extract, for example "EX" for Young's modulus or "DENS" for density.


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

### [num_threads](../../core-concepts/operator-configurations.md#num_threads)

- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** 0

Number of threads to use to run in parallel

### [run_in_parallel](../../core-concepts/operator-configurations.md#run_in_parallel)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** true

Loops are allowed to run in parallel if the value of this config is set to true.



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
op.connect(3, my_streams);
op.connect(4, my_data_sources);
op.connect(6, my_property_name);
ansys::dpf::Field my_material_properties = op.getOutput<ansys::dpf::Field>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.result.material_property_of_element() # operator instantiation
op.inputs.mesh_scoping.connect(my_mesh_scoping)
op.inputs.streams.connect(my_streams)
op.inputs.data_sources.connect(my_data_sources)
op.inputs.property_name.connect(my_property_name)
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
op.inputs.streams.Connect(my_streams)
op.inputs.data_sources.Connect(my_data_sources)
op.inputs.property_name.Connect(my_property_name)
my_material_properties = op.outputs.material_properties.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.