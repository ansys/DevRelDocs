---
category: math
plugin: core
license: any_dpf_supported_increments
---

# math:correlation

**Version: 0.0.0**

## Description


Computes the [correlation coefficient](https://en.wikipedia.org/wiki/Pearson_correlation_coefficient)
$\rho(a,b)$ between two fields using an optional [weighting field $M$](https://en.wikipedia.org/wiki/Pearson_correlation_coefficient#Weighted_correlation_coefficient):

$$\rho(a,b) = \frac{\sum_i a_i\,M_i\,b_i}{\sqrt{\sum_i a_i^2\,M_i}\cdot\sqrt{\sum_i b_i^2\,M_i}}$$

The sums run over the intersection of the scopings of $a$, $b$, and $M$.
When no weighting field $M$ is provided, the standard (unweighted) $L^2$ dot product is used.
If a fields container is provided at pin 1, the correlation coefficient is computed independently
for each field in the container against the reference field $a$.


## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [fieldA](#input_0) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`field`](../../core-concepts/dpf-types.md#field), [`double`](../../core-concepts/dpf-types.md#standard-types), [`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>1</strong> | [fieldB](#input_1) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
| <strong>2</strong> | [weights](#input_2) |  |[`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
| <strong>3</strong> | [absoluteValue](#input_3) |  |[`bool`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_0"></a>
### fieldA (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field), [`double`](../../core-concepts/dpf-types.md#standard-types), [`vector<double>`](../../core-concepts/dpf-types.md#standard-types)

Reference field $a$.

<a id="input_1"></a>
### fieldB (Pin 1)

- **Required:** Yes
- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

Field $b$, or a fields container. When a fields container is provided, the correlation is computed independently for each field against the reference field $a$.

<a id="input_2"></a>
### weights (Pin 2)

- **Required:** No
- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

Optional weighting field $M$. When omitted, the standard unweighted $L^2$ inner product is used.

<a id="input_3"></a>
### absoluteValue (Pin 3)

- **Required:** No
- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)

When true, returns $|\rho|$ instead of $\rho$.


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [field](#output_0) |[`field`](../../core-concepts/dpf-types.md#field) |
|  **1**| [index](#output_1) |[`int32`](../../core-concepts/dpf-types.md#standard-types) |


<a id="output_0"></a>
### field (Pin 0)

- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)

Correlation coefficient for each input field $b$. The output field contains one entity per input field, labelled from $1$ to $N$.

<a id="output_1"></a>
### index (Pin 1)

- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)

Zero-based index of the field in the input fields container that produced the highest correlation coefficient. Only meaningful when pin 1 receives a fields container.


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
<br>

## Changelog

- Version 0.0.0: Initial release.