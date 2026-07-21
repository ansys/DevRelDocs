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

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [fields](#input_0) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`property_fields_container`](../../core-concepts/dpf-types.md#property-fields-container), [`property_field`](../../core-concepts/dpf-types.md#property-field) |
| <strong>1</strong> | [mesh_scoping](#input_1) |  |[`scoping`](../../core-concepts/dpf-types.md#scoping), [`vector<int32>`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>2</strong> | [default_value](#input_2) |  |[`int32`](../../core-concepts/dpf-types.md#standard-types), [`vector<int32>`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_0"></a>
### fields (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`property_fields_container`](../../core-concepts/dpf-types.md#property-fields-container), [`property_field`](../../core-concepts/dpf-types.md#property-field)



<a id="input_1"></a>
### mesh_scoping (Pin 1)

- **Required:** No
- **Expected type(s):** [`scoping`](../../core-concepts/dpf-types.md#scoping), [`vector<int32>`](../../core-concepts/dpf-types.md#standard-types)



<a id="input_2"></a>
### default_value (Pin 2)

- **Required:** No
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types), [`vector<int32>`](../../core-concepts/dpf-types.md#standard-types)

If pin 2 is used, the IDs not found in the property field are added with this default value.


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [fields](#output_0) |[`property_fields_container`](../../core-concepts/dpf-types.md#property-fields-container), [`property_field`](../../core-concepts/dpf-types.md#property-field) |


<a id="output_0"></a>
### fields (Pin 0)

- **Expected type(s):** [`property_fields_container`](../../core-concepts/dpf-types.md#property-fields-container), [`property_field`](../../core-concepts/dpf-types.md#property-field)




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

 **Scripting name**: rescope_property_field

 **Full name**: scoping.rescope_property_field

 **Internal name**: Rescope_pf

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

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