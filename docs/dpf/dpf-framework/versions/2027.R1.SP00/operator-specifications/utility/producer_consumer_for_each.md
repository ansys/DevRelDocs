---
category: utility
plugin: core
license: None
---

# utility:producer consumer for each

**Version: 0.0.0**

## Description

Allows to write a loop over operators by connecting data to iterate and by requesting the incrementally output merged.The chain of Operators are split into a first part: the producers and a second part: the consumers. These 2 parts will run asynchronously on 2 threads.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [producer_consumer_iterableq](#input_0) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>| |
| <strong>3</strong> | [forward](#input_3) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>| |


<a id="input_0"></a>
### producer_consumer_iterableq (Pin 0)

- **Required:** Yes
- **Expected type(s):** 

The result of the make_producer_consumer_for_each_iterator operator.

<a id="input_3"></a>
### forward (Pin 3)

- **Required:** Yes
- **Expected type(s):** 

output of the last operators of the workflow


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [empty](#output_0) | |
|  **3**| [output](#output_3) | |


<a id="output_0"></a>
### empty (Pin 0)

- **Expected type(s):** 



<a id="output_3"></a>
### output (Pin 3)

- **Expected type(s):** 




## Configurations

This operator supports [configuration options](../../core-concepts/operator-configurations.md) that modify its behavior.


### [evaluate_inputs_before_run](../../core-concepts/operator-configurations.md#evaluate_inputs_before_run)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, all input pins of the operator will be evaluated before entering the run method to maintain a correct Operator status.

### [mutex](../../core-concepts/operator-configurations.md#mutex)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: utility

 **Plugin**: core

 **Scripting name**: producer_consumer_for_each

 **Full name**: utility.producer_consumer_for_each

 **Internal name**: producer_consumer_for_each

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("producer_consumer_for_each"); // operator instantiation
op.connect(0, my_producer_consumer_iterableq);
op.connect(3, my_forward);
 my_empty = op.getOutput<>(0);
 my_output = op.getOutput<>(3);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.utility.producer_consumer_for_each() # operator instantiation
op.inputs.producer_consumer_iterableq.connect(my_producer_consumer_iterableq)
op.inputs.forward1.connect(my_forward1)
op.inputs.forward2.connect(my_forward2)
my_empty = op.outputs.empty()
my_output = op.outputs.output()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.utility.producer_consumer_for_each() # operator instantiation
op.inputs.producer_consumer_iterableq.Connect(my_producer_consumer_iterableq)
op.inputs.forward.Connect(my_forward)
my_empty = op.outputs.empty.GetData()
my_output = op.outputs.output.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.