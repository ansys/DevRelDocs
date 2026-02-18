---
category: serialization
plugin: vtk
license: None
---

# serialization:vtk export

**Version: 0.0.0**

## Description

Write the input field and fields container into a given vtk path

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>-1</strong> | [export_type](#input_-1) |  |[`int32`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>0</strong> | [file_path](#input_0) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`string`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>1</strong> | [mesh](#input_1) |  |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |
| <strong>2</strong> | [fields](#input_2) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`fields_container`](../../core-concepts/dpf-types.md#fields-container), [`field`](../../core-concepts/dpf-types.md#field) |


<a id="input_-1"></a>
### export_type (Pin -1)

- **Required:** No
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)

Either export volume elements in the mesh with their fields with value 0 or faces elements in the mesh with their fields with value 1 (default is 0)

<a id="input_0"></a>
### file_path (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`string`](../../core-concepts/dpf-types.md#standard-types)

path with vtk extension were the export occurs

<a id="input_1"></a>
### mesh (Pin 1)

- **Required:** No
- **Expected type(s):** [`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region)

necessary if the first field or fields container don't have a mesh in their support

<a id="input_2"></a>
### fields (Pin 2)

- **Required:** Yes
- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container), [`field`](../../core-concepts/dpf-types.md#field)

fields exported


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|



## Configurations

This operator supports [configuration options](../../core-concepts/operator-configurations.md) that modify its behavior.


### [mutex](../../core-concepts/operator-configurations.md#mutex)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: serialization

 **Plugin**: vtk

 **Scripting name**: vtk_export

 **Full name**: serialization.vtk_export

 **Internal name**: vtk_export

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("vtk_export"); // operator instantiation
op.connect(-1, my_export_type);
op.connect(0, my_file_path);
op.connect(1, my_mesh);
op.connect(2, my_fields);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.serialization.vtk_export() # operator instantiation
op.inputs.export_type.connect(my_export_type)
op.inputs.file_path.connect(my_file_path)
op.inputs.mesh.connect(my_mesh)
op.inputs.fields1.connect(my_fields1)
op.inputs.fields2.connect(my_fields2)
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.serialization.vtk_export() # operator instantiation
op.inputs.export_type.Connect(my_export_type)
op.inputs.file_path.Connect(my_file_path)
op.inputs.mesh.Connect(my_mesh)
op.inputs.fields.Connect(my_fields)
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.