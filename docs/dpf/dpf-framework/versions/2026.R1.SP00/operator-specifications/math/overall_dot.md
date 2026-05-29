---
category: math
plugin: core
license: None
---

# math:overall dot

**Version: 0.0.0**

## Description

Computes a dot product between two fields (fields are seen like a single large vector) and returns a scalar.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [fieldA](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/math/overall_dot) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`field`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |
| <strong>1</strong> | [fieldB](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/math/overall_dot) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`field`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |


<a id="input_0"></a>
### fieldA (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`field`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)



<a id="input_1"></a>
### fieldB (Pin 1)

- **Required:** Yes
- **Expected type(s):** [`field`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)




## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [field](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/math/overall_dot) |[`field`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |


<a id="output_0"></a>
### field (Pin 0)

- **Expected type(s):** [`field`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)

Field defined on over-all location, contains a unique scalar value


## Configurations

This operator supports [configuration options](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/operator-configurations) that modify its behavior.


### [mutex](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/operator-configurations)

- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: math

 **Plugin**: core

 **Scripting name**: overall_dot

 **Full name**: math.overall_dot

 **Internal name**: native::overall_dot

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("native::overall_dot"); // operator instantiation
op.connect(0, my_fieldA);
op.connect(1, my_fieldB);
ansys::dpf::Field my_field = op.getOutput<ansys::dpf::Field>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.math.overall_dot() # operator instantiation
op.inputs.fieldA.connect(my_fieldA)
op.inputs.fieldB.connect(my_fieldB)
my_field = op.outputs.field()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.math.overall_dot() # operator instantiation
op.inputs.fieldA.Connect(my_fieldA)
op.inputs.fieldB.Connect(my_fieldB)
my_field = op.outputs.field.GetData()
```
</details>
<br />

## Changelog

- Version 0.0.0: Initial release.