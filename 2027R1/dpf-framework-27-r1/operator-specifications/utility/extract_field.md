---
category: utility
plugin: core
license: None
---

# utility:extract field

**Version: 0.0.0**

## Description

Extracts the fields at the indices defined in the vector (in 1) from the fields container (in 0). If a single index is provided, returns a field; if multiple indices are provided, returns a fields container.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [fields_container](#input_0) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
| <strong>1</strong> | [indices](#input_1) |  |[`vector<int32>`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_0"></a>
### fields_container (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

Fields container or single field. If a field is provided, it is passed through as output

<a id="input_1"></a>
### indices (Pin 1)

- **Required:** No
- **Expected type(s):** [`vector<int32>`](../../core-concepts/dpf-types.md#standard-types)

Indices of fields to extract. Default is [0] (first field). Single index returns a field, multiple indices return a fields container


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [field](#output_0) |[`field`](../../core-concepts/dpf-types.md#field) |


<a id="output_0"></a>
### field (Pin 0)

- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)

Extracted field(s). Single index produces a field, multiple indices produce a fields container


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

 **Scripting name**: extract_field

 **Full name**: utility.extract_field

 **Internal name**: ExtractFromFC

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("ExtractFromFC"); // operator instantiation
op.connect(0, my_fields_container);
op.connect(1, my_indices);
ansys::dpf::Field my_field = op.getOutput<ansys::dpf::Field>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.utility.extract_field() # operator instantiation
op.inputs.fields_container.connect(my_fields_container)
op.inputs.indices.connect(my_indices)
my_field = op.outputs.field()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.utility.extract_field() # operator instantiation
op.inputs.fields_container.Connect(my_fields_container)
op.inputs.indices.Connect(my_indices)
my_field = op.outputs.field.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.