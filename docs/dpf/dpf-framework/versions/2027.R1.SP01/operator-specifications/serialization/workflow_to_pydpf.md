---
category: serialization
plugin: core
license: None
---

# serialization:workflow to pydpf

**Version: 0.0.0**

## Description

Generates a PyDPF script that can recreate the given workflow.
The script is returned as a string, and can optionally be saved to a specified path.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [workflow](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/serialization/workflow_to_pydpf) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`workflow`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types) |
| <strong>1</strong> | [output_path](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/serialization/workflow_to_pydpf) |  |[`string`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types) |


<a id="input_0"></a>
### workflow (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`workflow`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)



<a id="input_1"></a>
### output_path (Pin 1)

- **Required:** No
- **Expected type(s):** [`string`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)




## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [pydpf_code](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/serialization/workflow_to_pydpf) |[`string`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types) |


<a id="output_0"></a>
### pydpf_code (Pin 0)

- **Expected type(s):** [`string`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)




## Configurations

This operator supports [configuration options](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/operator-configurations) that modify its behavior.


### [mutex](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/operator-configurations)

- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: serialization

 **Plugin**: core

 **Scripting name**: None

 **Full name**: None

 **Internal name**: workflow_to_pydpf

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("workflow_to_pydpf"); // operator instantiation
op.connect(0, my_workflow);
op.connect(1, my_output_path);
std::string my_pydpf_code = op.getOutput<std::string>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.serialization.None() # operator instantiation
op.inputs.workflow.connect(my_workflow)
op.inputs.output_path.connect(my_output_path)
my_pydpf_code = op.outputs.pydpf_code()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.serialization.None() # operator instantiation
op.inputs.workflow.Connect(my_workflow)
op.inputs.output_path.Connect(my_output_path)
my_pydpf_code = op.outputs.pydpf_code.GetData()
```
</details>
<br />

## Changelog

- Version 0.0.0: Initial release.