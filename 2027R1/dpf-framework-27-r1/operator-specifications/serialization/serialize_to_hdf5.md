---
category: serialization
plugin: core
license: None
---

# serialization:serialize to hdf5

**Version: 0.0.0**

## Description

This operator is deprecated: use 'hdf5dpf_generate_result_file' instead. Serialize the inputs in an hdf5 format.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [file_path](#input_0) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`string`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>1</strong> | [export_floats](#input_1) |  |[`bool`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>2</strong> | [export_flat_vectors](#input_2) |  |[`bool`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>3</strong> | [data](#input_3) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>| |


<a id="input_0"></a>
### file_path (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`string`](../../core-concepts/dpf-types.md#standard-types)

output file path with .h5 extension

<a id="input_1"></a>
### export_floats (Pin 1)

- **Required:** No
- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)

converts double to float to reduce file size (default is true)

<a id="input_2"></a>
### export_flat_vectors (Pin 2)

- **Required:** No
- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)

if true, vectors and matrices data are exported flat (x1,y1,z1,x2,y2,z2..) (default is false)

<a id="input_3"></a>
### data (Pin 3)

- **Required:** Yes
- **Expected type(s):** 

only the data set explicitly to export is exported


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

 **Plugin**: core

 **Scripting name**: serialize_to_hdf5

 **Full name**: serialization.serialize_to_hdf5

 **Internal name**: serialize_to_hdf5

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("serialize_to_hdf5"); // operator instantiation
op.connect(0, my_file_path);
op.connect(1, my_export_floats);
op.connect(2, my_export_flat_vectors);
op.connect(3, my_data);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.serialization.serialize_to_hdf5() # operator instantiation
op.inputs.file_path.connect(my_file_path)
op.inputs.export_floats.connect(my_export_floats)
op.inputs.export_flat_vectors.connect(my_export_flat_vectors)
op.inputs.data1.connect(my_data1)
op.inputs.data2.connect(my_data2)
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.serialization.serialize_to_hdf5() # operator instantiation
op.inputs.file_path.Connect(my_file_path)
op.inputs.export_floats.Connect(my_export_floats)
op.inputs.export_flat_vectors.Connect(my_export_flat_vectors)
op.inputs.data.Connect(my_data)
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.