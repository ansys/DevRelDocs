---
category: logic
plugin: core
license: None
---

# logic:same generic data containers?

**Version: 0.0.0**

## Description

Takes two generic data containers and compares them. Supported types: Field, FieldsContainer, Mesh, MeshesContainer, PropertyField, PropertyFieldsContainer, Scoping, ScopingsContainer, StringFieldstandard types (double, int, string, vector of int, doubles, string)Note: all inputs related to fields, mesh, and so on are passed to each property check.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  generic_data_containerA |[`generic_data_container`](../../core-concepts/dpf-types.md#generic-data-container) |  |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  generic_data_containerB |[`generic_data_container`](../../core-concepts/dpf-types.md#generic-data-container) |  |
| <strong>Pin 2</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  double_value |[`double`](../../core-concepts/dpf-types.md#standard-types) | Double positive small value. Smallest value considered during the comparison step. All the absolute values in the field less than this value are considered null, (default value: 1.0e-14). |
| <strong>Pin 3</strong>|  double_tolerance |[`double`](../../core-concepts/dpf-types.md#standard-types) | Double relative tolerance. Maximum tolerance gap between two compared values. Values within relative tolerance are considered identical. Formula is (v1-v2)/v2 < relativeTol. Default is 0.001. |
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  compare_auxiliary |[`bool`](../../core-concepts/dpf-types.md#standard-types) | For meshes and meshescontainer: compare auxiliary data (i.e property fields, scopings...). Default value is 'false'. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| included |[`bool`](../../core-concepts/dpf-types.md#standard-types) | bool (true if belongs...) |
|  **Pin 1**| message |[`string`](../../core-concepts/dpf-types.md#standard-types) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: logic

 **Plugin**: core

 **Scripting name**: identical_generic_data_containers

 **Full name**: logic.identical_generic_data_containers

 **Internal name**: compare::generic_data_container

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("compare::generic_data_container"); // operator instantiation
op.connect(0, my_generic_data_containerA);
op.connect(1, my_generic_data_containerB);
op.connect(2, my_double_value);
op.connect(3, my_double_tolerance);
op.connect(4, my_compare_auxiliary);
bool my_included = op.getOutput<bool>(0);
std::string my_message = op.getOutput<std::string>(1);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.logic.identical_generic_data_containers() # operator instantiation
op.inputs.generic_data_containerA.connect(my_generic_data_containerA)
op.inputs.generic_data_containerB.connect(my_generic_data_containerB)
op.inputs.double_value.connect(my_double_value)
op.inputs.double_tolerance.connect(my_double_tolerance)
op.inputs.compare_auxiliary.connect(my_compare_auxiliary)
my_included = op.outputs.included()
my_message = op.outputs.message()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.logic.identical_generic_data_containers() # operator instantiation
op.inputs.generic_data_containerA.Connect(my_generic_data_containerA)
op.inputs.generic_data_containerB.Connect(my_generic_data_containerB)
op.inputs.double_value.Connect(my_double_value)
op.inputs.double_tolerance.Connect(my_double_tolerance)
op.inputs.compare_auxiliary.Connect(my_compare_auxiliary)
my_included = op.outputs.included.GetData()
my_message = op.outputs.message.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.