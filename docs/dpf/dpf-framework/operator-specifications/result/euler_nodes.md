---
category: result
plugin: mapdl
license: None
namespaces:
  hdf5: [h5dpf]
  mapdl: [cms, mode, rst, rstp, rth]
---

# result:euler nodes

**Version: 0.0.0**

## Description

Reads a field made of 3 coordinates and 3 Euler angles (6 dofs) by node from the result file.

## Supported file types

This operator supports the following keys ([file formats](/docs/dpf/dpf-framework/index)) for each listed namespace (plugin/solver):

- hdf5: h5dpf 
- mapdl: cms, mode, rst, rstp, rth 

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>3</strong> | [streams_container](/docs/dpf/dpf-framework/operator-specifications/result/euler_nodes) |  |[`streams_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types), `stream` |
| <strong>4</strong> | [data_sources](/docs/dpf/dpf-framework/operator-specifications/result/euler_nodes) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`data_sources`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
| <strong>5</strong> | [filter_zeros](/docs/dpf/dpf-framework/operator-specifications/result/euler_nodes) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`bool`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
| <strong>6</strong> | [coord_and_euler](/docs/dpf/dpf-framework/operator-specifications/result/euler_nodes) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`bool`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
| <strong>7</strong> | [mesh](/docs/dpf/dpf-framework/operator-specifications/result/euler_nodes) |  |[`abstract_meshed_region`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |


<a id="input_3"></a>
### streams_container (Pin 3)

- **Required:** No
- **Expected type(s):** [`streams_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types), `stream`



<a id="input_4"></a>
### data_sources (Pin 4)

- **Required:** Yes
- **Expected type(s):** [`data_sources`](/docs/dpf/dpf-framework/core-concepts/dpf-types)



<a id="input_5"></a>
### filter_zeros (Pin 5)

- **Required:** Yes
- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

if true, then the field will only contain the scoping if any rotation is not zero. (default is false).

<a id="input_6"></a>
### coord_and_euler (Pin 6)

- **Required:** Yes
- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

if true, then the field has ncomp=6 with 3 coordinates and 3 Euler angles, else there is only the Euler angles (default is true).

<a id="input_7"></a>
### mesh (Pin 7)

- **Required:** No
- **Expected type(s):** [`abstract_meshed_region`](/docs/dpf/dpf-framework/core-concepts/dpf-types)




## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [fields_container](/docs/dpf/dpf-framework/operator-specifications/result/euler_nodes) |[`fields_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |


<a id="output_0"></a>
### fields_container (Pin 0)

- **Expected type(s):** [`fields_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types)




## Configurations

This operator supports [configuration options](/docs/dpf/dpf-framework/core-concepts/operator-configurations) that modify its behavior.


### [mutex](/docs/dpf/dpf-framework/core-concepts/operator-configurations)

- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/core-concepts/dpf-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: result

 **Plugin**: mapdl

 **Scripting name**: euler_nodes

 **Full name**: result.euler_nodes

 **Internal name**: coords_and_euler_nodes

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("coords_and_euler_nodes"); // operator instantiation
op.connect(3, my_streams_container);
op.connect(4, my_data_sources);
op.connect(5, my_filter_zeros);
op.connect(6, my_coord_and_euler);
op.connect(7, my_mesh);
ansys::dpf::FieldsContainer my_fields_container = op.getOutput<ansys::dpf::FieldsContainer>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.result.euler_nodes() # operator instantiation
op.inputs.streams_container.connect(my_streams_container)
op.inputs.data_sources.connect(my_data_sources)
op.inputs.filter_zeros.connect(my_filter_zeros)
op.inputs.coord_and_euler.connect(my_coord_and_euler)
op.inputs.mesh.connect(my_mesh)
my_fields_container = op.outputs.fields_container()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.result.euler_nodes() # operator instantiation
op.inputs.streams_container.Connect(my_streams_container)
op.inputs.data_sources.Connect(my_data_sources)
op.inputs.filter_zeros.Connect(my_filter_zeros)
op.inputs.coord_and_euler.Connect(my_coord_and_euler)
op.inputs.mesh.Connect(my_mesh)
my_fields_container = op.outputs.fields_container.GetData()
```
</details>
<br />

## Changelog

- Version 0.0.0: Initial release.