---
category: scoping
plugin: core
license: None
---

# scoping:adapt with scopings container

**Version: 0.0.0**

## Description

Rescopes/splits a fields container to correspond to a scopings container. Each field from the input container is rescoped using each scoping from the scopings container, creating a cartesian product of rescoped fields.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  field_or_fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container), [`field`](../../core-concepts/dpf-types.md#field) | Fields container to rescope, or a single field (which will be converted to a container) |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  scopings_container |[`scopings_container`](../../core-concepts/dpf-types.md#scopings-container) | Container with target scopings for rescoping operations |
| <strong>Pin 2</strong>|  keep_empty_fields |[`bool`](../../core-concepts/dpf-types.md#standard-types) | Whether to keep fields that become empty after rescoping. Default is false. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Fields container with rescoped fields, combining labels from input fields and scopings |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **num_threads** |[`int32`](../../core-concepts/dpf-types.md#standard-types) | 0 | Number of threads to use to run in parallel |
| **run_in_parallel** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | true | Loops are allowed to run in parallel if the value of this config is set to true. |

## Scripting

 **Category**: scoping

 **Plugin**: core

 **Scripting name**: adapt_with_scopings_container

 **Full name**: scoping.adapt_with_scopings_container

 **Internal name**: rescope_fc

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("rescope_fc"); // operator instantiation
op.connect(0, my_field_or_fields_container);
op.connect(1, my_scopings_container);
op.connect(2, my_keep_empty_fields);
ansys::dpf::FieldsContainer my_fields_container = op.getOutput<ansys::dpf::FieldsContainer>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.scoping.adapt_with_scopings_container() # operator instantiation
op.inputs.field_or_fields_container.connect(my_field_or_fields_container)
op.inputs.scopings_container.connect(my_scopings_container)
op.inputs.keep_empty_fields.connect(my_keep_empty_fields)
my_fields_container = op.outputs.fields_container()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.scoping.adapt_with_scopings_container() # operator instantiation
op.inputs.field_or_fields_container.Connect(my_field_or_fields_container)
op.inputs.scopings_container.Connect(my_scopings_container)
op.inputs.keep_empty_fields.Connect(my_keep_empty_fields)
my_fields_container = op.outputs.fields_container.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.