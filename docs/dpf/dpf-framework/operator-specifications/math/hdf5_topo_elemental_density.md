---
category: math
plugin: core
license: None
---

# math:dot (by scalar field)

**Version: 0.0.0**

## Description

Extract Elemental Topology Density result from topo solver output. Default behavior is to use graphical density.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [time_scoping](/docs/dpf/dpf-framework/operator-specifications/math/hdf5_topo_elemental_density) |  |[`scoping`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
| <strong>1</strong> | [mesh_scoping](/docs/dpf/dpf-framework/operator-specifications/math/hdf5_topo_elemental_density) |  |[`scoping`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
| <strong>3</strong> | [streams](/docs/dpf/dpf-framework/operator-specifications/math/hdf5_topo_elemental_density) |  |[`streams_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
| <strong>4</strong> | [data_sources](/docs/dpf/dpf-framework/operator-specifications/math/hdf5_topo_elemental_density) |  |[`data_sources`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
| <strong>200</strong> | [custom_ponderation_name](/docs/dpf/dpf-framework/operator-specifications/math/hdf5_topo_elemental_density) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`string`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |


<a id="input_0"></a>
### time_scoping (Pin 0)

- **Required:** No
- **Expected type(s):** [`scoping`](/docs/dpf/dpf-framework/core-concepts/dpf-types)



<a id="input_1"></a>
### mesh_scoping (Pin 1)

- **Required:** No
- **Expected type(s):** [`scoping`](/docs/dpf/dpf-framework/core-concepts/dpf-types)



<a id="input_3"></a>
### streams (Pin 3)

- **Required:** No
- **Expected type(s):** [`streams_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

topo file stream.

<a id="input_4"></a>
### data_sources (Pin 4)

- **Required:** No
- **Expected type(s):** [`data_sources`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

topo file data source.

<a id="input_200"></a>
### custom_ponderation_name (Pin 200)

- **Required:** Yes
- **Expected type(s):** [`string`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

take custom ponderation_field from the topo file by name


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [field](/docs/dpf/dpf-framework/operator-specifications/math/hdf5_topo_elemental_density) |[`field`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |


<a id="output_0"></a>
### field (Pin 0)

- **Expected type(s):** [`field`](/docs/dpf/dpf-framework/core-concepts/dpf-types)




## Configurations

This operator supports [configuration options](/docs/dpf/dpf-framework/core-concepts/operator-configurations) that modify its behavior.


### [mutex](/docs/dpf/dpf-framework/core-concepts/operator-configurations)

- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/core-concepts/dpf-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: math

 **Plugin**: core

 **Scripting name**: None

 **Full name**: None

 **Internal name**: hdf5::topo::elemental_density

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("hdf5::topo::elemental_density"); // operator instantiation
op.connect(0, my_time_scoping);
op.connect(1, my_mesh_scoping);
op.connect(3, my_streams);
op.connect(4, my_data_sources);
op.connect(200, my_custom_ponderation_name);
ansys::dpf::Field my_field = op.getOutput<ansys::dpf::Field>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.math.None() # operator instantiation
op.inputs.time_scoping.connect(my_time_scoping)
op.inputs.mesh_scoping.connect(my_mesh_scoping)
op.inputs.streams.connect(my_streams)
op.inputs.data_sources.connect(my_data_sources)
op.inputs.custom_ponderation_name.connect(my_custom_ponderation_name)
my_field = op.outputs.field()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.math.None() # operator instantiation
op.inputs.time_scoping.Connect(my_time_scoping)
op.inputs.mesh_scoping.Connect(my_mesh_scoping)
op.inputs.streams.Connect(my_streams)
op.inputs.data_sources.Connect(my_data_sources)
op.inputs.custom_ponderation_name.Connect(my_custom_ponderation_name)
my_field = op.outputs.field.GetData()
```
</details>
<br />

## Changelog

- Version 0.0.0: Initial release.