---
category: utility
plugin: core
license: None
---

# utility:server path

**Version: 0.0.0**

## Description

Returns the platform-specific path to a folder in the Dpf server

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [subpath](#input_0) |  |[`int32`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_0"></a>
### subpath (Pin 0)

- **Required:** No
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)

Subpath of the Dpf server. Supported values: 0 (default): root of the server, 1: "dpf/bin/platform", 2: "aisol/bin(dll)/platform", 3: "dpf/plugins", 4: "dpf/workflows".


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [path](#output_0) |[`string`](../../core-concepts/dpf-types.md#standard-types) |


<a id="output_0"></a>
### path (Pin 0)

- **Expected type(s):** [`string`](../../core-concepts/dpf-types.md#standard-types)

Path to the requested folder in the Dpf server


## Configurations

This operator supports [configuration options](../../core-concepts/operator-configurations.md) that modify its behavior.


### [mutex](../../core-concepts/operator-configurations.md#mutex)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: utility

 **Plugin**: core

 **Scripting name**: server_path

 **Full name**: utility.server_path

 **Internal name**: server_path

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("server_path"); // operator instantiation
op.connect(0, my_subpath);
std::string my_path = op.getOutput<std::string>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.utility.server_path() # operator instantiation
op.inputs.subpath.connect(my_subpath)
my_path = op.outputs.path()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.utility.server_path() # operator instantiation
op.inputs.subpath.Connect(my_subpath)
my_path = op.outputs.path.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.