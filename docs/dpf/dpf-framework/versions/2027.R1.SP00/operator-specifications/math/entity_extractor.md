---
category: math
plugin: core
license: None
---

# math:entity extractor

**Version: 0.0.0**

## Description


Extracts a single scalar value from a field by its zero-based scoping index $k$ (pin 1).
The output field contains one entity: the entity whose scoping index is $k$,
with its entity ID resolved from the input scoping and its first data component copied.
Only the first component is extracted regardless of the input field's dimensionality.
Note: $k$ is the index within the field's scoping, not the entity ID.


## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [fieldA](#input_0) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`field`](../../core-concepts/dpf-types.md#field) |
| <strong>1</strong> | [scalar_int](#input_1) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`int32`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_0"></a>
### fieldA (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)

Input field from which the entity is extracted.

<a id="input_1"></a>
### scalar_int (Pin 1)

- **Required:** Yes
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)

Zero-based scoping index $k$ of the entity to extract.


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [field](#output_0) |[`field`](../../core-concepts/dpf-types.md#field) |
|  **1**| [int32](#output_1) |[`int32`](../../core-concepts/dpf-types.md#standard-types) |


<a id="output_0"></a>
### field (Pin 0)

- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)

Single-entity scalar field holding the first component of the extracted entity. The entity ID is the ID of the $k$-th entity in the input scoping. Always scalar regardless of the input field's dimensionality.

<a id="output_1"></a>
### int32 (Pin 1)

- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)

Echo of the input index $k$ (pin 1).


## Configurations

This operator supports [configuration options](../../core-concepts/operator-configurations.md) that modify its behavior.


### [mutex](../../core-concepts/operator-configurations.md#mutex)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: math

 **Plugin**: core

 **Scripting name**: None

 **Full name**: None

 **Internal name**: entity_extractor

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("entity_extractor"); // operator instantiation
op.connect(0, my_fieldA);
op.connect(1, my_scalar_int);
ansys::dpf::Field my_field = op.getOutput<ansys::dpf::Field>(0);
int my_int32 = op.getOutput<int>(1);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.math.None() # operator instantiation
op.inputs.fieldA.connect(my_fieldA)
op.inputs.scalar_int.connect(my_scalar_int)
my_field = op.outputs.field()
my_int32 = op.outputs.int32()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.math.None() # operator instantiation
op.inputs.fieldA.Connect(my_fieldA)
op.inputs.scalar_int.Connect(my_scalar_int)
my_field = op.outputs.field.GetData()
my_int32 = op.outputs.int32.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.