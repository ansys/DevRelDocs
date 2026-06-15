---
category: math
plugin: core
license: None
---

# math:dot (fields container)

**Version: 0.0.0**

## Description


Computes the generalized inner product between two fields,
dispatching the appropriate operation based on their dimensionalities:

| Pin 0 | Pin 1 | Operation | Result |
|---|---|---|---|
| vector field | vector field | [dot product](https://en.wikipedia.org/wiki/Dot_product) | scalar field |
| scalar field | any field | scaling | field (same dimensionality as B) |
| matrix field | matrix field | [matrix product](https://en.wikipedia.org/wiki/Matrix_multiplication) | matrix field |
| matrix field | vector field | matrix-vector product | vector field |

In Cartesian coordinates the vector $\cdot$ vector case is equivalent to the standard dot product.
An optional mesh (pin 2) is required when computing the finite-element dot product
between an elemental-nodal field and a nodal field.
If either input is empty, a dimensionless zero scalar field is returned.
The result covers the union of both field scopings;
entities present in only one field contribute zero.


## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [field_or_fields_container_A](#input_0) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container), [`double`](../../core-concepts/dpf-types.md#standard-types), [`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>1</strong> | [field_or_fields_container_B](#input_1) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container), [`double`](../../core-concepts/dpf-types.md#standard-types), [`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>2</strong> | [mesh](#input_2) |  |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |


<a id="input_0"></a>
### field_or_fields_container_A (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container), [`double`](../../core-concepts/dpf-types.md#standard-types), [`vector<double>`](../../core-concepts/dpf-types.md#standard-types)

field or fields container with only one field is expected

<a id="input_1"></a>
### field_or_fields_container_B (Pin 1)

- **Required:** Yes
- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container), [`double`](../../core-concepts/dpf-types.md#standard-types), [`vector<double>`](../../core-concepts/dpf-types.md#standard-types)

field or fields container with only one field is expected

<a id="input_2"></a>
### mesh (Pin 2)

- **Required:** No
- **Expected type(s):** [`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region)

Mesh required when computing the finite-element dot product between an elemental-nodal field (pin 0 or 1) and a nodal field.


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

Inner product result field; dimensionality and unit are determined by the dispatched operation.


## Configurations

This operator supports [configuration options](../../core-concepts/operator-configurations.md) that modify its behavior.


### [binary_operation](../../core-concepts/operator-configurations.md#binary_operation)

- **Expected type(s):** `binary_operation_enum`, [`int32`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** 1

This option allows to choose how two inputs will be treated together. eOnlyIntersection (0) means that the output will only contain the entities shared by all the inputs. eUnion (1) means that the output will contain all the entities contained in at least one of the inputs.

### [mutex](../../core-concepts/operator-configurations.md#mutex)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

### [num_threads](../../core-concepts/operator-configurations.md#num_threads)

- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** 0

Number of threads to use to run in parallel

### [permissive](../../core-concepts/operator-configurations.md#permissive)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, warning checks (like unit or data sizes) won't be done.

### [run_in_parallel](../../core-concepts/operator-configurations.md#run_in_parallel)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** true

Loops are allowed to run in parallel if the value of this config is set to true.

### [use_cache](../../core-concepts/operator-configurations.md#use_cache)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** true

Some intermediate data is put in cache if this config is set to true. This option can reduce computation time after the first run.

### [work_by_index](../../core-concepts/operator-configurations.md#work_by_index)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, loops and comparisons by entity will be done by index instead of ids.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: math

 **Plugin**: core

 **Scripting name**: generalized_inner_product_fc

 **Full name**: math.generalized_inner_product_fc

 **Internal name**: generalized_inner_product_fc

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("generalized_inner_product_fc"); // operator instantiation
op.connect(0, my_field_or_fields_container_A);
op.connect(1, my_field_or_fields_container_B);
op.connect(2, my_mesh);
ansys::dpf::FieldsContainer my_fields_container = op.getOutput<ansys::dpf::FieldsContainer>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.math.generalized_inner_product_fc() # operator instantiation
op.inputs.field_or_fields_container_A.connect(my_field_or_fields_container_A)
op.inputs.field_or_fields_container_B.connect(my_field_or_fields_container_B)
op.inputs.mesh.connect(my_mesh)
my_fields_container = op.outputs.fields_container()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.math.generalized_inner_product_fc() # operator instantiation
op.inputs.field_or_fields_container_A.Connect(my_field_or_fields_container_A)
op.inputs.field_or_fields_container_B.Connect(my_field_or_fields_container_B)
op.inputs.mesh.Connect(my_mesh)
my_fields_container = op.outputs.fields_container.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.