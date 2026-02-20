---
category: utility
plugin: core
license: None
---

# utility:txt file to dpf

**Version: 0.0.0**

## Description

Take an input string and parse it into dataProcessing type

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [input_string](#input_0) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`string`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_0"></a>
### input_string (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`string`](../../core-concepts/dpf-types.md#standard-types)

ex: 'double:1.0', 'int:1', 'vector<double>:1.0;1.0'


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [any_output](#output_0) | |


<a id="output_0"></a>
### any_output (Pin 0)

- **Expected type(s):** 

any output


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

 **Scripting name**: txt_file_to_dpf

 **Full name**: utility.txt_file_to_dpf

 **Internal name**: text_parser

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("text_parser"); // operator instantiation
op.connect(0, my_input_string);
 my_any_output = op.getOutput<>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.utility.txt_file_to_dpf() # operator instantiation
op.inputs.input_string.connect(my_input_string)
my_any_output = op.outputs.any_output()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.utility.txt_file_to_dpf() # operator instantiation
op.inputs.input_string.Connect(my_input_string)
my_any_output = op.outputs.any_output.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.