---
category: scoping
plugin: core
license: None
---

# scoping:adapt with scopings container

**Version: 0.0.0**

## Description

DEPRECATED, PLEASE USE ADAPT WITH SCOPINGS CONTAINER. Rescopes/splits a fields container to correspond to a scopings container.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [field_or_fields_container](#input_0) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`fields_container`](../../core-concepts/dpf-types.md#fields-container), [`field`](../../core-concepts/dpf-types.md#field) |
| <strong>1</strong> | [scopings_container](#input_1) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`scopings_container`](../../core-concepts/dpf-types.md#scopings-container) |


<a id="input_0"></a>
### field_or_fields_container (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container), [`field`](../../core-concepts/dpf-types.md#field)

Field or fields container to rescope

<a id="input_1"></a>
### scopings_container (Pin 1)

- **Required:** Yes
- **Expected type(s):** [`scopings_container`](../../core-concepts/dpf-types.md#scopings-container)

Scopings container for rescoping operation


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [fields_container](#output_0) |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |


<a id="output_0"></a>
### fields_container (Pin 0)

- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

FieldsContainer rescoped according to scopings container (DEPRECATED - use adapt with scopings container)


## Configurations

This operator supports [configuration options](../../core-concepts/operator-configurations.md) that modify its behavior.


### [mutex](../../core-concepts/operator-configurations.md#mutex)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

### [num_threads](../../core-concepts/operator-configurations.md#num_threads)

- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** 0

Number of threads to use to run in parallel

### [run_in_parallel](../../core-concepts/operator-configurations.md#run_in_parallel)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** true

Loops are allowed to run in parallel if the value of this config is set to true.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: scoping

 **Plugin**: core

 **Scripting name**: change_fc

 **Full name**: scoping.change_fc

 **Internal name**: change_fc

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("change_fc"); // operator instantiation
op.connect(0, my_field_or_fields_container);
op.connect(1, my_scopings_container);
ansys::dpf::FieldsContainer my_fields_container = op.getOutput<ansys::dpf::FieldsContainer>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.scoping.change_fc() # operator instantiation
op.inputs.field_or_fields_container.connect(my_field_or_fields_container)
op.inputs.scopings_container.connect(my_scopings_container)
my_fields_container = op.outputs.fields_container()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.scoping.change_fc() # operator instantiation
op.inputs.field_or_fields_container.Connect(my_field_or_fields_container)
op.inputs.scopings_container.Connect(my_scopings_container)
my_fields_container = op.outputs.fields_container.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.