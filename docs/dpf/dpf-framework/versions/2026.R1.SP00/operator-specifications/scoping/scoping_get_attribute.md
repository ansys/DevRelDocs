---
category: scoping
plugin: core
license: None
---

# scoping:scoping get attribute

**Version: 0.0.0**

## Description

Uses the Scoping APIs to return a given attribute of the scoping in input.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping) |  |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  property_name |[`string`](../../core-concepts/dpf-types.md#standard-types) | Supported property names are: "ids", "location". |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| property |[`vector<int32>`](../../core-concepts/dpf-types.md#standard-types), [`string`](../../core-concepts/dpf-types.md#standard-types) | Returns a vector of int for property: "ids" and a string for property: "location". |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: scoping

 **Plugin**: core

 **Scripting name**: scoping_get_attribute

 **Full name**: scoping.scoping_get_attribute

 **Internal name**: scoping::get_attribute

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("scoping::get_attribute"); // operator instantiation
op.connect(0, my_scoping);
op.connect(1, my_property_name);
std::vector<int> my_property = op.getOutput<std::vector<int>>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.scoping.scoping_get_attribute() # operator instantiation
op.inputs.scoping.connect(my_scoping)
op.inputs.property_name.connect(my_property_name)
my_property_as_vector<int32> = op.outputs.property_as_vector<int32>()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.scoping.scoping_get_attribute() # operator instantiation
op.inputs.scoping.Connect(my_scoping)
op.inputs.property_name.Connect(my_property_name)
my_property = op.outputs.property.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.