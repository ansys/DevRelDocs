---
category: logic
plugin: core
license: None
---

# logic:same scopings?

**Version: 0.0.0**

## Description

Check if two scopings are identical.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [scopingA](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/logic/identical_scopings) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`scoping`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types) |
| <strong>1</strong> | [scopingB](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/logic/identical_scopings) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`scoping`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types) |


<a id="input_0"></a>
### scopingA (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`scoping`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)



<a id="input_1"></a>
### scopingB (Pin 1)

- **Required:** Yes
- **Expected type(s):** [`scoping`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)




## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [boolean](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/logic/identical_scopings) |[`bool`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types) |
|  **1**| [message](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/logic/identical_scopings) |[`string`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types) |


<a id="output_0"></a>
### boolean (Pin 0)

- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)

bool (true if identical...)

<a id="output_1"></a>
### message (Pin 1)

- **Expected type(s):** [`string`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)




## Configurations

This operator supports [configuration options](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/operator-configurations) that modify its behavior.


### [mutex](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/operator-configurations)

- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: logic

 **Plugin**: core

 **Scripting name**: identical_scopings

 **Full name**: logic.identical_scopings

 **Internal name**: compare::scoping

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("compare::scoping"); // operator instantiation
op.connect(0, my_scopingA);
op.connect(1, my_scopingB);
bool my_boolean = op.getOutput<bool>(0);
std::string my_message = op.getOutput<std::string>(1);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.logic.identical_scopings() # operator instantiation
op.inputs.scopingA.connect(my_scopingA)
op.inputs.scopingB.connect(my_scopingB)
my_boolean = op.outputs.boolean()
my_message = op.outputs.message()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.logic.identical_scopings() # operator instantiation
op.inputs.scopingA.Connect(my_scopingA)
op.inputs.scopingB.Connect(my_scopingB)
my_boolean = op.outputs.boolean.GetData()
my_message = op.outputs.message.GetData()
```
</details>
<br />

## Changelog

- Version 0.0.0: Initial release.