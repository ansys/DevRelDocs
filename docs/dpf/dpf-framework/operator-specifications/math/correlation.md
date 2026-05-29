---
category: math
plugin: core
license: any_dpf_supported_increments
---

# math:correlation

**Version: 0.0.0**

## Description

Takes two fields and a weighting and computes their correlation: aMb/(||aMa||.||bMb||). If several b fields are provided (via a fields container), correlation is computed for each of them.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [fieldA](/docs/dpf/dpf-framework/operator-specifications/math/correlation) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`field`](/docs/dpf/dpf-framework/core-concepts/dpf-types), [`double`](/docs/dpf/dpf-framework/core-concepts/dpf-types), [`vector&lt;double&gt;`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
| <strong>1</strong> | [fieldB](/docs/dpf/dpf-framework/operator-specifications/math/correlation) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`field`](/docs/dpf/dpf-framework/core-concepts/dpf-types), [`fields_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
| <strong>2</strong> | [weights](/docs/dpf/dpf-framework/operator-specifications/math/correlation) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`field`](/docs/dpf/dpf-framework/core-concepts/dpf-types), [`fields_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
| <strong>3</strong> | [absoluteValue](/docs/dpf/dpf-framework/operator-specifications/math/correlation) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`bool`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |


<a id="input_0"></a>
### fieldA (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`field`](/docs/dpf/dpf-framework/core-concepts/dpf-types), [`double`](/docs/dpf/dpf-framework/core-concepts/dpf-types), [`vector&lt;double&gt;`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

Field a. The reference field.

<a id="input_1"></a>
### fieldB (Pin 1)

- **Required:** Yes
- **Expected type(s):** [`field`](/docs/dpf/dpf-framework/core-concepts/dpf-types), [`fields_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

Field b. If a fields container is provided, correlation is computed for each field.

<a id="input_2"></a>
### weights (Pin 2)

- **Required:** Yes
- **Expected type(s):** [`field`](/docs/dpf/dpf-framework/core-concepts/dpf-types), [`fields_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

Field M, optional weighting for correlation computation.

<a id="input_3"></a>
### absoluteValue (Pin 3)

- **Required:** Yes
- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

If true, correlation factor is ||aMb||/(||aMa||.||bMb||)


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [field](/docs/dpf/dpf-framework/operator-specifications/math/correlation) |[`field`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
|  **1**| [index](/docs/dpf/dpf-framework/operator-specifications/math/correlation) |[`int32`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |


<a id="output_0"></a>
### field (Pin 0)

- **Expected type(s):** [`field`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

Correlation factor for each input field b.

<a id="output_1"></a>
### index (Pin 1)

- **Expected type(s):** [`int32`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

If several b are provided, this output contains the index of the highest correlation factor.


## Configurations

This operator supports [configuration options](/docs/dpf/dpf-framework/core-concepts/operator-configurations) that modify its behavior.


### [mutex](/docs/dpf/dpf-framework/core-concepts/operator-configurations)

- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/core-concepts/dpf-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: math

 **Plugin**: core

 **Scripting name**: correlation

 **Full name**: math.correlation

 **Internal name**: correlation

 **License**: any_dpf_supported_increments

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("correlation"); // operator instantiation
op.connect(0, my_fieldA);
op.connect(1, my_fieldB);
op.connect(2, my_weights);
op.connect(3, my_absoluteValue);
ansys::dpf::Field my_field = op.getOutput<ansys::dpf::Field>(0);
int my_index = op.getOutput<int>(1);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.math.correlation() # operator instantiation
op.inputs.fieldA.connect(my_fieldA)
op.inputs.fieldB.connect(my_fieldB)
op.inputs.weights.connect(my_weights)
op.inputs.absoluteValue.connect(my_absoluteValue)
my_field = op.outputs.field()
my_index = op.outputs.index()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.math.correlation() # operator instantiation
op.inputs.fieldA.Connect(my_fieldA)
op.inputs.fieldB.Connect(my_fieldB)
op.inputs.weights.Connect(my_weights)
op.inputs.absoluteValue.Connect(my_absoluteValue)
my_field = op.outputs.field.GetData()
my_index = op.outputs.index.GetData()
```
</details>
<br />

## Changelog

- Version 0.0.0: Initial release.