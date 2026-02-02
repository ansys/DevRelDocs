---
category: utility
plugin: core
license: None
---

# utility:default value

**Version: 0.0.0**

## Description

Returns the value from pin 0 if provided, otherwise returns the default value from pin 1. This operator acts as a fallback mechanism for optional inputs.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong>|  forced_value | | Primary value to return if provided. Can be any type |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  default_value | | Default value to return if pin 0 is not connected. Must be the same type as pin 0 |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| output | | Returns primary_value if provided, otherwise default_value |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: utility

 **Plugin**: core

 **Scripting name**: default_value

 **Full name**: utility.default_value

 **Internal name**: default_value

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("default_value"); // operator instantiation
op.connect(0, my_forced_value);
op.connect(1, my_default_value);
 my_output = op.getOutput<>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.utility.default_value() # operator instantiation
op.inputs.forced_value.connect(my_forced_value)
op.inputs.default_value.connect(my_default_value)
my_output = op.outputs.output()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.utility.default_value() # operator instantiation
op.inputs.forced_value.Connect(my_forced_value)
op.inputs.default_value.Connect(my_default_value)
my_output = op.outputs.output.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.