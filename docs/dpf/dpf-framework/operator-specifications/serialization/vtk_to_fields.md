---
category: serialization
plugin: vtk
license: None
---

# serialization:vtk to fields

**Version: 0.0.0**

## Description

Write a field based on a vtk file.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [field_name](/docs/dpf/dpf-framework/operator-specifications/serialization/vtk_to_fields) |  |[`string`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
| <strong>3</strong> | [streams](/docs/dpf/dpf-framework/operator-specifications/serialization/vtk_to_fields) |  |[`streams_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
| <strong>4</strong> | [data_sources](/docs/dpf/dpf-framework/operator-specifications/serialization/vtk_to_fields) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`data_sources`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |


<a id="input_0"></a>
### field_name (Pin 0)

- **Required:** No
- **Expected type(s):** [`string`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

name of the field in the vtk file

<a id="input_3"></a>
### streams (Pin 3)

- **Required:** No
- **Expected type(s):** [`streams_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types)



<a id="input_4"></a>
### data_sources (Pin 4)

- **Required:** Yes
- **Expected type(s):** [`data_sources`](/docs/dpf/dpf-framework/core-concepts/dpf-types)




## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [fields_container](/docs/dpf/dpf-framework/operator-specifications/serialization/vtk_to_fields) |[`fields_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |


<a id="output_0"></a>
### fields_container (Pin 0)

- **Expected type(s):** [`fields_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

fields_container


## Configurations

This operator supports [configuration options](/docs/dpf/dpf-framework/core-concepts/operator-configurations) that modify its behavior.


### [mutex](/docs/dpf/dpf-framework/core-concepts/operator-configurations)

- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/core-concepts/dpf-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: serialization

 **Plugin**: vtk

 **Scripting name**: vtk_to_fields

 **Full name**: serialization.vtk_to_fields

 **Internal name**: vtk::vtk::FieldProvider

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("vtk::vtk::FieldProvider"); // operator instantiation
op.connect(0, my_field_name);
op.connect(3, my_streams);
op.connect(4, my_data_sources);
ansys::dpf::FieldsContainer my_fields_container = op.getOutput<ansys::dpf::FieldsContainer>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.serialization.vtk_to_fields() # operator instantiation
op.inputs.field_name.connect(my_field_name)
op.inputs.streams.connect(my_streams)
op.inputs.data_sources.connect(my_data_sources)
my_fields_container = op.outputs.fields_container()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.serialization.vtk_to_fields() # operator instantiation
op.inputs.field_name.Connect(my_field_name)
op.inputs.streams.Connect(my_streams)
op.inputs.data_sources.Connect(my_data_sources)
my_fields_container = op.outputs.fields_container.GetData()
```
</details>
<br />

## Changelog

- Version 0.0.0: Initial release.