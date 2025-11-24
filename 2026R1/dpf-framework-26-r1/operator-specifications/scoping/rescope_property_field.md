---
category: scoping
plugin: core
license: None
---

# scoping:rescope property field

**Version: 0.0.0**

## Description

Rescopes a property field on the given scoping. If an ID does not exist in the original property field, the default value (in 2) is used when defined.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields |[`property_fields_container`](../../core-concepts/dpf-types.md#property-fields-container), [`property_field`](../../core-concepts/dpf-types.md#property-field) |  |
| <strong>Pin 1</strong>|  mesh_scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping), [`vector<int32>`](../../core-concepts/dpf-types.md#standard-types) |  |
| <strong>Pin 2</strong>|  default_value |[`int32`](../../core-concepts/dpf-types.md#standard-types), [`vector<int32>`](../../core-concepts/dpf-types.md#standard-types) | If pin 2 is used, the IDs not found in the property field are added with this default value. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| fields |[`property_fields_container`](../../core-concepts/dpf-types.md#property-fields-container), [`property_field`](../../core-concepts/dpf-types.md#property-field) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **num_threads** |[`int32`](../../core-concepts/dpf-types.md#standard-types) | 0 | Number of threads to use to run in parallel |
| **run_in_parallel** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | true | Loops are allowed to run in parallel if the value of this config is set to true. |

## Scripting

 **Category**: scoping

 **Plugin**: core

 **Scripting name**: rescope_property_field

 **Full name**: scoping.rescope_property_field

 **Internal name**: Rescope_pf

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("Rescope_pf"); // operator instantiation
op.connect(0, my_fields);
op.connect(1, my_mesh_scoping);
op.connect(2, my_default_value);
ansys::dpf::PropertyFieldsContainer my_fields = op.getOutput<ansys::dpf::PropertyFieldsContainer>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.scoping.rescope_property_field() # operator instantiation
op.inputs.fields.connect(my_fields)
op.inputs.mesh_scoping.connect(my_mesh_scoping)
op.inputs.default_value.connect(my_default_value)
my_fields_as_property_fields_container = op.outputs.fields_as_property_fields_container()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.scoping.rescope_property_field() # operator instantiation
op.inputs.fields.Connect(my_fields)
op.inputs.mesh_scoping.Connect(my_mesh_scoping)
op.inputs.default_value.Connect(my_default_value)
my_fields = op.outputs.fields.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.