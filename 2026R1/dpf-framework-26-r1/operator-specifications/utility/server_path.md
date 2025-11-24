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

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong>|  subpath |[`int32`](../../core-concepts/dpf-types.md#standard-types) | Subpath of the Dpf server. Supported values: 0 (default): root of the server, 1: "dpf/bin/platform", 2: "aisol/bin(dll)/platform", 3: "dpf/plugins", 4: "dpf/workflows". |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| path |[`string`](../../core-concepts/dpf-types.md#standard-types) | Path to the requested folder in the Dpf server |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: utility

 **Plugin**: core

 **Scripting name**: server_path

 **Full name**: utility.server_path

 **Internal name**: server_path

 **License**: None

## Examples

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