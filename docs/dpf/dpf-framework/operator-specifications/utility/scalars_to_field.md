---
category: utility
plugin: core
license: None
---

# utility:convert to field

**Version: 0.0.0**

## Description

Creates a scalar or vector field from numeric data. Converts scalar values or vectors into a DPF field with specified properties.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [double_or_vector_double](/docs/dpf/dpf-framework/operator-specifications/utility/scalars_to_field) |  |[`double`](/docs/dpf/dpf-framework/core-concepts/dpf-types), [`vector&lt;double&gt;`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
| <strong>1</strong> | [unit](/docs/dpf/dpf-framework/operator-specifications/utility/scalars_to_field) |  |[`string`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
| <strong>2</strong> | [location](/docs/dpf/dpf-framework/operator-specifications/utility/scalars_to_field) |  |[`string`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
| <strong>3</strong> | [num_entities](/docs/dpf/dpf-framework/operator-specifications/utility/scalars_to_field) |  |[`int32`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
| <strong>4</strong> | [num_components](/docs/dpf/dpf-framework/operator-specifications/utility/scalars_to_field) |  |[`int32`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
| <strong>5</strong> | [scoping](/docs/dpf/dpf-framework/operator-specifications/utility/scalars_to_field) |  |[`scoping`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |


<a id="input_0"></a>
### double_or_vector_double (Pin 0)

- **Required:** No
- **Expected type(s):** [`double`](/docs/dpf/dpf-framework/core-concepts/dpf-types), [`vector&lt;double&gt;`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

Data of the field. Default is 0-field. Specify a double to create a field with uniform values, or a vector for explicit data per entity

<a id="input_1"></a>
### unit (Pin 1)

- **Required:** No
- **Expected type(s):** [`string`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

Unit symbol (m, Hz, kg, ...). Default is dimensionless

<a id="input_2"></a>
### location (Pin 2)

- **Required:** No
- **Expected type(s):** [`string`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

Location of the field: 'Nodal', 'ElementalNodal', 'Elemental', etc. Default is 'numeric'

<a id="input_3"></a>
### num_entities (Pin 3)

- **Required:** No
- **Expected type(s):** [`int32`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

Number of field entities. Default is 1, or the size of the scoping if provided

<a id="input_4"></a>
### num_components (Pin 4)

- **Required:** No
- **Expected type(s):** [`int32`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

Number of field components per entity. Default is 1 for scalar, >1 for vector

<a id="input_5"></a>
### scoping (Pin 5)

- **Required:** No
- **Expected type(s):** [`scoping`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

Scoping defining entity IDs and locations. If provided, overrides num_entities


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [field](/docs/dpf/dpf-framework/operator-specifications/utility/scalars_to_field) |[`field`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |


<a id="output_0"></a>
### field (Pin 0)

- **Expected type(s):** [`field`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

Generated field with specified data and properties


## Configurations

This operator supports [configuration options](/docs/dpf/dpf-framework/core-concepts/operator-configurations) that modify its behavior.


### [mutex](/docs/dpf/dpf-framework/core-concepts/operator-configurations)

- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/core-concepts/dpf-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: utility

 **Plugin**: core

 **Scripting name**: scalars_to_field

 **Full name**: utility.scalars_to_field

 **Internal name**: fieldify

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("fieldify"); // operator instantiation
op.connect(0, my_double_or_vector_double);
op.connect(1, my_unit);
op.connect(2, my_location);
op.connect(3, my_num_entities);
op.connect(4, my_num_components);
op.connect(5, my_scoping);
ansys::dpf::Field my_field = op.getOutput<ansys::dpf::Field>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.utility.scalars_to_field() # operator instantiation
op.inputs.double_or_vector_double.connect(my_double_or_vector_double)
op.inputs.unit.connect(my_unit)
op.inputs.location.connect(my_location)
op.inputs.num_entities.connect(my_num_entities)
op.inputs.num_components.connect(my_num_components)
op.inputs.scoping.connect(my_scoping)
my_field = op.outputs.field()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.utility.scalars_to_field() # operator instantiation
op.inputs.double_or_vector_double.Connect(my_double_or_vector_double)
op.inputs.unit.Connect(my_unit)
op.inputs.location.Connect(my_location)
op.inputs.num_entities.Connect(my_num_entities)
op.inputs.num_components.Connect(my_num_components)
op.inputs.scoping.Connect(my_scoping)
my_field = op.outputs.field.GetData()
```
</details>
<br />

## Changelog

- Version 0.0.0: Initial release.